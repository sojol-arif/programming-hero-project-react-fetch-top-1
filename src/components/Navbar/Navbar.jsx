import React, { memo } from 'react';

import logo from '../../assets/logo.png'
import dollar from '../../assets/dollar.png'

const Navbar = memo(({available}) => {
    return (
        <div className="navbar">
            <div className="flex-1">
            <a className="btn btn-ghost text-xl"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="dollar-coin flex items-center gap-2">
            <span className='mr-1'>{available}</span>
            <span className='mr-1'>Coin</span>
            <img src={dollar} alt="Dollar" />
            </div>
        </div>
    );
});

export default Navbar;