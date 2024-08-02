import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";

// Annuals
import geranium from "../../data/plants/annuals/geranium.png";
import begonia from "../../data/plants/annuals/begonia.png";
import petunia from "../../data/plants/annuals/petunia.png";
import impatiens from "../../data/plants/annuals/impatiens.png";

// Perennials
import holly from "../../data/plants/perennials/bushes/holly.png";
import daisy from "../../data/plants/perennials/plants/daisy.png";
import boxwood from "../../data/plants/perennials/bushes/boxwood.png";
import actuiflora_grass from "../../data/plants/perennials/plants/actuiflora_grass.png";
import lavender from "../../data/plants/perennials/plants/lavender.png";
import purple_hydrangea from "../../data/plants/perennials/plants/light_purple_hydrangea.png";
import oriental_lily from "../../data/plants/perennials/plants/oriental_lily.png";
import pennisetum_grass from "../../data/plants/perennials/plants/pennisetum_grass.png";
import pink_daylily from "../../data/plants/perennials/plants/pink_daylily.png";
import pink_lilac from "../../data/plants/perennials/plants/pink_lilac.png";
import pink_rose from "../../data/plants/perennials/plants/pink_rose.png";
import purple_lilac from "../../data/plants/perennials/plants/purple_lilac.png";
import white_azalea from "../../data/plants/perennials/plants/white_azalea.png";
import arborvitae from "../../data/plants/perennials/trees/arborvitae.png";
import dogwood from "../../data/plants/perennials/trees/dogwood.png";
import fir_tree from "../../data/plants/perennials/trees/fir_tree.png";
import magnolia from "../../data/plants/perennials/trees/magnolia.png";
import red_maple from "../../data/plants/perennials/trees/red_maple.png";
import phlox from "../../data/plants/perennials/plants/phlox.png";

