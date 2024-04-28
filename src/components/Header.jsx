import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import js from "../assets/js.png";
import { navigation } from "../constants";
import Button from "./Button.jsx";

import { useState } from "react";

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
    <div className=" fixed  w-full z-50 left-0 right-0 top-0 bg-Purple p-5 flex border-b border-B">
      <div className="flex">
        <a>
          <img src={js} width={40} height={40} />
        </a>
      </div>
      <div className="ml-auto mr-7">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={handleClick}
            className={`p-3 md:inline-flex hidden lg:inline-flex text-xl  ${
              item.url === pathname.hash
                ? "z-2 lg:text-n-1"
                : " z-2 lg:text-n-1/50"
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
      <Button
        className="ml-auto lg:hidden md:hidden transform hover:scale-110 duration-300 "
        onClick={toggleNavigation}
      >
        Menu
      </Button>
    </div>
  );
};

export default Header;
