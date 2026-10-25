import type { SacredText, Verse } from '../types';
import type { GitaNotes } from './types';
import ch01 from './notes/ch01';
import ch02 from './notes/ch02';
import ch03 from './notes/ch03';
import ch04 from './notes/ch04';
import ch05 from './notes/ch05';
import ch06 from './notes/ch06';
import ch07 from './notes/ch07';
import ch08 from './notes/ch08';
import ch09 from './notes/ch09';
import ch10 from './notes/ch10';
import ch11 from './notes/ch11';
import ch12 from './notes/ch12';
import ch13 from './notes/ch13';
import ch14 from './notes/ch14';
import ch15 from './notes/ch15';
import ch16 from './notes/ch16';
import ch17 from './notes/ch17';
import ch18 from './notes/ch18';

type RawVerse = { c: number; n: number; sp: string | null; who: string; te: string };
// eslint-disable-next-line @typescript-eslint/no-require-imports
const RAW: RawVerse[] = require('./verses.json');

export const GITA_NOTES: GitaNotes[] = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18];

const SPEAKER: Record<string, { te: string; en: string }> = {
  dhritarashtra: { te: 'ధృతరాష్ట్ర ఉవాచ', en: 'Dhritarashtra said' },
  sanjaya: { te: 'సంజయ ఉవాచ', en: 'Sanjaya said' },
  arjuna: { te: 'అర్జున ఉవాచ', en: 'Arjuna said' },
  krishna: { te: 'శ్రీభగవానువాచ', en: 'Sri Krishna said' },
};

/** All verses of one chapter, merged with their meanings and notes */
export function gitaChapterVerses(chapter: number): Verse[] {
  const notes = GITA_NOTES[chapter - 1];
  const byNum = new Map(notes.v.map(([n, en, te]) => [n, { en, te }]));
  return RAW.filter((r) => r.c === chapter).map((r) => {
    const m = byNum.get(r.n);
    return {
      ref: `${r.c}.${r.n}`,
      te: r.te,
      en: m?.en,
      bhavam: m?.te,
      note: notes.x?.[r.n],
      speaker: r.sp ? SPEAKER[r.sp] : undefined,
    };
  });
}

export const GITA_TOTAL = RAW.length;
