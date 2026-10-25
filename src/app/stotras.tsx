import React from 'react';
import { ListScreen } from '../components/ListScreen';
import { SectionTitle, TextRow } from '../components/UI';
import { DEITIES, STOTRAS, TEXTS } from '../data';

export default function Stotras() {
  const st = STOTRAS();
  const mantras = TEXTS.filter((t) => t.kind === 'mantra' && !t.daily);
  return (
    <ListScreen
      title={{ te: 'స్తోత్రాలు, కీర్తనలు', en: 'Stotras & Songs' }}
      emblem="veena"
      accent="#E6EEFF"
      colors={['#252B4D', '#0C0F22']}
    >
      <SectionTitle te="స్తోత్రాలు, కీర్తనలు" en="Stotras & Keertanas" />
      {st.map((t, i) => <TextRow key={t.id} text={t} index={i} />)}
      <SectionTitle te="మంత్రాలు" en="Mantras" />
      {mantras.map((t, i) => <TextRow key={t.id} text={t} index={i} />)}
      <SectionTitle te="పూజా విధానాలు" en="Puja Vidhanams" />
      {DEITIES.map((d, i) => {
        const t = TEXTS.find((x) => x.id === `puja-${d.id}`);
        return t ? <TextRow key={t.id} text={t} index={i} /> : null;
      })}
    </ListScreen>
  );
}
