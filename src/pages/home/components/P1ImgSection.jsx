import React from "react";
import HeadingP1 from "./HeadingP1";
import Paragraph from "./Paragraph";
import Button from "./Button";

const BgImgContainer = () => {
  return (
    <section className="w-9/12 mx-auto h-screen ">
      <div className="bg-bg-image h-full w-full bg-cover bg-center rounded-radius1">
        <div className="pt-24 pl-6 h-full">
          <HeadingP1>
            Let's make your <br /> home beautiful together
          </HeadingP1>
          <Paragraph>
            There are many variations of the passages <br /> of lorem Ipsum
            available, majority.
          </Paragraph>
          <Button>
            Get Started <i className="pi pi-arrow-right text-white"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BgImgContainer;
