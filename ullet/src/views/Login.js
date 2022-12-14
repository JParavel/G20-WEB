import React, { useState } from 'react';

import Flex from "../components/utils/Flex"
import Gap from '../components/utils/Gap';
import Input from "../components/forms/Input"
import Boton from "../components/forms/Boton"

function Login() {

    async function onSubmit(evento) {
        evento.preventDefault()
        // alert("Estas iniciando sesión con las siguientes credenciales: Usuario: " + user + ", Contraseña: " + password)

        const userData = {
            nombre: user,
            password: password
        }

        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (res.ok) {
            const data = await res.json()
            alert("Tu token es: " + data.token)
        } else {
            alert(res.status)
        }
    }

    const [user, setUser] = useState("");

    function onUserChange(elemento) {
        setUser(elemento.target.value)
    }

    const [password, setPassword] = useState("");

    function onPasswordChange(elemento) {
        setPassword(elemento.target.value)
    }

    return (
        <form onSubmit={(evento) => onSubmit(evento)}>
            <Flex flexDirection="column" padding="2rem">
                <h1>Ullet</h1>
                <Gap direction="vertical">1rem</Gap>
                <Input onChange={(elemento) => onUserChange(elemento)}>User Name</Input>
                <Gap direction="vertical">0.5rem</Gap>
                <Input type="password" onChange={(elemento) => onPasswordChange(elemento)}>Password</Input>
                <Gap direction="vertical">3rem</Gap>
                <Boton type="submit">Login</Boton>
            </Flex>
        </form>
    );
}

export default Login;