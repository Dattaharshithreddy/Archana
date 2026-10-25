import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient as SvgLinear, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import { Emblem } from '../Emblem';
import { Live, Pulse, Tw } from './Tw';

export type SceneProps = { t: SharedValue<number>; w: number; h: number; accent: string };

const fill = { position: 'absolute' as const, left: 0, right: 0, top: 0, bottom: 0 };
const center = (w: number, h: number, size: number, cy = 0.44) => ({
  position: 'absolute' as const,
  left: w / 2 - size / 2,
  top: h * cy - size / 2,
  width: size,
  height: size,
});

/* ---------- shared art ---------- */

function Glow({ size, color, opacity = 0.7 }: { size: number; color: string; opacity?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <RadialGradient id="g" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor="#FFF6D5" stopOpacity={opacity} />
          <Stop offset="0.35" stopColor={color} stopOpacity={opacity * 0.7} />
          <Stop offset="1" stopColor={color} stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Circle cx={50} cy={50} r={50} fill="url(#g)" />
    </Svg>
  );
}

function Rays({ size, color, count = 18, opacity = 0.35 }: { size: number; color: string; count?: number; opacity?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      {Array.from({ length: count }).map((_, i) => (
        <Path key={i} d="M100 100 L96 0 L104 0 Z" fill={color} opacity={opacity} transform={`rotate(${(i * 360) / count} 100 100)`} />
      ))}
    </Svg>
  );
}

function Stars({ w, h, n = 40 }: { w: number; h: number; n?: number }) {
  return (
    <Svg width={w} height={h} style={fill}>
      {Array.from({ length: n }).map((_, i) => (
        <Circle key={i} cx={((i * 97) % 100) / 100 * w} cy={((i * 61) % 70) / 100 * h} r={(i % 3) * 0.5 + 0.6} fill="#FFFFFF" opacity={0.3 + (i % 4) * 0.15} />
      ))}
    </Svg>
  );
}

function Feather({ size }: { size: number }) {
  return (
    <Svg width={size * 0.5} height={size} viewBox="0 0 50 100">
      <Path d="M25 100 Q26 60 25 18" stroke="#2E7D5B" strokeWidth={1.5} fill="none" />
      {Array.from({ length: 12 }).map((_, i) => {
        const y = 90 - i * 6;
        return <Path key={i} d={`M25 ${y} q-14 -4 -20 -12 M25 ${y} q14 -4 20 -12`} stroke="#43B98A" strokeWidth={1} fill="none" opacity={0.8} />;
      })}
      <Ellipse cx={25} cy={20} rx={15} ry={20} fill="#1B8F6A" />
      <Ellipse cx={25} cy={21} rx={10} ry={14} fill="#2BC0AE" />
      <Ellipse cx={25} cy={22} rx={6} ry={9} fill="#E8B84A" />
      <Ellipse cx={25} cy={23} rx={3.5} ry={5} fill="#1E3A8A" />
    </Svg>
  );
}

/** Final darshan: emblem with halo grows in */
function Reveal({ t, w, h, accent, kind, at = 0.58, size = 190 }: SceneProps & { kind: Parameters<typeof Emblem>[0]['kind']; at?: number; size?: number }) {
  return (
    <>
      <Tw t={t} at={[at, at + 0.2]} from={{ opacity: 0, scale: 0.4 }} to={{ opacity: 1, scale: 1 }} style={center(w, h, size * 2.2)}>
        <Glow size={size * 2.2} color={accent} />
      </Tw>
      <Tw t={t} at={[at, at + 0.18]} from={{ opacity: 0, scale: 0.6 }} to={{ opacity: 1, scale: 1 }} ease="back" style={center(w, h, size)}>
        <Emblem kind={kind} size={size} accent={accent} />
      </Tw>
    </>
  );
}

/* ================= 1. Venkateswara — Tirumala's golden doors (Bangaru Vakili) ================= */

function Door({ width, height, mirror }: { width: number; height: number; mirror?: boolean }) {
  const cols = 4;
  const rows = 8;
  return (
    <Svg width={width} height={height} viewBox="0 0 100 300" preserveAspectRatio="none" style={mirror ? { transform: [{ scaleX: -1 }] } : undefined}>
      <Defs>
        <SvgLinear id="dg" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#F9DE8C" />
          <Stop offset="0.5" stopColor="#D49B2E" />
          <Stop offset="1" stopColor="#8C5A12" />
        </SvgLinear>
      </Defs>
      <Rect x={0} y={0} width={100} height={300} fill="url(#dg)" />
      <Rect x={5} y={5} width={90} height={290} fill="none" stroke="#7A4A0C" strokeWidth={2} />
      <Rect x={10} y={10} width={80} height={280} fill="none" stroke="#FFF0BF" strokeWidth={0.8} opacity={0.7} />
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => (
          <G key={`${r}-${c}`}>
            <Circle cx={22 + c * 19} cy={28 + r * 34} r={5.5} fill="#B07A1E" />
            <Circle cx={21 + c * 19} cy={27 + r * 34} r={3} fill="#FFF3C4" opacity={0.85} />
          </G>
        )),
      )}
      <Rect x={92} y={10} width={6} height={280} fill="#7A4A0C" opacity={0.6} />
      <Circle cx={84} cy={160} r={9} fill="none" stroke="#FFF0BF" strokeWidth={2.5} />
      <Circle cx={84} cy={150} r={3} fill="#7A4A0C" />
    </Svg>
  );
}

