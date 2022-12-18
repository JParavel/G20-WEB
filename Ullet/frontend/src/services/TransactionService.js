export async function getTransactions(token) {
  const res = await fetch("http://localhost:8080/api/transaction/", {
    headers: {
      token: token,
    },
  });
  const data = await res.json();
  return data;
}
