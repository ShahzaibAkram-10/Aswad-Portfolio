import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const IntroTitle = () => {

  const containerRef = useRef();
  const nameRef = useRef()
  

  useGSAP(() => {
    gsap.from(nameRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 85%",
      },
    });
  }, [])
  

  useGSAP(() => {
    gsap.from(containerRef.current.querySelectorAll("h3"), {
      x: 500,
      opacity: 0,
      duration: 1.5,
      filter: "blur(2px)",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 85%",
      },
    });
  },[])

  return (
    <>
      <div ref={containerRef} className="mt-48">
        <h3
        
          className="text-[1.8rem] leading-14 select-none font-extralight text-[#F0EBE1]"
        >
          Hi, my name is
        </h3>
        <div className="overflow-hidden">
          <h2
            className="font-bold text-[3.05rem] text-white name select-none"
            ref={nameRef}
          >
            MUHAMMAD ASWAD RUSTAM
          </h2>
        </div>
        <h3
          className="text-[1.8rem] leading-14 select-none font-extralight text-[#F0EBE1]"
        >
          a Creative Video Editor!
        </h3>
      </div>
    </>
  );
}

export default IntroTitle