function Bell({ size }: { size: number }) {
  return (
    <Svg width={size * 0.6} height={size} viewBox="0 0 60 100">
      <Line x1={30} y1={0} x2={30} y2={30} stroke="#C99A3A" strokeWidth={2} />
      <Path d="M30 28 C14 30 12 58 8 72 L52 72 C48 58 46 30 30 28 Z" fill="#E8B84A" />
      <Rect x={6} y={70} width={48} height={6} rx={3} fill="#B9822A" />
      <Circle cx={30} cy={82} r={5} fill="#B9822A" />
    </Svg>
  );
}

export function TirumalaDoors({ t, w, h, accent }: SceneProps) {
  const doorW = w * 0.42;
  const doorH = h * 0.62;
  const top = h * 0.2;
  const left = w / 2 - doorW;
  return (
    <View style={fill}>
      <LinearGradient colors={['#2A1204', '#120600', '#050200']} style={fill} />
      {/* sanctum light behind the doors */}
      <Tw t={t} at={[0.3, 0.7]} from={{ opacity: 0, scale: 0.6 }} to={{ opacity: 1, scale: 1.1 }} style={center(w, h, w * 1.2)}>
        <Glow size={w * 1.2} color="#FFC857" opacity={0.85} />
      </Tw>
      <Tw t={t} at={[0.45, 0.8]} from={{ opacity: 0, rotate: 0 }} to={{ opacity: 1, rotate: 25 }} style={center(w, h, w * 1.5)}>
        <Rays size={w * 1.5} color="#FFE7A3" count={24} opacity={0.22} />
      </Tw>
      <Reveal t={t} w={w} h={h} accent={accent} kind="namam" at={0.42} size={170} />
      {/* door frame */}
      <View style={{ position: 'absolute', left: left - 10, top: top - 10, width: doorW * 2 + 20, height: doorH + 20, borderWidth: 6, borderColor: '#B9822A', borderRadius: 6 }} />
      {/* doors swing open on their hinges */}
      <Tw t={t} at={[0.18, 0.6]} from={{ ry: 0 }} to={{ ry: -105 }} ease="inout" origin="left" style={{ position: 'absolute', left, top, width: doorW, height: doorH }}>
        <Door width={doorW} height={doorH} />
      </Tw>
      <Tw t={t} at={[0.18, 0.6]} from={{ ry: 0 }} to={{ ry: 105 }} ease="inout" origin="right" style={{ position: 'absolute', left: w / 2, top, width: doorW, height: doorH }}>
        <Door width={doorW} height={doorH} mirror />
      </Tw>
      {/* Ananda Nilayam vimana above */}
      <Tw t={t} at={[0, 0.2]} from={{ opacity: 0, y: -20 }} to={{ opacity: 1, y: 0 }} style={{ position: 'absolute', left: w * 0.15, top: top - w * 0.36, width: w * 0.7, height: w * 0.3 }}>
        <Svg width={w * 0.7} height={w * 0.3} viewBox="0 0 280 120">
          <Rect x={20} y={96} width={240} height={16} fill="#D49B2E" />
          <Rect x={50} y={76} width={180} height={22} fill="#E8B84A" />
          <Path d="M80 78 Q140 6 200 78 Z" fill="#F2C860" />
          <Path d="M100 78 Q140 26 180 78" stroke="#9C5F17" strokeWidth={2} fill="none" />
          <Path d="M134 14 L140 0 L146 14 Z" fill="#FFF0BF" />
          <Circle cx={140} cy={20} r={6} fill="#FFF0BF" />
          {[40, 80, 200, 240].map((x) => (
            <Path key={x} d={`M${x - 10} 96 L${x} 80 L${x + 10} 96 Z`} fill="#F2C860" />
          ))}
        </Svg>
      </Tw>
      {/* temple bells swing */}
      {[left + 8, w / 2 + doorW - 34].map((x, i) => (
        <Live
          key={i}
          t={t}
          origin="top"
          style={{ position: 'absolute', left: x, top: top - 6, width: 26, height: 44 }}
          fn={(v) => {
            'worklet';
            return { rotate: Math.sin(v * 40 + i) * 20 * Math.max(0, 1 - v * 1.4) };
          }}
        >
          <Bell size={44} />
        </Live>
      ))}
    </View>
  );
}

/* ================= 2. Shiva — Kailash at night, the third eye opens ================= */

