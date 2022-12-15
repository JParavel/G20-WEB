import React from 'react';

// @ts-ignore
import logo from "./logo.png"

import "./Logo.css"

function Logo() {
    return (
        <div className='logo flex'>
            <img src={logo}></img>
            <h1>Ullet</h1>
        </div>
    );
}

export default Logo;