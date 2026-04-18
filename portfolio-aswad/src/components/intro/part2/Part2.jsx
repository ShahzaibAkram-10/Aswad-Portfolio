import React from 'react'
import IntroPara2 from '../introText/IntroPara2';
import Contact from '../../contact/Contact';

const Part2 = () => {
  

  return (
    <div className="h-full w-full bg-white">
      <div className="pr-25 pl-10">
        <IntroPara2 />
      </div>

      <div className="w-full h-35 bg-[#6A5B77] my-25 p-5 rounded-r-[100px]">
        <Contact textColor={"white"} />
      </div>
    </div>
  );
}

export default Part2