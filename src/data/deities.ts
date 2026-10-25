import type { Deity } from './types';

export const DEITIES: Deity[] = [
  {
    id: 'ganesha',
    name: { te: 'శ్రీ గణేశుడు', en: 'Sri Ganesha' },
    epithet: { te: 'విఘ్నేశ్వరుడు', en: 'Remover of obstacles' },
    emblem: 'modak',
    colors: ['#4A1408', '#2A0A06', '#F59E2B'],
    about: {
      te: 'ఏ పని మొదలుపెట్టినా ముందుగా పూజించే దేవుడు. విఘ్నాలను తొలగించి, బుద్ధిని, సిద్ధిని ప్రసాదించేవాడు.',
      en: 'Worshipped first before every undertaking. He clears obstacles and grants wisdom and success.',
    },
    japa: { te: 'ఓం గం గణపతయే నమః', en: 'Salutations to Ganapati' },
    pujaName: 'శ్రీ మహాగణాధిపతయే నమః',
  },
  {
    id: 'shiva',
    name: { te: 'శ్రీ శివుడు', en: 'Lord Shiva' },
    epithet: { te: 'మహాదేవుడు', en: 'The Great God' },
    emblem: 'trishul',
    colors: ['#13234A', '#070C1F', '#8FB8FF'],
    about: {
      te: 'లయకారుడు, భోళా శంకరుడు. సోమవారం, కార్తీక మాసం, మహాశివరాత్రి ఆయనకు ప్రీతికరమైనవి.',
      en: 'The auspicious one who dissolves and renews. Mondays, Karthika masam and Maha Shivaratri are dear to him.',
    },
    japa: { te: 'ఓం నమః శివాయ', en: 'Salutations to Shiva (Panchakshari)' },
    pujaName: 'శ్రీ సాంబసదాశివాయ నమః',
  },
  {
    id: 'vishnu',
    name: { te: 'శ్రీ మహావిష్ణువు', en: 'Lord Vishnu' },
    epithet: { te: 'లోకరక్షకుడు', en: 'Preserver of the worlds' },
    emblem: 'chakra',
    colors: ['#0E2A4A', '#06121F', '#5EC8F2'],
    about: {
      te: 'జగత్తును పాలించే దేవుడు. ధర్మం క్షీణించినప్పుడు అవతారాలు ధరించి లోకాన్ని రక్షిస్తాడు.',
      en: 'The sustainer of the universe, who descends as avatars whenever dharma declines.',
    },
    japa: { te: 'ఓం నమో నారాయణాయ', en: 'Salutations to Narayana (Ashtakshari)' },
    pujaName: 'శ్రీ మహావిష్ణవే నమః',
  },
  {
    id: 'venkateswara',
    name: { te: 'శ్రీ వేంకటేశ్వరుడు', en: 'Sri Venkateswara' },
    epithet: { te: 'కలియుగ ప్రత్యక్ష దైవం', en: 'Lord of the Seven Hills' },
    emblem: 'namam',
    colors: ['#3B1A05', '#1C0B02', '#FFC857'],
    about: {
      te: 'తిరుమల ఏడుకొండలపై కొలువైన శ్రీనివాసుడు. శనివారం ఆయనకు విశేషమైన రోజు.',
      en: 'Srinivasa of the Seven Hills at Tirumala. Saturdays are especially sacred to him.',
    },
    japa: { te: 'ఓం నమో వేంకటేశాయ', en: 'Salutations to Venkatesa' },
    pujaName: 'శ్రీ వేంకటేశ్వరాయ నమః',
  },
  {
    id: 'rama',
    name: { te: 'శ్రీ రాముడు', en: 'Sri Rama' },
    epithet: { te: 'మర్యాదా పురుషోత్తముడు', en: 'The ideal of dharma' },
    emblem: 'bow',
    colors: ['#0F3326', '#061A12', '#7FE0A8'],
    about: {
      te: 'సత్యం, ధర్మం, మర్యాదలకు ప్రతిరూపం. రామనామం తారక మంత్రంగా ప్రసిద్ధి.',
      en: 'The embodiment of truth and righteousness. His name itself is revered as the Taraka mantra.',
    },
    japa: { te: 'శ్రీరామ జయరామ జయజయ రామ', en: 'Victory to Sri Rama' },
    pujaName: 'శ్రీ రామచంద్రాయ నమః',
  },
  {
    id: 'krishna',
    name: { te: 'శ్రీ కృష్ణుడు', en: 'Sri Krishna' },
    epithet: { te: 'గీతాచార్యుడు', en: 'Teacher of the Gita' },
    emblem: 'flute',
    colors: ['#0B2547', '#040E1F', '#4FD1C5'],
    about: {
      te: 'వేణుగోపాలుడు, భగవద్గీతను బోధించిన జగద్గురువు. ప్రేమ, భక్తి, జ్ఞానాల సంగమం.',
      en: 'The flute-playing cowherd and the world-teacher who spoke the Bhagavad Gita.',
    },
    japa: { te: 'ఓం నమో భగవతే వాసుదేవాయ', en: 'Salutations to Lord Vasudeva (Dvadashakshari)' },
    pujaName: 'శ్రీ కృష్ణాయ నమః',
  },
  {
    id: 'hanuman',
    name: { te: 'శ్రీ ఆంజనేయుడు', en: 'Sri Hanuman' },
    epithet: { te: 'రామభక్త హనుమాన్', en: 'Devotee of Rama' },
    emblem: 'gada',
    colors: ['#4A1A04', '#240B02', '#FF8A3D'],
    about: {
      te: 'బలం, బుద్ధి, ధైర్యం, భక్తికి ప్రతీక. మంగళవారం, శనివారం ఆయన పూజకు విశేషం.',
      en: 'Strength, wisdom, courage and devotion. Tuesdays and Saturdays are special for his worship.',
    },
    japa: { te: 'ఓం శ్రీ హనుమతే నమః', en: 'Salutations to Sri Hanuman' },
    pujaName: 'శ్రీ ఆంజనేయాయ నమః',
  },
  {
    id: 'lakshmi',
    name: { te: 'శ్రీ మహాలక్ష్మి', en: 'Sri Mahalakshmi' },
    epithet: { te: 'ఐశ్వర్య ప్రదాయిని', en: 'Giver of prosperity' },
    emblem: 'lotus',
    colors: ['#4A0B2A', '#220414', '#FF9EC4'],
    about: {
      te: 'ఐశ్వర్యం, శుభం, సౌభాగ్యాలను ఇచ్చే తల్లి. శుక్రవారం, వరలక్ష్మీ వ్రతం, దీపావళి ఆమెకు ప్రీతికరం.',
      en: 'The Mother of wealth and auspiciousness. Fridays, Varalakshmi Vratam and Deepavali are dear to her.',
    },
    japa: { te: 'ఓం శ్రీం మహాలక్ష్మ్యై నమః', en: 'Salutations to Mahalakshmi' },
    pujaName: 'శ్రీ మహాలక్ష్మ్యై నమః',
  },
  {
    id: 'saraswati',
    name: { te: 'శ్రీ సరస్వతీ దేవి', en: 'Sri Saraswati' },
    epithet: { te: 'విద్యాదేవత', en: 'Goddess of learning' },
    emblem: 'veena',
    colors: ['#1E2440', '#0A0D1C', '#E6EEFF'],
    about: {
      te: 'విద్య, వాక్కు, సంగీతం, కళలను ప్రసాదించే తల్లి. అక్షరాభ్యాసం, వసంత పంచమి నాడు విశేష పూజ.',
      en: 'Bestower of knowledge, speech, music and arts. Specially worshipped at Aksharabhyasam and Vasanta Panchami.',
    },
    japa: { te: 'ఓం ఐం సరస్వత్యై నమః', en: 'Salutations to Saraswati' },
    pujaName: 'శ్రీ సరస్వత్యై నమః',
  },
  {
    id: 'durga',
    name: { te: 'శ్రీ దుర్గా దేవి', en: 'Sri Durga' },
    epithet: { te: 'కనకదుర్గమ్మ', en: 'The invincible Mother' },
    emblem: 'yantra',
    colors: ['#4A0710', '#200206', '#FF5A5F'],
    about: {
      te: 'దుష్టశిక్షణ, శిష్టరక్షణ చేసే జగన్మాత. దసరా నవరాత్రుల్లో తొమ్మిది రూపాలలో పూజిస్తారు.',
      en: 'The Mother who destroys evil and protects the good, worshipped in nine forms during Navaratri.',
    },
    japa: { te: 'ఓం దుం దుర్గాయై నమః', en: 'Salutations to Durga' },
    pujaName: 'శ్రీ దుర్గాదేవ్యై నమః',
  },
  {
    id: 'subrahmanya',
    name: { te: 'శ్రీ సుబ్రహ్మణ్యేశ్వరుడు', en: 'Sri Subrahmanya' },
    epithet: { te: 'షణ్ముఖుడు', en: 'The six-faced commander' },
    emblem: 'vel',
    colors: ['#3A1240', '#1A061E', '#FFB547'],
    about: {
      te: 'శివపార్వతుల కుమారుడు, దేవసేనాపతి. సుబ్రహ్మణ్య షష్ఠి, మంగళవారం విశేషం.',
      en: 'Son of Shiva and Parvati, commander of the divine army. Subrahmanya Shashti and Tuesdays are special.',
    },
    japa: { te: 'ఓం శరవణభవాయ నమః', en: 'Salutations to the one born in the reed forest' },
    pujaName: 'శ్రీ సుబ్రహ్మణ్యేశ్వరాయ నమః',
  },
  {
    id: 'ayyappa',
    name: { te: 'శ్రీ అయ్యప్ప స్వామి', en: 'Sri Ayyappa' },
    epithet: { te: 'హరిహరసుతుడు', en: 'Son of Hari and Hara' },
    emblem: 'steps',
    colors: ['#1A1A1A', '#050505', '#FFB000'],
    about: {
      te: 'శబరిమల కొండపై కొలువైన ధర్మశాస్త. మండల దీక్ష, ఇరుముడి, పదునెట్టాంబడి ఆయన ఆరాధనలో ప్రధానం.',
      en: 'Dharma Sastha of Sabarimala. The mandala deeksha, irumudi and the eighteen holy steps are central to his worship.',
    },
    japa: { te: 'స్వామియే శరణం అయ్యప్ప', en: 'O Lord, you are my refuge, Ayyappa' },
    pujaName: 'శ్రీ ధర్మశాస్త్రే నమః',
  },
  {
    id: 'surya',
    name: { te: 'శ్రీ సూర్యనారాయణుడు', en: 'Sri Surya' },
    epithet: { te: 'ప్రత్యక్ష దైవం', en: 'The visible God' },
    emblem: 'sun',
    colors: ['#4A2A04', '#1F1002', '#FFD24A'],
    about: {
      te: 'ప్రతిరోజూ కనిపించే దైవం. ఆరోగ్యం, తేజస్సు ఇచ్చేవాడు. ఆదివారం, రథసప్తమి, సంక్రాంతి విశేషం.',
      en: 'The God we see every day, giver of health and radiance. Sundays, Ratha Saptami and Sankranti are special.',
    },
    japa: { te: 'ఓం సూర్యాయ నమః', en: 'Salutations to Surya' },
    pujaName: 'శ్రీ సూర్యనారాయణాయ నమః',
  },
];

export const deityById = (id: string) => DEITIES.find((d) => d.id === id);

/** Traditional deity of each weekday (0 = Sunday) */
export const WEEKDAY_DEITY = ['surya', 'shiva', 'hanuman', 'ganesha', 'vishnu', 'lakshmi', 'venkateswara'];
export const WEEKDAY_NAMES: { te: string; en: string }[] = [
  { te: 'ఆదివారం', en: 'Sunday' },
  { te: 'సోమవారం', en: 'Monday' },
  { te: 'మంగళవారం', en: 'Tuesday' },
  { te: 'బుధవారం', en: 'Wednesday' },
  { te: 'గురువారం', en: 'Thursday' },
  { te: 'శుక్రవారం', en: 'Friday' },
  { te: 'శనివారం', en: 'Saturday' },
];
