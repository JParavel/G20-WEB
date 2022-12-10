import React from 'react';

import "./forms.css"

function Input(props) {

    const { children, type, onChange } = props

    return (
        <input type={type} onChange={onChange} className='input' placeholder={children}></input>
    );
}

export default Input;