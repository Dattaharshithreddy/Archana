import { router } from 'expo-router';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import type { Verse } from '../data/types';
import type { Script } from '../lib/store';
import { C, F } from '../lib/theme';
import { transliterate } from '../lib/translit';
import { Press } from './UI';

type Props = {
  verse: Verse;
  index: number;
  script: Script;
  meaning: boolean;
  scale: number;
  hindi?: boolean;
  accent: string;
};

export const VerseCard = memo(function VerseCard({ verse, index, script, meaning, scale, hindi, accent }: Props) {
  const showTe = verse.te && script !== 'en';
  const showTr = verse.te && script !== 'te';
  const isStepOnly = !verse.te && verse.step;

  return (
    <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 70).duration(500)} style={styles.wrap}>
      {verse.heading && (
        <View style={styles.headingRow}>
          <View style={[styles.dot, { backgroundColor: accent }]} />
          <Text style={styles.headingTe}>{verse.heading.te}</Text>
          <Text style={styles.headingEn}>{verse.heading.en}</Text>
        </View>
      )}

      {verse.step && (
        <View style={[styles.step, isStepOnly && styles.stepStory]}>
          <Text style={[styles.stepTe, { fontSize: 15.5 * scale, lineHeight: 27 * scale }]}>{verse.step.te}</Text>
          <Text style={[styles.stepEn, { fontSize: 15 * scale, lineHeight: 21 * scale }]}>{verse.step.en}</Text>
        </View>
      )}

      {verse.speaker && (
        <View style={styles.speaker}>
          <Text style={[styles.speakerTe, { color: accent }]}>{verse.speaker.te}</Text>
          <Text style={styles.speakerEn}>{verse.speaker.en}</Text>
        </View>
      )}

      {verse.te && (
        <View style={styles.verse}>
          {verse.ref && <Text style={styles.ref}>{verse.ref}</Text>}
          {showTe && (
            <Text selectable style={[styles.te, { fontSize: 22 * scale, lineHeight: 40 * scale }]}>
              {verse.te}
            </Text>
          )}
          {showTr && (
            <Text
              selectable
              style={[
                styles.tr,
                script === 'en' ? { fontSize: 21 * scale, lineHeight: 30 * scale, color: C.cream } : { fontSize: 16.5 * scale, lineHeight: 24 * scale },
                showTe && { marginTop: 10 },
              ]}
            >
              {transliterate(verse.te!, { hindi })}
            </Text>
          )}
          {meaning && verse.bhavam && (
            <View style={styles.meaning}>
              <View style={[styles.meaningBar, { backgroundColor: accent }]} />
              <View style={{ flex: 1 }}>
                <Text style={[styles.label, { color: accent }]}>భావం</Text>
                <Text selectable style={[styles.bhavam, { fontSize: 16 * scale, lineHeight: 29 * scale }]}>{verse.bhavam}</Text>
              </View>
            </View>
          )}
          {meaning && verse.en && (
            <View style={[styles.meaning, verse.bhavam && styles.meaningTight]}>
              <View style={[styles.meaningBar, { backgroundColor: accent }]} />
              <View style={{ flex: 1 }}>
                {verse.bhavam && <Text style={[styles.label, { color: accent }]}>MEANING</Text>}
                <Text selectable style={[styles.en, { fontSize: 16.5 * scale, lineHeight: 24 * scale }]}>{verse.en}</Text>
              </View>
            </View>
          )}
          {meaning && verse.note && (
            <View style={[styles.note, { borderColor: accent }]}>
              <Text style={[styles.noteHead, { color: accent }]}>✦ జీవితంలో · In your life</Text>
              <Text style={[styles.noteTe, { fontSize: 15 * scale, lineHeight: 27 * scale }]}>{verse.note.te}</Text>
              <Text style={[styles.noteEn, { fontSize: 15 * scale, lineHeight: 21 * scale }]}>{verse.note.en}</Text>
            </View>
          )}
          {verse.repeat && verse.repeat > 1 && (
            <Press
              onPress={() => router.push({ pathname: '/japa', params: { mantra: verse.te } })}
              style={styles.japaBtn}
              accessibilityLabel="Chant with japa mala"
            >
              <Text style={styles.japaTxt}>
                ×{verse.repeat} · జపమాలతో జపించండి · Chant
              </Text>
            </Press>
          )}
        </View>
      )}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  wrap: { marginHorizontal: 16, marginBottom: 16 },
  headingRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8, marginTop: 6, flexWrap: 'wrap' },
  dot: { width: 7, height: 7, borderRadius: 4 },
  headingTe: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 16.5, lineHeight: 28 },
  headingEn: { fontFamily: F.body, color: C.faint, fontSize: 14 },
  step: {
    backgroundColor: 'rgba(242,140,40,0.10)',
    borderColor: 'rgba(242,140,40,0.35)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  stepStory: { backgroundColor: C.card, borderColor: C.line },
  stepTe: { fontFamily: F.teSerif, color: C.cream },
  stepEn: { fontFamily: F.bodyItalic, color: C.muted, marginTop: 6 },
  verse: {
    backgroundColor: 'rgba(255,214,150,0.055)',
    borderColor: C.line,
    borderWidth: 1,
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  ref: {
    alignSelf: 'flex-start',
    fontFamily: F.title,
    color: C.gold,
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.line,
    overflow: 'hidden',
  },
  te: { fontFamily: F.te, color: '#FFF4DD', textAlign: 'center' },
  tr: { fontFamily: F.bodyItalic, color: C.goldSoft, textAlign: 'center' },
  meaning: { flexDirection: 'row', gap: 12, marginTop: 16, paddingTop: 14, borderTopWidth: 1, borderTopColor: 'rgba(232,184,74,0.14)' },
  meaningBar: { width: 3, borderRadius: 2, opacity: 0.8 },
  en: { flex: 1, fontFamily: F.body, color: C.muted },
  meaningTight: { marginTop: 10, paddingTop: 10 },
  label: { fontFamily: F.teBold, fontSize: 11.5, letterSpacing: 1, lineHeight: 20, marginBottom: 2 },
  bhavam: { fontFamily: F.teSerif, color: C.cream },
  note: { marginTop: 16, padding: 14, borderRadius: 16, borderWidth: 1, borderStyle: 'dashed', backgroundColor: 'rgba(232,184,74,0.06)' },
  noteHead: { fontFamily: F.teBold, fontSize: 12.5, lineHeight: 22, marginBottom: 4 },
  noteTe: { fontFamily: F.teSerif, color: C.cream },
  noteEn: { fontFamily: F.bodyItalic, color: C.muted, marginTop: 6 },
  speaker: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 8, marginTop: 4, alignSelf: 'center' },
  speakerTe: { fontFamily: F.teBold, fontSize: 15, lineHeight: 26 },
  speakerEn: { fontFamily: F.title, color: C.faint, fontSize: 10, letterSpacing: 1.5 },
  japaBtn: {
    alignSelf: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(232,184,74,0.14)',
    borderWidth: 1,
    borderColor: C.line,
  },
  japaTxt: { fontFamily: F.teSerif, color: C.goldSoft, fontSize: 13, lineHeight: 22 },
});
