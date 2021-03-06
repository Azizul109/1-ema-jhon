import React from 'react';
import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt=''></img>
            <nav>
                <a href='/shop'>Shop</a>
                <a href='/review'>Order review</a>
                <a href='/manage'>Manage inventory system</a>
                <a href='/contact'>Contact us</a>
            </nav>
        </div>
    );
};

export default Header;