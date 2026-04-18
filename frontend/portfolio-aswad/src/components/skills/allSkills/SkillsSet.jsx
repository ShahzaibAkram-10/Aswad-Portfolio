import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SoftwareIcons from "./SoftwareIcons";
import SkillsDetails from "./SkillsDetails";

const SkillsSet = ({ skills }) => {
  const skillsRef = useRef();

  useGSAP(() => {
    gsap.from(".skillSet", {
      y: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
      scrollTrigger: {
        trigger: skillsRef.current,
        scroller: "body",
        start: "top 135%",
      },
    });
  });

  return (
    <>
      <div className="flex flex-col gap-10 absolute top-60 left-60">
        {skills.map((val, id) => {
          return (
            <div
              key={id}
              ref={skillsRef}
              className="flex items-center skillSet"
            >
              <SoftwareIcons val={val} />
              <SkillsDetails val={val} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SkillsSet;
