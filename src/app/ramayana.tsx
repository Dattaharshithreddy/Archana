import React from 'react';
import { View } from 'react-native';
import { ListScreen } from '../components/ListScreen';
import { TextRow } from '../components/UI';
import { textById } from '../data';

const IDS = ['ramayana-kandas', 'ramayana-opening', 'sundarakanda-shlokas', 'rama-shlokas', 'hanuman-chalisa', 'hanuman-shlokas'];

export default function Ramayana() {
  return (
    <ListScreen
      title={{ te: 'శ్రీమద్రామాయణం', en: 'Ramayana' }}
      emblem="bow"
      accent="#7FE0A8"
      colors={['#123A2A', '#061A12']}
      intro={{
        te: 'వాల్మీకి మహర్షి రచించిన ఆదికావ్యం — ఏడు కాండలు, 24,000 శ్లోకాలు.',
        en: 'The first poem, by sage Valmiki — seven kandas, 24,000 verses.',
      }}
    >
      <View style={{ height: 14 }} />
      {IDS.map((id, i) => <TextRow key={id} text={textById(id)!} index={i} />)}
    </ListScreen>
  );
}
