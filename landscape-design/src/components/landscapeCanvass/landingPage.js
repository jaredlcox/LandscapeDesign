import React from "react";

const LandingPage = () => {
  return (
    <div className="z-10 m-auto w-full h-1/2 flex justify-evenly">
      {/* Text content (description) */}
      <div className="flex flex-col flex-1 ml-14 max-w-2xl">
        <h1 className="w-min p-2 rounded-md font-bold border-[#94C5CB] border-2">
          Landscaping
        </h1>
        <p className="font-bold text-md leading-relaxed md:text-6xl flex-1 text-pretty">
          Design Breathtaking Landscape Designs with Ease
        </p>
        <div className="flex-grow flex flex-col">
          <ul className="list-disc pl-5 text-lg mt-auto">
            <li>Drag and drop elements onto the canvas</li>
            <li>Customize the elements to your liking</li>
            <li>Save your designs and share them with others</li>
          </ul>
          <button className="btn btn-md bg-gradient-to-r from-emerald-400 to-emerald-300 text-white md:btn-md hidden md:flex hover:bg-black self-baseline mt-auto">
            Try now for FREE
          </button>
        </div>
      </div>

      {/* Image content */}
      <div className="flex flex-1">hello world</div>
    </div>
  );
};

export default LandingPage;
