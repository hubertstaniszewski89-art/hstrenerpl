# hstrener.pl — Project Transfer

## Origin
Cloned from GitHub: https://github.com/hubertstaniszewski89-art/hstrenerpl
(Full project lived on branch `conflict_260626_2156`; `main` only had README.)

## What it is
Polish personal-trainer marketing website for Hubert Staniszewski ("System Staniszewskiego™").
Static-content landing site with FastAPI backend (currently only a status-check boilerplate API).

## Tech Stack
- Frontend: React 19, react-router-dom 7, CRACO, Tailwind, shadcn/ui, lucide-react, framer-motion
- Backend: FastAPI + Motor (MongoDB), boilerplate /api/status endpoints
- DB: MongoDB

## Pages (routes)
- `/` Home
- `/o-mnie` About
- `/oferta` Offer
- `/ebook` Ebook
- `/kontakt` Contact

## Status (2026-06-26)
- Project copied into /app preserving platform .git/.emergent/.env
- Backend deps installed, frontend deps present; both services RUNNING
- Backend health OK (`GET /api/` -> Hello World)
- Homepage renders correctly (verified via screenshot)

## Updates (2026-06-27)
- Terminologia: wszystkie "metodologia" → "system" (Home label, Offer h1, About).
- Hero Home: nowe zdjęcie konsultacji (HS logo), układ 0.85fr/1.15fr, rounded 6px; stare zdjęcie zostaje w sekcji "Kim jestem" (duplikat usunięty).
- Odstępy: dodano padding 96px (desktop) / 60px (mobile) do .section-light/.section-dark → etykiety sekcji mają wyraźny whitespace.
- eBook: poprawny spis treści (Blok I: 01–03, Blok II: 04–07) + linia "Zakończenie Tomu I · O autorze"; zaktualizowano free-chapter-note.
- eBook: cena 48px → 58px, zmniejszony odstęp nad przyciskiem zakupu.

## Updates (2026-06-27, runda 2)
- O mnie: nagłówek "Skąd przyszedłem" → "Droga do Systemu Staniszewskiego"; "Background sportowy" → "Doświadczenie sportowe"; dodano "Zawodnik NPC — kulturystyka"; karta "Żywienie" → "Żywienie i suplementacja" (+ opis).
- Home: przyciski "Pobierz darmowy rozdział" → "Pobierz darmowy rozdział eBooka" (hero + banner).
- Routing: dodano ScrollToTop (components/ScrollToTop.jsx) — nawigacja resetuje scroll do góry; linki z hashem (#diagnostyka itd.) nadal scrollują do sekcji.
- eBook: płaska okładka zastąpiona renderem 3D (blend z czarnym tłem #0A0A0A, kolumna 480px); usunięto fałszywy punkt "Case study" z listy hero i z listy zakupu — zastąpiono treścią o makro/mezo/mikrocyklu.

## Updates (2026-06-30)
- Home OPINIE: zastąpiono testimoniale prawdziwymi opiniami — 2 karty wyróżnione (ciemne #0A0A0A, lewy border 3px gold), grid 3 kart (#F8F7F5, lewy border 2px gold), grid 4 krótkich cytatów (#F8F7F5, górny border 2px gold), wszystkie z 5 gwiazdkami (lucide Star).
- Kontakt: dodano sekcję "Gdzie przyjmuję" pod formularzem — Google Maps iframe (ul. Cybernetyki 10, Warszawa, height 400px, full width) + grid 3 kolumny (Miasto / Online / Dojazd).

## Next / Backlog
- Wire Contact form & Ebook signup to real backend endpoints (currently static UI)
- Add SEO meta / Polish content polish if desired
