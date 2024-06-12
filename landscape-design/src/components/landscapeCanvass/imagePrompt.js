import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { createMask } from "../../reimagineRequests/createMask";
import getMask from "../../reimagineRequests/getMask";
import generateImage from "../../reimagineRequests/generateImage";
import getImage from "../../reimagineRequests/getImage";

const ImagePrompt = (props) => {
  const [spaceType, setSpaceType] = useState(null);
  const [designTheme, setDesignTheme] = useState(null);
  const [landscapingPreference, setLandscapingPreference] = useState(null);
  const [additionalPrompt, setAdditionalPrompt] = useState("");

  const exterior_themes = [
    { "DT-EXT-001": "Beautiful garden" },
    { "DT-EXT-002": "Charming Playhouse Garden Landscaping" },
    { "DT-EXT-003": "Cottage Garden's Colorful Planting Palette" },
    { "DT-EXT-004": "Cozy Corner With Fire Pit and seating" },
    { "DT-EXT-005": "Garden Landscaping with Gravel Landscaping" },
    { "DT-EXT-006": "Hip California Garden Landscaping" },
    { "DT-EXT-007": "Lush Green Lawn" },
    { "DT-EXT-008": "Mediterranean Garden Landscaping" },
    { "DT-EXT-009": "Moss Garden" },
    { "DT-EXT-010": "Outdoor Dining and Sitting Area" },
    {
      "DT-EXT-011":
        "Party-Ready Outdoor Space with Pool, Spa, and Fire Feature",
    },
    { "DT-EXT-012": "Resort-Style Landscaping and Pool" },
    { "DT-EXT-013": "Round Swimming Pool With Lawn and Pool House" },
  ];

  const exterior_spaces = [
    { "ST-EXT-001": "Backyard" },
    { "ST-EXT-002": "Garden/Landscaping" },
    { "ST-EXT-003": "Outdoor Living" },
    { "ST-EXT-004": "Poolside" },
    { "ST-EXT-005": "Deck/Patio" },
  ];

  const generateDesign = (imageUrl) => {
    const params = "?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    if (!imageUrl.endsWith(params)) {
      imageUrl += params;
    }
    createMask(imageUrl).then((data) => {
      let maskId = data.data.job_id;
      const getMaskUntilDone = (maskId) => {
        getMask(maskId).then((maskData) => {
          if (maskData.data.job_status === "done") {
            let masksUrlArray = maskData.data.masks.map((mask) => {
              return mask.url;
            });
            generateImage(
              masksUrlArray,
              imageUrl,
              spaceType,
              designTheme,
              landscapingPreference,
              additionalPrompt
            ).then((data) => {
                let imageId = data.data.job_id;
              getImage(imageId).then((imageData) => {
                props.setGeneratedDesign(imageData.data.generated_image[0]);
              });
            });
          } else {
            // If job_status is not "done", wait half a second and then try again
            setTimeout(() => getMaskUntilDone(maskId), 500);
          }
        });
      };
      getMaskUntilDone(maskId);
    });
  };

  return (
    <div className="drawer flex flex-col justify-between h-full">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={props.selectedImage !== null && !props.showLoading}
      />
      <div className="drawer-side mt-[90px] flex flex-col justify-between">
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          <div>
            <div className="text-center p-2 bg-cyan-50 rounded text-slate-700 font-medium text-lg tracking-wide">
              <FontAwesomeIcon icon={faSeedling} className="mr-2 text-base" />
              Landscaping
            </div>
            <div className="w-full h-[2px] bg-neutral-300 mx-auto my-4" />
            <ul>
              <li>
                <select
                  className="select w-full max-w-xs mb-4"
                  onChange={(e) => setSpaceType(e.target.value)}
                >
                  <option disabled selected>
                    Designing for
                  </option>
                  {exterior_spaces.map((space) => {
                    const id = Object.keys(space)[0];
                    const name = space[id];
                    return <option value={id}>{name}</option>;
                  })}
                </select>
              </li>
              <li>
                <select
                  className="select w-full max-w-xs mb-4"
                  onChange={(e) => setDesignTheme(e.target.value)}
                >
                  <option disabled selected>
                    Select garden theme
                  </option>
                  {exterior_themes.map((theme) => {
                    const id = Object.keys(theme)[0];
                    const name = theme[id];
                    return <option value={id}>{name}</option>;
                  })}
                </select>
              </li>
              <li>
                <select
                  className="select w-full max-w-xs mb-4"
                  onChange={(e) => setLandscapingPreference(e.target.value)}
                >
                  <option disabled selected>
                    Landscape Preference
                  </option>
                  <option>Alliums</option>
                  <option>Annuals</option>
                  <option>Begonia</option>
                  <option>Daisies</option>
                  <option>Roses</option>
                  <option>Hydrangea</option>
                  <option>Iris</option>
                  <option>Shrubs with purple flowers</option>
                  <option>Snapdragon</option>
                  <option>Flowering perennials</option>
                  <option>No Pathway</option>
                  <option>A Neutral stone pathway</option>
                  <option>Brick Walkway</option>
                  <option>Concrete Pathway</option>
                  <option>Contemporary Pathway</option>
                  <option>Dynamic Pavers Pathway</option>
                  <option>Flagstone Walkway</option>
                  <option>Herringbone Pathway</option>
                  <option>Pea Gravel Pathway</option>
                  <option>Stone Pathway</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mb-[110px]">
            <div className="p-2 bg-cyan-50 rounded text-gray-800 mb-4 text-">
              Outdoor area identified by AI will be redesigned with suitable
              landscaping features as per inputs chosen.
            </div>
            <button
              className="btn w-full bg-gradient-to-r from-emerald-300 to-teal-500 text-white tracking-wide text-base"
              onClick={() => {
                generateDesign(props.selectedImage.src);
              }}
            >
              Generate Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePrompt;
