import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Phone = ({ textColor }) => {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://wa.me/923180402905?text=Hi%20I%20want%20to%20work%20with%20you"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-400 hover:text-${textColor}`}
        style={{ color: textColor }}
      >
        <FaWhatsapp className="cursor-pointer" />
        <p>+92 318 040 2905</p>
      </a>
    </div>
  );
};

export default Phone;
