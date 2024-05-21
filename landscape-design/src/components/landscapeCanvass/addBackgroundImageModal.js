import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const AddBackgroundImageModalContent = () => {

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log('Selected file:', files[0]);
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <p className="text-center max-w-72">Add a picture of the area you want to design or choose from our image library below</p>
        <div class="flex flex-col items-center mt-12 cursor-pointer group" onClick={handleClick}>
          <button class="btn sm:h-32 sm:w-32 sm:rounded-full bg-blue-400 group-hover:bg-blue-800">
            <FontAwesomeIcon icon={faCloudArrowUp} className="text-3xl text-white" />
            <span class="inline-block sm:hidden text-white">Upload Photo</span>
          </button>
          <span class="hidden sm:inline-block text-blue-400 group-hover:text-blue-800">Upload Photo</span>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="h-[300px] flex flex-col justify-center items-center">
        <div className="carousel w-full h-full">
          <div id="slide1" className="carousel-item w-full relative">
            <img src="https://images.pexels.com/photos/8031882/pexels-photo-8031882.jpeg" className="h-full w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle opacity-75">❮</a> 
              <a href="#slide2" className="btn btn-circle opacity-75">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://images.pexels.com/photos/3958961/pexels-photo-3958961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle opacity-75">❮</a> 
              <a href="#slide3" className="btn btn-circle opacity-75">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle opacity-75">❮</a> 
              <a href="#slide4" className="btn btn-circle opacity-75">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://images.pexels.com/photos/3935346/pexels-photo-3935346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle opacity-75">❮</a> 
              <a href="#slide1" className="btn btn-circle opacity-75">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBackgroundImageModalContent;
