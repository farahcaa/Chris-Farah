import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { NoteEntry, NoteEntryImage } from "../_data/article-entries";

type NoteSection = {
  title: string;
  paragraphs: ReactNode[];
};

type NoteArticleProps = {
  entry?: NoteEntry;
  eyebrow: string;
  sections: NoteSection[];
  footerLinks?: {
    href: string;
    label: string;
    color: string;
  }[];
};

function formatDate(dateISO: string) {
  const [year, month, day] = dateISO.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function ArticleImage({ image }: { image: NoteEntryImage }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Cached/already-decoded images may finish before hydration attaches onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      {!loaded && (
        <div className="image-skeleton absolute inset-0" aria-hidden="true" />
      )}
      <img
        ref={imgRef}
        src={image.src}
        alt={image.alt}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function ImageGrid({ images }: { images: NoteEntryImage[] }) {
  if (images.length === 0) return null;

  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={index === 0 ? "sm:col-span-2" : undefined}
        >
          <ArticleImage image={image} />
          {image.caption && (
            <figcaption className="mt-3 text-sm leading-6 text-[#9f988c]">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </section>
  );
}

export default function NoteArticle({
  entry,
  eyebrow,
  sections,
  footerLinks = [
    {
      href: "/notes",
      label: "go back to notes",
      color: "#ffcf6e",
    },
    {
      href: "/",
      label: "head home",
      color: "#b8ff8a",
    },
  ],
}: NoteArticleProps) {
  if (!entry) {
    return (
      <main className="min-h-screen bg-[#10100f] text-[#f4f0e8]">
        <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
          <p className="text-lg leading-8 text-[#d8d1c4]">
            This note could not be found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#10100f] text-[#f4f0e8]">
      <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="mb-8 text-sm font-semibold text-[#b8ff8a]">{eyebrow}</p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          {entry.title}
        </h1>

        <time className="mt-6 block text-sm font-semibold text-[#9f988c]">
          {formatDate(entry.dateISO)}
        </time>

        <ImageGrid images={entry.images ?? []} />

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold leading-tight">
                {section.title}
              </h2>
              <div className="mt-5 space-y-7 text-lg leading-8 text-[#d8d1c4]">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-[#2a2a27] pt-8 text-lg leading-8 text-[#d8d1c4]">
          You can{" "}
          {footerLinks.map((link, index) => (
            <span key={link.href}>
              {index > 0 && (index === footerLinks.length - 1 ? " or " : ", ")}
              <a
                href={link.href}
                className="font-bold text-[#f4f0e8] decoration-2 underline underline-offset-4 transition-colors"
                style={{
                  textDecorationColor: link.color,
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = link.color;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = "#f4f0e8";
                }}
              >
                {link.label}
              </a>
            </span>
          ))}
          .
        </p>
      </article>
    </main>
  );
}
