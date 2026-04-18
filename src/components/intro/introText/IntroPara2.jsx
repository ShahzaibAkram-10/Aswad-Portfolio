import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const IntroPara2 = () => {
  const containerRef = useRef();
  const overlayRef = useRef();

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
    <div
      ref={containerRef}
      className="paraDiv w-full h-full relative overflow-hidden"
    >
      <p className="text-black text-xl leading-10 mt-1 select-none relative z-10">
        whether it’s promotional content, social media videos, cinematic
        projects, or corporate storytelling.
        <br /> I’m passionate about blending creativity with strategy, making
        every frame count, and turning concepts into visually compelling
        narratives. Let’s create videos that not only look amazing but truly
        connect with audiences.
      </p>

      {/* Animation Overlay */}
      <span
        ref={overlayRef}
        className="bg-black w-full h-full absolute top-0 left-0"
      ></span>
    </div>
  );
};

export default IntroPara2;
