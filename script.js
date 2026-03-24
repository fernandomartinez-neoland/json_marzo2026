const json_pelota = {
    forma: "esferica",
    color: "naranja",
    textura: "rugosa",
    "accion": "bota",
    "peso": "500g"

}

const usuario = {
    nombre: "fernando",
    "apellido": "martinez",
    direcciones: ["casa", "trabajo", {}, 5, [], true, "10"],
    objeto: { propiedades: "valor" }

}

const boton={
    style:{
        backgroundColor:"rojo"
    }
}

// boton.style.backgroundColor
// variable.propiedad
console.log(json_pelota)
console.log(json_pelota.textura)
console.log(usuario.objeto.propiedades)
console.log(parseInt(usuario.direcciones[6]))
const arreglo=[]
arreglo[10]="mario"
console.log(arreglo)

json_pelota.nombre="pelotita"
console.log(json_pelota)

// variable["propiedad"]
console.log('json_pelota["nombre"]: ', json_pelota["nombre"])