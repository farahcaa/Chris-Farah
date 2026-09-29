import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "book-05");

const sections = [
  {
    title: "Key Takeaways",
    paragraphs: entry?.content ?? [],
  },
];

export default function LeanB2B() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="Book Reviews"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/the-mom-test",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
