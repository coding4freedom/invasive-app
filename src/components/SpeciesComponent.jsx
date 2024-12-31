import React from 'react';
import { Link } from 'react-router-dom';
import './SpeciesComponent.css';


const SpeciesComponent = ({ tile }) => {
  return (
    <Link to={tile.path} className='title-link'>
        <div className="tile">
            <img src={tile.src} alt="tile image" className={`tile-img img${tile.id}`}/>
            <span className="tile-text">{tile.title}</span>
        </div>
        {console.log(tile.path)}        
    </Link>
  )
}

export default SpeciesComponent;