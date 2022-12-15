import React from 'react';

import "./forms.css"

function Boton(props) {

    const { onClick, children, type, style } = props

    return (
        <button className={style + "-button"} type={type} onClick={onClick}>{children}</button>
    );
}

export default Boton;