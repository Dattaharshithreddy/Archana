import type { SacredText } from '../types';

export const DEVI_OTHERS: SacredText[] = [
  {
    id: 'mahalakshmi-ashtakam',
    title: { te: 'మహాలక్ష్మ్యష్టకం', en: 'Mahalakshmi Ashtakam' },
    kind: 'stotram',
    deities: ['lakshmi'],
    source: 'Padma Purana (Indra’s hymn)',
    intro: {
      te: 'శుక్రవారం, వరలక్ష్మీ వ్రతం, దీపావళి లక్ష్మీపూజలో పఠించే స్తోత్రం.',
      en: 'Recited on Fridays, at Varalakshmi Vratam and at Deepavali Lakshmi puja.',
    },
    verses: [
      { te: 'నమస్తేఽస్తు మహామాయే శ్రీపీఠే సురపూజితే ।\nశంఖచక్రగదాహస్తే మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Salutations to you, great Maya, seated on the throne of Sri, worshipped by the gods, holding conch, discus and mace — O Mahalakshmi, I bow to you.' },
      { te: 'నమస్తే గరుడారూఢే కోలాసురభయంకరి ।\nసర్వపాపహరే దేవి మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Salutations to you who ride Garuda, terror of the demon Kola, remover of all sins — O Mahalakshmi, I bow to you.' },
      { te: 'సర్వజ్ఞే సర్వవరదే సర్వదుష్టభయంకరి ।\nసర్వదుఃఖహరే దేవి మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'All-knowing, giver of all boons, terror of all evil, remover of all sorrow — O Mahalakshmi, I bow to you.' },
      { te: 'సిద్ధిబుద్ధిప్రదే దేవి భుక్తిముక్తిప్రదాయిని ।\nమంత్రమూర్తే సదా దేవి మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Giver of success and wisdom, of worldly joy and liberation, embodiment of mantra — O Mahalakshmi, I bow to you.' },
      { te: 'ఆద్యంతరహితే దేవి ఆద్యశక్తిమహేశ్వరి ।\nయోగజ్ఞే యోగసంభూతే మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Without beginning or end, primordial power, great Goddess, knower of yoga, born of yoga — O Mahalakshmi, I bow to you.' },
      { te: 'స్థూలసూక్ష్మమహారౌద్రే మహాశక్తిమహోదరే ।\nమహాపాపహరే దేవి మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Both gross and subtle, fierce, great power, vast, remover of great sins — O Mahalakshmi, I bow to you.' },
      { te: 'పద్మాసనస్థితే దేవి పరబ్రహ్మస్వరూపిణి ।\nపరమేశి జగన్మాతర్మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Seated on the lotus, the very form of the Supreme, sovereign Mother of the world — O Mahalakshmi, I bow to you.' },
      { te: 'శ్వేతాంబరధరే దేవి నానాలంకారభూషితే ।\nజగత్స్థితే జగన్మాతర్మహాలక్ష్మి నమోఽస్తు తే ॥', en: 'Clad in white, adorned with many ornaments, sustainer and Mother of the world — O Mahalakshmi, I bow to you.' },
      { te: 'మహాలక్ష్మ్యష్టకం స్తోత్రం యః పఠేద్భక్తిమాన్నరః ।\nసర్వసిద్ధిమవాప్నోతి రాజ్యం ప్రాప్నోతి సర్వదా ॥', en: 'Whoever recites this Mahalakshmi Ashtakam with devotion attains every success and lasting prosperity.' },
    ],
  },
  {
    id: 'lakshmi-mantras',
    title: { te: 'లక్ష్మీ మంత్రాలు', en: 'Lakshmi Mantras' },
    kind: 'mantra',
    deities: ['lakshmi'],
    verses: [
      { te: 'ఓం శ్రీం మహాలక్ష్మ్యై నమః', en: 'Salutations to Mahalakshmi, with the seed syllable Shrim.', repeat: 108 },
      { heading: { te: 'లక్ష్మీ గాయత్రి', en: 'Lakshmi Gayatri' }, te: 'ఓం మహాలక్ష్మ్యై చ విద్మహే విష్ణుపత్న్యై చ ధీమహి ।\nతన్నో లక్ష్మీః ప్రచోదయాత్ ॥', en: 'We know Mahalakshmi, we meditate on the consort of Vishnu. May Lakshmi inspire us.' },
    ],
  },
  {
    id: 'saraswati-prarthana',
    title: { te: 'సరస్వతీ ప్రార్థన', en: 'Saraswati Prarthana' },
    kind: 'shloka',
    deities: ['saraswati'],
    daily: 'study',
    intro: {
      te: 'చదువు ప్రారంభించే ముందు, పరీక్షల ముందు పిల్లలు చదివే శ్లోకాలు.',
      en: 'For students — before study and before exams.',
    },
    verses: [
      { te: 'సరస్వతి నమస్తుభ్యం వరదే కామరూపిణి ।\nవిద్యారంభం కరిష్యామి సిద్ధిర్భవతు మే సదా ॥', en: 'Salutations to you, Saraswati, giver of boons, who takes any form. I begin my studies — may I always succeed.' },
      { te: 'యా కుందేందుతుషారహారధవలా యా శుభ్రవస్త్రావృతా\nయా వీణావరదండమండితకరా యా శ్వేతపద్మాసనా ।\nయా బ్రహ్మాచ్యుతశంకరప్రభృతిభిర్దేవైః సదా వందితా\nసా మాం పాతు సరస్వతీ భగవతీ నిఃశేషజాడ్యాపహా ॥', en: 'She who is white as jasmine, the moon and a garland of snow, dressed in white, whose hands hold the veena, seated on a white lotus, ever worshipped by Brahma, Vishnu, Shiva and the gods — may that Goddess Saraswati, who removes all dullness, protect me.' },
      { te: 'ఓం ఐం సరస్వత్యై నమః', en: 'Salutations to Saraswati, with the seed syllable Aim.', repeat: 108 },
    ],
  },
  {
    id: 'durga-shlokas',
    title: { te: 'దుర్గా శ్లోకాలు', en: 'Durga Shlokas' },
    kind: 'shloka',
    deities: ['durga'],
    verses: [
      { te: 'సర్వమంగళమాంగల్యే శివే సర్వార్థసాధికే ।\nశరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోఽస్తు తే ॥', en: 'O auspiciousness of all that is auspicious, consort of Shiva, fulfiller of every aim, giver of refuge, three-eyed Gauri — Narayani, salutations to you.', ref: 'Devi Mahatmyam 11.10' },
      { te: 'ఓం దుం దుర్గాయై నమః', en: 'Salutations to Durga, with the seed syllable Dum.', repeat: 108 },
    ],
  },
  {
    id: 'ya-devi-sarvabhuteshu',
    title: { te: 'యా దేవీ సర్వభూతేషు', en: 'Ya Devi Sarvabhuteshu' },
    kind: 'stotram',
    deities: ['durga'],
    source: 'Devi Mahatmyam, chapter 5 (selected)',
    intro: {
      te: 'అన్ని ప్రాణులలో వివిధ రూపాలుగా ఉన్న అమ్మవారికి నమస్కారం.',
      en: 'Salutations to the Goddess who dwells in all beings in many forms.',
    },
    verses: [
      { te: 'యా దేవీ సర్వభూతేషు విష్ణుమాయేతి శబ్దితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who in all beings is called Vishnu’s Maya — salutations, salutations, salutations again and again.' },
      { te: 'యా దేవీ సర్వభూతేషు బుద్ధిరూపేణ సంస్థితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who dwells in all beings as intelligence — salutations again and again.' },
      { te: 'యా దేవీ సర్వభూతేషు శక్తిరూపేణ సంస్థితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who dwells in all beings as power — salutations again and again.' },
      { te: 'యా దేవీ సర్వభూతేషు శాంతిరూపేణ సంస్థితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who dwells in all beings as peace — salutations again and again.' },
      { te: 'యా దేవీ సర్వభూతేషు లక్ష్మీరూపేణ సంస్థితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who dwells in all beings as prosperity — salutations again and again.' },
      { te: 'యా దేవీ సర్వభూతేషు దయారూపేణ సంస్థితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who dwells in all beings as compassion — salutations again and again.' },
      { te: 'యా దేవీ సర్వభూతేషు మాతృరూపేణ సంస్థితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who dwells in all beings as the Mother — salutations again and again.' },
    ],
  },
  {
    id: 'mahishasura-mardini',
    title: { te: 'మహిషాసురమర్దిని స్తోత్రం', en: 'Mahishasura Mardini Stotram' },
    kind: 'stotram',
    deities: ['durga'],
    review: true,
    intro: { te: 'దసరా నవరాత్రుల్లో పాడే స్తోత్రం (మొదటి శ్లోకం).', en: 'Sung during Dasara Navaratri (opening verse).' },
    verses: [
      {
        te: 'అయి గిరినందిని నందితమేదిని విశ్వవినోదిని నందినుతే\nగిరివరవింధ్యశిరోఽధినివాసిని విష్ణువిలాసిని జిష్ణునుతే ।\nభగవతి హే శితికంఠకుటుంబిని భూరికుటుంబిని భూరికృతే\nజయ జయ హే మహిషాసురమర్దిని రమ్యకపర్దిని శైలసుతే ॥',
        en: 'O daughter of the mountain, who delights the earth and the universe, praised by Nandi, dwelling on the Vindhya peaks, Vishnu’s joy, praised by Indra; O Goddess, consort of the blue-throated Shiva, mother of a vast family — victory, victory to you, slayer of Mahishasura, with beautiful braided hair, daughter of the mountain!',
      },
    ],
  },
  {
    id: 'surya-mantras',
    title: { te: 'సూర్య మంత్రాలు', en: 'Surya Mantras' },
    kind: 'mantra',
    deities: ['surya'],
    daily: 'morning',
    intro: {
      te: 'ఉదయం సూర్యునికి అర్ఘ్యం ఇస్తూ, సూర్య నమస్కారాలు చేస్తూ చదివేవి.',
      en: 'Recited while offering arghya to the rising sun and during Surya Namaskara.',
    },
    verses: [
      { te: 'జపాకుసుమసంకాశం కాశ్యపేయం మహాద్యుతిమ్ ।\nతమోఽరిం సర్వపాపఘ్నం ప్రణతోఽస్మి దివాకరమ్ ॥', en: 'Red as the hibiscus flower, son of Kashyapa, of great brilliance, enemy of darkness, destroyer of all sins — I bow to the Sun.', ref: 'Navagraha Stotram' },
      {
        heading: { te: 'సూర్య నమస్కార ద్వాదశ నామాలు', en: '12 names for Surya Namaskara' },
        te: 'ఓం మిత్రాయ నమః । ఓం రవయే నమః ।\nఓం సూర్యాయ నమః । ఓం భానవే నమః ।\nఓం ఖగాయ నమః । ఓం పూష్ణే నమః ।\nఓం హిరణ్యగర్భాయ నమః । ఓం మరీచయే నమః ।\nఓం ఆదిత్యాయ నమః । ఓం సవిత్రే నమః ।\nఓం అర్కాయ నమః । ఓం భాస్కరాయ నమః ॥',
        en: 'Salutations to the friend of all, the shining one, the mover, the radiant, the sky-traveller, the nourisher, the golden womb, the rays, the son of Aditi, the enlivener, the praiseworthy, and the giver of light — one name per round.',
      },
    ],
  },
  {
    id: 'ayyappa-mantras',
    title: { te: 'అయ్యప్ప మంత్రాలు', en: 'Ayyappa Mantras' },
    kind: 'mantra',
    deities: ['ayyappa'],
    verses: [
      { te: 'భూతనాథ సదానంద సర్వభూతదయాపర ।\nరక్ష రక్ష మహాబాహో శాస్త్రే తుభ్యం నమో నమః ॥', en: 'Lord of all beings, ever-blissful, compassionate to all — protect me, mighty-armed one. O Sastha, salutations to you again and again.' },
      { te: 'స్వామియే శరణం అయ్యప్ప', en: 'O Lord Ayyappa, you are my refuge.', repeat: 108 },
      {
        heading: { te: 'శరణు ఘోష (కొన్ని)', en: 'Sharanu Ghosha (a few)' },
        te: 'హరిహర సుతనే శరణం అయ్యప్ప\nకన్నిమూల గణపతి భగవానే శరణం అయ్యప్ప\nశక్తి వడివేలన్ సోదరనే శరణం అయ్యప్ప\nమాళికాపురత్తమ్మ దేవియే శరణం అయ్యప్ప\nపదునెట్టాం పడియే శరణం అయ్యప్ప\nస్వామియే శరణం అయ్యప్ప',
        en: 'Refuge in you — son of Hari and Hara; Kannimoola Ganapati; brother of Lord Murugan of the vel; Goddess Malikapurathamma; the holy eighteen steps; O Lord Ayyappa.',
      },
    ],
    review: true,
  },
  {
    id: 'ayyappa-mala-dharana',
    title: { te: 'మాలాధారణ మంత్రం', en: 'Mala Dharana Mantra' },
    kind: 'mantra',
    deities: ['ayyappa'],
    review: true,
    intro: {
      te: 'అయ్యప్ప దీక్ష తీసుకునేటప్పుడు గురుస్వామి సమక్షంలో మాల ధరిస్తూ చదివే మంత్రం.',
      en: 'Recited while wearing the deeksha mala in the presence of the Guruswamy.',
    },
    verses: [
      {
        te: 'జ్ఞానముద్రాం శాస్త్రముద్రాం గురుముద్రాం నమామ్యహమ్ ।\nవనముద్రాం శుద్ధముద్రాం రుద్రముద్రాం నమామ్యహమ్ ॥\nశాంతముద్రాం సత్యముద్రాం వ్రతముద్రాం నమామ్యహమ్ ।\nశబర్యాశ్రమసత్యేన ముద్రాం పాతు సదాపి మే ॥\nగురుదక్షిణయా పూర్వం తస్యానుగ్రహకారిణే ।\nశరణాగతముద్రాఖ్యం త్వన్ముద్రాం ధారయామ్యహమ్ ॥\nచిన్ముద్రాం ఖేచరీముద్రాం భద్రముద్రాం నమామ్యహమ్ ।\nశబర్యాచలముద్రాయై నమస్తుభ్యం నమో నమః ॥',
        en: 'I bow to this seal (mala) of wisdom, of scripture, of the Guru, of the forest, of purity and of Rudra; of peace, truth and the vow. By the truth of Sabarimala, may this seal always protect me. Having offered guru-dakshina, I wear your seal of surrender, which brings his grace. Salutations to the seal of Sabarimala.',
      },
    ],
  },
];
