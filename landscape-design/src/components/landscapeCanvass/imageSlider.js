import React, { useState } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

const ImageSlider = (props) => {
  return (
    <div className="flex h-full justify-center items-center p-0 sm:p-2 bg-slate-100">
      {!props.confirm && (
        <div className="bg-white p-10 pb-0 rounded-md shadow-none sm:shadow-xl flex flex-col justify-between">
          <ImgComparisonSlider>
            <img
              slot="first"
              src={props.selectedImage.src}
              style={{ width: "100%", height: "100%" }}
            />
            <img
              slot="second"
              src={props.generatedDesign}
              style={{ width: "100%", height: "100%" }}
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
      {props.confirm && (
        <div className="flex flex-col justify-center items-center h-full w-full animate-pulse bg-slate-50">
          <p className="text-emerald-400 text-xl">Adding Image to Canvas</p>
          <progress className="progress w-56 bg-emerald-400 mt-3"></progress>
        </div>
      )}
    </div>
  );
};
export default ImageSlider;
