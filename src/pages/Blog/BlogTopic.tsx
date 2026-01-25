import { Link, useParams, useNavigate } from "react-router";
import { BLOG_TOPICS } from "@/pages/Blog/topics";

type BlogEntryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type BlogEntry = {
  id: string;
  topicSlug: string;
  title: string;
  dateISO: string;
  body: string[];
  images?: BlogEntryImage[]; // 0..N
};

const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: "iwe-001",
    topicSlug: "international-work-experience",
    title: "Landing in a New Country (and Not Knowing Anything)",
    dateISO: "2026-01-10",
    images: [
      {
        src: "https://images.unsplash.com/photo-1520975958225-5f5f6d6a3f8b?auto=format&fit=crop&w=1600&q=80",
        alt: "Train station / travel vibe",
      },
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        alt: "People collaborating",
      },
    ],
    body: [
      "I expected the technical work to be the hard part. Turns out the hard part was everything around it: paperwork, transit, grocery runs, and learning how people communicate at work.",
      "The biggest lesson: keep your process simple. Write down what you learn daily, build checklists, and don’t assume you’ll remember details when you’re tired.",
    ],
  },
  {
    id: "book-001",
    topicSlug: "somefunny-book-line",
    title: "A Quote That Had No Right Being That Accurate",
    dateISO: "2026-01-15",
    images: [
      {
        src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
        alt: "Open book on a table",
      },
    ],
    body: [
      "I was reading, minding my business, and a line jumped out that basically called me out personally.",
      "My takeaway: when something feels “too true,” write it down and build an action from it. Reflection without action is just entertainment.",
    ],
  },
];

function formatDate(dateISO: string) {
  const [y, m, d] = dateISO.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

function EntryImagesRow({ images }: { images: BlogEntryImage[] }) {
  // On desktop: show images on the right in a compact row.
  // On mobile: this whole block is moved to the bottom by parent layout.
  return (
    <div className="flex items-center justify-end gap-3">
      {images.slice(0, 3).map((img, idx) => (
        <div
          key={`${img.src}-${idx}`}
          className="h-14 w-20 sm:h-16 sm:w-24 overflow-hidden rounded-xl border border-black/5"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
      {images.length > 3 && (
        <div className="text-xs text-slate-500 whitespace-nowrap">
          +{images.length - 3}
        </div>
      )}
    </div>
  );
}

function EntryCard({ entry }: { entry: BlogEntry }) {
  const images = entry.images ?? [];

  return (
    <article className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
      <div className="p-6">
        {/* HEADER ROW (desktop): title/date left, images right.
            On mobile: images go to bottom (separate block below). */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold tracking-tight">
              {entry.title}
            </h2>
            <time className="mt-1 block text-xs text-slate-500">
              {formatDate(entry.dateISO)}
            </time>
          </div>

          {/* Desktop / tablet images at top right */}
          {images.length > 0 && (
            <div className="hidden sm:block shrink-0">
              <EntryImagesRow images={images} />
            </div>
          )}
        </div>

        {/* BODY */}
        <div className="mt-4 flex flex-col gap-3">
          {entry.body.map((p, idx) => (
            <p
              key={`${entry.id}-p-${idx}`}
              className="text-slate-700 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Mobile images at bottom */}
        {images.length > 0 && (
          <div className="mt-5 sm:hidden">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <figure
                  key={`${entry.id}-mimg-${idx}`}
                  className="shrink-0 w-[220px]"
                >
                  <div className="overflow-hidden rounded-xl border border-black/5">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-[140px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-2 text-xs text-slate-500">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function BlogTopic() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const topic = BLOG_TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-black/5 p-6">
          <div className="text-xl font-semibold">Topic not found</div>
          <p className="mt-2 text-slate-600">That page doesn’t exist.</p>
          <Link to="/blog" className="mt-4 inline-block underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const entries = BLOG_ENTRIES.filter((e) => e.topicSlug === topic.slug).sort(
    (a, b) => (a.dateISO < b.dateISO ? 1 : -1),
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/5">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => navigate("/blog")}
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              ← Back to Blog
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              Home →
            </button>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            {topic.title}
          </h1>
          {topic.subtitle && (
            <p className="mt-2 text-slate-600 max-w-2xl">{topic.subtitle}</p>
          )}
        </div>
      </header>

      {/* Entries */}
      <main className="mx-auto max-w-4xl px-6 py-10 pb-16">
        {entries.length === 0 ? (
          <div className="rounded-2xl border border-black/5 p-6">
            <div className="text-lg font-semibold">No posts yet</div>
            <p className="mt-2 text-slate-600">
              Add entries to{" "}
              <code className="px-1 py-0.5 bg-black/5 rounded">
                BLOG_ENTRIES
              </code>{" "}
              for this topic.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {entries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
