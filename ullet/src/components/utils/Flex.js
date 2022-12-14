import React from 'react';

import "./utils.css"

function Flex(props) {

    const { children, flexDirection, padding, gap } = props

    return (
        <div style={{ flexDirection, padding, gap }} className='flex'>
            {children}
        </div>
    );
}

export default Flex;