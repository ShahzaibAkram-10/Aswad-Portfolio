
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Email = ({ textColor }) => {
  const email = "aswadrustam11@gmail.com";
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent("Hi I want to work with you");
  

  return (
    <a
      href={`mailto:${email}?subject=${subject}&body=${body}`}
      className={`flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-400 hover:text-${textColor}`}
      style={{ color: textColor }}
    >
      <MdOutlineEmail className="text-3xl" />
      <p>{email}</p>
    </a>
  );
};

export default Email;
