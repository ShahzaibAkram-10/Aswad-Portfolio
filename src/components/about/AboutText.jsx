import React from 'react'
import AboutHeading from './AboutHeading'
import AboutDetails from './AboutDetails'
import Contact from '../contact/Contact'

const AboutText = () => {
  return (
    <div className="w-2/3 flex flex-col justify-between h-full py-10">
      <div className="">
        <AboutHeading />
        <AboutDetails />
      </div>
      <div className="">
        <Contact textColor={"black"} />
      </div>
    </div>
  );
}

export default AboutText