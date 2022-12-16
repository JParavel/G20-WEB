import React from 'react';

import "./UserPanel.css"

function UserPanel(props) {

    const { data } = props
    const { from, to, value, createdAt } = data

    const date = createdAt.substr(0, 10)

    return (
        <div className='transaction grid card'>
            <p className='from'>{from}</p>
            <p className='value'>$ {value}</p>
            <p className='date'>{date}</p>
        </div>
    );
}

export default UserPanel;