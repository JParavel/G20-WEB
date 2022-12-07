import React from 'react';

import "./forms.css"

function Boton(props) {

    const { onClick, children } = props

    return (
        <button className='boton' onClick={onClick}>{children}</button>
    );
}

export default Boton;