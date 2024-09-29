import { useState, useEffect, useRef } from 'react';
import androidTransactions from '../assets/pj-images/android-transactions.mp4';
import androidHistory from '../assets/pj-images/android-history.mp4';
import androidStats from '../assets/pj-images/android-stats.mp4';
import androidDelete from '../assets/pj-images/android-delete.mp4';
import androidBudget from '../assets/pj-images/android-budget.webm';
import androidEdit from '../assets/pj-images/android-edit.webm';
import flutterHome from '../assets/pj-images/flutter-liked.mp4';
import flutterSearch from '../assets/pj-images/flutter-search.mp4'
import flutterFolder from '../assets/pj-images/flutter-folder.mp4';

const Carousel2 = ({ index }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  let media = [];
  if (index === 1) {
    media = [
      { src: flutterHome },
      { src: flutterSearch },
      { src: flutterFolder },
    ];
  }
  else if (index === 2) {
    media = [
      { src: androidBudget },
      { src: androidTransactions },
      { src: androidEdit },
      { src: androidHistory },
      { src: androidStats },
      { src: androidDelete },
    ];
  }

  const totalSlides = media.length;

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentSlide) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide, media]);

  return (
    <div className="mt-12 md:mt-0 flex justify-center">
      <div id="static-carousel" className="relative w-full">
        <div className="relative overflow-hidden rounded-[30px] md:h-[700px] w-[400px]">
          {/* Display each video item */}
          {media.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                className="absolute block w-full h-full object-cover bg-black py-2 rounded-[30px]"
                loop
                muted
                style={{ height: '600px', objectFit: 'contain' }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex justify-center bottom-16 left-0 right-0">
          {media.map((_, slideIdx) => (
            <button
              key={slideIdx}
              type="button"
              className={`w-4 h-4 rounded-lg mx-2 ${currentSlide === slideIdx ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Slide ${slideIdx + 1}`}
              onClick={() => setCurrentSlide(slideIdx)}
            ></button>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group transform -translate-y-1/2"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
