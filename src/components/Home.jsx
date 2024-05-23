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
            <p className="text-Bo px-5">
              Student, Developer, Aspiring Chef, Gym Rat
            </p>
            <div className="inline-flex p-5">
              {links.map((item) => {
                <a key={item.id} href={item.href} className="border p-5 m-5">
                  <img src={item.icon} width={50} />
                </a>;
              })}
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
