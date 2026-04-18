import React from 'react'
import HeroVideo from '../../components/heroVideo/HeroVideo';
import HeroText from '../../components/heroText/HeroText';
import Star from '../../components/star/Star'


const Hero = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-black relative">
        <HeroVideo />
        <HeroText />
      ` <Star />
      </div>
    </>
  );
}

export default Hero