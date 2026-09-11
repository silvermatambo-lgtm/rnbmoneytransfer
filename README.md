# R&B Money Transfer – WebDevPro Ultra Max 5 Rebrand

Vite + React + TypeScript website for R&B Money Transfer.

## Included
- Home, rates, send money, about, how it works, contact and admin pages
- Daily rate board (default: 255 with commission, 245 without commission, -1% straight banking/agent numbers)
- Browser-only admin login and localStorage rate editing
- Password requested for the prototype: `280885`
- WhatsApp/call links for Mike, Ben and Mussah
- Responsive mobile bottom navigation
- PWA manifest and Vercel SPA rewrite

## Important admin limitation
The admin feature is intentionally browser-only and has **no backend/database**. Rate changes are saved only in the browser/device where they are entered. The password is present in client-side code and is therefore not appropriate for production security. For shared live updates across all visitors, replace this with a secure authenticated backend/database.

## Deploy
```bash
npm install
npm run build
```
Then deploy to Vercel.
