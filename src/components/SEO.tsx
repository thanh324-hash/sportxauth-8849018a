import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sportxauthh.lovable.app";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({ title, description, path, type = "website", image, jsonLd }: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b3c3d201-e271-442d-aa56-b560104bf716";
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
