import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Emblem } from '../components/Emblem';
import { Backdrop, DivineAura, Diya } from '../components/Sacred';
import { GearIcon } from '../components/Icons';
import { Dock, IconButton, Press, SectionTitle, TextRow } from '../components/UI';
import { DEITIES, FESTIVALS, WEEKDAY_DEITY, WEEKDAY_NAMES, deityById, textById } from '../data';
import type { EmblemKind } from '../data/types';
import { useStore } from '../lib/store';
import { C, F } from '../lib/theme';

function greeting(h: number) {
  if (h < 12) return { te: 'శుభోదయం', en: 'Good morning' };
  if (h < 16) return { te: 'శుభ మధ్యాహ్నం', en: 'Good afternoon' };
  if (h < 20) return { te: 'శుభ సాయంత్రం', en: 'Good evening' };
  return { te: 'శుభ రాత్రి', en: 'Good night' };
}

const TILES: { href: string; te: string; en: string; emblem: EmblemKind; accent: string; colors: [string, string] }[] = [
  { href: '/daily', te: 'నిత్య పూజ', en: 'Daily Puja', emblem: 'lotus', accent: '#FF9EC4', colors: ['#5A1430', '#2A0816'] },
  { href: '/gita', te: 'భగవద్గీత', en: 'Bhagavad Gita', emblem: 'flute', accent: '#4FD1C5', colors: ['#0D3346', '#06151F'] },
  { href: '/ramayana', te: 'రామాయణం', en: 'Ramayana', emblem: 'bow', accent: '#7FE0A8', colors: ['#123A2A', '#061A12'] },
  { href: '/festivals', te: 'పండుగలు', en: 'Festivals', emblem: 'sun', accent: '#FFD24A', colors: ['#553108', '#221203'] },
  { href: '/deekshas', te: 'దీక్షలు', en: 'Deekshas', emblem: 'steps', accent: '#FFB000', colors: ['#2C2416', '#0E0B06'] },
  { href: '/stotras', te: 'స్తోత్రాలు', en: 'Stotras & Songs', emblem: 'veena', accent: '#E6EEFF', colors: ['#252B4D', '#0C0F22'] },
];

