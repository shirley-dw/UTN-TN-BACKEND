// Ejercicio con TypeScript (POO) Clase 4º 19/08

/* #Como desarrolle un sistema de gestión de empleados
1) enum: Enumere los tipos de empleados por su trabajo.
2) Creo la class Empleado asigno sus tipos de datos,  creo el constructor y los metodos.
3) Creo la class ManejadorEmpleados que va a tener un id y una lista de empleados.
4) Creo el metodo agregarEmpleado que agrega un nuevo empleado a la lista de empleados con un push a la lista.
5) Creo el metodo obtenerEmpleadoPorId que va a tener un find y va a retornar un objeto o undefined.
6) Creo el metodo obtenerEmpleadosPorTipo que va a tener un filter y va a retornar un array de objetos.

# Luego instancio cada clase y ejecuto los metodos con new Empleado y new ManejadorEmpleados, asignadole los datos al mismo tiempo.
*/

    enum TipoEmpleado {
        ProjectManager = 'Project Manager',
        Developer = 'Developer',
        Designer = 'Designer',
        Marketing = 'Marketing'
    }
    
    class Empleado {
        nombre: string
        sueldo: number
        fecha_de_contratacion: Date
        id_empleado: number
        tipo: TipoEmpleado
    
        constructor(nombre: string, sueldo: number, fecha_de_contratacion: Date, id_empleado: number, tipo: TipoEmpleado) {
            this.nombre = nombre
            this.sueldo = sueldo
            this.fecha_de_contratacion = fecha_de_contratacion
            this.id_empleado = id_empleado
            this.tipo = tipo
        }
    }

    class ManejadorEmpleados {
        id_manejador: number
        empleados: Empleado[]
    
        constructor(id_manejador: number, empleados: Empleado[]) {
            this.id_manejador = id_manejador
            this.empleados = empleados
            
        }
    
        agregarEmpleado(nuevoEmpleado: Empleado) {
            this.empleados.push(nuevoEmpleado)
            
        }
    
        obtenerEmpleadoPorId(id: number): Empleado | undefined {
            return this.empleados.find((empleado) => empleado.id_empleado === id)
        }
    
        obtenerEmpleadosPorTipo(tipo: TipoEmpleado): Empleado[] {
            return this.empleados.filter((empleado) => empleado.tipo === tipo)
        }
    }

// Crear algunos empleados
const empleado1 = new Empleado('Juan', 3000, new Date(), 1, TipoEmpleado.ProjectManager);
const empleado2 = new Empleado('María', 2500, new Date(), 2, TipoEmpleado.Developer);
const empleado3 = new Empleado('Carlos', 2000, new Date(), 3, TipoEmpleado.Designer);

// Crear un manejador de empleados
const manejador = new ManejadorEmpleados(1, [empleado1, empleado2, empleado3]);

// Instancio la clase agregarEmpleado y agrego un nuevo empleado
const nuevoEmpleado = new Empleado('Ana', 2200, new Date(), 4, TipoEmpleado.Marketing);
manejador.agregarEmpleado(nuevoEmpleado);

// Instancio la clase obtenerEmpleadoPorId y obtengo un empleado
const empleadoEncontrado = manejador.obtenerEmpleadoPorId(2);
console.log('Empleado encontrado:', empleadoEncontrado);

// Instancio la clase obtenerEmpleadosPorTipo y obtengo empleados por tipo
const empleadosDeMarketing = manejador.obtenerEmpleadosPorTipo(TipoEmpleado.Marketing);
console.log('Empleados de Marketing:', empleadosDeMarketing);


/* 
1) enum:  Estructura de datos que permite definir un conjunto de valores constantes con nombres descriptivos.
Los valores dentro de un enum  no pueden modificarse.

2) class: Estructura de datos que permite definir una clase y sus atributos y metodos.

3) constructor: Es un mecanismo para crear objetos de una clase y inicializar sus propiedades.

4) this: es una palabra reservada que hace referencia al objeto que se esta creando.

5) new: New su utiliza para crear una nueva instancia de una clase.

6) metodos: Estructura de datos que permite definir una clase y sus atributos y metodos.

*/