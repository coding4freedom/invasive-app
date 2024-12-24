import React from 'react';
import { Link } from 'react-router-dom';
import './SpeciesComponent.css';


const SpeciesComponent = ({ tile }) => {
  return (
    <Link to={tile.path} className='tile-link'>
        <div className="tile">
            <img src={tile.src} alt="tile image" className='tile-img'/>
            <span className="tile-text">{tile.title}</span>
        </div>
    </Link>
  )
}

export default SpeciesComponent;