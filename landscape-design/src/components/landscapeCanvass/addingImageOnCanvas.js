import React from "react";

const AddingImageToCanvas = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full animate-pulse bg-slate-50">
      <p className="text-emerald-400 text-xl">Adding image to canvas</p>
      <progress className="progress w-56 bg-emerald-400 mt-3"></progress>
    </div>
  );
};

export default AddingImageToCanvas;
