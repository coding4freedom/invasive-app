import React from 'react';
import '../assets/nature.jpg'
import './HomePage.css';
import SpeciesTileComponent from '../components/SpeciesTileComponent';

const HomePage = () => {
  return (
    <div className='home'>
      <h1 className='title-home'>Help Save Nature By staying Informed</h1>
      <p className="para-home">
        Take sometime to learn about some of the invasive species that are destroying our various ecosystems.
      </p>
      <SpeciesTileComponent />
    </div>
  )
}

export default HomePage;