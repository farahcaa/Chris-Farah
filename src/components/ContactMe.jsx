import Section from "./Section";

const ContactMe = () => {
  return (
    <Section
      id="Projects"
      className="bg-Bo"
      crosses
      crossesOffset={`lg:translate-y-[5.25rem]`}
      crossescolor={false}
    >
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="h1 capitalize">Contact Me Section under dev</h1>
        <form></form>
      </div>
    </Section>
  );
};

export default ContactMe;
