import React from 'react';

import Flex from "./utils/Flex"
import Gap from './utils/Gap';
import Input from "./forms/Input"
import Boton from "./forms/Boton"

function Login() {
    return (
        <Flex flexDirection="column" padding="2rem">
            <h1>Ullet</h1>
            <Gap direction="vertical">1rem</Gap>
            <Input>User Name</Input>
            <Gap direction="vertical">0.5rem</Gap>
            <Input type="password">Password</Input>
            <Gap direction="vertical">3rem</Gap>
            <Boton>Login</Boton>
        </Flex>
    );
}

export default Login;