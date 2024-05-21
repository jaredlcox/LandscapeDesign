import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const AddBackgroundImageModalContent = () => {
  const fileInputRef = useRef(null);
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log('Selected file:', files[0]);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    if (selectedImage && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [selectedImage]);

  const ConfirmationImageModal = ({ image }) => (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        {image && (
          <>
            <h3 className="font-bold text-lg">Image Details</h3>
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <p className="py-4">Description: {image.description}</p>
          </>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8031882/pexels-photo-8031882.jpeg',
      alt: 'House 1',
      description: 'This is house 1'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3958961/pexels-photo-3958961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'House 2',
      description: 'This is house 2'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'House 3',
      description: 'This is house 3'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3935346/pexels-photo-3935346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'House 4',
      description: 'This is house 4'
    },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <p className="text-center max-w-72">Add a picture of the area you want to design or choose from our image library below</p>
        <div className="flex flex-col items-center mt-12 cursor-pointer group" onClick={handleClick}>
          <button className="btn sm:h-32 sm:w-32 sm:rounded-full bg-blue-400 group-hover:bg-blue-800">
            <FontAwesomeIcon icon={faCloudArrowUp} className="text-3xl text-white" />
            <span className="inline-block sm:hidden text-white">Upload Photo</span>
          </button>
          <span className="hidden sm:inline-block text-blue-400 group-hover:text-blue-800">Upload Photo</span>
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
          {images.map((image, index) => (
            <div key={image.id} id={`slide${image.id}`} className="carousel-item relative w-full">
              <img
                alt={image.alt}
                src={image.src}
                className="h-full w-full object-cover"
                onClick={() => handleImageClick(image)}
              />
                <a
                  href={`#slide${index === 0 ? images.length : index}`}
                  className="btn btn-circle opacity-75 absolute left-5 top-1/2"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle opacity-75 absolute right-5 top-1/2"
                >
                  ❯
                </a>
            </div>
          ))}
        </div>
      </div>
      <ConfirmationImageModal image={selectedImage} />
    </div>
  );
};

export default AddBackgroundImageModalContent;
