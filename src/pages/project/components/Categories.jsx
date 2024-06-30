import React, { useState, useEffect } from "react";
import TabButton from "./CategoryButton";
import { Outlet, useLocation } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState();
  const location = useLocation();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const pathArray = location.pathname.split("/");
    const currentTab = pathArray[pathArray.length - 1];
    const tabIndex = ["bathroom", "bedroom", "kitchen", "living-area"].indexOf(
      currentTab
    );
    setActiveTab(tabIndex !== -1 ? tabIndex : 0);
  }, [location.pathname]);

  return (
    <section className="w-full mx-auto -mt-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full mb-10 max-w-2xl mx-auto flex flex-wrap justify-center border border-[#CDA274] rounded-2xl p-2">
        {["Bathroom", "Bed Room", "Kitchen", "Living Area"].map(
          (tab, index) => (
            <TabButton
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
                  : "living-area"
              }
            >
              {tab}
            </TabButton>
          )
        )}
      </div>

      <Outlet />
    </section>
  );
};

export default Tabs;
