const {createTxt} = require('./utils/filesystem.js'); //Importo la funcion createTxt desde el archivo filesystem.js

createTxt('Mi primer archivo', 'Shirley Vokac :)');


/* 
# Creo mi archivo:
- Creo una variabre fileSystem y la igualo a require('fs')
- Require lo que hace es importar modulos o librerias para que puedan ser utilizadas en el proyecto.
- writeFileSync es una funcion que nos permite escribir archivos, necesita recibir tres parametros el primero es el tipo
  de archivo que vamos a crear, el segundo es el texto y el tercero es encoding indicando que tipo de archivo es.
- encoding: 'utf-8' es para que me acepte los caracteres especiales.


 */