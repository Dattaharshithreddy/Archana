import React, { useEffect, useId } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Path, RadialGradient, Rect, Stop } from 'react-native-svg';
import type { EmblemKind } from '../data/types';

type Props = { kind: EmblemKind; size: number; accent: string; animated?: boolean };

/** Hand-drawn sacred symbol for each deity. Spinning symbols (chakra, sun) rotate on the UI thread. */
export function Emblem({ kind, size, accent, animated = true }: Props) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9]/g, '');
  const gold = `url(#gold${id})`;
  const spin = useSharedValue(0);
  const pulse = useSharedValue(0);

  useEffect(() => {
    if (!animated) return;
    if (kind === 'chakra' || kind === 'sun') {
      spin.value = withRepeat(withTiming(360, { duration: kind === 'chakra' ? 9000 : 24000, easing: Easing.linear }), -1);
    }
    pulse.value = withRepeat(
      withSequence(withTiming(1, { duration: 1400, easing: Easing.inOut(Easing.sin) }), withTiming(0, { duration: 1400, easing: Easing.inOut(Easing.sin) })),
      -1,
    );
  }, [animated, kind, spin, pulse]);

  const spinStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${spin.value}deg` }] }));
  const glowStyle = useAnimatedStyle(() => ({ opacity: 0.55 + pulse.value * 0.45, transform: [{ scale: 0.9 + pulse.value * 0.2 }] }));

  const defs = (
    <Defs>
      <LinearGradient id={`gold${id}`} x1="0" y1="0" x2="0.4" y2="1">
        <Stop offset="0" stopColor="#FFF0BF" />
        <Stop offset="0.45" stopColor="#E8B84A" />
        <Stop offset="1" stopColor="#9C5F17" />
      </LinearGradient>
      <RadialGradient id={`glow${id}`} cx="0.5" cy="0.5" r="0.5">
        <Stop offset="0" stopColor="#FFF6D5" stopOpacity="1" />
        <Stop offset="0.35" stopColor={accent} stopOpacity="0.9" />
        <Stop offset="1" stopColor={accent} stopOpacity="0" />
      </RadialGradient>
      <LinearGradient id={`pink${id}`} x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor="#FFE3EE" />
        <Stop offset="0.6" stopColor="#F27AA8" />
        <Stop offset="1" stopColor="#B83268" />
      </LinearGradient>
    </Defs>
  );

  const body = (() => {
    switch (kind) {
      case 'modak':
        return (
          <G>
            <Ellipse cx={100} cy={160} rx={66} ry={13} fill={gold} opacity={0.9} />
            <Ellipse cx={100} cy={157} rx={58} ry={8} fill="#5A2A0A" opacity={0.5} />
            <Path d="M100 42 C113 70 142 92 142 124 C142 146 123 157 100 157 C77 157 58 146 58 124 C58 92 87 70 100 42 Z" fill={gold} />
            {[-26, -12, 0, 12, 26].map((dx, i) => (
              <Path key={i} d={`M100 46 Q${100 + dx * 0.55} 100 ${100 + dx * 1.45} 154`} stroke="#8A4E12" strokeWidth={2} fill="none" opacity={0.65} />
            ))}
            <Circle cx={100} cy={40} r={6} fill="#FFF0BF" />
            <Path d="M78 112 Q100 120 122 112" stroke="#FFF6D5" strokeWidth={2} fill="none" opacity={0.6} />
          </G>
        );
      case 'trishul':
        return (
          <G>
            <Path d="M52 34 A20 20 0 1 0 72 66 A15 15 0 1 1 52 34 Z" fill="#E6EEFF" opacity={0.9} />
            <Rect x={96} y={50} width={8} height={138} rx={3} fill={gold} />
            <Path d="M100 14 L110 42 L100 62 L90 42 Z" fill={gold} />
            <Path d="M96 82 C66 80 58 58 62 30 C68 50 80 62 96 64 Z" fill={gold} />
            <Path d="M104 82 C134 80 142 58 138 30 C132 50 120 62 104 64 Z" fill={gold} />
            <Rect x={84} y={78} width={32} height={8} rx={4} fill="#FFF0BF" />
            <Path d="M80 108 L120 108 L104 124 L120 140 L80 140 L96 124 Z" fill="#C9D8FF" opacity={0.95} />
            <Line x1={80} y1={108} x2={120} y2={108} stroke={gold} strokeWidth={3} />
            <Line x1={80} y1={140} x2={120} y2={140} stroke={gold} strokeWidth={3} />
            <Path d="M120 124 Q140 128 146 146" stroke="#FF6B6B" strokeWidth={3} fill="none" strokeLinecap="round" />
          </G>
        );
      case 'chakra':
        return (
          <G>
            {Array.from({ length: 24 }).map((_, i) => (
              <Path key={i} d="M100 18 L106 34 L94 34 Z" fill={gold} transform={`rotate(${i * 15} 100 100)`} />
            ))}
            <Circle cx={100} cy={100} r={66} stroke={gold} strokeWidth={9} fill="none" />
            <Circle cx={100} cy={100} r={54} stroke="#FFF0BF" strokeWidth={1.5} fill="none" opacity={0.6} />
            {Array.from({ length: 12 }).map((_, i) => (
              <Path key={i} d="M100 100 L97 52 Q100 46 103 52 Z" fill={gold} transform={`rotate(${i * 30} 100 100)`} />
            ))}
            <Circle cx={100} cy={100} r={16} fill={gold} />
            <Circle cx={100} cy={100} r={7} fill="#FFF6D5" />
          </G>
        );
      case 'namam':
        return (
          <G>
            <Path d="M48 74 Q100 28 152 74" stroke={gold} strokeWidth={5} fill="none" strokeLinecap="round" />
            <Path d="M66 44 L66 124 Q66 164 100 164 Q134 164 134 124 L134 44" stroke="#FFFFFF" strokeWidth={16} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M100 42 L100 150" stroke="#E0262F" strokeWidth={12} strokeLinecap="round" />
            <Path d="M100 42 L100 150" stroke="#FF9A3C" strokeWidth={4} strokeLinecap="round" opacity={0.7} />
            <Circle cx={100} cy={178} r={6} fill={gold} />
          </G>
        );
      case 'bow':
        return (
          <G>
            <Path d="M66 22 Q152 100 66 178" stroke={gold} strokeWidth={9} fill="none" strokeLinecap="round" />
            <Line x1={66} y1={22} x2={66} y2={178} stroke="#FFF6D5" strokeWidth={1.8} />
            <Line x1={34} y1={100} x2={160} y2={100} stroke={gold} strokeWidth={5} strokeLinecap="round" />
            <Path d="M176 100 L152 88 L156 100 L152 112 Z" fill="#FFF0BF" />
            <Path d="M34 100 L22 90 M34 100 L22 110 M44 100 L32 90 M44 100 L32 110" stroke={accent} strokeWidth={3} strokeLinecap="round" />
            <Circle cx={106} cy={100} r={6} fill="#FFF0BF" />
          </G>
        );
      case 'flute':
        return (
          <G>
            <Path d="M128 128 Q138 90 150 44" stroke="#2E7D5B" strokeWidth={3} fill="none" />
            {Array.from({ length: 14 }).map((_, i) => {
              const t = i / 13;
              const y = 120 - t * 80;
              const x = 130 + t * 18;
              return <Path key={i} d={`M${x} ${y} q-22 -6 -30 -20 M${x} ${y} q22 -6 30 -20`} stroke="#43B98A" strokeWidth={1.4} fill="none" opacity={0.75} />;
            })}
            <Ellipse cx={150} cy={44} rx={22} ry={30} fill="#1B8F6A" />
            <Ellipse cx={150} cy={46} rx={15} ry={21} fill="#2BC0AE" />
            <Ellipse cx={150} cy={48} rx={9} ry={13} fill="#E8B84A" />
            <Ellipse cx={150} cy={50} rx={5} ry={7.5} fill="#1E3A8A" />
            <G transform="rotate(-28 100 120)">
              <Rect x={22} y={112} width={160} height={14} rx={7} fill={gold} />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Circle key={i} cx={78 + i * 15} cy={119} r={2.8} fill="#5A3208" />
              ))}
              <Rect x={36} y={111} width={6} height={16} fill="#C8283A" />
              <Rect x={164} y={111} width={6} height={16} fill="#C8283A" />
            </G>
          </G>
        );
      case 'gada':
        return (
          <G>
            <Rect x={94} y={96} width={12} height={84} rx={4} fill={gold} />
            {[124, 138, 152].map((y) => (
              <Rect key={y} x={91} y={y} width={18} height={5} rx={2} fill="#8A4E12" />
            ))}
            <Circle cx={100} cy={186} r={8} fill={gold} />
            <Circle cx={100} cy={64} r={40} fill={gold} />
            <Ellipse cx={100} cy={64} rx={40} ry={12} stroke="#8A4E12" strokeWidth={3} fill="none" />
            <Ellipse cx={100} cy={64} rx={12} ry={40} stroke="#8A4E12" strokeWidth={3} fill="none" />
            <Circle cx={86} cy={50} r={9} fill="#FFF6D5" opacity={0.55} />
            <Path d="M100 24 L106 12 L100 4 L94 12 Z" fill="#FFF0BF" />
            <Rect x={88} y={100} width={24} height={6} rx={3} fill="#FFF0BF" />
          </G>
        );
      case 'lotus':
        return (
          <G>
            <Path d="M30 160 Q100 130 170 160 Q100 178 30 160 Z" fill="#2E8B57" opacity={0.85} />
            {[-72, -48, 48, 72].map((a) => (
              <Path key={a} d="M100 156 C82 126 82 88 100 58 C118 88 118 126 100 156 Z" fill={`url(#pink${id})`} opacity={0.75} transform={`rotate(${a} 100 156)`} />
            ))}
            {[-24, 24].map((a) => (
              <Path key={a} d="M100 156 C80 122 80 80 100 46 C120 80 120 122 100 156 Z" fill={`url(#pink${id})`} opacity={0.9} transform={`rotate(${a} 100 156)`} />
            ))}
            <Path d="M100 156 C78 120 78 76 100 36 C122 76 122 120 100 156 Z" fill={`url(#pink${id})`} />
            <Circle cx={100} cy={128} r={9} fill={gold} />
            {[[62, 52], [140, 46], [52, 96], [150, 92]].map(([x, y], i) => (
              <Circle key={i} cx={x} cy={y} r={7} fill={gold} stroke="#FFF0BF" strokeWidth={1.5} />
            ))}
          </G>
        );
      case 'veena':
        return (
          <G transform="rotate(-24 100 100)">
            <Rect x={34} y={92} width={124} height={16} rx={5} fill={gold} />
            {Array.from({ length: 9 }).map((_, i) => (
              <Rect key={i} x={58 + i * 9} y={90} width={2.5} height={20} fill="#8A4E12" />
            ))}
            <Circle cx={160} cy={100} r={32} fill={gold} />
            <Circle cx={160} cy={100} r={22} fill="#8A4E12" opacity={0.35} />
            <Circle cx={66} cy={122} r={17} fill={gold} />
            <Path d="M34 100 C14 100 14 78 28 76 C38 74 40 86 32 88" stroke={gold} strokeWidth={6} fill="none" strokeLinecap="round" />
            {[96, 100, 104].map((y) => (
              <Line key={y} x1={30} y1={y} x2={176} y2={y} stroke="#FFF6D5" strokeWidth={0.9} />
            ))}
          </G>
        );
      case 'yantra': {
        const tri = (r: number, up: boolean) => {
          const pts = [0, 120, 240].map((a) => {
            const rad = ((a + (up ? -90 : 90)) * Math.PI) / 180;
            return `${100 + Math.cos(rad) * r},${100 + Math.sin(rad) * r}`;
          });
          return `M${pts.join(' L')} Z`;
        };
        return (
          <G>
            {Array.from({ length: 8 }).map((_, i) => (
              <Path key={i} d="M100 18 C112 30 112 42 100 50 C88 42 88 30 100 18 Z" fill={gold} opacity={0.85} transform={`rotate(${i * 45} 100 100)`} />
            ))}
            <Circle cx={100} cy={100} r={56} stroke={gold} strokeWidth={4} fill="none" />
            <Path d={tri(50, true)} stroke={gold} strokeWidth={3.5} fill="none" strokeLinejoin="round" />
            <Path d={tri(50, false)} stroke={gold} strokeWidth={3.5} fill="none" strokeLinejoin="round" />
            <Path d={tri(28, false)} stroke="#FFF0BF" strokeWidth={2.5} fill="none" strokeLinejoin="round" />
            <Path d={tri(28, true)} stroke="#FFF0BF" strokeWidth={2.5} fill="none" strokeLinejoin="round" />
            <Circle cx={100} cy={100} r={8} fill="#E0262F" />
          </G>
        );
      }
      case 'vel':
        return (
          <G>
            <Path d="M100 12 C130 46 130 86 100 110 C70 86 70 46 100 12 Z" fill={gold} />
            <Path d="M100 22 L100 102" stroke="#8A4E12" strokeWidth={2.5} />
            <Path d="M100 40 C114 56 114 78 100 92 C86 78 86 56 100 40 Z" fill="#FFF6D5" opacity={0.35} />
            <Circle cx={100} cy={116} r={9} fill="#C8283A" stroke={gold} strokeWidth={3} />
            <Rect x={96} y={124} width={8} height={66} rx={3} fill={gold} />
            <Path d="M100 140 q-18 4 -24 18 M100 140 q18 4 24 18" stroke="#2BC0AE" strokeWidth={3} fill="none" strokeLinecap="round" />
          </G>
        );
      case 'steps':
        return (
          <G>
            {Array.from({ length: 9 }).map((_, i) => (
              <Rect key={i} x={36 + i * 6} y={176 - i * 9} width={128 - i * 12} height={7} rx={1.5} fill={gold} opacity={0.55 + i * 0.05} />
            ))}
            <Rect x={74} y={64} width={52} height={40} fill="#3A2A12" stroke={gold} strokeWidth={2.5} />
            <Path d="M62 66 L100 36 L138 66 Z" fill={gold} />
            <Rect x={93} y={78} width={14} height={26} rx={7} fill="#FFB000" opacity={0.8} />
            <Circle cx={160} cy={30} r={6} fill="#FFFFFF" />
          </G>
        );
      case 'sun':
        return (
          <G>
            {Array.from({ length: 16 }).map((_, i) => (
              <Path key={i} d={i % 2 ? 'M100 22 L106 50 L94 50 Z' : 'M100 8 L108 48 L92 48 Z'} fill={gold} transform={`rotate(${i * 22.5} 100 100)`} />
            ))}
            <Circle cx={100} cy={100} r={44} fill={gold} />
            <Circle cx={100} cy={100} r={34} stroke="#FFF6D5" strokeWidth={2} fill="none" opacity={0.7} />
            <Circle cx={100} cy={100} r={10} fill="#FFF6D5" />
          </G>
        );
    }
  })();

  const spins = kind === 'chakra' || kind === 'sun';
  return (
    <View style={{ width: size, height: size }}>
      <Animated.View style={[{ position: 'absolute', width: size, height: size }, glowStyle]}>
        <Svg width={size} height={size} viewBox="0 0 200 200">
          {defs}
          <Circle cx={100} cy={100} r={kind === 'steps' ? 18 : 60} fill={`url(#glow${id})`} opacity={0.55} transform={kind === 'steps' ? 'translate(60 -70)' : undefined} />
        </Svg>
      </Animated.View>
      <Animated.View style={[{ width: size, height: size }, spins ? spinStyle : null]}>
        <Svg width={size} height={size} viewBox="0 0 200 200">
          {defs}
          {body}
        </Svg>
      </Animated.View>
    </View>
  );
}
