import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import Boton from '../components/forms/Boton';
import Input from '../components/forms/Input';

function Users() {

    const [nombre, setNombre] = useState("");

    return (
        <div>
            <h1>Esta es la lista de usuarios de nuestra aplicacion: ❤️</h1>
            <Input onChange={(e) => setNombre(e.target.value)}>Nombre</Input>
            <Link to={"/users/" + nombre}><Boton>Buscar Usuario</Boton></Link>
        </div>
    );
}

export default Users;