export function ShivaThirdEye({ t, w, h, accent }: SceneProps) {
  const eye = 200;
  return (
    <View style={fill}>
      <LinearGradient colors={['#0A1430', '#070C1F', '#02040C']} style={fill} />
      <Stars w={w} h={h} />
      <Tw t={t} at={[0, 0.35]} from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} style={{ position: 'absolute', right: w * 0.12, top: h * 0.1 }}>
        <Svg width={60} height={60} viewBox="0 0 60 60">
          <Path d="M20 6 A26 26 0 1 0 50 46 A20 20 0 1 1 20 6 Z" fill="#E6EEFF" />
        </Svg>
      </Tw>
      <Tw t={t} at={[0, 0.3]} from={{ opacity: 0, y: 60 }} to={{ opacity: 1, y: 0 }} style={{ position: 'absolute', left: 0, bottom: 0, width: w, height: h * 0.35 }}>
        <Svg width={w} height={h * 0.35} viewBox="0 0 400 200" preserveAspectRatio="none">
          <Path d="M0 200 L0 150 L80 90 L130 120 L200 20 L270 110 L320 80 L400 140 L400 200 Z" fill="#1C2C55" />
          <Path d="M200 20 L228 60 L214 56 L200 70 L186 56 L172 60 Z" fill="#E6EEFF" />
          <Path d="M0 200 L0 175 L90 130 L170 170 L260 135 L400 180 L400 200 Z" fill="#0E1838" />
        </Svg>
      </Tw>
      {/* the vertical third eye */}
      <Tw t={t} at={[0.2, 0.45]} from={{ sx: 0.02, opacity: 0.4 }} to={{ sx: 1, opacity: 1 }} ease="out" style={center(w, h, eye)}>
        <Tw t={t} at={[0.5, 0.58]} from={{ opacity: 1 }} to={{ opacity: 0 }} style={{ flex: 1 }}>
        <Svg width={eye} height={eye} viewBox="0 0 100 100">
          <Defs>
            <RadialGradient id="fire" cx="0.5" cy="0.5" r="0.5">
              <Stop offset="0" stopColor="#FFF6D5" />
              <Stop offset="0.4" stopColor="#FFB547" />
              <Stop offset="1" stopColor="#E0262F" />
            </RadialGradient>
          </Defs>
          <Path d="M50 4 C76 30 76 70 50 96 C24 70 24 30 50 4 Z" fill="url(#fire)" stroke="#E8B84A" strokeWidth={3} />
          <Circle cx={50} cy={50} r={10} fill="#3A0000" />
        </Svg>
        </Tw>
      </Tw>
      <Pulse t={t} at={[0.42, 0.48, 0.5, 0.66]} style={fill}>
        <View style={[fill, { backgroundColor: '#FFF3E0' }]} />
      </Pulse>
      <Reveal t={t} w={w} h={h} accent={accent} kind="trishul" at={0.55} />
    </View>
  );
}

/* ================= 3. Vishnu — the ocean of milk, Sudarshana arrives ================= */

function Waves({ w, color, amp = 10 }: { w: number; color: string; amp?: number }) {
  const W = w * 2;
  let d = `M0 ${amp * 2}`;
  for (let x = 0; x <= W; x += 20) d += ` Q${x + 10} ${x % 40 === 0 ? 0 : amp * 4} ${x + 20} ${amp * 2}`;
  d += ` L${W} 200 L0 200 Z`;
  return (
    <Svg width={W} height={140} viewBox={`0 0 ${W} 140`}>
      <Path d={d} fill={color} />
    </Svg>
  );
}

export function VishnuOcean({ t, w, h, accent }: SceneProps) {
  return (
    <View style={fill}>
      <LinearGradient colors={['#0E2A4A', '#06121F', '#02070D']} style={fill} />
      <Stars w={w} h={h * 0.5} n={24} />
      {/* Adishesha's hoods */}
      <Tw t={t} at={[0.08, 0.4]} from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} style={{ position: 'absolute', left: w / 2 - 160, top: h * 0.5, width: 320, height: 160 }}>
        <Svg width={320} height={160} viewBox="0 0 220 110">
          {[-2, -1, 0, 1, 2].map((k) => (
            <G key={k} transform={`rotate(${k * 16} 110 110)`}>
              <Path d="M96 110 L96 40 Q110 10 124 40 L124 110 Z" fill="#2F5E4A" stroke="#7FE0A8" strokeWidth={1.5} />
              <Circle cx={110} cy={38} r={3} fill="#E8B84A" />
            </G>
          ))}
        </Svg>
      </Tw>
      {[0, 1, 2].map((i) => (
        <Live
          key={i}
          t={t}
          style={{ position: 'absolute', left: 0, top: h * (0.7 + i * 0.06), width: w * 2, height: 140 }}
          fn={(v) => {
            'worklet';
            return { x: -((v * (300 + i * 140)) % (w * 0.5)) - i * 30 };
          }}
        >
          <Waves w={w} color={['#1E4D7A', '#163A60', '#0E2744'][i]} amp={6 + i * 2} />
        </Live>
      ))}
      {/* Sudarshana chakra flies in, spinning */}
      <Tw t={t} at={[0.15, 0.55]} from={{ x: w * 0.7, y: -h * 0.45, scale: 0.25, opacity: 0.2 }} to={{ x: 0, y: 0, scale: 1, opacity: 1 }} ease="out" style={center(w, h, 380)}>
        <Glow size={380} color={accent} />
        <View style={{ position: 'absolute', left: 95, top: 95 }}>
          <Emblem kind="chakra" size={190} accent={accent} />
        </View>
      </Tw>
    </View>
  );
}

/* ================= 4. Ganesha — marigold curtain parts, modaks drop in ================= */

function Garland({ height }: { height: number }) {
  const n = Math.floor(height / 18);
  return (
    <Svg width={18} height={height}>
      {Array.from({ length: n }).map((_, i) => (
        <Circle key={i} cx={9} cy={9 + i * 18} r={8} fill={i % 3 === 2 ? '#FFD24A' : '#F28C28'} stroke="#C65A10" strokeWidth={0.8} />
      ))}
    </Svg>
  );
}

