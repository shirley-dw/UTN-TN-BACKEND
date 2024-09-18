Clase 11º 18/09/2024

# TEMAS:
· Introduccion a Node.js.
· Iniciar un proyecto Node.js.
· Caracteristicas de Node.
· Iniciar un servidor Node.js.
· Nodemon.

_________________________________________________________________________________________________________________________________________________

# Anotaciones:
· Para iniciar un proyecto Node.js tengo que crear un INDEX.JS (Punto de entrada o ENTRY POINT)
· Abro terminal y escribo el comando npm init -y para crear el package.json (que es el archivo que contiene la configuracion de mi proyecto).
* Indico en package.json que es un proyecto Node.js y que lo manejare con nodemon:
  Ejemplo: 
   "scripts": {
    "dev":"nodemon index",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
(EN SCRIPTS AGREGO "dev": "nodemon index")
_________________________________________________________________________________________________________________________________________________

# Pasos para inicia run proyecto Node.js:
· Primer paso abrir la terminal y escribir npm init -y para crear el package.json.
· Luego abrir la terminal y escribir npm install express para instalar express (express es el servidor que me permite crear un servidor web).
· Instalo de manera global npm instal -g nodemon
 (nodemon es una libreria de desarrollo que nos permite ejecutar el codigo cada vez que guarde Ctrl + S).
· npm install -D nodemon para instalar de manera local el nodemon esto indica a otro desarrollador que estamos trabajando con tal libreria.

_________________________________________________________________________________________________________________________________________________

# Node.js:
 Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor, fuera del navegador.
 Fue creado en 2009 por Ryan Dahl y se basa en el motor V8 de Google Chrome, que es el motor de JavaScript de alto rendimiento de Google.

* Características principales de Node.js:
- Asincronía y no bloqueo: Node.js utiliza un modelo de E/S no bloqueante y basado en eventos, lo que lo hace muy eficiente y adecuado 
  para aplicaciones que requieren manejar muchas conexiones simultáneas, como servidores web y aplicaciones en tiempo real.
- Un solo hilo: Aunque Node.js opera en un solo hilo, puede manejar múltiples conexiones concurrentes gracias a su arquitectura 
  basada en eventos.
- Multiplataforma: Funciona en Windows, macOS y Linux, lo que lo hace muy versátil para diferentes entornos de desarrollo.

* Casos de uso comunes:
- Aplicaciones en tiempo real: Como chats en línea y juegos multijugador.
- APIs RESTful: Para construir servicios web que interactúan con bases de datos y otros servicios.
- Aplicaciones de una sola página (SPA): Donde el frontend y el backend pueden estar escritos en JavaScript,

________________________________________________________________________________________________________________________________________________

# Nodemon:
 Nodemon es una herramienta muy útil para el desarrollo de aplicaciones basadas en Node.js. 
 Su principal función es monitorear los archivos de tu aplicación y reiniciar automáticamente el servidor cuando detecta cambios en el código.

 _________________________________________________________________________________________________________________________________________________
# Require:
  Require es una funcion que nos permite importar modulos.
- Ejemplo de uso:
  const filesystem = require('fs'); //libreria para leer y escribir archivos
  filesystem.writeFileSync('prueba.txt', 'Hola mundo', {encoding: 'utf-8'}); // Escribir archivo


# Creo mi archivo:
- Creo una variabre fileSystem y la igualo a require('fs')
- Require lo que hace es importar modulos o librerias para que puedan ser utilizadas en el proyecto.
- writeFileSync es una funcion que nos permite escribir archivos, necesita recibir tres parametros el primero es el tipo
  de archivo que vamos a crear, el segundo es el texto y el tercero es encoding indicando que tipo de archivo es.
- encoding: 'utf-8' es para que me acepte los caracteres especiales.
