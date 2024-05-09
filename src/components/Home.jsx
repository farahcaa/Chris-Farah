import Section from "./Section";
import { useRef } from "react";
import twitter from "../assets/twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import pic from "../assets/portfolio_pic.png";
import { BackgroundCircles } from "../design/home";
import { ScrollParallax } from "react-just-parallax";

const Home = () => {
  const paralaxRef = useRef(null);
  return (
    <Section
      className={`bg-Bs `}
      crosses
      id="Home"
      crossescolor={false}
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div className="relative">
        <div className="flex lg:flex-row flex-col justify-center relative items-center p-10 bg-B rounded-full mx-11 ">
          <div className="">
            <img src={pic} height={400} width={300} className="rounded-full" />
          </div>
          <div className="p-7">
            <h1 className="h2  text-Bo text-wrap">
              Hi, My name is Chris Farah
            </h1>
            <p className="text-Bo">
              Student, Developer, Aspiring Chef, Gym Rat
            </p>
            <div className="inline-flex p-5">
              <div className="shadow-md border m-5 border-Black rounded-full p-5 hover:bg-Asb transition duration-300">
                <a target="_blank" href="https://twitter.com/chris_farah_">
                  <img src={twitter} />
                </a>
              </div>
              <div className="shadow-md border m-5 border-Black rounded-full p-5 hover:bg-Asb transition duration-300">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/chrisfarah/"
                >
                  <img src={Linkedin} />
                </a>
              </div>
              <div className="shadow-md border m-5 border-Black rounded-full p-5 hover:bg-Asb transition duration-300">
                <a
                  target="_blank"
                  href="https://www.instagram.com/chris_farah_/"
                >
                  <img src={Instagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <BackgroundCircles />
      </div>
    </Section>
  );
};

export default Home;
