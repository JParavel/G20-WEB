class Equipo{

    tipo = "entrada"

    constructor(marca, pre){
        this.marca = marca
        this.precio = pre
    }

    encender(){
        console.log("El equipo "+this.marca+" está encendido");
        console.log("El equipo es del tipo: "+this.tipo);
    }
}

export default Equipo;