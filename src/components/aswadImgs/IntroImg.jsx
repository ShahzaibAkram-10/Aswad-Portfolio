import React from 'react'
import AswadImg from "../../assets/aswad.png";

const IntroImg = () => {
  return (
    <>
      <div className="w-3/5 relative">
        <div className="h-full w-full">
          <img
            className="absolute h-240 w-full right-6 dragImg"
            src={AswadImg}
            alt="My Image"
          />
        </div>
      </div>
    </>
  );
}

export default IntroImg