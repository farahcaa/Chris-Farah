import Waves from "@/bg/Waves/Waves";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden w-full">
      {/* Waves: pinned behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 blur-[1px]">
        <Waves
          lineColor="#000000"
          backgroundColor="rgba(255, 255, 255, 0)"
          waveSpeedX={0.012}
          waveSpeedY={0.01}
          waveAmpX={26}
          waveAmpY={12}
          friction={0.9}
          tension={0.01}
          maxCursorMove={60}
          xGap={14}
          yGap={44}
        />
      </div>

      {/* Top nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-xl mx-auto">
        <div className="text-lg font-semibold">Christopher Farah</div>

        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:underline">
            About me
          </a>
          <a href="/blog" className="hover:underline">
            Blog
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-20 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-xl rounded-2xl bg-white/85 backdrop-blur-md shadow-sm ring-1 ring-black/5 p-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Full-stack software engineer.
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            I build clean, scalable applications with a strong focus on backend
            systems, data, and full product lifecycles.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Java · Spring Boot · PostgreSQL · React · Kubernetes
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Resume
            </a>
            <a href="mailto:farahca@mail.uc.edu" className="underline">
              Email
            </a>
            <a
              href="https://github.com/farahcaa"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chrisfarah/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
