import * as Haptics from 'expo-haptics';
import { useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

import { Emblem } from '../components/Emblem';
import { Backdrop, Mandala, PetalShower } from '../components/Sacred';
import { Dock, Header, Press } from '../components/UI';
import { DEITIES, deityById } from '../data';
import { useStore } from '../lib/store';
import { C, F } from '../lib/theme';
import { transliterate } from '../lib/translit';

const BEADS = 108;

export default function Japa() {
  const params = useLocalSearchParams<{ deity?: string; mantra?: string }>();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const store = useStore();

  const initialDeity = deityById(params.deity ?? '') ?? DEITIES[1];
  const [deityId, setDeityId] = useState(initialDeity.id);
  const [custom, setCustom] = useState<string | undefined>(params.mantra);
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [shower, setShower] = useState(0);

  const deity = deityById(deityId)!;
  const mantra = custom ?? deity.japa.te;
  const accent = deity.colors[2];

  const pulse = useSharedValue(1);
  const glow = useSharedValue(0);
  const pulseStyle = useAnimatedStyle(() => ({ transform: [{ scale: pulse.value }] }));
  const glowStyle = useAnimatedStyle(() => ({ opacity: glow.value }));

  const size = Math.min(width - 32, 360);
  const R = size / 2 - 14;
  const beads = useMemo(
    () =>
      Array.from({ length: BEADS }).map((_, i) => {
        const a = ((i + 1.6) / (BEADS + 2.2)) * Math.PI * 2 - Math.PI / 2;
        return { x: size / 2 + Math.cos(a) * R, y: size / 2 + Math.sin(a) * R };
      }),
    [size, R],
  );

  const onBead = () => {
    pulse.value = withSequence(withTiming(0.94, { duration: 70 }), withSpring(1, { damping: 8, stiffness: 260 }));
    glow.value = withSequence(withTiming(0.9, { duration: 80 }), withTiming(0, { duration: 600 }));
    store.addJapa(1);
    const next = count + 1;
    if (next >= BEADS) {
      setCount(0);
      setRounds((r) => r + 1);
      setShower((s) => s + 1);
      if (store.haptics && Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    } else {
      setCount(next);
      if (store.haptics && Platform.OS !== 'web') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg0 }}>
      <Backdrop top={deity.colors[0]} mid={deity.colors[1]} embers={false} />
      <Header title={{ te: 'జపమాల', en: 'Japa Mala' }} />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 120 }} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingVertical: 6 }}>
          {DEITIES.map((d) => {
            const on = d.id === deityId && !custom;
            return (
              <Press
                key={d.id}
                onPress={() => {
                  setDeityId(d.id);
                  setCustom(undefined);
                  setCount(0);
                }}
                style={[s.chip, on && { backgroundColor: d.colors[2], borderColor: d.colors[2] }]}
              >
                <Text style={[s.chipTxt, on && { color: C.bg0 }]}>{d.name.te.replace('శ్రీ ', '')}</Text>
              </Press>
            );
          })}
        </ScrollView>

        <Pressable onPress={onBead} accessibilityRole="button" accessibilityLabel={`Count bead. ${count} of 108`} style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: size, height: size }}>
            <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center', opacity: 0.35 }]}>
              <Mandala size={size * 0.78} color={accent} petals={16} opacity={1} />
            </View>
            <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
              <Circle cx={size / 2} cy={14} r={11} fill={C.kumkum} stroke={C.goldSoft} strokeWidth={2} />
              {beads.map((b, i) => {
                const done = i < count;
                const current = i === count;
                return (
                  <Circle
                    key={i}
                    cx={b.x}
                    cy={b.y}
                    r={current ? 7.5 : 4.6}
                    fill={done ? C.gold : current ? '#FFF6D5' : 'rgba(150,90,40,0.55)'}
                    stroke={current ? accent : 'none'}
                    strokeWidth={current ? 3 : 0}
                  />
                );
              })}
            </Svg>
            <Animated.View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, pulseStyle]}>
              <Animated.View style={[s.glow, { backgroundColor: accent, width: size * 0.62, height: size * 0.62 }, glowStyle]} />
              <Emblem kind={deity.emblem} size={size * 0.3} accent={accent} />
              <Text style={s.count}>{count}</Text>
              <Text style={s.of}>/ 108</Text>
            </Animated.View>
          </View>
        </Pressable>

        <Text style={s.mantra}>{mantra}</Text>
        <Text style={s.tr}>{transliterate(mantra)}</Text>
        <Text style={s.hint}>మాలపై ఎక్కడైనా తాకండి · Tap the mala for each chant</Text>

        <View style={s.stats}>
          <View style={s.stat}>
            <Text style={s.statNum}>{rounds}</Text>
            <Text style={s.statLbl}>మాలలు · Rounds</Text>
          </View>
          <View style={s.stat}>
            <Text style={s.statNum}>{rounds * BEADS + count}</Text>
            <Text style={s.statLbl}>ఈ సారి · Session</Text>
          </View>
          <View style={s.stat}>
            <Text style={s.statNum}>{store.japaTotal}</Text>
            <Text style={s.statLbl}>మొత్తం · Lifetime</Text>
          </View>
        </View>
        <Press
          onPress={() => {
            setCount(0);
            setRounds(0);
          }}
          style={s.reset}
        >
          <Text style={s.resetTxt}>మళ్ళీ మొదలు · Reset</Text>
        </Press>
      </ScrollView>
      <PetalShower trigger={shower} />
      <Dock />
    </View>
  );
}

const s = StyleSheet.create({
  chip: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 18, borderWidth: 1, borderColor: C.line, backgroundColor: 'rgba(0,0,0,0.25)' },
  chipTxt: { fontFamily: F.teSerif, color: C.goldSoft, fontSize: 13, lineHeight: 22 },
  glow: { position: 'absolute', borderRadius: 999 },
  count: { fontFamily: F.titleBold, color: C.cream, fontSize: 44, marginTop: 4 },
  of: { fontFamily: F.title, color: C.faint, fontSize: 12, letterSpacing: 2 },
  mantra: { fontFamily: F.te, color: C.goldSoft, fontSize: 25, lineHeight: 44, textAlign: 'center', marginTop: 18, paddingHorizontal: 20 },
  tr: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 18, textAlign: 'center', paddingHorizontal: 20 },
  hint: { fontFamily: F.teSerif, color: C.faint, fontSize: 11.5, lineHeight: 20, textAlign: 'center', marginTop: 10 },
  stats: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 22, paddingHorizontal: 16 },
  stat: { flex: 1, alignItems: 'center', paddingVertical: 12, borderRadius: 18, backgroundColor: C.card, borderWidth: 1, borderColor: C.line },
  statNum: { fontFamily: F.titleBold, color: C.gold, fontSize: 22 },
  statLbl: { fontFamily: F.teSerif, color: C.muted, fontSize: 11, lineHeight: 20 },
  reset: { alignSelf: 'center', marginTop: 16, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 18, borderWidth: 1, borderColor: C.line },
  resetTxt: { fontFamily: F.teSerif, color: C.goldSoft, fontSize: 13, lineHeight: 22 },
});
