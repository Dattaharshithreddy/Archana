export const C = {
  bg0: '#10050C',
  bg1: '#24081A',
  bg2: '#3A0E22',
  gold: '#E8B84A',
  goldSoft: '#F6D88E',
  goldDeep: '#B9822A',
  saffron: '#F28C28',
  kumkum: '#C8283A',
  cream: '#F7EBD3',
  muted: 'rgba(247,235,211,0.68)',
  faint: 'rgba(247,235,211,0.40)',
  card: 'rgba(255,214,150,0.06)',
  cardHi: 'rgba(255,214,150,0.11)',
  line: 'rgba(232,184,74,0.24)',
};

export const F = {
  te: 'TiroTelugu_400Regular',
  teSerif: 'NotoSerifTelugu_500Medium',
  teBold: 'NotoSerifTelugu_700Bold',
  title: 'Cinzel_600SemiBold',
  titleBold: 'Cinzel_700Bold',
  body: 'CormorantGaramond_500Medium',
  bodyItalic: 'CormorantGaramond_500Medium_Italic',
  bodyBold: 'CormorantGaramond_700Bold',
};

/** Alpha helper for #RRGGBB colours */
export const alpha = (hex: string, a: number) => {
  const n = Math.round(a * 255)
    .toString(16)
    .padStart(2, '0');
  return hex.length === 7 ? hex + n : hex;
};
