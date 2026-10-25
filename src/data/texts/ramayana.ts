import type { Bi, SacredText } from '../types';

export const KANDAS: { id: string; name: Bi; summary: Bi }[] = [
  {
    id: 'bala',
    name: { te: 'బాలకాండ', en: 'Bala Kanda' },
    summary: {
      te: 'దశరథుని పుత్రకామేష్టితో శ్రీరాముడు, లక్ష్మణ, భరత, శత్రుఘ్నులు జన్మిస్తారు. విశ్వామిత్రుని వెంట వెళ్లి తాటకను సంహరిస్తాడు. మిథిలలో శివధనుస్సును విరిచి సీతను వివాహం చేసుకుంటాడు.',
      en: 'Through King Dasharatha’s sacrifice, Rama and his brothers are born. Rama goes with sage Vishvamitra, defeats Tataka, and in Mithila breaks Shiva’s bow to wed Sita.',
    },
  },
  {
    id: 'ayodhya',
    name: { te: 'అయోధ్యాకాండ', en: 'Ayodhya Kanda' },
    summary: {
      te: 'పట్టాభిషేకం జరగవలసిన రోజే కైకేయి వరాల వల్ల రాముడు పదునాలుగేళ్ళ వనవాసానికి బయలుదేరుతాడు. సీత, లక్ష్మణుడు వెంట వెళ్తారు. భరతుడు రాముని పాదుకలను సింహాసనంపై ఉంచి పాలిస్తాడు.',
      en: 'On the eve of his coronation, Kaikeyi’s boons send Rama into fourteen years of exile, with Sita and Lakshmana. Bharata refuses the throne and rules with Rama’s sandals upon it.',
    },
  },
  {
    id: 'aranya',
    name: { te: 'అరణ్యకాండ', en: 'Aranya Kanda' },
    summary: {
      te: 'పంచవటిలో నివసిస్తుండగా శూర్పణఖ వస్తుంది. బంగారు లేడి మాయతో రావణుడు సీతను అపహరిస్తాడు. జటాయువు పోరాడి నేలకొరుగుతాడు. శబరి రాముని ఆతిథ్యమిస్తుంది.',
      en: 'At Panchavati, Shurpanakha appears. Using the golden deer as a lure, Ravana abducts Sita. Jatayu fights and falls. Shabari welcomes Rama with devotion.',
    },
  },
  {
    id: 'kishkindha',
    name: { te: 'కిష్కింధాకాండ', en: 'Kishkindha Kanda' },
    summary: {
      te: 'రాముడు హనుమంతుని, సుగ్రీవుని కలుస్తాడు. వాలిని వధించి సుగ్రీవునికి రాజ్యం ఇస్తాడు. వానరులు సీతను వెతకడానికి నలుదిక్కులకు బయలుదేరుతారు.',
      en: 'Rama meets Hanuman and Sugriva, restores Sugriva’s kingdom by defeating Vali, and the vanara army sets out in every direction to find Sita.',
    },
  },
  {
    id: 'sundara',
    name: { te: 'సుందరకాండ', en: 'Sundara Kanda' },
    summary: {
      te: 'హనుమంతుడు సముద్రాన్ని లంఘించి లంకలో అశోకవనంలో సీతను చూసి రాముని ఉంగరం ఇస్తాడు. లంకను దహించి తిరిగివచ్చి శుభవార్త చెబుతాడు. పారాయణకు అత్యంత ప్రీతికరమైన కాండ.',
      en: 'Hanuman leaps the ocean, finds Sita in the Ashoka grove, gives her Rama’s ring, sets Lanka ablaze and returns with the good news. The kanda most cherished for parayana.',
    },
  },
  {
    id: 'yuddha',
    name: { te: 'యుద్ధకాండ', en: 'Yuddha Kanda' },
    summary: {
      te: 'వానరసేన సేతువు నిర్మిస్తుంది. విభీషణుడు రాముని శరణు పొందుతాడు. మహాయుద్ధంలో రావణుడు సంహరింపబడతాడు. సీతారాములు అయోధ్యకు తిరిగివచ్చి పట్టాభిషేకం జరుగుతుంది.',
      en: 'The vanaras build the bridge to Lanka; Vibhishana takes refuge in Rama. In the great war Ravana falls. Sita and Rama return to Ayodhya for the coronation — Rama Rajya begins.',
    },
  },
  {
    id: 'uttara',
    name: { te: 'ఉత్తరకాండ', en: 'Uttara Kanda' },
    summary: {
      te: 'రామరాజ్య పాలన, లవకుశుల జననం, వాల్మీకి ఆశ్రమంలో వారు రామాయణం గానం చేయడం.',
      en: 'The reign of Rama, the birth of Lava and Kusha in Valmiki’s ashram, and their singing of the Ramayana.',
    },
  },
];

