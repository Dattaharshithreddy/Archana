import * as Haptics from 'expo-haptics';
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import type { Deity } from '../../data/types';
import { playSfx, type Sfx } from '../../lib/sfx';
import { C, F } from '../../lib/theme';
import {
  AyyappaSteps,
  DurgaStrike,
  GaneshaCurtain,
  HanumanLeap,
  KrishnaFeathers,
  LakshmiLotus,
  RamaArrow,
  SaraswatiSwan,
  ShivaThirdEye,
  SubrahmanyaVel,
  SuryaSunrise,
  TirumalaDoors,
  VishnuOcean,
  type SceneProps,
} from './scenes';
import { Tw } from './Tw';

type Cue = { at: number; sfx?: Sfx; haptic?: 'light' | 'heavy' };

/** Each deity's opening ceremony: the scene, its sound/haptic cues (as fractions of the timeline) and a caption. */
const SCENES: Record<string, { Scene: (p: SceneProps) => React.JSX.Element; cues: Cue[]; caption: { te: string; en: string } }> = {
  venkateswara: {
    Scene: TirumalaDoors,
    cues: [{ at: 0.02, sfx: 'bell' }, { at: 0.2, haptic: 'heavy' }, { at: 0.5, sfx: 'conch' }],
    caption: { te: 'బంగారు వాకిలి తెరుచుకుంది', en: 'The golden doors of Tirumala open' },
  },
  shiva: {
    Scene: ShivaThirdEye,
    cues: [{ at: 0.02, sfx: 'damaru' }, { at: 0.44, haptic: 'heavy', sfx: 'bell' }],
    caption: { te: 'కైలాసంలో మూడవ కన్ను తెరుచుకుంది', en: 'The third eye opens on Kailash' },
  },
  vishnu: {
    Scene: VishnuOcean,
    cues: [{ at: 0.05, sfx: 'conch' }, { at: 0.55, haptic: 'light' }],
    caption: { te: 'క్షీరసాగరం నుండి సుదర్శన చక్రం', en: 'Sudarshana rises over the ocean of milk' },
  },
  ganesha: {
    Scene: GaneshaCurtain,
    cues: [{ at: 0.12, sfx: 'bell' }, { at: 0.62, haptic: 'light' }, { at: 0.68, haptic: 'light' }, { at: 0.74, haptic: 'light' }],
    caption: { te: 'విఘ్నేశ్వరుని తెర తొలగింది', en: 'The curtain parts for Vighneshwara' },
  },
  rama: {
    Scene: RamaArrow,
    cues: [{ at: 0.26, sfx: 'arrow', haptic: 'heavy' }, { at: 0.55, sfx: 'bell' }],
    caption: { te: 'కోదండం నుండి రామబాణం', en: 'Rama’s arrow leaves the Kodanda' },
  },
  krishna: {
    Scene: KrishnaFeathers,
    cues: [{ at: 0.05, sfx: 'flute' }],
    caption: { te: 'వేణుగానం వినిపిస్తోంది', en: 'The flute calls from Brindavan' },
  },
  hanuman: {
    Scene: HanumanLeap,
    cues: [{ at: 0.05, sfx: 'conch' }, { at: 0.62, sfx: 'drum', haptic: 'heavy' }],
    caption: { te: 'జై హనుమాన్!', en: 'Jai Hanuman!' },
  },
  lakshmi: {
    Scene: LakshmiLotus,
    cues: [{ at: 0.3, sfx: 'bell' }, { at: 0.5, haptic: 'light' }],
    caption: { te: 'పద్మంలో మహాలక్ష్మి ఆగమనం', en: 'Mahalakshmi arrives on the lotus' },
  },
  saraswati: {
    Scene: SaraswatiSwan,
    cues: [{ at: 0.1, sfx: 'veena' }],
    caption: { te: 'వీణా నాదం', en: 'The sound of the veena' },
  },
  durga: {
    Scene: DurgaStrike,
    cues: [{ at: 0.26, sfx: 'drum', haptic: 'heavy' }, { at: 0.6, sfx: 'bell' }],
    caption: { te: 'జయ జయ హే మహిషాసురమర్దిని', en: 'Victory to the slayer of Mahisha' },
  },
  subrahmanya: {
    Scene: SubrahmanyaVel,
    cues: [{ at: 0.05, sfx: 'conch' }, { at: 0.36, haptic: 'light' }],
    caption: { te: 'వేలాయుధుని దర్శనం', en: 'Darshan of the Lord of the Vel' },
  },
  ayyappa: {
    Scene: AyyappaSteps,
    cues: [{ at: 0.05, sfx: 'bell' }, { at: 0.7, sfx: 'conch', haptic: 'heavy' }],
    caption: { te: 'స్వామియే శరణం అయ్యప్ప', en: 'Pathinettam Padi and Makara Jyothi' },
  },
  surya: {
    Scene: SuryaSunrise,
    cues: [{ at: 0.1, sfx: 'conch' }],
    caption: { te: 'సూర్యోదయం', en: 'Sunrise' },
  },
};

