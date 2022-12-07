import React from 'react';

import "./forms.css"

function Input(props) {

    const { children, type } = props

    return (
        <input type={type} className='input' placeholder={children}></input>
    );
}

export default Input;