import React from "react";
import Card from "../../home/components/Card";

const P2CardsSection = () => {
  return (
    <section className="mt-10 w-9/12 mx-auto">
      <div className="grid grid-cols-3 gap-10 gap-y-28">
        <Card
          title={"Project Plan"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={"flex flex-col text-center  hover:bg-[#F9F9F9]"}
        />

        <Card
          title={"Interior Work"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={
            "flex flex-col text-center hover:text-color1 hover:bg-[#F9F9F9]"
          }
        />

        <Card
          title={"Retail Design"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={
            "flex flex-col text-center hover:text-color1 hover:bg-[#F9F9F9]"
          }
        />

        <Card
          title={"2d/3d Art Work"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={
            "flex flex-col text-center hover:text-color1 hover:bg-[#F9F9F9]"
          }
        />

        <Card
          title={"Interior Work"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={
            "flex flex-col text-center hover:text-color1 hover:bg-[#F9F9F9]"
          }
        />

        <Card
          title={"Decoration Work"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={
            "flex flex-col text-center hover:text-color1 hover:bg-[#F9F9F9]"
          }
        />
      </div>
    </section>
  );
};

export default P2CardsSection;
