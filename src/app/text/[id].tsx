import { useKeepAwake } from 'expo-keep-awake';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, Extrapolation } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Harathi } from '../../components/Harathi';
import { BookmarkIcon, FlameIcon } from '../../components/Icons';
import { Backdrop, DivineAura } from '../../components/Sacred';
import { Header, IconButton, Press } from '../../components/UI';
import { VerseCard } from '../../components/VerseCard';
import { DEITIES, deityById, textById } from '../../data';
import type { Verse } from '../../data/types';
import { useStore, type Script } from '../../lib/store';
import { C, F } from '../../lib/theme';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<Verse>);

const SCRIPTS: { k: Script; label: string }[] = [
  { k: 'te', label: 'తెలుగు' },
  { k: 'both', label: 'రెండూ · Both' },
  { k: 'en', label: 'English' },
];

export default function Reader() {
  useKeepAwake();
  const { id } = useLocalSearchParams<{ id: string }>();
  const text = textById(id);
  const store = useStore();
  const insets = useSafeAreaInsets();
  const [harathi, setHarathi] = useState(false);
  const scrollY = useSharedValue(0);

  useEffect(() => {
    if (text) store.markRead(text.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text?.id]);

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });
  const heroStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 220], [1, 0], Extrapolation.CLAMP),
    transform: [
      { translateY: interpolate(scrollY.value, [0, 220], [0, -60], Extrapolation.CLAMP) },
      { scale: interpolate(scrollY.value, [-120, 0], [1.2, 1], Extrapolation.CLAMP) },
    ],
  }));

  if (!text) {
    return (
      <View style={{ flex: 1, backgroundColor: C.bg0 }}>
        <Header title={{ te: 'దొరకలేదు', en: 'Not found' }} />
      </View>
    );
  }

  const deity = deityById(text.deities[0] ?? '') ?? DEITIES[0];
  const accent = deity.colors[2];
  const saved = store.isSaved(text.id);
  const showHarathi = text.kind === 'vidhanam' || text.kind === 'stotram' || text.kind === 'keertana';

  const ListHeader = (
    <View>
      <Animated.View style={[{ alignItems: 'center', paddingTop: 4 }, heroStyle]}>
        <DivineAura emblem={deity.emblem} accent={accent} size={190} sparks={false} />
        <Text style={styles.titleTe}>{text.title.te}</Text>
        <Text style={styles.titleEn}>{text.title.en}</Text>
        {text.source && <Text style={styles.source}>{text.source}</Text>}
      </Animated.View>
      {text.intro && (
        <Animated.View entering={FadeIn.delay(200)} style={styles.intro}>
          <Text style={styles.introTe}>{text.intro.te}</Text>
          <Text style={styles.introEn}>{text.intro.en}</Text>
        </Animated.View>
      )}
      <View style={styles.controls}>
        <View style={styles.seg}>
          {SCRIPTS.map((s) => (
            <Press flex key={s.k} onPress={() => store.set({ script: s.k })} style={[styles.segItem, store.script === s.k && styles.segOn]}>
              <Text style={[styles.segTxt, store.script === s.k && { color: C.bg0 }]}>{s.label}</Text>
            </Press>
          ))}
        </View>
        <View style={styles.controlRow}>
          <Press onPress={() => store.set({ meaning: !store.meaning })} style={[styles.pill, store.meaning && styles.pillOn]}>
            <Text style={[styles.pillTxt, store.meaning && { color: C.bg0 }]}>అర్థం · Meaning</Text>
          </Press>
          <Press onPress={() => store.set({ fontScale: Math.max(0.8, +(store.fontScale - 0.1).toFixed(1)) })} style={styles.pill} accessibilityLabel="Smaller text">
            <Text style={styles.pillTxt}>A−</Text>
          </Press>
          <Press onPress={() => store.set({ fontScale: Math.min(1.6, +(store.fontScale + 0.1).toFixed(1)) })} style={styles.pill} accessibilityLabel="Larger text">
            <Text style={[styles.pillTxt, { fontSize: 17 }]}>A+</Text>
          </Press>
        </View>
      </View>
      {text.verses.length === 0 && (
        <Text style={styles.empty}>ఈ అధ్యాయంలోని శ్లోకాలు త్వరలో · Full verses for this chapter coming soon</Text>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: C.bg0 }}>
      <Stack.Screen options={{ animation: 'slide_from_right' }} />
      <Backdrop top={deity.colors[0]} mid={deity.colors[1]} embers={false} />
      <Header
        title={text.title}
        right={
          <IconButton label={saved ? 'Remove bookmark' : 'Bookmark'} onPress={() => store.toggleSaved(text.id)}>
            <BookmarkIcon filled={saved} color={saved ? C.gold : C.cream} />
          </IconButton>
        }
      />
      <AnimatedFlatList
        data={text.verses}
        keyExtractor={(_, i) => String(i)}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingBottom: insets.bottom + 120 }}
        renderItem={({ item, index }) => (
          <VerseCard
            verse={item}
            index={index}
            script={store.script}
            meaning={store.meaning}
            scale={store.fontScale}
            hindi={text.lang === 'hi'}
            accent={accent}
          />
        )}
        ListFooterComponent={<Text style={styles.end}>॥ ఓం శాంతిః శాంతిః శాంతిః ॥</Text>}
        initialNumToRender={6}
        windowSize={7}
      />
      {showHarathi && (
        <View style={[styles.fabWrap, { bottom: insets.bottom + 20 }]} pointerEvents="box-none">
          <Press onPress={() => setHarathi(true)} style={styles.fab} accessibilityLabel="Offer aarti">
            <FlameIcon color={C.bg0} />
            <Text style={styles.fabTxt}>హారతి ఇవ్వండి</Text>
          </Press>
        </View>
      )}
      <Harathi visible={harathi} onClose={() => setHarathi(false)} deity={deity} haptics={store.haptics} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleTe: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 26, lineHeight: 44, textAlign: 'center', paddingHorizontal: 20, marginTop: 4 },
  titleEn: { fontFamily: F.title, color: C.muted, fontSize: 12.5, letterSpacing: 1.5, textAlign: 'center', paddingHorizontal: 20 },
  source: { fontFamily: F.bodyItalic, color: C.faint, fontSize: 14, marginTop: 4 },
  intro: { marginHorizontal: 20, marginTop: 18, alignItems: 'center' },
  introTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 15, lineHeight: 26, textAlign: 'center' },
  introEn: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 15.5, lineHeight: 21, textAlign: 'center', marginTop: 4 },
  controls: { marginHorizontal: 16, marginTop: 20, marginBottom: 16, gap: 10 },
  seg: { flexDirection: 'row', borderRadius: 22, borderWidth: 1, borderColor: C.line, padding: 4, backgroundColor: 'rgba(0,0,0,0.25)' },
  segItem: { flex: 1, alignItems: 'center', paddingVertical: 8, borderRadius: 18 },
  segOn: { backgroundColor: C.gold },
  segTxt: { fontFamily: F.teSerif, color: C.muted, fontSize: 13, lineHeight: 22 },
  controlRow: { flexDirection: 'row', gap: 8, justifyContent: 'center' },
  pill: { paddingHorizontal: 16, paddingVertical: 7, borderRadius: 18, borderWidth: 1, borderColor: C.line, minWidth: 52, alignItems: 'center' },
  pillOn: { backgroundColor: C.gold, borderColor: C.gold },
  pillTxt: { fontFamily: F.teSerif, color: C.goldSoft, fontSize: 13, lineHeight: 22 },
  empty: { fontFamily: F.teSerif, color: C.muted, textAlign: 'center', marginHorizontal: 30, lineHeight: 24 },
  end: { fontFamily: F.te, color: C.gold, fontSize: 18, textAlign: 'center', marginTop: 20, lineHeight: 32, opacity: 0.8 },
  fabWrap: { position: 'absolute', left: 0, right: 0, alignItems: 'center' },
  fab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: C.saffron,
    shadowColor: C.saffron,
    shadowOpacity: 0.7,
    shadowRadius: 18,
    elevation: 10,
  },
  fabTxt: { fontFamily: F.teBold, color: C.bg0, fontSize: 15, lineHeight: 24 },
});
