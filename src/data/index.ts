import type { SacredText } from './types';
import { DAILY } from './texts/daily';
import { GANESHA_SHIVA } from './texts/ganesha-shiva';
import { VAISHNAVA } from './texts/vaishnava';
import { HANUMAN } from './texts/hanuman';
import { DEVI_OTHERS } from './texts/devi-others';
import { NITYA_PUJA, DEITY_PUJAS } from './texts/puja';
import { GITA_TEXTS } from './texts/gita';
import { RAMAYANA_TEXTS } from './texts/ramayana';

export * from './types';
export * from './deities';
export * from './collections';
export { GITA_CHAPTERS } from './texts/gita';
export { KANDAS } from './texts/ramayana';

export const TEXTS: SacredText[] = [
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

const BY_ID = new Map(TEXTS.map((t) => [t.id, t]));
export const textById = (id: string) => BY_ID.get(id);

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
