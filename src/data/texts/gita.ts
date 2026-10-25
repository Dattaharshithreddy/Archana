import type { GitaChapter, SacredText } from '../types';
import { GITA_NOTES, gitaChapterVerses } from '../gita';

export const GITA_CHAPTERS: GitaChapter[] = [
  { n: 1, verses: 47, name: { te: 'అర్జున విషాద యోగం', en: 'Arjuna’s Despair' }, summary: { te: 'కురుక్షేత్రంలో బంధువులను చూసి అర్జునుడు దుఃఖంతో ధనుస్సు విడిచిపెడతాడు.', en: 'Seeing his own kin on the battlefield, Arjuna is overwhelmed by grief and lays down his bow.' } },
  { n: 2, verses: 72, name: { te: 'సాంఖ్య యోగం', en: 'The Yoga of Knowledge' }, summary: { te: 'ఆత్మ నిత్యమైనది, శరీరం నశించేది. ఫలాపేక్ష లేకుండా కర్తవ్యం చేయమని శ్రీకృష్ణుడు బోధిస్తాడు.', en: 'The Self is eternal; the body perishes. Krishna teaches duty without attachment to results, and describes the person of steady wisdom.' } },
  { n: 3, verses: 43, name: { te: 'కర్మ యోగం', en: 'The Yoga of Action' }, summary: { te: 'కర్మ చేయకుండా ఎవరూ ఉండలేరు. యజ్ఞభావంతో, స్వార్థం లేకుండా కర్మ చేయాలి.', en: 'No one can remain without action. Act selflessly, as an offering, and set an example for the world.' } },
  { n: 4, verses: 42, name: { te: 'జ్ఞాన కర్మ సన్న్యాస యోగం', en: 'Knowledge and Renunciation of Action' }, summary: { te: 'ధర్మ రక్షణకై భగవంతుడు అవతరిస్తాడు. జ్ఞానాగ్ని కర్మబంధాలను దహిస్తుంది.', en: 'The Lord descends to protect dharma. The fire of knowledge burns away the bondage of action.' } },
  { n: 5, verses: 29, name: { te: 'కర్మ సన్న్యాస యోగం', en: 'Renunciation of Action' }, summary: { te: 'తామరాకుపై నీటిబొట్టులా, ఆసక్తి లేకుండా కర్మ చేసేవాడిని పాపం అంటదు.', en: 'Like water on a lotus leaf, one who acts without attachment is untouched by sin. The wise see all beings equally.' } },
  { n: 6, verses: 47, name: { te: 'ఆత్మ సంయమ యోగం', en: 'The Yoga of Meditation' }, summary: { te: 'ధ్యానం చేసే విధానం, మనస్సును అభ్యాసం, వైరాగ్యాలతో నిగ్రహించడం.', en: 'How to meditate, and how the restless mind is tamed by practice and detachment. Raise yourself by yourself.' } },
  { n: 7, verses: 30, name: { te: 'జ్ఞాన విజ్ఞాన యోగం', en: 'Knowledge and Realisation' }, summary: { te: 'సృష్టి అంతా భగవంతునిలోనే ఉంది. నాలుగు రకాల భక్తులు ఆయనను ఆరాధిస్తారు.', en: 'All creation rests in the Lord like pearls on a thread. Four kinds of people turn to Him.' } },
  { n: 8, verses: 28, name: { te: 'అక్షర బ్రహ్మ యోగం', en: 'The Imperishable Brahman' }, summary: { te: 'అంత్యకాలంలో భగవంతుని స్మరించినవాడు ఆయననే చేరుతాడు. ఎల్లప్పుడూ స్మరించమని బోధ.', en: 'Whoever remembers the Lord at the end reaches Him — so remember Him at all times.' } },
  { n: 9, verses: 34, name: { te: 'రాజవిద్యా రాజగుహ్య యోగం', en: 'The Royal Secret' }, summary: { te: 'భక్తితో ఆకు, పువ్వు, పండు, నీరు ఏది ఇచ్చినా స్వీకరిస్తాను. భక్తుల యోగక్షేమాలు నేను చూసుకుంటాను.', en: 'A leaf, a flower, a fruit or water offered with love — the Lord accepts it, and carries the welfare of His devotees.' } },
  { n: 10, verses: 42, name: { te: 'విభూతి యోగం', en: 'Divine Glories' }, summary: { te: 'లోకంలో ఏది గొప్పగా, తేజస్సుతో ఉన్నా అది నా తేజస్సులో అంశమే.', en: 'Whatever is glorious, beautiful or mighty in the world springs from a spark of the Lord’s splendour.' } },
  { n: 11, verses: 55, name: { te: 'విశ్వరూప సందర్శన యోగం', en: 'The Cosmic Form' }, summary: { te: 'అర్జునునికి శ్రీకృష్ణుడు విశ్వరూపాన్ని చూపిస్తాడు — వేల సూర్యుల కాంతి.', en: 'Krishna reveals His universal form to Arjuna — brighter than a thousand suns rising at once.' } },
  { n: 12, verses: 20, name: { te: 'భక్తి యోగం', en: 'The Yoga of Devotion' }, summary: { te: 'భగవంతునికి ప్రియమైన భక్తుని లక్షణాలు — ద్వేషం లేనివాడు, దయగలవాడు, సమబుద్ధి.', en: 'The qualities of the devotee dear to God — free of hatred, kind, compassionate and even-minded.' } },
  { n: 13, verses: 35, name: { te: 'క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగం', en: 'The Field and its Knower' }, summary: { te: 'శరీరం క్షేత్రం, దానిని తెలుసుకునే ఆత్మ క్షేత్రజ్ఞుడు. ఈ భేదాన్ని తెలుసుకోవడమే జ్ఞానం.', en: 'The body is the field; the Self is its knower. Knowing this difference is true knowledge.' } },
  { n: 14, verses: 27, name: { te: 'గుణత్రయ విభాగ యోగం', en: 'The Three Gunas' }, summary: { te: 'సత్త్వ, రజస్, తమస్ — మూడు గుణాలు మనిషిని బంధిస్తాయి. వాటిని దాటినవాడు ముక్తుడు.', en: 'Sattva, rajas and tamas bind the soul. One who rises above all three is free.' } },
  { n: 15, verses: 20, name: { te: 'పురుషోత్తమ యోగం', en: 'The Supreme Person' }, summary: { te: 'వేర్లు పైకి, కొమ్మలు కిందకు ఉన్న అశ్వత్థ వృక్షం — సంసారానికి ప్రతీక.', en: 'The eternal ashvattha tree with roots above and branches below — an image of worldly existence — and the Supreme beyond it.' } },
  { n: 16, verses: 24, name: { te: 'దైవాసుర సంపద్విభాగ యోగం', en: 'Divine and Demonic Natures' }, summary: { te: 'కామం, క్రోధం, లోభం — ఈ మూడు నరక ద్వారాలు. వీటిని విడిచిపెట్టాలి.', en: 'Desire, anger and greed are the three gates to ruin — abandon them.' } },
  { n: 17, verses: 28, name: { te: 'శ్రద్ధాత్రయ విభాగ యోగం', en: 'The Three Kinds of Faith' }, summary: { te: 'మనిషి ఎలాంటి శ్రద్ధ కలవాడో అలాంటివాడే అవుతాడు. ఆహారం, తపస్సు, దానం మూడు రకాలు.', en: 'A person is made of their faith. Food, austerity and charity each take three forms.' } },
  { n: 18, verses: 78, name: { te: 'మోక్ష సన్న్యాస యోగం', en: 'Liberation through Renunciation' }, summary: { te: 'అన్ని ధర్మాలను విడిచి నన్నే శరణు పొందు — గీత సారాంశం. అర్జునుని సందేహాలు తొలగుతాయి.', en: 'Surrender all to Me — the Gita’s final teaching. Arjuna’s doubts vanish and he rises to act.' } },
];

