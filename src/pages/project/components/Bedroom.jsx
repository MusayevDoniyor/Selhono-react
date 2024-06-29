import React from "react";

const BedRoom = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row gap-12">
      <div className="items-center">
        <img src="/house1.png" alt="Room 1" className="w-full h-auto" />
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
        <img src="/house2.png" alt="Room 2" className="w-full h-auto" />
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
  );
};

export default BedRoom;
