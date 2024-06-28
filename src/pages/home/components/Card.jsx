import React, { useState } from "react";

const Card = ({ title, despription, linkName, linkUrl, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-white rounded-lg p-6 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "background-color 0.3s, color 0.3s",
        backgroundColor: isHovered ? "#F9F9F9" : "white",
        color: isHovered ? "#CDA274" : "inherit",
      }}
    >
      <h3 className="font-dmserif text-2xl">{title}</h3>
      <p
        className="font-jost text-xl text-color2 py-10"
        style={{
          color: isHovered ? "#CDA274" : "#4D5053",
        }}
      >
        {despription}
      </p>
      <a
        href={linkUrl}
        className="flex items-center justify-center font-jost text-lg font-semibold"
        style={{
          color: isHovered ? "#CDA274" : "#4C4C4C",
        }}
      >
        {linkName} <i className="pi pi-arrow-right"></i>
      </a>
    </div>
  );
};

export default Card;
