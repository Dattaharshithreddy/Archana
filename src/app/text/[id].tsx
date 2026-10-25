import { useKeepAwake } from 'expo-keep-awake';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, Extrapolation } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Harathi } from '../../components/Harathi';
import { DeityIntro } from '../../components/intros/DeityIntro';
import { shouldPlayIntro } from '../../lib/introSession';
import { BookmarkIcon, FlameIcon } from '../../components/Icons';
import { Backdrop, DivineAura } from '../../components/Sacred';
import { Header, IconButton, Press } from '../../components/UI';
import { VerseCard } from '../../components/VerseCard';
import { DEITIES, GITA_CHAPTERS, deityById, textById } from '../../data';
import { gitaColophon } from '../../data/gita/colophon';
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
  const [intro, setIntro] = useState(() => {
    const did = text?.deities[0];
    return !!did && store.intros && !text!.id.startsWith('gita-') && !text!.id.startsWith('valmiki-') && shouldPlayIntro(did, text!.kind === 'vidhanam');
  });
  const scrollY = useSharedValue(0);
  const listRef = useRef<any>(null);
  const jumpTo = (index: number) => {
    listRef.current?.scrollToIndex({ index, viewOffset: 70, animated: true });
  };

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
        {text.review && (
          <View style={styles.review}>
            <Text style={styles.reviewText}>పండితుల సమీక్ష పెండింగ్ · Awaiting scholar review — compare with your family's text</Text>
          </View>
        )}
      </Animated.View>
      {text.intro && (
        <Animated.View entering={FadeIn.delay(200)} style={styles.intro}>
          <Text style={styles.introTe}>{text.intro.te}</Text>
          <Text style={styles.introEn}>{text.intro.en}</Text>
        </Animated.View>
      )}
      {text.lessons && (
        <View style={[styles.lessons, { borderColor: accent }]}>
          <Text style={[styles.lessonsHead, { color: accent }]}>✦ ముఖ్య పాఠాలు · Key lessons</Text>
          {text.lessons.map((l, i) => (
            <View key={i} style={styles.lessonRow}>
              <Text style={[styles.lessonNum, { color: accent }]}>{i + 1}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.lessonTe}>{l.te}</Text>
                <Text style={styles.lessonEn}>{l.en}</Text>
              </View>
            </View>
          ))}
        </View>
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
      {text.verses.length > 12 && (
        <View style={{ marginBottom: 14 }}>
          <Text style={styles.jumpLabel}>శ్లోకానికి వెళ్ళండి · Go to verse</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 6 }}>
            {text.verses.map((v, i) => (
              <Press key={i} onPress={() => jumpTo(i)} style={styles.jumpChip} haptic={false}>
                <Text style={styles.jumpTxt}>{v.ref?.split('.').pop() ?? i + 1}</Text>
              </Press>
            ))}
          </ScrollView>
        </View>
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
        ref={listRef}
        onScrollToIndexFailed={(info: { index: number; averageItemLength: number }) => {
          listRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: false });
          setTimeout(() => listRef.current?.scrollToIndex({ index: info.index, viewOffset: 70, animated: true }), 250);
        }}
        ListFooterComponent={
          text.chapter ? (
            <View>
              <Text style={styles.colophon}>{gitaColophon(text.chapter)}</Text>
              <View style={styles.chapNav}>
                {text.chapter > 1 && (
                  <Press flex onPress={() => router.replace(`/text/gita-${text.chapter! - 1}`)} style={styles.chapBtn}>
                    <Text style={styles.chapBtnSmall}>← మునుపటి · Previous</Text>
                    <Text style={styles.chapBtnTe} numberOfLines={1}>{GITA_CHAPTERS[text.chapter - 2].name.te}</Text>
                  </Press>
                )}
                {text.chapter < 18 && (
                  <Press flex onPress={() => router.replace(`/text/gita-${text.chapter! + 1}`)} style={[styles.chapBtn, { backgroundColor: accent, borderColor: accent }]}>
                    <Text style={[styles.chapBtnSmall, { color: C.bg0 }]}>తరువాతి · Next →</Text>
                    <Text style={[styles.chapBtnTe, { color: C.bg0 }]} numberOfLines={1}>{GITA_CHAPTERS[text.chapter].name.te}</Text>
                  </Press>
                )}
              </View>
            </View>
          ) : text.nav ? (
            <View style={styles.chapNav}>
              {text.nav.prev && (
                <Press flex onPress={() => router.replace(`/text/${text.nav!.prev!.id}`)} style={styles.chapBtn}>
                  <Text style={styles.chapBtnSmall}>← మునుపటి · Previous</Text>
                  <Text style={styles.chapBtnTe} numberOfLines={1}>{text.nav.prev.label.te}</Text>
                </Press>
              )}
              {text.nav.next && (
                <Press flex onPress={() => router.replace(`/text/${text.nav!.next!.id}`)} style={[styles.chapBtn, { backgroundColor: accent, borderColor: accent }]}>
                  <Text style={[styles.chapBtnSmall, { color: C.bg0 }]}>తరువాతి · Next →</Text>
                  <Text style={[styles.chapBtnTe, { color: C.bg0 }]} numberOfLines={1}>{text.nav.next.label.te}</Text>
                </Press>
              )}
            </View>
          ) : (
            <Text style={styles.end}>॥ ఓం శాంతిః శాంతిః శాంతిః ॥</Text>
          )
        }
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
      {intro && <DeityIntro deity={deity} sound={store.sound} haptics={store.haptics} onDone={() => setIntro(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  lessons: { marginHorizontal: 16, marginTop: 18, padding: 16, borderRadius: 20, borderWidth: 1, backgroundColor: 'rgba(255,214,150,0.05)', gap: 12 },
  lessonsHead: { fontFamily: F.teBold, fontSize: 14, lineHeight: 24 },
  lessonRow: { flexDirection: 'row', gap: 12 },
  lessonNum: { fontFamily: F.titleBold, fontSize: 16, marginTop: 3 },
  lessonTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 15, lineHeight: 26 },
  lessonEn: { fontFamily: F.bodyItalic, color: C.muted, fontSize: 15, lineHeight: 20, marginTop: 2 },
  jumpLabel: { fontFamily: F.teSerif, color: C.faint, fontSize: 12, lineHeight: 20, marginHorizontal: 18, marginBottom: 6 },
  jumpChip: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: C.line, backgroundColor: 'rgba(0,0,0,0.25)' },
  jumpTxt: { fontFamily: F.title, color: C.goldSoft, fontSize: 13 },
  colophon: { fontFamily: F.te, color: C.gold, fontSize: 16, lineHeight: 30, textAlign: 'center', marginHorizontal: 24, marginTop: 16, opacity: 0.9 },
  chapNav: { flexDirection: 'row', gap: 10, marginHorizontal: 16, marginTop: 20 },
  chapBtn: { padding: 14, borderRadius: 18, borderWidth: 1, borderColor: C.line, backgroundColor: C.card },
  chapBtnSmall: { fontFamily: F.teSerif, color: C.muted, fontSize: 11.5, lineHeight: 20 },
  chapBtnTe: { fontFamily: F.teBold, color: C.cream, fontSize: 15, lineHeight: 26 },
  titleTe: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 26, lineHeight: 44, textAlign: 'center', paddingHorizontal: 20, marginTop: 4 },
  titleEn: { fontFamily: F.title, color: C.muted, fontSize: 12.5, letterSpacing: 1.5, textAlign: 'center', paddingHorizontal: 20 },
  source: { fontFamily: F.bodyItalic, color: C.faint, fontSize: 14, marginTop: 4 },
  review: { marginTop: 8, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1, borderColor: C.faint },
  reviewText: { fontFamily: F.body, color: C.faint, fontSize: 12, textAlign: 'center' },
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
