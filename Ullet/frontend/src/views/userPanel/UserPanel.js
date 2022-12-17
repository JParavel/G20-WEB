import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Transaction from "./Transaction";

import "./UserPanel.css";

function UserPanel() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const name = user.name;

  async function fetchData() {
    const res = await fetch("http://localhost:8080/api/transaction/" + name);
    const data = await res.json();
    setDocuments(data);
  }

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <div className="balance card flex">
          <h1 className="title">Mi Saldo</h1>
          <p className="value">$ 1.358.369</p>
        </div>

        <h1>Mis Movimientos</h1>
        <div className="transactions card flex">
          {documents.map((element) => (
            <Transaction data={element} key={element._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserPanel;