export function GaneshaCurtain({ t, w, h, accent }: SceneProps) {
  const strands = 9;
  const gap = w / 2 / strands;
  return (
    <View style={fill}>
      <LinearGradient colors={['#5A2208', '#2A0A06', '#120402']} style={fill} />
      <Reveal t={t} w={w} h={h} accent={accent} kind="modak" at={0.4} size={180} />
      {/* extra modaks drop onto the plate */}
      {[-60, 0, 60].map((dx, i) => (
        <Tw key={i} t={t} at={[0.6 + i * 0.06, 0.78 + i * 0.06]} from={{ y: -h * 0.5, opacity: 0 }} to={{ y: 0, opacity: 1 }} ease="back" style={{ position: 'absolute', left: w / 2 + dx - 22, top: h * 0.44 + 70, width: 44, height: 44 }}>
          <Emblem kind="modak" size={44} accent={accent} animated={false} />
        </Tw>
      ))}
      {/* curtain halves */}
      {[0, 1].map((side) => (
        <Tw key={side} t={t} at={[0.15, 0.5]} from={{ x: 0 }} to={{ x: side ? w * 0.55 : -w * 0.55 }} ease="inout" style={{ position: 'absolute', left: side ? w / 2 : 0, top: 0, width: w / 2, height: h }}>
          <LinearGradient colors={['#8A1B12', '#5A0E0A']} style={fill} />
          {Array.from({ length: strands }).map((_, i) => (
            <View key={i} style={{ position: 'absolute', left: i * gap + 4, top: 0 }}>
              <Garland height={h * (0.55 + ((i * 37) % 30) / 100)} />
            </View>
          ))}
        </Tw>
      ))}
      {/* mango-leaf toran stays on top */}
      <Svg width={w} height={60} style={{ position: 'absolute', top: 0 }}>
        <Line x1={0} y1={6} x2={w} y2={6} stroke="#B9822A" strokeWidth={3} />
        {Array.from({ length: Math.ceil(w / 28) }).map((_, i) => (
          <Path key={i} d={`M${i * 28 + 14} 6 C${i * 28 + 4} 22 ${i * 28 + 8} 40 ${i * 28 + 14} 50 C${i * 28 + 20} 40 ${i * 28 + 24} 22 ${i * 28 + 14} 6 Z`} fill={i % 2 ? '#2E8B57' : '#3BA76A'} />
        ))}
      </Svg>
    </View>
  );
}

/* ================= 5. Rama — the arrow leaves the Kodanda ================= */

export function RamaArrow({ t, w, h, accent }: SceneProps) {
  const y = h * 0.44;
  return (
    <View style={fill}>
      <LinearGradient colors={['#3A2A10', '#123A2A', '#061A12']} style={fill} />
      <Tw t={t} at={[0, 0.4]} from={{ y: 40, opacity: 0.4 }} to={{ y: 0, opacity: 1 }} style={{ position: 'absolute', left: w / 2 - 70, top: h * 0.62, width: 140, height: 140 }}>
        <Glow size={140} color="#FF8A3D" />
      </Tw>
      <View style={{ position: 'absolute', left: 0, right: 0, top: h * 0.7, bottom: 0, backgroundColor: '#04120C' }} />
      {/* bow drawn then released */}
      <Tw t={t} at={[0, 0.15]} from={{ opacity: 0, x: -30 }} to={{ opacity: 1, x: 0 }} style={{ position: 'absolute', left: 10, top: y - 110, width: 120, height: 220 }}>
        <Tw t={t} at={[0.32, 0.5]} from={{ opacity: 1 }} to={{ opacity: 0 }} style={{ flex: 1 }}>
          <Svg width={120} height={220} viewBox="0 0 120 220">
            <Path d="M40 6 Q130 110 40 214" stroke="#E8B84A" strokeWidth={8} fill="none" strokeLinecap="round" />
            <Path d="M40 6 L14 110 L40 214" stroke="#FFF6D5" strokeWidth={1.5} fill="none" />
          </Svg>
        </Tw>
      </Tw>
      {/* golden trail */}
      <Tw t={t} at={[0.28, 0.45]} from={{ sx: 0, opacity: 1 }} to={{ sx: 1, opacity: 1 }} ease="in" origin="left" style={{ position: 'absolute', left: 14, top: y - 2, width: w, height: 4 }}>
        <Tw t={t} at={[0.45, 0.6]} from={{ opacity: 1 }} to={{ opacity: 0 }} style={{ flex: 1 }}>
          <LinearGradient colors={['rgba(255,240,191,0)', '#FFE7A3', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, borderRadius: 2 }} />
        </Tw>
      </Tw>
      {/* the arrow */}
      <Tw t={t} at={[0.28, 0.45]} from={{ x: 0 }} to={{ x: w + 40 }} ease="in" style={{ position: 'absolute', left: 0, top: y - 12, width: 110, height: 24 }}>
        <Svg width={110} height={24} viewBox="0 0 110 24">
          <Line x1={8} y1={12} x2={90} y2={12} stroke="#E8B84A" strokeWidth={3} />
          <Path d="M110 12 L88 4 L92 12 L88 20 Z" fill="#FFF0BF" />
          <Path d="M14 12 L2 4 M14 12 L2 20 M22 12 L10 4 M22 12 L10 20" stroke={accent} strokeWidth={2.5} />
        </Svg>
      </Tw>
      <Reveal t={t} w={w} h={h} accent={accent} kind="bow" at={0.52} />
    </View>
  );
}

