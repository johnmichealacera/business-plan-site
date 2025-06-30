'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/gallery1.jpg', alt: 'Cottage by the beach' },
  { src: '/gallery2.jpg', alt: 'Crystal clear water' },
  { src: '/gallery3.jpg', alt: 'Kayaks on the sand' },
  { src: '/gallery4.jpg', alt: 'Island hopping boat' },
  { src: '/gallery5.jpg', alt: 'Family enjoying the beach' },
  { src: '/gallery6.jpg', alt: 'Sunset view at Isla Paraiso' },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 w-full">
      <h2 className="text-3xl font-bold text-tropical-blue text-center mb-8">Gallery</h2>
      
      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Main Image */}
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover object-center transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-semibold">{images[currentIndex].alt}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-tropical-blue p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-tropical-blue p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-tropical-blue scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-2 text-gray-600">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  );
} 