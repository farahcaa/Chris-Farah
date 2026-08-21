import { NOTE_ENTRIES } from "../_data/article-entries";
import NoteArticle from "../_components/NoteArticle";

const entry = NOTE_ENTRIES.find((item) => item.id === "blog-05");

const sections = [
  {
    title: "Cheap Flights Are Mostly a Myth",
    paragraphs: entry?.content?.slice(0, 3) ?? [],
  },
  {
    title: "The Vacation Days Made It Possible",
    paragraphs: entry?.content?.slice(3, 5) ?? [],
  },
  {
    title: "Paris in Roughly 30 Hours",
    paragraphs: entry?.content?.slice(5, 7) ?? [],
  },
  {
    title: "Amsterdam and the Cookie Croissant",
    paragraphs: entry?.content?.slice(7, 10) ?? [],
  },
  {
    title: "Rome: 8/10, Watch Your Pockets",
    paragraphs: entry?.content?.slice(10, 13) ?? [],
  },
  {
    title: "Barcelona, and a Pint on the Way Home",
    paragraphs: entry?.content?.slice(13, 15) ?? [],
  },
  {
    title: "Looking Back",
    paragraphs: entry?.content?.slice(15) ?? [],
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
