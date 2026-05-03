import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "book-02");
const sections = [
  {
    title: "Fair Housing and Standards",
    paragraphs: entry?.content?.slice(0, 2) ?? [],
  },
  {
    title: "Rules, Boundaries, and Documentation",
    paragraphs: entry?.content?.slice(2, 5) ?? [],
  },
  {
    title: "Solving Problems Cleanly",
    paragraphs: entry?.content?.slice(5, 6) ?? [],
  },
  {
    title: "Working With Contractors",
    paragraphs: entry?.content?.slice(6) ?? [],
  },
];

export default function ManagingRentalProperties() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="Book Reviews"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/reading-introduction",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
