export async function login(name, password) {
  const res = await fetch("http://localhost:8080/api/login", {
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
