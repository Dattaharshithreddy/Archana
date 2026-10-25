import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ListScreen } from '../components/ListScreen';
import { Press, SectionTitle, TextRow } from '../components/UI';
import { GITA_CHAPTERS, textById } from '../data';
import { C, F } from '../lib/theme';

export default function Gita() {
  return (
    <ListScreen
      title={{ te: 'శ్రీమద్భగవద్గీత', en: 'Bhagavad Gita' }}
      emblem="flute"
      accent="#4FD1C5"
      colors={['#0D3346', '#06151F']}
      intro={{
        te: 'కురుక్షేత్రంలో శ్రీకృష్ణుడు అర్జునునికి బోధించిన 18 అధ్యాయాల, 700 శ్లోకాల జ్ఞానం.',
        en: 'Krishna’s teaching to Arjuna on the field of Kurukshetra — 18 chapters, 700 verses.',
      }}
    >
      <View style={{ height: 12 }} />
      <TextRow text={textById('gita-dhyanam')!} />
      <SectionTitle te="అధ్యాయాలు" en="Chapters" />
      {GITA_CHAPTERS.map((c, i) => (
        <Animated.View key={c.n} entering={FadeInDown.delay(i * 40)}>
          <Press onPress={() => router.push(`/text/gita-${c.n}`)} style={s.row}>
            <View style={s.num}><Text style={s.numTxt}>{c.n}</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={s.te}>{c.name.te}</Text>
              <Text style={s.en}>{c.name.en} · {c.verses} verses</Text>
            </View>
          </Press>
        </Animated.View>
      ))}
    </ListScreen>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, marginHorizontal: 16, marginBottom: 10, padding: 12, borderRadius: 18, backgroundColor: C.card, borderWidth: 1, borderColor: 'rgba(79,209,197,0.22)' },
  num: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: '#4FD1C5' },
  numTxt: { fontFamily: F.titleBold, color: '#4FD1C5', fontSize: 16 },
  te: { fontFamily: F.teSerif, color: C.cream, fontSize: 16.5, lineHeight: 28 },
  en: { fontFamily: F.body, color: C.muted, fontSize: 14 },
});
