import { collabContent, collabApps } from "../constants";
import Skill from "../assets/Skills.png";
import Section from "./Section";
import { LeftCurve, RightCurve } from "../design/Skillsdesign";

const Skills = () => {
  return (
    <Section
      id="Skills"
      className="bg-Bs"
      crosses
      crossesOffset={`lg:translate-y-[5.25rem]`}
      crossescolor={false}
    >
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Full-Stack Development Skills</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14 ">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-white">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[28rem] mt-4">
          <p className="bg-B rounded-[4.5rem] p-5 body-2 mb-8 text-Bo md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto border border-Bo shadow-2xl">
            With proficiencies spanning the front and back end I&apos;m primed
            to excel in a spectrum of development projects, from mobile
            applications to full-stack web solutions.
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square rounded-full border-Bo border -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-Bo rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.25rem] bg-Asb rounded-full ">
                <div className="flex items-center justify-center w-full h-full bg-B rounded-full">
                  <img src={Skill} width={48} height={48} alt="brainwave" />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-B border border-Asb rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={app.icon}
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
