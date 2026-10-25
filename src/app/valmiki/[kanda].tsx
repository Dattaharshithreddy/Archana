import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ListScreen } from '../../components/ListScreen';
import { Press } from '../../components/UI';
import { VALMIKI_INDEX, kandaMeta, kandaNo, sargaSummaries, valmikiId } from '../../data/ramayana/load';
import { useStore } from '../../lib/store';
import { C, F } from '../../lib/theme';

export default function KandaScreen() {
  const { kanda } = useLocalSearchParams<{ kanda: string }>();
  const meta = kandaMeta(kanda);
  const sargas = VALMIKI_INDEX[kandaNo(kanda) - 1] ?? [];
  const store = useStore();
  const verses = sargas.reduce((a, s) => a + s[1], 0);
  const sums = sargaSummaries(kanda);
  if (!meta) return null;
  return (
    <ListScreen
      title={meta.name}
      emblem={kanda === 'sundara' ? 'gada' : 'bow'}
      accent="#7FE0A8"
      colors={['#123A2A', '#061A12']}
      intro={{
        te: `${meta.summary.te}\n\n${sargas.length} సర్గలు · ${verses.toLocaleString('en-IN')} శ్లోకాలు`,
        en: `${meta.summary.en}\n\n${sargas.length} sargas · ${verses.toLocaleString('en-IN')} verses`,
      }}
    >
      <View style={{ marginTop: 14 }}>
        {sargas.map(([n, count]) => {
          const id = valmikiId(kanda, n);
          const read = store.isRead(id);
          const sm = sums[String(n)];
          return (
            <Press key={n} onPress={() => router.push(`/text/${id}`)} style={styles.row} accessibilityLabel={`Sarga ${n}`}>
              <View style={[styles.cell, read && styles.cellRead]}>
                <Text style={[styles.num, read && { color: C.bg0 }]}>{n}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.sumTe} numberOfLines={3}>{sm?.[0] ?? ''}</Text>
                <Text style={styles.sumEn} numberOfLines={2}>{sm?.[1] ?? ''} · {count} ślokas</Text>
              </View>
            </Press>
          );
        })}
      </View>
      <Text style={styles.credit}>
        మూలం: సంస్కృత వికీసోర్స్ · Sanskrit text: Sanskrit Wikisource via the Ramayana Book project. English: M. N. Dutt’s translation (1891–94) via the Valmiki Ramayan Dataset (MIT).
      </Text>
    </ListScreen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', paddingHorizontal: 16, paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'rgba(127,224,168,0.18)' },
  sumTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 15, lineHeight: 24 },
  sumEn: { fontFamily: F.body, color: C.faint, fontSize: 13, marginTop: 2 },
  cell: { width: 44, height: 44, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(127,224,168,0.35)', backgroundColor: 'rgba(127,224,168,0.06)', alignItems: 'center', justifyContent: 'center' },
  cellRead: { backgroundColor: '#7FE0A8', borderColor: '#7FE0A8' },
  num: { fontFamily: F.bodyBold, color: C.cream, fontSize: 17 },
  count: { fontFamily: F.body, color: C.faint, fontSize: 11 },
  credit: { fontFamily: F.bodyItalic, color: C.faint, fontSize: 12, textAlign: 'center', paddingHorizontal: 28, marginTop: 24, lineHeight: 18 },
});
