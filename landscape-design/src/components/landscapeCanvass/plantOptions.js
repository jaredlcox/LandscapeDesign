import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons"; // Import the correct icons

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

// Annuals
import geranium from "../../data/plants/annuals/geranium.png";
import begonia from "../../data/plants/annuals/begonia.png";
import petunia from "../../data/plants/annuals/petunia.png";
import impatiens from "../../data/plants/annuals/impatiens.png";

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
      <img src={props.image} className="rounded-box h-20" />
    </div>
  );
};

const Perennials = (props) => {
  return (
    <div
      className="carousel carousel-center rounded-box max-w-xs space-x-4 h-40"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <div className="carousel-item flex items-center justify-center flex-col">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Arborvitae"
          image={arborvitae}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Azalea"
          image={white_azalea}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Boxwood"
          image={boxwood}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Daylily"
          image={pink_daylily}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Daisy"
          image={daisy}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Dogwood"
          image={dogwood}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Fir Tree"
          image={fir_tree}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Holly"
          image={holly}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Hydrangea"
          image={purple_hydrangea}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Lavender"
          image={lavender}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Lilac"
          image={pink_lilac}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Lilac"
          image={purple_lilac}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Magnolia"
          image={magnolia}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Ornamental Grass"
          image={actuiflora_grass}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Oriental Lily"
          image={oriental_lily}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Pennisetum Grass"
          image={pennisetum_grass}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Phlox"
          image={phlox}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Red Maple"
          image={red_maple}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Rose"
          image={pink_rose}
        />
      </div>
    </div>
  );
};
const Annuals = (props) => {
  return (
    <div
      className="carousel carousel-center rounded-box max-w-xs space-x-4 h-40"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Begonia"
          image={begonia}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Geranium"
          image={geranium}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Impatiens"
          image={impatiens}
        />
      </div>
      <div className="carousel-item">
        <Plant
          selectedPlantOptions={props.selectedPlantOptions}
          setSelectedPlantOptions={props.setSelectedPlantOptions}
          name="Petunia"
          image={petunia}
        />
      </div>
    </div>
  );
};

const PlantOptions = (props) => {
  return (
    <div className="absolute top-0 right-0 w-screen sm:w-auto z-30 h-auto bg-slate-200">
      <div className="flex items-center p-4 border-b-4 border-neutral-400 justify-center">
        <FontAwesomeIcon
          icon={faTree}
          className="mr-3 text-green-600 text-4xl"
        />
        <p className="text-slate-800 font-semibold text-2xl flex w-auto">
          Add Plants
        </p>
      </div>

      <div className="max-h-full h-screen flex flex-col items-center p-4">
        <div className="flex flex-col font-bold">
          Perennials:
          <Perennials
            selectedPlantOptions={props.selectedPlantOptions}
            setSelectedPlantOptions={props.setSelectedPlantOptions}
          />
          <div className="h-1 bg-neutral-400 w-full" />
        </div>
        <div className="flex flex-col font-bold pt-4">
          Annuals:
          <Annuals
            selectedPlantOptions={props.selectedPlantOptions}
            setSelectedPlantOptions={props.setSelectedPlantOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantOptions;
