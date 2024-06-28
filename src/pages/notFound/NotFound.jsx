import React from "react";
import Image from "./components/Image";
import Text404 from "./components/Text404";

const NotFound = () => {
  return (
    <div className="w-9/12 max-w-7xl mx-auto mt-20 flex flex-col items-center md:flex-row md:items-start">
      <Image />
      <Text404 />
    </div>
  );
};

export default NotFound;
