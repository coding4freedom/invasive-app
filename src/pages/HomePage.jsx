import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpeciesTileComponent from '../components/SpeciesTileComponent';

import '../assets/nature.jpg'
import './HomePage.css';
import PythonPage from './PythonPage';
import HogPage from './HogPage';
import CarpPage from './CarpPage';

const HomePage = () => {
  return (    
    <div className='home'>      
      <h1 className='title-home'>Help Save Nature By staying Informed</h1>
      <p className="para-home">
        Take sometime to learn about some of the invasive species that are destroying our various ecosystems.
      </p>
      <SpeciesTileComponent />
      <Routes>            
        <Route path='pythons' element={<PythonPage />} />            
        <Route path='wild_hogs' element={<HogPage />} />
        <Route path='carps' element={<CarpPage />} />            
      </Routes>
    </div>    
  )
}

export default HomePage;