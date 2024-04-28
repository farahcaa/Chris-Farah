import React from "react";
import Section from "./Section";
import Button from "./Button";
import MenuSvg from "../assets/MenuSvg";
import { useState } from "react";
import reactimg from "../assets/React tv.jpg";
import uc from "../assets/UC.jpg";
import web from "../assets/browser.png";
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
      crossescolor={true}
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div
        className={`${
          dropdiv
            ? "bg-Bs mx-11 rounded-full flex flex-col pl-[6rem] pt-9 pr-[5rem] mb-5 transform h-[29rem] duration-300"
            : "bg-Bs mx-11 rounded-full flex flex-col p-4 mb-5 transform h-[6rem] duration-300"
        }`}
        onClick={handleClick}
      >
        <div className="flex flex-row">
          <h2 className="h2 flex  text-white font-code">Developer</h2>
          <Button
            className={"ml-auto bg-inherit my-auto mr-4"}
            onclick={handleClick}
          >
            <MenuSvg openNavigation={dropdiv} />
          </Button>
        </div>
        <div
          className={`${
            dropdiv
              ? "flex transform duration-500"
              : "flex transform -translate-x-[100rem] duration-500 "
          }`}
        >
          <div className="flex flex-col pl-5">
            <div className="flex justify-center">
              {" "}
              <img
                src={uc}
                height={100}
                width={100}
                className="rounded-full"
              />{" "}
            </div>
            <h3 className="flex h6 overflow-wrap text-wrap">
              Currently pursuing a degree in Computer Science at the University
              of Cincinnati, where I delve into the intricacies of software
              engineering and algorithmic problem-solving.
            </h3>
          </div>
          <div>
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
          <div>
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

        {/* End of developer */}
      </div>
      <div
        className={`${
          dropdiv1
            ? "bg-Asb mx-11 rounded-full flex flex-col pl-[6rem] pt-9 pr-[5rem] mb-5 transform h-[29rem] duration-300"
            : "bg-Asb mx-11 rounded-full flex flex-col p-4 mb-5 transform h-[6rem] duration-300"
        }`}
        onClick={handleclick2}
      >
        <div className="flex flex-row">
          <h2 className="h2 flex  text-white font-code">Developer</h2>
          <Button
            className={"ml-auto bg-inherit my-auto mr-4"}
            onclick={handleclick2}
          >
            <MenuSvg openNavigation={dropdiv1} />
          </Button>
        </div>
        <div
          className={`${
            dropdiv1
              ? "flex transform duration-500"
              : "flex transform -translate-x-[100rem] duration-500 "
          }`}
        >
          <div className="flex flex-col pl-5">
            <div className="flex justify-center">
              <img src={uc} height={100} width={100} className="rounded-full" />
            </div>
            <h3 className="flex h6 overflow-wrap text-wrap">text</h3>
          </div>
          <div>
            <div className="flex justify-center mb-5">
              <img
                src={reactimg}
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>
            <h3 className="flex h6 overflow-wrap text-wrap">text</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-5">
              <img
                src={web}
                height={100}
                width={100}
                className=" bg-white rounded-full"
              />
            </div>
            <h3 className=" h6 flex overflow-wrap text-wrap m">text</h3>
          </div>
        </div>
      </div>
      {/* End of Chef */}
      <div
        className={`${
          dropdiv2
            ? "bg-Asb mx-11 rounded-full flex flex-col pl-[6rem] pt-9 pr-[5rem] mb-5 transform h-[29rem] duration-300"
            : "bg-s mx-11 rounded-full flex flex-col p-4 mb-5 transform h-[6rem] duration-300"
        }`}
        onClick={handleclick2}
      >
        <div className="flex flex-row">
          <h2 className="h2 flex  text-white font-code">Chef</h2>
          <Button
            className={"ml-auto bg-inherit my-auto mr-4"}
            onclick={handleclick3}
          >
            <MenuSvg openNavigation={dropdiv2} />
          </Button>
        </div>
        <div
          className={`${
            dropdiv2
              ? "flex transform duration-500"
              : "flex transform -translate-x-[100rem] duration-500 "
          }`}
        >
          <div className="flex flex-col pl-5">
            <div className="flex justify-center">
              {" "}
              <img
                src={uc}
                height={100}
                width={100}
                className="rounded-full"
              />{" "}
            </div>
            <h3 className="flex h6 overflow-wrap text-wrap">text</h3>
          </div>
          <div>
            <div className="flex justify-center mb-5">
              <img
                src={reactimg}
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>
            <h3 className="flex h6 overflow-wrap text-wrap">text</h3>
          </div>
          <div>
            <div className="flex justify-center items-center mb-5">
              <img
                src={web}
                height={100}
                width={100}
                className=" bg-white rounded-full"
              />
            </div>
            <h3 className=" h6 flex overflow-wrap text-wrap m">text</h3>
          </div>
        </div>
        {/* End of GymRat */}
      </div>
    </Section>
  );
};

export default About;