export const GITA_TEXTS: SacredText[] = [
  {
    id: 'gita-dhyanam',
    title: { te: 'గీతా ధ్యానం', en: 'Gita Dhyanam' },
    kind: 'shloka',
    deities: ['krishna'],
    intro: { te: 'గీత పారాయణకు ముందు చదివే ధ్యాన శ్లోకాలు.', en: 'Meditation verses recited before reading the Gita.' },
    verses: [
      { te: 'ప్రపన్నపారిజాతాయ తోత్రవేత్రైకపాణయే ।\nజ్ఞానముద్రాయ కృష్ణాయ గీతామృతదుహే నమః ॥', en: 'Salutations to Krishna — the wish-fulfilling tree for those who surrender, holding a whip in one hand and showing the sign of wisdom with the other, who milks the nectar of the Gita.' },
      { te: 'సర్వోపనిషదో గావో దోగ్ధా గోపాలనందనః ।\nపార్థో వత్సః సుధీర్భోక్తా దుగ్ధం గీతామృతం మహత్ ॥', en: 'The Upanishads are the cows, Krishna the milker, Arjuna the calf; the wise enjoy the milk — the great nectar of the Gita.' },
    ],
  },
  ...GITA_CHAPTERS.map<SacredText>((c) => ({
    id: `gita-${c.n}`,
    title: { te: `${c.n}. ${c.name.te}`, en: `Chapter ${c.n} · ${c.name.en}` },
    kind: 'shloka',
    deities: ['krishna'],
    chapter: c.n,
    intro: GITA_NOTES[c.n - 1].story,
    lessons: GITA_NOTES[c.n - 1].lessons,
    verses: gitaChapterVerses(c.n),
  })),
];
