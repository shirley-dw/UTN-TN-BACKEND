class Producto {
    /* El constructor es una funcion que se a ejecutar cuando se cree el producto */
    constructor(nombre){
        console.log("Creando un producto con clase, yeah ")
        /* This es una autoreferencia al objeto que retornara la clase */
        console.log(nombre)
        this.x_valor = 'hola'
        this.precio = 0
        this.nombre = nombre
    }

    /* Metodos  esta es una declaracion de un metodo*/
    presentarProductos() {
        console.log('Hola este producto se llama' + this.nombre)
    }
}

venderProducto = () => {
    console.log('Vendiste un producto')
}

//Instanciar la clase Producto, esto retorna un objeto

let resultado = new Producto('Tv Samsung')
/* new Producto('Tv Noblex') //Instancio la clase
console.log(resultado) // Instancio el objeto
console.log(typeof(resultado)) */
resultado.presentarProductos() // Ejecuto el metodo, esta se puede ejecutar las veces que yo quiera.

//Metodos

