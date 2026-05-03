import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "blog-01");
const sections = [
  {
    title: "Arriving in Germany",
    paragraphs: entry?.content?.slice(0, 2) ?? [],
  },
  {
    title: "Cologne, Bonn, and First Impressions",
    paragraphs: entry?.content?.slice(2, 5) ?? [],
  },
  {
    title: "Language and Everyday Wins",
    paragraphs: entry?.content?.slice(5, 7) ?? [],
  },
  {
    title: "Food, Adjustment, and What Comes Next",
    paragraphs: entry?.content?.slice(7) ?? [],
  },
];

export default function TransitionToHostCountry() {
  return (
    <NoteArticle
      entry={entry}
      eyebrow="International Work Experience"
      sections={sections}
    />
  );
}
