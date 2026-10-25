import type { SacredText } from '../types';

export const DAILY: SacredText[] = [
  {
    id: 'pratah-smarana',
    title: { te: 'ప్రాతఃస్మరణ', en: 'On Waking Up' },
    kind: 'shloka',
    deities: ['lakshmi', 'saraswati', 'vishnu'],
    daily: 'morning',
    intro: {
      te: 'నిద్ర లేవగానే అరచేతులను చూస్తూ, తర్వాత భూమిని తాకే ముందు చదివే శ్లోకాలు.',
      en: 'Recited on waking — first looking at your palms, then before your feet touch the ground.',
    },
    verses: [
      {
        heading: { te: 'కరదర్శనం', en: 'Looking at the palms' },
        te: 'కరాగ్రే వసతే లక్ష్మీః కరమధ్యే సరస్వతీ ।\nకరమూలే తు గోవిందః ప్రభాతే కరదర్శనమ్ ॥',
        en: 'Lakshmi dwells at the fingertips, Saraswati in the middle of the palm, and Govinda at its base. So look at your hands at dawn.',
      },
      {
        heading: { te: 'భూమి ప్రార్థన', en: 'Prayer to Mother Earth' },
        te: 'సముద్రవసనే దేవి పర్వతస్తనమండలే ।\nవిష్ణుపత్ని నమస్తుభ్యం పాదస్పర్శం క్షమస్వ మే ॥',
        en: 'O Goddess, clothed by the oceans, adorned by mountains, consort of Vishnu — I bow to you. Forgive me for touching you with my feet.',
      },
    ],
  },
  {
    id: 'snana-mantra',
    title: { te: 'స్నాన మంత్రం', en: 'While Bathing' },
    kind: 'shloka',
    deities: [],
    daily: 'morning',
    verses: [
      {
        te: 'గంగే చ యమునే చైవ గోదావరి సరస్వతి ।\nనర్మదే సింధు కావేరి జలేఽస్మిన్ సన్నిధిం కురు ॥',
        en: 'O Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu and Kaveri — be present in this water.',
      },
    ],
  },
  {
    id: 'gayatri',
    title: { te: 'గాయత్రీ మంత్రం', en: 'Gayatri Mantra' },
    kind: 'mantra',
    deities: ['surya'],
    daily: 'morning',
    intro: {
      te: 'వేదమాత గాయత్రి. ఉదయం, సంధ్యా సమయాల్లో జపిస్తారు.',
      en: 'The mother of the Vedas, chanted at sunrise and the junctions of the day.',
    },
    verses: [
      {
        te: 'ఓం భూర్భువః స్వః ।\nతత్సవితుర్వరేణ్యం\nభర్గో దేవస్య ధీమహి ।\nధియో యో నః ప్రచోదయాత్ ॥',
        en: 'We meditate on the adorable radiance of the divine Savitr, who pervades earth, sky and heaven. May that light inspire our minds.',
        repeat: 108,
      },
    ],
    source: 'Rig Veda 3.62.10',
  },
  {
    id: 'guru-vandanam',
    title: { te: 'గురు వందనం', en: 'Salutation to the Guru' },
    kind: 'shloka',
    deities: [],
    daily: 'study',
    verses: [
      {
        te: 'గురుర్బ్రహ్మా గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః ।\nగురుః సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీగురవే నమః ॥',
        en: 'The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshwara. The Guru is the Supreme itself — salutations to that Guru.',
      },
    ],
  },
  {
    id: 'deepa-mantra',
    title: { te: 'దీపారాధన శ్లోకాలు', en: 'Lighting the Lamp' },
    kind: 'shloka',
    deities: [],
    daily: 'evening',
    intro: {
      te: 'ఉదయం, సాయంత్రం దీపం వెలిగించేటప్పుడు చదివేవి.',
      en: 'Recited when lighting the lamp in the morning and at dusk.',
    },
    verses: [
      {
        te: 'శుభం కరోతి కళ్యాణమారోగ్యం ధనసంపదః ।\nశత్రుబుద్ధివినాశాయ దీపజ్యోతిర్నమోఽస్తు తే ॥',
        en: 'Salutations to the lamp’s light, which brings auspiciousness, well-being, health and wealth, and destroys hostile thoughts.',
      },
      {
        te: 'దీపజ్యోతిః పరబ్రహ్మ దీపజ్యోతిర్జనార్దనః ।\nదీపో హరతు మే పాపం దీపజ్యోతిర్నమోఽస్తు తే ॥',
        en: 'The lamp’s light is the Supreme; the lamp’s light is Janardana. May the lamp remove my sins — salutations to it.',
      },
    ],
  },
  {
    id: 'bhojana-mantra',
    title: { te: 'భోజన మంత్రం', en: 'Before Meals' },
    kind: 'shloka',
    deities: ['krishna'],
    daily: 'meal',
    verses: [
      {
        te: 'బ్రహ్మార్పణం బ్రహ్మ హవిర్బ్రహ్మాగ్నౌ బ్రహ్మణా హుతమ్ ।\nబ్రహ్మైవ తేన గంతవ్యం బ్రహ్మకర్మసమాధినా ॥',
        en: 'The offering is Brahman, the oblation is Brahman, poured by Brahman into the fire of Brahman. One who sees Brahman in every action reaches Brahman.',
        ref: 'Gita 4.24',
      },
      {
        te: 'అహం వైశ్వానరో భూత్వా ప్రాణినాం దేహమాశ్రితః ।\nప్రాణాపానసమాయుక్తః పచామ్యన్నం చతుర్విధమ్ ॥',
        en: 'Becoming the digestive fire in all beings, united with the life-breaths, I digest the four kinds of food.',
        ref: 'Gita 15.14',
      },
    ],
  },
  {
    id: 'shanti-mantras',
    title: { te: 'శాంతి మంత్రాలు', en: 'Peace Mantras' },
    kind: 'mantra',
    deities: [],
    daily: 'study',
    verses: [
      {
        te: 'ఓం సహ నావవతు । సహ నౌ భునక్తు ।\nసహ వీర్యం కరవావహై ।\nతేజస్వి నావధీతమస్తు మా విద్విషావహై ।\nఓం శాంతిః శాంతిః శాంతిః ॥',
        en: 'May He protect us both, nourish us both. May we work together with vigour. May our study be radiant, and may we never resent each other. Om peace, peace, peace.',
        ref: 'Katha / Taittiriya Upanishad',
      },
      {
        te: 'ఓం అసతో మా సద్గమయ ।\nతమసో మా జ్యోతిర్గమయ ।\nమృత్యోర్మా అమృతం గమయ ।\nఓం శాంతిః శాంతిః శాంతిః ॥',
        en: 'Lead me from the unreal to the real, from darkness to light, from death to immortality.',
        ref: 'Brihadaranyaka Upanishad 1.3.28',
      },
      {
        te: 'ఓం పూర్ణమదః పూర్ణమిదం పూర్ణాత్పూర్ణముదచ్యతే ।\nపూర్ణస్య పూర్ణమాదాయ పూర్ణమేవావశిష్యతే ॥\nఓం శాంతిః శాంతిః శాంతిః ॥',
        en: 'That is whole, this is whole. From the whole the whole arises. Taking the whole from the whole, the whole alone remains.',
        ref: 'Isha Upanishad',
      },
      {
        te: 'సర్వే భవంతు సుఖినః సర్వే సంతు నిరామయాః ।\nసర్వే భద్రాణి పశ్యంతు మా కశ్చిద్దుఃఖభాగ్భవేత్ ॥',
        en: 'May all be happy, may all be free from illness. May all see what is good, and may no one suffer.',
      },
    ],
  },
  {
    id: 'samarpana',
    title: { te: 'సమర్పణ, క్షమాపణ', en: 'Offering & Forgiveness' },
    kind: 'shloka',
    deities: ['vishnu', 'shiva'],
    daily: 'night',
    intro: {
      te: 'పూజ ముగింపులో, రాత్రి నిద్రించే ముందు చదివేవి.',
      en: 'Recited at the end of puja and before sleeping.',
    },
    verses: [
      {
        heading: { te: 'సమర్పణ', en: 'Offering all actions' },
        te: 'కాయేన వాచా మనసేంద్రియైర్వా బుద్ధ్యాత్మనా వా ప్రకృతేః స్వభావాత్ ।\nకరోమి యద్యత్ సకలం పరస్మై నారాయణాయేతి సమర్పయామి ॥',
        en: 'Whatever I do — by body, speech, mind, senses, intellect or by nature — I offer it all to the Supreme Narayana.',
      },
      {
        heading: { te: 'పూజా క్షమాపణ', en: 'Forgiveness for errors in puja' },
        te: 'ఆవాహనం న జానామి న జానామి విసర్జనమ్ ।\nపూజాం చైవ న జానామి క్షమస్వ పరమేశ్వర ॥',
        en: 'I do not know how to invoke you, nor how to bid you farewell, nor even how to worship. Forgive me, Supreme Lord.',
      },
      {
        te: 'మంత్రహీనం క్రియాహీనం భక్తిహీనం సురేశ్వర ।\nయత్పూజితం మయా దేవ పరిపూర్ణం తదస్తు మే ॥',
        en: 'Though lacking in mantra, ritual and devotion, may whatever worship I have done become complete, O Lord.',
      },
      {
        heading: { te: 'రాత్రి క్షమాపణ', en: 'Night prayer' },
        te: 'కరచరణకృతం వాక్కాయజం కర్మజం వా\nశ్రవణనయనజం వా మానసం వాపరాధమ్ ।\nవిహితమవిహితం వా సర్వమేతత్ క్షమస్వ\nజయ జయ కరుణాబ్ధే శ్రీమహాదేవ శంభో ॥',
        en: 'Whatever wrongs I have done with hands, feet, speech, body, ears, eyes or mind — knowingly or unknowingly — forgive them all, O ocean of compassion, Mahadeva Shambho.',
      },
    ],
  },
];
