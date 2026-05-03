import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "blog-02");
const sections = [
  {
    title: "Culture in Everyday Life",
    paragraphs: entry?.content?.slice(0, 1) ?? [],
  },
  {
    title: "Karneval",
    paragraphs: entry?.content?.slice(1, 2) ?? [],
  },
  {
    title: "Food and Daily Interactions",
    paragraphs: entry?.content?.slice(2, 4) ?? [],
  },
  {
    title: "What Stood Out",
    paragraphs: entry?.content?.slice(4) ?? [],
  },
];

export default function LocalCulture() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="International Work Experience"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
        {
          href: "/notes/transition-to-host-country",
          label: "read the previous note",
          color: "#7fd7ff",
        },
      ]}
    />
  );
}