const Plant = (props) => {
  const handleClick = () => {
    const selectedPlantOptions = Array.isArray(props.selectedPlantOptions)
      ? props.selectedPlantOptions
      : [];
    const newSelectedPlantOptions = [...selectedPlantOptions, props.image];
    props.setSelectedPlantOptions(newSelectedPlantOptions);
    console.log(newSelectedPlantOptions);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col-reverse items-center justify-center font-semibold cursor-pointer"
    >
      {props.name}
      <img src={props.image} className="h-20 w-auto object-contain" />
    </div>
  );
};

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const imageRef = useRef(null); // Define imageRef

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const fabricCanvas = new fabric.Canvas(canvasElement);
    fabricCanvasRef.current = fabricCanvas;

    // Resize the canvas to match the viewport dimensions
    const resizeCanvas = () => {
      fabricCanvas.setWidth(window.innerWidth);
      fabricCanvas.setHeight(window.innerHeight);
      fabricCanvas.calcOffset(); // Recalculate the canvas offset
    };

    // Initial resize
    resizeCanvas();

    // Resize the canvas when the window is resized
    window.addEventListener("resize", resizeCanvas);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      fabricCanvas.dispose();
    };
  }, []);

  const addSquareToCanvas = () => {
    const fabricCanvas = fabricCanvasRef.current;
    const square = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 50,
      height: 50,
      selectable: true,
    });
    fabricCanvas.add(square);
    fabricCanvas.bringToFront(square); // Bring the square to the front when added

    // Bring the square to the front when selected
    square.on("selected", () => {
      fabricCanvas.bringToFront(square);
    });

    // Bring the square to the front while it is being moved
    square.on("moving", () => {
      fabricCanvas.bringToFront(square);
    });
  };

  const addCircleToCanvas = () => {
    const fabricCanvas = fabricCanvasRef.current;
    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      fill: "blue",
      radius: 30,
      selectable: true,
    });
    fabricCanvas.add(circle);
    fabricCanvas.bringToFront(circle); // Bring the circle to the front when added

    // Bring the circle to the front when selected
    circle.on("selected", () => {
      fabricCanvas.bringToFront(circle);
    });

    // Bring the circle to the front while it is being moved
    circle.on("moving", () => {
      fabricCanvas.bringToFront(circle);
    });
  };

  const displayPlants = () => {};

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="h-screen w-screen relative">
          <div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
            style={{ zIndex: 1 }}
          >
            <img
              ref={imageRef} // Attach the ref to the image element
              src="https://cdn.reimaginehome.ai/prod/gen/824ff19c-62e5-4f38-bcb6-d1fba1179342.png"
              alt="Generated Design"
              className="object-contain"
              style={{ maxWidth: "75%", maxHeight: "75%" }}
            />
          </div>
          <canvas
            ref={canvasRef}
            className="h-full w-full absolute top-0 left-0"
            style={{ zIndex: 2 }}
          ></canvas>
        </div>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary absolute top-4 right-4"
          style={{ zIndex: 3 }}
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side" style={{ zIndex: 4, position: "relative" }}>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-10 text-center">
          {/* Sidebar content here */}
          <div className="collapse bg-neutral-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Annuals</div>
            <div className="collapse-content flex space-x-4 overflow-x-auto whitespace-nowrap justify-between">
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Begonia"
                image={begonia}
              />

              <Plant
                name="Impatiens"
                image={impatiens}
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Geranium"
                image={geranium}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Petunia"
                image={petunia}
              />
            </div>
          </div>
          <div className="collapse bg-neutral-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Ornamental Grass
            </div>
            <div className="collapse-content flex space-x-4 overflow-x-auto whitespace-nowrap justify-between">
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Ornamental Grass"
                image={actuiflora_grass}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Pennisetum Grass"
                image={pennisetum_grass}
              />
            </div>
          </div>
          <div className="collapse bg-neutral-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Perennials</div>
            <div className="collapse-content flex space-x-4 overflow-x-auto whitespace-nowrap justify-between">
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Azalea"
                image={white_azalea}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Daylily"
                image={pink_daylily}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Daisy"
                image={daisy}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Hydrangea"
                image={purple_hydrangea}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Lavender"
                image={lavender}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Lilac (pink)"
                image={pink_lilac}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Lilac (purple)"
                image={purple_lilac}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Oriental Lily"
                image={oriental_lily}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Phlox"
                image={phlox}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Rose"
                image={pink_rose}
              />
            </div>
          </div>
          <div className="collapse bg-neutral-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Shrubs</div>
            <div className="collapse-content flex space-x-4 overflow-x-auto whitespace-nowrap justify-between">
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Arborvitae"
                image={arborvitae}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Boxwood"
                image={boxwood}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Dogwood"
                image={dogwood}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Holly"
                image={holly}
              />
            </div>
          </div>
          <div className="collapse bg-neutral-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Trees</div>
            <div className="collapse-content flex space-x-4 overflow-x-auto whitespace-nowrap justify-between">
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Fir Tree"
                image={fir_tree}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Magnolia"
                image={magnolia}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Red Maple"
                image={red_maple}
              />
            </div>
          </div>
          <div className="collapse bg-neutral-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">All</div>
            <div className="collapse-content flex space-x-4 overflow-x-auto whitespace-nowrap justify-between">
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Arborvitae"
                image={arborvitae}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Boxwood"
                image={boxwood}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Dogwood"
                image={dogwood}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Holly"
                image={holly}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Begonia"
                image={begonia}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Geranium"
                image={geranium}
              />
              <Plant
                name="Impatiens"
                image={impatiens}
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Ornamental Grass"
                image={actuiflora_grass}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Pennisetum Grass"
                image={pennisetum_grass}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Petunia"
                image={petunia}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Azalea"
                image={white_azalea}
              />

              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Daylily"
                image={pink_daylily}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Daisy"
                image={daisy}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Hydrangea"
                image={purple_hydrangea}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Lavender"
                image={lavender}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Lilac (pink)"
                image={pink_lilac}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Lilac (purple)"
                image={purple_lilac}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Oriental Lily"
                image={oriental_lily}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Phlox"
                image={phlox}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Rose"
                image={pink_rose}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Fir Tree"
                image={fir_tree}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Magnolia"
                image={magnolia}
              />
              <Plant
                selectedPlantOptions={props.selectedPlantOptions}
                setSelectedPlantOptions={props.setSelectedPlantOptions}
                name="Red Maple"
                image={red_maple}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
