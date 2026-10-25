import * as Haptics from 'expo-haptics';
import { router, usePathname } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { Bi, SacredText } from '../data/types';
import { deityById } from '../data/deities';
import { C, F } from '../lib/theme';
import { Emblem } from './Emblem';
import { BackIcon, BookmarkIcon, ChevronIcon, LotusIcon, MalaIcon, SearchIcon, TempleIcon } from './Icons';

export const tap = (style: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Light) => {
  if (Platform.OS !== 'web') Haptics.impactAsync(style).catch(() => {});
};

/** Pressable that gently shrinks on touch (spring on UI thread) */
export function Press({
  onPress,
  style,
  children,
  haptic = true,
  accessibilityLabel,
  flex,
}: {
  flex?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  haptic?: boolean;
  accessibilityLabel?: string;
}) {
  const s = useSharedValue(1);
  const a = useAnimatedStyle(() => ({ transform: [{ scale: s.value }] }));
  return (
    <Pressable
      style={flex ? { flex: 1 } : undefined}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPressIn={() => (s.value = withSpring(0.96, { damping: 18, stiffness: 400 }))}
      onPressOut={() => (s.value = withSpring(1, { damping: 14, stiffness: 300 }))}
      onPress={() => {
        if (haptic) tap();
        onPress?.();
      }}
    >
      <Animated.View style={[style, a]}>{children}</Animated.View>
    </Pressable>
  );
}

export function Header({
  title,
  right,
  transparent,
}: {
  title?: Bi;
  right?: React.ReactNode;
  transparent?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 6 }, !transparent && { backgroundColor: 'rgba(16,5,12,0.55)' }]}>
      <Press
        accessibilityLabel="Back"
        onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
        style={styles.iconBtn}
      >
        <BackIcon />
      </Press>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {title && (
          <>
            <Text numberOfLines={1} style={styles.headerTe}>
              {title.te}
            </Text>
            <Text numberOfLines={1} style={styles.headerEn}>
              {title.en}
            </Text>
          </>
        )}
      </View>
      <View style={styles.iconBtnSlot}>{right}</View>
    </View>
  );
}

export function IconButton({ onPress, children, label }: { onPress: () => void; children: React.ReactNode; label: string }) {
  return (
    <Press accessibilityLabel={label} onPress={onPress} style={styles.iconBtn}>
      {children}
    </Press>
  );
}

export function SectionTitle({ te, en, style }: Bi & { style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center', marginTop: 28, marginBottom: 12, paddingHorizontal: 20 }, style]}>
      <View style={styles.rule} />
      <View style={{ alignItems: 'center', paddingHorizontal: 12 }}>
        <Text style={styles.sectionTe}>{te}</Text>
        <Text style={styles.sectionEn}>{en.toUpperCase()}</Text>
      </View>
      <View style={styles.rule} />
    </View>
  );
}

export function Card({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const KIND_LABEL: Record<SacredText['kind'], Bi> = {
  mantra: { te: 'మంత్రం', en: 'Mantra' },
  shloka: { te: 'శ్లోకం', en: 'Shloka' },
  stotram: { te: 'స్తోత్రం', en: 'Stotram' },
  vidhanam: { te: 'పూజా విధానం', en: 'Puja Vidhanam' },
  keertana: { te: 'కీర్తన', en: 'Keertana' },
  guide: { te: 'కథ', en: 'Story' },
};

export function TextRow({ text, index = 0 }: { text: SacredText; index?: number }) {
  const d = deityById(text.deities[0] ?? '');
  return (
    <Press onPress={() => router.push(`/text/${text.id}`)} style={styles.row}>
      <View style={styles.rowIcon}>
        {d ? (
          <Emblem kind={d.emblem} size={38} accent={d.colors[2]} animated={false} />
        ) : (
          <Text style={{ fontFamily: F.te, color: C.gold, fontSize: 20 }}>ఓం</Text>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowTe} numberOfLines={1}>
          {text.title.te}
        </Text>
        <Text style={styles.rowEn} numberOfLines={1}>
          {text.title.en} · {KIND_LABEL[text.kind].en}
          {text.verses.length > 1 ? ` · ${text.verses.length}` : ''}
        </Text>
      </View>
      <ChevronIcon />
    </Press>
  );
}

/** Floating bottom dock used on top-level screens */
export function Dock() {
  const insets = useSafeAreaInsets();
  const path = usePathname();
  const items = [
    { href: '/', icon: TempleIcon, label: { te: 'హోమ్', en: 'Home' } },
    { href: '/deities', icon: LotusIcon, label: { te: 'దేవతలు', en: 'Deities' } },
    { href: '/japa', icon: MalaIcon, label: { te: 'జపం', en: 'Japa' } },
    { href: '/saved', icon: BookmarkIcon, label: { te: 'సేవ్', en: 'Saved' } },
    { href: '/search', icon: SearchIcon, label: { te: 'వెతుకు', en: 'Search' } },
  ] as const;
  return (
    <View pointerEvents="box-none" style={[styles.dockWrap, { paddingBottom: insets.bottom + 10 }]}>
      <View style={styles.dock}>
        {items.map((it) => {
          const active = path === it.href;
          const Icon = it.icon;
          return (
            <Press
              key={it.href}
              accessibilityLabel={it.label.en}
              onPress={() => !active && (it.href === '/' ? router.dismissTo('/') : router.push(it.href))}
              style={[styles.dockItem, active && styles.dockActive]}
            >
              <Icon size={21} color={active ? C.bg0 : C.goldSoft} filled={active} />
              <Text style={[styles.dockLabel, active && { color: C.bg0 }]}>{it.label.te}</Text>
            </Press>
          );
        })}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 10,
    zIndex: 10,
  },
  headerTe: { fontFamily: F.teSerif, color: C.goldSoft, fontSize: 17, lineHeight: 28 },
  headerEn: { fontFamily: F.title, color: C.faint, fontSize: 10, letterSpacing: 1.5, marginTop: -2 },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,214,150,0.08)',
    borderWidth: 1,
    borderColor: C.line,
  },
  iconBtnSlot: { width: 42, height: 42, alignItems: 'center', justifyContent: 'center' },
  rule: { flex: 1, height: 1, backgroundColor: C.line },
  sectionTe: { fontFamily: F.teSerif, color: C.goldSoft, fontSize: 18, lineHeight: 30 },
  sectionEn: { fontFamily: F.title, color: C.faint, fontSize: 9.5, letterSpacing: 2.5 },
  card: {
    backgroundColor: C.card,
    borderColor: C.line,
    borderWidth: 1,
    borderRadius: 22,
    padding: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 12,
    borderRadius: 18,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: 'rgba(232,184,74,0.14)',
  },
  rowIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderWidth: 1,
    borderColor: C.line,
  },
  rowTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 16.5, lineHeight: 28 },
  rowEn: { fontFamily: F.body, color: C.muted, fontSize: 14 },
  dockWrap: { position: 'absolute', left: 0, right: 0, bottom: 0, alignItems: 'center' },
  dock: {
    flexDirection: 'row',
    gap: 4,
    padding: 6,
    borderRadius: 30,
    backgroundColor: 'rgba(28,8,20,0.92)',
    borderWidth: 1,
    borderColor: C.line,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 12,
  },
  dockItem: { alignItems: 'center', justifyContent: 'center', width: 62, height: 54, borderRadius: 24 },
  dockActive: { backgroundColor: C.gold },
  dockLabel: { fontFamily: F.teSerif, fontSize: 10, color: C.muted, marginTop: 1, lineHeight: 16 },
});
