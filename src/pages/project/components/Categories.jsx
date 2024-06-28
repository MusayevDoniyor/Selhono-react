import React, { useState } from "react";
import TabButton from "./CategoryButton";
import RoomCards from "./RoomsCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="w-full mx-auto -mt-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto flex flex-wrap justify-center border border-[#CDA274] rounded-2xl p-2">
        {["Bathroom", "Bed Room", "Kitchan", "Living Area"].map(
          (tab, index) => (
            <TabButton
              key={index}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
              className="flex-1"
            >
              {tab}
            </TabButton>
          )
        )}
      </div>

      <RoomCards activeTab={activeTab} />
    </section>
  );
};

export default Tabs;
