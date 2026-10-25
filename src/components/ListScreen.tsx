import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { Bi, EmblemKind } from '../data/types';
import { C, F } from '../lib/theme';
import { Backdrop, DivineAura } from './Sacred';
import { Dock, Header } from './UI';

/** Shared layout for library screens: header, animated emblem hero, intro, then content. */
export function ListScreen({
  title,
  emblem,
  accent,
  colors,
  intro,
  children,
  dock,
}: {
  title: Bi;
  emblem?: EmblemKind;
  accent: string;
  colors: [string, string];
  intro?: Bi;
  children: React.ReactNode;
  dock?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: C.bg0 }}>
      <Backdrop top={colors[0]} mid={colors[1]} />
      <Header title={title} />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + (dock ? 120 : 40) }} showsVerticalScrollIndicator={false}>
        {emblem && (
          <Animated.View entering={FadeInDown.duration(700)} style={{ alignItems: 'center', marginTop: 4 }}>
            <DivineAura emblem={emblem} accent={accent} size={180} sparks={false} />
          </Animated.View>
        )}
        {intro && (
          <View style={styles.intro}>
            <Text style={styles.te}>{intro.te}</Text>
            <Text style={styles.en}>{intro.en}</Text>
          </View>
        )}
        {children}
      </ScrollView>
      {dock && <Dock />}
    </View>
  );
}

const styles = StyleSheet.create({
  intro: { paddingHorizontal: 26, marginTop: 8, marginBottom: 6, alignItems: 'center' },
  te: { fontFamily: F.teSerif, color: C.cream, fontSize: 15, lineHeight: 26, textAlign: 'center' },
  en: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 15.5, lineHeight: 21, textAlign: 'center', marginTop: 4 },
});
