import React, { useRef } from 'react'
import CreativeCloud from '../../assets/creative-cloud.png'
import Davinci from "../../assets/davinci-certificate.png";
import SocialMedia from "../../assets/social-media-certificate.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CertificateImgs = () => {

  const imgRef = useRef()

  useGSAP(() => {
    const images = imgRef.current.querySelectorAll("img");
    gsap.from(images, {
      x: 120,
      duration: 0.4,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 95%",
      },
    });
  })

  return (
    <div ref={imgRef} className='w-33 flex gap-15'>
        <img src={CreativeCloud} alt="" className='w-full rounded-full' />
        <img src={Davinci} alt="" className='w-full rounded-full' />
        <img src={SocialMedia} alt="" className='w-full rounded-full' />
    </div>
  )
}

export default CertificateImgs