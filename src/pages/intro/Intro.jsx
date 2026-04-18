import React from "react";
import IntroImg from "../../components/aswadImgs/IntroImg";
import Part1 from "../../components/intro/part1/Part1";
import Part2 from "../../components/intro/part2/Part2";

const Intro = () => {
  return (
    <div className="w-full h-screen flex bg-black pl-30 py-10 pt-40 relative">
      <div className="w-3/5">
          <Part1 />
      </div>
      <IntroImg />
    </div>
  );
};

export default Intro;
