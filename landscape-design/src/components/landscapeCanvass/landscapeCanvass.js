import React, { useState, useEffect, useRef, useCallback } from "react";
import CanvassTopNavBar from "./canvassTopNavBar";
import AddBackgroundImageModalContent from "./addBackgroundImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the correct icons

const LandscapeCanvass = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setZoom((prevZoom) => {
      let newZoom = e.deltaY > 0 ? prevZoom - 0.2 : prevZoom + 0.2;
      return newZoom > 0.1 ? newZoom : 0.1;
    });
  }, []);

  const handleMouseDown = useCallback((e) => {
    setIsPanning(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isPanning) {
        e.preventDefault();
        setOffset((prevOffset) => ({
          x: prevOffset.x + e.clientX - mousePosition.x,
          y: prevOffset.y + e.clientY - mousePosition.y,
        }));
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    },
    [isPanning, mousePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("wheel", handleWheel, { passive: false });
      div.addEventListener("mousedown", handleMouseDown);
      div.addEventListener("mousemove", handleMouseMove);
      div.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (div) {
        div.removeEventListener("wheel", handleWheel);
        div.removeEventListener("mousedown", handleMouseDown);
        div.removeEventListener("mousemove", handleMouseMove);
        div.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [selectedImage]);

  return (
    <div className="flex flex-col bg-neutral-500 relative overflow-hidden h-screen w-screen">
      <CanvassTopNavBar
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
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
        className="flex grow"
        style={{
          transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
        }}
        ref={divRef}
      >
        {/* Loading Indicator */}
        {showLoading && (
          <div className="flex flex-col grow justify-center items-center">
            <span className="loading loading-spinner loading-lg text-blue-400"></span>
            <p className="text-white">Loading...</p>
          </div>
        )}
        {!showLoading && selectedImage && (
          <div className="flex grow flex-col items-center mt-4 justify-center">
            <img
              src={
                selectedImage.src
                  ? selectedImage.src
                  : URL.createObjectURL(selectedImage)
              }
              alt="Selected Preview"
              className="w-full h-auto max-w-lg object-cover mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandscapeCanvass;
