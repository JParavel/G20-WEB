import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import { TokenProvider } from "./contexts/TonkenContext";
import { UserProvider } from "./contexts/UserContext";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import UserPanel from "./views/userPanel/UserPanel";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 className="container">About</h1>} />
      </Route>

      <Route
        path="/login"
        element={
          <UserProvider>
            <TokenProvider>
              <Login />
            </TokenProvider>
          </UserProvider>
        }
      />
      <Route
        path="/register"
        element={
          <UserProvider>
            <TokenProvider>
              <Register />
            </TokenProvider>
          </UserProvider>
        }
      />
      <Route
        path="/panel"
        element={
          <UserProvider>
            <TokenProvider>
              <UserPanel />
            </TokenProvider>
          </UserProvider>
        }
      />
    </Routes>
  );
}

export default App;
