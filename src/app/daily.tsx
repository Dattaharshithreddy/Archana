import React from 'react';
import { ListScreen } from '../components/ListScreen';
import { SectionTitle, TextRow } from '../components/UI';
import { DAILY_ORDER, dailyTexts, textById } from '../data';

export default function Daily() {
  const all = dailyTexts();
  return (
    <ListScreen
      title={{ te: 'నిత్య పూజ', en: 'Daily Prayers' }}
      emblem="lotus"
      accent="#FF9EC4"
      colors={['#5A1430', '#2A0816']}
      intro={{
        te: 'నిద్ర లేచినప్పటి నుండి రాత్రి వరకు — రోజంతా చదివే మంత్రాలు, శ్లోకాలు.',
        en: 'From waking to sleeping — the mantras and shlokas of a devotional day.',
      }}
    >
      <TextRow text={textById('nitya-puja')!} />
      {DAILY_ORDER.map((s) => {
        const items = all.filter((t) => t.daily === s.slot && t.id !== 'nitya-puja');
        if (!items.length) return null;
        return (
          <React.Fragment key={s.slot}>
            <SectionTitle te={s.label.te} en={s.label.en} />
            {items.map((t, i) => <TextRow key={t.id} text={t} index={i} />)}
          </React.Fragment>
        );
      })}
    </ListScreen>
  );
}
