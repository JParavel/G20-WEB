import React from 'react';

import "./utils.css"

function Flex(props) {

    const { children, flexDirection, padding } = props

    return (
        <div style={{ flexDirection, padding }} className='flex'>
            {children}
        </div>
    );
}

export default Flex;