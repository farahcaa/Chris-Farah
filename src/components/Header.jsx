import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Developer from "../assets/Developer.png";
import { navigation } from "../constants";
import Button from "./Button.jsx";

import { useState } from "react";
import MenuBackdrop from "../design/header.jsx";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className=" fixed  w-full z-2 left-0 right-0 top-0 bg-Purple p-5 flex border-b border-B">
      <div className="flex sm:items-center xs:items-center">
        <a className="pl-7">
          <img src={Developer} width={40} height={40} />
        </a>
      </div>
      <nav
        className={`${
          openNavigation ? "flex " : "hidden"
        } fixed top-[5rem] left-0 right-0 bottom-0 lg:static xl:flex lg:flex lg:ml-auto`}
      >
        
        <div className="ml-auto static z-5 flex lg:flex-row items-center justify-center md:flex-col sm:flex-col xs:flex-col w-full">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`p-3 md:inline-flex  z-5 text-white lg:inline-flex text-xl  ${
                item.url === pathname.hash
                  ? "z-2 lg:text-n-1"
                  : " z-2 lg:text-n-1/50"
              }
              ${
                openNavigation
                  ? "rounded-full bg-B px-5 my-2 text-Bo justify-center"
                  : ""
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <MenuBackdrop openNav={openNavigation} />
      </nav>
      <Button
        className="ml-auto lg:hidden transform hover:scale-110 duration-300 "
        onClick={toggleNavigation}
      >
        Menu
      </Button>
    </div>
  );
};

export default Header;
