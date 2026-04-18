import React, { useRef } from "react";

import Phone from "./Phone";
import Email from "./Email";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = ({ textColor }) => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
      },
    });
    tl.from(containerRef.current.querySelectorAll(".contact-heading"), {
      x: -200,
      opacity: 0,
      duration: 0.6,
      filter: "blur(4px)",
      ease: "power3.out",
    });
    tl.from(
      containerRef.current.querySelectorAll(".contact-item"),
      {
        x: (i) => (i % 2 === 0 ? -150 : 150),
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        filter: "blur(4px)",
        ease: "back.out(2)",
      },
      "-=0.3",
    );
  }, []);

  return (
    <div ref={containerRef}>
      <h4
        className={`text-4xl uppercase font-semibold tracking-wide select-none contact-heading`}
        style={{ color: textColor }}
      >
        contact info:
      </h4>
      <div
        className={`flex gap-10 px-10 text-2xl mt-4`}
        style={{ color: textColor }}
      >
        <div className="contact-item">
          <Phone textColor={textColor} />
        </div>

        <div className="contact-item">
          <Email textColor={textColor} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
