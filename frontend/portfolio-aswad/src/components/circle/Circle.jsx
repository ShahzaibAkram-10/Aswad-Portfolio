import React from 'react'
import InnerCircle from './InnerCircle'
import OuterCircle from './OuterCircle';

const Circle = () => {
  return (
    <div className="relative w-3/6 bg-indigo-9000 flex justify-center items-center mt-20 mr-5 ">
      <OuterCircle size={30} brColor={"#F0EBE1"} />
      <InnerCircle
        size={15}
        bgColor={"#F0EBE1"}
        top="50%"
        left="50%"
        translateX="-50%"
        translateY="-50%"
      >
        Click Here To Review My Work
      </InnerCircle>
      
    </div>
  );
}

export default Circle