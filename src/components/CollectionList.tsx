import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { deityById } from '../data';
import type { Bi, Collection, EmblemKind } from '../data/types';
import { C, F } from '../lib/theme';
import { Emblem } from './Emblem';
import { ListScreen } from './ListScreen';
import { Press } from './UI';

export function CollectionList(p: { items: Collection[]; title: Bi; emblem: EmblemKind; accent: string; colors: [string, string]; intro: Bi }) {
  return (
    <ListScreen title={p.title} emblem={p.emblem} accent={p.accent} colors={p.colors} intro={p.intro}>
      <View style={{ height: 12 }} />
      {p.items.map((c, i) => {
        const d = deityById(c.deity)!;
        return (
          <Animated.View key={c.id} entering={FadeInDown.delay(i * 60).duration(500)}>
            <Press onPress={() => router.push(`/collection/${c.id}`)} style={s.card}>
              <LinearGradient colors={[d.colors[0], 'rgba(16,5,12,0.6)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={StyleSheet.absoluteFill} />
              <Emblem kind={d.emblem} size={64} accent={d.colors[2]} animated={false} />
              <View style={{ flex: 1 }}>
                <Text style={s.te}>{c.name.te}</Text>
                <Text style={s.en}>{c.name.en}</Text>
                <Text style={s.when}>{c.when.te}</Text>
              </View>
            </Press>
          </Animated.View>
        );
      })}
    </ListScreen>
  );
}

const s = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', gap: 14, marginHorizontal: 16, marginBottom: 12, padding: 14, borderRadius: 22, overflow: 'hidden', borderWidth: 1, borderColor: C.line },
  te: { fontFamily: F.teBold, color: C.cream, fontSize: 18, lineHeight: 30 },
  en: { fontFamily: F.title, color: C.muted, fontSize: 11, letterSpacing: 1.2 },
  when: { fontFamily: F.teSerif, color: C.faint, fontSize: 12, lineHeight: 20, marginTop: 4 },
});
