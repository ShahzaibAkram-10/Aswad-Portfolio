import React from 'react'
import SkillsBG from '../../components/skills/SkillsBG'
import SkillsHeading from '../../components/skills/SkillsHeading'
import AllSkills from '../../components/skills/allSkills/AllSkills'

const Skills = () => {
  return (
    <div className="bg-black relative">
      <SkillsBG />
      <SkillsHeading />
      <AllSkills />
    </div>
  );
}

export default Skills