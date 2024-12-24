import React from 'react';
import SpeciesComponent from './SpeciesComponent';
import fox from '../assets/fox.jpg';
import './SpeciesTileComponent.css';

const SpeciesTileComponent = () => {
    const species = [
        {id: 0, path: '/pythons', title: 'Burmese Pythons', src: `${fox}`},
        {id: 1, path: '/wild_hogs', title: 'Wild Hogs', src: `${fox}`},
        {id: 2, path: '/carps', title: 'Asian Carp', src: `${fox}`},
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