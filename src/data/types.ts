export type Bi = { te: string; en: string };

/** One block in a text. Mantras/shlokas use `te` (Telugu script) + `en` (English meaning).
 *  Transliteration is generated at runtime from `te` (see lib/translit.ts). */
export type Verse = {
  /** Section heading shown above the verse, e.g. "ఆచమనం / Achamanam" */
  heading?: Bi;
  /** Instruction for puja steps — what to do with hands, items, etc. */
  step?: Bi;
  /** The mantra / shloka in Telugu script */
  te?: string;
  /** English meaning */
  en?: string;
  /** Verse reference, e.g. "2.47" */
  ref?: string;
  /** Suggested repetitions */
  repeat?: number;
  /** Simple Telugu explanation (భావం) */
  bhavam?: string;
  /** "What this means for you" note */
  note?: Bi;
  /** Who is speaking, shown as a small label (Gita) */
  speaker?: Bi;
};

export type TextKind =
  | 'mantra'
  | 'shloka'
  | 'stotram'
  | 'vidhanam'
  | 'keertana'
  | 'guide';

export type SacredText = {
  id: string;
  title: Bi;
  kind: TextKind;
  deities: string[];
  /** Daily routine slot, if any */
  daily?: 'morning' | 'puja' | 'meal' | 'study' | 'evening' | 'night';
  intro?: Bi;
  verses: Verse[];
  source?: string;
  /** Key lessons shown after the introduction */
  lessons?: Bi[];
  /** Gita chapter number, for chapter navigation */
  chapter?: number;
  /** Language of the verses — Hindi/Awadhi drops the final "a" when transliterating. Default Sanskrit. */
  lang?: 'sa' | 'hi' | 'te';
  /** Mark content that must be checked by a pandit before store release */
  review?: boolean;
  /** Generic previous/next navigation shown at the end of the reader */
  nav?: { prev?: { id: string; label: Bi }; next?: { id: string; label: Bi } };
};

export type EmblemKind =
  | 'modak'
  | 'trishul'
  | 'chakra'
  | 'namam'
  | 'bow'
  | 'flute'
  | 'gada'
  | 'lotus'
  | 'veena'
  | 'yantra'
  | 'vel'
  | 'steps'
  | 'sun';

export type Deity = {
  id: string;
  name: Bi;
  epithet: Bi;
  emblem: EmblemKind;
  /** gradient top → bottom, plus accent */
  colors: [string, string, string];
  about: Bi;
  /** Moola mantra used in Japa */
  japa: { te: string; en: string };
  /** dative form used in puja steps: "శ్రీ మహాగణాధిపతయే నమః" */
  pujaName: string;
};

export type Collection = {
  id: string;
  type: 'festival' | 'deeksha';
  name: Bi;
  when: Bi;
  deity: string;
  about: Bi;
  samagri?: Bi[];
  /** Ordered how-to steps in plain language */
  steps: Bi[];
  /** Rules/do's (deekshas) */
  rules?: Bi[];
  textIds: string[];
};

export type GitaChapter = {
  n: number;
  name: Bi;
  verses: number;
  summary: Bi;
};
