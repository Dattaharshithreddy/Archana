import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListScreen } from '../components/ListScreen';
import { Press, TextRow } from '../components/UI';
import { textById } from '../data';
import { KANDAS } from '../data/texts/ramayana';
import { VALMIKI_INDEX, VALMIKI_SARGAS, VALMIKI_TOTAL } from '../data/ramayana/load';
import { C, F } from '../lib/theme';

const IDS = ['ramayana-kandas', 'ramayana-opening', 'sundarakanda-shlokas', 'rama-shlokas', 'hanuman-chalisa', 'hanuman-shlokas'];

export default function Ramayana() {
  return (
    <ListScreen
      title={{ te: 'శ్రీమద్రామాయణం', en: 'Ramayana' }}
      emblem="bow"
      accent="#7FE0A8"
      colors={['#123A2A', '#061A12']}
      intro={{
        te: `వాల్మీకి మహర్షి రచించిన ఆదికావ్యం — సంపూర్ణంగా: ఏడు కాండలు, ${VALMIKI_SARGAS} సర్గలు, ${VALMIKI_TOTAL.toLocaleString('en-IN')} శ్లోకాలు.`,
        en: `The first poem, by sage Valmiki — complete: seven kandas, ${VALMIKI_SARGAS} sargas, ${VALMIKI_TOTAL.toLocaleString('en-IN')} verses.`,
      }}
    >
      <Text style={styles.hTe}>సంపూర్ణ వాల్మీకి రామాయణం</Text>
      <Text style={styles.h}>COMPLETE VALMIKI RAMAYANA</Text>
      {KANDAS.map((k, i) => {
        const ss = VALMIKI_INDEX[i];
        const verses = ss.reduce((a, s) => a + s[1], 0);
        return (
          <Press key={k.id} onPress={() => router.push(`/valmiki/${k.id}`)} style={styles.row}>
            <Text style={styles.no}>{i + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.te}>{k.name.te}</Text>
              <Text style={styles.en}>{k.name.en} · {ss.length} sargas · {verses.toLocaleString('en-IN')} verses</Text>
            </View>
          </Press>
        );
      })}
      <Text style={styles.hTe}>నిత్య పారాయణ</Text>
      <Text style={styles.h}>FOR DAILY READING</Text>
      {IDS.map((id, i) => <TextRow key={id} text={textById(id)!} index={i} />)}
    </ListScreen>
  );
}

const styles = StyleSheet.create({
  hTe: { fontFamily: F.teSerif, color: C.gold, fontSize: 17, marginTop: 24, paddingHorizontal: 22 },
  h: { fontFamily: F.title, color: C.goldDeep, fontSize: 11, letterSpacing: 1.5, marginBottom: 8, paddingHorizontal: 22 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, marginHorizontal: 16, marginVertical: 5, padding: 14, borderRadius: 18, borderWidth: 1, borderColor: 'rgba(127,224,168,0.25)', backgroundColor: 'rgba(127,224,168,0.05)' },
  no: { width: 34, height: 34, borderRadius: 17, textAlign: 'center', lineHeight: 34, backgroundColor: '#7FE0A8', color: '#061A12', fontFamily: F.bodyBold, fontSize: 17, overflow: 'hidden' },
  te: { fontFamily: F.teSerif, color: C.cream, fontSize: 18 },
  en: { fontFamily: F.body, color: C.faint, fontSize: 14 },
});
