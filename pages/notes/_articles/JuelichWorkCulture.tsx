import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "blog-03");
const sections = [
  {
    title: "The Research Center",
    paragraphs: entry?.content?.slice(0, 2) ?? [],
  },
  {
    title: "My Work",
    paragraphs: entry?.content?.slice(2, 4) ?? [],
  },
  {
    title: "Work Culture",
    paragraphs: entry?.content?.slice(4, 6) ?? [],
  },
  {
    title: "What I’m Taking Away",
    paragraphs: entry?.content?.slice(6) ?? [],
  },
];

export default function JuelichWorkCulture() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="International Work Experience"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/local-culture",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
