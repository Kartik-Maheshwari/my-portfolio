import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // RGBA color with 10% transparency
    padding: '10px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100, // Ensure the navbar is above other content
  };

  return (
    <nav style={navbarStyle}>
      {/* Navbar content */}
      <ul className='flex text-white py-2 text-2xl justify-center gap-x-7 '>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Mini Projects</li>
        <li>Mega Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
