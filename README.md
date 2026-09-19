# Wat O Trao Website

គេហទំព័រផ្លូវការសម្រាប់វត្តអូរត្រាវ

## Wat O Trao

Website developed to share information about the temple, Buddhist activities, monks, history, events, news, and Khmer cultural heritage.

## Development

npm install

npm run dev

## Technology

- React
- Vite
- Tailwind CSS
- JavaScript
# Wat Ô Trao

The repository is now organized as three independently runnable applications:

- `frontend/` — the existing public React/Vite website and static Khmer temple data.
- `admin/` — the CMS UI foundation on port 3001.
- `backend/` — the Express API foundation on port 4000 with Prisma/PostgreSQL schema.

## Development

```bash
cd frontend && npm install && npm run dev
cd admin && npm install && npm run dev
cd backend && npm install && npm run dev
```

The public content remains static in `frontend/src/data/data.js`; no content or temple records have been migrated yet.
