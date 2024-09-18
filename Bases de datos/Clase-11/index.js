
//Require es una funcion que nos permite importar modulos
const filesystem = require('fs'); //libreria para leer y escribir archivos
filesystem.writeFileSync('prueba.txt', 'Hola mundo', {encoding: 'utf-8'}); // Escribir archivo

/* Recibe tres valores, tipo de archivo, el texto, y la configuracion de escritura, encoding: 'utf-8' es para que me acepte 
los caracteres especiales */

filesystem.readFileSync('prueba.txt', {encoding: 'utf-8'}); //Leer archivo con readFileSync (Sync es sincrono)63

/* 
# Creo mi archivo:
- Creo una variabre fileSystem y la igualo a require('fs')
- Require lo que hace es importar modulos o librerias para que puedan ser utilizadas en el proyecto.
- writeFileSync es una funcion que nos permite escribir archivos, necesita recibir tres parametros el primero es el tipo
  de archivo que vamos a crear, el segundo es el texto y el tercero es encoding indicando que tipo de archivo es.
- encoding: 'utf-8' es para que me acepte los caracteres especiales.


 */