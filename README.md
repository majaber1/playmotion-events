# PlayMotion Events

**Interactive Gaming Technology Partner for Events, Exhibitions, Corporate Activations, Malls, Schools, and Entertainment Zones.**

PlayMotion Events is a React + Vite + Tailwind CSS marketing website for a company that provides interactive projector-based games and event attractions: **MultiBall** (interactive sports wall), **X-Wall** (portable interactive wall), and **Soccer Table / Foosball**. The site positions the business as a technology partner - not just an equipment rental company - for event organizers, exhibition companies, corporate marketing teams, schools, malls, and entertainment venues.

Tagline: *"Interactive Gaming Experiences for Events & Exhibitions"*

---

## Tech Stack

- **React 18** + **Vite 5** - fast build tooling and dev server
- **React Router v6** - client-side routing (`src/App.jsx`)
- **Tailwind CSS** - utility-first styling, dark navy theme with neon blue/green/orange accents (`tailwind.config.js`, `src/index.css`)
- **react-helmet-async** - per-page SEO metadata (`src/components/SEO.jsx`)
- **@heroicons/react** - icons used in the navigation

## Project Structure

```
src/
  components/       Reusable UI: Navbar, Footer, Hero, SEO, ProductCard,
                     ReservationForm, VideoEmbed, GalleryGrid, ContactForm,
                     WhatsAppButton (floating contact button)
  data/
    products.js     Single source of truth for MultiBall / X-Wall / Soccer
                     Table content, gallery images, videos, and "Perfect For" /
                     "Why Choose Us" / "How It Works" data
  pages/            One file per route: Home, About, Products, MultiBall,
                     XWall, SoccerTable, EventSolutions, Gallery, Videos,
                     Booking, Contact
  App.jsx           Route definitions
  main.jsx          App entry point
```

## Setup Steps (Run Locally)

1. Install Node.js version 18 or later.
2. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/majaber1/playmotion-events.git
   cd playmotion-events
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview the production build locally:
   ```bash
   npm run preview
   ```

## How to Add Images

All content lives in **`src/data/products.js`**. Every placeholder image is a stock photo from Unsplash marked with a TODO comment.

1. Add your image file to the `public/` folder, e.g. `public/images/multiball-1.jpg`.
2. Replace the relevant Unsplash URL in `src/data/products.js` with your local path.
3. For the Gallery page, edit the `galleryImages` array (fields: `src`, `alt`, `category`). Categories used: MultiBall Setup, X-Wall Setup, Event Booth Activation, Kids Playing, Corporate Team Challenge, Soccer Table Competition.
4. Add a real 1200x630px Open Graph image at `public/og-image.jpg`.

## How to Update Videos

Video placeholders live in the `videos` array in `src/data/products.js` and render via `src/components/VideoEmbed.jsx`.

1. Find your YouTube video ID (the part after `v=` in the URL).
2. Paste it into the matching entry's `embedId` field.
3. Until set, the card links to the official source instead (MultiBall YouTube channel, X-Wall events page, etc).

## Booking Form / Backend Connection

The Reserve a Game page (`/booking`) uses `src/components/ReservationForm.jsx`. It shows a success message on submit but does not send data anywhere yet. TODO comments inside the file explain three options: Formspree, EmailJS, or a custom serverless function on Vercel/Netlify.

## How to Deploy

This project ships with a GitHub Pages workflow (`.github/workflows/deploy.yml`) using `base: '/playmotion-events/'` in `vite.config.js`.

Deploy to GitHub Pages: push to `main` and GitHub Actions builds and publishes automatically, or run `npm run deploy`.

Deploy to Vercel or Netlify: remove the `base` line in `vite.config.js` and the `basename` prop on `<Router>` in `src/App.jsx`, then import the repo on Vercel or Netlify with build command `npm run build` and output directory `dist`.

## TODO Before Going Live

- Replace all Unsplash placeholder images with real photos of the MultiBall, X-Wall, and Soccer Table units and past events.
- Add a real Open Graph image at public/og-image.jpg.
- Add real YouTube video IDs in src/data/products.js.
- Replace placeholder phone, WhatsApp, email, and address details in Footer.jsx, WhatsAppButton.jsx, and Contact.jsx.
- Confirm exact spaceRequirement and setupTime values for each game.
- Connect ReservationForm.jsx (and optionally ContactForm.jsx) to a real backend/email service.
- Add real social media links in Footer.jsx.
- Update PRODUCTION_URL in SEO.jsx once deployed.

## References

- MultiBall: https://multi-ball.com
- MultiBall YouTube: https://www.youtube.com/@MultiBall
- X-Wall: https://xwall.io
- X-Wall Events: https://xwall.io/en/xwall-event
- Interactive X-Wall: https://interactivexwall.nl/en
