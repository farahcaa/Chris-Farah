const Page = () => {
  return (
    <div className="min-h-screen bg-[#10100f] text-[#f4f0e8]">
      <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-6 py-16 sm:px-8">
        <p className="mb-8 text-sm font-semibold text-[#b8ff8a]">
          Christopher Farah
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          I’m a{" "}
          <a
            href="/about"
            className="decoration-[#b8ff8a] decoration-2 underline underline-offset-4 transition-colors hover:text-[#b8ff8a]"
          >
            full-stack software engineer
          </a>{" "}
          building practical, durable software.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#d8d1c4]">
          <p>
            I work across backend systems, product surfaces, and deployment
            pipelines. Lately I’ve been focused on{" "}
            <strong className="font-bold text-[#f4f0e8]">Java</strong>,{" "}
            <strong className="font-bold text-[#f4f0e8]">Spring Boot</strong>,{" "}
            <strong className="font-bold text-[#f4f0e8]">PostgreSQL</strong>,
            React, and Kubernetes.
          </p>

          <p>
            I write notes about software, learning, and the parts of engineering
            that become easier when the abstractions are honest. You can{" "}
            <a
              href="/notes"
              className="font-bold text-[#f4f0e8] decoration-[#ffcf6e] decoration-2 underline underline-offset-4 transition-colors hover:text-[#ffcf6e]"
            >
              read my notes
            </a>
            , see what I’m{" "}
            <a
              href="https://github.com/farahcaa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#f4f0e8] decoration-[#7fd7ff] decoration-2 underline underline-offset-4 transition-colors hover:text-[#7fd7ff]"
            >
              building on GitHub
            </a>
            , or grab my{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#f4f0e8] decoration-[#ff9bb3] decoration-2 underline underline-offset-4 transition-colors hover:text-[#ff9bb3]"
            >
              resume
            </a>
            .
          </p>

          <p>
            Reach me by{" "}
            <a
              href="mailto:farahca@mail.uc.edu"
              className="font-bold text-[#f4f0e8] decoration-[#b8ff8a] decoration-2 underline underline-offset-4 transition-colors hover:text-[#b8ff8a]"
            >
              email
            </a>{" "}
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/chrisfarah/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#f4f0e8] decoration-[#7fd7ff] decoration-2 underline underline-offset-4 transition-colors hover:text-[#7fd7ff]"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
