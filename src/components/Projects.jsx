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
      <h1 className="flex justify-center pb-5 h1 text-Bs">Projects</h1>
      <div className="flex justify-center items-center border border-black">
        <div className="flex border border-black pr-5 w-1/2 h-full ">
          <div
            href="https://banking-app-psi-amber.vercel.app/"
            className=" rounded-2xl border border-Bs overflow-hidden w-full"
          >
            <img
              src="./src/assets/HorizonImage.svg"
              className="w-full h-full "
            />
          </div>
        </div>
        <div className="flex flex-col justify-center border w-1/2 h-1/4 border-black">
          <div
            href="https://farahcaa.github.io/tailWind"
            className="w-1/2 h-[100px] overflow-hidden stretch border border-Bs rounded-2xl"
          >
            <img src="./src/assets/robot.jpg" className="w-full h-full" />
          </div>
          <div className="w-1/2 h-1/4 overflow-hidden border border-Bs rounded-2xl">
            <img src="./src/assets/robot.jpg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
