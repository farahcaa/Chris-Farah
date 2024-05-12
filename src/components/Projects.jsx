import Section from "./Section";

const Projects = () => {
  return (
    <Section
      id="Projects"
      className="bg-B"
      crosses
      crossesOffset={`lg:translate-y-[5.25rem]`}
      crossescolor={true}
    >
      <div className="flex flex-col justify-center items-center text-Bo">
        <h1 className="h1 capitalize">Project Section under dev</h1>
        <a
          className="text-Bs text-[2rem] p-10 underline"
          target="_blank"
          href="https://farahcaa.github.io/tailWind"
        >
          Project 1 react website
        </a>
      </div>
    </Section>
  );
};

export default Projects;
