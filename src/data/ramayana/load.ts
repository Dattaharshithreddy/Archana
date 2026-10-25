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
    intro:
      n === sargas[0][0]
        ? meta.summary
        : en.length
          ? undefined
          : { te: 'ఈ సర్గకు ఆంగ్ల అనువాదం ఇంకా జోడించలేదు — మూల శ్లోకాలు సంపూర్ణంగా ఉన్నాయి.', en: 'An English translation is not yet aligned for this sarga — the full original verses are here.' },
    verses: te.map((t, i) => ({ te: t, en: en[i] || undefined, ref: `${ki + 1}.${n}.${i + 1}` })),
    nav: {
      prev: prev ? { id: valmikiId(prev[0], prev[1]), label: sargaLabel(prev[0], prev[1]) } : undefined,
      next: next ? { id: valmikiId(next[0], next[1]), label: sargaLabel(next[0], next[1]) } : undefined,
    },
  };
  built.set(id, text);
  return text;
}
