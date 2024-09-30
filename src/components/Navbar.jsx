import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import MyButton from './MyButton';

const Navbar = () => {

  return (
    <header className="">
      <nav className="container pt-5 pb-5 ml-[100px]">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="/" className="flex items-center">
              <div className="w-20 h-20 bg-[url('assets/logo.svg')] bg-cover rounded-full" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-16">
            <div className="">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link to="#about" className="text-white font-bold">
                    <MyButton>About</MyButton>
                  </Link>
                </li>
                <li>
                  <Link to="#skills" className="text-white font-bold ">
                    <MyButton>Skills</MyButton>
                  </Link>
                </li>
                <li>
                  <Link to="#projects" className="text-white font-bold ">
                    <MyButton>Projects</MyButton>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex items-center space-x-8 list-none">
              <li>
                <Link to="https://www.linkedin.com/in/gaelgg/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-white rounded-full w-8 h-8 transition-all ease-in-out duration-500 transform hover:scale-150" icon={faLinkedin} />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/Clickbaithate" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-white rounded-full w-8 h-8 transition-all ease-in-out duration-500 transform hover:scale-150" icon={faGithub} />
                </Link>
              </li>
              <li>
                <Link to="mailto:gaelguzman.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-white rounded-full w-8 h-8 transition-all ease-in-out duration-500 transform hover:scale-150" icon={faGoogle} />
                </Link>
              </li>
            </div>
          </div>

          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li><Link to="/" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</Link></li>
            <li><Link to="/about" className="block px-4 py-2 text-white bg-gray-900 rounded">About</Link></li>
            <li><Link to="/services" className="block px-4 py-2 text-white bg-gray-900 rounded">Services</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
