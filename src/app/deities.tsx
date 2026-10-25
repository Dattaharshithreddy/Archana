import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Emblem } from '../components/Emblem';
import { ListScreen } from '../components/ListScreen';
import { Press } from '../components/UI';
import { DEITIES } from '../data';
import { C, F } from '../lib/theme';

export default function Deities() {
  return (
    <ListScreen title={{ te: 'దేవతలు', en: 'Gods & Goddesses' }} accent={C.gold} colors={[C.bg2, C.bg1]} dock>
      <View style={s.grid}>
        {DEITIES.map((d, i) => (
          <Animated.View key={d.id} entering={FadeInDown.delay(i * 60).duration(500)} style={s.cell}>
            <Press onPress={() => router.push(`/deity/${d.id}`)} style={s.card}>
              <LinearGradient colors={[d.colors[0], d.colors[1]]} style={StyleSheet.absoluteFill} />
              <Emblem kind={d.emblem} size={96} accent={d.colors[2]} />
              <Text style={s.te} numberOfLines={1}>{d.name.te}</Text>
              <Text style={s.en} numberOfLines={1}>{d.epithet.en}</Text>
            </Press>
          </Animated.View>
        ))}
      </View>
    </ListScreen>
  );
}

const s = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, marginTop: 6 },
  cell: { width: '50%', padding: 6 },
  card: { height: 200, borderRadius: 26, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: C.line, paddingHorizontal: 8 },
  te: { fontFamily: F.teBold, color: C.cream, fontSize: 16, lineHeight: 28, marginTop: 6 },
  en: { fontFamily: F.body, color: C.muted, fontSize: 13.5 },
});
