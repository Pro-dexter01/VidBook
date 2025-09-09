VidBook_app (final)

This package contains:
- client/ (React + Vite + Tailwind)
- server/ (Express + MongoDB)

How to run locally:
1) Backend
cd server
npm install
copy .env.sample .env
# edit .env (MONGO_URI, JWT_SECRET)
npm run dev

2) Frontend
cd ../client
npm install
copy .env.example .env
# edit .env if needed (VITE_BACKEND_URL)
npm run dev

Notes:
- Messages are free.
- 10% platform cut on approved recharges (auto-approved if upload fast).
- Admin dashboard shows aggregated platform revenue.
