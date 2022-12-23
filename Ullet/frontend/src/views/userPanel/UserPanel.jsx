import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TonkenContext";
import { getTransactions } from "../../services/TransactionService";
import Transaction from "./Transaction";

import "./UserPanel.css";

function UserPanel() {
  const { token } = useContext(TokenContext);

  const [documents, setDocuments] = useState([]);
  const [cookies, setCookies] = useCookies(["token"]);

  const currentToken = token ? token : cookies.token;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    console.log(cookies.token);

    async function fetchData() {
      setDocuments(await getTransactions(currentToken));
    }

    if (currentToken) {
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
