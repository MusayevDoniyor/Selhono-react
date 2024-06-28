import React from "react";

const CategoryButton = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 font-just font-semibold py-4 transition-all duration-300 rounded-2xl text-base  ${
        isActive ? "bg-[#CDA274] text-white" : "bg-inherit text-black"
      }`}
      style={{
        outline: isActive ? "none" : "inherit",
      }}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
