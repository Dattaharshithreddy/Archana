import type { SacredText, Verse } from '../types';

/** A paragraph of story: Telugu narration + English rendering, optional section heading. */
const p = (te: string, en: string, heading?: [string, string]): Verse => ({
  te,
  en,
  ...(heading ? { heading: { te: heading[0], en: heading[1] } } : {}),
});

const AKSHATA_INTRO = {
  te: 'వ్రతకథ వినేటప్పుడు చేతిలో అక్షతలు పట్టుకుని, శ్రద్ధగా వినాలి. కథ పూర్తయ్యాక ఆ అక్షతలను దేవుని పై చల్లి, తలపై వేసుకోవాలి.',
  en: 'Hold a few grains of akshata in your hand while listening to the vrata katha. When the story ends, shower them on the deity and place a few on your own head.',
};

export const VRATA_KATHAS: SacredText[] = [
  // ───────────────────────────── Vinayaka Chavithi ─────────────────────────────
  {
    id: 'vinayaka-vrata-katha',
    title: { te: 'వినాయక చవితి వ్రతకథ', en: 'Vinayaka Chavithi Vrata Katha' },
    kind: 'guide',
    deities: ['ganesha'],
    review: true,
    intro: AKSHATA_INTRO,
    verses: [
      p(
        'పూర్వం గజ రూపం గల గజాసురుడు అనే రాక్షసుడు శివుని కోసం ఘోర తపస్సు చేశాడు. అతని భక్తికి మెచ్చిన పరమేశ్వరుడు ప్రత్యక్షమై వరం కోరుకోమన్నాడు. "స్వామీ, మీరు ఎల్లప్పుడూ నా ఉదరంలోనే నివసించాలి" అని గజాసురుడు కోరాడు. భక్తవశుడైన శివుడు అలాగే అతని ఉదరంలో ప్రవేశించి నివసించసాగాడు.',
        'Long ago an elephant-formed demon, Gajasura, performed fierce penance for Shiva. Pleased, Shiva appeared and offered a boon. “Lord, live forever inside my belly,” Gajasura asked. Bound by his devotee’s love, Shiva entered his belly and dwelt there.',
        ['గజాసుర వృత్తాంతం', 'The story of Gajasura'],
      ),
      p(
        'కైలాసంలో పార్వతీదేవి భర్త జాడ తెలియక విచారించింది. చివరికి ఆయన గజాసురుని ఉదరంలో ఉన్నాడని తెలుసుకుని, శ్రీమహావిష్ణువును ప్రార్థించింది. విష్ణువు నందీశ్వరుని గంగిరెద్దుగా అలంకరించి, తాను సన్నాయి వాయించే గంగిరెద్దుల వానిగా, బ్రహ్మాది దేవతలు వాద్యకారులుగా గజాసురుని నగరానికి వెళ్ళారు.',
        'In Kailasa, Parvati grieved, not knowing where her husband was. Learning that he was inside Gajasura, she prayed to Vishnu. Vishnu dressed Nandi as a decorated performing bull, became the bull-master playing the sannai, and with Brahma and the gods as musicians went to Gajasura’s city.',
      ),
      p(
        'వారి ఆట పాటలకు ఆనందించిన గజాసురుడు "ఏమి కావాలో కోరుకోండి" అన్నాడు. విష్ణువు "ఈ నందీశ్వరుడు శివుని కోసం వెతుకుతున్నాడు, శివుని మాకు అప్పగించు" అని కోరాడు. వచ్చినవాడు శ్రీహరి అని గ్రహించిన గజాసురుడు, తన అంతం దగ్గర పడిందని తెలుసుకుని, లోపలున్న శివుని ప్రార్థించాడు: "స్వామీ, నా శిరస్సు లోకమంతా పూజింపబడేలా, నా చర్మాన్ని మీరు ధరించేలా అనుగ్రహించండి." తర్వాత నందీశ్వరుడు తన కొమ్ములతో అతని ఉదరాన్ని చీల్చగా శివుడు బయటకు వచ్చాడు. గజాసురుని చర్మాన్ని ధరించి శివుడు గజచర్మాంబరధారి అయ్యాడు.',
        'Delighted by their performance, Gajasura said, “Ask for anything.” Vishnu said, “This Nandi is searching for Shiva — give Shiva back to us.” Gajasura realised it was Hari himself and that his end had come. He prayed to Shiva within: “Lord, let my head be worshipped by the whole world, and wear my hide yourself.” Nandi then tore open his belly with his horns and Shiva emerged, wearing Gajasura’s hide ever after.',
      ),
      p(
        'భర్త రాక గురించి విని సంతోషించిన పార్వతీదేవి స్నానానికి సిద్ధమైంది. నలుగు పిండితో ఒక అందమైన బాలుని బొమ్మ చేసి, దానికి ప్రాణం పోసి, "నేను స్నానం చేసి వచ్చే వరకు ఎవరినీ లోపలికి రానీయకు" అని ద్వారం వద్ద కాపలా ఉంచింది.',
        'Hearing that her husband was returning, Parvati prepared for her bath. From the turmeric paste on her body she shaped a beautiful boy, gave him life, and set him at the door: “Let no one in until I finish my bath.”',
        ['వినాయకుని జననం', 'The birth of Vinayaka'],
      ),
      p(
        'శివుడు కైలాసానికి వచ్చి లోపలికి వెళ్ళబోగా ఆ బాలుడు అడ్డుకున్నాడు. ఎంత చెప్పినా వినకపోవడంతో కోపించిన శివుడు త్రిశూలంతో ఆ బాలుని శిరస్సు ఖండించాడు. బయటకు వచ్చిన పార్వతి జరిగినది చూసి దుఃఖించగా, శివుడు గజాసురుని శిరస్సును తెచ్చి ఆ బాలుని దేహానికి అతికించి ప్రాణం పోశాడు. అలా ఆ బాలుడు గజాననుడు అయ్యాడు. ఆయనకు ఎలుక వాహనం అయింది.',
        'Shiva arrived and tried to enter, but the boy blocked him. When he would not yield, the angry Shiva struck off the boy’s head with his trident. Parvati came out and wept. Shiva then fixed Gajasura’s elephant head onto the boy’s body and gave him life. So the boy became Gajanana, the elephant-faced one, and the mouse became his vehicle.',
      ),
      p(
        'కొంతకాలానికి దేవతలు, మునులు శివుని వద్దకు వచ్చి "విఘ్నాలను తొలగించే ఒక అధిపతిని మాకు ప్రసాదించండి" అని కోరారు. గణాధిపత్యం తనకు కావాలని గజాననుడు, కుమారస్వామి ఇద్దరూ కోరారు. శివుడు "ముల్లోకాలలోని పుణ్యనదులన్నింటిలో స్నానం చేసి ముందుగా వచ్చినవారే గణాధిపతి" అని పరీక్ష పెట్టాడు.',
        'In time the gods and sages came to Shiva asking for a lord who would remove obstacles. Both Gajanana and Kumaraswamy asked for that office. Shiva set a test: “Whoever bathes in all the holy rivers of the three worlds and returns first shall be lord of the ganas.”',
        ['గణాధిపత్యం', 'Becoming lord of the ganas'],
      ),
      p(
        'కుమారస్వామి వెంటనే నెమలి వాహనం ఎక్కి బయలుదేరాడు. మందగమనుడైన గజాననుడు ఉపాయం ఆలోచించి తల్లిదండ్రులకు నమస్కరించి, వారి చుట్టూ ముమ్మారు ప్రదక్షిణ చేశాడు. తల్లిదండ్రులకు ప్రదక్షిణ చేయడం సమస్త తీర్థ స్నానాలకు సమానం. కుమారస్వామి ఏ నదికి వెళ్ళినా అక్కడ అప్పటికే స్నానం చేసి వెళ్తున్న అన్నగారే కనిపించాడు. చివరికి తిరిగి వచ్చి తండ్రికి నమస్కరించి "అన్నగారే గణాధిపత్యానికి తగినవారు" అని అంగీకరించాడు. అలా భాద్రపద శుద్ధ చవితి నాడు గజాననుడు గణాధిపతి అయ్యాడు.',
        'Kumara at once set off on his peacock. The slow-moving Gajanana thought of a better way: he bowed to his parents and walked around them three times — circling one’s parents equals bathing in every holy river. At every river Kumara reached, he saw his elder brother already returning from his bath. Kumara came back, bowed to his father and said, “My brother is worthy of this office.” So on Bhadrapada Shukla Chavithi Gajanana became Ganadhipati.',
      ),
      p(
        'ఆ రోజు భక్తులు సమర్పించిన ఉండ్రాళ్ళు, కుడుములు, పాలతాలికలు తృప్తిగా ఆరగించిన విఘ్నేశ్వరుడు సాయంత్రం కైలాసానికి వచ్చి తల్లిదండ్రులకు నమస్కరించబోయాడు. పొట్ట నిండి ఉండటంతో వంగలేకపోయాడు. అది చూసి శివుని శిరస్సుపై ఉన్న చంద్రుడు నవ్వాడు. "రాజదృష్టి సోకి రాళ్ళు కూడా పగులుతాయి" అన్నట్లు ఆ దృష్టి తగిలి వినాయకుని ఉదరం పగిలి ఆయన కుప్పకూలాడు.',
        'That day Vighneshwara happily ate the undrallu, kudumulu and palatalikalu his devotees offered. In the evening he came to Kailasa to bow to his parents but, his belly full, could not bend. The moon on Shiva’s head laughed at him — and, as the saying goes, even stones crack under such an evil eye: Vinayaka’s belly burst and he fell.',
        ['చంద్రునికి శాపం', 'The curse on the moon'],
      ),
      p(
        'దుఃఖించిన పార్వతి చంద్రుని చూసి "పాపాత్ముడా, నీ దృష్టి సోకి నా కుమారుడు మరణించాడు. నిన్ను చూసినవారు పాపాత్ములై నీలాపనిందలు పొందుదురు గాక" అని శపించింది. ఆ సమయంలో సప్తఋషులు భార్యలతో యజ్ఞం చేస్తున్నారు. అగ్నిదేవుడు ఋషిపత్నులను చూసి మోహించగా, ఆయన భార్య స్వాహాదేవి అరుంధతి తప్ప మిగిలిన ఋషిపత్నుల రూపం ధరించి భర్తను సంతోషపెట్టింది. ఋషులు తమ భార్యలనే అపార్థం చేసుకుని వారిని విడిచిపెట్టారు. శాపగ్రస్తుడైన చంద్రుని చూడటం వల్లే ఋషిపత్నులకు ఈ నింద వచ్చింది.',
        'Grieving, Parvati cursed the moon: “Wicked one, my son died under your gaze. Whoever looks at you shall suffer false accusations.” At that time the seven sages were performing a sacrifice with their wives. Agni was drawn to the sages’ wives; his own wife Swaha took the forms of all of them except Arundhati to please him. Mistaking this, the sages abandoned their wives. Because the women had looked at the cursed moon, this undeserved blame fell on them.',
      ),
      p(
        'దేవతలు, ఋషులు బ్రహ్మదేవునితో కలిసి కైలాసానికి వచ్చి, మరణించిన వినాయకుని శివుడు బ్రతికించాడు. తర్వాత వారు పార్వతిని ప్రార్థించారు: "అమ్మా, నీ శాపం వల్ల లోకమంతా చంద్రుని చూసి నిందల పాలవుతోంది. దయచేసి శాపాన్ని ఉపసంహరించు." అప్పుడు పార్వతి "వినాయకుడు చంద్రుని చూసి నవ్విన భాద్రపద శుద్ధ చవితి నాడు మాత్రం చంద్రుని చూడరాదు; ఆ రోజు చూసినవారికి నింద తప్పదు" అని శాపాన్ని ఆ ఒక్క రోజుకు పరిమితం చేసింది.',
        'The gods and sages came to Kailasa with Brahma, and Shiva restored Vinayaka to life. Then they begged Parvati: “Mother, because of your curse the whole world is falling into blame by seeing the moon. Please withdraw it.” Parvati limited the curse: “Only on Bhadrapada Shukla Chavithi, the day the moon laughed at Vinayaka, must no one look at the moon; whoever does will surely face false blame.”',
      ),
      p(
        'ద్వాపరయుగంలో ఒకనాడు నారదుడు ద్వారకకు వచ్చి శ్రీకృష్ణునితో ఈ కథ చెప్పి "ఈ రాత్రి చవితి చంద్రుని చూడవద్దు" అని హెచ్చరించాడు. ఆ రాత్రి కృష్ణుడు ఆవుల పాలు పితుకుతూ పాలలో చంద్రుని ప్రతిబింబాన్ని చూశాడు. "నాకు ఏ నింద రాబోతోందో" అని ఆలోచించాడు.',
        'In the Dvapara age, Narada came to Dwaraka, told Krishna this story and warned him not to see the Chavithi moon that night. That night, while milking cows, Krishna saw the moon reflected in the milk. “What blame is coming to me?” he wondered.',
        ['శ్యమంతకమణి కథ', 'The Syamantaka jewel'],
      ),
      p(
        'కొన్నాళ్ళకు సత్రాజిత్తు సూర్యుని ఉపాసించి, రోజూ ఎనిమిది బారువుల బంగారం ఇచ్చే శ్యమంతకమణిని పొందాడు. కృష్ణుడు "ఆ మణి రాజుకు ఇస్తే రాజ్యానికి మేలు" అని అడిగాడు; సత్రాజిత్తు ఇవ్వలేదు. ఒకనాడు సత్రాజిత్తు తమ్ముడు ప్రసేనుడు ఆ మణి ధరించి వేటకు వెళ్ళగా, ఒక సింహం అతన్ని చంపి మణిని నోట కరచుకుని వెళ్ళింది. ఆ సింహాన్ని జాంబవంతుడు చంపి, మణిని తన గుహకు తీసుకువెళ్ళి కుమార్తె జాంబవతి ఆడుకునే ఊయలకు కట్టాడు.',
        'Some time later Satrajit worshipped Surya and received the Syamantaka jewel, which yielded eight measures of gold every day. Krishna suggested it be given to the king for the good of the kingdom; Satrajit refused. One day Satrajit’s brother Prasena wore the jewel on a hunt; a lion killed him and carried off the jewel in its mouth. Jambavan killed the lion, took the jewel to his cave and tied it to the cradle of his daughter Jambavati.',
      ),
      p(
        'తమ్ముడు తిరిగి రాకపోవడంతో సత్రాజిత్తు "మణి కోసం కృష్ణుడే నా తమ్ముని చంపాడు" అని నిందించాడు. చవితి చంద్రుని చూసిన ఫలమిదే అని గ్రహించిన కృష్ణుడు, నింద తొలగించుకోవడానికి ప్రసేనుని జాడ వెతుకుతూ అడవికి వెళ్ళాడు. అక్కడ ప్రసేనుని శవం, సింహం జాడలు, తర్వాత ఎలుగుబంటి అడుగులు కనిపించాయి. వాటిని అనుసరించి జాంబవంతుని గుహకు చేరాడు.',
        'When his brother did not return, Satrajit accused Krishna: “He killed my brother for the jewel.” Krishna understood this was the fruit of seeing the Chavithi moon. To clear his name he searched the forest for Prasena, found his body, then the lion’s tracks, and then a bear’s footprints, which led him to Jambavan’s cave.',
      ),
      p(
        'ఊయలకు కట్టిన మణిని తీసుకోబోగా జాంబవంతుడు అడ్డుకున్నాడు. ఇద్దరి మధ్య ఇరవై ఎనిమిది రోజులు భీకర యుద్ధం జరిగింది. జాంబవంతుని బలం క్షీణించగా, తనతో యుద్ధం చేస్తున్నది త్రేతాయుగంలో తాను సేవించిన శ్రీరాముడేనని గ్రహించాడు. "స్వామీ, మిమ్మల్ని గుర్తించలేకపోయాను, క్షమించండి" అని నమస్కరించి, శ్యమంతకమణితో పాటు తన కుమార్తె జాంబవతిని కూడా కృష్ణునికి సమర్పించాడు.',
        'When Krishna reached for the jewel, Jambavan stopped him. They fought fiercely for twenty-eight days. As his strength failed, Jambavan realised his opponent was none other than Sri Rama, whom he had served in the Treta age. “Lord, forgive me for not knowing you,” he said, bowing, and offered Krishna both the Syamantaka jewel and his daughter Jambavati.',
      ),
      p(
        'కృష్ణుడు ద్వారకకు తిరిగి వచ్చి సభలో జరిగినదంతా చెప్పి మణిని సత్రాజిత్తుకు అప్పగించాడు. తన తప్పు తెలుసుకున్న సత్రాజిత్తు సిగ్గుపడి, క్షమాపణ కోరి, తన కుమార్తె సత్యభామను మణితో సహా కృష్ణునికి ఇచ్చి వివాహం చేశాడు. అప్పుడు దేవతలు, మునులు "స్వామీ, మీరు సమర్థులు కనుక నింద తొలగించుకున్నారు; మా వంటివారి గతి ఏమిటి?" అని అడిగారు.',
        'Krishna returned to Dwaraka, told the assembly everything and handed the jewel to Satrajit. Ashamed of his mistake, Satrajit asked forgiveness and gave his daughter Satyabhama to Krishna in marriage, along with the jewel. Then the gods and sages asked, “Lord, you were able to clear your name — but what of people like us?”',
      ),
      p(
        'అప్పుడు శ్రీకృష్ణుడు ఇలా అనుగ్రహించాడు: "భాద్రపద శుద్ధ చవితి నాడు వినాయకుని యథాశక్తి పూజించి, ఈ శ్యమంతకమణి కథ విని, అక్షతలు తలపై వేసుకున్నవారికి ఆ రోజు పొరపాటున చంద్రుని చూసినా నీలాపనిందలు అంటవు." అప్పటి నుండి ప్రతి సంవత్సరం భక్తులు వినాయక చవితి నాడు ఈ వ్రతం చేసి, కథ విని, సకల విఘ్నాలు తొలగి సుఖంగా ఉంటున్నారు.',
        'Krishna then blessed them: “Whoever worships Vinayaka as best they can on Bhadrapada Shukla Chavithi, hears this story of the Syamantaka jewel and places the akshata on their head, will not suffer false blame even if they see the moon by mistake.” Since then, every year devotees perform this vrata on Vinayaka Chavithi, hear the story, and live happily, free of obstacles.',
        ['ఫలశ్రుతి', 'The blessing'],
      ),
      p(
        'సింహః ప్రసేనమవధీత్ సింహో జాంబవతా హతః ।\nసుకుమారక మా రోదీః తవ హ్యేష స్యమంతకః ॥',
        'The lion killed Prasena; the lion was killed by Jambavan. Do not cry, dear child — this Syamantaka is yours. (Recite this shloka if you happen to see the moon on Chavithi.)',
        ['చంద్ర దర్శన దోష నివారణ శ్లోకం', 'Shloka if you see the moon'],
      ),
    ],
  },

  // ───────────────────────────── Varalakshmi Vratam ─────────────────────────────
  {
    id: 'varalakshmi-vrata-katha',
    title: { te: 'వరలక్ష్మీ వ్రతకథ', en: 'Varalakshmi Vrata Katha' },
    kind: 'guide',
    deities: ['lakshmi'],
    review: true,
    intro: AKSHATA_INTRO,
    verses: [
      p(
        'ఒకనాడు కైలాసంలో పరమేశ్వరుడు ప్రమథగణాలతో కొలువై ఉండగా పార్వతీదేవి ఇలా అడిగింది: "స్వామీ, స్త్రీలు సర్వ సౌభాగ్యాలు, పుత్రపౌత్రాభివృద్ధి, ధనధాన్యాలు పొందడానికి తగిన ఉత్తమ వ్రతం ఏదైనా ఉంటే చెప్పండి."',
        'One day in Kailasa, while Shiva sat among his ganas, Parvati asked: “Lord, if there is a vrata by which women can gain every good fortune, the flourishing of their family, and wealth and grain, please tell me.”',
        ['పార్వతీ ప్రశ్న', 'Parvati asks'],
      ),
      p(
        'అప్పుడు శివుడు "దేవీ, అటువంటి వ్రతం వరలక్ష్మీ వ్రతం. దీనిని శ్రావణ మాసంలో పౌర్ణమికి ముందు వచ్చే శుక్రవారం నాడు ఆచరించాలి. ఈ వ్రతాన్ని మొదట ఆచరించిన చారుమతి కథ చెబుతాను, విను" అన్నాడు.',
        'Shiva said: “Devi, that vrata is the Varalakshmi Vratam, performed on the Friday before the full moon in Shravana masam. Listen to the story of Charumati, who first observed it.”',
      ),
      p(
        'మగధ దేశంలో కుండినం అనే పట్టణం ఉండేది. బంగారు ప్రాకారాలతో, అందమైన మేడలతో ఆ పట్టణం ప్రకాశించేది. అందులో చారుమతి అనే ఒక పతివ్రత నివసించేది. ఆమె ప్రతిరోజూ తెల్లవారుజామునే లేచి, స్నానం చేసి, భర్తను దైవంగా సేవించేది. అత్తమామలను భక్తితో పూజించేది. ఇంటి పనులన్నీ శ్రద్ధగా చేసేది. మితంగా, ప్రియంగా మాట్లాడేది.',
        'In the land of Magadha was a town called Kundinam, shining with golden walls and fine mansions. There lived Charumati, a devoted wife. She rose before dawn every day, bathed, served her husband as divine, honoured her parents-in-law with devotion, did every household duty with care, and spoke little and kindly.',
        ['చారుమతి', 'Charumati'],
      ),
      p(
        'ఆమె సద్గుణాలకు మెచ్చిన మహాలక్ష్మి ఒకనాటి రాత్రి ఆమె కలలో ప్రత్యక్షమై ఇలా చెప్పింది: "చారుమతీ, నేను వరలక్ష్మిని. శ్రావణ పౌర్ణమికి ముందు వచ్చే శుక్రవారం నాడు నన్ను పూజిస్తే నీవు కోరిన వరాలన్నీ ఇస్తాను."',
        'Pleased by her virtues, Mahalakshmi appeared in her dream one night and said: “Charumati, I am Varalakshmi. Worship me on the Friday before the Shravana full moon, and I will grant every boon you desire.”',
        ['అమ్మవారి స్వప్న దర్శనం', 'Lakshmi in a dream'],
      ),
      p(
        'చారుమతి కలలోనే అమ్మవారికి ప్రదక్షిణ నమస్కారాలు చేసి ఇలా స్తుతించింది:\nనమస్తే సర్వలోకానాం జనన్యై పుణ్యమూర్తయే ।\nశరణ్యే త్రిజగద్వంద్యే విష్ణువక్షఃస్థలాలయే ॥\n"అమ్మా, నీ కటాక్షం వల్లనే జనులు ధనవంతులు, విద్యావంతులు అవుతున్నారు. నా పూర్వజన్మ సుకృతం వల్ల నీ దర్శనం లభించింది." తర్వాత ఆమెకు మెలకువ వచ్చింది.',
        'Still in the dream, Charumati circled and bowed to the Goddess and praised her: “Salutations to the mother of all worlds, the embodiment of merit, the refuge revered in the three worlds, who dwells on Vishnu’s chest. Mother, it is by your glance that people become wealthy and learned. By the merit of past lives I have seen you.” Then she awoke.',
      ),
      p(
        'కల గురించి భర్తకు, అత్తమామలకు చెప్పగా వారు ఎంతో సంతోషించి వ్రతం చేయమని ప్రోత్సహించారు. ఆ కల గురించి విన్న పట్టణంలోని స్త్రీలందరూ శ్రావణ శుక్రవారం కోసం ఎదురుచూశారు.',
        'She told her husband and parents-in-law, who were overjoyed and encouraged her to perform the vrata. The other women of the town, hearing of the dream, eagerly awaited the Shravana Friday too.',
      ),
      p(
        'ఆ శుక్రవారం రాగానే స్త్రీలందరూ తెల్లవారుజామునే స్నానం చేసి, పట్టువస్త్రాలు ధరించి, చారుమతి ఇంటికి చేరారు. ఇంటిని ఆవుపేడతో అలికి, ముగ్గులు వేసి, మంటపం ఏర్పరిచారు. బియ్యంపై కలశం ఉంచి, మామిడాకులు, కొబ్బరికాయతో అలంకరించి, వరలక్ష్మిని ఆవాహన చేసి షోడశోపచారాలతో పూజించారు.',
        'When the Friday came, all the women bathed at dawn, wore silk and gathered at Charumati’s house. They plastered the floor with cow dung, drew muggulu and built a mandapam. They placed a kalasham on rice, decorated it with mango leaves and a coconut, invoked Varalakshmi and worshipped her with the sixteen offerings.',
        ['వ్రత ఆచరణ', 'Performing the vrata'],
      ),
      p(
        'తొమ్మిది పోగుల దారానికి తొమ్మిది ముడులు వేసి చేసిన తోరాన్ని పూజించి కుడి చేతికి కట్టుకున్నారు. అమ్మవారికి రకరకాల పిండివంటలు నైవేద్యం పెట్టారు. తర్వాత ప్రదక్షిణలు చేయసాగారు.',
        'They worshipped the toram — a thread of nine strands with nine knots — and tied it on their right wrists. They offered many kinds of sweets and savouries as naivedyam, and then began to circle the Goddess.',
      ),
      p(
        'మొదటి ప్రదక్షిణ చేయగానే వారి కాళ్ళకు గజ్జెలు, అందెలు ఘల్లుఘల్లుమంటూ వచ్చాయి. రెండవ ప్రదక్షిణకు చేతులకు నవరత్నాలు పొదిగిన కంకణాలు వచ్చాయి. మూడవ ప్రదక్షిణ పూర్తి కాగానే వారందరూ సర్వాభరణ భూషితులయ్యారు. వారి ఇళ్ళు ధనధాన్యాలతో, గజ తురగ రథాలతో నిండిపోయాయి.',
        'At the first circle, anklets and bells appeared jingling on their feet. At the second, bangles set with the nine gems appeared on their wrists. When the third was complete, they were adorned with every ornament, and their homes filled with wealth and grain, elephants, horses and chariots.',
        ['అమ్మవారి అనుగ్రహం', 'The Goddess’s grace'],
      ),
      p(
        'వ్రతం చేయించిన పురోహితుని వారు దక్షిణ తాంబూలాలతో సత్కరించి, వాయనాలు ఇచ్చి పుచ్చుకున్నారు. బంధుమిత్రులతో కలిసి ప్రసాదం స్వీకరించారు. అందరూ చారుమతిని పొగిడారు. అప్పటి నుండి ప్రతి సంవత్సరం వారు ఈ వ్రతం ఆచరిస్తూ సుఖసౌభాగ్యాలతో జీవించారు.',
        'They honoured the priest who led the vrata with dakshina and tambulam, exchanged vayanams, and shared the prasadam with family and friends. Everyone praised Charumati. From then on they observed the vrata every year and lived in happiness and good fortune.',
      ),
      p(
        '"పార్వతీ, ఈ కథను విన్నవారికి, చదివినవారికి, ఈ వ్రతాన్ని శ్రద్ధగా ఆచరించినవారికి వరలక్ష్మి అనుగ్రహం వల్ల సకల సౌభాగ్యాలు, సంతానం, ఐశ్వర్యం కలుగుతాయి" అని పరమేశ్వరుడు చెప్పాడు.',
        '“Parvati,” said Shiva, “whoever hears or reads this story and observes this vrata with faith will receive every good fortune, children and prosperity by Varalakshmi’s grace.”',
        ['ఫలశ్రుతి', 'The blessing'],
      ),
    ],
  },

  // ───────────────────────────── Satyanarayana Vratam ─────────────────────────────
  {
    id: 'satyanarayana-vrata-katha',
    title: { te: 'శ్రీ సత్యనారాయణ వ్రతకథ', en: 'Sri Satyanarayana Vrata Katha' },
    kind: 'guide',
    deities: ['vishnu'],
    review: true,
    intro: {
      te: 'స్కాందపురాణంలోని రేవాఖండంలో సూత మహర్షి శౌనకాది మునులకు చెప్పిన ఐదు అధ్యాయాల కథ. ప్రతి అధ్యాయం తర్వాత శంఖం ఊది, అక్షతలు చల్లండి. కథ పూర్తయ్యాక ప్రసాదం తప్పక స్వీకరించాలి — ప్రసాదాన్ని నిర్లక్ష్యం చేయరాదనేదే ఈ కథ సారాంశం.',
      en: 'The five-chapter story from the Reva Khanda of the Skanda Purana, told by the sage Suta to Shaunaka and the sages. Blow the conch and offer akshata after each chapter. Always accept the prasadam at the end — the heart of the story is that prasadam must never be neglected.',
    },
    verses: [
      // Chapter 1
      p(
        'ఒకప్పుడు నైమిశారణ్యంలో శౌనకాది మహర్షులు సూత మహర్షిని ఇలా అడిగారు: "మహాత్మా, కలియుగంలో మనుషులు తక్కువ శ్రమతో కోరికలు తీర్చుకుని, కష్టాలు తొలగించుకునే మార్గం ఏది?" సూతుడు ఇలా చెప్పాడు: "ఇదే ప్రశ్న ఒకనాడు నారదుడు శ్రీమహావిష్ణువును అడిగాడు. వారి సంభాషణ చెబుతాను."',
        'Once in the Naimisha forest the sages led by Shaunaka asked Suta: “Great one, in the Kali age, how can people fulfil their wishes and end their sorrows with little effort?” Suta said: “Narada once asked Vishnu this very question. I will tell you what passed between them.”',
        ['ప్రథమ అధ్యాయం', 'Chapter 1'],
      ),
      p(
        'లోకసంచారం చేస్తూ నారదుడు భూలోకానికి వచ్చి, ప్రజలు తమ కర్మల వల్ల రోగాలతో, దారిద్ర్యంతో బాధపడుతుండటం చూసి చలించిపోయాడు. వైకుంఠానికి వెళ్ళి శంఖచక్రగదాధారి అయిన శ్రీహరిని స్తుతించి "స్వామీ, భూలోకంలో జనుల కష్టాలు తీరే సులభమైన ఉపాయం సెలవివ్వండి" అని ప్రార్థించాడు.',
        'Travelling the worlds, Narada came to earth and was moved to see people suffering disease and poverty because of their deeds. He went to Vaikuntha, praised Hari who bears the conch, discus and mace, and prayed: “Lord, tell me an easy way to end the sufferings of the people on earth.”',
      ),
      p(
        'శ్రీహరి ఇలా చెప్పాడు: "నారదా, సత్యనారాయణ వ్రతం అలాంటి ఉత్తమ వ్రతం. ఏ రోజైనా — ముఖ్యంగా పౌర్ణమి, ఏకాదశి, సంక్రాంతి లేదా శుభకార్యాల సమయంలో — సాయంకాలం బంధుమిత్రులతో కలిసి భక్తితో దీనిని ఆచరించాలి. గోధుమ రవ్వ (లేదా బియ్యపు రవ్వ), ఆవుపాలు, నెయ్యి, పంచదార, అరటిపండ్లు సమాన పాళ్ళలో కలిపి సపాద (ఒకటింపావు) కొలతలో ప్రసాదం చేసి నివేదించాలి. కథ విని, ప్రసాదాన్ని అందరికీ పంచి, తాను కూడా స్వీకరించాలి. ఇలా చేసినవారి కోరికలు తీరి, కలియుగంలో సుఖపడతారు."',
        'Hari said: “Narada, the Satyanarayana vrata is such a vrata. On any day — especially a full moon, Ekadashi, Sankranti or an auspicious occasion — perform it in the evening with devotion, with family and friends. Make prasadam of wheat (or rice) rava, cow’s milk, ghee, sugar and bananas in equal parts, in a measure of one and a quarter, and offer it. Hear the story, share the prasadam with everyone and take it yourself. Those who do so will have their wishes fulfilled and live happily in the Kali age.”',
      ),
      // Chapter 2
      p(
        'సూతుడు కొనసాగించాడు: "ఈ వ్రతం మొదట ఎవరు చేశారో చెబుతాను. కాశీ నగరంలో శతానందుడు అనే నిరుపేద బ్రాహ్మణుడు భిక్షాటనతో జీవించేవాడు. అతని దైన్యం చూసి జాలిపడిన శ్రీహరి ఒక వృద్ధ బ్రాహ్మణుని రూపంలో అతని వద్దకు వచ్చి, అతని బాధ విని, సత్యనారాయణ వ్రత విధానం చెప్పి అదృశ్యమయ్యాడు."',
        'Suta continued: “Let me tell you who first performed this vrata. In Kashi lived a very poor brahmin, Shatananda, who lived on alms. Moved by his hardship, Hari came to him as an old brahmin, listened to his troubles, taught him the Satyanarayana vrata and vanished.”',
        ['ద్వితీయ అధ్యాయం', 'Chapter 2'],
      ),
      p(
        'మరుసటి రోజు శతానందునికి భిక్షలో ఎప్పుడూ లేనంత ధనం లభించింది. ఆ ధనంతో అతను బంధుమిత్రులతో కలిసి భక్తితో సత్యనారాయణ వ్రతం ఆచరించాడు. స్వామి అనుగ్రహం వల్ల అతని దారిద్ర్యం తొలగి సకల సంపదలు కలిగాయి. జీవితాంతం ప్రతి నెలా ఈ వ్రతం చేసి చివరికి మోక్షం పొందాడు.',
        'The next day Shatananda received more alms than ever before. With it he performed the Satyanarayana vrata devoutly with his family and friends. By the Lord’s grace his poverty ended and he gained every kind of wealth. He performed the vrata every month for the rest of his life and finally attained liberation.',
      ),
      p(
        'ఒకనాడు శతానందుడు వ్రతం చేస్తుండగా, కట్టెలు అమ్ముకుని జీవించే ఒక కట్టెలవాడు దాహంతో అక్కడికి వచ్చాడు. పూజను చూసి, దాని మహిమ తెలుసుకుని, తాను కూడా ఆచరించాలని సంకల్పించాడు. ఆ రోజు అతని కట్టెలకు రెట్టింపు ధర వచ్చింది. ఆ ధనంతో భక్తితో వ్రతం చేశాడు. అతనికి సంపదలు, సంతానం కలిగి, చివరికి సత్యలోకం చేరాడు.',
        'One day, while Shatananda was performing the vrata, a woodcutter came by, thirsty. Seeing the puja and learning its greatness, he resolved to perform it too. That day his firewood sold for twice the usual price, and with that money he performed the vrata devoutly. He gained wealth and children and finally reached Satyaloka.',
      ),
      // Chapter 3
      p(
        'పూర్వం ఉల్కాముఖుడు అనే సత్యవ్రతుడైన రాజు భార్యతో కలిసి భద్రశీలా నది ఒడ్డున సత్యనారాయణ వ్రతం చేస్తున్నాడు. అప్పుడు సాధువు అనే వర్తకుడు ఓడలో సరకులతో అటుగా వచ్చి, పూజ గురించి అడిగి తెలుసుకున్నాడు. "నాకు సంతానం లేదు. సంతానం కలిగితే ఈ వ్రతం చేస్తాను" అని మొక్కుకుని ఇంటికి వెళ్ళాడు.',
        'Long ago the truthful king Ulkamukha was performing the Satyanarayana vrata with his queen on the banks of the Bhadrashila river. A merchant named Sadhu came by in his ship laden with goods and asked about the puja. “I have no children,” he said. “If I am blessed with a child, I will perform this vrata,” and he went home.',
        ['తృతీయ అధ్యాయం', 'Chapter 3'],
      ),
      p(
        'కొంతకాలానికి సాధువు భార్య లీలావతి గర్భవతియై కళావతి అనే కుమార్తెను కన్నది. లీలావతి మొక్కు గుర్తు చేయగా సాధువు "పెళ్ళి చేసినప్పుడు వ్రతం చేద్దాం" అని వాయిదా వేశాడు. కళావతి పెద్దదయ్యాక శంఖపతి అనే యోగ్యుడైన వర్తక కుమారునితో వివాహం జరిపాడు, కానీ మళ్ళీ వ్రతం మరచిపోయాడు.',
        'In time Sadhu’s wife Lilavati bore a daughter, Kalavati. When Lilavati reminded him of his vow, Sadhu put it off: “We will do it at her wedding.” When Kalavati grew up he married her to a worthy merchant’s son, Shankhapati — and again forgot the vrata.',
      ),
      p(
        'సాధువు అల్లునితో కలిసి వ్యాపారానికి చంద్రకేతు మహారాజు పాలించే రత్నసానుపురానికి వెళ్ళాడు. మొక్కు తీర్చనందుకు సత్యదేవుని ఆగ్రహం కలిగింది. ఆ రాత్రి రాజభవనంలో దొంగతనం చేసిన దొంగలు భటులకు భయపడి ధనాన్ని సాధువు బస చేసిన చోట పడవేసి పారిపోయారు. భటులు మామాఅల్లుళ్ళనే దొంగలనుకుని బంధించగా, రాజు వారిని చెరసాలలో వేయించి వారి ధనమంతా స్వాధీనం చేసుకున్నాడు.',
        'Sadhu went with his son-in-law to trade in Ratnasanupura, ruled by King Chandraketu. Because the vow was unfulfilled, the Lord was displeased. That night thieves who had robbed the palace, fearing the guards, dropped the treasure where Sadhu was staying and fled. The guards took the merchant and his son-in-law for the thieves; the king threw them in prison and seized all their wealth.',
      ),
      p(
        'ఇంటి వద్ద లీలావతి, కళావతి కూడా దొంగల పాలై, సర్వస్వం కోల్పోయి, ఆకలితో అలమటించారు. ఒకనాడు ఆకలితో తిరుగుతున్న కళావతి ఒక ఇంట్లో సత్యనారాయణ వ్రతం జరుగుతుండటం చూసి, కథ విని, ప్రసాదం తీసుకుని ఇంటికి వచ్చింది. తల్లికి జరిగినది చెప్పగా, తమ కష్టాలకు కారణం మొక్కు తీర్చకపోవడమేనని లీలావతి గ్రహించింది. మరుసటి రోజు బంధువులతో కలిసి భక్తితో వ్రతం ఆచరించి, "స్వామీ, నా భర్తను, అల్లుని క్షేమంగా ఇంటికి చేర్చు, మా అపరాధం క్షమించు" అని వేడుకుంది.',
        'At home, Lilavati and Kalavati were also robbed, lost everything and went hungry. One day the hungry Kalavati saw a Satyanarayana vrata in a neighbour’s house, heard the story, received prasadam and came home. When she told her mother, Lilavati realised their troubles came from the broken vow. The next day she performed the vrata with her relatives and prayed: “Lord, bring my husband and son-in-law home safely, and forgive our fault.”',
      ),
      p(
        'ఆమె భక్తికి సంతోషించిన సత్యదేవుడు ఆ రాత్రి చంద్రకేతు మహారాజు కలలో కనిపించి "రాజా, నీవు బంధించిన ఇద్దరూ నిర్దోషులు. రేపే వారిని విడిచిపెట్టి, వారి ధనం తిరిగి ఇవ్వు, లేకపోతే నీకు కీడు తప్పదు" అని ఆజ్ఞాపించాడు. ఉదయమే రాజు వారిని విడిపించి, క్షమాపణ కోరి, వారి ధనానికి రెట్టింపు ఇచ్చి గౌరవంగా పంపాడు.',
        'Pleased by her devotion, the Lord appeared that night in King Chandraketu’s dream: “King, the two you imprisoned are innocent. Release them tomorrow and return their wealth, or harm will come to you.” At dawn the king freed them, begged their pardon, gave them twice their wealth and sent them off with honour.',
      ),
      // Chapter 4
      p(
        'మామాఅల్లుళ్ళు ఓడలో స్వదేశానికి బయలుదేరారు. దారిలో సత్యదేవుడు ఒక సన్యాసి రూపంలో వచ్చి "ఓడలో ఏముంది?" అని అడిగాడు. గర్వంతో సాధువు "ఆకులు, అలములు మాత్రమే" అని అబద్ధం చెప్పాడు. "నీ మాటే నిజమవుతుంది" అని సన్యాసి వెళ్ళిపోయాడు. చూసేసరికి ఓడలోని ధనమంతా నిజంగానే ఆకులు, అలములుగా మారిపోయింది.',
        'The merchant and his son-in-law set sail for home. On the way the Lord came as a sannyasi and asked, “What is in your ship?” Proudly Sadhu lied: “Only leaves and twigs.” “So be it,” said the sannyasi and walked away. When they looked, all the treasure in the ship had truly turned to leaves and twigs.',
        ['చతుర్థ అధ్యాయం', 'Chapter 4'],
      ),
      p(
        'సాధువు కుప్పకూలిపోగా అల్లుడు "ఇది ఆ సన్యాసి మహిమే, ఆయననే శరణు వేడుదాం" అన్నాడు. ఇద్దరూ సన్యాసి వద్దకు పరుగెత్తి కాళ్ళపై పడి క్షమాపణ కోరారు. సత్యదేవుడు "మొక్కు మరచిపోయినందుకే మీకీ కష్టాలు వచ్చాయి" అని గుర్తు చేశాడు. సాధువు పశ్చాత్తాపపడి "ఇంటికి చేరగానే వ్రతం చేస్తాను" అని ప్రమాణం చేయగా, ఓడ మళ్ళీ ధనంతో నిండిపోయింది.',
        'Sadhu collapsed, but his son-in-law said, “This is the sannyasi’s power — let us seek refuge in him.” They ran to him, fell at his feet and begged forgiveness. The Lord reminded them: “Your troubles came because you forgot your vow.” Sadhu repented and swore to perform the vrata as soon as he reached home, and the ship filled with treasure again.',
      ),
      p(
        'ఓడ ఊరి దగ్గరకు చేరగానే సాధువు కబురు పంపాడు. ఆ సమయంలో లీలావతి, కళావతి వ్రతం చేస్తున్నారు. భర్త వచ్చాడన్న ఆనందంలో కళావతి ప్రసాదం తీసుకోకుండానే రేవుకు పరుగెత్తింది. ప్రసాదాన్ని నిర్లక్ష్యం చేసినందుకు, ఆమె కళ్ళముందే శంఖపతితో సహా ఓడ నీటిలో మునిగిపోయింది.',
        'As the ship neared the town, Sadhu sent word home. Lilavati and Kalavati were in the middle of the vrata. Overjoyed that her husband had come, Kalavati ran to the harbour without taking the prasadam. Because she had neglected it, the ship sank before her eyes — with Shankhapati aboard.',
      ),
      p(
        'కళావతి గుండెలు బాదుకుంటూ "భర్తతో పాటే నేనూ ప్రాణాలు విడుస్తాను" అని విలపించింది. సాధువు సత్యదేవుని ప్రార్థించగా ఆకాశవాణి ఇలా పలికింది: "నీ కుమార్తె నా ప్రసాదాన్ని విడిచి వచ్చింది. ఇంటికి వెళ్ళి ప్రసాదం స్వీకరించి వస్తే ఆమె భర్త తిరిగి వస్తాడు." కళావతి వెంటనే ఇంటికి వెళ్ళి భక్తితో ప్రసాదం తీసుకుని తిరిగి వచ్చింది. ఓడ నీటి పైకి తేలి, శంఖపతి క్షేమంగా కనిపించాడు. అందరూ ఆనందంతో ఇంటికి చేరి, సాధువు బంధుమిత్రులతో కలిసి వ్రతం ఆచరించాడు. జీవితాంతం ప్రతి పౌర్ణమికి వ్రతం చేసి సుఖపడ్డాడు.',
        'Kalavati beat her breast and wept, “I will give up my life with my husband.” Sadhu prayed to the Lord, and a voice from the sky said: “Your daughter left my prasadam behind. Let her go home, take it, and her husband will return.” Kalavati went home at once, took the prasadam with devotion and came back. The ship rose from the water with Shankhapati safe. They all went home rejoicing; Sadhu performed the vrata with his family and friends, and did so every full moon for the rest of his happy life.',
      ),
      // Chapter 5
      p(
        'పూర్వం తుంగధ్వజుడు అనే రాజు వేటకు వెళ్ళి అలసిపోయి ఒక చెట్టు కింద విశ్రాంతి తీసుకుంటున్నాడు. దగ్గరలో గోపాలకులు భక్తితో సత్యనారాయణ వ్రతం చేసి, ప్రసాదాన్ని రాజుకు తెచ్చి ఇచ్చారు. "పశువుల కాపరుల ప్రసాదం నేనెందుకు తీసుకోవాలి?" అన్న గర్వంతో రాజు దానిని తాకకుండా, నమస్కరించకుండా వెళ్ళిపోయాడు.',
        'Once King Tungadhwaja, tired from hunting, rested under a tree. Nearby, some cowherds had devoutly performed the Satyanarayana vrata, and they brought him prasadam. Proudly thinking, “Why should I take the prasadam of cowherds?” the king left without touching it or even bowing to it.',
        ['పంచమ అధ్యాయం', 'Chapter 5'],
      ),
      p(
        'రాజ్యానికి చేరేసరికి అతని వంద మంది కుమారులు మరణించారని, ధనం నశించిందని, శత్రువులు దాడి చేస్తున్నారని తెలిసింది. ఇదంతా ప్రసాదాన్ని అవమానించిన ఫలమేనని గ్రహించిన తుంగధ్వజుడు వెంటనే గోపాలకుల వద్దకు తిరిగి వెళ్ళి, వారితో కలిసి భక్తితో వ్రతం ఆచరించి, వినయంగా ప్రసాదం స్వీకరించాడు. సత్యదేవుని కృప వల్ల అతని కుమారులు, సంపదలు తిరిగి లభించాయి. చివరికి అతను సత్యలోకం పొందాడు.',
        'When he reached his kingdom he learned that his hundred sons had died, his wealth was lost and enemies were attacking. Realising this was the fruit of insulting the prasadam, Tungadhwaja hurried back to the cowherds, performed the vrata devoutly with them and humbly accepted the prasadam. By the Lord’s grace his sons and wealth were restored, and in the end he attained Satyaloka.',
      ),
      p(
        'సూతుడు ముగించాడు: "ఈ ఉత్తమ వ్రతాన్ని ఆచరించినవారికి, కథ విన్నవారికి ధనధాన్యాలు, సంతానం, ఆరోగ్యం కలుగుతాయి; బంధితులు విముక్తులవుతారు; భయాలు తొలగుతాయి; కోరికలు తీరుతాయి. చివరికి వారు సత్యలోకం చేరుతారు. సత్యమే నారాయణుడు — సత్యాన్ని పాటించడమే ఈ వ్రతానికి ప్రాణం."',
        'Suta concluded: “Those who perform this excellent vrata or hear its story gain wealth, children and health; the imprisoned are freed, fears vanish and wishes are fulfilled. In the end they reach Satyaloka. Truth itself is Narayana — living by truth is the life of this vrata.”',
        ['ఫలశ్రుతి', 'The blessing'],
      ),
      p(
        'ఇతి శ్రీ స్కాందపురాణే రేవాఖండే శ్రీ సత్యనారాయణ వ్రతకథా సంపూర్ణా ॥\nశ్రీ సత్యనారాయణ స్వామినే నమః ॥',
        'Thus ends the Sri Satyanarayana Vrata Katha from the Reva Khanda of the Skanda Purana. Salutations to Lord Satyanarayana.',
      ),
    ],
  },
];
