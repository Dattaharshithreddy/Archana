import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Harathi } from '../../components/Harathi';
import { DeityIntro } from '../../components/intros/DeityIntro';
import { shouldPlayIntro } from '../../lib/introSession';
import { Backdrop, DivineAura, PetalShower } from '../../components/Sacred';
import { Header, Press, SectionTitle, TextRow } from '../../components/UI';
import { ALL_COLLECTIONS, deityById, textsForDeity } from '../../data';
import { useStore } from '../../lib/store';
import { C, F } from '../../lib/theme';

export default function DeityScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const d = deityById(id);
  const insets = useSafeAreaInsets();
  const { haptics, sound, intros } = useStore();
  const [intro, setIntro] = useState(() => intros && !!id && shouldPlayIntro(id, true));
  const [harathi, setHarathi] = useState(false);
  const [petals, setPetals] = useState(1);
  if (!d) return <Header title={{ te: 'దొరకలేదు', en: 'Not found' }} />;

  const texts = textsForDeity(d.id);
  const collections = ALL_COLLECTIONS.filter((c) => c.deity === d.id);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg0 }}>
      <Backdrop top={d.colors[0]} mid={d.colors[1]} />
      <PetalShower trigger={petals} />
      <Header transparent />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false} style={{ marginTop: -insets.top - 58 }}>
        <View style={{ height: insets.top + 50 }} />
        <Animated.View entering={ZoomIn.duration(900)} style={{ alignItems: 'center' }}>
          <Press onPress={() => setPetals((p) => p + 1)} haptic accessibilityLabel="Shower flowers">
            <DivineAura emblem={d.emblem} accent={d.colors[2]} size={320} />
          </Press>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).duration(700)} style={{ alignItems: 'center', paddingHorizontal: 24 }}>
          <Text style={styles.name}>{d.name.te}</Text>
          <Text style={styles.nameEn}>{d.name.en.toUpperCase()}</Text>
          <Text style={[styles.epithet, { color: d.colors[2] }]}>
            {d.epithet.te} · {d.epithet.en}
          </Text>
          <Text style={styles.aboutTe}>{d.about.te}</Text>
          <Text style={styles.aboutEn}>{d.about.en}</Text>
          <Text style={styles.tapHint}>దేవుని తాకి పూలు జల్లండి · Tap to offer flowers</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(450)} style={styles.actions}>
          <Press onPress={() => router.push(`/text/puja-${d.id}`)} style={[styles.action, { backgroundColor: C.gold }]}>
            <Text style={[styles.actionTe, { color: C.bg0 }]}>పూజ</Text>
            <Text style={[styles.actionEn, { color: 'rgba(16,5,12,0.6)' }]}>Puja</Text>
          </Press>
          <Press onPress={() => router.push({ pathname: '/japa', params: { deity: d.id } })} style={styles.action}>
            <Text style={styles.actionTe}>జపం</Text>
            <Text style={styles.actionEn}>Japa</Text>
          </Press>
          <Press onPress={() => setHarathi(true)} style={styles.action}>
            <Text style={styles.actionTe}>హారతి</Text>
            <Text style={styles.actionEn}>Aarti</Text>
          </Press>
        </Animated.View>

        <SectionTitle te="మంత్రాలు, స్తోత్రాలు" en="Mantras & Stotras" />
        {texts.map((t, i) => (
          <TextRow key={t.id} text={t} index={i} />
        ))}

        {collections.length > 0 && (
          <>
            <SectionTitle te="పండుగలు, దీక్షలు" en="Festivals & Deekshas" />
            {collections.map((c) => (
              <Press key={c.id} onPress={() => router.push(`/collection/${c.id}`)} style={styles.coll}>
                <Text style={styles.collTe}>{c.name.te}</Text>
                <Text style={styles.collEn}>
                  {c.name.en} · {c.when.en}
                </Text>
              </Press>
            ))}
          </>
        )}
      </ScrollView>
      <Harathi visible={harathi} onClose={() => setHarathi(false)} deity={d} haptics={haptics} />
      {intro && <DeityIntro deity={d} sound={sound} haptics={haptics} onDone={() => setIntro(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  name: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 34, lineHeight: 56, marginTop: 8, textAlign: 'center' },
  nameEn: { fontFamily: F.title, color: C.faint, fontSize: 13, letterSpacing: 3 },
  epithet: { fontFamily: F.teSerif, fontSize: 14, lineHeight: 24, marginTop: 8 },
  aboutTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 15.5, lineHeight: 28, textAlign: 'center', marginTop: 14 },
  aboutEn: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 16, lineHeight: 22, textAlign: 'center', marginTop: 6 },
  tapHint: { fontFamily: F.teSerif, color: C.faint, fontSize: 11, lineHeight: 20, marginTop: 12 },
  actions: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 20 },
  action: {
    width: 100,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: C.gold,
    backgroundColor: 'rgba(232,184,74,0.08)',
  },
  actionTe: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 16, lineHeight: 26 },
  actionEn: { fontFamily: F.title, color: C.faint, fontSize: 9.5, letterSpacing: 1.5 },
  coll: { marginHorizontal: 16, marginBottom: 10, padding: 14, borderRadius: 18, backgroundColor: C.card, borderWidth: 1, borderColor: C.line },
  collTe: { fontFamily: F.teBold, color: C.cream, fontSize: 16.5, lineHeight: 28 },
  collEn: { fontFamily: F.body, color: C.muted, fontSize: 14 },
});