/* ================= 6. Krishna — peacock feathers fan open under the moon ================= */

export function KrishnaFeathers({ t, w, h, accent }: SceneProps) {
  const n = 11;
  const size = 170;
  return (
    <View style={fill}>
      <LinearGradient colors={['#0B2547', '#06152C', '#020812']} style={fill} />
      <Stars w={w} h={h} n={30} />
      <View style={{ position: 'absolute', left: w * 0.12, top: h * 0.08, width: 50, height: 50, borderRadius: 25, backgroundColor: '#F5F0E0', opacity: 0.9 }} />
      {Array.from({ length: n }).map((_, i) => {
        const angle = -75 + (150 / (n - 1)) * i;
        return (
          <Tw
            key={i}
            t={t}
            at={[0.1 + Math.abs(i - (n - 1) / 2) * 0.025, 0.45 + Math.abs(i - (n - 1) / 2) * 0.025]}
            from={{ rotate: 0, scale: 0.2, opacity: 0 }}
            to={{ rotate: angle, scale: 1, opacity: 1 }}
            ease="back"
            origin="bottom"
            style={{ position: 'absolute', left: w / 2 - size / 4, top: h * 0.44 - size + 20, width: size / 2, height: size }}
          >
            <Feather size={size} />
          </Tw>
        );
      })}
      {['♪', '♫', '♪', '♬'].map((note, i) => (
        <Live
          key={i}
          t={t}
          style={{ position: 'absolute', left: w * (0.2 + i * 0.18), top: h * 0.7 }}
          fn={(v) => {
            'worklet';
            const p = (v * 1.4 + i * 0.22) % 1;
            return { y: -p * h * 0.35, opacity: Math.sin(p * Math.PI) * 0.9 };
          }}
        >
          <View>
            <Svg width={30} height={40}>
              <Circle cx={10} cy={30} r={7} fill="#4FD1C5" />
              <Line x1={16} y1={30} x2={16} y2={4} stroke="#4FD1C5" strokeWidth={2.5} />
              <Path d={note === '♪' ? 'M16 4 Q26 8 24 18' : 'M16 4 L28 8 L28 14 L16 10'} stroke="#4FD1C5" strokeWidth={2.5} fill="none" />
            </Svg>
          </View>
        </Live>
      ))}
      <Reveal t={t} w={w} h={h} accent={accent} kind="flute" at={0.5} size={180} />
    </View>
  );
}

/* ================= 7. Hanuman — a leap towards the rising sun, the gada lands ================= */

export function HanumanLeap({ t, w, h, accent }: SceneProps) {
  return (
    <Live
      t={t}
      style={fill}
      fn={(v) => {
        'worklet';
        const shake = v > 0.62 && v < 0.74 ? Math.sin(v * 220) * 7 * (0.74 - v) * 8 : 0;
        return { x: shake, y: shake * 0.6 };
      }}
    >
      <LinearGradient colors={['#5A1A04', '#C2410C', '#FF8A3D']} style={fill} />
      <Tw t={t} at={[0, 0.35]} from={{ y: 120, opacity: 0.4 }} to={{ y: 0, opacity: 1 }} style={{ position: 'absolute', right: -40, top: h * 0.06, width: 220, height: 220 }}>
        <Glow size={220} color="#FFD24A" opacity={1} />
        <View style={{ position: 'absolute', left: 60, top: 60, width: 100, height: 100, borderRadius: 50, backgroundColor: '#FF5A1F' }} />
      </Tw>
      <View style={{ position: 'absolute', left: 0, bottom: 0, width: w, height: h * 0.25 }}>
        <Svg width={w} height={h * 0.25} viewBox="0 0 400 150" preserveAspectRatio="none">
          <Path d="M0 150 L0 70 L70 30 L140 80 L220 20 L300 70 L400 40 L400 150 Z" fill="#3A1204" />
        </Svg>
      </View>
      {/* the leap: a comet streak towards the sun */}
      <Tw t={t} at={[0.12, 0.42]} from={{ x: 0, y: 0, scale: 0.6, opacity: 0 }} to={{ x: w * 0.75, y: -h * 0.55, scale: 1.2, opacity: 1 }} ease="in" style={{ position: 'absolute', left: 0, top: h * 0.78, width: 140, height: 30 }}>
        <Tw t={t} at={[0.42, 0.48]} from={{ opacity: 1 }} to={{ opacity: 0 }} style={{ flex: 1, transform: [{ rotate: '-35deg' }] }}>
          <LinearGradient colors={['rgba(255,214,120,0)', '#FFE7A3', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, borderRadius: 15 }} />
        </Tw>
      </Tw>
      <Pulse t={t} at={[0.4, 0.45, 0.47, 0.6]} style={{ position: 'absolute', right: -40, top: h * 0.06, width: 220, height: 220 }}>
        <Glow size={220} color="#FFFFFF" opacity={1} />
      </Pulse>
      <Tw t={t} at={[0.64, 0.85]} from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 0.6, scale: 1 }} style={center(w, h, 420)}>
        <Glow size={420} color={accent} />
      </Tw>
      {/* the gada falls and lands */}
      <Tw t={t} at={[0.5, 0.63]} from={{ y: -h * 0.7, rotate: -40 }} to={{ y: 0, rotate: 0 }} ease="in" style={center(w, h, 200)}>
        <Emblem kind="gada" size={200} accent={accent} />
      </Tw>
      {[0, 1, 2].map((i) => (
        <Pulse key={i} t={t} at={[0.62, 0.66, 0.7, 0.9]} style={{ position: 'absolute', left: w / 2 - 120 + i * 40 - 20, top: h * 0.44 + 70, width: 120, height: 60 }}>
          <Tw t={t} at={[0.62, 0.85]} from={{ scale: 0.3 }} to={{ scale: 1.6 }} style={{ flex: 1 }}>
            <View style={{ flex: 1, borderRadius: 60, backgroundColor: 'rgba(255,214,150,0.18)' }} />
          </Tw>
        </Pulse>
      ))}
    </Live>
  );
}

