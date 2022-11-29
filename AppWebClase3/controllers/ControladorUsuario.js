const usuarios = []

//CREATE
 export function crearUsuario(req, res){

    // const nombre = req.body.nombre;
    // const email = req.body.email;
    // const edad = req.body.edad;

    const {nombre, email, edad} = req.body

    if (nombre == null) {
        res.status(400).json("falta un nombre")
        return;
    }

    if (email == null){
        res.status(400).json("falta un email")
        return;
    }

    if (edad == null){
        res.status(400).json("falta un edad")
        return;
    }


    let usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        edad: req.body.edad,
        id: Math.random().toString(36).slice(2)
    }
    
    usuarios.push(usuario)
    
    res.json(usuario)

}

//READ
export function leerUsuario(req, res){

    const nombre = req.params.nombre;

    for (let index = 0; index < usuarios.length; index++) {
        const usuario = usuarios[index];
        
        if (usuario.nombre == nombre) {
            return res.status(200).json(usuario)
        }
    }

    res.status(200).json({mensaje: "No se encontro el usuario solicitado."})
}

export function listaUsuarios(res) {
    res.status(200).json(usuarios)
}

export function eliminarUsuario(req, res){

    const nombre = req.params.nombre;

    for (let index = 0; index < usuarios.length; index++) {
        const usuario = usuarios[index];
        
        if (usuario.nombre == nombre) {

            usuarios.splice(index)
            return res.status(200).json(usuario)
        }
    }

    res.status(200).json({mensaje: "No se encontro el usuario solicitado."})

}
