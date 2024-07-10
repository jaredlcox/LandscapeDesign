import React from "react";

const LandingPage = () => {
  return (
    <div className="z-10 w-full h-screen sm:h-full flex flex-col xl:flex-row justify-around p-2 xl:p-0 items-center overflow-y-auto ">
      {/* Text content (description) */}
      <div className="flex flex-col ml-0 md:ml-14 max-w-2xl justify-center sm:min-h-min sm:h-auto items-center xl:items-start">
        <div className="flex justify-center xl:justify-start">
          <h1 className="w-min p-2 rounded-md font-bold border-[#55a1ac] border-2 bg-white md:bg-transparent">
            Landscaping
          </h1>
        </div>
        <p className="font-bold text-xl leading-relaxed md:text-6xl text-pretty text-center xl:text-left p-5 md:p-0 md:pt-5 md:pb-5">
          Design Breathtaking Landscape Designs with Ease
        </p>
        <div className="flex-grow flex flex-col md:pt-0">
          <ul className="list-disc pl-5 text-lg mt-auto space-y-2 sm:pb-5">
            <li>Drag and drop elements onto the canvas</li>
            <li>Customize the elements to your liking</li>
            <li>Save your designs and share them with others</li>
          </ul>
          <button className="hidden sm:flex btn btn-md bg-gradient-to-r from-emerald-400 to-emerald-300 text-white md:btn-md hover:bg-black xl:self-baseline mt-auto">
            Try now for FREE
          </button>
        </div>
      </div>

      {/* Image content */}
      <div className="flex flex-col max-w-7xl xl:p-10 h-1/2 xl:h-full justify-center w-full">
        <div className="bg-white h-5/6 xl:h-5/6 w-full rounded-md flex relative">
          <div className="absolute top-0 left-0 p-2 flex">
            <div className="h-3 w-3 rounded-full bg-[#E5FCF7]"></div>
            <div className="ml-2 mr-2 h-3 w-3 rounded-full bg-[#E5FCF7]"></div>
            <div className="h-3 w-3 rounded-full bg-[#E5FCF7]"></div>
          </div>
        </div>
        <button
          onClick={() => {
            document.getElementById("my_modal_2").showModal();
          }}
          className="flex sm:hidden btn btn-md bg-gradient-to-r from-emerald-400 to-emerald-300 text-white md:btn-md hover:bg-black xl:self-baseline mt-5"
        >
          Try now for FREE
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
