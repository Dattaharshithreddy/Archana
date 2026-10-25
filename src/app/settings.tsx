import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListScreen } from '../components/ListScreen';
import { Press, SectionTitle } from '../components/UI';
import { useStore, type Script } from '../lib/store';
import { C, F } from '../lib/theme';

function Toggle({ on, onPress, te, en }: { on: boolean; onPress: () => void; te: string; en: string }) {
  return (
    <Press onPress={onPress} style={s.row} accessibilityLabel={en}>
      <View style={{ flex: 1 }}>
        <Text style={s.te}>{te}</Text>
        <Text style={s.en}>{en}</Text>
      </View>
      <View style={[s.track, on && { backgroundColor: C.gold }]}>
        <View style={[s.knob, on && { alignSelf: 'flex-end', backgroundColor: C.bg0 }]} />
      </View>
    </Press>
  );
}

export default function Settings() {
  const st = useStore();
  const scripts: { k: Script; te: string }[] = [
    { k: 'te', te: 'తెలుగు' },
    { k: 'both', te: 'రెండూ' },
    { k: 'en', te: 'English' },
  ];
  return (
    <ListScreen title={{ te: 'సెట్టింగులు', en: 'Settings' }} accent={C.gold} colors={[C.bg2, C.bg1]}>
      <SectionTitle te="దర్శనం" en="Darshan" />
      <Toggle on={st.intros} onPress={() => st.set({ intros: !st.intros })} te="ప్రారంభ దృశ్యం" en="Opening ceremony animation for each deity" />
      <Toggle on={st.sound} onPress={() => st.set({ sound: !st.sound })} te="గంట, శంఖ ధ్వనులు" en="Temple sounds — bell, conch, damaru, flute" />
      <Toggle on={st.haptics} onPress={() => st.set({ haptics: !st.haptics })} te="స్పర్శ కంపనం" en="Vibration on japa and aarti" />
      <SectionTitle te="చదవడం" en="Reading" />
      <View style={s.seg}>
        {scripts.map((x) => (
          <Press flex key={x.k} onPress={() => st.set({ script: x.k })} style={[s.segItem, st.script === x.k && { backgroundColor: C.gold }]}>
            <Text style={[s.segTxt, st.script === x.k && { color: C.bg0 }]}>{x.te}</Text>
          </Press>
        ))}
      </View>
      <Toggle on={st.meaning} onPress={() => st.set({ meaning: !st.meaning })} te="అర్థం, భావం చూపించు" en="Show meaning and explanation" />
      <View style={s.fontRow}>
        <Text style={s.te}>అక్షర పరిమాణం · Text size</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Press onPress={() => st.set({ fontScale: Math.max(0.8, +(st.fontScale - 0.1).toFixed(1)) })} style={s.pill}><Text style={s.pillTxt}>A−</Text></Press>
          <Text style={[s.pillTxt, { alignSelf: 'center', minWidth: 40, textAlign: 'center' }]}>{Math.round(st.fontScale * 100)}%</Text>
          <Press onPress={() => st.set({ fontScale: Math.min(1.6, +(st.fontScale + 0.1).toFixed(1)) })} style={s.pill}><Text style={s.pillTxt}>A+</Text></Press>
        </View>
      </View>
    </ListScreen>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginBottom: 10, padding: 14, borderRadius: 18, backgroundColor: C.card, borderWidth: 1, borderColor: C.line },
  te: { fontFamily: F.teSerif, color: C.cream, fontSize: 15.5, lineHeight: 26 },
  en: { fontFamily: F.body, color: C.muted, fontSize: 14 },
  track: { width: 50, height: 28, borderRadius: 14, padding: 3, backgroundColor: 'rgba(255,255,255,0.12)' },
  knob: { width: 22, height: 22, borderRadius: 11, backgroundColor: C.cream },
  seg: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 10, borderRadius: 22, borderWidth: 1, borderColor: C.line, padding: 4 },
  segItem: { alignItems: 'center', paddingVertical: 8, borderRadius: 18 },
  segTxt: { fontFamily: F.teSerif, color: C.muted, fontSize: 13.5, lineHeight: 22 },
  fontRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, padding: 14, borderRadius: 18, backgroundColor: C.card, borderWidth: 1, borderColor: C.line },
  pill: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: C.line },
  pillTxt: { fontFamily: F.title, color: C.goldSoft, fontSize: 14 },
});
