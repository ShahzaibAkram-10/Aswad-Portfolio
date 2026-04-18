import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const CertificateDetails = () => {

  const detailRef = useRef();
    
      const splitText = (text) => {
        console.log(text);
        return text.split("").map((char, i) => (
          <span key={i} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
          
        ));
    };
    
    
    
    
      useGSAP(() => {
        const letters = detailRef.current.querySelectorAll("li");
    
        gsap.from(letters, {
          x: "-50%",
          opacity: 0,
          scale:0.6,
          filter: "blur(10px)",
          duration: 0.6,
          stagger: 0.5,
          scrollTrigger: {
            trigger: detailRef.current,
            start: "top 95%",
          },
        });
      }, []);

  return (
    <div className="pl-60 pt-22">
      <ul
        ref={detailRef}
        className="list-disc text-4xl font-normal flex flex-col gap-10"
      >
        <li>{splitText("Adobe Creative Suite")}</li>
        <li>{splitText("DaVinci Resolve")}</li>
        <li>{splitText("Social Media Management")}</li>
      </ul>
    </div>
  );
}

export default CertificateDetails