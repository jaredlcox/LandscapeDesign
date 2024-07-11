import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

const ImageSlider = (props) => {
  return (
    <div className="flex h-full justify-center items-center p-0 sm:p-2 bg-slate-100">
      {!props.confirm && (
        <div className="bg-white p-10 pb-0 rounded-md shadow-none sm:shadow-xl flex flex-col justify-between h-[400px] sm:h-[600px]">
          <ImgComparisonSlider>
            <img
              slot="first"
              src={props.selectedImage.src}
              className="w-full h-full"
            />
            <img
              slot="second"
              src={props.generatedDesign}
              className="w-full h-[250px] sm:h-[400px] "
            />
          </ImgComparisonSlider>
          <div className="flex justify-between mt-5 mb-5">
            <button
              onClick={() => {
                props.setRegenerate(true);
                props.setGeneratedDesign(null);
              }}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-500 hover:bg-red-300 text-white"
            >
              Regenerate
            </button>
            <button
              onClick={() => {
                props.setConfirm(true);
              }}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500 text-white hover:bg-green-300"
            >
              Looks Good
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageSlider;
