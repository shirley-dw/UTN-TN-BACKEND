Clase 3º 14/08 Backend UTN TN PWI

# Temas de la clase:
· Typescript introduccion.
· Instalacion de typescript.
· Variables de typescript.
· Practicas de typescript.

# Instalamos Typescript de manera global:
· En la terminal con Ctrl + J escribo "npm i -g typescript"
· Para corroborar que se haya instalado bien hago "tsc"
· Al poner el comando tsc suele salir un error es un problema de los usuarios de Windows.
· Este se habilita desde la terminal de PowerShell.

# Habilitar Scripts como usuarios de Windows: 
* Abro PowerShell y hago click derecho para iniciar como administrador y escribo el siguiente comando 
  => Set-ExecutionPolicy Unrestricted y contianos dandole SI a todo.

# Objetivos de la clase:
· Comprender las características principales de TypeScript.
· Identificar las diferencias entre TypeScript y JavaScript.
· Practicar la sintaxis básica de TS a través de ejemplos y ejercicios.

# ¿Que es typescript?
Es un lenguaje de programación libre y de código abierto desarrollado por Microsoft que se basa en JavaScript y que añade características adicionales a este último, como el tipado estático, interfaces, clases, entre otras. TS se puede compilar en JavaScript, lo que significa que cualquier código TS puede ser ejecutado en un navegador web o en cualquier plataforma que soporte JavaScript.

# ¿Por qué es importante aprender TS?

1) Mejora la calidad del código: TypeScript es un lenguaje de programación tipado estáticamente, lo que significa que los tipos de datos se declaran en tiempo de compilación. Esto ayuda a evitar errores comunes en tiempo de ejecución, lo que conduce a una mayor calidad del código y a la eliminación de errores que de otro modo serían difíciles de detectar.
2) Es compatible con JavaScript: es una extensión de JS, lo que significa que el código puede ser compilado en JS y ejecutado en cualquier plataforma que soporte JavaScript. Esto hace que TypeScript sea una herramienta muy versátil.
3) Permite el uso de características modernas de ECMAScript: admite las características más modernas de ECMAScript, lo que significa que los desarrolladores pueden escribir código moderno y usar las características más recientes de JavaScript antes de que estén disponibles en todos los navegadores.

# ¿ Que es el tipado estatico?
Se refiere a la definición de tipos de datos para variables, parámetros, funciones y otros elementos de tu código.
Significa que se le puede cambiar el valor del dato "pepe" / "juan" pero no su tipo de dato es decir si mi variable llama a un string solo podra referenciarse a strings o en el caso de que sea number solo a datos number.

# Typescript se puede compilar a JS lo que significa que un archivo de TS se puede transformar en todo contexto a un archivo JS :
Se puede decir que en cualquier lugar donde se interprete JS tambien se podria usar TS.
El navegador no entiende TS por lo que no lee archivos srcript.ts, este es un lenguaje que unicamente se puede compilar a JS.

# Ejemplo en JS:
const saludar = (persona) => {
    console.log('hola' + persona)
}
let personita = {nombre: 'pepe', apellido: 'suarez'}

saludar(personita) <!-- Llamo a la funcion saludar  -->

* Esto da hola [Objet object] se debe a que estás intentando concatenar un objeto con una cadena de texto en tu función saludar. Cuando concatenas un objeto con una cadena de texto, JavaScript llama automáticamente al método toString() del objeto para convertirlo en una cadena. El método toString() de un objeto en JavaScript devuelve la cadena "[object Object]"

# Ejemplo en TS:
const saludar = (persona : string) => {
    console.log('hola' + persona)
}
let personita = {nombre: 'pepe', apellido: 'suarez'}

saludar(personita.nombre)

* Debo asignar string a la propiedad persona y luego para saludar debo llamar a la propiedad nombre de personita.