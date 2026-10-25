# Archana · అర్చన

All your daily mantras, puja vidhanams, festival and deeksha guides, the Bhagavad Gita and the Ramayana in one devotional app, in **Telugu script + English transliteration + English meaning**.

## What's inside (v1)

| | |
|---|---|
| Deities | 13: Ganesha, Shiva, Vishnu, Venkateswara, Rama, Krishna, Hanuman, Lakshmi, Saraswati, Durga, Subrahmanya, Ayyappa, Surya. Each has an animated darshan, an about section, puja, japa and aarti |
| Texts | 71 texts and about 580 verses/steps: daily shlokas, mantras, stotras, keertanas |
| Puja vidhanam | Full shodashopachara (16-step) puja generated for every deity. Each step shows **what to do** above **what to say** |
| Festivals | 12, each with samagri checklist, steps and linked mantras: Ugadi, Rama Navami, Varalakshmi Vratam, Krishnashtami, Vinayaka Chavithi, Dasara, Deepavali, Karthika, Sankranti, Shivaratri, Vaikuntha Ekadashi, Ratha Saptami |
| Deekshas | 4, each with rules, steps and mantras: Ayyappa, Hanuman, Bhavani, Shiva |
| Bhagavad Gita | Gita Dhyanam, all 18 chapters with summaries and 40 key verses |
| Ramayana | Seven-kanda story, Valmiki's opening verses, Sundarakanda shlokas, Hanuman Chalisa |
| Tools | Japa mala counter (108 beads, haptics, lifetime count), animated aarti mode, bookmarks, recently read, full-text search (Telugu or English spelling), font size, script toggle, screen stays awake while reading |

## Tech stack

- **Expo SDK 58 / React Native 0.88**, TypeScript, Expo Router (file-based routes in `src/app`)
- **Reanimated 4**: every animation (mandala rotation, glow, sparks, petals, aarti orbit, japa pulse) runs on the UI thread at 60fps
- **react-native-svg**: all deity emblems, mandalas, the diya and the japa mala are vector, so they stay sharp and use no image assets
- Fonts: Tiro Telugu (verses), Noto Serif Telugu (UI), Cinzel and Cormorant Garamond (English). Only the needed weights are bundled
- Storage: AsyncStorage (settings, bookmarks, japa count). Works fully offline with no backend
- Transliteration is generated from the Telugu text at runtime (`src/lib/translit.ts`), so each verse is written once

## Run it

```bash
npm install
npx expo start          # scan with a development build, or press w for web
```

Reanimated 4 and other native modules need a **development build**. Expo Go may not match SDK 58 on the day you test:

```bash
npx eas-cli@latest build --profile development --platform android
```

## Ship to Play Store

```bash
npx eas-cli@latest login
npx eas-cli@latest build --profile preview --platform android      # installable APK to test on your phone
npx eas-cli@latest build --profile production --platform android   # .aab for Play Console
npx eas-cli@latest submit --platform android                        # upload (needs a Play service-account key)
```

Package name: `com.harshith.archana` (change it in `app.json` before the first upload; it can't be changed later).

## Before public release: content review

Sacred text must be exact. Every verse here was written carefully, but a pandit or a trusted printed source should check **all** of it, especially these items marked `review: true`:

- `nitya-puja` and all `puja-*` vidhanams (sankalpam wording varies by tradition)
- `venkatesa-suprabhatam`, `govinda-namalu`, `adivo-alladivo` (opening portions only)
- `hanuman-chalisa` (Awadhi in Telugu script; spellings differ between printed editions)
- `mahishasura-mardini` (first verse only), `ayyappa-mantras`, `ayyappa-mala-dharana`

All texts included are traditional and public domain: Vedic and Puranic verses, Adi Shankara, Tulsidas, Annamacharya and Vallabhacharya. The English meanings and all guide text are original to this app. Don't paste translations from modern books or websites, because those are copyrighted.

## Adding content

Everything lives in `src/data/`:

- `texts/*.ts`: add a `SacredText` with `te` (Telugu) and `en` (meaning) per verse. Transliteration is automatic. Set `lang: 'hi'` for Hindi/Awadhi texts.
- `texts/gita.ts`: `GITA_VERSES[chapter]` takes any number of verses. Adding all 700 needs no UI change.
- `collections.ts`: festivals and deekshas
- `deities.ts`: deity name, colours, emblem, japa mantra

## Roadmap ideas

1. **Full texts**: all 700 Gita verses; full Suprabhatam, Vishnu Sahasranamam, Lalita Sahasranamam, and Ashtottarams for each deity
2. **Illustrated deity art**: commission an artist and drop in Lottie or Rive animations per deity. The `DivineAura` component already frames them
3. **Audio**: recorded chanting with verse-synced highlighting (expo-audio)
4. **Panchangam**: today's tithi and nakshatra, upcoming festival dates and reminder notifications
5. **Telugu meanings** alongside English (the data shape already supports `step.te`)
