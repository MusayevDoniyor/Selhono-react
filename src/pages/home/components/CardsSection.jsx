import React from "react";
import Card from "./Card";

const CardsSection = () => {
  return (
    <section className="mt-28 w-9/12 mx-auto">
      <div className="flex gap-12">
        <Card
          title={"Project Plan"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={"flex flex-col text-center"}
        ></Card>

        <Card
          title={"Interior Work"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={"flex flex-col text-center"}
        ></Card>

        <Card
          title={"Realization"}
          despription={
            "There are many variations of the passages of lorem Ipsum from available, majority."
          }
          linkName={"Read More "}
          linkUrl={"#"}
          className={"flex flex-col text-center"}
        ></Card>
      </div>
    </section>
  );
};

export default CardsSection;
