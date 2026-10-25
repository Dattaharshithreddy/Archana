import * as Haptics from 'expo-haptics';
import React, { useEffect } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  cancelAnimation,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import type { Deity } from '../data/types';
import { C, F } from '../lib/theme';
import { DivineAura, Diya, PetalShower } from './Sacred';
import { CloseIcon } from './Icons';

const ring = () => {
  if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
};

/** Full-screen aarti: a camphor lamp circles the deity while petals fall and the "bell" rings each round. */
export function Harathi({ visible, onClose, deity, haptics }: { visible: boolean; onClose: () => void; deity: Deity; haptics: boolean }) {
  const t = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      t.value = 0;
      t.value = withRepeat(withTiming(1, { duration: 3200, easing: Easing.inOut(Easing.sin) }), -1, false);
    } else {
      cancelAnimation(t);
    }
  }, [visible, t]);

  useAnimatedReaction(
    () => t.value > 0.98,
    (now, prev) => {
      if (now && !prev && haptics) runOnJS(ring)();
    },
  );

  const R = 130;
  const orbit = useAnimatedStyle(() => {
    // clockwise circle, starting at the bottom like a real aarti
    const a = Math.PI / 2 + t.value * Math.PI * 2;
    return { transform: [{ translateX: Math.cos(a) * R }, { translateY: Math.sin(a) * R * 1.05 }] };
  });

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
      <View style={styles.bg}>
        <Animated.View entering={FadeIn.duration(600)} style={styles.center}>
          <DivineAura emblem={deity.emblem} accent={deity.colors[2]} size={280} />
          <Animated.View style={[styles.lamp, orbit]}>
            <Diya size={70} />
          </Animated.View>
        </Animated.View>
        <Text style={styles.te}>మంగళ హారతి</Text>
        <Text style={styles.en}>Aarti · {deity.name.en}</Text>
        <Text style={styles.chant}>{deity.japa.te}</Text>
        <PetalShower trigger={visible ? 1 : 0} />
        <Pressable onPress={onClose} accessibilityLabel="Close aarti" style={styles.close}>
          <CloseIcon />
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: 'rgba(8,2,6,0.94)', alignItems: 'center', justifyContent: 'center' },
  center: { width: 320, height: 320, alignItems: 'center', justifyContent: 'center' },
  lamp: { position: 'absolute' },
  te: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 24, lineHeight: 40, marginTop: 40 },
  en: { fontFamily: F.title, color: C.faint, fontSize: 12, letterSpacing: 2 },
  chant: { fontFamily: F.te, color: C.cream, fontSize: 20, lineHeight: 34, marginTop: 18 },
  close: {
    position: 'absolute',
    top: 56,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: C.line,
  },
});
