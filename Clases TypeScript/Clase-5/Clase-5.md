Clase 5º 21/08 

# Temas de la clase:
- Correcion de ejercico POO (Clase-4)
- Mejoras en la compilacion de TS
- Herencia
- 


# Automatizacion de compilacion de ts a js:
· Comando en terminal : tsc --watch => Starting compilation in whatch mode...
- Para usar este comando sugiere desactivar el autoGuardado (Auto Save) en file.
· Comando para iniciar TS:
- tsc --init en la terminalr y continua con tsc para que compile (Siempre abriendo la carpeta donde esta instalado TS).

# Apuntes:
- New () : En Programación Orientada a Objetos (POO), la palabra clave new se utiliza para instanciar (crear) un objeto a partir de una clase.
Ejemplo: New Empleado('pepe',1000, new Date(), 1, 'Developer') Creo un nuevo empleado.

- Metodos: un método es un procedimiento asociado a una clase. Define el comportamiento de un objeto de esa clase. Los métodos permiten a los objetos realizar acciones específicas o responder a eventos. Cada método tiene un nombre único y puede tener parámetros que le permiten recibir información y realizar operaciones en ella. Además, los métodos favorecen la reutilización de código y la organización estructurada del programa.

Ejemplo TAREA CLASE 4º:  agregarEmpleado(nuevoEmpleado: Empleado) {
            this.empleados.push(nuevoEmpleado)
            
        }

- extends : La palabra clave “extends” en programación orientada a objetos (POO) se utiliza para crear una clase que hereda de otra clase. SI USO EXTENDS TENGO QUE USAR SUPER()
Ejemplo:
class Pasante extends Empleado{
     tiempo_de_contratacion: number
     constructor(){
       
     }
}

- super(): Es la invocacion del contructor anterior, palabra reservada para llamar otro constructor.
#  Herencia:
La herencia permite que una clase obtenga las mismas características de otra clase (llamada clase padre).
Puedes añadir nuevas propiedades o modificar las heredadas.
La ventaja es evitar repetir código y acelerar el desarrollo de aplicaciones2.

Ejemplo:
class Pasante extends Empleado{

    tiempo_de_contrato_en_meses : number
    constructor(
        nombre: string, 
        sueldo: number, 
        fecha_contratacion: Date, 
        id_empleado: number, 
        tipo: Puesto, 
        tiempo_de_contrato_en_meses: number
    ){
        /* Esta es la invocacion del constructor del Empleado */
        super(nombre, sueldo, fecha_contratacion, id_empleado, tipo) // Hereda los datos del constructor Empleado
        this.tiempo_de_contrato_en_meses = tiempo_de_contrato_en_meses // Nueva propiedad 
    }
}

# Polimorfismo:
Es una técnica que permite que los objetos de diferentes clases respondan a un mismo mensaje de diferentes maneras. En otras palabras, el mismo método puede tener comportamientos distintos según la clase del objeto que lo recibe.
Nos permite flexibilidad al trabajar con objetos, ya que podemos tratar diferentes tipos de objetos de manera uniforme, independientemente de su clase específica.