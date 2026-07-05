import { NOTE_ENTRIES } from "./_data/article-entries";
import { NOTE_TOPICS } from "./_data/topics";

function formatDate(dateISO: string) {
  const [year, month, day] = dateISO.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getEntryHref(topicSlug: string, entryId: string) {
  const noteRoutes: Record<string, string> = {
    "blog-01": "/notes/transition-to-host-country",
    "blog-02": "/notes/local-culture",
    "blog-03": "/notes/juelich-work-culture",
    "blog-04": "/notes/local-exploration",
    "book-01": "/notes/reading-introduction",
    "book-02": "/notes/managing-rental-properties",
    "book-03": "/notes/essential-scrum",
    "book-04": "/notes/the-mom-test",
    "lifting-01": "/notes/weight-lifting",
  };

  return noteRoutes[entryId] ?? `/blog/${topicSlug}/${entryId}`;
}

export default function NotesIndex() {
  return (
    <main className="min-h-screen bg-[#10100f] text-[#f4f0e8]">
      <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="mb-8 text-sm font-semibold text-[#b8ff8a]">Notes</p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Here are my notes on things I’m reading, building, and learning.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#d8d1c4]">
          <p>
            Some are quick snapshots. Some are longer reflections. They’re
            mostly here so I can keep track of what is actually sticking with me
            over time.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {NOTE_TOPICS.map((topic) => {
            const entries = NOTE_ENTRIES.filter(
              (entry) => entry.topicSlug === topic.slug,
            ).sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

            return (
              <section key={topic.slug}>
                <h2 className="text-2xl font-bold leading-tight">
                  {topic.title}
                </h2>

                {topic.subtitle && (
                  <p className="mt-3 text-base leading-7 text-[#9f988c]">
                    {topic.subtitle}
                  </p>
                )}

                {entries.length > 0 ? (
                  <ul className="mt-6 space-y-4">
                    {entries.map((entry) => (
                      <li key={entry.id} className="leading-7">
                        <a
                          href={getEntryHref(topic.slug, entry.id)}
                          className="font-bold text-[#f4f0e8] decoration-[#ffcf6e] decoration-2 underline underline-offset-4 transition-colors hover:text-[#ffcf6e]"
                        >
                          {entry.title}
                        </a>
                        <time className="ml-3 text-sm text-[#9f988c]">
                          {formatDate(entry.dateISO)}
                        </time>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-[#9f988c]">Nothing here yet.</p>
                )}
              </section>
            );
          })}
        </div>

        <p className="mt-16 border-t border-[#2a2a27] pt-8 text-lg leading-8 text-[#d8d1c4]">
          You can{" "}
          <a
            href="/"
            className="font-bold text-[#f4f0e8] decoration-[#b8ff8a] decoration-2 underline underline-offset-4 transition-colors hover:text-[#b8ff8a]"
          >
            head home
          </a>{" "}
          or{" "}
          <a
            href="/about"
            className="font-bold text-[#f4f0e8] decoration-[#7fd7ff] decoration-2 underline underline-offset-4 transition-colors hover:text-[#7fd7ff]"
          >
            read about me
          </a>
          .
        </p>
      </article>
    </main>
  );
}
