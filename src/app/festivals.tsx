import React from 'react';
import { CollectionList } from '../components/CollectionList';
import { FESTIVALS } from '../data';

export default function Festivals() {
  return (
    <CollectionList
      items={FESTIVALS}
      title={{ te: 'పండుగలు', en: 'Festivals' }}
      emblem="sun"
      accent="#FFD24A"
      colors={['#553108', '#221203']}
      intro={{ te: 'ప్రతి పండుగకు పూజా విధానం, సామగ్రి, మంత్రాలు ఒకేచోట.', en: 'Puja steps, samagri and mantras for every festival, in one place.' }}
    />
  );
}
