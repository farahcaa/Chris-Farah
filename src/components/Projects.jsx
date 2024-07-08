import Section from "./Section";
import Farahandsons from "../assets/Farahandsonsweb.png";
import robot from "../assets/robot.jpg";
import horizon from "../assets/HorizonImage.svg";
import mobileapp from "../assets/Mobileapp.png";
const Projects = () => {
  const backgroundimg = {
    backgroundImage: `url(${horizon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  };
  const backgroundimg2 = {
    backgroundImage: `url(${robot})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  };
  const backgroundimg3 = {
    backgroundImage: `url(${Farahandsons})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  };
  const backgroundimg4 = {
    backgroundImage: `url(${mobileapp})`,
    backgroundSize: "",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <Section
      id="Projects"
      className="bg-B"
      crosses
      crossesOffset={`lg:translate-y-[5.25rem]`}
      crossescolor={true}
    >
      <h1 className="flex justify-center pb-5 h1 text-Bs ">Projects</h1>
      <div className="flex justify-center items-center md:flex-row xs:flex-col m-5 mx-20">
        <div
          className="xs:w-full md:w-1/2 h-[50vh] xs:mt-5 md:m-5 rounded-3xl hover:border-4 hover:border-Bs"
          style={backgroundimg}
        >
          <div className=" rounded-3xl hover:border-4 hover:border-bs group flex hover:backdrop-blur-lg  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-Black font-semibold flex xs:text-xl xl:text-5xl justify-center pt-10">
              Horizon
            </h1>
            <p className="invisible group-hover:visible text-Black xs:text-lg xl:text-3xl justify-center xs:px-0 lg:px-10 2xl:p-10 text-center">
              This Project is a Webapplication built using Next.js React.js and
              Tailwind CSS. It features analytics from sentry, Use of Dwolla and
              Plaid to connect authorized users and allow them to transfer
              money, and Appwrite as the database.{" "}
            </p>
            <a
              href="https://banking-app-psi-amber.vercel.app/sign-in"
              target="_blank"
              className="invisible group-hover:visible text-Asb underline font-semibold xs:text-xl lg:text-3xl justify-center xl:p-0 xs:p-10 text-center hover:cursor-pointer"
            >
              Link to website!
            </a>
          </div>
        </div>
        <div
          className="xs:w-full md:w-1/2 h-[50vh] xs:mt-5 md:m-5 rounded-3xl hover:border-4 hover:border-Bs"
          style={backgroundimg2}
        >
          <div className=" rounded-3xl hover:border-4 hover:border-bs group flex hover:backdrop-blur-lg  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-white font-semibold flex xs:text-xl lg:text-5xl justify-center pt-10">
              BrainWave
            </h1>
            <p className="invisible group-hover:visible text-white xs:text-lg lg:text-3xl justify-center p-10 text-center">
              This Project is a Website built using React.js and Tailwind CSS.
              It features designs using the Paralax library.
            </p>
            <a
              href="https://farahcaa.github.io/tailWind/"
              target="_blank"
              className="invisible group-hover:visible text-Asb underline font-semibold xs:text-xl lg:text-3xl justify-center md:p-10 lg:p-0 text-center hover:cursor-pointer"
            >
              Link to website!
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row xs:flex-col justify-center items-center m-5 mx-20">
        <div
          className="xs:w-full md:w-1/2 h-[50vh] xs:mt-5 md:m-5 rounded-3xl hover:border-4 hover:border-Bs"
          style={backgroundimg3}
        >
          <div className=" rounded-3xl hover:border-4 hover:border-bs group flex hover:backdrop-blur-lg  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-Black font-semibold flex xs:text-xl lg:text-5xl justify-center pt-10">
              FarahandSons
            </h1>
            <p className="invisible group-hover:visible text-Black xs:text-lg lg:text-3xl justify-center xs:p-10 lg:p-0 text-center">
              This Project is a Website built for Farahandsons construction
              company. It was built using react.js and Tailwind CSS.
            </p>
            <a
              href="https://farahcaa.github.io/farahandsonsv2/"
              target="_blank"
              className="invisible group-hover:visible text-Black underline font-semibold xs:text-xl lg:text-3xl justify-center md:p-10 lg:p-0 text-center hover:cursor-pointer"
            >
              Link to website!
            </a>
          </div>
        </div>
        <div
          className="xs:w-full md:w-1/2 h-[50vh] xs:mt-5 md:m-5 rounded-3xl hover:border-4 hover:border-Bs"
          style={backgroundimg4}
        >
          <div className=" rounded-3xl hover:border-4 hover:border-bs group flex hover:backdrop-blur-lg  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-Black font-semibold flex xs:text-xl lg:text-5xl justify-center pt-10">
              Research.ai
            </h1>
            <p className="invisible group-hover:visible text-Black xs:text-lg xl:text-3xl justify-center xs:px-0 lg:px-10 2xl:p-10 text-center">
              This Project is a Mobile app built with ionic with firebase as the
              database. It features an AI chat bot to help with research by
              finding data and citing its sources. Currently under development!
            </p>
            <p className="invisible group-hover:visible text-Black  font-semibold xs:text-xl lg:text-3xl justify-center xs:p-10 lg:p-0 text-center ">
              Available in the app store soon 🤞🏽
            </p>
          </div>
        </div>
      </div>
      <h1 className="flex justify-center items-center pb-5 h1 text-center text-Bs ">
        Checkout all my work on Github!
      </h1>
    </Section>
  );
};

export default Projects;
