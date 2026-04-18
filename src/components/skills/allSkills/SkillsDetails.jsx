import React from 'react'

const SkillsDetails = ({val}) => {
  return (
    <>
      <div className="relative mb-15">
        <div className="absolute w-100 h-15 left-13 bg-[#9B97FE] rounded-full overflow-hidden">
          <span
            className="absolute top-0 left-0 h-full bg-[#6A5B77] rounded-full"
            style={{ width: `${val.value}%` }}
          ></span>
        </div>

        <h3 className="absolute flex left-130 items-center justify-center text-white text-5xl font-semibold">
          {val.value}%
        </h3>
      </div>
    </>
  );
}

export default SkillsDetails