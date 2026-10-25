import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Script = 'te' | 'en' | 'both';

type Settings = {
  script: Script;
  meaning: boolean;
  fontScale: number;
  haptics: boolean;
  sound: boolean;
  intros: boolean;
};

type Store = Settings & {
  saved: string[];
  japaTotal: number;
  recent: string[];
  set: (patch: Partial<Settings>) => void;
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  addJapa: (n: number) => void;
  markRead: (id: string) => void;
};

const DEFAULTS: Settings = { script: 'both', meaning: true, fontScale: 1, haptics: true, sound: true, intros: true };
const KEY = 'archana.v1';

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [saved, setSaved] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [japaTotal, setJapaTotal] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (!raw) return;
        const d = JSON.parse(raw);
        setSettings({ ...DEFAULTS, ...(d.settings ?? {}) });
        setSaved(d.saved ?? []);
        setRecent(d.recent ?? []);
        setJapaTotal(d.japaTotal ?? 0);
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    AsyncStorage.setItem(KEY, JSON.stringify({ settings, saved, recent, japaTotal })).catch(() => {});
  }, [ready, settings, saved, recent, japaTotal]);

  const set = useCallback((patch: Partial<Settings>) => setSettings((s) => ({ ...s, ...patch })), []);
  const toggleSaved = useCallback(
    (id: string) => setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [id, ...s])),
    [],
  );
  const addJapa = useCallback((n: number) => setJapaTotal((t) => t + n), []);
  const markRead = useCallback(
    (id: string) => setRecent((r) => [id, ...r.filter((x) => x !== id)].slice(0, 8)),
    [],
  );

  const value = useMemo<Store>(
    () => ({
      ...settings,
      saved,
      recent,
      japaTotal,
      set,
      toggleSaved,
      isSaved: (id) => saved.includes(id),
      addJapa,
      markRead,
    }),
    [settings, saved, recent, japaTotal, set, toggleSaved, addJapa, markRead],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useStore outside StoreProvider');
  return v;
}
