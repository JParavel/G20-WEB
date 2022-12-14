import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import Boton from '../components/forms/Boton';
import Input from '../components/forms/Input';

function Users() {

    const [nombre, setNombre] = useState("");

    return (
        <div>
            <h1>Esta es la lista de usuarios de nuestra aplicacion: ❤️</h1>
            <Input onChange={(e) => setNombre(e.target.value)}>Nombre</Input>
            <Boton onClick={() => { return redirect("/user/" + nombre) }}>Buscar Usuario</Boton>
        </div>
    );
}

export default Users;