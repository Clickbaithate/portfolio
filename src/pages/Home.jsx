import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/Carousel';
import Timeline from '../components/Timeline';

const Home = () => {
  
  const roles = ["Web Developer", "Mobile Developer", "Software Engineer"];
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (isErasing) {
        setSpeed(20);
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        if (displayedText.length === 0) {
          setIsErasing(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
        }
      } else {
        setSpeed(150);
        if (charIndex < roles[roleIndex].length) {
          setDisplayedText((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsErasing(true);
          }, 1000);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, charIndex, roleIndex, roles, isPaused, speed]);

  return (
    <div className="bg-[url('assets/background.svg')] bg-cover min-h-screen">
      <Navbar />
      <div className="w-full h-screen flex items-center" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="w-full md:w-1/2 p-4">
          <div className="text-white text-5xl font-bold ml-[100px] md:text-5xl text-xl">
            Hi! I'm Gael!
          </div>
          <div className="text-white text-5xl font-bold ml-[100px] py-4 md:text-5xl text-xl">
            A {displayedText} <span className="animate-pulse">|</span>
          </div>
          <div className="text-gray-300 mb-4 ml-[100px] hidden md:block">
            Hello again! I'm Gael, a passionate and driven individual currently pursuing a career in computer science.
          </div>
          <div className="text-gray-300 mb-4 ml-[100px] hidden md:block">
            I am enrolled at the University of Texas Rio Grande Valley, where I am working towards a bachelor's degree in computer science.
            I enjoy exploring various aspects of software development, including mobile and web development, as well as backend development.
            Recently, I've started to discover the exciting world of machine learning.
          </div>
          <div className="text-gray-300 mb-4 ml-[100px] hidden md:block">
            When I'm not studying or working on projects, I enjoy practicing on my 12-string guitar.
            Music has always been a source of inspiration and relaxation for me.
          </div>
          <div className="text-gray-300 mb-4 ml-[100px] hidden md:block">
            Professionally, my goal is to become a well-respected software engineer, work at an innovative tech company, and contribute to meaningful projects in impactful ways.
            I'm genuinely excited about what the future holds and can't wait to embrace it!
          </div>
        </div>
        <div className="w-1/2 hidden md:flex justify-center items-center p-4">
          <div className="animate-moveUpDown bg-[url('assets/person.svg')] bg-cover w-[600px] h-[600px]"></div>
        </div>
      </div>
      <h1 className="text-white text-5xl font-bold ml-[100px] md:text-5xl text-xl">Personal Projects</h1>
      <div className="">
        <div className="h-[700px] flex justify-center items-center">
          <Carousel/>
        </div>
      </div>
      <h1 className="text-white text-5xl font-bold ml-[100px] md:text-5xl text-xl mb-5">Skills</h1>
      <Timeline className="" ></Timeline>
    </div>
  );
};

export default Home;