/* ================= 8. Lakshmi — a lotus rises from the water and blooms, gold rains ================= */

function Petal({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size * 0.5} height={size} viewBox="0 0 50 100">
      <Defs>
        <SvgLinear id="pp" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFE3EE" />
          <Stop offset="0.6" stopColor={color} />
          <Stop offset="1" stopColor="#B83268" />
        </SvgLinear>
      </Defs>
      <Path d="M25 100 C2 70 2 30 25 0 C48 30 48 70 25 100 Z" fill="url(#pp)" />
    </Svg>
  );
}

export function LakshmiLotus({ t, w, h, accent }: SceneProps) {
  const ps = 120;
  const cx = w / 2;
  const base = h * 0.5;
  const angles = [-75, -50, -25, 25, 50, 75, 0];
  return (
    <View style={fill}>
      <LinearGradient colors={['#4A0B2A', '#220414', '#0E0208']} style={fill} />
      <View style={{ position: 'absolute', left: 0, right: 0, top: base + 20, bottom: 0, backgroundColor: '#14324A', opacity: 0.85 }} />
      {[0, 1, 2].map((i) => (
        <Live
          key={i}
          t={t}
          style={{ position: 'absolute', left: cx - 150, top: base, width: 300, height: 60 }}
          fn={(v) => {
            'worklet';
            const p = (v * 1.6 + i / 3) % 1;
            return { scale: 0.3 + p * 1.2, opacity: (1 - p) * 0.7 };
          }}
        >
          <Svg width={300} height={60}>
            <Ellipse cx={150} cy={30} rx={146} ry={26} stroke="#9FD3FF" strokeWidth={2} fill="none" />
          </Svg>
        </Live>
      ))}
      <Tw t={t} at={[0.15, 0.6]} from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 1, scale: 1.2 }} style={{ position: 'absolute', left: cx - 200, top: base - 260, width: 400, height: 400 }}>
        <Glow size={400} color={accent} />
      </Tw>
      {/* lotus rises, then each petal opens */}
      <Tw t={t} at={[0.08, 0.35]} from={{ y: 90, opacity: 0 }} to={{ y: 0, opacity: 1 }} style={{ position: 'absolute', left: cx - ps / 4, top: base - ps + 30, width: ps / 2, height: ps }}>
        {angles.map((a, i) => (
          <Tw
            key={i}
            t={t}
            at={[0.32 + i * 0.03, 0.6 + i * 0.03]}
            from={{ rotate: a * 0.15, scale: 0.7 }}
            to={{ rotate: a, scale: a === 0 ? 1.1 : 1 }}
            ease="back"
            origin="bottom"
            style={{ position: 'absolute', left: 0, top: 0, width: ps / 2, height: ps }}
          >
            <Petal size={ps} color="#F27AA8" />
          </Tw>
        ))}
      </Tw>
      {Array.from({ length: 16 }).map((_, i) => (
        <Live
          key={`c${i}`}
          t={t}
          style={{ position: 'absolute', left: ((i * 59) % 100) / 100 * w, top: -30 }}
          fn={(v) => {
            'worklet';
            const s = 0.45 + (i % 6) * 0.04;
            const p = Math.max(0, (v - s) / 0.5);
            return { y: p * h * 1.1, rotate: p * 400, opacity: p > 0 && p < 1 ? 1 : 0 };
          }}
        >
          <Svg width={20} height={20}>
            <Circle cx={10} cy={10} r={9} fill="#E8B84A" stroke="#FFF0BF" strokeWidth={1.5} />
            <Rect x={7} y={7} width={6} height={6} fill="#9C5F17" />
          </Svg>
        </Live>
      ))}
    </View>
  );
}

/* ================= 9. Saraswati — a swan glides, veena strings shimmer ================= */

