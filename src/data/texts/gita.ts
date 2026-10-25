import type { GitaChapter, SacredText, Verse } from '../types';

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
  { n: 13, verses: 34, name: { te: 'క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగం', en: 'The Field and its Knower' }, summary: { te: 'శరీరం క్షేత్రం, దానిని తెలుసుకునే ఆత్మ క్షేత్రజ్ఞుడు. ఈ భేదాన్ని తెలుసుకోవడమే జ్ఞానం.', en: 'The body is the field; the Self is its knower. Knowing this difference is true knowledge.' } },
  { n: 14, verses: 27, name: { te: 'గుణత్రయ విభాగ యోగం', en: 'The Three Gunas' }, summary: { te: 'సత్త్వ, రజస్, తమస్ — మూడు గుణాలు మనిషిని బంధిస్తాయి. వాటిని దాటినవాడు ముక్తుడు.', en: 'Sattva, rajas and tamas bind the soul. One who rises above all three is free.' } },
  { n: 15, verses: 20, name: { te: 'పురుషోత్తమ యోగం', en: 'The Supreme Person' }, summary: { te: 'వేర్లు పైకి, కొమ్మలు కిందకు ఉన్న అశ్వత్థ వృక్షం — సంసారానికి ప్రతీక.', en: 'The eternal ashvattha tree with roots above and branches below — an image of worldly existence — and the Supreme beyond it.' } },
  { n: 16, verses: 24, name: { te: 'దైవాసుర సంపద్విభాగ యోగం', en: 'Divine and Demonic Natures' }, summary: { te: 'కామం, క్రోధం, లోభం — ఈ మూడు నరక ద్వారాలు. వీటిని విడిచిపెట్టాలి.', en: 'Desire, anger and greed are the three gates to ruin — abandon them.' } },
  { n: 17, verses: 28, name: { te: 'శ్రద్ధాత్రయ విభాగ యోగం', en: 'The Three Kinds of Faith' }, summary: { te: 'మనిషి ఎలాంటి శ్రద్ధ కలవాడో అలాంటివాడే అవుతాడు. ఆహారం, తపస్సు, దానం మూడు రకాలు.', en: 'A person is made of their faith. Food, austerity and charity each take three forms.' } },
  { n: 18, verses: 78, name: { te: 'మోక్ష సన్న్యాస యోగం', en: 'Liberation through Renunciation' }, summary: { te: 'అన్ని ధర్మాలను విడిచి నన్నే శరణు పొందు — గీత సారాంశం. అర్జునుని సందేహాలు తొలగుతాయి.', en: 'Surrender all to Me — the Gita’s final teaching. Arjuna’s doubts vanish and he rises to act.' } },
];

const V = (ref: string, te: string, en: string): Verse => ({ ref, te, en });

