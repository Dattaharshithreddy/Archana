import { createAudioPlayer, type AudioPlayer } from 'expo-audio';

const SOURCES = {
  bell: require('../../assets/sounds/bell.m4a'),
  conch: require('../../assets/sounds/conch.m4a'),
  damaru: require('../../assets/sounds/damaru.m4a'),
  flute: require('../../assets/sounds/flute.m4a'),
  veena: require('../../assets/sounds/veena.m4a'),
  arrow: require('../../assets/sounds/arrow.m4a'),
  drum: require('../../assets/sounds/drum.m4a'),
} as const;

export type Sfx = keyof typeof SOURCES;

const players: Partial<Record<Sfx, AudioPlayer>> = {};

/** Play a short temple sound. Players are created once and reused. Never throws. */
export function playSfx(name: Sfx, volume = 0.8) {
  try {
    let p = players[name];
    if (!p) {
      p = createAudioPlayer(SOURCES[name]);
      players[name] = p;
    }
    p.volume = volume;
    p.seekTo(0).catch(() => {});
    p.play();
  } catch {
    // sound is decoration only
  }
}
