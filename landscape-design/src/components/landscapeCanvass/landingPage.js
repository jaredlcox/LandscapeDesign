import React, { useState, useEffect } from "react";

const IMAGES = [
  "https://images.pexels.com/photos/8031882/pexels-photo-8031882.jpeg",
  "https://cdn.reimaginehome.ai/prod/gen/b1ff4639-68b5-4cb6-8e81-3ceeaa3a45ed.png",
  "https://cdn.reimaginehome.ai/prod/gen/63007d8b-4f42-4dea-a7d0-f4f95a3b1696.png",
  "https://cdn.reimaginehome.ai/prod/gen/824ff19c-62e5-4f38-bcb6-d1fba1179342.png",
];

const SlideshowText = ({ currentIndex }) => {
  const text = currentIndex === 0 ? "Original" : "AI Generated";
  return (
    <div className="top-5 left-6 absolute bg-white p-3 text-emerald-400 font-bold rounded-lg">
      {text}
    </div>
  );
};

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="z-10 w-full h-screen sm:h-full flex flex-col xl:flex-row justify-around p-2 xl:p-0 items-center overflow-y-auto">
      <TextContent />
      <ImageContent currentIndex={currentIndex} />
    </div>
  );
};

const TextContent = () => (
  <div className="flex flex-col ml-0 md:ml-14 max-w-2xl justify-center sm:min-h-min sm:h-auto items-center xl:items-start">
    <div className="flex justify-center xl:justify-start">
      <h1 className="w-min p-2 rounded-md font-bold border-[#55a1ac] border-2 bg-white md:bg-transparent">
        Landscaping
      </h1>
    </div>
    <p className="font-bold text-xl leading-relaxed md:text-6xl text-pretty text-center xl:text-left p-5 md:p-0 md:pt-5 md:pb-5">
      Design Breathtaking Landscape Designs with Ease
    </p>
    <ul className="list-disc pl-5 text-lg mt-auto space-y-2 sm:pb-5">
      <li>Drag and drop elements onto the canvas</li>
      <li>Customize the elements to your liking</li>
      <li>Save your designs and share them with others</li>
    </ul>
    <ActionButton />
  </div>
);

const ImageContent = ({ currentIndex }) => (
  <div className="flex flex-col max-w-7xl xl:p-10 h-1/2 xl:h-full justify-center w-full">
    <div className="mockup-window bg-base-300 border h-5/6 xl:h-5/6 w-full">
      <div className="bg-[#95C5CC] flex justify-center h-full relative">
        <img
          id="slideshow"
          src={IMAGES[currentIndex]}
          alt="Slideshow"
          className="w-full h-full object-cover"
        />
        <SlideshowText currentIndex={currentIndex} />
      </div>
    </div>
    <ActionButton isHiddenOnDesktop={true} />
  </div>
);

const ActionButton = ({ isHiddenOnDesktop = false }) => (
  <button
    onClick={() => document.getElementById("my_modal_2").showModal()}
    className={`${
      isHiddenOnDesktop ? "flex sm:hidden" : "hidden sm:flex"
    } btn btn-md bg-gradient-to-r from-emerald-400 to-emerald-300 text-white md:btn-md hover:bg-black xl:self-baseline mt-5`}
  >
    Try now for FREE
  </button>
);

export default LandingPage;
