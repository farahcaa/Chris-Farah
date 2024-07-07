import Section from "./Section";
import reactimg from "../assets/React tv.jpg";
import uc from "../assets/UC.jpg";

const About = () => {
  return (
    <Section
      className={`bg-B`}
      crosses
      id="About"
      crossescolor={true}
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-Bs flex items-center flex-col rounded-full h-[80vh] w-1/4 mx-10 shadow-2xl ">
          <h1 className="text-5xl mt-20  ">Student</h1>
          <p className="text-2xl mx-20 mt-10 text-center">
            I am a student at the university of Cincinnati studying computer
            science and plan on getting a MBA. I have completed IMB&apos;s
            FullStack JavaScript Developer course and have taken the courses
            Introduction to Computer Systems, Data Structures, Python
            Programming, Programming Languages and many more at UC. I am
            currently enrolled in courses at UC and in Google&apos;s UX/UI
            design course.
          </p>
          <p className="text-4xl font-bold text-center">GO BEARCATS!</p>
          <img src={uc} width={200} className="rounded-[4rem]" />
        </div>
        <div className="bg-Asb flex items-center flex-col rounded-full h-[80vh] w-1/4 mx-10 mt-52 shadow-2xl ">
          <h1 className="text-5xl mt-20  ">Developer</h1>
          <p className="text-2xl mx-20 mt-10 text-center">
            So far I have experimented with a variety of software frameworks
            with React.js, Next.js, Ionic, ReactNative, and with the databases
            MongoDB, Appwrite and Fireship. I have the most experience
            developing user interfaces from prototyping with figma to developing
            with React Although, I am always trying to sharpen my skills with
            project based work. I aspire to build high quality software
            applications and plan on a future in Fullstack development, data
            analytics or AI.
          </p>
          <p className="text-4xl font-bold text-center"></p>
          <img src={reactimg} width={200} className="rounded-[4rem]" />
        </div>
      </div>
    </Section>
  );
};

export default About;
