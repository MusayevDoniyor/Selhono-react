import React from "react";
import notFound from "/notFound.png";

const Image = () => {
  return (
    <div className="w-full md:w-1/2 md:pr-16">
      <img
        className="block w-full max-w-2xl mx-auto"
        src={notFound}
        alt="Not Found 404"
      />
    </div>
  );
};

export default Image;
