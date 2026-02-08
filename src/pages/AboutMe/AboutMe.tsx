import React from "react";

type AboutMeProps = {
  name?: string;
  university?: string;
  major?: string;
  hostCountry?: string;
  semester?: string;
};

export default function AboutMePage({
  name = "Chris",
  university = "University of Cincinnati",
  major = "Computer Science",
  semester = "Spring 2026",
}: AboutMeProps) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Page container */}
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        {/* Header */}
        <header className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-slate-500">
                About Me
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
                Hi, I’m {name} 👋
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                I’m a {major} student at {university} completing an
                international co-op experience in Germany. This page introduces
                who I am, what I’m learning, and what you’ll find throughout my
                e-portfolio.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {major}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  International Co-op • {semester}
                </span>
              </div>
            </div>

            {/* Photo / video placeholder */}
            <div className="w-full md:w-[320px]">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
                <img src="/HeadShot.JPG" alt="Chris" />
              </div>
            </div>
          </div>
        </header>

        {/* Content grid */}
        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Background */}
          <Card title="Background">
            <p className="text-slate-700 leading-relaxed">
              I’m a student software engineer who enjoys building practical
              systems and learning how real teams ship reliable software. I’m
              interested in backend development, API design, and infrastructure
              that helps products scale.
            </p>

            <div className="mt-4 grid gap-3">
              <InfoRow label="University" value={university} />
              <InfoRow label="Major" value={major} />

              <InfoRow label="Co-op Term" value={semester} />
            </div>
          </Card>

          {/* Academic pursuits */}
          <Card title="Academic Pursuits">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <Dot />
                <span>
                  Developing full-stack engineering skills across frontend,
                  backend, and infrastructure, with a focus on building
                  reliable, production-ready systems.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Applying technical coursework to real projects involving
                  system design, APIs, databases, and scalable application
                  architecture.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Complementing my technical background with MBA studies,
                  focusing on product strategy, business fundamentals, and
                  decision-making at scale.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Learning through iteration: shipping, getting feedback, and
                  continuously improving the clarity, performance, and
                  maintainability of my work.
                </span>
              </li>
            </ul>
          </Card>
          {/* What I like to do and learn */}
          <Card title="What I Like to Do & Learn">
            <div className="flex flex-wrap gap-2">
              {/* Technical interests */}
              <Pill text="Backend development" />
              <Pill text="System design" />
              <Pill text="DevOps / CI/CD" />
              <Pill text="Performance & debugging" />
              <Pill text="Building products" />

              {/* Personal interests */}
              <Pill text="Weight lifting & fitness" />
              <Pill text="Reading" />
              <Pill text="Socializing" />
              <Pill text="Language learning" />
              <Pill text="Exploring new cities" />
              <Pill text="Cross-cultural communication" />
            </div>

            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m driven by curiosity and discipline. I like figuring out how
              things work and sticking with them long enough to actually get
              good.
            </p>
          </Card>
        </section>

        {/* Accomplishments + Dreams */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="Accomplishments I’m Proud Of">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <Dot />
                <span>
                  Gaining professional experience through co-ops and learning
                  how to contribute effectively on engineering teams.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Designing and building a full-stack application end-to-end,
                  taking it from idea to a working platform and iterating on it
                  based on real constraints.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Working on performance-critical scientific software, profiling
                  runtime behavior, and making targeted optimizations based on
                  real measurements.
                </span>
              </li>
            </ul>
          </Card>

          <Card title="Dreams & Future Goals (UC and Beyond)">
            <p className="text-slate-700 leading-relaxed">
              Long-term, I want to grow into a software engineer who can design
              scalable systems, lead projects end-to-end, and build products
              that positively impact communities.
            </p>

            <div className="mt-4 grid gap-3">
              <GoalLine
                title="Career Direction"
                body="Backend / systems-focused software engineering with strong collaboration skills."
              />
              <GoalLine
                title="Professional Growth"
                body="Become stronger at explaining technical work, making decisions with tradeoffs, and shipping maintainable solutions."
              />
              <GoalLine
                title="Global Learning"
                body="Build confidence navigating daily life and workplace culture in my host country."
              />
            </div>
          </Card>
        </section>

        {/* Portfolio intro */}
        <section className="mt-6">
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              What You’ll Find in This Learning Portfolio
            </h2>

            <p className="mt-3 text-slate-700 leading-relaxed">
              This e-portfolio is a running record of my time in my host
              country, what I’m learning at work, how I’m adapting to a new
              environment, and the experiences that stand out along the way.
              It’s part reflection, part documentation, and part personal log of
              things I find interesting or worth thinking about.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <MiniCard
                title="Work & Learning"
                body="What I’m working on, skills I’m developing, and lessons learned from real engineering work."
              />
              <MiniCard
                title="Life in the Host Country"
                body="Everyday experiences, cultural differences, and moments that shape how I see things."
              />
              <MiniCard
                title="Reflections & Curiosities"
                body="Challenges, observations, and ideas that stick with me, both technical and personal."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-sm text-slate-700">
                This portfolio isn’t meant to be polished or exhaustive. It’s a
                place to capture progress, mistakes, and growth as they happen.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Continue Exploring
            </h2>

            <p className="mt-3 text-slate-700 leading-relaxed">
              The blog is where I share more detailed notes and reflections on
              my work, experiences, and things I find interesting while living
              and working abroad. Entries are informal and honest, focused on
              learning as it happens.
            </p>

            <div className="mt-6">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
              >
                Visit the Blog
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 pb-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {name} • {university}
          </p>
        </footer>
      </div>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-7">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{body}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-sm font-semibold text-slate-600">{label}</div>
      <div className="text-sm text-slate-800 text-right">{value}</div>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
      {text}
    </span>
  );
}

function Dot() {
  return (
    <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-slate-400" />
  );
}

function GoalLine({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700">{body}</div>
    </div>
  );
}
