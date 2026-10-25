import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SearchIcon } from '../components/Icons';
import { ListScreen } from '../components/ListScreen';
import { TextRow } from '../components/UI';
import { DEITIES, TEXTS } from '../data';
import { C, F } from '../lib/theme';
import { transliterate } from '../lib/translit';

// Pre-build a lowercase haystack per text: titles, deity names, Telugu verses and their transliteration
const INDEX = TEXTS.map((t) => {
  const deityNames = t.deities.map((id) => DEITIES.find((d) => d.id === id)).filter(Boolean).map((d) => `${d!.name.te} ${d!.name.en}`);
  const body = t.verses.map((v) => `${v.te ?? ''} ${v.en ?? ''}`).join(' ');
  const tr = t.verses.map((v) => (v.te ? transliterate(v.te) : '')).join(' ');
  const hay = `${t.title.te} ${t.title.en} ${deityNames.join(' ')} ${body} ${tr}`.toLowerCase().replace(/a+/g, 'a');
  return { t, hay };
});

export default function Search() {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const k = q.trim().toLowerCase().replace(/a+/g, 'a');
    if (k.length < 2) return [];
    return INDEX.filter((x) => x.hay.includes(k)).map((x) => x.t).slice(0, 40);
  }, [q]);
  return (
    <ListScreen title={{ te: 'వెతకండి', en: 'Search' }} accent={C.gold} colors={[C.bg2, C.bg1]} dock>
      <View style={s.box}>
        <SearchIcon color={C.gold} />
        <TextInput
          value={q}
          onChangeText={setQ}
          autoFocus
          placeholder="గాయత్రి, Hanuman, karagre…"
          placeholderTextColor={C.faint}
          style={s.input}
          returnKeyType="search"
        />
      </View>
      {q.trim().length >= 2 && results.length === 0 && <Text style={s.none}>ఏమీ దొరకలేదు · Nothing found</Text>}
      {results.map((t, i) => <TextRow key={t.id} text={t} index={i} />)}
    </ListScreen>
  );
}

const s = StyleSheet.create({
  box: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginVertical: 14, paddingHorizontal: 16, borderRadius: 24, borderWidth: 1, borderColor: C.line, backgroundColor: 'rgba(0,0,0,0.3)' },
  input: { flex: 1, height: 50, color: C.cream, fontFamily: F.teSerif, fontSize: 16 },
  none: { fontFamily: F.teSerif, color: C.muted, textAlign: 'center', marginTop: 30, lineHeight: 26 },
});
