import React from 'react'
import SkillsBg from "../../assets/skillsBG.jpg"

const SkillsBG = () => {
  return (
    <div className="w-full h-screen">
      <img
        src={SkillsBg}
        alt=""
        className="w-full h-full object-cover absolute"
      />
      <span className="w-full h-full bg-linear-to-r from-black from-40% to-[#ffffff00] absolute opacity-[0.85]"></span>
    </div>
  );
}

export default SkillsBG