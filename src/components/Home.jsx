import Section from "./Section";
import { useRef } from "react";
import twitter from "../assets/twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import pic from "../assets/portfolio_pic.png";
import { BackgroundCircles, MobileView } from "../design/home";

const Home = () => {
  return (
    <Section
      className={`bg-Bs`}
      crosses
      id="Home"
      crossescolor={false}
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div className="relative z-1">
        <div className="flex lg:flex-row flex-col justify-center relative items-center p-10 bg-B rounded-full mx-11 ">
          <div className="">
            <img src={pic} height={400} width={300} className="rounded-full" />
          </div>
          <div className="p-7">
            <h1 className="h2 px-5 text-Bo text-wrap">
              Hi, My name is Chris Farah
            </h1>
            <p className="text-Bo px-5">
              Student, Developer, Aspiring Chef, Gym Rat
            </p>
            <div className="inline-flex p-5">
              <div className="shadow-md border m-5 p-3 border-Black rounded-full hover:curosr-pointer">
                <a
                  target="_blank"
                  href="https://twitter.com/chris_farah_"
                  className="p-10"
                >
                  <img src={twitter} />
                </a>
              </div>
              <div className="shadow-md border m-5 p-3 border-Black rounded-full hover:curosr-pointer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/chrisfarah/"
                  className="p-10"
                >
                  <img src={Linkedin} />
                </a>
              </div>
              <div className="shadow-md border m-5 p-3 border-Black rounded-full hover:curosr-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/chris_farah_/"
                  className="p-10"
                >
                  <img src={Instagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <BackgroundCircles back={true} />
        <MobileView back={true} />
      </div>
    </Section>
  );
};

export default Home;
