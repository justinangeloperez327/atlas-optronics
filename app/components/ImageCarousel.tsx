'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  { src: '/space.png', title: 'Image 1', description: 'Description for image 1' },
  { src: '/air.png', title: 'Image 2', description: 'Description for image 2' },
  { src: '/land.png', title: 'Image 3', description: 'Description for image 3' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the second image (centered)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button onClick={goToPrevious} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      {images.map((image, index) => (
        <div key={image.title} className={`transition-transform ${index === currentIndex ? 'scale-125' : 'scale-100'}`}>
          {index === currentIndex && (
            <>
              <Image src={image.src} alt={image.title} width={500} height={500} className="block w-64 h-64 object-cover" />
              <p>{image.title}</p>
              <p>{image.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </>
          )}
        </div>
      ))}
      <button onClick={goToNext} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
