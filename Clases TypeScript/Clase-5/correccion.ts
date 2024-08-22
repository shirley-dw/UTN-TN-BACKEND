// Ejercicio de Santiago Barletta correccion

class Empleado {
    nombre: string;
    sueldo: number;
    fecha_contratacion: Date;
    id_empleado: number;
    tipo: string;

    constructor(nombre: string, sueldo: number, fecha_contratacion: Date, id_empleado: number, tipo: string) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_contratacion = fecha_contratacion;
        this.id_empleado = id_empleado;
        this.tipo = tipo;
    }
}

class ManejadorDeEmpleados {
    empleados: Empleado[];
    id_manejador: number;
    tipos_permitidos: string[];
    contador_id: number;

    constructor(id_manejador: number) {
        this.empleados = [];
        this.id_manejador = id_manejador;
        this.tipos_permitidos = ["Project Manager", "Developer", "Designer", "Marketing"];
        this.contador_id = 1; 
    }

    agregarEmpleado(nombre: string, sueldo: number, fecha_contratacion: Date, tipo: string) {
        if (!this.tipos_permitidos.includes(tipo)) {
            console.log(`Error: El tipo de empleado "${tipo}" no es válido.`);
        } else {
            const nuevo_empleado = new Empleado(nombre, sueldo, fecha_contratacion, this.contador_id, tipo);
            this.empleados.push(nuevo_empleado);
            console.log(`Empleado ${nombre} agregado con éxito con ID ${this.contador_id}.`);

            this.contador_id++;
        }
    }

    obtenerEmpleadoPorId(id_empleado: number) {
        const empleado = this.empleados.find(empleado => empleado.id_empleado === id_empleado);

        if (empleado) {
            console.log(`El empleado con ID: ${empleado.id_empleado} es ${empleado.nombre}`);
        } else {
            console.log(`No se encontró ningún empleado con ID: ${id_empleado}`);
        }
    }

    obtenerEmpleadosPorTipo(tipo: string) {
        const empleados_filtrados = this.empleados.filter(empleado => empleado.tipo === tipo);

        if (empleados_filtrados.length > 0) {
            console.log(`Empleados de tipo "${tipo}":`);
            empleados_filtrados.forEach(empleado => {
                console.log(`- ID: ${empleado.id_empleado}, Nombre: ${empleado.nombre}, Sueldo: ${empleado.sueldo}`);
            });
        } else {
            console.log(`No se encontraron empleados de tipo "${tipo}".`);
        }
    }
}

const manejador_de_empleados = new ManejadorDeEmpleados(1);

manejador_de_empleados.agregarEmpleado('Santiago Barletta', 1000000, new Date(), 'Project Manager');
manejador_de_empleados.agregarEmpleado('Pepe Pompím', 500000, new Date(), 'Developer');
manejador_de_empleados.agregarEmpleado('Freddy Kruegger', 350000, new Date(), 'Designer');
manejador_de_empleados.agregarEmpleado('Jason Voorhees', 300000, new Date(), 'Marketing');

console.log(manejador_de_empleados);
manejador_de_empleados.obtenerEmpleadoPorId(1);
manejador_de_empleados.obtenerEmpleadosPorTipo('Developer');
manejador_de_empleados.obtenerEmpleadosPorTipo('Marketing');