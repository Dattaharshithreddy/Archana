import type { SacredText, Verse } from '../types';

const MM_REFRAIN = 'జయ జయ హే మహిషాసురమర్దిని రమ్యకపర్దిని శైలసుతే ॥';

const mm = (lines: string, en: string): Verse => ({ te: `${lines}\n${MM_REFRAIN}`, en });

/** The forms of the Goddess from Devi Mahatmyam chapter 5 */
const YA_DEVI_FORMS: [string, string][] = [
  ['చేతనేత్యభిధీయతే', 'is called consciousness'],
  ['బుద్ధిరూపేణ సంస్థితా', 'dwells as intelligence'],
  ['నిద్రారూపేణ సంస్థితా', 'dwells as sleep'],
  ['క్షుధారూపేణ సంస్థితా', 'dwells as hunger'],
  ['ఛాయారూపేణ సంస్థితా', 'dwells as shadow (reflection)'],
  ['శక్తిరూపేణ సంస్థితా', 'dwells as power'],
  ['తృష్ణారూపేణ సంస్థితా', 'dwells as thirst (longing)'],
  ['క్షాంతిరూపేణ సంస్థితా', 'dwells as forbearance'],
  ['జాతిరూపేణ సంస్థితా', 'dwells as one’s nature (birth)'],
  ['లజ్జారూపేణ సంస్థితా', 'dwells as modesty'],
  ['శాంతిరూపేణ సంస్థితా', 'dwells as peace'],
  ['శ్రద్ధారూపేణ సంస్థితా', 'dwells as faith'],
  ['కాంతిరూపేణ సంస్థితా', 'dwells as beauty and radiance'],
  ['లక్ష్మీరూపేణ సంస్థితా', 'dwells as prosperity'],
  ['వృత్తిరూపేణ సంస్థితా', 'dwells as activity (livelihood)'],
  ['స్మృతిరూపేణ సంస్థితా', 'dwells as memory'],
  ['దయారూపేణ సంస్థితా', 'dwells as compassion'],
  ['తుష్టిరూపేణ సంస్థితా', 'dwells as contentment'],
  ['మాతృరూపేణ సంస్థితా', 'dwells as the Mother'],
  ['భ్రాంతిరూపేణ సంస్థితా', 'dwells as illusion'],
];

