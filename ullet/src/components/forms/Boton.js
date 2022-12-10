import React from 'react';

import "./forms.css"

function Boton(props) {

    const { onClick, children, type } = props

    return (
        <button className='boton' type={type} onClick={onClick}>{children}</button>
    );
}

export default Boton;