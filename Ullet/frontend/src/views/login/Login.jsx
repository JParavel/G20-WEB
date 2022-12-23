import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import TokenContext from "../../contexts/TonkenContext";
import UserContext from "../../contexts/UserContext";
import { login } from "../../services/authService";

import "./Login.css";

function Login() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["token", "userName"]);

  const navigate = useNavigate();

  async function onClick(event) {
    event.preventDefault();
    const token = await login(userName, password);
    if (token) {
      //Variables de contexto
      setUser({ name: userName });
      setToken(token);

      //Cookies
      setCookies("token", token, { path: "/" });
      setCookies("userName", userName, { path: "/" });

      navigate("/panel");
    } else {
      alert("Usuario o Contraseña Invalido");
    }
  }
  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="title">
          Iniciar Sesión en <b>Ullet</b>
        </h1>
        <p>¡Que gusto verte nuevamente!</p>
        <form className="flex card form">
          <Input onChange={(event) => setUserName(event.target.value)}>
            Usuario
          </Input>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          >
            Contraseña
          </Input>
          <Button onClick={onClick} style="fill">
            Iniciar Sesión
          </Button>
        </form>
        <div className="register card">
          <p>
            ¿Nuevo en Ullet? <Link to="/register">Crear una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
