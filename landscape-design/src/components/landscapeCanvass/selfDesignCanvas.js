import React, { useEffect, useRef, useState, Suspense } from "react";
import { fabric } from "fabric";
import PlantOptions from "./plantOptions";

const SelfDesignCanvas = (props) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null); // Add a ref for the image

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  
    // Function to add an image to the canvas
    const addImageToCanvas = (src, x, y) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        context.drawImage(img, x, y);
      };
      img.onerror = (error) => {
        console.error("Error loading image:", src, error);
      };
    };
    console.log(canvas.width, canvas.height);
    // Clear the canvas before drawing new images
    context.clearRect(0, 0, 800, 800);
  
    // Add images from props.selectedPlantOptions to the canvas
    props.selectedPlantOptions.forEach((imageSrc, index) => {
      const x = 0; // Set x position to 0 to align images to the left-hand side
      const y = index * 100; // Calculate y position based on index to stack images vertically
      console.log(imageSrc);
      addImageToCanvas(imageSrc, x, y);
    });
  }, [props.selectedPlantOptions]);
  return (
    <div className="w-full h-full relative">
      <PlantOptions
        selectedPlantOptions={props.selectedPlantOptions}
        setSelectedPlantOptions={props.setSelectedPlantOptions}
      />
      <div className="absolute w-full h-full z-10 flex justify-center items-center image-containe">
        <img
          ref={imageRef}
          src={props.generatedDesign}
          alt="Generated Design"
          className="object-cover"
          style={{ maxWidth: "75%", maxHeight: "75%" }}
        />
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 z-20"
      ></canvas>
    </div>
  );
};

export default SelfDesignCanvas;
