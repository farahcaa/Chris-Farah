import { useEffect, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { background, Mobile } from "../constants";

export const BackgroundCircles = ({ parallaxRef, back }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`absolute -z-1 -bottom-[10rem] hidden lg:block -top-[4.5rem]  w-full `}
    >
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        <div className="absolute -left-[10rem] bottom-0 w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[5rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[10rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[15rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[20rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[25rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[30rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[35rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[40rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -left-[10rem] bottom-[45rem] w-0.25  origin-bottom ">
          <ul className="inline-flex">
            {background.map((item) => (
              <li className="px-7" key={item.id}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </MouseParallax>
    </div>
  );
};
export const MobileView = ({ back }) => {
  return (
    <div
      className={`absolute -z-50 -bottom-[3rem] top-0 lg:hidden xs:block sm:block w-full`}
    >
      <ScrollParallax isAbsolutelyPositioned>
        <div className="absolute bottom-[7rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[13rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[18rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[23rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[28rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[33rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[38rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[43rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[48rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[53rem] h-5">
          <ul className="inline-flex ">
            {Mobile.map((item) => (
              <li className="px-7" key={item.it}>
                <div
                  className={`w-1 h-6 ${
                    back ? "bg-B" : "bg-Bs"
                  } rotate-[35deg] transition-transform duration-500 ease-out `}
                />
              </li>
            ))}
          </ul>
        </div>
      </ScrollParallax>
    </div>
  );
};
