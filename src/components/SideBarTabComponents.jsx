import React from 'react';
import { Link } from 'react-router-dom';

const SideBarTabComponents = ({ tab }) => {
  return (
    <div className="tab-items">
        <Link to={tab.path}>{tab.label}</Link>
    </div>
  )
}

export default SideBarTabComponents;