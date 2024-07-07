import Section from "./Section";
import { useRef } from "react";
import pic from "../assets/portfolio_pic.png";
import { BackgroundCircles, MobileView } from "../design/home";
import { links } from "../constants";

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
            <p className="text-Bo px-5">Student, Developer</p>
            <div className="inline-flex p-2 justify-center lg:w-[20rem] w-full items-center">
              {links.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="border border-black rounded-full flex p-2 m-2 xs:m-1 xs:p-1"
                >
                  <img src={item.icon} width={50} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <BackgroundCircles
          back={true}
          className={
            "absolute -z-1 -bottom-[10rem] hidden lg:block overflow-hidden -top-[4.5rem] right-0 w-full"
          }
        />
        <MobileView back={true} />
      </div>
    </Section>
  );
};

export default Home;
