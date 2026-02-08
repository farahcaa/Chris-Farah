export type BlogTopic = {
  slug: string;
  title: string;
  subtitle?: string;
  // Use local images (recommended): "/images/blog/<file>.jpg"
  // Or remote images: "https://..."
  coverImage: string;
};

export const BLOG_TOPICS: BlogTopic[] = [
  {
    slug: "international-work-experience",
    title: "International Work Experience",
    subtitle: "Living + working abroad, lessons learned, culture shocks, wins.",
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "book-reviews",
    title: "Book Reviews",
    subtitle: "Notes from recent books that will comprise my take away message",
    coverImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
  },
];
