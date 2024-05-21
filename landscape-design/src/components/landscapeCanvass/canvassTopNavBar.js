import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faArrowUpFromBracket, faXmark, faCameraRetro } from '@fortawesome/free-solid-svg-icons'; // Import the correct icons

const CanvassTopNavBar = () => {
  return (
    <div className="px-8 py-5 flex items-center justify-between">
      <p className="hidden md:inline-block text-white text-xl">Visual Design</p>
      <div className="ml-auto flex items-center space-x-8 md:space-x-4 lg:space-x-10">
        <FontAwesomeIcon icon={faEllipsis} className="text-white text-3xl cursor-pointer" />
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-white text-2xl cursor-pointer" />
        <button className="btn btn-md md:btn-md text-neutral-500 hidden md:flex" onClick={()=>document.getElementById('my_modal_2').showModal()}>
          <FontAwesomeIcon icon={faCameraRetro} className="text-2xl" />
          Add background image
        </button>
        <button className="btn btn-circle md:hidden text-neutral-500" onClick={()=>document.getElementById('my_modal_2').showModal()}>
          <FontAwesomeIcon icon={faCameraRetro} className="text-2xl" />
        </button>
        <FontAwesomeIcon icon={faXmark} className="text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default CanvassTopNavBar;