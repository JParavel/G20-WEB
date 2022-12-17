import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import "./UserPanel.css";

function Transaction(props) {
  const { user } = useContext(UserContext);
  const name = user.name;

  const { data } = props;
  const { from, to, value, createdAt } = data;

  const date = createdAt.substr(0, 10);

  if (name == to) {
    //Entrante
    return (
      <div className="in-transaction grid card">
        <p className="from">{from}</p>
        <p className="value">$ {value}</p>
        <p className="date">{date}</p>
      </div>
    );
  } else {
    return (
      <div className="out-transaction grid card">
        <p className="to">{to}</p>
        <p className="value">$ {value}</p>
        <p className="date">{date}</p>
      </div>
    );
  }
}

export default Transaction;
