import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListScreen } from '../components/ListScreen';
import { SectionTitle, TextRow } from '../components/UI';
import { textById } from '../data';
import { useStore } from '../lib/store';
import { C, F } from '../lib/theme';

export default function Saved() {
  const { saved, recent } = useStore();
  const savedTexts = saved.map(textById).filter((t) => !!t);
  const recentTexts = recent.map(textById).filter((t) => !!t);
  return (
    <ListScreen title={{ te: 'సేవ్ చేసినవి', en: 'Saved' }} accent={C.gold} colors={[C.bg2, C.bg1]} dock>
      {savedTexts.length === 0 ? (
        <View style={s.empty}>
          <Text style={s.te}>ఇంకా ఏమీ సేవ్ చేయలేదు</Text>
          <Text style={s.en}>Tap the bookmark on any mantra or stotram to keep it here.</Text>
        </View>
      ) : (
        <>
          <View style={{ height: 10 }} />
          {savedTexts.map((t, i) => <TextRow key={t!.id} text={t!} index={i} />)}
        </>
      )}
      {recentTexts.length > 0 && (
        <>
          <SectionTitle te="ఇటీవల చదివినవి" en="Recently Read" />
          {recentTexts.map((t, i) => <TextRow key={t!.id} text={t!} index={i} />)}
        </>
      )}
    </ListScreen>
  );
}

const s = StyleSheet.create({
  empty: { alignItems: 'center', marginTop: 60, paddingHorizontal: 30 },
  te: { fontFamily: F.teSerif, color: C.cream, fontSize: 17, lineHeight: 30 },
  en: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 16, textAlign: 'center', marginTop: 6 },
});
