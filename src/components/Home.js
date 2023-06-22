import React from 'react';
import navbarImage from '../images/navbar.jpg';
import '../Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="dark-background">
        <img src={navbarImage} alt="heading" className="blended-image" />
        <div className="image-text">World Population</div>
      </div>
    </div>
  );
}

export default Home;