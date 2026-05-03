import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "book-01");
const sections = [
  {
    title: "Why I’m Writing Reading Notes",
    paragraphs: entry?.content?.slice(0, 3) ?? [],
  },
  {
    title: "How I Want These to Work",
    paragraphs: entry?.content?.slice(3, 5) ?? [],
  },
  {
    title: "What I’m Reading Next",
    paragraphs: entry?.content?.slice(5) ?? [],
  },
];

export default function ReadingIntroduction() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="Book Reviews"
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
