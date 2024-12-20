import react from 'react';

import './SideBarComponent.css';
import logo from '../assets/logo.png'

const SideBarComponent = () => {
    return(
        <section className='side-bar'>
            <img src={logo} alt="logo icon" className='logo__side-bar'/>        
        </section>
    )
}

export default SideBarComponent;