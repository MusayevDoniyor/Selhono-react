import React from "react";
import { Link } from "react-router-dom";

const CategoryButton = ({ isActive, onClick, children, to }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-10 font-just font-semibold py-4 transition-all duration-300 rounded-2xl text-base ${
        isActive ? "bg-[#CDA274] text-white" : "bg-inherit text-black"
      }`}
      style={{
        outline: isActive ? "none" : "inherit",
      }}
    >
      {children}
    </Link>
  );
};

export default CategoryButton;