export const DEVI_COMPLETE: SacredText[] = [
  {
    id: 'ya-devi-sarvabhuteshu',
    title: { te: 'యా దేవీ సర్వభూతేషు', en: 'Ya Devi Sarvabhuteshu' },
    kind: 'stotram',
    deities: ['durga'],
    source: 'Devi Mahatmyam, chapter 5 (Aparajita Stuti)',
    review: true,
    intro: {
      te: 'అన్ని ప్రాణులలో వివిధ రూపాలుగా ఉన్న అమ్మవారికి నమస్కారం — దేవీ మాహాత్మ్యంలోని పూర్తి స్తుతి.',
      en: 'Salutations to the Goddess who dwells in all beings in many forms — the complete hymn from Devi Mahatmyam.',
    },
    verses: [
      { te: 'నమో దేవ్యై మహాదేవ్యై శివాయై సతతం నమః ।\nనమః ప్రకృత్యై భద్రాయై నియతాః ప్రణతాః స్మ తామ్ ॥', en: 'Salutations to the Goddess, the Great Goddess, the auspicious one, always. Salutations to Nature, the kind one; with discipline we bow to her.' },
      { te: 'యా దేవీ సర్వభూతేషు విష్ణుమాయేతి శబ్దితా ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To the Goddess who in all beings is called Vishnu’s Maya — salutations to her, salutations to her, salutations again and again.' },
      ...YA_DEVI_FORMS.map<Verse>(([form, en]) => ({
        te: `యా దేవీ సర్వభూతేషు ${form} ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥`,
        en: `To the Goddess who in all beings ${en} — salutations to her, again and again.`,
      })),
      { te: 'ఇంద్రియాణామధిష్ఠాత్రీ భూతానాం చాఖిలేషు యా ।\nభూతేషు సతతం తస్యై వ్యాప్తిదేవ్యై నమో నమః ॥', en: 'To the Goddess who presides over the senses of all beings and pervades them always — salutations again and again.' },
      { te: 'చితిరూపేణ యా కృత్స్నమేతద్వ్యాప్య స్థితా జగత్ ।\nనమస్తస్యై నమస్తస్యై నమస్తస్యై నమో నమః ॥', en: 'To her who, as pure consciousness, pervades this entire world — salutations to her, again and again.' },
    ],
  },
  {
    id: 'mahishasura-mardini',
    title: { te: 'మహిషాసురమర్దిని స్తోత్రం', en: 'Mahishasura Mardini Stotram' },
    kind: 'stotram',
    deities: ['durga'],
    review: true,
    source: 'Traditionally attributed to Adi Shankaracharya',
    intro: {
      te: 'దసరా నవరాత్రుల్లో పాడే "అయిగిరి నందిని" — పూర్తి 21 శ్లోకాలు.',
      en: '“Aigiri Nandini”, sung during Dasara Navaratri — all 21 verses.',
    },
    verses: [
      mm('అయి గిరినందిని నందితమేదిని విశ్వవినోదిని నందినుతే\nగిరివరవింధ్యశిరోఽధినివాసిని విష్ణువిలాసిని జిష్ణునుతే ।\nభగవతి హే శితికంఠకుటుంబిని భూరికుటుంబిని భూరికృతే', 'Daughter of the mountain, who gladdens the earth and delights the universe, praised by Nandi, dwelling on the Vindhya peaks, Vishnu’s joy, praised by Indra; Goddess of the blue-throated Shiva’s family, mother of a vast family — victory to you, slayer of Mahisha, with lovely braided hair, daughter of the mountain!'),
      mm('సురవరవర్షిణి దుర్ధరధర్షిణి దుర్ముఖమర్షిణి హర్షరతే\nత్రిభువనపోషిణి శంకరతోషిణి కిల్బిషమోషిణి ఘోషరతే ।\nదనుజనిరోషిణి దితిసుతరోషిణి దుర్మదశోషిణి సింధుసుతే', 'You shower boons on the gods, overpower the unconquerable, endure the foul-mouthed, delight in joy; you nourish the three worlds, please Shiva, wash away sin; you rage against the demons and dry up their arrogance.'),
      mm('అయి జగదంబ మదంబ కదంబవనప్రియవాసిని హాసరతే\nశిఖరిశిరోమణి తుంగహిమాలయ శృంగనిజాలయ మధ్యగతే ।\nమధుమధురే మధుకైటభగంజిని కైటభభంజిని రాసరతే', 'Mother of the world, my mother, who loves to dwell in the kadamba forest and delights in laughter; whose home is on the lofty Himalayan peaks; sweet as honey, conqueror of Madhu and Kaitabha, who delights in the dance.'),
      mm('అయి శతఖండ విఖండితరుండ వితుండితశుండ గజాధిపతే\nరిపుగజగండ విదారణచండ పరాక్రమశుండ మృగాధిపతే ।\nనిజభుజదండ నిపాతితఖండ విపాతితముండ భటాధిపతే', 'You cut the enemies’ bodies into a hundred pieces and severed the trunks of their elephants; your lion tears apart the temples of the enemy elephants; with your own arms you struck down Chanda and Munda and their warriors.'),
      mm('అయి రణదుర్మద శత్రువధోదిత దుర్ధరనిర్జర శక్తిభృతే\nచతురవిచార ధురీణ మహాశివ దూతకృత ప్రమథాధిపతే ।\nదురితదురీహ దురాశయ దుర్మతి దానవదూత కృతాంతమతే', 'You hold the invincible power that rose to slay enemies mad with battle; you made the wise Shiva, Lord of the Pramathas, your messenger; you are death to the evil-minded demons and their envoys.'),
      mm('అయి శరణాగత వైరివధూవర వీరవరాభయదాయకరే\nత్రిభువనమస్తక శూలవిరోధి శిరోధికృతామల శూలకరే ।\nదుమిదుమితామర దుందుభినాద మహోముఖరీకృత దిఙ్నికరే', 'You give fearlessness even to the wives of enemy heroes who seek refuge; your pure trident is raised against those who troubled the three worlds; the directions resound with the gods’ drums — dumi dumi.'),
      mm('అయి నిజహుంకృతి మాత్రనిరాకృత ధూమ్రవిలోచన ధూమ్రశతే\nసమరవిశోషిత శోణితబీజ సముద్భవశోణిత బీజలతే ।\nశివశివ శుంభనిశుంభ మహాహవ తర్పితభూత పిశాచరతే', 'With just your roar you turned Dhumralochana to smoke; in battle you dried up Raktabija and the demons born of his blood; in the great war with Shumbha and Nishumbha you satisfied the spirits of the battlefield.'),
      mm('ధనురనుషంగ రణక్షణసంగ పరిస్ఫురదంగ నటత్కటకే\nకనకపిశంగ పృషత్కనిషంగ రసద్భటశృంగ హతావటుకే ।\nకృతచతురంగ బలక్షితిరంగ ఘటద్బహురంగ రటద్బటుకే', 'Bow in hand in the moment of battle, your limbs shine and your bracelets dance; with golden arrows from your quiver you strike down roaring warriors; on the battlefield of the four-fold army, many-coloured heroes fall.'),
      mm('సురలలనా తతథేయి తథేయి కృతాభినయోదర నృత్యరతే\nకృత కుకుథః కుకుథో గడదాదికతాల కుతూహల గానరతే ।\nధుధుకుట ధుక్కుట ధింధిమిత ధ్వని ధీర మృదంగ నినాదరతే', 'You delight in the dance of the celestial women — tata theyi, tata theyi — in the joyous music of rhythms, and in the deep sound of the mridanga — dhudhukuta dhukkuta dhindhimi.'),
      mm('జయ జయ జప్య జయే జయ శబ్ద పరస్తుతి తత్పర విశ్వనుతే\nఝణఝణ ఝింఝిమి ఝింకృత నూపుర శింజిత మోహిత భూతపతే ।\nనటిత నటార్ధ నటీ నట నాయక నాటిత నాట్య సుగానరతే', 'Victory, victory to you who are worthy of prayer, praised by the world with cries of “Jaya!”; the jingling of your anklets — jhana jhana — enchants Shiva; you delight in dance and sweet song.'),
      mm('అయి సుమనఃసుమనఃసుమనః సుమనఃసుమనోహరకాంతియుతే\nశ్రితరజనీరజనీరజనీ రజనీరజనీకర వక్త్రవృతే ।\nసునయనవిభ్రమర భ్రమర భ్రమర భ్రమర భ్రమరాధిపతే', 'You shine with the lovely beauty of flowers and gentle minds; your face is bright as the moon of the night; your beautiful eyes dart like bees, O queen of the bees.'),
      mm('సహితమహాహవ మల్లమతల్లిక మల్లితరల్లక మల్లరతే\nవిరచితవల్లిక పల్లికమల్లిక ఝిల్లికభిల్లిక వర్గవృతే ।\nశితకృతఫుల్ల సముల్లసితారుణ తల్లజపల్లవ సల్లలితే', 'In great battle you are the best of warriors, surrounded by tribal maidens adorned with creepers and jasmine; you are graceful as fresh red blossoming leaves.'),
      mm('అవిరలగండ గలన్మదమేదుర మత్తమతంగజ రాజపతే\nత్రిభువనభూషణ భూతకళానిధి రూపపయోనిధి రాజసుతే ।\nఅయి సుదతీజన లాలసమానస మోహన మన్మథరాజసుతే', 'Your gait is like a royal elephant in rut; you are the ornament of the three worlds, treasure of the arts, ocean of beauty, the king’s daughter, who enchants even the hearts of lovely women.'),
      mm('కమలదళామల కోమలకాంతి కలాకలితామల భాలలతే\nసకలవిలాస కళానిలయక్రమ కేళిచలత్కల హంసకులే ।\nఅలికులసంకుల కువలయమండల మౌళిమిలద్బకులాలికులే', 'Your forehead is pure and soft as a lotus petal; you are the home of every art and grace, moving like a swan; bees swarm around the lilies and bakula flowers in your hair.'),
      mm('కరమురళీరవ వీజితకూజిత లజ్జితకోకిల మంజుమతే\nమిలితపులింద మనోహరగుంజిత రంజితశైల నికుంజగతే ।\nనిజగణభూత మహాశబరీగణ సద్గుణసంభృత కేళితలే', 'The sound of the flute in your hand puts the cuckoo to shame; you roam the mountain groves alive with the songs of hunters, playing with your companions, the noble Shabari women.'),
      mm('కటితటపీత దుకూలవిచిత్ర మయూఖతిరస్కృత చంద్రరుచే\nప్రణతసురాసుర మౌళిమణిస్ఫుర దంశులసన్నఖ చంద్రరుచే ।\nజితకనకాచల మౌళిమదోర్జిత నిర్భరకుంజర కుంభకుచే', 'The yellow silk at your waist outshines the moon; your toenails gleam like moons, reflecting the jewels on the crowns of the gods and demons bowing at your feet.'),
      mm('విజితసహస్రకరైక సహస్రకరైక సహస్రకరైకనుతే\nకృతసురతారక సంగరతారక సంగరతారక సూనుసుతే ।\nసురథసమాధి సమానసమాధి సమాధిసమాధి సుజాతరతే', 'You are praised by the thousand-rayed Sun; you gave birth to Subrahmanya, who won the war against Taraka for the gods; you delight in the deep meditation of King Suratha and the merchant Samadhi.'),
      mm('పదకమలం కరుణానిలయే వరివస్యతి యోఽనుదినం సుశివే\nఅయి కమలే కమలానిలయే కమలానిలయః స కథం న భవేత్ ।\nతవ పదమేవ పరంపదమిత్యనుశీలయతో మమ కిం న శివే', 'O home of compassion, auspicious one — how can one who serves your lotus feet every day not become a home of Lakshmi? For me, who meditates that your feet alone are the highest goal, what is impossible?'),
      mm('కనకలసత్కలసింధుజలైరనుషించతి తే గుణరంగభువం\nభజతి స కిం ను శచీకుచకుంభ తటీపరిరంభ సుఖానుభవమ్ ।\nతవ చరణం శరణం కరవాణి నతామరవాణి నివాసి శివమ్', 'One who bathes your courtyard with golden pots of holy water enjoys the joys of heaven. I take refuge at your feet, the auspicious home where the gods and Saraswati bow.'),
      mm('తవ విమలేందుకులం వదనేందుమలం సకలం నను కూలయతే\nకిము పురుహూత పురీందుముఖీ సుముఖీభిరసౌ విముఖీక్రియతే ।\nమమ తు మతం శివనామధనే భవతీ కృపయా కిముత క్రియతే', 'One who sees your pure moon-like face — would the beauties of Indra’s city turn him away? But my wish, O treasure of Shiva’s name, is only for your grace.'),
      mm('అయి మయి దీనదయాళుతయా కృపయైవ త్వయా భవితవ్యముమే\nఅయి జగతో జననీ కృపయాసి యథాసి తథానుమితాసిరతే ।\nయదుచితమత్ర భవత్యురరీ కురుతాదురుతాపమపాకురుతే', 'O Uma, kind to the helpless — be gracious to me. Mother of the world, as you are compassionate, so I know you to be. Do what is right for me, and take away my great suffering.'),
    ],
  },
];
