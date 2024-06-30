import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import { useLocation, useParams } from "react-router-dom";
import RoomCards from "./Cards";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const { category } = useParams();
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="w-full mx-auto -mt-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full mb-10 max-w-2xl mx-auto flex flex-wrap justify-center border border-[#CDA274] rounded-2xl p-2">
        {["Bathroom", "Bed Room", "Kitchen", "Living Area"].map(
          (tab, index) => (
            <CategoryButton
              key={index}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
              className="flex-1"
              to={
                index === 0
                  ? "bathroom"
                  : index === 1
                  ? "bedroom"
                  : index === 2
                  ? "kitchen"
                  : "livingarea"
              }
            >
              {tab}
            </CategoryButton>
          )
        )}
      </div>

      <RoomCards
        category={["bathroom", "bedroom", "kitchen", "livingarea"][activeTab]}
      />
    </section>
  );
};

export default Tabs;