export const RAMAYANA_TEXTS: SacredText[] = [
  {
    id: 'ramayana-kandas',
    title: { te: 'రామాయణం — సప్తకాండలు', en: 'Ramayana in Seven Kandas' },
    kind: 'guide',
    deities: ['rama', 'hanuman'],
    intro: {
      te: 'వాల్మీకి రామాయణం ఏడు కాండల సంక్షిప్త కథ.',
      en: 'The story of Valmiki’s Ramayana, kanda by kanda.',
    },
    verses: KANDAS.map((k) => ({ heading: k.name, step: k.summary })),
  },
  {
    id: 'ramayana-opening',
    title: { te: 'రామాయణ ప్రారంభ శ్లోకాలు', en: 'Opening Verses of the Ramayana' },
    kind: 'shloka',
    deities: ['rama'],
    source: 'Valmiki Ramayana, Bala Kanda',
    intro: {
      te: 'వాల్మీకి నారదుని అడిగిన ప్రశ్న — ఈ లోకంలో సకల గుణాలు కలవాడు ఎవరు? దానికి సమాధానమే రాముడు.',
      en: 'Valmiki asks Narada: who in this world has every virtue? The answer is Rama — and the epic begins.',
    },
    verses: [
      { ref: '1.1.1', te: 'తపఃస్వాధ్యాయనిరతం తపస్వీ వాగ్విదాం వరమ్ ।\nనారదం పరిపప్రచ్ఛ వాల్మీకిర్మునిపుంగవమ్ ॥', en: 'The ascetic Valmiki questioned Narada — devoted to austerity and study, the best of speakers and foremost of sages.' },
      { ref: '1.1.2', te: 'కో న్వస్మిన్ సాంప్రతం లోకే గుణవాన్ కశ్చ వీర్యవాన్ ।\nధర్మజ్ఞశ్చ కృతజ్ఞశ్చ సత్యవాక్యో దృఢవ్రతః ॥', en: 'Who in this world today is virtuous and valiant, who knows dharma, is grateful, truthful and firm in his vows?' },
      { ref: '1.1.3', te: 'చారిత్రేణ చ కో యుక్తః సర్వభూతేషు కో హితః ।\nవిద్వాన్ కః కః సమర్థశ్చ కశ్చైకప్రియదర్శనః ॥', en: 'Who is of good conduct, who seeks the welfare of all beings? Who is learned, capable, and uniquely pleasing to behold?' },
      { ref: '1.1.4', te: 'ఆత్మవాన్ కో జితక్రోధో ద్యుతిమాన్ కోఽనసూయకః ।\nకస్య బిభ్యతి దేవాశ్చ జాతరోషస్య సంయుగే ॥', en: 'Who is self-possessed, has conquered anger, is radiant and free of envy — and whom even the gods fear when roused in battle?' },
      { ref: '1.2.15', heading: { te: 'ఆదికావ్యం పుట్టుక', en: 'The birth of poetry' }, te: 'మా నిషాద ప్రతిష్ఠాం త్వమగమః శాశ్వతీః సమాః ।\nయత్క్రౌంచమిథునాదేకమవధీః కామమోహితమ్ ॥', en: 'Seeing a hunter kill one of a pair of loving krauncha birds, Valmiki’s grief burst out as the first verse: “O hunter, may you never find rest, for you killed one of the pair lost in love.”' },
    ],
  },
  {
    id: 'sundarakanda-shlokas',
    title: { te: 'సుందరకాండ పారాయణ శ్లోకాలు', en: 'Sundarakanda Parayana Shlokas' },
    kind: 'shloka',
    deities: ['hanuman', 'rama'],
    intro: {
      te: 'సుందరకాండ పారాయణ ప్రారంభంలో, ముగింపులో చదివే శ్లోకాలు.',
      en: 'Recited at the start and end of Sundarakanda parayana.',
    },
    verses: [
      { te: 'యత్ర యత్ర రఘునాథకీర్తనం\nతత్ర తత్ర కృతమస్తకాంజలిమ్ ।\nబాష్పవారిపరిపూర్ణలోచనం\nమారుతిం నమత రాక్షసాంతకమ్ ॥', en: 'Wherever Rama’s glory is sung, Hanuman is there with folded hands and tear-filled eyes. Bow to Maruti, destroyer of demons.' },
      { te: 'మనోజవం మారుతతుల్యవేగం\nజితేంద్రియం బుద్ధిమతాం వరిష్ఠమ్ ।\nవాతాత్మజం వానరయూథముఖ్యం\nశ్రీరామదూతం శరణం ప్రపద్యే ॥', en: 'Swift as the mind, fast as the wind, master of the senses, wisest of the wise — I take refuge in Sri Rama’s messenger.' },
    ],
  },
];
