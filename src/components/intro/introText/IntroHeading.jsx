import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const IntroHeading = () => {
  const headingRef = useRef();

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useGSAP(() => {
    const letters = headingRef.current.querySelectorAll("span");

    gsap.from(letters, {
      x: 100,
      opacity: 0,
      scale:0.5,
      filter: "blur(10px)",
      duration: 0.5,
      stagger: 0.15,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div>
      <h2
        ref={headingRef}
        className="text-9xl font-semibold uppercase opacity-[0.7] text-white absolute top-25 overflow-hidden"
      >
        {splitText("My introduction")}
      </h2>
    </div>
  );
};

export default IntroHeading;
