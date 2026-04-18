import React from 'react'
import Video from "../../assets/hero-video.mp4";

const HeroVideo = () => {
  return (
    <>
      <video
        className="w-full h-full object-cover opacity-[0.2]"
        src={Video}
        autoPlay
        muted
        loop
      ></video>
    </>
  );
}

export default HeroVideo