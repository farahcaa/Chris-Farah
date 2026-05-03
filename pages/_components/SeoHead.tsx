const SITE_URL = "https://chris-farah.pages.dev";
const SITE_NAME = "Christopher Farah";
const DEFAULT_IMAGE = "/code-brackets.svg";

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  keywords?: string[];
  publishedTime?: string;
  section?: string;
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function jsonLd(value: unknown) {
  return {
    __html: JSON.stringify(value),
  };
}

export default function SeoHead({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
  keywords = [],
  publishedTime,
  section,
}: SeoHeadProps) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const structuredData =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          image: imageUrl,
          datePublished: publishedTime,
          author: {
            "@type": "Person",
            name: SITE_NAME,
            url: SITE_URL,
          },
          publisher: {
            "@type": "Person",
            name: SITE_NAME,
          },
          mainEntityOfPage: url,
          articleSection: section,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Person",
          name: SITE_NAME,
          url: SITE_URL,
          sameAs: [
            "https://github.com/farahcaa",
            "https://www.linkedin.com/in/chrisfarah/",
          ],
        };

  return (
    <>
      <link rel="canonical" href={url} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#10100f" />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={imageUrl} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {section && <meta property="article:section" content={section} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(structuredData)}
      />
    </>
  );
}
