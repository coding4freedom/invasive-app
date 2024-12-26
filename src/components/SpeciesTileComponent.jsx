import React from 'react';
import SpeciesComponent from './SpeciesComponent';
import python from '../assets/python.png';
import fox from '../assets/fox.jpg';
import './SpeciesTileComponent.css';

const SpeciesTileComponent = () => {
    const species = [
        {id: 0, path: '/pythons', title: 'Burmese Pythons', src: `${python}`, name: 'python'},
        {id: 1, path: '/wild_hogs', title: 'Wild Hogs', src: `${fox}`, name: 'hogs'},
        {id: 2, path: '/carps', title: 'Asian Carp', src: `${fox}`, name: 'carps'},
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