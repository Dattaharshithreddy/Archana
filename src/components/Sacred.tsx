import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import type { EmblemKind } from '../data/types';
import { C } from '../lib/theme';
import { Emblem } from './Emblem';

/* ---------------- Mandala ring ---------------- */

export function Mandala({ size, color, petals = 16, opacity = 0.6 }: { size: number; color: string; petals?: number; opacity?: number }) {
  const step = 360 / petals;
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" opacity={opacity}>
      <Circle cx={100} cy={100} r={96} stroke={color} strokeWidth={0.8} fill="none" />
      <Circle cx={100} cy={100} r={90} stroke={color} strokeWidth={0.5} fill="none" strokeDasharray="2 4" />
      {Array.from({ length: petals }).map((_, i) => (
        <Path
          key={`p${i}`}
          d="M100 12 C108 22 108 34 100 42 C92 34 92 22 100 12 Z"
          stroke={color}
          strokeWidth={0.9}
          fill="none"
          transform={`rotate(${i * step} 100 100)`}
        />
      ))}
      {Array.from({ length: petals }).map((_, i) => (
        <Circle key={`d${i}`} cx={100} cy={8} r={1.6} fill={color} transform={`rotate(${i * step + step / 2} 100 100)`} />
      ))}
      <Circle cx={100} cy={100} r={56} stroke={color} strokeWidth={0.6} fill="none" />
    </Svg>
  );
}

/* ---------------- Looping helpers ---------------- */

function useLoop(duration: number, delay = 0) {
  const v = useSharedValue(0);
  useEffect(() => {
    v.value = withDelay(delay, withRepeat(withTiming(1, { duration, easing: Easing.linear }), -1));
  }, [duration, delay, v]);
  return v;
}

function useBreath(duration: number) {
  const v = useSharedValue(0);
  useEffect(() => {
    v.value = withRepeat(
      withSequence(
        withTiming(1, { duration, easing: Easing.inOut(Easing.sin) }),
        withTiming(0, { duration, easing: Easing.inOut(Easing.sin) }),
      ),
      -1,
    );
  }, [duration, v]);
  return v;
}

/* ---------------- Divine aura: the deity "darshan" animation ---------------- */

export function DivineAura({
  emblem,
  accent,
  size = 260,
  sparks = true,
}: {
  emblem: EmblemKind;
  accent: string;
  size?: number;
  sparks?: boolean;
}) {
  const outer = useLoop(60000);
  const inner = useLoop(38000);
  const breath = useBreath(2600);

  const outerStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${outer.value * 360}deg` }] }));
  const innerStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${-inner.value * 360}deg` }] }));
  const haloStyle = useAnimatedStyle(() => ({
    opacity: 0.35 + breath.value * 0.35,
    transform: [{ scale: 0.92 + breath.value * 0.12 }],
  }));
  const floatStyle = useAnimatedStyle(() => ({ transform: [{ translateY: -6 + breath.value * 12 }] }));

  const abs = { position: 'absolute' as const };
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={[abs, haloStyle]}>
        <View
          style={{
            width: size * 0.78,
            height: size * 0.78,
            borderRadius: size,
            backgroundColor: accent,
            opacity: 0.22,
            shadowColor: accent,
            shadowOpacity: 0.9,
            shadowRadius: 40,
          }}
        />
      </Animated.View>
      <Animated.View style={[abs, outerStyle]}>
        <Mandala size={size} color={C.gold} petals={24} opacity={0.55} />
      </Animated.View>
      <Animated.View style={[abs, innerStyle]}>
        <Mandala size={size * 0.74} color={accent} petals={12} opacity={0.7} />
      </Animated.View>
      {sparks && <Sparks size={size} color={accent} />}
      <Animated.View style={floatStyle}>
        <Emblem kind={emblem} size={size * 0.5} accent={accent} />
      </Animated.View>
    </View>
  );
}

/* ---------------- Rising sparks around the aura ---------------- */

function Spark({ x, size, delay, color, travel }: { x: number; size: number; delay: number; color: string; travel: number }) {
  const t = useLoop(3600 + (delay % 1700), delay);
  const style = useAnimatedStyle(() => ({
    opacity: t.value < 0.15 ? t.value / 0.15 : 1 - (t.value - 0.15) / 0.85,
    transform: [{ translateY: -t.value * travel }, { translateX: Math.sin(t.value * 6.28) * 6 }],
  }));
  return (
    <Animated.View
      style={[
        { position: 'absolute', left: x, bottom: 0, width: size, height: size, borderRadius: size, backgroundColor: color, shadowColor: color, shadowOpacity: 1, shadowRadius: 6 },
        style,
      ]}
    />
  );
}

