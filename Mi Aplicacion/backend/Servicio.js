class Servicio{

    constructor(costoBase){
        this.costoBase = costoBase; 
    }

    repararEquipo(equipo, cantidad){
        let costoTotal = this.costoBase + equipo.precio * cantidad;
        console.log("Se repararon los equipos, el costo total es de :"+ costoTotal);
    }
}

export default Servicio;