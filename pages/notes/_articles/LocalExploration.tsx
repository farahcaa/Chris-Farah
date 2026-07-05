import type { ReactNode } from "react";
import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "blog-04");

const LexgripLink = () => (
  <a
    href="https://lexgrip.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#7fd7ff] decoration-2 underline underline-offset-4 transition-colors hover:text-[#b8ff8a]"
  >
    LexGrip
  </a>
);

// Turn the plain-text "LexGrip" mention into a clickable, colored link.
function withLexgripLink(text: string): ReactNode {
  const parts = text.split("LexGrip");
  if (parts.length === 1) return text;

  return parts.flatMap((part, index) =>
    index === 0 ? [part] : [<LexgripLink key={index} />, part],
  );
}

const introParagraphs = (entry?.content?.slice(0, 1) ?? []).map(withLexgripLink);

const sections = [
  {
    title: "Balancing Work and Exploration",
    paragraphs: introParagraphs,
  },
  {
    title: "Getting Around on Two Wheels and Two Feet",
    paragraphs: entry?.content?.slice(1, 3) ?? [],
  },
  {
    title: "Favorite Places",
    paragraphs: entry?.content?.slice(3, 5) ?? [],
  },
  {
    title: "Life at the Mercy of the Schedule",
    paragraphs: entry?.content?.slice(5) ?? [],
  },
];

export default function LocalExploration() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="International Work Experience"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/juelich-work-culture",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
