const linkClass =
  "font-bold text-[#f4f0e8] decoration-2 underline underline-offset-4 transition-colors";

export default function About() {
  return (
    <main className="min-h-screen bg-[#10100f] text-[#f4f0e8]">
      <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="mb-8 text-sm font-semibold text-[#b8ff8a]">About</p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Hi, I’m Chris. I’m a{" "}
          <span className="decoration-[#b8ff8a] decoration-2 underline underline-offset-4">
            developer
          </span>{" "}
          studying Computer Science at the University of Cincinnati.
        </h1>

        <div className="mt-10 space-y-7 text-lg leading-8 text-[#d8d1c4]">
          <p>
            I build software across backend systems, product surfaces, and the
            infrastructure that helps applications feel reliable in the real
            world. I’m also completing an internship abroad in{" "}
            <strong className="font-bold text-[#f4f0e8]">Germany</strong>{" "}
            during{" "}
            <strong className="font-bold text-[#f4f0e8]">Spring 2026</strong>,
            which has become a useful way to stretch how I work, communicate,
            and learn.
          </p>

          <p>
            My technical interests sit around{" "}
            <strong className="font-bold text-[#f4f0e8]">
              backend development
            </strong>
            , API design, system design, DevOps, CI/CD, debugging, and building
            products that can survive real constraints. I like work where the
            details matter and the system has to become clearer over time.
          </p>

          <p>
            Academically, I’m building full-stack engineering skills across
            frontend, backend, databases, and infrastructure. After I graduate
            next year, I plan to pursue an MBA to deepen how I think about
            product strategy, business fundamentals, and decision-making at
            scale.
          </p>

          <p>
            Outside of software, I’m drawn to discipline and momentum:
            weightlifting, reading, language learning, socializing, and
            exploring new cities.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold leading-tight">
            Things I’m proud of
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-[#d8d1c4]">
            <p>
              I’ve gained professional experience through co-ops and learned how
              to contribute on real engineering teams, where communication and
              reliability matter as much as the code itself.
            </p>

            <p>
              I’ve designed and built a full-stack application end-to-end,
              taking it from idea to working platform and improving it against
              actual constraints.
            </p>

            <p>
              I’ve also worked on performance-critical scientific software,
              profiling runtime behavior and making targeted optimizations based
              on real measurements instead of guesses.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold leading-tight">
            Where I’m heading
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-[#d8d1c4]">
            <p>
              Long-term, I want to become the kind of software engineer who can
              design scalable systems, lead projects end-to-end, and build
              products that positively affect communities.
            </p>

            <p>
              I’m aiming toward backend and systems-focused engineering, while
              getting better at explaining technical work, weighing tradeoffs,
              and shipping maintainable solutions with other people.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-[#2a2a27] pt-8">
          <p className="text-lg leading-8 text-[#d8d1c4]">
            You can{" "}
            <a href="/" className={`${linkClass} decoration-[#b8ff8a] hover:text-[#b8ff8a]`}>
              head home
            </a>
            ,{" "}
            <a
              href="/notes"
              className={`${linkClass} decoration-[#ffcf6e] hover:text-[#ffcf6e]`}
            >
              read my notes
            </a>
            , or{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} decoration-[#ff9bb3] hover:text-[#ff9bb3]`}
            >
              open my resume
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
