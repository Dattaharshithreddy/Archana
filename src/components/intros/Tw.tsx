import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, type SharedValue } from 'react-native-reanimated';

type Key = 'opacity' | 'x' | 'y' | 'scale' | 'sx' | 'sy' | 'rotate' | 'ry';
type Vals = Partial<Record<Key, number>>;
export type Ease = 'linear' | 'out' | 'in' | 'inout' | 'back';

/**
 * Declarative tween driven by a shared timeline `t` (0 → 1).
 * Between `at[0]` and `at[1]` the view moves from `from` to `to`. Runs on the UI thread.
 */
export function Tw({
  t,
  at,
  from = {},
  to = {},
  ease = 'out',
  style,
  origin,
  children,
}: {
  t: SharedValue<number>;
  at: [number, number];
  from?: Vals;
  to?: Vals;
  ease?: Ease;
  style?: StyleProp<ViewStyle>;
  origin?: string;
  children?: React.ReactNode;
}) {
  const a = useAnimatedStyle(() => {
    let p = Math.min(1, Math.max(0, (t.value - at[0]) / (at[1] - at[0])));
    if (ease === 'out') p = 1 - Math.pow(1 - p, 3);
    else if (ease === 'in') p = p * p * p;
    else if (ease === 'inout') p = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    else if (ease === 'back') {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      p = 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
    }
    const v = (k: Key, d: number) => {
      const f = from[k] ?? to[k] ?? d;
      const e = to[k] ?? from[k] ?? d;
      return f + (e - f) * p;
    };
    const tr: any[] = [];
    if (from.ry !== undefined || to.ry !== undefined) tr.push({ perspective: 1100 }, { rotateY: `${v('ry', 0)}deg` });
    tr.push(
      { translateX: v('x', 0) },
      { translateY: v('y', 0) },
      { scale: v('scale', 1) },
      { scaleX: v('sx', 1) },
      { scaleY: v('sy', 1) },
      { rotate: `${v('rotate', 0)}deg` },
    );
    return { opacity: v('opacity', 1), transform: tr };
  });
  return (
    <Animated.View pointerEvents="none" style={[style, origin ? ({ transformOrigin: origin } as ViewStyle) : null, a]}>
      {children}
    </Animated.View>
  );
}

/** Appear, hold, then disappear: fade in over [a,b], fade out over [c,d] */
export function Pulse({
  t,
  at,
  style,
  children,
}: {
  t: SharedValue<number>;
  at: [number, number, number, number];
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) {
  return (
    <Tw t={t} at={[at[0], at[1]]} from={{ opacity: 0 }} to={{ opacity: 1 }} style={style}>
      <Tw t={t} at={[at[2], at[3]]} from={{ opacity: 1 }} to={{ opacity: 0 }} style={{ flex: 1 }}>
        {children}
      </Tw>
    </Tw>
  );
}

/** Continuous motion: style computed from the timeline every frame */
export function Live({
  t,
  style,
  fn,
  origin,
  children,
}: {
  t: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  fn: (t: number) => { x?: number; y?: number; rotate?: number; scale?: number; sy?: number; opacity?: number };
  origin?: string;
  children?: React.ReactNode;
}) {
  const a = useAnimatedStyle(() => {
    const r = fn(t.value);
    return {
      opacity: r.opacity ?? 1,
      transform: [
        { translateX: r.x ?? 0 },
        { translateY: r.y ?? 0 },
        { rotate: `${r.rotate ?? 0}deg` },
        { scale: r.scale ?? 1 },
        { scaleY: r.sy ?? 1 },
      ],
    };
  });
  return (
    <Animated.View pointerEvents="none" style={[style, origin ? ({ transformOrigin: origin } as ViewStyle) : null, a]}>
      {children}
    </Animated.View>
  );
}
