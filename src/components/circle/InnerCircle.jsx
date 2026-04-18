import React, { forwardRef } from "react";

const InnerCircle = forwardRef(
  (
    {
      size,
      bgColor,
      top = "50%",
      left = "50%",
      translateX = "-50%",
      translateY = "-50%",
      children,
      src,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className="absolute rounded-full flex items-center justify-center overflow-hidden"
        style={{
          width: `${size}vw`,
          height: `${size}vw`,
          backgroundColor: bgColor,
          top: top,
          left: left,
          transform: `translate(${translateX}, ${translateY})`,
        }}
      >
        {src && (
          <img
            src={src}
            alt=""
            className="w-full h-full object-contain -rotate-30"
          />
        )}

        {children && (
          <div className="absolute text-center text-[#6A5B77] font-bold text-3xl p-10 cursor-pointer">
            {children}
          </div>
        )}
      </div>
    );
  },
);

export default InnerCircle;
