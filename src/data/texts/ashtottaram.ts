import type { SacredText } from '../types';
import { DEITIES } from '../deities';
import { ASHTOTTARAM_NAMES } from './ashtottaram-names';

/** One ashtottara shatanamavali (108 names) per deity, recited during pushpa puja. */
export const ASHTOTTARAMS: SacredText[] = DEITIES.filter((d) => ASHTOTTARAM_NAMES[d.id]).map((d) => {
  const names = ASHTOTTARAM_NAMES[d.id];
  if (names.length !== 108) throw new Error(`ashtottaram ${d.id} has ${names.length} names`);
  const short = d.name.te.replace(/^శ్రీ\s*/, '');
  return {
    id: `ashtottaram-${d.id}`,
    title: { te: `${short} అష్టోత్తర శతనామావళి`, en: `${d.name.en.replace(/^(Sri|Lord)\s*/, '')} Ashtottara Shatanamavali` },
    kind: 'stotram',
    deities: [d.id],
    review: true,
    intro: {
      te: 'పూజలో పుష్పపూజ సమయంలో ప్రతి నామానికి ఒక పువ్వు లేదా అక్షతలు సమర్పిస్తూ "ఓం … నమః" అని పలకండి. 108 నామాలు పూర్తయ్యాక "నానావిధ పరిమళ పత్ర పుష్పాణి సమర్పయామి" అని చెప్పండి.',
      en: 'During pushpa puja, offer one flower or a few grains of akshata with each name, saying “Om … namah”. After all 108, say “nānāvidha parimaḷa patra puṣpāṇi samarpayāmi”.',
    },
    verses: [
      ...names.map((n, i) => ({ ref: String(i + 1), te: `ఓం ${n} నమః` })),
      {
        heading: { te: 'సమర్పణ', en: 'Offering' },
        te: `ఇతి శ్రీ ${short} అష్టోత్తర శతనామావళిః సమాప్తా ॥\nనానావిధ పరిమళ పత్ర పుష్పాణి సమర్పయామి ॥`,
        en: `Thus ends the 108 names of ${d.name.en}. I offer leaves and flowers of many fragrances.`,
      },
    ],
  } satisfies SacredText;
});
