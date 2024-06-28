import React from 'react';
import '../index.css'; // Update the path to correctly point to the CSS file

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-center py-4">
      <div className="relative z-10 text-40px">MyTrainer</div>
      <div className="absolute top-0 transform translate-y-10 w-40 h-40 bg-radial-gradient rounded-full"></div>
    </div>
  );
};

export default Navbar;
