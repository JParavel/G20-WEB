import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import UserContext from "../../contexts/UserContext";

import "./UserPanel.css";

function Transaction(props) {
  const { user } = useContext(UserContext);

  const [cookies, setCookies] = useCookies(["userName"]);

  const currentName = user ? user.name : cookies.userName;

  const { data } = props;
  const { from, to, value, createdAt } = data;

  const date = createdAt.substr(0, 10);

  if (currentName == to) {
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
