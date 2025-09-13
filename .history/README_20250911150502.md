# Capy’s Journey Landing (Vite + React + Tailwind)

Commands:

```
npm install
npm run dev
```

Tailwind v4 is wired via `@import "tailwindcss";` in `src/index.css`.

Environment:

- Create `.env` at the project root with:

```
VITE_GAS_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

This should be a Google Apps Script web app URL that accepts `POST` JSON:

```
{ "name": "Your Name", "email": "you@example.com", "source": "capysjourney-landing" }
```

The landing page is implemented in `src/App.jsx`. Images and video are placeholders.
