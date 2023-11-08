// import React from "react";
import gsap from "gsap";
import logo from "../../assets/my-logo.jpeg";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const tl = gsap.timeline();
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    // console.log();
    tl.to("#logo", {
      //   duration: 2,
      scale: 1,
    }).to("#logo", {
      left: "-100px",
    });
    tl.to(headingRef.current, {
      left: document.getElementById("white")?.clientWidth,
    });

    tl.to(headingRef.current, {
      top: document.getElementById("logo")?.offsetTop
        ? document?.getElementById("logo")?.offsetTop + 13
        : 0,
    });

    tl.to(subHeadingRef.current, {
      left: document.getElementById("white")?.clientWidth,
    });
  });

  return (
    <nav className="flex px-40 py-3 border-b border-primary-500 relative h-screen justify-center items-center overflow-visible">
      <div
        className="w-1/2 h-screen absolute top-0 left-0 z-10 bg-primary-100"
        id="white"
      ></div>
      <img
        src={logo}
        className="h-1/5 w-auto relative rounded-full z-50 scale-[2]"
        alt="logo"
        id="logo"
      />

      <h1 className="absolute z-0 text-5xl left-0 font-bold" ref={headingRef}>
        Md. Shakib Mia
      </h1>

      <h1 className="absolute z-0 text-5xl left-0 mt-20" ref={subHeadingRef}>
        MERN Stack Developer
      </h1>
    </nav>
  );
};

export default Navbar;
