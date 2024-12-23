import react from 'react';
import { Link } from 'react-router-dom';
import './SideBarComponent.css';
import logo from '../assets/logo.png'
import SideBarTabComponents from './SideBarTabComponents';

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
        <div className='side-bar'>
            <img src={logo} alt="logo icon" className='logo__side-bar'/>
            <div className="tabs">
                { tabs.map((tab) => (
                    <SideBarTabComponents key={tab.id} tab={tab} />
                ))}
            </div>        
        </div>
    )
}

export default SideBarComponent;