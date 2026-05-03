import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "lifting-01");
const sections = [
  {
    title: "Coming Soon",
    paragraphs: entry?.content ?? [],
  },
];

export default function WeightLifting() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="Weight Lifting"
      sections={sections}
      footerLinks={[
        { href: "/notes", label: "go back to notes", color: "#ffcf6e" },
      ]}
    />
  );
}
