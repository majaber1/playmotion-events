import { Helmet } from 'react-helmet-async'

// Reusable SEO component - sets page title, meta description, canonical URL,
// and Open Graph / Twitter card tags for social sharing previews.
//
// TODO: Replace PRODUCTION_URL below with your real deployed domain once live.
const PRODUCTION_URL = 'https://playmotion-events.example.com'

// TODO: Replace this default Open Graph image with a real 1200x630px image.
// Place the file at /public/og-image.jpg so it is served at /og-image.jpg.
const DEFAULT_OG_IMAGE = '/og-image.jpg'

export default function SEO({ title, description, path = '/', ogImage = DEFAULT_OG_IMAGE }) {
  const fullTitle = title ? `${title} | PlayMotion Events` : 'PlayMotion Events | Interactive Gaming Experiences for Events & Exhibitions'
  const url = `${PRODUCTION_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PlayMotion Events" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
