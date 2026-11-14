import React from 'react';
import { ListScreen } from '../components/ListScreen';
import { SectionTitle, TextRow } from '../components/UI';
import { DEITIES, SONG_TEXTS, textById } from '../data';

export default function Songs() {
  const songs = SONG_TEXTS();
  const padi = textById('ayyappa-padi-puja');
  return (
    <ListScreen
      title={{ te: 'భక్తి పాటలు', en: 'Bhakti Songs' }}
      emblem="veena"
      accent="#FFB38A"
      colors={['#4A1F12', '#1E0B05']}
      intro={{
        te: 'అన్ని దేవుళ్ళ సంప్రదాయ కీర్తనలు, హారతులు, భజనలు — అన్నమయ్య, రామదాసు, త్యాగరాజు, దీక్షితులు, పురందరదాసు, తులసీదాసు రచనలు. ప్రతి పాటకు అర్థం, తెలుగు భావం.',
        en: 'Traditional keertanas, aartis and bhajans for every deity — by Annamayya, Ramadasu, Tyagaraja, Dikshitar, Purandara Dasa, Tulsidas and others — each with its meaning and a Telugu bhavam.',
      }}
    >
      {padi ? (
        <>
          <SectionTitle te="అయ్యప్ప పడి పూజ" en="Ayyappa Padi Puja" />
          <TextRow text={padi} index={0} />
        </>
      ) : null}
      {DEITIES.map((d) => {
        const list = songs.filter((t) => t.deities[0] === d.id && t.id !== 'ayyappa-padi-puja');
        if (!list.length) return null;
        return (
          <React.Fragment key={d.id}>
            <SectionTitle te={d.name.te} en={d.name.en} />
            {list.map((t, i) => <TextRow key={t.id} text={t} index={i} />)}
          </React.Fragment>
        );
      })}
    </ListScreen>
  );
}
