'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  // Debug logging
  useEffect(() => {
    console.log('ImageCarousel mounted with images:', images);
    console.log('Images length:', images.length);
  }, [images]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    console.log('goToNext: current=', currentIndex, 'new=', newIndex, 'total=', images.length);
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToPrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    console.log('goToPrevious: current=', currentIndex, 'new=', newIndex, 'total=', images.length);
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = (index: number) => {
    console.log('goToSlide: current=', currentIndex, 'new=', index);
    setCurrentIndex(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isModalOpen) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            console.log('Keyboard: ArrowLeft pressed');
            goToPrevious();
            break;
          case 'ArrowRight':
            event.preventDefault();
            console.log('Keyboard: ArrowRight pressed');
            goToNext();
            break;
          case 'Escape':
            event.preventDefault();
            setIsModalOpen(false);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex, goToNext, goToPrevious]);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-800 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400">No images available</span>
      </div>
    );
  }

  // Single image - no carousel needed
  if (images.length === 1) {
    return (
      <div className={cn("relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group", className)}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Loading skeleton */}
        {!imageLoaded[0] && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        
        <img
          src={images[0]}
          alt={title}
          className="w-full h-auto object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
          onLoad={() => handleImageLoad(0)}
          style={{ display: imageLoaded[0] ? 'block' : 'none' }}
        />
        

        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" />

        {/* Modal for single image */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img
                src={images[0]}
                alt={title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Multiple images - show carousel
  return (
    <>
      <div className={cn("relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group", className)}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main image container */}
        <div className="relative aspect-video overflow-hidden">
          {/* Loading skeleton */}
          {!imageLoaded[currentIndex] && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )}
          
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
            onLoad={() => handleImageLoad(currentIndex)}
            style={{ display: imageLoaded[currentIndex] ? 'block' : 'none' }}
          />

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Previous button clicked, current index:', currentIndex);
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-sm rounded-full opacity-80 hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10 cursor-pointer"
            disabled={images.length <= 1}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Next button clicked, current index:', currentIndex);
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-sm rounded-full opacity-80 hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110 z-10 cursor-pointer"
            disabled={images.length <= 1}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-90 hover:opacity-100 transition-opacity duration-300 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Thumbnail clicked, going to index:', index);
                goToSlide(index);
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              )}
            />
          ))}
        </div>

        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal image */}
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
              />

              {/* Modal navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>

                  {/* Modal counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white">
                    {currentIndex + 1} / {images.length}
                  </div>

                  {/* Modal thumbnail navigation */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                          "w-3 h-3 rounded-full transition-all duration-300",
                          index === currentIndex
                            ? "bg-white scale-75"
                            : "bg-white/50 hover:bg-white/75"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
