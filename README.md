# Arivu Foundation – Centre for Languages

Website for **அறிவு தமிழ் பாடசாலை**, Tamil language schools in Coventry, Birmingham and Shirley (UK).

React 19 · Vite · Tailwind CSS v4 · React Router · Framer Motion

```bash
npm install
npm run dev     # local dev server
npm run build   # production build to dist/
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Brand colours & fonts (from the logo) | `src/index.css` (`@theme`) |
| Contact details, mission, image paths | `src/data/site.js` |
| Schools, class times, addresses | `src/data/locations.js` |
| Teachers & their YouTube intros | `src/data/teachers.js` |
| Events | `src/data/events.js` |
| Curriculum, promises, downloads | `src/data/learning.js` |
| Logo, photos, worksheet PDF | `public/brand`, `public/images`, `public/downloads` |

Most content changes only need an edit in `src/data/`.

## Notes

- The enquiry form has no backend: it opens the visitor's email app or WhatsApp with the message pre-filled.
- Old `arivufoundation.com` URLs (`/coventry-classes` etc.) redirect to the new school pages.
- When deploying as a static SPA, configure a fallback to `index.html` so deep links work.
