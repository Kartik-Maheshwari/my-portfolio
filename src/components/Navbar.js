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
      <ul className='flex text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
