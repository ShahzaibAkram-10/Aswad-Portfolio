import React from 'react'
import SkillsSet from './SkillsSet';
import Pr from "../../../assets/primer-pro.png";
import Dv from "../../../assets/davinci.png";
import Af from "../../../assets/after-effect.png";
import Cc from "../../../assets/capcut.png";


const AllSkills = () => {

  let skills = [
    {
      img: Pr,
      value:100
    },
    {
      img: Dv,
      value:90
    },
    {
      img: Af,
      value:80
    },
    {
      img: Cc,
      value:100
    },
  ];
    
  return (
    <div className="">
      <SkillsSet skills={ skills } />
    </div>
  );
}

export default AllSkills