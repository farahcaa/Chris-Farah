import Section from "./Section";
import { useState } from "react";
import { send } from "emailjs-com";
import { BackgroundCircles, MobileView } from "../design/home";
const ContactMe = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_64z294l", "template_wevmplc", toSend, "1OMYQKws2ThU69vXV")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Section
      id="Contact"
      className="bg-Bo"
      customPaddings={`pt-10 lg:pt-16 xl:pt-20`}
      crosses
      crossesOffset={`lg:translate-y-[5.25rem]`}
      crossescolor={false}
    >
      <div className=" relative flex flex-col z-1 justify-center items-center pb-10">
        <div className="h-50 my-10 bg-Bo rounded-full shadow-2xl border-4 border-Purple p-5">
          <h1 className="text-Asb  text-8xl">Contact Me!</h1>
        </div>
        <div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center w-[100vh] "
          >
            <input
              className="px-5 lg:w-[40rem] w-[30rem] h-20 m-5 bg-Purple rounded-full"
              type="text"
              name="from_name"
              placeholder="  Your name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <input
              className="px-5 lg:w-[40rem] w-[30rem] h-20 m-5 rounded-full bg-Purple"
              type="text"
              name="message"
              placeholder="  Your message"
              value={toSend.message}
              onChange={handleChange}
            />
            <input
              className="px-5 lg:w-[40rem] w-[30rem] h-20 m-5 bg-Purple rounded-full"
              type="text"
              name="reply_to"
              placeholder="  Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <button
              className="rounded-full bg-Asb border border-Purple shadow-2xl p-10 text-[2rem] "
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <BackgroundCircles
          back={true}
          className={
            "absolute -z-1 -bottom-[0rem] hidden lg:block overflow-hidden -top-[4.5rem] right-0 w-full"
          }
        />
        <MobileView
          back={true}
          className={
            "absolute -z-1 -bottom-[0rem] hidden lg:block overflow-hidden -top-[4.5rem] right-0 w-full"
          }
        />
      </div>
    </Section>
  );
};

export default ContactMe;
