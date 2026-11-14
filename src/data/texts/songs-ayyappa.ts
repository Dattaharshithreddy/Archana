import type { SacredText, Verse } from '../types';

const b = (te: string, en: string) => ({ te, en });

/** The eighteen holy steps: Malayalam ordinal used in the chant, and what each step stands for. */
const PADIS: [string, string, string, string][] = [
  ['ఒన్నాం', 'కన్ను (చూపు)', 'the eyes (sight)', 'కంటితో మంచినే చూడాలి.'],
  ['రెండాం', 'చెవి (వినికిడి)', 'the ears (hearing)', 'చెవితో మంచినే వినాలి.'],
  ['మూన్నాం', 'ముక్కు (వాసన)', 'the nose (smell)', 'ఇంద్రియ సుఖాలకు బానిస కాకూడదు.'],
  ['నాలాం', 'నాలుక (రుచి)', 'the tongue (taste)', 'సాత్వికాహారం, మంచి మాట.'],
  ['అంజాం', 'చర్మం (స్పర్శ)', 'the skin (touch)', 'ఐదు ఇంద్రియాలనూ అదుపులో ఉంచుకోవాలి.'],
  ['ఆరాం', 'కామం', 'desire (kama)', 'కోరికలను జయించాలి.'],
  ['ఏళాం', 'క్రోధం', 'anger (krodha)', 'కోపాన్ని విడవాలి.'],
  ['ఎట్టాం', 'లోభం', 'greed (lobha)', 'లోభాన్ని విడవాలి.'],
  ['ఒంబదాం', 'మోహం', 'delusion (moha)', 'మోహాన్ని విడవాలి.'],
  ['పత్తాం', 'మదం', 'arrogance (mada)', 'గర్వాన్ని విడవాలి.'],
  ['పదినొన్నాం', 'మాత్సర్యం', 'envy (matsarya)', 'ఈర్ష్యను విడవాలి.'],
  ['పన్త్రండాం', 'అసూయ', 'jealousy (asuya)', 'అసూయను విడవాలి.'],
  ['పదిమూన్నాం', 'దంభం (అహంకారం)', 'vanity and ego (dambha)', 'అహంకారాన్ని విడవాలి.'],
  ['పదినాలాం', 'సత్త్వ గుణం', 'sattva guna', 'మూడు గుణాలను దాటాలి — సత్త్వం.'],
  ['పదినంజాం', 'రజో గుణం', 'rajo guna', 'మూడు గుణాలను దాటాలి — రజస్సు.'],
  ['పదినారాం', 'తమో గుణం', 'tamo guna', 'మూడు గుణాలను దాటాలి — తమస్సు.'],
  ['పదినేళాం', 'విద్య', 'knowledge (vidya)', 'విద్యను కూడా దాటి —'],
  ['పదినెట్టాం', 'అవిద్య', 'ignorance (avidya)', 'అజ్ఞానాన్ని విడిచి, "తత్త్వమసి" — నువ్వే అది — అనే సత్యాన్ని చేరాలి.'],
];

const padiVerses: Verse[] = PADIS.map(([ord, te, en, bh], i) => ({
  heading: b(`${i + 1}వ పడి — ${te}`, `Step ${i + 1} — ${en}`),
  step: b(
    'ఈ మెట్టుపై దీపం వెలిగించి, పూలు (వీలైతే పసుపు/కుంకుమ, ఒక పండు) సమర్పించి, నమస్కరించి ఈ శరణం పలకండి.',
    'Light the lamp on this step, offer flowers (and turmeric, kumkum or a fruit if you have them), bow, and call this sharanam.',
  ),
  te: `${ord} తిరుప్పడి శరణం పొన్నయ్యప్పా\nస్వామియే శరణం అయ్యప్ప`,
  en: `Refuge, golden Ayyappa, at the ${ordinal(i + 1)} holy step. O Lord, you are my refuge.`,
  bhavam: `${i + 1}వ మెట్టు ${te}కు గుర్తు. ${bh}`,
}));

function ordinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const AYYAPPA_SONGS: SacredText[] = [
  {
    id: 'ayyappa-padi-puja',
    title: b('అయ్యప్ప పడి పూజ (పదునెట్టాంబడి పూజ)', 'Ayyappa Padi Puja (18 Steps)'),
    kind: 'vidhanam',
    deities: ['ayyappa'],
    review: true,
    source: 'Traditional Ayyappa deeksha practice (as commonly done in Telugu homes and bhajan mandalis)',
    intro: b(
      'మండల దీక్షలో, సాధారణంగా ఇరుముడి కట్టే ముందు, గురుస్వామి నేతృత్వంలో పద్దెనిమిది మెట్ల పడిని అలంకరించి చేసే పూజ. శబరిమలలోని పవిత్ర పదునెట్టాంబడికి ఇది ప్రతీక. ఒక్కో మెట్టు మనిషి దాటవలసిన ఒక్కో బంధానికి గుర్తు — ఐదు ఇంద్రియాలు, ఎనిమిది రాగాలు, మూడు గుణాలు, విద్య-అవిద్య. (పద్దెనిమిది కొండలకు గుర్తు అని కూడా చెబుతారు.) మీ గురుస్వామి సంప్రదాయాన్ని అనుసరించండి.',
      'Done during the mandala deeksha, usually before the irumudi is tied, led by the Guruswamy, on a decorated stand of eighteen steps that stands for the holy Pathinettam Padi at Sabarimala. Each step is a bond the seeker crosses — the five senses, the eight passions, the three gunas, and knowledge and ignorance. (Some traditions say they stand for the eighteen hills.) Follow your Guruswamy’s tradition.',
    ),
    lessons: [
      b('పూజ పూర్తయ్యే వరకు దీపాలు ఆరిపోకుండా చూడండి.', 'Keep all eighteen lamps burning until the puja is complete.'),
      b('శరణం గట్టిగా, అందరూ కలిసి పలకాలి — అదే పడి పూజ బలం.', 'Call the sharanams loudly and together — that is the heart of padi puja.'),
    ],
    verses: [
      {
        heading: b('సిద్ధం చేయడం', 'Preparation'),
        step: b(
          'పడి (18 మెట్లు)ని శుభ్రం చేసి తూర్పు ముఖంగా ఉంచండి. పైన అయ్యప్ప చిత్రం/విగ్రహం. ప్రతి మెట్టుపై ఒక దీపం (మొత్తం 18), పూలు, అరటి ఆకులు, కొబ్బరికాయ, కర్పూరం, అగరుబత్తి, పండ్లు, పాయసం/నైవేద్యం సిద్ధంగా ఉంచండి. అందరూ స్నానం చేసి దీక్షా వస్త్రాల్లో కూర్చోవాలి.',
          'Clean the eighteen-step stand and set it facing east, with Ayyappa’s picture or idol at the top. Keep ready 18 lamps (one per step), flowers, banana leaves, coconut, camphor, incense, fruit and payasam or other naivedyam. Everyone bathes and sits in deeksha clothes.',
        ),
      },
      {
        heading: b('గణపతి ప్రార్థన', 'Ganapati Prarthana'),
        step: b('మొదట గణపతిని ప్రార్థించి విఘ్నాలు తొలగమని కోరండి.', 'Begin by praying to Ganapati to remove obstacles.'),
        te: 'శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥',
        en: 'I meditate on the Lord in white, all-pervading, moon-bright, four-armed, with a gracious face — that every obstacle may be removed.',
        bhavam: 'తెల్లని వస్త్రాలు ధరించిన, చంద్రుని వంటి కాంతి గల, నాలుగు చేతులు గల, ప్రసన్న ముఖం గల దేవుని అన్ని విఘ్నాలు తొలగడానికి ధ్యానిస్తున్నాను.',
      },
      {
        heading: b('గురు వందనం', 'Guru Vandanam'),
        step: b('గురుస్వామికి నమస్కరించండి.', 'Bow to the Guruswamy.'),
        te: 'గురుర్బ్రహ్మా గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః ।\nగురుః సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీగురవే నమః ॥',
        en: 'The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshvara; the Guru is the Supreme itself. Salutations to that Guru.',
        bhavam: 'గురువే బ్రహ్మ, విష్ణువు, మహేశ్వరుడు; గురువే సాక్షాత్ పరబ్రహ్మ. అలాంటి గురువుకు నమస్కారం.',
      },
      {
        heading: b('అయ్యప్ప ధ్యానం', 'Ayyappa Dhyanam'),
        step: b('పడి పైన ఉన్న స్వామిని ధ్యానించి, పై దీపం వెలిగించండి.', 'Meditate on the Lord at the top of the steps and light the main lamp.'),
        te: 'భూతనాథ సదానంద సర్వభూతదయాపర ।\nరక్ష రక్ష మహాబాహో శాస్త్రే తుభ్యం నమో నమః ॥',
        en: 'Lord of all beings, ever-blissful, compassionate to all — protect me, mighty-armed one. O Sastha, salutations to you again and again.',
        bhavam: 'భూతాలకు నాథుడా, ఎల్లప్పుడూ ఆనందమయుడా, అన్ని ప్రాణులపై దయగలవాడా, మహాబాహూ! కాపాడు. శాస్తా! నీకు మళ్ళీ మళ్ళీ నమస్కారం.',
      },
      {
        heading: b('పడి పూజ ప్రారంభం', 'Beginning the Steps'),
        step: b(
          'కింది మెట్టు నుండి పైకి — ఒక్కో మెట్టుకు దీపం, పూలు సమర్పిస్తూ, శరణం అందరూ కలిసి పలకాలి.',
          'From the lowest step upward — offer a lamp and flowers on each step while everyone calls its sharanam together.',
        ),
        te: 'పదునెట్టాం పడియే శరణం అయ్యప్ప',
        en: 'O holy eighteen steps, you are my refuge.',
        repeat: 3,
      },
      ...padiVerses,
      {
        heading: b('శరణు ఘోష', 'Sharanu Ghosha'),
        step: b(
          'పద్దెనిమిది మెట్లు పూర్తయ్యాక 108 శరణాలు ("అయ్యప్ప శరణు ఘోష") పలకండి.',
          'After all eighteen steps, call the 108 sharanams (see “Ayyappa Sharanu Ghosha”).',
        ),
        te: 'స్వామియే శరణం అయ్యప్ప\nహరిహర సుతనే శరణం అయ్యప్ప\nకన్నిమూల గణపతి భగవానే శరణం అయ్యప్ప\nశబరిగిరి వాసనే శరణం అయ్యప్ప',
        en: 'Refuge in you, O Lord; son of Hari and Hara; Kannimoola Ganapati; dweller of Sabari hill.',
      },
      {
        heading: b('నైవేద్యం', 'Naivedyam'),
        step: b(
          'పాయసం, పండ్లు, కొబ్బరి, పానకం వంటి నైవేద్యాన్ని నీటితో ప్రోక్షించి స్వామికి సమర్పించండి.',
          'Sprinkle water around the payasam, fruit, coconut and panakam, and offer them to the Lord.',
        ),
        te: 'ఓం శ్రీ ధర్మశాస్త్రే నమః — నైవేద్యం సమర్పయామి',
        en: 'Salutations to Sri Dharma Sastha — I offer this food.',
      },
      {
        heading: b('కర్పూర హారతి', 'Karpura Harathi'),
        step: b(
          'కర్పూరం వెలిగించి పడి మొత్తానికి, తర్వాత స్వామికి హారతి ఇవ్వండి. అందరూ "స్వామియే శరణం అయ్యప్ప" అంటూ ఉండాలి.',
          'Light camphor and wave it over all eighteen steps, then before the Lord, while everyone calls “Swamiye Sharanam Ayyappa”.',
        ),
        te: 'కర్పూర దీపం స్వామిక్కే — శరణం శరణం అయ్యప్ప',
        en: 'The camphor flame is for the Lord — refuge, refuge, Ayyappa.',
      },
      {
        heading: b('హరివరాసనం', 'Harivarasanam'),
        step: b(
          'సంప్రదాయం ప్రకారం పూజ చివర శబరిమలలో పాడే "హరివరాసనం" (స్వామి నిద్ర పాట) పాడి, దీపాలు ఒక్కొక్కటిగా శాంతింపజేస్తారు. (ఈ పాట సాహిత్యం యాప్‌లో లేదు — అర్థం కోసం "హరివరాసనం — అర్థం, సంప్రదాయం" చూడండి.)',
          'By tradition the puja closes with “Harivarasanam”, the Sabarimala lullaby, as the lamps are put out one by one. (Its lyrics are not in the app — see “Harivarasanam — Meaning & Tradition”.)',
        ),
      },
      {
        heading: b('క్షమా ప్రార్థన', 'Kshama Prarthana'),
        step: b('పూజలో తెలియక జరిగిన తప్పులకు క్షమాపణ కోరండి.', 'Ask forgiveness for any mistakes made unknowingly in the puja.'),
        te: 'మంత్రహీనం క్రియాహీనం భక్తిహీనం సురేశ్వర ।\nయత్పూజితం మయా దేవ పరిపూర్ణం తదస్తు మే ॥\nఅపరాధ సహస్రాణి క్రియంతేఽహర్నిశం మయా ।\nదాసోఽయమితి మాం మత్వా క్షమస్వ పరమేశ్వర ॥',
        en: 'O Lord of the gods, whatever worship I have done — lacking in mantra, in action or in devotion — let it be made complete. Day and night I commit a thousand faults; think of me as your servant and forgive me, Supreme Lord.',
        bhavam: 'దేవా! మంత్రం, క్రియ, భక్తి లోపించినా నేను చేసిన పూజ పరిపూర్ణమగుగాక. రాత్రింబవళ్ళు వేలాది తప్పులు చేస్తాను; నన్ను నీ దాసునిగా భావించి క్షమించు.',
      },
      {
        heading: b('సాష్టాంగ నమస్కారం', 'Prostration'),
        step: b('అందరూ పడి ముందు సాష్టాంగ నమస్కారం చేసి, ప్రసాదం స్వీకరించండి.', 'All prostrate before the steps, then receive prasadam.'),
        te: 'స్వామియే శరణం అయ్యప్ప',
        en: 'O Lord Ayyappa, you are my refuge.',
        repeat: 3,
      },
    ],
  },
  {
    id: 'harivarasanam-about',
    title: b('హరివరాసనం — అర్థం, సంప్రదాయం', 'Harivarasanam — Meaning & Tradition'),
    kind: 'guide',
    deities: ['ayyappa'],
    review: true,
    source: 'About the song; lyrics not included (copyright). Sing along from your book or the recording.',
    intro: b(
      'హరివరాసనం శబరిమలలో ప్రతి రాత్రి గుడి తలుపులు మూసే ముందు పాడే అయ్యప్ప స్వామి నిద్ర పాట (ఉరక్కుపాట్టు). ఎనిమిది శ్లోకాల సంస్కృత స్తుతి — ప్రతి శ్లోకం చివర "శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప" అనే పల్లవి. పాట సాహిత్యం ఈ యాప్‌లో లేదు; మీ పుస్తకం నుండి లేదా రికార్డింగ్‌తో కలిసి పాడండి.',
      'Harivarasanam is the lullaby (urakkupattu) sung at Sabarimala every night before the temple doors close. It is a Sanskrit hymn of eight verses, each ending with the refrain “Sharanam Ayyappa Swamy Sharanam Ayyappa”. The lyrics are not in the app — sing along from your book or the recording.',
    ),
    verses: [
      {
        heading: b('ఎప్పుడు పాడతారు', 'When it is sung'),
        step: b(
          'శబరిమలలో రాత్రి అత్తాళ పూజ తర్వాత, గర్భగుడి దీపాలు ఒక్కొక్కటిగా శాంతింపజేస్తూ పాడతారు; పాట ముగిసేసరికి తలుపులు మూస్తారు. ఇంట్లో, భజన మందిరాల్లో — పడి పూజ, సాయంత్రం దీక్షా పూజ, భజన చివర పాడతారు. పాడేటప్పుడు అందరూ నిలబడి, చేతులు జోడించి, మౌనంగా వింటారు లేదా కలిసి పాడతారు.',
          'At Sabarimala it is sung after the night Athazha puja while the sanctum lamps are put out one by one; the doors close as it ends. At home and in bhajan mandirs it closes padi puja, the evening deeksha puja and bhajans. Everyone stands with folded hands and listens quietly or sings together.',
        ),
      },
      {
        heading: b('ఏమి స్తుతిస్తుంది', 'What it praises'),
        step: b(
          'పాట మొత్తం స్వామిని నిద్రపుచ్చే లాలి భావంలో ఉంటుంది. శ్లోకాలు అయ్యప్పను — హరి (విష్ణువు), హరుడు (శివుడు) ఇద్దరి పుత్రునిగా; విశ్వాన్ని మోహింపజేసే సౌందర్యం గలవానిగా; భక్తుల శత్రువులను, మహిషిని జయించిన వీరునిగా; పులిపై, గుర్రంపై స్వారీ చేసేవానిగా; భక్తుల హృదయాల్లో నివసించే, కోరికలు తీర్చే, సంగీతాన్ని ప్రేమించే దేవునిగా; పంపా తీరాన శబరిగిరిపై వెలసిన వానిగా వర్ణిస్తాయి.',
          'The whole hymn is a lullaby that lays the Lord to rest. Its verses praise Ayyappa as the son of Hari (Vishnu) and Hara (Shiva); of a beauty that enchants the universe; the hero who defeated Mahishi and the foes of his devotees; who rides the tiger and the horse; who lives in his devotees’ hearts, fulfils their wishes and delights in music; and who dwells on Sabari hill by the Pampa.',
        ),
      },
      {
        heading: b('పల్లవి', 'The refrain'),
        te: 'శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప',
        en: 'Refuge, Ayyappa — Lord, you are my refuge, Ayyappa.',
        bhavam: 'అయ్యప్ప స్వామీ, నువ్వే నాకు శరణు. ప్రతి శ్లోకం చివర అందరూ కలిసి పలుకుతారు.',
      },
      {
        heading: b('చరిత్ర', 'History'),
        step: b(
          'రచయిత విషయంలో రెండు అభిప్రాయాలు ఉన్నాయి — 1923లో కొన్నకత్తు జానకి అమ్మ రాశారని, లేదా కుంబకుడి కులత్తూర్ శ్రీనివాస అయ్యర్ రాశారని. 1950ల నుండి శబరిమలలో దీనిని నిద్ర పాటగా పాడుతున్నారు. 1975లో "స్వామి అయ్యప్పన్" చిత్రంలో కె.జె. యేసుదాస్ పాడిన రూపమే నేడు శబరిమలలో ప్రతి రాత్రి వినిపిస్తుంది.',
          'Two accounts exist of its author — Konnakathu Janaki Amma in 1923, or Kumbakudi Kulathur Srinivasa Iyer. It has been sung as the Lord’s lullaby at Sabarimala since the 1950s. The rendition by K. J. Yesudas, recorded for the 1975 film “Swamy Ayyappan”, is the one played at Sabarimala every night today.',
        ),
      },
      {
        heading: b('ముగింపు', 'Closing'),
        step: b('పాట తర్వాత సాష్టాంగ నమస్కారం చేసి "స్వామియే శరణం అయ్యప్ప" అని మూడుసార్లు పలకండి.', 'After the song, prostrate and call “Swamiye Sharanam Ayyappa” three times.'),
        te: 'స్వామియే శరణం అయ్యప్ప',
        en: 'O Lord Ayyappa, you are my refuge.',
        repeat: 3,
      },
    ],
  },
  {
    id: 'ayyappa-pancharatnam',
    title: b('శ్రీ అయ్యప్ప పంచరత్నం', 'Sri Ayyappa Pancharatnam'),
    kind: 'stotram',
    deities: ['ayyappa'],
    review: true,
    source: 'Traditional',
    intro: b('పడి పూజలో, నిత్య పూజలో పాడే ఐదు శ్లోకాల స్తుతి — "లోకవీరం మహాపూజ్యం".', 'Five verses sung at padi puja and daily Ayyappa puja — “Lokaveeram Mahapoojyam”.'),
    verses: [
      { ref: '1', te: 'లోకవీరం మహాపూజ్యం సర్వరక్షాకరం విభుమ్ ।\nపార్వతీహృదయానందం శాస్తారం ప్రణమామ్యహమ్ ॥', en: 'I bow to Sastha — hero of the worlds, most worshipful, protector of all, the all-pervading, the joy of Parvati’s heart.', bhavam: 'లోకాలకు వీరుడు, గొప్పగా పూజించదగినవాడు, అందరినీ రక్షించేవాడు, పార్వతీదేవి హృదయానికి ఆనందం కలిగించే శాస్తాకు నమస్కరిస్తున్నాను.' },
      { ref: '2', te: 'విప్రపూజ్యం విశ్వవంద్యం విష్ణుశంభోః ప్రియం సుతమ్ ।\nక్షిప్రప్రసాదనిరతం శాస్తారం ప్రణమామ్యహమ్ ॥', en: 'I bow to Sastha — worshipped by the wise, revered by the world, beloved son of Vishnu and Shiva, quick to grant his grace.', bhavam: 'జ్ఞానులు పూజించే, విశ్వమంతా నమస్కరించే, విష్ణు-శివుల ప్రియ పుత్రుడైన, త్వరగా అనుగ్రహించే శాస్తాకు నమస్కారం.' },
      { ref: '3', te: 'మత్తమాతంగగమనం కారుణ్యామృతపూరితమ్ ।\nసర్వవిఘ్నహరం దేవం శాస్తారం ప్రణమామ్యహమ్ ॥', en: 'I bow to Sastha — who moves with the stately gait of a great elephant, full of the nectar of compassion, remover of every obstacle.', bhavam: 'మదపుటేనుగు వంటి గంభీరమైన నడక గల, కరుణ అనే అమృతంతో నిండిన, అన్ని విఘ్నాలను తొలగించే దేవుడైన శాస్తాకు నమస్కారం.' },
      { ref: '4', te: 'అస్మత్కులేశ్వరం దేవమస్మచ్ఛత్రువినాశనమ్ ।\nఅస్మదిష్టప్రదాతారం శాస్తారం ప్రణమామ్యహమ్ ॥', en: 'I bow to Sastha — the Lord of our family, destroyer of our enemies, giver of what we long for.', bhavam: 'మా వంశానికి దైవమైన, మా శత్రువులను నశింపజేసే, మా కోరికలు తీర్చే శాస్తాకు నమస్కారం.' },
      { ref: '5', te: 'పాండ్యేశవంశతిలకం కేరళే కేలివిగ్రహమ్ ।\nఆర్తత్రాణపరం దేవం శాస్తారం ప్రణమామ్యహమ్ ॥', en: 'I bow to Sastha — jewel of the Pandya royal line, who plays in Kerala in his own form, ever intent on saving the afflicted.', bhavam: 'పాండ్య రాజవంశానికి తిలకం వంటి, కేరళలో లీలగా వెలసిన, ఆర్తులను కాపాడడంలో నిమగ్నమైన శాస్తాకు నమస్కారం.' },
      { heading: b('ఫలశ్రుతి', 'Phalashruti'), te: 'పంచరత్నాఖ్యమేతద్యో నిత్యం శుద్ధః పఠేన్నరః ।\nతస్య ప్రసన్నో భగవాన్ శాస్తా వసతి మానసే ॥', en: 'Whoever, pure in body and mind, recites these five jewels every day — Lord Sastha, pleased, dwells in his heart.', bhavam: 'శుద్ధుడై ఈ పంచరత్నాన్ని నిత్యం చదివేవాని మనస్సులో శాస్తా ప్రసన్నుడై నివసిస్తాడు.' },
    ],
  },
  {
    id: 'ayyappa-sharana-vili',
    title: b('శరణ విళి (యాత్ర శరణాలు)', 'Sharana Vili — Pilgrim Calls'),
    kind: 'keertana',
    deities: ['ayyappa'],
    review: true,
    source: 'Traditional call-and-response of the Sabarimala pilgrimage',
    intro: b(
      'పడి పూజలో, ఇరుముడి కట్టేటప్పుడు, కొండ ఎక్కేటప్పుడు గురుస్వామి ఒక భాగం పలుకుతారు, మిగిలిన స్వాములు జవాబు పలుకుతారు. ప్రతి వరుసలో — ముందు భాగం పిలుపు, తర్వాతది జవాబు.',
      'Called at padi puja, while tying the irumudi and while climbing: the Guruswamy calls the first half and the swamis answer with the second. On each line, the call comes first, then the answer.',
    ),
    verses: [
      { te: 'స్వామియే — అయ్యప్పో\nఅయ్యప్పో — స్వామియే', en: 'O Lord — O Ayyappa! O Ayyappa — O Lord!', repeat: 3 },
      { te: 'స్వామి శరణం — అయ్యప్ప శరణం\nఅయ్యప్ప శరణం — స్వామి శరణం', en: 'Refuge in the Lord — refuge in Ayyappa.' },
      { te: 'భగవాన్ శరణం — భగవతి శరణం\nదేవన్ శరణం — దేవి శరణం', en: 'Refuge in the Lord — refuge in the Goddess; refuge in God — refuge in the Devi.' },
      { te: 'దేవన్ పాదం — దేవి పాదం\nస్వామి పాదం — అయ్యప్ప పాదం', en: 'The feet of God — the feet of the Devi; the Lord’s feet — Ayyappa’s feet.' },
      { te: 'పళ్ళికెట్టు — శబరిమలైక్కు\nఇరుముడి కెట్టు — శబరిమలైక్కు', en: 'The sacred bundle — is for Sabarimala; the irumudi — is for Sabarimala.' },
      { te: 'కల్లుం ముళ్ళుం — కాలుక్కు మెత్తై\nఏట్టి విడప్పా — తూక్కి విడప్పా', en: 'Stones and thorns — are a soft bed for our feet. Help us up — lift us along.' },
      { te: 'నెయ్యాభిషేకం — స్వామిక్కే\nకర్పూర దీపం — స్వామిక్కే\nపాలాభిషేకం — స్వామిక్కే\nతేనాభిషేకం — స్వామిక్కే', en: 'The ghee abhishekam — is for the Lord; the camphor flame — for the Lord; the milk abhishekam — for the Lord; the honey abhishekam — for the Lord.' },
      { te: 'పదునెట్టాం పడియే — శరణం పొన్నయ్యప్పా\nశబరిగిరి వాసా — శరణం పొన్నయ్యప్పా\nపందళ రాజకుమారా — శరణం పొన్నయ్యప్పా\nమకర జ్యోతియే — శరణం పొన్నయ్యప్పా', en: 'O holy eighteen steps; dweller of Sabari hill; prince of Pandalam; light of Makara — refuge, golden Ayyappa.' },
      { te: 'స్వామియే శరణం అయ్యప్ప', en: 'O Lord Ayyappa, you are my refuge.', repeat: 3 },
    ],
  },
];
