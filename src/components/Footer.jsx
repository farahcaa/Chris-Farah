import Section from "./Section";
import { links } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-Purple">
      <div className="container flex sm:justify-between justify-center items-center gap-10 bg-Purple max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {links.map((item) => (
            <a
              key={item}
              href={item.href}
              target="_blank"
              className="flex items-center justify-center w-15 h-15 bg-Bo rounded-full hover:cursor-pointer transition-colors hover:bg-n-6"
            >
              <img src={item.icon} width={40} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
