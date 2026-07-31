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
            First and foremost I’m an{" "}
            <strong className="font-bold text-[#f4f0e8]">engineer</strong>, but
            my interests run wider than the code. I admire entrepreneurs and the
            people who can hold a whole business in their head, so I like being
            close to every layer of building something: LLC formation and the
            groundwork that comes with it, frontend UX/UI, backend API and data
            layer design, the infrastructure underneath, and the operations and
            management that keep it all running. Anything involving{" "}
            <strong className="font-bold text-[#f4f0e8]">
              product development
            </strong>{" "}
            is where I like to work.
          </p>

          <p>
            That’s also why, after I graduate next year, I plan to pursue an{" "}
            <strong className="font-bold text-[#f4f0e8]">MBA</strong>. The
            engineering side I can keep sharpening on my own; the part I want
            formal training in is product strategy, business fundamentals, and
            decision-making at scale.
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
              I've interned at Honeywell Intelligrated on the MCBL (Machine Control Business Logic) team, working on development and documentation, and at Forschungszentrum Jülich, where I profiled and optimized CFD solvers for a 12% speedup. I also tracked down and fixed a set of memory leaks there, then built CI/CD regression and leak testing so they'd stay fixed.
            </p>

            <p>
              I designed and built <a className="decoration-[#b8ff8a] decoration-2 underline underline-offset-4 cursor-pointer hover:text-[#b8ff8a] font-bold" href="https://lexgrip.com">Lexgrip</a> <span className="text-[#9f988c]">(actively developing)</span>, a vocabulary-focused language learning app with AI tutoring. It uses FSRS (Free Spaced Repetition Scheduler) to predict the moment you're about to forget a card, and a built-in tutor that generates and caches translation, multiple-choice, and other question types on the fly. Every mistake is saved, so you can see exactly where you're weak.
            </p>

            <p>
              I'm building <a className="decoration-[#b8ff8a] decoration-2 underline underline-offset-4 cursor-pointer hover:text-[#b8ff8a] font-bold" href="https://campuscribs.org">Campus Cribs</a> <span className="text-[#9f988c]">(v1 live, v2 actively developing)</span>, one place for student housing instead of five. Sublets live in Facebook groups, roommate posts in group chats, and real listings on sites that don't understand semesters, so I put them in a single feed built for how students actually move. My first real passion project.
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
