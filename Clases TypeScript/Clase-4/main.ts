/* Objetos */

/* Interface permite declara un tipado para un objeto y luego llamarlo como tal */
interface Producto {
    nombre: string,
    precio: number,
    id: number,
    categoria: string,
    stock: number
}
/* Defino un objeto y le asigno el tipado estableciendo el tipo de dato que voy a utilizar */
const producto : Producto = {
    nombre: 'Tv Samsung',
    precio: 1000,
    id : 1,
    categoria: 'TECNOLOGIA',
    stock: 5
}
const producto_2 : Producto = { //Llamo a la interface Producto
    nombre: 'Tv Noblex',
    precio: 1000,
    id : 2,
    categoria: 'TECNOLOGIA',
    stock: 3
}

console.log(producto.nombre)/* Accedo a un atributo con el punto */
console.log(producto['nombre']) /* Acceder a un atributo con corchete y entre comillas */

/* Mala practica ya que en JS esto funciona y se modifica el objeto original */
const venderProducto = (producto: Producto) => {
    console.log('Haz vendido:'+ producto.nombre + 'y ahora te quedan' + producto.stock)
}
// Creando una propiedad
producto.stock = 10 
/* Esto en JS se puede realizar pero no se sugiere ya que modifica el objeto original al que apunta */


// Reasigno el valor de la propiedad
producto.nombre = 'Tv Noblex'

// Instacio los objetos
venderProducto(producto)
venderProducto(producto_2)


const mixed = [1, 'hola', true] // Array de diferentes tipos MALA PRACTICA MIXEO DATOS

const nombre: string [] = ['pepe', 'juan'] // Array de strings con tipado de datos 

const notas : number [] = [1,2,3,4,5,6,7,8,9,10] // Array de numeros

// Array de objetos
const productos: Producto [] = [
    producto,
    producto_2] 



/* 
POO vs FP: Programacion funcional vs POO
Actualmente utilizamos programacion funcional para resolver problemas complejos y reutilizar codigo.

POO: Programacion orientada a objetos
La programación orientada a objetos (POO) es un paradigma de programación que se basa en el uso de objetos y clases para modelar conceptos y problemas del mundo real. En la POO, un objeto es una entidad que contiene datos y métodos que actúan sobre dichos datos.

El constructor: es un mecanismo para crear objetos de una clase y inicializar sus propiedades.Es una funcion que se va a ejecutar cuando se intente instanciar el producto.

Clases: Es un molde para crear objetos, estas devuelven una instancia de la clase.

This: es una palabra reservada que hace referencia al objeto que se esta creando. 
Es una autoreferencia al objeto que retorna la clase.

New: New su utiliza para crear una nueva instancia de una clase.
*/


// Buena practica: Clases con mayusculas
class Producto {
        constructor(nombre: string) {
        this.nombre = nombre // This es una palabra reservada vale de manera distinta para cada atributo
        
    }
}

/* new Producto('Tv Samsung') // Esto se llama instanciar la clase producto
new Producto('Tv Noblex') // Cada vez que instancie el mismo se va a ejecutar el constructor
 */

/* let resultado = new Producto() 
new Producto()

console.log(resultado)
console.log(type(resultado)) // Devuelve un objeto
 */


class Usuario {
    nombre: string
    role: string
    email: string
    clave: string
    edad: number
    cuit: number
    id: number
    constructor (nombre: string, role: string, email: string, clave: string, cuit: number, edad: number, id: number) {
       this.nombre = nombre
       this.role = role
       this.email = email
       this.clave = clave
       this.cuit = cuit
       this.edad = edad
       this.id = Usuario.length // Usuario.length es una propiedad de la clase
    }
}

new Usuario('Shirley', 'admin', 'pepe@pepe', 'pepe123', 123456789, 18, 1)
new Usuario('pepe', 'admin', 'pepe@gmail', 'pepesito124', 123456789, 20, 1)

const  usuario_1 = new Usuario('Shirley', 'admin', 'pepe@pepe', 'pepe123', 123456789, 18, 1)
const  usuario_2 = new Usuario('pepe', 'admin', 'pepe@gmail', 'pepesito124', 123456789, 20, 1)