import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faArrowUpFromBracket, faXmark, faCameraRetro } from '@fortawesome/free-solid-svg-icons'; // Import the correct icons
import AddBackgroundImageModalContent from './addBackgroundImageModal';

const CanvassTopNavBar = () => {
  return (
    <div className="px-8 py-5 flex items-center justify-between">
      <p className="inline-block text-white text-xl">Visual Design</p>
      <div className="ml-auto flex items-center space-x-8 md:space-x-4 lg:space-x-10">
        <FontAwesomeIcon icon={faEllipsis} className="text-white text-3xl cursor-pointer" />
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-white text-2xl cursor-pointer" />
        <button className="btn btn-md md:btn-sm lg:btn-md text-neutral-500" onClick={()=>document.getElementById('my_modal_2').showModal()}>
          <FontAwesomeIcon icon={faCameraRetro} className="text-2xl" />
          Add background image</button>
        <FontAwesomeIcon icon={faXmark} className="text-white text-2xl cursor-pointer" />
      </div>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <AddBackgroundImageModalContent />
        </div>
      </dialog>
    </div>
  );
};

export default CanvassTopNavBar;