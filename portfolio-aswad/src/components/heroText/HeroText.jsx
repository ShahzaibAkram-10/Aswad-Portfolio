import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const HeroText = () => {

 const animate = (text) => {
   let halfValue = text.length / 2;

   return text.split("").map((char, i) => (
     <span key={i} className={i < halfValue ? "a" : "b"}>
       {char}
     </span>
   ));
 };

  const headingRef = useRef()

  // useGSAP(() => {
  //   gsap.from(headingRef.current.querySelectorAll("span"), {
  //     y: 90,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.15,
  //     ease: "power3.out",
  //   });
  // }, []);

  useGSAP(() => {
    gsap.from(".a", {
      y: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    });

    gsap.from(".b", {
      y: 80,
      opacity: 0,
      duration: 0.6,
      stagger: -0.15,
    });
  }, []);



  return (
    <>
      <h1
        ref={headingRef}
        className="portfolio absolute text-white text-8xl  top-60 left-100 text-center overflow-hidden tracking-wider font-extrabold uppercase"
      >
        {animate("Portfolio")}
      </h1>
      <h1 className="absolute text-white text-6xl top-67 left-248 text-center font-mono ml-5">
        for
      </h1>
      <h1 className="absolute text-white text-8xl top-88 left-100 text-center tracking-widest font-mono uppercase">
        Video editor
      </h1>
    </>
  );
}

export default HeroText