import type { Bi, SacredText } from '../types';
import { KANDAS } from '../texts/ramayana';
import INDEX from './index.json';

/** [sargaNumber, telugu verses, english verses (empty when not aligned)] */
type Sarga = [number, string[], string[]];

export const VALMIKI_KANDA_IDS = ['bala', 'ayodhya', 'aranya', 'kishkindha', 'sundara', 'yuddha', 'uttara'] as const;
export type KandaId = (typeof VALMIKI_KANDA_IDS)[number];

/** Per kanda: [sarga, verseCount, hasEnglish] */
export const VALMIKI_INDEX = INDEX as [number, number, number][][];
export const VALMIKI_TOTAL = VALMIKI_INDEX.flat().reduce((a, s) => a + s[1], 0);
export const VALMIKI_SARGAS = VALMIKI_INDEX.flat().length;

const cache = new Map<string, Sarga[]>();
const sumCache = new Map<string, Record<string, [string, string]>>();

const bhCache = new Map<string, Record<string, string[]>>();
/** Telugu bhavam per shloka, written kanda by kanda. */
function sargaBhavam(k: string): Record<string, string[]> {
  let d = bhCache.get(k);
  if (!d) {
    switch (k) {
      case 'bala': d = require('./bhavam/bala.json'); break;
      case 'ayodhya': d = require('./bhavam/ayodhya.json'); break;
      case 'aranya': d = require('./bhavam/aranya.json'); break;
      case 'kishkindha': d = require('./bhavam/kishkindha.json'); break;
      case 'sundara': d = require('./bhavam/sundara.json'); break;
      case 'yuddha': d = require('./bhavam/yuddha.json'); break;
      case 'uttara': d = require('./bhavam/uttara.json'); break;
      default: d = {};
    }
    bhCache.set(k, d!);
  }
  return d!;
}

/** Telugu + English summary of every sarga (small, loaded per kanda). */
export function sargaSummaries(k: string): Record<string, [string, string]> {
  let d = sumCache.get(k);
  if (!d) {
    switch (k) {
      case 'bala': d = require('./summaries/bala.json'); break;
      case 'ayodhya': d = require('./summaries/ayodhya.json'); break;
      case 'aranya': d = require('./summaries/aranya.json'); break;
      case 'kishkindha': d = require('./summaries/kishkindha.json'); break;
      case 'sundara': d = require('./summaries/sundara.json'); break;
      case 'yuddha': d = require('./summaries/yuddha.json'); break;
      case 'uttara': d = require('./summaries/uttara.json'); break;
      default: d = {};
    }
    sumCache.set(k, d!);
  }
  return d!;
}

/** Kanda data is required lazily so it is only parsed when that kanda is opened. */
function loadKanda(k: KandaId): Sarga[] {
  let d = cache.get(k);
  if (!d) {
    switch (k) {
      case 'bala': d = require('./bala.json'); break;
      case 'ayodhya': d = require('./ayodhya.json'); break;
      case 'aranya': d = require('./aranya.json'); break;
      case 'kishkindha': d = require('./kishkindha.json'); break;
      case 'sundara': d = require('./sundara.json'); break;
      case 'yuddha': d = require('./yuddha.json'); break;
      case 'uttara': d = require('./uttara.json'); break;
    }
    cache.set(k, d!);
  }
  return d!;
}

export const kandaNo = (k: string) => VALMIKI_KANDA_IDS.indexOf(k as KandaId) + 1;
export const kandaMeta = (k: string) => KANDAS.find((x) => x.id === k);
const sargaLabel = (k: string, n: number): Bi => ({
  te: `${kandaMeta(k)?.name.te ?? ''} · ${n}వ సర్గ`,
  en: `${kandaMeta(k)?.name.en ?? ''} · Sarga ${n}`,
});

export const valmikiId = (k: string, n: number) => `valmiki-${k}-${n}`;

const built = new Map<string, SacredText>();

export function valmikiSarga(id: string): SacredText | undefined {
  const hit = built.get(id);
  if (hit) return hit;
  const m = /^valmiki-([a-z]+)-(\d+)$/.exec(id);
  if (!m) return undefined;
  const k = m[1] as KandaId;
  const ki = kandaNo(k) - 1;
  if (ki < 0) return undefined;
  const n = Number(m[2]);
  const sargas = loadKanda(k);
  const pos = sargas.findIndex((s) => s[0] === n);
  if (pos < 0) return undefined;
  const [, te, en] = sargas[pos];
  const meta = kandaMeta(k)!;

  // previous / next sarga, crossing kanda boundaries
  const flat = VALMIKI_INDEX.flatMap((ss, i) => ss.map((s) => [VALMIKI_KANDA_IDS[i], s[0]] as const));
  const fi = flat.findIndex(([kk, nn]) => kk === k && nn === n);
  const prev = flat[fi - 1];
  const next = flat[fi + 1];

  const text: SacredText = {
    id,
    title: sargaLabel(k, n),
    kind: 'shloka',
    deities: [k === 'sundara' ? 'hanuman' : 'rama'],
    source: 'Valmiki Ramayana · English: M. N. Dutt (1891–94)',
    intro: (() => {
      const sm = sargaSummaries(k)[String(n)];
      const noEn = en.length ? '' : '\n\n(ఈ సర్గకు శ్లోకాల వారీ ఆంగ్ల అనువాదం లేదు.)';
      const noEnEn = en.length ? '' : '\n\n(Verse-by-verse English is not available for this sarga.)';
      if (!te.length)
        return {
          te: `సర్గ సారాంశం: ${sm?.[0] ?? ''}\n\n(ఈ సర్గ మూల సంస్కృత శ్లోకాలు మా మూల గ్రంథంలో లేవు. ఆంగ్ల అనువాదం, దాని తెలుగు భావం ఇక్కడ ఇవ్వబడ్డాయి.)`,
          en: `In this sarga: ${sm?.[1] ?? ''}\n\n(The Sanskrit of this sarga is missing from our source edition, so the English translation and its Telugu bhavam are given.)`,
        };
      return sm ? { te: `సర్గ సారాంశం: ${sm[0]}${noEn}`, en: `In this sarga: ${sm[1]}${noEnEn}` } : meta.summary;
    })(),
    // A few sargas (Sundarakanda 19–20) have no Sanskrit in the source; their verses carry English + bhavam only.
    verses: Array.from({ length: Math.max(te.length, en.length) }, (_, i) => ({
      te: te[i] || undefined,
      en: en[i] || undefined,
      bhavam: sargaBhavam(k)[String(n)]?.[i] || undefined,
      ref: `${ki + 1}.${n}.${i + 1}`,
    })),
    nav: {
      prev: prev ? { id: valmikiId(prev[0], prev[1]), label: sargaLabel(prev[0], prev[1]) } : undefined,
      next: next ? { id: valmikiId(next[0], next[1]), label: sargaLabel(next[0], next[1]) } : undefined,
    },
  };
  built.set(id, text);
  return text;
}
