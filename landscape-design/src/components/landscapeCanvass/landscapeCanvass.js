import React, {useState, useEffect} from 'react';
import CanvassTopNavBar from './canvassTopNavBar';
import AddBackgroundImageModalContent from './addBackgroundImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons' // Import the correct icons


const LandscapeCanvass = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

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
        <dialog id="my_modal_2" className='modal'>
          <div class="modal-box flex flex-col p-0 h-screen w-screen max-h-screen max-w-full rounded-none sm:rounded-lg sm:h-5/6 sm:w-[450px]">
            <form method="dialog" class="flex items-center justify-between py-2 px-4">
              <div class="flex space-x-3 items-center">
                <button><FontAwesomeIcon icon={faArrowLeft}/></button>
                <p>Add Background Image</p>
              </div>
              {/* if there is a button in form, it will close the modal */}
              <button class="btn btn-sm btn-circle btn-ghost text-xl">✕</button>
            </form>
            <div class="flex grow ">
              <AddBackgroundImageModalContent 
                selectedImage={selectedImage} 
                setSelectedImage={setSelectedImage}
                setShowLoading={setShowLoading}
              />
            </div>
          </div>
        </dialog>
      )}
      <div class="flex grow">
        {/* Loading Indicator */}
        {showLoading && (
          <div class="flex flex-col grow justify-center items-center">
            <span className="loading loading-spinner loading-lg text-blue-400"></span>
            <p className='text-white'>Loading...</p>
        </div>
        )}
        {!showLoading && selectedImage && (
          <div className="flex grow flex-col items-center mt-4 justify-center">
            <img src={selectedImage.src ? selectedImage.src : URL.createObjectURL(selectedImage)} alt="Selected Preview" className="w-full h-auto max-w-lg object-cover mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LandscapeCanvass;