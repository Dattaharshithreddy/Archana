import type { SacredText } from '../types';

export const GANESHA_SHIVA: SacredText[] = [
  {
    id: 'ganesha-prarthana',
    title: { te: 'గణపతి ప్రార్థన', en: 'Ganapati Prarthana' },
    kind: 'shloka',
    deities: ['ganesha'],
    daily: 'puja',
    intro: {
      te: 'ఏ పూజ, ఏ పని ప్రారంభించినా ముందుగా చదవాలి.',
      en: 'Recite before beginning any puja or any new task.',
    },
    verses: [
      {
        te: 'శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥',
        en: 'Meditate on the all-pervading one, dressed in white, moon-hued, four-armed, with a serene face — so that all obstacles are removed.',
      },
      {
        te: 'వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ ।\nనిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥',
        en: 'O Lord with the curved trunk and mighty body, radiant as a crore suns — make all my works free of obstacles, always.',
      },
      {
        te: 'అగజానన పద్మార్కం గజానన మహర్నిశమ్ ।\nఅనేకదం తం భక్తానాం ఏకదంతముపాస్మహే ॥',
        en: 'Day and night we worship the elephant-faced one — the sun that makes Parvati’s lotus-face bloom — the single-tusked one who gives devotees countless gifts.',
      },
    ],
  },
  {
    id: 'ganesha-shodasha-nama',
    title: { te: 'గణేశ షోడశ నామాలు', en: 'Sixteen Names of Ganesha' },
    kind: 'stotram',
    deities: ['ganesha'],
    intro: {
      te: 'విద్యారంభం, వివాహం, గృహప్రవేశం, ప్రయాణం — అన్ని శుభకార్యాల ముందు.',
      en: 'Recited before learning, marriage, house-warming, journeys and all auspicious beginnings.',
    },
    verses: [
      {
        te: 'సుముఖశ్చైకదంతశ్చ కపిలో గజకర్ణకః ।\nలంబోదరశ్చ వికటో విఘ్నరాజో గణాధిపః ॥',
        en: 'Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Ganadhipa.',
      },
      {
        te: 'ధూమ్రకేతుర్గణాధ్యక్షః ఫాలచంద్రో గజాననః ।\nవక్రతుండశ్శూర్పకర్ణో హేరంబః స్కందపూర్వజః ॥',
        en: 'Dhumraketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba, Skandapurvaja.',
      },
      {
        te: 'షోడశైతాని నామాని యః పఠేచ్ఛృణుయాదపి ।\nవిద్యారంభే వివాహే చ ప్రవేశే నిర్గమే తథా ।\nసంగ్రామే సర్వకార్యేషు విఘ్నస్తస్య న జాయతే ॥',
        en: 'Whoever recites or hears these sixteen names — at the start of learning, at marriage, on entering or leaving, in conflict, in every task — meets no obstacle.',
      },
    ],
  },
  {
    id: 'ganesha-gayatri',
    title: { te: 'గణేశ గాయత్రి', en: 'Ganesha Gayatri' },
    kind: 'mantra',
    deities: ['ganesha'],
    verses: [
      {
        te: 'ఓం ఏకదంతాయ విద్మహే వక్రతుండాయ ధీమహి ।\nతన్నో దంతిః ప్రచోదయాత్ ॥',
        en: 'We know the single-tusked one, we meditate on the one with the curved trunk. May that tusked Lord inspire us.',
        repeat: 108,
      },
    ],
  },
  {
    id: 'panchakshari',
    title: { te: 'పంచాక్షరి మంత్రం', en: 'Panchakshari Mantra' },
    kind: 'mantra',
    deities: ['shiva'],
    verses: [
      {
        te: 'ఓం నమః శివాయ',
        en: 'Salutations to Shiva, the auspicious one. The five syllables na-maḥ-śi-vā-ya.',
        repeat: 108,
      },
    ],
  },
  {
    id: 'mahamrityunjaya',
    title: { te: 'మహామృత్యుంజయ మంత్రం', en: 'Mahamrityunjaya Mantra' },
    kind: 'mantra',
    deities: ['shiva'],
    intro: {
      te: 'ఆరోగ్యం, దీర్ఘాయువు, భయ నివారణ కోసం జపించే మహా మంత్రం.',
      en: 'The great mantra chanted for health, long life and freedom from fear.',
    },
    verses: [
      {
        te: 'ఓం త్ర్యంబకం యజామహే సుగంధిం పుష్టివర్ధనమ్ ।\nఉర్వారుకమివ బంధనాన్ మృత్యోర్ముక్షీయ మామృతాత్ ॥',
        en: 'We worship the three-eyed Lord, fragrant, who nourishes all. As a ripe cucumber is freed from its vine, may He free us from death — not from immortality.',
        repeat: 108,
      },
    ],
    source: 'Rig Veda 7.59.12',
  },
  {
    id: 'karpura-gauram',
    title: { te: 'కర్పూరగౌరం', en: 'Karpura Gauram' },
    kind: 'shloka',
    deities: ['shiva'],
    intro: { te: 'హారతి సమయంలో చదివే శ్లోకం.', en: 'Commonly recited during aarti.' },
    verses: [
      {
        te: 'కర్పూరగౌరం కరుణావతారం\nసంసారసారం భుజగేంద్రహారమ్ ।\nసదా వసంతం హృదయారవిందే\nభవం భవానీసహితం నమామి ॥',
        en: 'White as camphor, compassion incarnate, the essence of existence, garlanded with the serpent king, ever dwelling in the lotus of the heart — I bow to Bhava with Bhavani.',
      },
    ],
  },
  {
    id: 'shiva-panchakshara-stotram',
    title: { te: 'శివ పంచాక్షర స్తోత్రం', en: 'Shiva Panchakshara Stotram' },
    kind: 'stotram',
    deities: ['shiva'],
    source: 'Adi Shankaracharya',
    verses: [
      {
        te: 'నాగేంద్రహారాయ త్రిలోచనాయ\nభస్మాంగరాగాయ మహేశ్వరాయ ।\nనిత్యాయ శుద్ధాయ దిగంబరాయ\nతస్మై నకారాయ నమః శివాయ ॥',
        en: 'To the one garlanded by the serpent king, three-eyed, smeared with ash, the great Lord, eternal, pure, clad in the directions — to Him, the syllable “Na”, salutations to Shiva.',
      },
      {
        te: 'మందాకినీసలిలచందనచర్చితాయ\nనందీశ్వరప్రమథనాథమహేశ్వరాయ ।\nమందారపుష్పబహుపుష్పసుపూజితాయ\nతస్మై మకారాయ నమః శివాయ ॥',
        en: 'Anointed with Ganga’s water and sandal, Lord of Nandi and the Pramathas, worshipped with mandara and many flowers — to Him, the syllable “Ma”, salutations to Shiva.',
      },
      {
        te: 'శివాయ గౌరీవదనాబ్జవృంద\nసూర్యాయ దక్షాధ్వరనాశకాయ ।\nశ్రీనీలకంఠాయ వృషధ్వజాయ\nతస్మై శికారాయ నమః శివాయ ॥',
        en: 'The auspicious sun that blooms Gauri’s lotus-face, destroyer of Daksha’s sacrifice, the blue-throated one with the bull on his banner — to Him, the syllable “Shi”, salutations to Shiva.',
      },
      {
        te: 'వసిష్ఠకుంభోద్భవగౌతమార్య\nమునీంద్రదేవార్చితశేఖరాయ ।\nచంద్రార్కవైశ్వానరలోచనాయ\nతస్మై వకారాయ నమః శివాయ ॥',
        en: 'Worshipped by Vasishtha, Agastya, Gautama and the gods, whose eyes are the moon, sun and fire — to Him, the syllable “Va”, salutations to Shiva.',
      },
      {
        te: 'యక్షస్వరూపాయ జటాధరాయ\nపినాకహస్తాయ సనాతనాయ ।\nదివ్యాయ దేవాయ దిగంబరాయ\nతస్మై యకారాయ నమః శివాయ ॥',
        en: 'Who took the form of a Yaksha, wears matted locks, holds the Pinaka bow, the eternal, divine, sky-clad Lord — to Him, the syllable “Ya”, salutations to Shiva.',
      },
      {
        te: 'పంచాక్షరమిదం పుణ్యం యః పఠేచ్ఛివసన్నిధౌ ।\nశివలోకమవాప్నోతి శివేన సహ మోదతే ॥',
        en: 'Whoever recites this sacred five-syllable hymn near Shiva attains Shiva’s abode and rejoices with Him.',
      },
    ],
  },
  {
    id: 'lingashtakam',
    title: { te: 'లింగాష్టకం', en: 'Lingashtakam' },
    kind: 'stotram',
    deities: ['shiva'],
    verses: [
      {
        te: 'బ్రహ్మమురారిసురార్చితలింగం\nనిర్మలభాసితశోభితలింగమ్ ।\nజన్మజదుఃఖవినాశకలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Worshipped by Brahma, Vishnu and the gods, pure and shining, destroyer of the sorrows of birth — I bow to that eternal Shiva Linga.',
      },
      {
        te: 'దేవమునిప్రవరార్చితలింగం\nకామదహం కరుణాకరలింగమ్ ।\nరావణదర్పవినాశనలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Worshipped by gods and great sages, burner of desire, ocean of compassion, humbler of Ravana’s pride — I bow to that Shiva Linga.',
      },
      {
        te: 'సర్వసుగంధిసులేపితలింగం\nబుద్ధివివర్ధనకారణలింగమ్ ।\nసిద్ధసురాసురవందితలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Anointed with fragrances, cause of growing wisdom, saluted by siddhas, gods and asuras — I bow to that Shiva Linga.',
      },
      {
        te: 'కనకమహామణిభూషితలింగం\nఫణిపతివేష్టితశోభితలింగమ్ ।\nదక్షసుయజ్ఞవినాశనలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Adorned with gold and great gems, encircled by the serpent king, destroyer of Daksha’s sacrifice — I bow to that Shiva Linga.',
      },
      {
        te: 'కుంకుమచందనలేపితలింగం\nపంకజహారసుశోభితలింగమ్ ।\nసంచితపాపవినాశనలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Smeared with kumkum and sandal, beautiful with lotus garlands, destroyer of accumulated sins — I bow to that Shiva Linga.',
      },
      {
        te: 'దేవగణార్చితసేవితలింగం\nభావైర్భక్తిభిరేవ చ లింగమ్ ।\nదినకరకోటిప్రభాకరలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Served by hosts of gods with feeling and devotion, brilliant as a crore suns — I bow to that Shiva Linga.',
      },
      {
        te: 'అష్టదళోపరివేష్టితలింగం\nసర్వసముద్భవకారణలింగమ్ ।\nఅష్టదరిద్రవినాశితలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Encircled by an eight-petalled lotus, the cause of all creation, destroyer of the eight kinds of poverty — I bow to that Shiva Linga.',
      },
      {
        te: 'సురగురుసురవరపూజితలింగం\nసురవనపుష్పసదార్చితలింగమ్ ।\nపరాత్పరం పరమాత్మకలింగం\nతత్ప్రణమామి సదాశివలింగమ్ ॥',
        en: 'Worshipped by Brihaspati and the best of gods, always offered celestial flowers, beyond the beyond, the Supreme Self — I bow to that Shiva Linga.',
      },
      {
        te: 'లింగాష్టకమిదం పుణ్యం యః పఠేచ్ఛివసన్నిధౌ ।\nశివలోకమవాప్నోతి శివేన సహ మోదతే ॥',
        en: 'Whoever recites this sacred Lingashtakam near Shiva attains Shiva’s abode and rejoices with Him.',
      },
    ],
  },
  {
    id: 'subrahmanya-dhyanam',
    title: { te: 'సుబ్రహ్మణ్య ధ్యానం', en: 'Subrahmanya Dhyanam' },
    kind: 'shloka',
    deities: ['subrahmanya'],
    verses: [
      {
        te: 'షడాననం కుంకుమరక్తవర్ణం\nమహామతిం దివ్యమయూరవాహనమ్ ।\nరుద్రస్య సూనుం సురసైన్యనాథం\nగుహం సదాఽహం శరణం ప్రపద్యే ॥',
        en: 'Six-faced, red as kumkum, of great wisdom, riding the divine peacock, son of Rudra, commander of the gods’ army — I always take refuge in Guha.',
      },
      {
        te: 'ఓం శరవణభవాయ నమః',
        en: 'Salutations to the one born in the reed forest (Saravana).',
        repeat: 108,
      },
    ],
  },
];
