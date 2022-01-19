/*
Description: The Header constructor displays the title image/logo for Spacestagram! 
 
Author: Nourjehan Faris
Version: 2022-01-18
*/
import React from 'react';
import title from '../img/Title.png';

const Header = () => {
    return (
        <header className = 'center'>
            <img src={title} alt=''className='header'/>
        </header>
    )
}

export default Header
