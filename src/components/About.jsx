import React from "react";
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
      {/* Start Developer */}
      <div
        className={`${
          dropdiv
            ? "bg-Bo z-1 rounded-full flex flex-col  shadow-lg transform lg:h-[42rem] md:h-[85rem] sm:h-[85rem] xs:h-[85rem] duration-300"
            : "bg-Bo z-1 rounded-full flex flex-col p-4 mb-5 shadow-lg transform h-[9rem] duration-300"
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
              ? "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col transform duration-500"
              : "flex transform -translate-x-[150rem] duration-500 "
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
            ? "bg-Asb z-1 rounded-full flex flex-col  shadow-lg transform lg:h-[42rem] md:h-[85rem] sm:h-[85rem] xs:h-[85rem] duration-300"
            : "bg-Asb z-50 rounded-full flex flex-col p-4 mb-5 shadow-lg transform h-[9rem] duration-300"
        }`}
        onClick={handleclick2}
      >
        <div
          className={`flex flex-row mb-5 sm:pt-[2.25rem] xs:pt-[2.25rem] lg:pt-7 `}
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
              ? "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col transform duration-700"
              : "flex transform translate-x-[150rem] duration-700 "
          }`}
        >
          <div className="ml-[15rem] flex flex-row ">
            <div className="h-full w-full">
              <img
                className="object-cover h-full w-full"
                src={pasta}
                alt="Pasta with meat sauce"
              />
            </div>
            <div className="mr-5">
              <img
                src={Pesto}
                className="rounded-[7rem] object-cover w-[25rem] h-[30rem] transform duration-700 ease-in-out hover:w-[100rem]"
                width={900}
                height={24}
                alt="Pasta with Pesto"
              />
            </div>
            <div className="mr-5">
              <img
                className="rounded-[7rem] object-cover w-[25rem] h-[30rem] transform duration-700 ease-in-out hover:w-[100rem]"
                src={Chip}
                width={900}
                height={24}
                alt="Chipolte style bowl"
              />
            </div>
            <div className="mr-5">
              <img
                className="rounded-[7rem] object-cover w-[25rem] h-[30rem] transform duration-700 ease-in-out hover:w-[100rem]"
                src={Wrap}
                width={900}
                height={24}
                alt="Chicken Ceaser Wrap"
              />
            </div>
          </div>
          <div className="mx-[10rem]">
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
            ? "bg-Bs z-1 rounded-full flex flex-col  shadow-lg transform lg:h-[42rem] md:h-[85rem] sm:h-[85rem] xs:h-[85rem] duration-300"
            : "bg-Bs z-1 rounded-full flex flex-col p-4 mb-5 shadow-lg transform h-[9rem] duration-300"
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
              ? "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col transform duration-500"
              : "flex transform -translate-x-[150rem] duration-500 "
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
    </Section>
  );
};

export default About;
