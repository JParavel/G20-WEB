import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';

import "./UserPanel.css"

function UserPanel() {

    async function fetchData() {
        const res = await fetch("http://localhost:8080/api/transaction/Juan")
        const data = await res.json()
        setDocuments(data)
    }

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <section className='user-panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h1 className='title'>Mi Saldo</h1>
                    <p className='value'>$ 1.358.369</p>
                </div>

                <h1>Mis Movimientos</h1>
                <div className='transactions card flex'>
                    {/* Podemos generar componentes dinámicamente */}
                    {documents.map((element) => <Transaction data={element} />)}
                </div>
            </div>
        </section>
    );
}

export default UserPanel;