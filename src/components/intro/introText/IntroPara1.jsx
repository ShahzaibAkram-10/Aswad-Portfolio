import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const IntroPara1 = () => {
  const overlayRef = useRef();
  const containerRef = useRef();


   useGSAP(() => {
     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: containerRef.current,
         start: "top 105%",
       },
     });

     // overlay wipe
     tl.to(overlayRef.current, {
       x: "100%",
       duration: 0.3,
       delay:0.1,
       ease: "power3.inOut",
     });

     // text reveal
     tl.from(
       containerRef.current.querySelector("p"),
       {
         opacity: 0,
         duration: 0.8,
         ease: "power3.out",
       },
       "-=0.4",
     );
   }, []);

  return (
    <>
      <div className="mt-21 select-none  relative overflow-hidden ">
        <p
          ref={containerRef}
          className="text-xl leading-10 opacity-[0.85] text-[#F0EBE1]"
        >
          I transform raw footage into captivating stories that engage, inspire,
          and leave a lasting impact. With a keen eye for detail, a strong sense
          of pacing, and mastery over editing tools, I bring visions to life—
        </p>
        <span
          ref={overlayRef}
          className="bg-white w-full h-full absolute top-0 left-0"
        ></span>
      </div>
    </>
  );
};

export default IntroPara1;