export const GITA_VERSES: Record<number, Verse[]> = {
  1: [V('1.1', 'ధర్మక్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః ।\nమామకాః పాండవాశ్చైవ కిమకుర్వత సంజయ ॥', 'Dhritarashtra asked: O Sanjaya, gathered on the sacred field of Kurukshetra, eager for battle, what did my sons and the sons of Pandu do?')],
  2: [
    V('2.7', 'కార్పణ్యదోషోపహతస్వభావః పృచ్ఛామి త్వాం ధర్మసమ్మూఢచేతాః ।\nయచ్ఛ్రేయః స్యాన్నిశ్చితం బ్రూహి తన్మే శిష్యస్తేఽహం శాధి మాం త్వాం ప్రపన్నమ్ ॥', 'Overcome by weakness and confused about my duty, I ask you: tell me for certain what is best. I am your disciple — I surrender to you, teach me.'),
    V('2.13', 'దేహినోఽస్మిన్ యథా దేహే కౌమారం యౌవనం జరా ।\nతథా దేహాంతరప్రాప్తిర్ధీరస్తత్ర న ముహ్యతి ॥', 'Just as the soul passes through childhood, youth and old age in this body, so it passes into another body. The wise are not deluded by this.'),
    V('2.20', 'న జాయతే మ్రియతే వా కదాచిన్ నాయం భూత్వా భవితా వా న భూయః ।\nఅజో నిత్యః శాశ్వతోఽయం పురాణో న హన్యతే హన్యమానే శరీరే ॥', 'The Self is never born and never dies. Unborn, eternal, everlasting and ancient, it is not slain when the body is slain.'),
    V('2.22', 'వాసాంసి జీర్ణాని యథా విహాయ నవాని గృహ్ణాతి నరోఽపరాణి ।\nతథా శరీరాణి విహాయ జీర్ణాన్యన్యాని సంయాతి నవాని దేహీ ॥', 'As a person discards worn-out clothes and puts on new ones, so the soul casts off worn-out bodies and enters new ones.'),
    V('2.23', 'నైనం ఛిందంతి శస్త్రాణి నైనం దహతి పావకః ।\nన చైనం క్లేదయంత్యాపో న శోషయతి మారుతః ॥', 'Weapons cannot cut it, fire cannot burn it, water cannot wet it, wind cannot dry it.'),
    V('2.47', 'కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన ।\nమా కర్మఫలహేతుర్భూర్మా తే సంగోఽస్త్వకర్మణి ॥', 'You have a right to your actions, never to their fruits. Do not act for the sake of results, and do not be attached to inaction.'),
    V('2.48', 'యోగస్థః కురు కర్మాణి సంగం త్యక్త్వా ధనంజయ ।\nసిద్ధ్యసిద్ధ్యోః సమో భూత్వా సమత్వం యోగ ఉచ్యతే ॥', 'Established in yoga, act without attachment, equal in success and failure. This evenness of mind is called yoga.'),
  ],
  3: [
    V('3.21', 'యద్యదాచరతి శ్రేష్ఠస్తత్తదేవేతరో జనః ।\nస యత్ప్రమాణం కురుతే లోకస్తదనువర్తతే ॥', 'Whatever a great person does, others follow. Whatever standard they set, the world follows.'),
    V('3.35', 'శ్రేయాన్ స్వధర్మో విగుణః పరధర్మాత్స్వనుష్ఠితాత్ ।\nస్వధర్మే నిధనం శ్రేయః పరధర్మో భయావహః ॥', 'Better is one’s own duty, even imperfectly done, than another’s duty done well. Another’s path is fraught with fear.'),
  ],
  4: [
    V('4.7', 'యదా యదా హి ధర్మస్య గ్లానిర్భవతి భారత ।\nఅభ్యుత్థానమధర్మస్య తదాత్మానం సృజామ్యహమ్ ॥', 'Whenever righteousness declines and unrighteousness rises, O Bharata, I manifest myself.'),
    V('4.8', 'పరిత్రాణాయ సాధూనాం వినాశాయ చ దుష్కృతామ్ ।\nధర్మసంస్థాపనార్థాయ సంభవామి యుగే యుగే ॥', 'To protect the good, to destroy the wicked and to re-establish dharma, I am born in every age.'),
    V('4.24', 'బ్రహ్మార్పణం బ్రహ్మ హవిర్బ్రహ్మాగ్నౌ బ్రహ్మణా హుతమ్ ।\nబ్రహ్మైవ తేన గంతవ్యం బ్రహ్మకర్మసమాధినా ॥', 'The offering is Brahman, the oblation is Brahman, offered by Brahman into the fire of Brahman. One who sees Brahman in all action reaches Brahman.'),
    V('4.38', 'న హి జ్ఞానేన సదృశం పవిత్రమిహ విద్యతే ।\nతత్స్వయం యోగసంసిద్ధః కాలేనాత్మని విందతి ॥', 'Nothing in this world purifies like knowledge. One perfected in yoga finds it within, in time.'),
  ],
  5: [
    V('5.10', 'బ్రహ్మణ్యాధాయ కర్మాణి సంగం త్యక్త్వా కరోతి యః ।\nలిప్యతే న స పాపేన పద్మపత్రమివాంభసా ॥', 'One who acts offering all to Brahman, giving up attachment, is untouched by sin, as a lotus leaf by water.'),
    V('5.18', 'విద్యావినయసంపన్నే బ్రాహ్మణే గవి హస్తిని ।\nశుని చైవ శ్వపాకే చ పండితాః సమదర్శినః ॥', 'The wise see with an equal eye a learned and humble scholar, a cow, an elephant, a dog and an outcaste.'),
  ],
  6: [
    V('6.5', 'ఉద్ధరేదాత్మనాత్మానం నాత్మానమవసాదయేత్ ।\nఆత్మైవ హ్యాత్మనో బంధురాత్మైవ రిపురాత్మనః ॥', 'Lift yourself by your own self; do not let yourself sink. You alone are your friend, and you alone are your enemy.'),
    V('6.17', 'యుక్తాహారవిహారస్య యుక్తచేష్టస్య కర్మసు ।\nయుక్తస్వప్నావబోధస్య యోగో భవతి దుఃఖహా ॥', 'Yoga destroys sorrow for one who is moderate in food and recreation, balanced in work, and regular in sleep and waking.'),
    V('6.35', 'అసంశయం మహాబాహో మనో దుర్నిగ్రహం చలమ్ ।\nఅభ్యాసేన తు కౌంతేయ వైరాగ్యేణ చ గృహ్యతే ॥', 'Without doubt the mind is restless and hard to control — but it is mastered by practice and detachment.'),
  ],
  7: [
    V('7.16', 'చతుర్విధా భజంతే మాం జనాః సుకృతినోఽర్జున ।\nఆర్తో జిజ్ఞాసురర్థార్థీ జ్ఞానీ చ భరతర్షభ ॥', 'Four kinds of virtuous people worship me: the distressed, the seeker of knowledge, the seeker of wealth, and the wise.'),
    V('7.19', 'బహూనాం జన్మనామంతే జ్ఞానవాన్మాం ప్రపద్యతే ।\nవాసుదేవః సర్వమితి స మహాత్మా సుదుర్లభః ॥', 'After many births the wise one surrenders to me, knowing “Vasudeva is all.” Such a great soul is very rare.'),
  ],
  8: [
    V('8.5', 'అంతకాలే చ మామేవ స్మరన్ముక్త్వా కలేవరమ్ ।\nయః ప్రయాతి స మద్భావం యాతి నాస్త్యత్ర సంశయః ॥', 'Whoever leaves the body remembering me alone at the end reaches my being — of this there is no doubt.'),
    V('8.7', 'తస్మాత్సర్వేషు కాలేషు మామనుస్మర యుధ్య చ ।\nమయ్యర్పితమనోబుద్ధిర్మామేవైష్యస్యసంశయః ॥', 'Therefore remember me at all times, and do your duty. With mind and intellect offered to me, you will surely come to me.'),
  ],
  9: [
    V('9.22', 'అనన్యాశ్చింతయంతో మాం యే జనాః పర్యుపాసతే ।\nతేషాం నిత్యాభియుక్తానాం యోగక్షేమం వహామ్యహమ్ ॥', 'For those who worship me with undivided devotion, ever united with me, I bring what they lack and preserve what they have.'),
    V('9.26', 'పత్రం పుష్పం ఫలం తోయం యో మే భక్త్యా ప్రయచ్ఛతి ।\nతదహం భక్త్యుపహృతమశ్నామి ప్రయతాత్మనః ॥', 'Whoever offers me with love a leaf, a flower, a fruit or water — that offering of love from a pure heart I accept.'),
    V('9.34', 'మన్మనా భవ మద్భక్తో మద్యాజీ మాం నమస్కురు ।\nమామేవైష్యసి యుక్త్వైవమాత్మానం మత్పరాయణః ॥', 'Fix your mind on me, be devoted to me, worship me, bow to me. Thus united with me, you will come to me.'),
  ],
  10: [
    V('10.20', 'అహమాత్మా గుడాకేశ సర్వభూతాశయస్థితః ।\nఅహమాదిశ్చ మధ్యం చ భూతానామంత ఏవ చ ॥', 'I am the Self seated in the hearts of all beings. I am their beginning, middle and end.'),
    V('10.41', 'యద్యద్విభూతిమత్సత్త్వం శ్రీమదూర్జితమేవ వా ।\nతత్తదేవావగచ్ఛ త్వం మమ తేజోంశసంభవమ్ ॥', 'Whatever is glorious, prosperous or mighty — know that it springs from a spark of my splendour.'),
  ],
  11: [
    V('11.12', 'దివి సూర్యసహస్రస్య భవేద్యుగపదుత్థితా ।\nయది భాః సదృశీ సా స్యాద్భాసస్తస్య మహాత్మనః ॥', 'If a thousand suns were to rise at once in the sky, that light might resemble the splendour of that great Being.'),
    V('11.32', 'కాలోఽస్మి లోకక్షయకృత్ప్రవృద్ధో లోకాన్సమాహర్తుమిహ ప్రవృత్తః ।\nఋతేఽపి త్వాం న భవిష్యంతి సర్వే యేఽవస్థితాః ప్రత్యనీకేషు యోధాః ॥', 'I am Time, the mighty destroyer of worlds, here to consume them. Even without you, the warriors arrayed on both sides will not survive.'),
  ],
  12: [
    V('12.8', 'మయ్యేవ మన ఆధత్స్వ మయి బుద్ధిం నివేశయ ।\nనివసిష్యసి మయ్యేవ అత ఊర్ధ్వం న సంశయః ॥', 'Fix your mind on me alone, rest your intellect in me — you will surely dwell in me thereafter.'),
    V('12.13', 'అద్వేష్టా సర్వభూతానాం మైత్రః కరుణ ఏవ చ ।\nనిర్మమో నిరహంకారః సమదుఃఖసుఖః క్షమీ ॥', 'One who hates no being, who is friendly and compassionate, free from possessiveness and ego, equal in pain and pleasure, and forgiving — is dear to me.'),
  ],
  13: [V('13.2', 'క్షేత్రజ్ఞం చాపి మాం విద్ధి సర్వక్షేత్రేషు భారత ।\nక్షేత్రక్షేత్రజ్ఞయోర్జ్ఞానం యత్తజ్జ్ఞానం మతం మమ ॥', 'Know me as the knower of the field in all fields. Knowledge of the field and its knower — that, in my view, is true knowledge.')],
  14: [V('14.5', 'సత్త్వం రజస్తమ ఇతి గుణాః ప్రకృతిసంభవాః ।\nనిబధ్నంతి మహాబాహో దేహే దేహినమవ్యయమ్ ॥', 'Sattva, rajas and tamas — the three qualities born of nature — bind the imperishable soul to the body.')],
  15: [V('15.1', 'ఊర్ధ్వమూలమధఃశాఖమశ్వత్థం ప్రాహురవ్యయమ్ ।\nఛందాంసి యస్య పర్ణాని యస్తం వేద స వేదవిత్ ॥', 'They speak of an eternal ashvattha tree with roots above and branches below, whose leaves are the Vedic hymns. One who knows it knows the Vedas.')],
  16: [V('16.21', 'త్రివిధం నరకస్యేదం ద్వారం నాశనమాత్మనః ।\nకామః క్రోధస్తథా లోభస్తస్మాదేతత్త్రయం త్యజేత్ ॥', 'Desire, anger and greed — these three are the gates of hell that ruin the soul. Therefore abandon all three.')],
  17: [
    V('17.3', 'సత్త్వానురూపా సర్వస్య శ్రద్ధా భవతి భారత ।\nశ్రద్ధామయోఽయం పురుషో యో యచ్ఛ్రద్ధః స ఏవ సః ॥', 'Everyone’s faith follows their nature. A person is made of faith — as their faith is, so are they.'),
    V('17.15', 'అనుద్వేగకరం వాక్యం సత్యం ప్రియహితం చ యత్ ।\nస్వాధ్యాయాభ్యసనం చైవ వాఙ్మయం తప ఉచ్యతే ॥', 'Speech that causes no distress, that is truthful, pleasant and beneficial, along with regular study of scripture — this is austerity of speech.'),
  ],
  18: [
    V('18.66', 'సర్వధర్మాన్ పరిత్యజ్య మామేకం శరణం వ్రజ ।\nఅహం త్వా సర్వపాపేభ్యో మోక్షయిష్యామి మా శుచః ॥', 'Abandon all dharmas and take refuge in me alone. I will free you from all sins — do not grieve.'),
    V('18.73', 'నష్టో మోహః స్మృతిర్లబ్ధా త్వత్ప్రసాదాన్మయాచ్యుత ।\nస్థితోఽస్మి గతసందేహః కరిష్యే వచనం తవ ॥', 'Arjuna said: My delusion is gone; by your grace I have regained my memory. I stand firm, free of doubt. I will do as you say.'),
    V('18.78', 'యత్ర యోగేశ్వరః కృష్ణో యత్ర పార్థో ధనుర్ధరః ।\nతత్ర శ్రీర్విజయో భూతిర్ధ్రువా నీతిర్మతిర్మమ ॥', 'Wherever there is Krishna, the Lord of yoga, and Arjuna, the archer — there will surely be prosperity, victory, well-being and righteousness. This is my conviction.'),
  ],
};

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
    intro: c.summary,
    verses: GITA_VERSES[c.n] ?? [],
  })),
];
