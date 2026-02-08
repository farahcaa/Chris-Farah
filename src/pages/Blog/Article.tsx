import { Link, useNavigate, useParams } from "react-router";
import { BLOG_TOPICS } from "@/pages/Blog/topics";
import { BLOG_ENTRIES, BlogEntryImage } from "./article-entries";

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

function ArticleImages({ images }: { images: BlogEntryImage[] }) {
  if (images.length === 0) return null;

  const [hero, ...rest] = images;

  return (
    <section className="mt-8">
      {/* Hero */}
      <figure className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
        <img
          src={hero.src}
          alt={hero.alt}
          className="w-full h-[320px] sm:h-[520px] object-cover"
          loading="lazy"
        />
        {hero.caption && (
          <figcaption className="px-6 py-4 text-xs text-slate-500">
            {hero.caption}
          </figcaption>
        )}
      </figure>

      {/* Gallery */}
      {rest.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {rest.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
              {img.caption && (
                <figcaption className="px-5 py-3 text-xs text-slate-500">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

function ArticleBody({ content }: { content?: string[] }) {
  if (!content || content.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6">
        <div className="text-lg font-semibold">Draft in progress</div>
        <p className="mt-2 text-slate-600">Add content to this article.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {content.map((paragraph, idx) => (
        <p key={idx} className="mb-6 last:mb-0 text-slate-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function BlogArticle() {
  const navigate = useNavigate();
  const { slug, id } = useParams();

  const topic = BLOG_TOPICS.find((t) => t.slug === slug);
  const entry = BLOG_ENTRIES.find((e) => e.id === id);

  // Validate both exist AND entry belongs to topic slug
  const isValid = !!topic && !!entry && entry.topicSlug === topic.slug;

  if (!isValid) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-black/5 p-6 bg-white">
          <div className="text-xl font-semibold">Article not found</div>
          <p className="mt-2 text-slate-600">
            That post doesn’t exist (or it’s not under this topic).
          </p>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => navigate("/blog")}
              className="underline underline-offset-4 text-sm"
            >
              Back to Blog
            </button>
            {slug && (
              <button
                onClick={() => navigate(`/blog/${slug}`)}
                className="underline underline-offset-4 text-sm"
              >
                Back to Topic
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Build prev/next within same topic (sorted newest -> oldest)
  const siblings = BLOG_ENTRIES.filter((e) => e.topicSlug === topic!.slug)
    .slice()
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

  const idx = siblings.findIndex((e) => e.id === entry!.id);
  const newer = idx > 0 ? siblings[idx - 1] : null;
  const older = idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const images = entry!.images ?? [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/5">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => navigate(`/blog/${topic!.slug}`)}
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              ← Back to Topic
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              Home
            </button>
          </div>

          <div className="mt-5">
            <div className="text-xs text-slate-500">
              <Link to="/blog" className="hover:underline underline-offset-4">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <Link
                to={`/blog/${topic!.slug}`}
                className="hover:underline underline-offset-4"
              >
                {topic!.title}
              </Link>
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              {entry!.title}
            </h1>

            <div className="mt-2 flex items-center gap-3">
              <time className="text-sm text-slate-500">
                {formatDate(entry!.dateISO)}
              </time>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-sm text-slate-600">{topic!.title}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-10 pb-16">
        <ArticleImages images={images} />
        <ArticleBody content={entry!.content} />

        {/* Prev/Next */}
        {(newer || older) && (
          <section className="mt-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {newer ? (
                <Link
                  to={`/blog/${topic!.slug}/${newer.id}`}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:opacity-90"
                >
                  <div className="text-xs text-slate-500">Newer</div>
                  <div className="mt-1 font-semibold">{newer.title}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {formatDate(newer.dateISO)}
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {older ? (
                <Link
                  to={`/blog/${topic!.slug}/${older.id}`}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:opacity-90"
                >
                  <div className="text-xs text-slate-500">Older</div>
                  <div className="mt-1 font-semibold">{older.title}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {formatDate(older.dateISO)}
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>
          </section>
        )}

        {/* Footer actions */}
        <section className="mt-12 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate(`/blog/${topic!.slug}`)}
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            ← Back to Topic
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            Back to top ↑
          </button>
        </section>
      </main>
    </div>
  );
}
