# Portfolio-v1

Modern portfolio site with an admin panel and Cloudflare Workers + KV backend.

## Repository Structure

- frontend/
  - index.html
  - admin.html
  - blog.html
  - blog-post.html
  - assets/images/
  - assets/documents/
- backend/
  - src/worker.js
  - wrangler.toml
  - package.json
  - README.md
- README.md

## What Is Included

- Portfolio website frontend
- Admin panel to manage portfolio and blog content
- Blog listing + blog detail pages
- Backend API on Cloudflare Workers
- KV storage with schema validation

## Database Keys (KV)

- portfolio_data
- blog_posts
- admin_settings

## Quick Start

### Frontend

Open frontend/index.html in a browser.

### Backend

1. cd backend
2. npm install
3. npm run dev
4. Optional deploy: npm run deploy

## API (Backend)

- GET /api/health
- GET /api/schemas
- GET /api/entries
- GET /api/entries/:key
- PUT /api/entries/:key
- POST /api/entries/:key
- DELETE /api/entries/:key

## Notes

- Admin and public pages are wired to fetch latest data from backend KV.
- If ADMIN_TOKEN is configured, send Authorization: Bearer <token> for write routes.
- Full backend details are documented in backend/README.md.
