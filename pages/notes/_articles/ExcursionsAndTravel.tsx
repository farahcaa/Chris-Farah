import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "blog-05");

const sections = [
  {
    title: "Coming Soon",
    paragraphs: entry?.content ?? [],
  },
];

export default function ExcursionsAndTravel() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="International Work Experience"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/local-exploration",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
