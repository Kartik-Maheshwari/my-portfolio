import React, { useState } from "react";

const Navbar = ({ parallaxRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToOffset = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
    toggleMenu(); // Close the menu after scrolling
  };

  return (
    <nav className="bg-opacity-20 bg-black p-2 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <h1 className="md:hidden text-white text-2xl">
          {
            <button
              className="focus:outline-none"
              onClick={() => scrollToOffset(0)}
            >
              {`<Kartik/>`}
            </button>
          }
        </h1>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden text-white text-2xl pt-2 transition-transform transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } duration-300 ease-in-out`}
      >
        <li className="py-2">
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(0)}
          >
            Home
          </button>
        </li>
        <li className="py-2">
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(1)}
          >
            Skills
          </button>
        </li>
        <li className="py-2">
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(2)}
          >
            Mini Projects
          </button>
        </li>
        <li className="py-2">
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(3)}
          >
            Mega Projects
          </button>
        </li>
      </ul>
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white font-semibold py-2 text-3xl justify-center space-x-7">
        <li>
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(0)}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(1)}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(2)}
          >
            Mini Projects
          </button>
        </li>
        <li>
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(3)}
          >
            Mega Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