export default function Home() {
  const insets = useSafeAreaInsets();
  const { recent } = useStore();
  const now = new Date();
  const day = now.getDay();
  const deity = deityById(WEEKDAY_DEITY[day])!;
  const g = greeting(now.getHours());
  const recentTexts = useMemo(() => recent.map(textById).filter(Boolean).slice(0, 3), [recent]);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg0 }}>
      <Backdrop top={deity.colors[0]} mid={deity.colors[1]} />
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 130 }} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Animated.View entering={FadeInDown.duration(600)} style={styles.top}>
          <View style={{ flex: 1 }}>
            <Text style={styles.greetTe}>{g.te} 🙏</Text>
            <Text style={styles.greetEn}>
              {WEEKDAY_NAMES[day].te} · {WEEKDAY_NAMES[day].en}
            </Text>
          </View>
          <Diya size={46} />
          <View style={{ marginLeft: 10 }}>
            <IconButton label="Settings" onPress={() => router.push('/settings')}>
              <GearIcon />
            </IconButton>
          </View>
        </Animated.View>

        {/* Today's darshan */}
        <Animated.View entering={FadeInUp.duration(900).delay(150)} style={styles.hero}>
          <Text style={styles.todayLabel}>నేటి దర్శనం · TODAY’S DARSHAN</Text>
          <Press onPress={() => router.push(`/deity/${deity.id}`)} haptic={false} accessibilityLabel={deity.name.en}>
            <DivineAura emblem={deity.emblem} accent={deity.colors[2]} size={270} />
          </Press>
          <Text style={styles.deityTe}>{deity.name.te}</Text>
          <Text style={styles.deityEn}>{deity.name.en.toUpperCase()}</Text>
          <Text style={styles.japa}>{deity.japa.te}</Text>
          <View style={styles.heroBtns}>
            <Press onPress={() => router.push(`/text/puja-${deity.id}`)} style={[styles.btn, styles.btnGold]}>
              <Text style={styles.btnGoldTxt}>పూజ చేయండి</Text>
              <Text style={styles.btnGoldSub}>Begin Puja</Text>
            </Press>
            <Press onPress={() => router.push({ pathname: '/japa', params: { deity: deity.id } })} style={styles.btn}>
              <Text style={styles.btnTxt}>జపం</Text>
              <Text style={styles.btnSub}>Japa Mala</Text>
            </Press>
          </View>
        </Animated.View>

        {/* Library tiles */}
        <SectionTitle te="గ్రంథాలయం" en="Sacred Library" />
        <View style={styles.grid}>
          {TILES.map((t, i) => (
            <Animated.View key={t.href} entering={FadeInDown.delay(120 + i * 70).duration(500)} style={styles.tileWrap}>
              <Press onPress={() => router.push(t.href as never)} style={styles.tile}>
                <LinearGradient colors={t.colors} style={StyleSheet.absoluteFill} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
                <View style={styles.tileEmblem}>
                  <Emblem kind={t.emblem} size={62} accent={t.accent} animated={false} />
                </View>
                <Text style={styles.tileTe}>{t.te}</Text>
                <Text style={styles.tileEn}>{t.en}</Text>
              </Press>
            </Animated.View>
          ))}
        </View>

        {/* Deities carousel */}
        <SectionTitle te="దేవతలు" en="Gods & Goddesses" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 14, gap: 12 }}>
          {DEITIES.map((d) => (
            <Press key={d.id} onPress={() => router.push(`/deity/${d.id}`)} style={styles.deityChip}>
              <LinearGradient colors={[d.colors[0], d.colors[1]]} style={[StyleSheet.absoluteFill, { borderRadius: 60 }]} />
              <Emblem kind={d.emblem} size={64} accent={d.colors[2]} animated={false} />
              <Text numberOfLines={1} style={styles.chipTe}>
                {d.name.te.replace('శ్రీ ', '')}
              </Text>
            </Press>
          ))}
        </ScrollView>

        {/* Continue reading */}
        {recentTexts.length > 0 && (
          <>
            <SectionTitle te="మళ్ళీ చదవండి" en="Continue Reading" />
            {recentTexts.map((t, i) => (
              <TextRow key={t!.id} text={t!} index={i} />
            ))}
          </>
        )}

        {/* Festivals */}
        <SectionTitle te="పండుగలు" en="Festivals" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
          {FESTIVALS.map((f) => {
            const d = deityById(f.deity)!;
            return (
              <Press key={f.id} onPress={() => router.push(`/collection/${f.id}`)} style={styles.fest}>
                <LinearGradient colors={[d.colors[0], C.bg0]} style={StyleSheet.absoluteFill} />
                <Emblem kind={d.emblem} size={48} accent={d.colors[2]} animated={false} />
                <Text style={styles.festTe}>{f.name.te}</Text>
                <Text numberOfLines={2} style={styles.festWhen}>
                  {f.when.te}
                </Text>
              </Press>
            );
          })}
        </ScrollView>

        <Text style={styles.footer}>సర్వే జనాః సుఖినో భవంతు</Text>
      </ScrollView>
      <Dock />
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22 },
  greetTe: { fontFamily: F.teBold, color: C.cream, fontSize: 26, lineHeight: 44 },
  greetEn: { fontFamily: F.teSerif, color: C.muted, fontSize: 13, lineHeight: 22 },
  hero: { alignItems: 'center', marginTop: 10 },
  todayLabel: { fontFamily: F.teSerif, color: C.gold, fontSize: 11.5, letterSpacing: 1.5, lineHeight: 20, marginBottom: 4 },
  deityTe: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 30, lineHeight: 50, marginTop: 4 },
  deityEn: { fontFamily: F.title, color: C.faint, fontSize: 12, letterSpacing: 3 },
  japa: { fontFamily: F.te, color: C.cream, fontSize: 19, lineHeight: 32, marginTop: 10 },
  heroBtns: { flexDirection: 'row', gap: 12, marginTop: 18 },
  btn: {
    minWidth: 140,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: C.gold,
    backgroundColor: 'rgba(232,184,74,0.08)',
  },
  btnGold: { backgroundColor: C.gold, borderColor: C.goldSoft },
  btnTxt: { fontFamily: F.teBold, color: C.goldSoft, fontSize: 16, lineHeight: 26 },
  btnSub: { fontFamily: F.title, color: C.faint, fontSize: 9.5, letterSpacing: 1.5 },
  btnGoldTxt: { fontFamily: F.teBold, color: C.bg0, fontSize: 16, lineHeight: 26 },
  btnGoldSub: { fontFamily: F.title, color: 'rgba(16,5,12,0.65)', fontSize: 9.5, letterSpacing: 1.5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12 },
  tileWrap: { width: '50%', padding: 6 },
  tile: { height: 150, borderRadius: 24, overflow: 'hidden', padding: 14, justifyContent: 'flex-end', borderWidth: 1, borderColor: C.line },
  tileEmblem: { position: 'absolute', top: 10, right: 8, opacity: 0.95 },
  tileTe: { fontFamily: F.teBold, color: C.cream, fontSize: 19, lineHeight: 32 },
  tileEn: { fontFamily: F.title, color: C.muted, fontSize: 10, letterSpacing: 1.2 },
  deityChip: {
    width: 96,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.line,
  },
  chipTe: { fontFamily: F.teSerif, color: C.cream, fontSize: 12.5, lineHeight: 22, marginTop: 2, paddingHorizontal: 6 },
  fest: { width: 150, height: 170, borderRadius: 22, overflow: 'hidden', padding: 14, borderWidth: 1, borderColor: C.line, justifyContent: 'space-between' },
  festTe: { fontFamily: F.teBold, color: C.cream, fontSize: 17, lineHeight: 28 },
  festWhen: { fontFamily: F.teSerif, color: C.muted, fontSize: 11.5, lineHeight: 19 },
  footer: { fontFamily: F.te, color: C.faint, fontSize: 16, textAlign: 'center', marginTop: 36, lineHeight: 28 },
});
