import Waves from "@/bg/Waves/Waves";

const Page = () => {
  return (
    <>
      <div className=" h-full flex items-center justify-center bg-white z-10 p-5 rounded-2xl shadow-xl m-[15%] flex-col gap-5">
        <div className="text-3xl flex justify-left w-full font-bold">
          Christopher Farah
        </div>
        <div className="text-sm">
          A process-focused full stack developer with experience in application
          development, backend systems, and full product lifecycles. Skilled in
          Java Spring Boot, Postgres, and React, with a strong computer science
          background and a hands-on approach to building secure, scalable
          software. Comfortable working independently or in teams, with
          knowledge of various programming languages, tools, and frameworks.
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 cursor-pointer"
          >
            Resume
          </a>
          <a
            className="underline text-blue-500 cursor-pointer"
            href="mailto:farahca@mail.uc.edu"
          >
            Contact
          </a>
          <a
            className="underline text-blue-500 cursor-pointer"
            href="https://github.com/farahcaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="underline text-blue-500 cursor-pointer"
            href="https://www.linkedin.com/in/chrisfarah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <Waves
        lineColor="#000000"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </>
  );
};

export default Page;
