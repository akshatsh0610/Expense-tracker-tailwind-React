import React, { useContext, useState } from 'react';
import './App.css'
import RateUs from './RateUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons';
import Context from './Context';
export default function NavBar() {
    const {theme,setTheme}=useContext(Context);
    const[icon,setIcon]=useState(faMoon);
    const handleClick=()=>{
        setIcon(icon===faSun?faMoon:faSun);
        setTheme(theme==='light'?'dark':'light');
    }
    return (
        <div className={`flex justify-between items-center p-8 nav ${theme}`}>
        <div className='flex gap-4 items-center'>
            <a href='#'>
                <img src='/android-chrome-512x512.png' alt='logo' className='w-12 h-12'/>
            </a>
            <h1 className='font-body text-4xl font-semibold'>Spend Smart</h1>
        </div>
        <div className='flex items-center gap-12 pr-16'>
            <RateUs/>
            <button className='text-4xl' onClick={handleClick}>
                <FontAwesomeIcon icon={icon} />
            </button>
        </div>
        </div>
    )
}