export function SaraswatiSwan({ t, w, h, accent }: SceneProps) {
  const y = h * 0.72;
  return (
    <View style={fill}>
      <LinearGradient colors={['#2B3566', '#141A38', '#070A18']} style={fill} />
      <Stars w={w} h={h * 0.5} n={20} />
      <View style={{ position: 'absolute', left: 0, right: 0, top: y + 30, bottom: 0, backgroundColor: '#1A2A4F' }} />
      <Tw t={t} at={[0, 0.75]} from={{ x: w + 40 }} to={{ x: w * 0.15 }} ease="out" style={{ position: 'absolute', left: 0, top: y - 50, width: 120, height: 90 }}>
        <Svg width={120} height={90} viewBox="0 0 120 90">
          <Path d="M20 70 C30 50 70 46 100 58 C110 62 104 78 86 80 L30 80 C22 80 16 76 20 70 Z" fill="#FFFFFF" />
          <Path d="M40 62 C30 40 26 20 38 10 C46 4 54 10 50 18" stroke="#FFFFFF" strokeWidth={7} fill="none" strokeLinecap="round" />
          <Path d="M50 16 L62 20 L50 22 Z" fill="#F28C28" />
          <Circle cx={45} cy={14} r={1.6} fill="#000" />
          <Path d="M60 60 C70 50 88 50 98 58" stroke="#DDE6FF" strokeWidth={2} fill="none" />
        </Svg>
      </Tw>
      {/* veena strings shimmer */}
      {[0, 1, 2, 3].map((i) => (
        <Live
          key={i}
          t={t}
          style={{ position: 'absolute', left: w * 0.08, width: w * 0.84, top: h * 0.2 + i * 14, height: 10, justifyContent: 'center' }}
          fn={(v) => {
            'worklet';
            const on = Math.max(0, Math.min(1, (v - 0.1 - i * 0.05) / 0.1)) * Math.max(0, 1 - (v - 0.4) / 0.2);
            return { sy: 1 + Math.sin(v * 160 + i) * 2.5 * on, opacity: 0.25 + on * 0.75 };
          }}
        >
          <View style={{ height: 1.5, backgroundColor: '#FFE7A3' }} />
        </Live>
      ))}
      <Reveal t={t} w={w} h={h} accent={accent} kind="veena" at={0.4} />
    </View>
  );
}

/* ================= 10. Durga — the trishul strikes, the yantra locks ================= */

function Triangle({ size, up, color }: { size: number; up: boolean; color: string }) {
  const r = 46;
  const pts = [0, 120, 240]
    .map((a) => {
      const rad = ((a + (up ? -90 : 90)) * Math.PI) / 180;
      return `${50 + Math.cos(rad) * r},${50 + Math.sin(rad) * r}`;
    })
    .join(' L');
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Path d={`M${pts} Z`} stroke={color} strokeWidth={2.5} fill="none" strokeLinejoin="round" />
    </Svg>
  );
}

export function DurgaStrike({ t, w, h, accent }: SceneProps) {
  const s = 260;
  return (
    <Live
      t={t}
      style={fill}
      fn={(v) => {
        'worklet';
        const k = v > 0.28 && v < 0.4 ? Math.sin(v * 260) * 9 * (0.4 - v) * 8 : 0;
        return { x: k };
      }}
    >
      <LinearGradient colors={['#4A0710', '#200206', '#0A0002']} style={fill} />
      <Tw t={t} at={[0.05, 0.28]} from={{ y: -h * 0.8 }} to={{ y: 0 }} ease="in" style={center(w, h, 220)}>
        <Tw t={t} at={[0.36, 0.5]} from={{ opacity: 1 }} to={{ opacity: 0 }} style={{ flex: 1 }}>
          <Emblem kind="trishul" size={220} accent={accent} animated={false} />
        </Tw>
      </Tw>
      <Pulse t={t} at={[0.26, 0.29, 0.31, 0.45]} style={fill}>
        <View style={[fill, { backgroundColor: '#FF2D3A', opacity: 0.55 }]} />
      </Pulse>
      <Tw t={t} at={[0.36, 0.62]} from={{ rotate: -240, opacity: 0, scale: 1.6 }} to={{ rotate: 0, opacity: 1, scale: 1 }} ease="out" style={center(w, h, s)}>
        <Triangle size={s} up color="#E8B84A" />
      </Tw>
      <Tw t={t} at={[0.36, 0.62]} from={{ rotate: 240, opacity: 0, scale: 1.6 }} to={{ rotate: 0, opacity: 1, scale: 1 }} ease="out" style={center(w, h, s)}>
        <Triangle size={s} up={false} color="#E8B84A" />
      </Tw>
      <Reveal t={t} w={w} h={h} accent={accent} kind="yantra" at={0.6} />
    </Live>
  );
}

/* ================= 11. Subrahmanya — the vel rises, feathers burst ================= */

export function SubrahmanyaVel({ t, w, h, accent }: SceneProps) {
  const n = 12;
  return (
    <View style={fill}>
      <LinearGradient colors={['#3A1240', '#1A061E', '#08020A']} style={fill} />
      {Array.from({ length: n }).map((_, i) => (
        <Tw
          key={i}
          t={t}
          at={[0.35, 0.62]}
          from={{ rotate: (360 / n) * i, scale: 0, opacity: 0 }}
          to={{ rotate: (360 / n) * i, scale: 1, opacity: 1 }}
          ease="back"
          origin="bottom"
          style={{ position: 'absolute', left: w / 2 - 40, top: h * 0.44 - 160, width: 80, height: 160 }}
        >
          <Feather size={160} />
        </Tw>
      ))}
      <Tw t={t} at={[0.05, 0.35]} from={{ y: h * 0.7 }} to={{ y: 0 }} ease="out" style={center(w, h, 380)}>
        <Glow size={380} color={accent} />
        <View style={{ position: 'absolute', left: 95, top: 95 }}>
          <Emblem kind="vel" size={190} accent={accent} />
        </View>
      </Tw>
    </View>
  );
}

/* ================= 12. Ayyappa — the eighteen holy steps light up, Makara Jyothi appears ================= */

