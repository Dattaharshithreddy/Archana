/** [verse number, simple English meaning, simple Telugu భావం] */
export type VerseNote = [number, string, string];

export type GitaNotes = {
  /** Simple summary of the chapter for a first-time reader */
  story: { te: string; en: string };
  /** 3–5 lessons a reader can take into daily life */
  lessons: { te: string; en: string }[];
  /** One entry per verse, in order */
  v: VerseNote[];
  /** Extra "what this means for you" notes on key verses */
  x?: Record<number, { te: string; en: string }>;
};
