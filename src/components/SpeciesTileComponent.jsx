import React from 'react';
import SpeciesComponent from './SpeciesComponent';
import python from '../assets/python.png';
import hog from '../assets/hog.jpg';
import carp from '../assets/blackcarp.jpg'
import './SpeciesTileComponent.css';

const SpeciesTileComponent = () => {
    const species = [
        {id: 0, path: '/pythons', title: 'Burmese Pythons', src: `${python}`, name: 'python'},
        {id: 1, path: '/wild_hogs', title: 'Wild Hogs', src: `${hog}`, name: 'hogs'},
        {id: 2, path: '/carps', title: 'Asian Carp', src: `${carp}`, name: 'carps'},
    ];

  return (
    <div className="species_wrapper">
        { species.map((tile) => (
            <SpeciesComponent key={tile.id} tile={tile} />
        ))}
    </div>
  )
}

export default SpeciesTileComponent;