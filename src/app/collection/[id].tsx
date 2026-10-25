import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ListScreen } from '../../components/ListScreen';
import { Header, Press, SectionTitle, TextRow } from '../../components/UI';
import { collectionById, deityById, textById } from '../../data';
import { C, F } from '../../lib/theme';

export default function CollectionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const c = collectionById(id);
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  if (!c) return <Header title={{ te: 'దొరకలేదు', en: 'Not found' }} />;
  const d = deityById(c.deity)!;
  const accent = d.colors[2];

  return (
    <ListScreen title={c.name} emblem={d.emblem} accent={accent} colors={[d.colors[0], d.colors[1]]}>
      <View style={s.whenBox}>
        <Text style={[s.whenTe, { color: accent }]}>{c.when.te}</Text>
        <Text style={s.whenEn}>{c.when.en}</Text>
      </View>
      <View style={s.about}>
        <Text style={s.aboutTe}>{c.about.te}</Text>
        <Text style={s.aboutEn}>{c.about.en}</Text>
      </View>

      {c.samagri && (
        <>
          <SectionTitle te="పూజా సామగ్రి" en="Samagri Checklist" />
          {c.samagri.map((it, i) => (
            <Press key={i} onPress={() => setChecked((x) => ({ ...x, [i]: !x[i] }))} style={s.check}>
              <View style={[s.box, checked[i] && { backgroundColor: accent, borderColor: accent }]}>
                {checked[i] && <Text style={s.tick}>✓</Text>}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[s.itemTe, checked[i] && s.done]}>{it.te}</Text>
                <Text style={[s.itemEn, checked[i] && s.done]}>{it.en}</Text>
              </View>
            </Press>
          ))}
        </>
      )}

      {c.rules && (
        <>
          <SectionTitle te="దీక్షా నియమాలు" en="Rules of the Deeksha" />
          <View style={s.rules}>
            {c.rules.map((r, i) => (
              <View key={i} style={s.rule}>
                <Text style={[s.bullet, { color: accent }]}>✦</Text>
                <View style={{ flex: 1 }}>
                  <Text style={s.itemTe}>{r.te}</Text>
                  <Text style={s.itemEn}>{r.en}</Text>
                </View>
              </View>
            ))}
          </View>
        </>
      )}

      <SectionTitle te="ఎలా చేయాలి" en="Step by Step" />
      {c.steps.map((st, i) => (
        <Animated.View key={i} entering={FadeInDown.delay(i * 70)} style={s.stepRow}>
          <View style={s.timeline}>
            <View style={[s.num, { borderColor: accent }]}>
              <Text style={[s.numTxt, { color: accent }]}>{i + 1}</Text>
            </View>
            {i < c.steps.length - 1 && <View style={[s.line, { backgroundColor: accent }]} />}
          </View>
          <View style={{ flex: 1, paddingBottom: 18 }}>
            <Text style={s.itemTe}>{st.te}</Text>
            <Text style={s.itemEn}>{st.en}</Text>
          </View>
        </Animated.View>
      ))}

      <SectionTitle te="మంత్రాలు, పూజా విధానం" en="Mantras & Puja" />
      {c.textIds.map((tid, i) => {
        const t = textById(tid);
        return t ? <TextRow key={tid} text={t} index={i} /> : null;
      })}
    </ListScreen>
  );
}

const s = StyleSheet.create({
  whenBox: { alignItems: 'center', marginTop: 4, paddingHorizontal: 24 },
  whenTe: { fontFamily: F.teBold, fontSize: 16, lineHeight: 28, textAlign: 'center' },
  whenEn: { fontFamily: F.title, color: C.faint, fontSize: 11, letterSpacing: 1, textAlign: 'center' },
  about: { marginHorizontal: 16, marginTop: 16, padding: 16, borderRadius: 20, backgroundColor: C.card, borderWidth: 1, borderColor: C.line },
  aboutTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 15.5, lineHeight: 28 },
  aboutEn: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 16, lineHeight: 22, marginTop: 8 },
  check: { flexDirection: 'row', alignItems: 'center', gap: 14, marginHorizontal: 16, marginBottom: 8, padding: 12, borderRadius: 16, backgroundColor: C.card },
  box: { width: 26, height: 26, borderRadius: 8, borderWidth: 1.5, borderColor: C.gold, alignItems: 'center', justifyContent: 'center' },
  tick: { color: C.bg0, fontWeight: '800', fontSize: 15 },
  done: { opacity: 0.45, textDecorationLine: 'line-through' },
  itemTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 15, lineHeight: 26 },
  itemEn: { fontFamily: F.body, color: C.muted, fontSize: 15, lineHeight: 20 },
  rules: { marginHorizontal: 16, padding: 14, borderRadius: 20, backgroundColor: C.card, borderWidth: 1, borderColor: C.line, gap: 12 },
  rule: { flexDirection: 'row', gap: 10 },
  bullet: { fontSize: 14, marginTop: 5 },
  stepRow: { flexDirection: 'row', gap: 14, marginHorizontal: 20 },
  timeline: { alignItems: 'center', width: 34 },
  num: { width: 34, height: 34, borderRadius: 17, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', backgroundColor: C.bg1 },
  numTxt: { fontFamily: F.titleBold, fontSize: 14 },
  line: { width: 1.5, flex: 1, opacity: 0.4, marginTop: 2 },
});
