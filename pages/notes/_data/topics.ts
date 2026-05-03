export type NoteTopic = {
  slug: string;
  title: string;
  subtitle?: string;
};

export const NOTE_TOPICS: NoteTopic[] = [
  {
    slug: "international-work-experience",
    title: "International Work Experience",
    subtitle: "Living + working abroad, lessons learned, culture shocks, wins.",
  },
  {
    slug: "book-reviews",
    title: "Book Reviews",
    subtitle: "Notes from recent books that will comprise my take away message",
  },
  {
    slug: "weight-lifting",
    title: "Weight Lifting",
    subtitle: "Training notes, progress, and things I’m learning in the gym.",
  },
];
