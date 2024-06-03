import React, { useEffect, useState } from "react";

const Navbar = ({ parallaxRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToOffset = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
    toggleMenu(); // Close the menu after scrolling
  };

  const handleClick = (buttonName, offsetvalue) => {
    scrollToOffset(offsetvalue); // Adjust offset values as needed
    setActiveButton(buttonName);
  };

  // useEffect(() => {
  //   // Function to handle scroll event
  //   const handleScroll = () => {
  //     // Get the scroll position
  //     const scrollPosition = window.scrollY;
  //     console.log("Scroll position:", scrollPosition);

  //     // Determine which section is currently in view
  //     const offset1 = document.getElementById("offset1").offsetTop;

  //     if (scrollPosition >= offset1) {
  //       setActiveButton("Skills");
  //     } else {
  //       setActiveButton("Home");
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove scroll event listener on component unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
            Projects
          </button>
        </li>
        <li className="py-2">
          <button
            className="focus:outline-none"
            onClick={() => scrollToOffset(3)}
          >
            About Me
          </button>
        </li>
      </ul>
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white font-semibold py-2 text-3xl justify-center space-x-7">
        <li>
          <button
            className={`focus:outline-none ${
              activeButton === "Home"
                ? "border-b-2 border-black transition duration-600 ease-in-out text-4xl outline-text"
                : ""
            }`}
            onClick={() => handleClick("Home", 0)}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`focus:outline-none ${
              activeButton === "Skills"
                ? "border-b-2 border-black transition duration-600 ease-in-out text-4xl outline-text"
                : ""
            }`}
            onClick={() => handleClick("Skills", 1)}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className={`focus:outline-none ${
              activeButton === "Project"
                ? "border-b-2 border-black transition duration-600 ease-in-out text-4xl outline-text"
                : ""
            }`}
            onClick={() => handleClick("Project", 2)}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={`focus:outline-none ${
              activeButton === "About"
                ? "border-b-2 border-black transition duration-600 ease-in-out text-4xl outline-text"
                : ""
            }`}
            onClick={() => handleClick("About", 3)}
          >
            About
          </button>
        </li>
      </ul>

      <style jsx>{`
        .outline-text {
          position: relative;
          color: white; /* Ensures the text color is white */
        }

        .outline-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          color: black;
          z-index: -1;
          -webkit-text-stroke: 1px black; /* Adjust stroke width if needed */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
