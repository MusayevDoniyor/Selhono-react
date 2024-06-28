import React from "react";

const Text404 = () => {
  return (
    <section className="relative right-20 -bottom-80 md:static">
      <h1 className="text-color1 font-dmserif text-[250px] leading-[312px]">
        404
      </h1>

      <p className="text-color3 font-dmserif text-4xl mb-14">
        We are sorry, but the page you <br /> requested was not found
      </p>

      <a
        href="/"
        className="shadow-shadow1 bg-color3 text-white py-6 px-14 gap-3 rounded-2xl font-jost font-semibold text-lg items-center "
      >
        Back to Home <i className="pi pi-arrow-right text-color1 pl-2"></i>
      </a>
    </section>
  );
};

export default Text404;
