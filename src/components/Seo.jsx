import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, canonical, image, schemaMarkup }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    {/* Open Graph for Facebook, LinkedIn */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={canonical} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />

    {/* Preload critical resources for LCP */}
    <link rel="preload" href={image} as="image" />

    {/* Structured Data (Schema Markup) */}
    {schemaMarkup && (
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    )}
  </Helmet>
);

export default Seo;
