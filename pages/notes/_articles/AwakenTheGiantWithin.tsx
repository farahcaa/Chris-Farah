import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "book-06");

const sections = [
  {
    title: "Key Takeaways",
    paragraphs: entry?.content ?? [],
  },
];

// Restore alongside the drafted content in _data/article-entries.ts:
/*
const sections = [
  {
    title: "Chapter 1: What a Decision Actually Is",
    paragraphs: entry?.content?.slice(0, 4) ?? [],
  },
  {
    title: "Chapter 2: Pain and Pleasure",
    paragraphs: entry?.content?.slice(4, 7) ?? [],
  },
  {
    title: "Chapter 3: Beliefs",
    paragraphs: entry?.content?.slice(7) ?? [],
  },
];
*/

export default function AwakenTheGiantWithin() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="Book Reviews"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/lean-b2b",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
