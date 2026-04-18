import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const WorkHeading = () => {
  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: headingRef.current,
        scroller: "body",
        start: "top 95%",
      },
    });
  });

  return (
    <div>
      <h2 ref={headingRef} className="uppercase text-7xl font-bold">My work journey</h2>
    </div>
  );
};

export default WorkHeading;
