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
  major = "Software Engineering",
  hostCountry = "Germany",
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
                About Me • International Co-op Journal
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
                Hi, I’m {name} 👋
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                I’m a {major} student at {university} completing an
                international co-op experience in {hostCountry}. This page
                introduces who I am, what I’m learning, and what you’ll find
                throughout my e-portfolio.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {major}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  International Co-op • {semester}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  Host Culture Integration
                </span>
              </div>
            </div>

            {/* Photo / video placeholder */}
            <div className="w-full md:w-[320px]">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
                {/* Replace this block with an <img> or <video> */}
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="text-sm font-semibold text-slate-700">
                    Add a photo or video of you
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Replace this with:
                    <span className="block mt-1 font-mono text-xs text-slate-500">
                      {"<img src='/me.jpg' alt='Chris' />"}
                    </span>
                    or
                    <span className="block mt-1 font-mono text-xs text-slate-500">
                      {"<video src='/intro.mp4' controls />"}
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Tip: Use a professional headshot or a photo at your co-op site /
                in your host city.
              </p>
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
              <InfoRow label="Host Country" value={hostCountry} />
              <InfoRow label="Co-op Term" value={semester} />
            </div>
          </Card>

          {/* Academic pursuits */}
          <Card title="Academic Pursuits">
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <Dot />
                <span>
                  Building strong foundations in software engineering principles
                  and real-world development workflows.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Applying coursework to projects involving backend services,
                  system design, and full-stack features.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Learning through iteration: shipping, getting feedback, and
                  improving the clarity and maintainability of my work.
                </span>
              </li>
            </ul>
          </Card>

          {/* What I like to do and learn */}
          <Card title="What I Like to Do & Learn">
            <div className="flex flex-wrap gap-2">
              <Pill text="Backend development" />
              <Pill text="System design" />
              <Pill text="DevOps / CI/CD" />
              <Pill text="Building products" />
              <Pill text="Performance & debugging" />
              <Pill text="Language learning" />
              <Pill text="Exploring new cities" />
              <Pill text="Cross-cultural communication" />
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m especially motivated by work that connects people, solves real
              problems, and improves how teams build and operate software.
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
                  Building software projects that emphasize clean architecture,
                  reliability, and user-centered features.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  Developing comfort working in an international environment and
                  adapting to new cultural norms and communication styles.
                </span>
              </li>
            </ul>

            <p className="mt-4 text-xs text-slate-500">
              (We can refine this list later with your specific projects, tools,
              or wins from this semester.)
            </p>
          </Card>

          <Card title="Dreams & Future Goals (UC and Beyond)">
            <p className="text-slate-700 leading-relaxed">
              Long-term, I want to grow into a software engineer who can design
              scalable systems, lead projects end-to-end, and build products
              that positively impact communities. I’m interested in continuing
              to strengthen my communication, critical thinking, and
              cross-cultural collaboration skills—especially in global teams.
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
              This e-portfolio is my electronic journal of transitioning into a
              host culture while developing professionally on co-op. I’ll share
              reflections, challenges, and growth moments—both inside the
              workplace and in everyday life abroad.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <MiniCard
                title="Global Awareness"
                body="Reflections on cultural differences, daily life, and how my perspectives evolve."
              />
              <MiniCard
                title="Professional Development"
                body="Skills I’m building at work—communication, technical judgment, and collaboration."
              />
              <MiniCard
                title="Cross-Cultural Competency"
                body="How I navigate teamwork, feedback styles, and communication in an international setting."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Optional add:</span> Include a
                second image carousel below (workplace, host city, weekend trip,
                language meetup).
              </p>
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
