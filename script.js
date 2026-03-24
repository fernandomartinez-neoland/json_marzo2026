const json_pelota = {
    forma: "esferica",
    color: "naranja",
    textura: "rugosa",
    "accion": "bota",
    "peso": "500g"

}
// el nombre de las propiedades puede ir o no dentro de comillas
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
console.log(json_pelota.textura)//imprime "rugosa" que es el valor de la variable json_pelota y su propiedad llamada "textura"
console.log(usuario.objeto.propiedades)//imprime "valor", que es el valor del objeto "usuario", la propiedad que es de tipo objeto llamado "objeto" y su propiedad interna llamada "propiedades"
console.log(parseInt(usuario.direcciones[6]))//imprime el "10" del objeto usuario
const arreglo=[]
arreglo[10]="mario"
console.log(arreglo)

json_pelota.nombre="pelotita"
console.log(json_pelota)

// variable["propiedad"]
console.log('json_pelota["nombre"]: ', json_pelota["nombre"]);


const nombre="fernando"

const profe={
    nombre
}
// const profe={
//     nombre:"fernando"
// }