import React, { useState, useEffect, useRef } from "react";
import CanvassTopNavBar from "./canvassTopNavBar";
import ImagePrompt from "./imagePrompt";
import AddBackgroundImageModalContent from "./addBackgroundImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the correct icons
import LandingPage from "./landingPage";

const LandscapeCanvass = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [changingImage, setChangingImage] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState(null);
  const gridRef = useRef(null);
  const contentsRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current || !contentsRef.current) {
      return;
    }

    const grid = gridRef.current;
    const contents = contentsRef.current;
    const gridSize = grid.getBoundingClientRect();

    let panningAllowed = false;
    let zoomFactor = 1;

    const translate = { scale: zoomFactor, translateX: 0, translateY: 0 };
    const initialContentsPos = { x: 0, y: 0 };
    const pinnedMousePosition = { x: 0, y: 0 };
    const mousePosition = { x: 0, y: 0 };

    const mousedown = (event) => {
      initialContentsPos.x = translate.translateX;
      initialContentsPos.y = translate.translateY;
      pinnedMousePosition.x = event.clientX;
      pinnedMousePosition.y = event.clientY;
      panningAllowed = true;
    };

    const mousemove = (event) => {
      mousePosition.x = event.clientX;
      mousePosition.y = event.clientY;
      if (panningAllowed) {
        const diffX = mousePosition.x - pinnedMousePosition.x;
        const diffY = mousePosition.y - pinnedMousePosition.y;
        translate.translateX = initialContentsPos.x + diffX;
        translate.translateY = initialContentsPos.y + diffY;
      }
      update();
    };

    const mouseup = (event) => {
      panningAllowed = false;
    };

    const zoom = (event) => {
      const zoomSpeed = 500; // Decrease this value to make zoom faster
      const newZoomFactor = zoomFactor - event.deltaY / zoomSpeed;

      if (newZoomFactor < 0.4) {
        // Only check for minimum zoom level
        return;
      }

      const oldZoomFactor = zoomFactor;
      zoomFactor = newZoomFactor;

      mousePosition.x = event.clientX - gridSize.x;
      mousePosition.y = event.clientY - gridSize.y;

      // Calculations
      translate.scale = zoomFactor;

      const contentMousePosX = mousePosition.x - translate.translateX;
      const contentMousePosY = mousePosition.y - translate.translateY;
      const x =
        mousePosition.x - contentMousePosX * (zoomFactor / oldZoomFactor);
      const y =
        mousePosition.y - contentMousePosY * (zoomFactor / oldZoomFactor);

      translate.translateX = x;
      translate.translateY = y;

      update();
    };

    const update = () => {
      const matrix = `matrix(${translate.scale},0,0,${translate.scale},${translate.translateX},${translate.translateY})`;
      contents.style.transform = matrix;
    };

    // addStuffToContents();
    grid.addEventListener("wheel", zoom);
    grid.addEventListener("mousedown", mousedown);
    grid.addEventListener("mousemove", mousemove);
    grid.addEventListener("mouseup", mouseup);

    return () => {
      grid.removeEventListener("wheel", zoom);
      grid.removeEventListener("mousedown", mousedown);
      grid.removeEventListener("mousemove", mousemove);
      grid.removeEventListener("mouseup", mouseup);
    };
  }, [showLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [selectedImage]);

  const Circle = ({
    size = 400,
    color = "#568EA3",
    top = -200,
    left = -200,
    opacity = 0.5,
    zIndex = 2,
  }) => {
    // Define styles for the circle
    const styles = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color, // Ensure `color` is a valid CSS color value
      top: top,
      left: left,
      opacity: opacity,
      zIndex: zIndex,
    };

    return (
      <div
        className="hidden md:flex rounded-full absolute"
        style={styles}
      ></div>
    );
  };

  return (
    <div
      className={`flex flex-col relative h-screen w-screen ${
        (showLoading || selectedImage) && "overflow-hidden"
      }`}
    >
      <CanvassTopNavBar
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setChangingImage={setChangingImage}
      />
      {!selectedImage && (
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex flex-col p-0 h-screen w-screen max-h-screen max-w-full rounded-none sm:rounded-lg sm:h-5/6 sm:w-[450px]">
            <form
              method="dialog"
              className="flex items-center justify-between py-2 px-4"
            >
              <div className="flex space-x-3 items-center">
                <button>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <p>Add Background Image</p>
              </div>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost text-xl">
                ✕
              </button>
            </form>
            <div className="flex grow ">
              <AddBackgroundImageModalContent
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                setShowLoading={setShowLoading}
              />
            </div>
          </div>
        </dialog>
      )}
      <div
        className={`flex flex-grow relative ${
          !selectedImage && "overflow-auto"
        } ${
          selectedImage || changingImage
            ? "bg-white"
            : "bg-gradient-to-r from-teal-50 to-teal-100"
        }`}
        ref={gridRef}
      >
        {!selectedImage && !changingImage && !showLoading && (
          <>
            <Circle />
            <Circle
              size="400"
              color="#CEFCF2"
              top={-30}
              left={50}
              opacity={0.8}
              zIndex={1}
            />
            <LandingPage />
          </>
        )}

        {/* Loading Indicator */}
        {showLoading && (
          <div className="flex justify-center items-center h-full w-full animate-pulse bg-slate-50">
              <p className="text-emerald-400 text-xl">Loading</p>
              <span className="loading loading-dots loading-md text-emerald-400 ml-1 mt-2"></span>
          </div>
        )}
        {!showLoading && selectedImage && (
          <div
            className="mx-auto my-auto w-full h-screen sm:ml-[20rem] -mt-[55px]"
            style={{ transformOrigin: "0 0" }}
            ref={contentsRef}
          >
            <img
              src={
                selectedImage.src
                  ? selectedImage.src
                  : URL.createObjectURL(selectedImage)
              }
              alt="Selected Preview"
              className="w-full h-auto max-w-lg object-cover mx-auto mt-48 mb-48"
              style={{ pointerEvents: "none" }}
            />
          </div>
        )}
      </div>
      {selectedImage && !showLoading && (
        <ImagePrompt
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          showLoading={showLoading}
          generatedDesign={generatedDesign}
          setGeneratedDesign={setGeneratedDesign}
        />
      )}
    </div>
  );
};

export default LandscapeCanvass;
