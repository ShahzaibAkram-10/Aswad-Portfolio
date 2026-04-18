import React, { useRef } from "react";
import InnerCircle from "./InnerCircle";
import CompanyLogos from "../data/CompanyLogos.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OuterCircle = ({ size, brColor }) => {
  const containerRef = useRef();

  const circles = 10;
  const radius = size / 2;
  const logos = CompanyLogos.slice(0, circles);

  useGSAP(() => {
    const items = containerRef.current.querySelectorAll(".logo-item");

    gsap.from(items, {
      scale: 0,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      filter: "blur(40px)",
      ease: "back.out(0.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: `${size}vw`,
        height: `${size}vw`,
        border: `7px solid ${brColor}`,
      }}
    >
      {logos.map((val, id) => {
        const angle = (id * 360) / circles;

        return (
          <div
            key={id}
            className="logo-item absolute top-5/10 left-5/10 rotate-30"
            style={{
              transform: `rotate(${angle}deg) translate(${radius / 1.05}vw) rotate(-${angle}deg)`,
            }}
          >
            <InnerCircle
              src={val.src}
              size={7.8}
              bgColor="white"
              top="50%"
              left="50%"
            />
          </div>
        );
      })}
    </div>
  );
};

export default OuterCircle;
