import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TonkenContext";
import { getTransactions } from "../../services/TransactionService";
import Transaction from "./Transaction";

import "./UserPanel.css";

function UserPanel() {
  const { token } = useContext(TokenContext);

  const [documents, setDocuments] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setDocuments(await getTransactions(token));
    }

    if (token) {
      fetchData();
    } else {
      return navigate("/login");
    }
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