export function Sparks({ size, color, count = 10 }: { size: number; color: string; count?: number }) {
  const seeds = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        x: size * 0.15 + ((i * 37) % 70) / 100 * size,
        s: 2 + (i % 3),
        d: i * 430,
      })),
    [size, count],
  );
  return (
    <View pointerEvents="none" style={{ position: 'absolute', width: size, height: size * 0.85, bottom: size * 0.08 }}>
      {seeds.map((p, i) => (
        <Spark key={i} x={p.x} size={p.s} delay={p.d} color={i % 2 ? C.goldSoft : color} travel={size * 0.7} />
      ))}
    </View>
  );
}

/* ---------------- Screen backdrop ---------------- */

export function Backdrop({ top = C.bg2, mid = C.bg1, embers = true }: { top?: string; mid?: string; embers?: boolean }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient colors={[top, mid, C.bg0]} locations={[0, 0.45, 1]} style={StyleSheet.absoluteFill} />
      <View style={{ position: 'absolute', top: -width * 0.35, left: -width * 0.2, opacity: 0.08 }}>
        <Mandala size={width * 1.4} color={C.gold} petals={32} opacity={1} />
      </View>
      {embers && (
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <Spark key={i} x={((i * 53) % 100) / 100 * width} size={1.5 + (i % 3)} delay={i * 900} color={i % 3 ? C.gold : C.saffron} travel={height * 0.9} />
          ))}
        </View>
      )}
    </View>
  );
}

/* ---------------- Diya (oil lamp) ---------------- */

export function Diya({ size = 44 }: { size?: number }) {
  const flick = useSharedValue(0);
  useEffect(() => {
    flick.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 180 }),
        withTiming(0.3, { duration: 140 }),
        withTiming(0.8, { duration: 220 }),
        withTiming(0, { duration: 200 }),
      ),
      -1,
    );
  }, [flick]);
  const flame = useAnimatedStyle(() => ({
    transform: [{ scaleY: 0.9 + flick.value * 0.18 }, { scaleX: 1 - flick.value * 0.08 }, { rotate: `${(flick.value - 0.5) * 6}deg` }],
  }));
  const glow = useAnimatedStyle(() => ({ opacity: 0.4 + flick.value * 0.3 }));
  const w = size;
  return (
    <View style={{ width: w, height: w * 1.1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <Animated.View
        style={[{ position: 'absolute', top: 0, width: w * 0.9, height: w * 0.9, borderRadius: w, backgroundColor: C.saffron, shadowColor: C.saffron, shadowOpacity: 1, shadowRadius: 18 }, glow]}
      />
      <Animated.View style={[{ position: 'absolute', top: w * 0.06, transformOrigin: 'bottom' }, flame]}>
        <Svg width={w * 0.34} height={w * 0.6} viewBox="0 0 20 34">
          <Path d="M10 0 C14 10 19 16 19 23 C19 29 15 34 10 34 C5 34 1 29 1 23 C1 16 6 10 10 0 Z" fill="#FFB547" />
          <Path d="M10 10 C12 16 15 19 15 24 C15 28 13 31 10 31 C7 31 5 28 5 24 C5 19 8 16 10 10 Z" fill="#FFF3C4" />
        </Svg>
      </Animated.View>
      <Svg width={w} height={w * 0.42} viewBox="0 0 60 25">
        <Path d="M2 4 C6 20 20 24 30 24 C40 24 54 20 58 4 C46 9 14 9 2 4 Z" fill={C.gold} />
        <Path d="M2 4 C14 9 46 9 58 4" stroke="#FFF0BF" strokeWidth={1.4} fill="none" />
        <Path d="M30 7 L28 2 L32 2 Z" fill="#5A2A0A" />
      </Svg>
    </View>
  );
}

/* ---------------- Falling flower petals (celebration) ---------------- */

function Petal({ x, delay, color, height }: { x: number; delay: number; color: string; height: number }) {
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withDelay(delay, withTiming(1, { duration: 3200 + (delay % 900), easing: Easing.in(Easing.quad) }));
  }, [delay, t]);
  const s = useAnimatedStyle(() => ({
    opacity: t.value > 0.85 ? (1 - t.value) / 0.15 : Math.min(1, t.value * 6),
    transform: [
      { translateY: t.value * height },
      { translateX: Math.sin(t.value * 9 + x) * 22 },
      { rotate: `${t.value * 540}deg` },
    ],
  }));
  return (
    <Animated.View style={[{ position: 'absolute', top: -20, left: x }, s]}>
      <Svg width={14} height={18} viewBox="0 0 14 18">
        <Path d="M7 0 C13 5 13 13 7 18 C1 13 1 5 7 0 Z" fill={color} />
      </Svg>
    </Animated.View>
  );
}

export function PetalShower({ trigger }: { trigger: number }) {
  const { width, height } = useWindowDimensions();
  if (!trigger) return null;
  const colors = ['#FF9EC4', '#F28C28', '#E8B84A', '#FF5A5F', '#FFE3EE'];
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill} key={trigger}>
      {Array.from({ length: 26 }).map((_, i) => (
        <Petal key={i} x={((i * 41) % 100) / 100 * width} delay={(i * 137) % 1400} color={colors[i % colors.length]} height={height + 40} />
      ))}
    </View>
  );
}
