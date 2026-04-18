import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const WorkPara = () => {

    const paraRef = useRef();

  useGSAP(() => {
    gsap.from(paraRef.current, {
      y: 150,
      opacity: 0,
      duration: 0.6,
      filter: "blur(2px)",
      scrollTrigger: {
        trigger: paraRef.current,
        scroller: "body",
        start: "top 85%",
      },
    });
  });

  return (
    <div className="overflow-hidden">
      <p
        ref={paraRef}
        className="text-5xl w-[95%] mt-20 tracking-wider leading-14 font-sans pl-5"
      >
        By clicking on the button{" "}
        <b className="font-bold">“Click Here To see video”</b> You are able to
        see the video I have shooted & edited.
      </p>
    </div>
  );
};

export default WorkPara;
