import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <FontAwesomeIcon icon={faPizzaSlice} alt='site logo' />
                <p>Pappa Darren's</p>
            </div>
        </div>
    );
};

export default Header;