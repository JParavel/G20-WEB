import { API_URL } from "./api";

export async function login(name, password) {
  const res = await fetch(API_URL + "/api/login", {
    headers: {
      name: name,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    return document.token;
  } else {
    return null;
  }
}
