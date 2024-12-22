import react from 'react';
import { Link } from 'react-router-dom';
import './SideBarComponent.css';
import logo from '../assets/logo.png'

const SideBarComponent = () => {
    const tabs = [
        {id: 0, label: 'Home', path: '/home'},
        {id: 1, label: 'Pythons', path: '/pythons'},
        {id: 2, label: 'Hogs', path: '/wild_hogs'},
        {id: 3, label: 'Carps', path: '/carps'},
        {id: 4, label: 'About', path: '/about'},
        {id: 5, label: 'Contact', path: '/contact'},
    ];

    return(
        <section className='side-bar'>
            <img src={logo} alt="logo icon" className='logo__side-bar'/>
            <div className="tabs">
                
            </div>        
        </section>
    )
}

export default SideBarComponent;