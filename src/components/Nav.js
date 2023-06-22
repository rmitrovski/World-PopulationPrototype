import '../Nav.css';
import React, { useState } from 'react';

function Nav() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className={`navbar ${isMenuVisible ? 'open' : ''}`}>
        <a href="/Home">Home</a>
        <a href="/Map">Map</a>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}
export default Nav;