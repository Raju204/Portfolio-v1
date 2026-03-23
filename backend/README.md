# Portfolio Backend (Cloudflare Workers + KV)

This backend provides schema-validated APIs for your portfolio and blog data, stored in Cloudflare KV.

## KV Binding

Configured in wrangler.toml:

- binding: KV
- id: 5bb14762ab1a420884f5584ab062be88
- preview_id: set your preview namespace id for local development

## Setup

1. Install dependencies:
   - npm install
2. Optional: protect write routes:
   - npx wrangler secret put ADMIN_TOKEN
3. Run local worker:
   - npm run dev
4. Deploy:
   - npm run deploy

## API Endpoints

- GET /api/health
- GET /api/schemas
- GET /api/entries?prefix=<optional>
- GET /api/entries/:key
- PUT /api/entries/:key
- POST /api/entries/:key
- DELETE /api/entries/:key

## Schema-Validated Storage Keys

- portfolio_data
  - type: object
  - required fields: hero, about, skills, experience, education, contact
- blog_posts
  - type: array of objects
  - required item fields: id, title, published
- admin_settings
  - type: object
  - required field: password

When payload validation fails:

- status: 400
- response: { "error": "Schema validation failed", "key": "...", "details": [...] }

## Write Payload Format

Use this JSON body for PUT and POST:

```json
{
  "value": { "title": "Hello" },
  "metadata": { "source": "admin" },
  "expirationTtl": 3600
}
```

- value is required
- metadata is optional
- expirationTtl is optional

If ADMIN_TOKEN is configured, send:

- Authorization: Bearer <your_token>

## Access All Database Keys

### From API (local)

- list keys: GET http://127.0.0.1:8787/api/entries
- view portfolio: GET http://127.0.0.1:8787/api/entries/portfolio_data
- view blogs: GET http://127.0.0.1:8787/api/entries/blog_posts
- view admin settings: GET http://127.0.0.1:8787/api/entries/admin_settings
- view schemas: GET http://127.0.0.1:8787/api/schemas

### From Wrangler CLI (remote Cloudflare KV)

Run from backend folder:

- npx wrangler kv key list --binding KV --preview false --remote
- npx wrangler kv key get --binding KV --preview false --remote portfolio_data
- npx wrangler kv key get --binding KV --preview false --remote blog_posts
- npx wrangler kv key get --binding KV --preview false --remote admin_settings

Note: use --preview false because wrangler.toml contains both id and preview_id.
