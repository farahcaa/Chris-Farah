import Section from "./Section";
import Button from "./Button";
import MenuSvg from "../assets/MenuSvg";
import { useState } from "react";
import reactimg from "../assets/React tv.jpg";
import uc from "../assets/UC.jpg";
import web from "../assets/browser.png";
import pasta from "../assets/Pasta.jpg";
import Pesto from "../assets/Pesto.jpg";
import Chip from "../assets/Chipolte.jpg";
import Wrap from "../assets/Wrap.jpg";
import punch from "../assets/punchingBag.jpg";
import Jogging from "../assets/Jog.jpg";
const About = () => {
  const [dropdiv, setdropdiv] = useState(false);
  const [dropdiv1, setdropdiv1] = useState(false);
  const [dropdiv2, setdropdiv2] = useState(false);
  const handleClick = () => {
    if (dropdiv) {
      setdropdiv(false);
    } else {
      setdropdiv(true);
    }
    2;
  };
  const handleclick2 = () => {
    if (dropdiv1) {
      setdropdiv1(false);
    } else {
      1;
      setdropdiv1(true);
    }
  };
  const handleclick3 = () => {
    if (dropdiv2) {
      setdropdiv2(false);
    } else {
      setdropdiv2(true);
    }
  };

  return (
    <Section
      className={`bg-B`}
      crosses
      id="About"
      crossescolor={true}
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      {/* Start Developer */}
      <div
        className={`${
          dropdiv
            ? "bg-Bo z-1 rounded-[5rem] flex flex-col  shadow-lg transform lg:h-[42rem] md:h-[85rem] sm:h-[85rem] xs:h-[85rem] duration-1000"
            : "bg-Bo z-1 rounded-[5rem] flex flex-col p-4 mb-5 shadow-lg transform h-[9rem] duration-1000"
        }`}
        onClick={handleClick}
      >
        <div
          className={`flex flex-row mb-5 sm:pt-[2.25rem] xs:pt-[2.25rem] lg:pt-7 `}
        >
          <h2 className={`h2 flex text-white font-code mx-auto`}>Developer</h2>
          <Button className={`bg-inherit mx-auto`} onclick={handleClick}>
            <MenuSvg openNavigation={dropdiv} />
          </Button>
        </div>
        <div
          className={`${
            dropdiv
              ? "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col transform duration-1000"
              : "flex transform -translate-x-[150rem] duration-1000 "
          }`}
        >
          <div className="flex flex-col lg:pl-5 md:ml-10 sm:px-7 xs:p-12">
            <div className="flex justify-center">
              {" "}
              <img
                src={uc}
                height={100}
                width={100}
                className="rounded-full"
              />{" "}
            </div>

            <h3 className="flex h6 px-0 overflow-wrap text-wrap">
              Currently pursuing a degree in Computer Science at the University
              of Cincinnati, where I delve into the intricacies of software
              engineering and algorithmic problem-solving.
            </h3>
          </div>
          <div className="flex flex-col lg:pl-5 md:px-12 sm:px-7 xs:p-12">
            <div className="flex justify-center mb-5">
              <img
                src={reactimg}
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>
            <h3 className="flex h6 overflow-wrap text-wrap">
              Passionate about crafting seamless user experiences, I&apos;m
              actively engaged in application development, leveraging the power
              of React and Node.js/Express to build dynamic and responsive
              solutions.
            </h3>
          </div>
          <div className="flex flex-col lg:pl-5 md:px-12 sm:px-7 xs:p-12">
            <div className="flex justify-center items-center mb-5">
              <img
                src={web}
                height={100}
                width={100}
                className=" bg-white rounded-full"
              />
            </div>
            <h3 className=" h6 flex overflow-wrap text-wrap m">
              With a repertoire of website projects under my belt and an
              eagerness to explore new horizons, I&apos;m committed to honing my
              skills and embarking on exciting ventures in web development.
            </h3>
          </div>
        </div>
      </div>
      {/* End of Developer */}
      <div
        className={`${
          dropdiv1
            ? "bg-Asb z-1 rounded-[5rem] flex flex-col  shadow-lg transform xl:h-[50rem] lg:h-[65rem] md:h-[80rem] sm:h-[80rem] xs:h-[90rem] duration-1000"
            : "bg-Asb z-50 rounded-[5rem] flex flex-col p-4 mb-5 shadow-lg transform h-[9rem] duration-1000"
        }`}
        onClick={handleclick2}
      >
        <div
          className={`flex flex-row mb-5 sm:pt-[2.25rem] xs:pt-[2.25rem] lg:pt-[rem] `}
        >
          <h2 className={`h2 flex text-white font-code mx-auto`}>
            Aspiring Chef
          </h2>
          <Button className={`bg-inherit mx-auto`} onclick={handleclick2}>
            <MenuSvg openNavigation={dropdiv1} />
          </Button>
        </div>
        <div
          className={`${
            dropdiv1
              ? "flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col transform duration-1000 h-auto"
              : "flex transform translate-x-[150rem] duration-1000 "
          }`}
        >
          <div className="ml-[130px] mx-[7rem] flex xl:flex-row lg:flex-row">
            <div className="mr-2">
              <img
                src={pasta}
                className="object-cover xl:w-[700px] lg:w-[200px] h-[500px] md:w-[200px] sm:w-[200px] xs:w-[200px] transform hover:w-[1500px] duration-1000 rounded-[120px]  "
                alt="pasta"
              />
            </div>
            <div className="mr-2">
              <img
                src={Wrap}
                className="object-cover xl:w-[700px] lg:w-[200px] h-[500px] md:w-[200px] sm:w-[200px] xs:w-[200px] transform hover:w-[1500px] duration-1000 rounded-[120px]  "
                alt="pasta"
              />
            </div>
            <div className="mr-2">
              <img
                src={Pesto}
                className="object-cover xl:w-[700px] lg:w-[200px] h-[500px] md:w-[200px] sm:w-[200px] xs:w-[200px] transform hover:w-[1500px] duration-1000 rounded-[120px]  "
                alt="pasta"
              />
            </div>
            <div className="mr-2">
              <img
                src={Chip}
                className="object-cover xl:w-[700px] lg:w-[200px] h-[500px] md:w-[200px] sm:w-[200px] xs:w-[200px] transform hover:w-[1500px] duration-1000 rounded-[120px]  "
                alt="pasta"
              />
            </div>
          </div>
          <div className="ml-[3rem] mr-[3rem]">
            <h3 className="h4 my-20">
              I&apos;m passionate about cooking up nutritious meals that are
              both delicious and good for you. It&apos;s all about using fresh
              ingredients to whip up tasty and healthy dishes. From colorful
              salads to comforting soups, I enjoy experimenting with different
              recipes to keep things interesting. Send me some good recipes!
            </h3>
          </div>
        </div>
      </div>
      {/* End of Chef */}
      <div
        className={`${
          dropdiv2
            ? "bg-Bs z-1 rounded-[5rem] flex flex-col  shadow-lg transform lg:h-[42rem] md:h-[95rem] sm:h-[100rem] xs:h-[120rem] duration-1000"
            : "bg-Bs z-1 rounded-[5rem] flex flex-col p-4 mb-5 shadow-lg transform h-[9rem] duration-1000"
        }`}
        onClick={handleclick3}
      >
        <div
          className={`flex flex-row mb-5 sm:pt-[2.25rem] xs:pt-[2.25rem] lg:pt-7 `}
        >
          <h2 className={`h2 flex text-white font-code mx-auto`}>Gym Rat</h2>
          <Button className={`bg-inherit mx-auto`} onclick={handleclick3}>
            <MenuSvg openNavigation={dropdiv2} />
          </Button>
        </div>
        <div
          className={`${
            dropdiv2
              ? "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col transform duration-1000"
              : "flex transform -translate-x-[150rem] duration-1000 "
          }`}
        >
          <div className="mx-auto xl:ml-10">
            <img
              src={punch}
              alt="punching Bag"
              className="rounded-[5rem]  object-cover w-[350px] h-[400px]"
              width={300}
            />
          </div>
          <div className="">
            <ul className="m-20 text-2xl">
              <li className="mb-5">
                I find joy in staying disiplined and lifting weights, constantly
                striving to reach new fitness goals.
              </li>
              <li className="mb-5">
                I plan on competing in a marathon run sometime this summer as
                well as reaching the 1000lbs club within the next year!
              </li>
              <li className="mb-5">
                Some of my favorite days are leg day, chest day, and arm day, as
                those are the days I see my progress inch forward.
              </li>
              <li className="mb-5">
                Maintaining my health is paramount to me, as I believe it lays
                the foundation for a fulfilling and energetic life.
              </li>
            </ul>
          </div>
          <div className="mx-auto xl:mr-10">
            <img
              src={Jogging}
              alt="punching Bag "
              className="rounded-[5rem] object-cover w-[350px] h-[400px]"
              height={400}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
