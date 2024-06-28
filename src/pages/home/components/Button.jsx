import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-6 px-11 text-white font-inter flex items-center gap-3 bg-color1 rounded-2xl shadow-shadow1 font-semibold text-lg mt-5">
      {children}
    </button>
  );
};

export default Button;
