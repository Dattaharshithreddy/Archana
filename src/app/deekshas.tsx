import React from 'react';
import { CollectionList } from '../components/CollectionList';
import { DEEKSHAS } from '../data';

export default function Deekshas() {
  return (
    <CollectionList
      items={DEEKSHAS}
      title={{ te: 'దీక్షలు', en: 'Deekshas' }}
      emblem="steps"
      accent="#FFB000"
      colors={['#2C2416', '#0E0B06']}
      intro={{ te: 'మాలధారణ నుండి విరమణ వరకు — నియమాలు, మంత్రాలు, రోజువారీ పూజ.', en: 'From wearing the mala to completion — rules, mantras and daily worship.' }}
    />
  );
}
