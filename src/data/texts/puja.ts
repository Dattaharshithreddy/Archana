import type { SacredText, Verse } from '../types';
import { DEITIES } from '../deities';

const ACHAMANA_NAMES = [
  'గోవిందాయ', 'విష్ణవే', 'మధుసూదనాయ', 'త్రివిక్రమాయ', 'వామనాయ', 'శ్రీధరాయ', 'హృషీకేశాయ',
  'పద్మనాభాయ', 'దామోదరాయ', 'సంకర్షణాయ', 'వాసుదేవాయ', 'ప్రద్యుమ్నాయ', 'అనిరుద్ధాయ',
  'పురుషోత్తమాయ', 'అధోక్షజాయ', 'నారసింహాయ', 'అచ్యుతాయ', 'జనార్దనాయ', 'ఉపేంద్రాయ', 'హరయే', 'శ్రీకృష్ణాయ',
];

/** The 16 offerings. `t` is the Telugu ending appended after the deity name. */
const UPACHARAS: { name: { te: string; en: string }; t: string; step: { te: string; en: string } }[] = [
  { name: { te: 'ధ్యానం', en: 'Dhyanam — meditation' }, t: 'ధ్యాయామి । ధ్యానం సమర్పయామి ॥', step: { te: 'కళ్ళు మూసుకుని దేవుని రూపాన్ని మనసులో ధ్యానించండి.', en: 'Close your eyes and picture the deity’s form in your heart.' } },
  { name: { te: 'ఆవాహనం', en: 'Avahanam — invocation' }, t: 'ఆవాహయామి ॥', step: { te: 'పుష్పం లేదా అక్షతలు విగ్రహం వద్ద ఉంచి స్వామిని ఆహ్వానించండి.', en: 'Place a flower or akshata before the image and invite the deity.' } },
  { name: { te: 'ఆసనం', en: 'Asanam — seat' }, t: 'ఆసనం సమర్పయామి ॥', step: { te: 'అక్షతలు సమర్పించి ఆసనం ఇవ్వండి.', en: 'Offer akshata as a seat.' } },
  { name: { te: 'పాద్యం', en: 'Padyam — washing the feet' }, t: 'పాదయోః పాద్యం సమర్పయామి ॥', step: { te: 'ఉద్ధరిణితో కొద్దిగా నీరు పాదాల వద్ద సమర్పించండి.', en: 'Offer a spoon of water at the feet.' } },
  { name: { te: 'అర్ఘ్యం', en: 'Arghyam — water for hands' }, t: 'హస్తయోః అర్ఘ్యం సమర్పయామి ॥', step: { te: 'చేతులకు నీరు సమర్పించండి.', en: 'Offer water for the hands.' } },
  { name: { te: 'ఆచమనీయం', en: 'Achamaniyam — sipping water' }, t: 'ముఖే ఆచమనీయం సమర్పయామి ॥', step: { te: 'తాగడానికి నీరు సమర్పించండి.', en: 'Offer water to sip.' } },
  { name: { te: 'స్నానం', en: 'Snanam — bath' }, t: 'శుద్ధోదక స్నానం సమర్పయామి ॥', step: { te: 'నీటితో (వీలైతే పంచామృతంతో) అభిషేకం చేయండి లేదా నీరు చల్లండి.', en: 'Bathe the deity with water (or panchamrutam), or sprinkle water.' } },
  { name: { te: 'వస్త్రం', en: 'Vastram — clothes' }, t: 'వస్త్రయుగ్మం సమర్పయామి ॥', step: { te: 'వస్త్రం లేదా పత్తి వస్త్రాలు (వత్తులు) సమర్పించండి.', en: 'Offer cloth or cotton vastram.' } },
  { name: { te: 'యజ్ఞోపవీతం', en: 'Yajnopavitam — sacred thread' }, t: 'యజ్ఞోపవీతం సమర్పయామి ॥', step: { te: 'యజ్ఞోపవీతం లేదా అక్షతలు సమర్పించండి.', en: 'Offer the sacred thread, or akshata in its place.' } },
  { name: { te: 'గంధం', en: 'Gandham — sandal paste' }, t: 'శ్రీగంధాన్ ధారయామి ॥', step: { te: 'గంధం, కుంకుమ, పసుపు అలంకరించండి.', en: 'Apply sandal paste, kumkum and turmeric.' } },
  { name: { te: 'పుష్పపూజ', en: 'Pushpa puja — flowers' }, t: 'పుష్పైః పూజయామి ॥', step: { te: 'పుష్పాలతో పూజించండి. అష్టోత్తర శతనామాలు ఉంటే ఇప్పుడు చదవండి.', en: 'Worship with flowers. Recite the 108 names here if you have them.' } },
  { name: { te: 'ధూపం', en: 'Dhupam — incense' }, t: 'ధూపమాఘ్రాపయామి ॥', step: { te: 'అగరుబత్తి వెలిగించి చూపించండి.', en: 'Wave lit incense before the deity.' } },
  { name: { te: 'దీపం', en: 'Deepam — lamp' }, t: 'దీపం దర్శయామి ॥', step: { te: 'దీపం చూపించండి.', en: 'Show the lamp.' } },
  { name: { te: 'నైవేద్యం', en: 'Naivedyam — food offering' }, t: 'నైవేద్యం సమర్పయామి ॥', step: { te: 'ప్రసాదం ముందు ఉంచి, చుట్టూ నీరు చల్లి, నివేదించండి.', en: 'Place the prasadam, sprinkle water around it and offer it.' } },
  { name: { te: 'తాంబూలం', en: 'Tambulam — betel' }, t: 'తాంబూలం సమర్పయామి ॥', step: { te: 'తమలపాకులు, వక్కలు, పండు సమర్పించండి.', en: 'Offer betel leaves, nut and fruit.' } },
  { name: { te: 'నీరాజనం', en: 'Neerajanam — aarti' }, t: 'కర్పూర నీరాజనం సమర్పయామి ॥', step: { te: 'కర్పూర హారతి ఇవ్వండి. గంట మోగించండి.', en: 'Wave the camphor aarti while ringing the bell.' } },
  { name: { te: 'మంత్రపుష్పం', en: 'Mantrapushpam' }, t: 'మంత్రపుష్పం సమర్పయామి ॥', step: { te: 'చేతుల్లో పుష్పాలు, అక్షతలు తీసుకుని సమర్పించండి.', en: 'Offer flowers and akshata held in both palms.' } },
  { name: { te: 'ప్రదక్షిణ నమస్కారం', en: 'Pradakshina & Namaskaram' }, t: 'ప్రదక్షిణ నమస్కారాన్ సమర్పయామి ॥', step: { te: 'మూడు సార్లు ప్రదక్షిణ చేసి సాష్టాంగ నమస్కారం చేయండి.', en: 'Circle three times clockwise and bow fully.' } },
];

