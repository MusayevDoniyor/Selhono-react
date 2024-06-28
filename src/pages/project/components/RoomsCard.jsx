import React from "react";
import room1 from "/house1.png";
import room2 from "/house2.png";

const RoomCards = ({ activeTab }) => {
  return (
    <div className="p-4 mt-8">
      {activeTab === 0 && (
        <div className="mx-auto flex gap-12">Content for Tab 1</div>
      )}
      {activeTab === 1 && (
        <div className="mx-auto flex flex-col md:flex-row gap-12">
          <div className="items-center">
            <img src={room1} alt="Room 1" className="w-full h-auto" />

            <div className="flex justify-between mt-5 items-center">
              <span>
                <strong className="font-dmserif text-color3 text-2xl tracking-wider">
                  Minimal Bedroom
                </strong>
                <br />
                <span className="text-color2 font-jost text-xl tracking-wider">
                  Decor / Architecture
                </span>
              </span>

              <span className="bg-[#F4F0EC] rounded-full py-4 cursor-pointer px-5 text-color3 text-lg">
                <i className="pi pi-angle-right"></i>
              </span>
            </div>
          </div>

          <div>
            <img src={room2} alt="Room 2" className="w-full h-auto" />

            <div className="flex justify-between mt-5 items-center">
              <span>
                <strong className="font-dmserif text-color3 text-2xl tracking-wider">
                  Minimal Bedroom
                </strong>
                <br />
                <span className="text-color2 font-jost text-xl tracking-wider">
                  Decor / Architecture
                </span>
              </span>

              <span className="bg-[#F4F0EC] rounded-full py-4 cursor-pointer px-5 text-color3 text-lg">
                <i className="pi pi-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="mx-auto flex gap-12">Content for Tab 3</div>
      )}
      {activeTab === 3 && (
        <div className="mx-auto flex gap-12">Content for Tab 4</div>
      )}
    </div>
  );
};

export default RoomCards;
