import type { SacredText } from '../types';

export const VAISHNAVA: SacredText[] = [
  {
    id: 'vishnu-dhyanam',
    title: { te: 'విష్ణు ధ్యానం', en: 'Vishnu Dhyanam' },
    kind: 'shloka',
    deities: ['vishnu'],
    verses: [
      {
        te: 'శాంతాకారం భుజగశయనం పద్మనాభం సురేశం\nవిశ్వాధారం గగనసదృశం మేఘవర్ణం శుభాంగమ్ ।\nలక్ష్మీకాంతం కమలనయనం యోగిభిర్ధ్యానగమ్యం\nవందే విష్ణుం భవభయహరం సర్వలోకైకనాథమ్ ॥',
        en: 'Peaceful in form, resting on the serpent, lotus-navelled Lord of the gods, support of the universe, vast as the sky, dark as rain-clouds, beautiful, beloved of Lakshmi, lotus-eyed, reached by yogis in meditation — I bow to Vishnu, remover of the fear of worldly existence, sole Lord of all worlds.',
      },
      {
        te: 'ఓం నమో నారాయణాయ',
        en: 'Salutations to Narayana — the eight-syllable mantra.',
        repeat: 108,
      },
    ],
  },
  {
    id: 'venkatesa-suprabhatam',
    title: { te: 'శ్రీ వేంకటేశ సుప్రభాతం', en: 'Sri Venkatesa Suprabhatam' },
    kind: 'stotram',
    deities: ['venkateswara'],
    daily: 'morning',
    review: true,
    intro: {
      te: 'తెల్లవారుజామున స్వామిని మేల్కొలిపే సుప్రభాతం. (మొదటి శ్లోకాలు)',
      en: 'The dawn hymn that awakens the Lord of Tirumala. (Opening verses)',
    },
    source: 'Prativadi Bhayankaram Annan',
    verses: [
      {
        te: 'కౌసల్యా సుప్రజా రామ పూర్వా సంధ్యా ప్రవర్తతే ।\nఉత్తిష్ఠ నరశార్దూల కర్తవ్యం దైవమాహ్నికమ్ ॥',
        en: 'O Rama, blessed son of Kausalya, dawn is breaking in the east. Rise, O tiger among men — the day’s sacred duties await.',
      },
      {
        te: 'ఉత్తిష్ఠోత్తిష్ఠ గోవింద ఉత్తిష్ఠ గరుడధ్వజ ।\nఉత్తిష్ఠ కమలాకాంత త్రైలోక్యం మంగళం కురు ॥',
        en: 'Rise, rise, O Govinda! Rise, O Lord with Garuda on your banner! Rise, beloved of Lakshmi, and bless the three worlds.',
      },
      {
        te: 'మాతస్సమస్తజగతాం మధుకైటభారేః\nవక్షోవిహారిణి మనోహరదివ్యమూర్తే ।\nశ్రీస్వామిని శ్రితజనప్రియదానశీలే\nశ్రీవేంకటేశదయితే తవ సుప్రభాతమ్ ॥',
        en: 'O Mother of all worlds, who dwells on the chest of Vishnu, of enchanting divine form, sovereign queen, generous to those who seek you, beloved of Venkatesa — may this be a blessed dawn for you.',
      },
      {
        te: 'తవ సుప్రభాతమరవిందలోచనే\nభవతు ప్రసన్నముఖచంద్రమండలే ।\nవిధిశంకరేంద్రవనితాభిరర్చితే\nవృషశైలనాథదయితే దయానిధే ॥',
        en: 'A blessed dawn to you, lotus-eyed one with a serene moon-like face, worshipped by the consorts of Brahma, Shiva and Indra — beloved of the Lord of Vrishashaila, treasure of compassion.',
      },
    ],
  },
  {
    id: 'govinda-namalu',
    title: { te: 'గోవింద నామాలు', en: 'Govinda Namalu' },
    kind: 'keertana',
    deities: ['venkateswara'],
    review: true,
    intro: {
      te: 'తిరుమల యాత్రలో, శనివారం భజనలో పాడే నామావళి (మొదటి భాగం).',
      en: 'The chant sung on the way to Tirumala and in Saturday bhajans (opening part).',
    },
    verses: [
      {
        te: 'శ్రీనివాసా గోవిందా శ్రీ వేంకటేశా గోవిందా\nభక్తవత్సల గోవిందా భాగవతప్రియ గోవిందా\nనిత్యనిర్మల గోవిందా నీలమేఘశ్యామ గోవిందా\nగోవిందా హరి గోవిందా గోకులనందన గోవిందా',
        en: 'O Srinivasa, Venkatesa, lover of devotees, dear to the Bhagavatas, ever-pure, dark as a rain-cloud — Govinda, Hari, joy of Gokula.',
      },
      {
        te: 'పురాణపురుష గోవిందా పుండరీకాక్ష గోవిందా\nనందనందన గోవిందా నవనీతచోర గోవిందా\nగోవిందా హరి గోవిందా గోకులనందన గోవిందా',
        en: 'O ancient Being, lotus-eyed one, son of Nanda, stealer of butter — Govinda, Hari, joy of Gokula.',
      },
    ],
  },
  {
    id: 'adivo-alladivo',
    title: { te: 'అదివో అల్లదివో', en: 'Adivo Alladivo' },
    kind: 'keertana',
    deities: ['venkateswara'],
    review: true,
    source: 'Tallapaka Annamacharya',
    verses: [
      {
        heading: { te: 'పల్లవి', en: 'Pallavi' },
        te: 'అదివో అల్లదివో శ్రీహరి వాసము\nపదివేల శేషుల పడగల మయము',
        en: 'There, look there — the abode of Sri Hari, made of the hoods of ten thousand Sheshas (the seven hills).',
      },
      {
        heading: { te: 'చరణం', en: 'Charanam' },
        te: 'అదె వేంకటాచల మఖిలోన్నతము\nఅదివో బ్రహ్మాదుల కపురూపము\nఅదివో నిత్యనివాస మఖిలమునులకు\nఅదె చూడుడదె మొక్కుడానందమయము',
        en: 'That is Venkatachala, highest of all; rare even for Brahma and the gods; the eternal home of all sages. Look at it, bow to it — it is bliss itself.',
      },
    ],
  },
  {
    id: 'rama-shlokas',
    title: { te: 'శ్రీరామ శ్లోకాలు', en: 'Sri Rama Shlokas' },
    kind: 'shloka',
    deities: ['rama'],
    verses: [
      {
        te: 'శ్రీరామ రామ రామేతి రమే రామే మనోరమే ।\nసహస్రనామ తత్తుల్యం రామనామ వరాననే ॥',
        en: 'Shiva tells Parvati: chanting “Sri Rama Rama Rama” delights the mind; the name of Rama equals the thousand names of Vishnu.',
        ref: 'Vishnu Sahasranama, phala-shruti',
        repeat: 3,
      },
      {
        te: 'రామాయ రామభద్రాయ రామచంద్రాయ వేధసే ।\nరఘునాథాయ నాథాయ సీతాయాః పతయే నమః ॥',
        en: 'Salutations to Rama, the auspicious Ramabhadra, Ramachandra, the creator, Lord of the Raghus, the Lord, husband of Sita.',
      },
      {
        te: 'ఆపదామపహర్తారం దాతారం సర్వసంపదామ్ ।\nలోకాభిరామం శ్రీరామం భూయో భూయో నమామ్యహమ్ ॥',
        en: 'Again and again I bow to Sri Rama, remover of calamities, giver of all prosperity, the delight of the world.',
      },
      {
        heading: { te: 'తారక మంత్రం', en: 'Taraka Mantra' },
        te: 'శ్రీరామ జయరామ జయజయ రామ',
        en: 'Victory to Sri Rama — the thirteen-syllable chant.',
        repeat: 108,
      },
    ],
  },
  {
    id: 'krishna-shlokas',
    title: { te: 'శ్రీకృష్ణ శ్లోకాలు', en: 'Sri Krishna Shlokas' },
    kind: 'shloka',
    deities: ['krishna'],
    verses: [
      {
        te: 'వసుదేవసుతం దేవం కంసచాణూరమర్దనమ్ ।\nదేవకీపరమానందం కృష్ణం వందే జగద్గురుమ్ ॥',
        en: 'I bow to Krishna, the divine son of Vasudeva, slayer of Kamsa and Chanura, supreme joy of Devaki, teacher of the world.',
      },
      {
        te: 'కృష్ణాయ వాసుదేవాయ హరయే పరమాత్మనే ।\nప్రణతక్లేశనాశాయ గోవిందాయ నమో నమః ॥',
        en: 'Salutations again and again to Krishna, Vasudeva, Hari, the Supreme Self, Govinda — who destroys the sorrows of those who bow to him.',
      },
      {
        heading: { te: 'మహామంత్రం', en: 'Maha Mantra' },
        te: 'హరే రామ హరే రామ రామ రామ హరే హరే ।\nహరే కృష్ణ హరే కృష్ణ కృష్ణ కృష్ణ హరే హరే ॥',
        en: 'The sixteen-name mantra calling on Hari, Rama and Krishna.',
        ref: 'Kali-Santarana Upanishad',
        repeat: 108,
      },
    ],
  },
  {
    id: 'madhurashtakam',
    title: { te: 'మధురాష్టకం', en: 'Madhurashtakam' },
    kind: 'stotram',
    deities: ['krishna'],
    source: 'Sri Vallabhacharya',
    verses: [
      {
        te: 'అధరం మధురం వదనం మధురం\nనయనం మధురం హసితం మధురమ్ ।\nహృదయం మధురం గమనం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'His lips are sweet, his face is sweet, his eyes, his smile, his heart, his walk are sweet — everything about the Lord of sweetness is sweet.',
      },
      {
        te: 'వచనం మధురం చరితం మధురం\nవసనం మధురం వలితం మధురమ్ ।\nచలితం మధురం భ్రమితం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'His words, his deeds, his clothes, his posture, his movements, his wandering — all are sweet.',
      },
      {
        te: 'వేణుర్మధురో రేణుర్మధురః\nపాణిర్మధురః పాదౌ మధురౌ ।\nనృత్యం మధురం సఖ్యం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'His flute, the dust of his feet, his hands, his feet, his dance, his friendship — all are sweet.',
      },
      {
        te: 'గీతం మధురం పీతం మధురం\nభుక్తం మధురం సుప్తం మధురమ్ ।\nరూపం మధురం తిలకం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'His song, his yellow garment, his eating, his sleeping, his form, his tilak — all are sweet.',
      },
      {
        te: 'కరణం మధురం తరణం మధురం\nహరణం మధురం స్మరణం మధురమ్ ।\nవమితం మధురం శమితం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'His doings, his saving, his stealing, remembering him, his giving, his calm — all are sweet.',
      },
      {
        te: 'గుంజా మధురా మాలా మధురా\nయమునా మధురా వీచీ మధురా ।\nసలిలం మధురం కమలం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'His gunja beads, his garland, the Yamuna, its waves, its water, its lotuses — all are sweet.',
      },
      {
        te: 'గోపీ మధురా లీలా మధురా\nయుక్తం మధురం ముక్తం మధురమ్ ।\nదృష్టం మధురం శిష్టం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'The gopis, his play, his union, his release, his glance, his manners — all are sweet.',
      },
      {
        te: 'గోపా మధురా గావో మధురా\nయష్టిర్మధురా సృష్టిర్మధురా ।\nదలితం మధురం ఫలితం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥',
        en: 'The cowherds, the cows, his staff, his creation, his triumph, its fruit — everything of the Lord of sweetness is sweet.',
      },
    ],
  },
];
