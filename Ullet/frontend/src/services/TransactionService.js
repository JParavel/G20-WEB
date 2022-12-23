import { API_URL } from "./api";

export async function getTransactions(token) {
  const res = await fetch(API_URL + "/api/transaction/", {
    headers: {
      token: token,
    },
  });
  const data = await res.json();
  return data;
}
