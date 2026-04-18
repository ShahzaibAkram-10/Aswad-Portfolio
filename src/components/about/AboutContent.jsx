import React from 'react'
import AboutImg from './AboutImg'
import AboutText from './AboutText'

const AboutContent = () => {
  return (
    <div className="flex w-full h-full px-30 pt-15">
      <AboutImg />
      <AboutText />
    </div>
  );
}

export default AboutContent