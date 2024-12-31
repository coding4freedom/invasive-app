import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBarComponent from './components/SideBarComponent';
import HomePage from './pages/HomePage';
import PythonPage from './pages/PythonPage';
import HogPage from './pages/HogPage';
import CarpPage from './pages/CarpPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  

  return (
    <Router>
      <div className="container">
        <SideBarComponent />
        <div className="main-content">        
          <Routes>
            <Route path='/home/*' element={<HomePage />} />
            <Route path='/pythons' element={<PythonPage />} />
            <Route path='/pythons1' element={<PythonPage />} />
            <Route path='/wild_hogs' element={<HogPage />} />
            <Route path='/carps' element={<CarpPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />

            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
      
    </Router>
  )
}

export default App;
