import type { SacredText } from './types';
import { DAILY } from './texts/daily';
import { GANESHA_SHIVA } from './texts/ganesha-shiva';
import { VAISHNAVA } from './texts/vaishnava';
import { HANUMAN } from './texts/hanuman';
import { DEVI_OTHERS } from './texts/devi-others';
import { NITYA_PUJA, DEITY_PUJAS } from './texts/puja';
import { GITA_TEXTS } from './texts/gita';
import { RAMAYANA_TEXTS } from './texts/ramayana';
import { VENKATESA_COMPLETE } from './texts/complete-venkatesa';
import { DEVI_COMPLETE } from './texts/complete-devi';
import { AYYAPPA_COMPLETE } from './texts/complete-ayyappa';
import { ASHTOTTARAMS } from './texts/ashtottaram';
import { VRATA_KATHAS } from './texts/vrata-kathas';
import { VISHNU_SAHASRANAMAM } from './texts/vishnu-sahasranamam';
import { valmikiSarga } from './ramayana/load';
import { MORE_STOTRAS } from './texts/stotras-more';
import { LALITA_SAHASRANAMAM } from './texts/lalita-sahasranamam';
import { SRI_RUDRAM } from './texts/rudram';

export * from './types';
export * from './deities';
export * from './collections';
export { GITA_CHAPTERS } from './texts/gita';
export { KANDAS } from './texts/ramayana';

/** Complete versions replace any earlier partial text with the same id. */
const COMPLETE: SacredText[] = [...VENKATESA_COMPLETE, ...DEVI_COMPLETE, ...AYYAPPA_COMPLETE, ...ASHTOTTARAMS, ...VRATA_KATHAS, VISHNU_SAHASRANAMAM, ...MORE_STOTRAS, LALITA_SAHASRANAMAM, SRI_RUDRAM];
const COMPLETE_IDS = new Set(COMPLETE.map((t) => t.id));

const BASE: SacredText[] = [
  NITYA_PUJA,
  ...DAILY,
  ...GANESHA_SHIVA,
  ...VAISHNAVA,
  ...HANUMAN,
  ...DEVI_OTHERS,
  ...DEITY_PUJAS,
  ...GITA_TEXTS,
  ...RAMAYANA_TEXTS,
];

export const TEXTS: SacredText[] = [
  ...BASE.map((t) => (COMPLETE_IDS.has(t.id) ? COMPLETE.find((c) => c.id === t.id)! : t)),
  ...COMPLETE.filter((c) => !BASE.some((t) => t.id === c.id)),
];

const BY_ID = new Map(TEXTS.map((t) => [t.id, t]));
export const textById = (id: string) => BY_ID.get(id) ?? (id.startsWith('valmiki-') ? valmikiSarga(id) : undefined);

export const textsForDeity = (deityId: string) =>
  TEXTS.filter((t) => t.deities.includes(deityId) && !t.id.startsWith('gita-') && t.kind !== 'vidhanam');

export const DAILY_ORDER: { slot: NonNullable<SacredText['daily']>; label: { te: string; en: string } }[] = [
  { slot: 'morning', label: { te: 'ఉదయం', en: 'Morning' } },
  { slot: 'puja', label: { te: 'పూజ', en: 'Puja' } },
  { slot: 'study', label: { te: 'చదువు', en: 'Study' } },
  { slot: 'meal', label: { te: 'భోజనం', en: 'Meals' } },
  { slot: 'evening', label: { te: 'సాయంత్రం', en: 'Evening' } },
  { slot: 'night', label: { te: 'రాత్రి', en: 'Night' } },
];

export const dailyTexts = () => TEXTS.filter((t) => t.daily);

export const STOTRAS = () => TEXTS.filter((t) => t.kind === 'stotram' || t.kind === 'keertana');