export function buildPujaVidhanam(deityId: string, opts?: { id?: string; title?: { te: string; en: string } }): SacredText {
  const d = DEITIES.find((x) => x.id === deityId);
  const name = d?.pujaName ?? 'శ్రీ ఇష్టదేవతాయై నమః';
  const v: Verse[] = [
    {
      heading: { te: 'దీపారాధన', en: 'Light the lamp' },
      step: { te: 'దీపం వెలిగించి, అక్షతలు, పుష్పాలు సిద్ధం చేసుకోండి.', en: 'Light the lamp and keep akshata and flowers ready.' },
      te: 'దీపజ్యోతిః పరబ్రహ్మ దీపజ్యోతిర్జనార్దనః ।\nదీపో హరతు మే పాపం దీపజ్యోతిర్నమోఽస్తు తే ॥',
      en: 'The lamp’s light is the Supreme. May it remove my sins — salutations to it.',
    },
    {
      heading: { te: 'గణపతి ప్రార్థన', en: 'Prayer to Ganapati' },
      step: { te: 'చేతులు జోడించి చదవండి.', en: 'Fold your hands and recite.' },
      te: 'శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥',
      en: 'Meditate on the white-clad, four-armed Lord with a serene face, so that all obstacles are removed.',
    },
    {
      heading: { te: 'ఆచమనం', en: 'Achamanam' },
      step: { te: 'కుడి అరచేతిలో ఉద్ధరిణితో కొద్దిగా నీరు తీసుకుని, మొదటి మూడు నామాలకు మూడుసార్లు తాగండి.', en: 'Take a little water in the right palm and sip it three times, once for each of the first three names.' },
      te: 'ఓం కేశవాయ స్వాహా ।\nఓం నారాయణాయ స్వాహా ।\nఓం మాధవాయ స్వాహా ॥',
      en: 'Offered to Keshava, Narayana and Madhava.',
    },
    {
      step: { te: 'తర్వాత చేతులు కడిగి, చేతులు జోడించి మిగిలిన నామాలు చదవండి.', en: 'Rinse your hands, fold them and recite the remaining names.' },
      te: ACHAMANA_NAMES.map((n) => `ఓం ${n} నమః`).join(' ।\n') + ' ॥',
      en: 'The twenty-one names of Vishnu, purifying body and mind.',
    },
    {
      heading: { te: 'భూతోచ్చాటన', en: 'Bhutocchatana' },
      step: { te: 'కొద్దిగా అక్షతలు వెనుకకు వేయండి.', en: 'Toss a few grains of akshata behind you.' },
      te: 'ఉత్తిష్ఠంతు భూతపిశాచాః ఏతే భూమిభారకాః ।\nఏతేషామవిరోధేన బ్రహ్మకర్మ సమారభే ॥',
      en: 'May all disturbing beings depart. Without obstruction from them, I begin this sacred act.',
    },
    {
      heading: { te: 'ప్రాణాయామం', en: 'Pranayamam' },
      step: { te: 'నెమ్మదిగా శ్వాస తీసుకుని, ఆపి, వదులుతూ గాయత్రి స్మరించండి.', en: 'Breathe in slowly, hold, and breathe out while remembering the Gayatri.' },
      te: 'ఓం భూర్భువః స్వః ।\nతత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ।\nధియో యో నః ప్రచోదయాత్ ॥',
      en: 'May the divine light inspire our minds.',
    },
    {
      heading: { te: 'సంకల్పం', en: 'Sankalpam (intention)' },
      step: {
        te: 'కుడిచేతిలో అక్షతలు, నీరు తీసుకుని చదవండి. ఖాళీల్లో ఈ రోజు పంచాంగ వివరాలు, మీ గోత్రం, పేరు చెప్పండి. తర్వాత అక్షతలు పళ్ళెంలో వదలండి.',
        en: 'Hold akshata and water in the right hand. Fill the blanks with today’s panchangam details, your gotram and name. Then release them into the plate.',
      },
      te: 'మమోపాత్త సమస్త దురితక్షయద్వారా శ్రీ పరమేశ్వర ప్రీత్యర్థం\nశుభే శోభనే ముహూర్తే ___ నామ సంవత్సరే\n___ మాసే ___ పక్షే ___ తిథౌ ___ వాసరే\n___ గోత్రస్య ___ నామధేయస్య\nధర్మార్థకామమోక్ష చతుర్విధ ఫలపురుషార్థ సిద్ధ్యర్థం\nయథాశక్తి షోడశోపచార పూజాం కరిష్యే ॥',
      en: 'To remove all my faults and to please the Supreme, at this auspicious time — in the year __, month __, fortnight __, tithi __, on __day — I of gotra __, named __, will perform the sixteen-step worship as best I can, for dharma, prosperity, fulfilment and liberation.',
    },
    {
      heading: { te: 'కలశ పూజ', en: 'Kalasha puja' },
      step: { te: 'నీటి కలశానికి గంధం, కుంకుమ, పుష్పం పెట్టి, కుడి అరచేతితో మూసి చదవండి. ఆ నీటిని పూజా సామగ్రిపై, మీపై చల్లుకోండి.', en: 'Decorate the water pot with sandal, kumkum and a flower, cover it with your right palm and recite. Then sprinkle that water on the puja items and yourself.' },
      te: 'కలశస్య ముఖే విష్ణుః కంఠే రుద్రః సమాశ్రితః ।\nమూలే తత్ర స్థితో బ్రహ్మా మధ్యే మాతృగణాః స్మృతాః ॥\nగంగే చ యమునే చైవ గోదావరి సరస్వతి ।\nనర్మదే సింధు కావేరి జలేఽస్మిన్ సన్నిధిం కురు ॥',
      en: 'Vishnu dwells at the mouth of the pot, Rudra at its neck, Brahma at its base and the Mothers in its middle. May the holy rivers be present in this water.',
    },
  ];

  UPACHARAS.forEach((u, i) => {
    v.push({
      heading: { te: `${i + 1}. ${u.name.te}`, en: `${i + 1}. ${u.name.en}` },
      step: u.step,
      te: `${name} । ${u.t}`,
      en: `Salutations to the Lord — I offer ${u.name.en.split(' — ')[1] ?? u.name.en}.`,
    });
  });

  v.push({
    heading: { te: 'క్షమాపణ, సమర్పణ', en: 'Forgiveness & offering' },
    step: { te: 'చేతులు జోడించి చదివి, ప్రసాదం స్వీకరించండి.', en: 'Fold your hands, recite, and then accept the prasadam.' },
    te: 'మంత్రహీనం క్రియాహీనం భక్తిహీనం సురేశ్వర ।\nయత్పూజితం మయా దేవ పరిపూర్ణం తదస్తు మే ॥\nకాయేన వాచా మనసేంద్రియైర్వా బుద్ధ్యాత్మనా వా ప్రకృతేః స్వభావాత్ ।\nకరోమి యద్యత్ సకలం పరస్మై నారాయణాయేతి సమర్పయామి ॥',
    en: 'May this worship, though lacking in mantra, ritual and devotion, become complete. Whatever I do, I offer it all to the Supreme.',
  });

  return {
    id: opts?.id ?? `puja-${deityId}`,
    title: opts?.title ?? {
      te: `${d?.name.te ?? 'నిత్య'} పూజా విధానం`,
      en: `${d?.name.en ?? 'Daily'} Puja Vidhanam`,
    },
    kind: 'vidhanam',
    deities: d ? [d.id] : [],
    daily: d ? undefined : 'puja',
    review: true,
    intro: {
      te: 'షోడశోపచార పూజ — ప్రతి దశలో ఏం చేయాలో పైన, ఏం చదవాలో కింద ఉంది.',
      en: 'The sixteen-step (shodashopachara) puja — what to do is above each step, what to say is below it.',
    },
    verses: v,
  };
}

export const NITYA_PUJA: SacredText = buildPujaVidhanam('_ishta', {
  id: 'nitya-puja',
  title: { te: 'నిత్య పూజా విధానం', en: 'Daily Puja Vidhanam' },
});

export const DEITY_PUJAS: SacredText[] = DEITIES.map((d) => buildPujaVidhanam(d.id));
