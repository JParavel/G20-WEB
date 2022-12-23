export const API_URL = import.meta.env.VITE_API_URL;

class api {
  async get(path, options) {
    try {
      const res = await fetch(API_URL + path, options);
      const document = await res.json();
      if (res.ok) {
        return document;
      } else {
        console.log(document.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  post() {}
  patch() {}
  delete() {}
}
