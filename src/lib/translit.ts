/**
 * Telugu script → easy-to-read English transliteration.
 * Designed for reciting, not for scholarly precision: "శుక్లాంబరధరం" → "Shuklaambaradharam".
 */

const VOWELS: Record<string, string> = {
  'అ': 'a', 'ఆ': 'aa', 'ఇ': 'i', 'ఈ': 'ee', 'ఉ': 'u', 'ఊ': 'oo',
  'ఋ': 'ru', 'ౠ': 'roo', 'ఎ': 'e', 'ఏ': 'e', 'ఐ': 'ai',
  'ఒ': 'o', 'ఓ': 'o', 'ఔ': 'au',
};

const MATRAS: Record<string, string> = {
  'ా': 'aa', 'ి': 'i', 'ీ': 'ee', 'ు': 'u', 'ూ': 'oo', 'ృ': 'ru', 'ౄ': 'roo',
  'ె': 'e', 'ే': 'e', 'ై': 'ai', 'ొ': 'o', 'ో': 'o', 'ౌ': 'au',
};

const CONSONANTS: Record<string, string> = {
  'క': 'k', 'ఖ': 'kh', 'గ': 'g', 'ఘ': 'gh', 'ఙ': 'n',
  'చ': 'ch', 'ఛ': 'chh', 'జ': 'j', 'ఝ': 'jh', 'ఞ': 'ny',
  'ట': 't', 'ఠ': 'th', 'డ': 'd', 'ఢ': 'dh', 'ణ': 'n',
  'త': 't', 'థ': 'th', 'ద': 'd', 'ధ': 'dh', 'న': 'n',
  'ప': 'p', 'ఫ': 'ph', 'బ': 'b', 'భ': 'bh', 'మ': 'm',
  'య': 'y', 'ర': 'r', 'ఱ': 'r', 'ల': 'l', 'ళ': 'l', 'వ': 'v',
  'శ': 'sh', 'ష': 'sh', 'స': 's', 'హ': 'h',
};

const VIRAMA = '్';
const ANUSVARA = 'ం';
const ARDHA = 'ఁ';
const VISARGA = 'ః';
const LABIALS = new Set(['ప', 'ఫ', 'బ', 'భ', 'మ', 'వ']);

export function transliterate(input: string, opts?: { hindi?: boolean }): string {
  const chars = Array.from(input);
  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    const next = chars[i + 1];

    if (CONSONANTS[c] !== undefined) {
      out += CONSONANTS[c];
      if (next === VIRAMA) {
        i++; // dead consonant, no vowel
      } else if (next !== undefined && MATRAS[next] !== undefined) {
        out += MATRAS[next];
        i++;
      } else {
        out += 'a';
      }
      continue;
    }
    if (VOWELS[c] !== undefined) {
      out += VOWELS[c];
      continue;
    }
    if (c === ANUSVARA) {
      // find the next letter to pick m / n
      let j = i + 1;
      while (j < chars.length && chars[j] === ' ') j++;
      const nx = chars[j];
      const wordEnd = j !== i + 1 || nx === undefined || CONSONANTS[nx] === undefined;
      out += wordEnd || LABIALS.has(nx) ? 'm' : 'n';
      continue;
    }
    if (c === ARDHA) {
      out += 'n';
      continue;
    }
    if (c === VISARGA) {
      out += 'h';
      continue;
    }
    if (c === 'ఽ') {
      out += "'";
      continue;
    }
    if (c === '।') {
      out += '|';
      continue;
    }
    if (c === '॥') {
      out += '||';
      continue;
    }
    out += c;
  }
  if (opts?.hindi) {
    // Hindi/Awadhi: drop the inherent final "a" (raama → raam, jaya → jay)
    out = out.replace(/([a-z']{2,}[^a\s'|])a(?=[\s|,.!]|$)/g, '$1');
  }
  // Capitalise the start of each line for readability
  return out
    .split('\n')
    .map((l) => l.replace(/^(\s*)([a-z])/, (_m, s, ch) => s + ch.toUpperCase()))
    .join('\n');
}