export function AyyappaSteps({ t, w, h, accent }: SceneProps) {
  const steps = 18;
  const baseY = h * 0.7;
  const stepH = (h * 0.34) / steps;
  return (
    <View style={fill}>
      <LinearGradient colors={['#0A0F14', '#05080A', '#000000']} style={fill} />
      <Stars w={w} h={h * 0.4} n={36} />
      <Svg width={w} height={h * 0.3} style={{ position: 'absolute', top: h * 0.18 }} viewBox="0 0 400 120" preserveAspectRatio="none">
        <Path d="M0 120 L0 70 L90 30 L170 60 L260 10 L340 50 L400 30 L400 120 Z" fill="#0F1A12" />
      </Svg>
      {/* Makara Jyothi on the far hill */}
      <Tw t={t} at={[0.68, 0.82]} from={{ opacity: 0, scale: 0.2 }} to={{ opacity: 1, scale: 1 }} style={{ position: 'absolute', left: w * 0.65 - 50, top: h * 0.19 - 50, width: 100, height: 100 }}>
        <Glow size={100} color="#FFFFFF" opacity={1} />
      </Tw>
      {Array.from({ length: steps }).map((_, i) => {
        const sw = w * 0.8 - i * (w * 0.5) / steps;
        return (
          <Tw
            key={i}
            t={t}
            at={[0.08 + i * 0.028, 0.14 + i * 0.028]}
            from={{ opacity: 0.12 }}
            to={{ opacity: 1 }}
            style={{ position: 'absolute', left: w / 2 - sw / 2, top: baseY - (i + 1) * stepH, width: sw, height: stepH - 2 }}
          >
            <LinearGradient colors={['#FFE7A3', '#E8B84A', '#9C5F17']} style={{ flex: 1, borderRadius: 2 }} />
          </Tw>
        );
      })}
      {/* sannidhanam at the top */}
      <Tw t={t} at={[0.6, 0.72]} from={{ opacity: 0.2, scale: 0.9 }} to={{ opacity: 1, scale: 1 }} style={{ position: 'absolute', left: w / 2 - 50, top: baseY - steps * stepH - 76, width: 100, height: 76 }}>
        <Svg width={100} height={76} viewBox="0 0 100 76">
          <Path d="M8 32 L50 4 L92 32 Z" fill="#E8B84A" />
          <Rect x={18} y={32} width={64} height={44} fill="#3A2A12" stroke="#E8B84A" strokeWidth={2} />
          <Rect x={42} y={46} width={16} height={30} rx={8} fill="#FFB000" />
        </Svg>
      </Tw>
      {[-1, 1].map((side) => (
        <Live
          key={side}
          t={t}
          style={{ position: 'absolute', left: w / 2 + side * w * 0.43 - 6, top: baseY - 30, width: 12, height: 20 }}
          fn={(v) => {
            'worklet';
            return { sy: 0.85 + Math.sin(v * 90 + side) * 0.15, opacity: Math.min(1, v * 4) };
          }}
        >
          <View style={{ flex: 1, borderRadius: 6, backgroundColor: '#FFB547' }} />
        </Live>
      ))}
    </View>
  );
}

/* ================= 13. Surya — sunrise over the sea ================= */

export function SuryaSunrise({ t, w, h, accent }: SceneProps) {
  const horizon = h * 0.6;
  return (
    <View style={fill}>
      <LinearGradient colors={['#05070F', '#0B1024', '#1A1030']} style={fill} />
      <Tw t={t} at={[0.1, 0.6]} from={{ opacity: 0 }} to={{ opacity: 1 }} style={fill}>
        <LinearGradient colors={['#4A2A04', '#C2410C', '#FFB547']} locations={[0, 0.5, 0.6]} style={fill} />
      </Tw>
      <Tw t={t} at={[0.45, 0.8]} from={{ opacity: 0, rotate: 0, scale: 0.6 }} to={{ opacity: 1, rotate: 30, scale: 1.2 }} style={{ position: 'absolute', left: w / 2 - w * 0.7, top: horizon - h * 0.2 - w * 0.7, width: w * 1.4, height: w * 1.4 }}>
        <Rays size={w * 1.4} color="#FFE7A3" count={20} opacity={0.25} />
      </Tw>
      <Tw t={t} at={[0.08, 0.55]} from={{ y: h * 0.3 }} to={{ y: 0 }} ease="out" style={{ position: 'absolute', left: w / 2 - 110, top: horizon - h * 0.2 - 110, width: 220, height: 220 }}>
        <Glow size={220} color={accent} opacity={1} />
        <View style={{ position: 'absolute', left: 35, top: 35 }}>
          <Emblem kind="sun" size={150} accent={accent} />
        </View>
      </Tw>
      {/* the sea hides the sun until it rises */}
      <LinearGradient colors={['#2A1A3A', '#0A0614']} style={{ position: 'absolute', left: 0, right: 0, top: horizon, bottom: 0 }} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Tw key={i} t={t} at={[0.4, 0.7]} from={{ opacity: 0, sx: 0.2 }} to={{ opacity: 0.7, sx: 1 }} style={{ position: 'absolute', left: w / 2 - (60 - i * 8), top: horizon + 10 + i * 14, width: (60 - i * 8) * 2, height: 3 }}>
          <View style={{ flex: 1, backgroundColor: '#FFD27A', borderRadius: 2 }} />
        </Tw>
      ))}
    </View>
  );
}
