import Equipo from "./Equipo.js";
import Servicio from "./Servicio.js";

console.log("Hola Mundo!");

let audifonos = new Equipo("JBL", 600);
console.log(audifonos.marca);
// audifonos.encender();

// const reparacion = new Servicio(50);
// reparacion.repararEquipo(audifonos, 8)

// console.log(audifonos.precio);
audifonos = new Equipo("Beats", 800);
console.log(audifonos.marca);