const DURATION = 4200;

export function hasIntro(deityId: string) {
  return deityId in SCENES;
}

export function DeityIntro({ deity, sound, haptics, onDone }: { deity: Deity; sound: boolean; haptics: boolean; onDone: () => void }) {
  const { width: w, height: h } = useWindowDimensions();
  const t = useSharedValue(0);
  const fade = useSharedValue(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [gone, setGone] = useState(false);
  const spec = SCENES[deity.id];

  const finish = () => {
    timers.current.forEach(clearTimeout);
    fade.value = withTiming(0, { duration: 450 }, (ok) => {
      if (ok) runOnJS(close)();
    });
  };
  const close = () => {
    setGone(true);
    onDone();
  };

  useEffect(() => {
    if (!spec) {
      onDone();
      return;
    }
    t.value = withTiming(1, { duration: DURATION, easing: Easing.linear }, (ok) => {
      if (ok) runOnJS(finish)();
    });
    timers.current = spec.cues.map((c) =>
      setTimeout(() => {
        if (c.sfx && sound) playSfx(c.sfx);
        if (c.haptic && haptics && Platform.OS !== 'web') {
          Haptics.impactAsync(c.haptic === 'heavy' ? Haptics.ImpactFeedbackStyle.Heavy : Haptics.ImpactFeedbackStyle.Light).catch(() => {});
        }
      }, c.at * DURATION),
    );
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wrap = useAnimatedStyle(() => ({ opacity: fade.value }));
  if (!spec || gone) return null;
  const { Scene } = spec;

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { zIndex: 100, backgroundColor: C.bg0, overflow: 'hidden' }, wrap]}>
      <Pressable style={StyleSheet.absoluteFill} onPress={finish} accessibilityRole="button" accessibilityLabel="Skip opening">
        <Scene t={t} w={w} h={h} accent={deity.colors[2]} />
        <Tw t={t} at={[0.62, 0.78]} from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} style={styles.captionWrap}>
          <Text style={styles.name}>{deity.name.te}</Text>
          <Text style={styles.chant}>{deity.japa.te}</Text>
          <Text style={styles.cap}>{spec.caption.te} · {spec.caption.en}</Text>
        </Tw>
        <Text style={styles.skip}>తాకితే దాటవేయి · Tap to skip</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  captionWrap: { position: 'absolute', left: 20, right: 20, bottom: 90, alignItems: 'center' },
  name: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 30, lineHeight: 50, textAlign: 'center', textShadowColor: 'rgba(0,0,0,0.8)', textShadowRadius: 12 },
  chant: { fontFamily: F.te, color: C.cream, fontSize: 20, lineHeight: 34, textAlign: 'center', textShadowColor: 'rgba(0,0,0,0.8)', textShadowRadius: 10 },
  cap: { fontFamily: F.teSerif, color: C.muted, fontSize: 12, lineHeight: 20, marginTop: 6, textAlign: 'center' },
  skip: { position: 'absolute', bottom: 40, alignSelf: 'center', fontFamily: F.teSerif, color: C.faint, fontSize: 11, lineHeight: 18 },
});
