import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import reactHome from '../assets/pj-images/react-home.png';
import reactDiscover from '../assets/pj-images/react-discover.png';
import reactMovie from '../assets/pj-images/react-movie.png';

const Carousel3 = ({ index }) => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(false);

  let media = [];
  if (index === 0) {
    media = [reactHome, reactDiscover, reactMovie]; 
  }

  const totalSlides = media.length;

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="mt-12 md:mt-0 flex justify-center">
      <div id="static-carousel" className="relative w-full">
        <div className="relative overflow-hidden rounded-[30px] md:h-[600px] w-[900px]">
          {media.map((image, index) => (
            <Link to={`/project/${index}`} key={index}>
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                onTransitionEnd={handleTransitionEnd}
              >
                <img
                  src={image}
                  className="absolute block w-full h-full object-cover bg-black rounded-[30px]"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex justify-center bottom-5 left-0 right-0">
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

export default Carousel3;
