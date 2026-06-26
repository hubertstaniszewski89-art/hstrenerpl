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

## Next / Backlog
- Wire Contact form & Ebook signup to real backend endpoints (currently static UI)
- Add SEO meta / Polish content polish if desired
