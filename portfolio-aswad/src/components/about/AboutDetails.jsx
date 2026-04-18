import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const AboutDetails = () => {

  const paraRef = useRef();


  useGSAP(() => {
    const letters = paraRef.current;

    gsap.from(letters, {
      x: '-100%',
      opacity: 0,
      filter: "blur(5px)",
      duration: 0.8,
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <p
        ref={paraRef}
        className="text-black text-3xl leading-9 select-none w-3/4 pt-10 pl-5"
      >
        I’m the editor who blends storytelling with strategy so your videos
        don’t just look sleek, they perform. From snappy social cuts to
        cinematic brand pieces, I shape pacing, sound,and visuals to keep
        attention and drive action. I’m fast, collaborative, and
        detail‑obsessed, with a track record of turning raw footage into content
        teams are proud to share.
      </p>
    </div>
  );
};

export default AboutDetails;
