import React, { useState } from 'react';

import "./assets/global.css"
import Boton from './components/forms/Boton';
import Login from './components/Login';


function App() {

    function incrementar() {
        const nuevoValor = contador + 1
        setContador(nuevoValor)
        console.log(contador);
    }

    const [contador, setContador] = useState(0);

    return (
        <div>
            <Login></Login>
            <p>Contador: {contador}</p>
            <Boton onClick={incrementar}>Incrementar</Boton>
        </div >
    );
}

export default App;