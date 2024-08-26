JClase 4º 19/08 TypeScript

# Programacion orientada a objetos (POO):


La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en el concepto de objetos. Aquí tienes algunos conceptos clave:

* Objetos: Los objetos son instancias de una clase. Representan entidades del mundo real y contienen atributos (variables) y métodos (funciones).

* Clases: Las clases son plantillas o moldes para crear objetos. Definen las propiedades y comportamientos que los objetos tendrán.
Atributos: Son las variables dentro de un objeto. Representan características específicas del objeto.

* Métodos: Son funciones dentro de un objeto. Definen las acciones que el objeto puede realizar.

* Encapsulación: Es el concepto de ocultar los detalles internos de un objeto y exponer solo lo necesario. Se logra mediante el uso de modificadores de acceso (como public, private y protected).

* Herencia: Permite crear una nueva clase basada en una clase existente. La nueva clase hereda atributos y métodos de la clase base.
Polimorfismo: Permite que un objeto pueda tomar diferentes formas. Por ejemplo, varios bjetos de diferentes clases pueden responder al mismo método de manera diferente.

# Interface:
 En TypeScript, las interfaces cumplen la función de nombrar estos tipos y son una forma eficaz de definir contratos dentro de su código, así como contratos con código fuera de su proyecto.

Las interfaces, describen la estructura del objeto, lo que significa que describe cómo debería verse el objeto. En TypeScript, una interfaz solo contiene la definición de métodos y propiedades, no su implementación. Es la funcionalidad de la clase que realiza la conexión entre la interfaz proporcionando la conexión con todos los parámetros de la interfaz.

* Crear una interfaz
Al crear una nueva interfaz,  debe usarse la palabra clave. Esta palabra clave debe ir seguida del nombre de la interfaz. Los corchetes deben contener la forma de un objeto, las propiedades y los tipos. Las propiedades y tipos se especifican como “valor clave” pares al crear la interfaz.

* Ejemplo de interfaces simples de TypeScript:
  // Create interface Person:

interface Person {
  name: string;
  age: number;
  hairColor: string;
  weight: number;
  height: number;
}

// Create interface Car:

interface Car {
  model: string;
  manufacturer: string;
  numberOfWheels: number;
  type: string;
}

# El objeto en TypeScript:
 Nos permite definir tipos de datos personalizados con la composición de nuestra elección. Hay dos formas en que podemos crear un objeto en TypeScript. Uno está usando el nuevo constructor Object () y otro es usar corchetes de flores - {}. El siguiente ejemplo demuestra cómo podemos crear el mismo objeto utilizando estas dos técnicas.

* Ejemplo de objetos simples de TypeScript:

let planet = new Object();
let planet = {};
const mixed = [1, 'hola', true]; // Array de diferentes tipos MALA PRACTICA MIXEO DATOS
const nombre = ['pepe', 'juan']; // Array de strings con tipado de datos 
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de numeros

# Class en TypeScript:
Una clase es como una estructura predefinida que sirve como molde para crear Objetos. En este «molde» se declaran atributos y métodos;  un atributo puede ser una variable, y un método puede ser una función, si lo comparamos con Javascript.
Clase: Cada clase es un modelo que define un conjunto de variables (el estado), y métodos apropiados para operar con dichos datos (el comportamiento). Cada objeto creado a partir de la clase se denomina instancia de la clase.

* Atributos: son variables internas de la clase, muchas veces, al conjunto de los atributos de una clase se los llama «estado» de la clase. Estas variables pueden ser cualquier tipo de Typescript (string, number, boolean, etc) o pueden ser, también, otros objetos.

* Métodos: se llama métodos al comportamiento que puede tener una clase. Dicho de otra forma, son cachos de código que se pueden ejecutar. Estos métodos son internos de la clase y, un método puede tener acceso al estado de su clase (a sus atributos).

* this: Como se puede apreciar, se usa la palabra reservada “this”  para acceder tanto a los atributos como a los métodos dentro de la clase. Algo de lo que no tenes qué preocuparte en Typescript, es que “this” usado dentro de una clase siempre apunta al objeto creado por esa clase.