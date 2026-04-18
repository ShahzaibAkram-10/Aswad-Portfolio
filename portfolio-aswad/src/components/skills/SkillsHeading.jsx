import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const SkillsHeading = () => {

  const headingRef = useRef()

  useGSAP(() => {
    gsap.from(".skillsHeading", {
      scale: 0.6,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: headingRef.current,
        scroller: 'body',
        start: 'top 95%',
      }
    });
  })

  return (
    <div className='absolute top-20 w-full '>
      <h2 ref={headingRef} className="skillsHeading absolute text-white text-7xl font-bold uppercase pl-40">Softwares Proficiency</h2>
    </div>
  );
}

export default SkillsHeading