import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const CertificateHeading = () => {
  const headingRef = useRef();
  
    const splitText = (text) => {
      console.log(text);
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
        scale:0.6,
        filter: "blur(10px)",
        duration: 0.2,
        stagger: 0.15,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
        },
      });
    }, []);

  return (
    <div className="">
      <h2
        ref={headingRef}
        className="text-7xl font-bold uppercase pl-40 pt-25"
      >
        {splitText("Certifications")}
      </h2>
    </div>
  );
}

export default CertificateHeading