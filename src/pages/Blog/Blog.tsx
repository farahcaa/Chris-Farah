import { useNavigate } from "react-router";
import { BLOG_TOPICS } from "./topics";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header w/ back home + title */}
      <header className="border-b border-black/5">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => navigate("/")}
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              ← Home
            </button>

            <div className="text-right">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Blog
              </h1>
              <p className="mt-1 text-sm text-slate-600">school & life.</p>
            </div>
          </div>
        </div>
      </header>

      {/* List */}
      <main className="mx-auto max-w-4xl px-6 py-10 pb-16">
        <div className="flex flex-col gap-5">
          {BLOG_TOPICS.map((t) => (
            <button
              key={t.slug}
              onClick={() => navigate(`/blog/${t.slug}`)}
              className="group w-full text-left rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* image */}
                <div className="relative w-full sm:w-[260px] h-[160px] sm:h-[150px] overflow-hidden shrink-0">
                  <img
                    src={t.coverImage}
                    alt={t.title}
                    className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                {/* content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-lg font-semibold">{t.title}</div>
                    {t.subtitle && (
                      <div className="mt-1 text-sm text-slate-600 line-clamp-2">
                        {t.subtitle}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="underline underline-offset-4">Read</span>
                    <span className="opacity-60 group-hover:opacity-100 transition">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
