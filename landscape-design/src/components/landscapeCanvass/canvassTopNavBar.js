import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faArrowUpFromBracket, faXmark, faCameraRetro } from '@fortawesome/free-solid-svg-icons'; // Import the correct icons

const CanvassTopNavBar = (props) => {
  return (
    <div className="px-8 py-5 flex items-center justify-between">
      <p className="hidden md:inline-block text-white text-xl">Visual Design</p>
      <div className="ml-auto flex items-center space-x-8 md:space-x-4 lg:space-x-10">
        <div className="dropdown sm:dropdown-bottom sm:dropdown-end">
          <div tabIndex="0" role="button" className="btn text-white text-3xl bg-transparent border-transparent hover:bg-transparent">
            <FontAwesomeIcon icon={faEllipsis}/>
          </div>
          <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 mt-4 sm:mt-0">
            <li>
              <button onClick={() => {
                props.setSelectedImage(null);
                setTimeout(() => {
                  document.getElementById('my_modal_2').showModal();
                }, 100);
              }}>
                Change Background Image
              </button>
            </li>
            <li>
              <button onClick={() => {props.setSelectedImage(null)}} className={`${!props.selectedImage && "hover:cursor-not-allowed"}`}>
                Remove Background Image
              </button>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-white text-2xl cursor-pointer" />
        {!props.selectedImage && (
          <>
            <button className="btn btn-md bg-blue-400 border-blue-400 text-white md:btn-md hidden md:flex hover:bg-blue-800" onClick={() => { document.getElementById('my_modal_2').showModal(); } }>
              <FontAwesomeIcon icon={faCameraRetro} className="text-2xl" />
              Add background image
            </button>
            <button className="btn bg-blue-400 border-blue-400 btn-circle md:hidden text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>
              <FontAwesomeIcon icon={faCameraRetro} className="text-2xl" />
            </button></>
        )}
        <FontAwesomeIcon icon={faXmark} className="text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default CanvassTopNavBar;