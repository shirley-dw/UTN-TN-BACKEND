Clase 10º 16/09/2024

# Temas:
· MONGOSH
· MONGODB
· COMANDOS MONGOSH

# Anotaciones:
· No es una base de datos, es un servidor.
· La terminal se le dice CMD.

___________________________________________________________________ººº_______________________________________________________________________

# Pasos MONGOSH:
· Abro Mongo
· New Conecction click
· Esto me abre la base de datos local
· Click a la base de datos LocalHost y toco icono de terminal ->
· Con use creo la base de dato luego inserto el name.
· En BDD no relacional activo el metodo db.createCollection("Doy nombre a la coleccion, ej: test")


# Creo una coleccion:
<!-- use UTN-TN-DIPLOMATURA //Use es para crear la coleccion, luego inserto el name.
switched to db UTN-TN-DIPLOMATURA
db.createCollection("test")
{ ok: 1 } //Signica que todo esta bien. 
UTN-TN-DIPLOMATURA -->

___________________________________________________________________ººº_______________________________________________________________________

# METODOS MONGOSH:
  Estos son comandos que se usan para interactuar con la base de datos.

# Creo elementos en mi coleecion insertOne:
  Estos se insertan con un estilo de formato tipo JSON.
· Ejemplo:
db.test(nombre de coleccion).inserOn({"nombre": "pepe"}) //Asi creo un elemento.

# Creo varios elementos en mi coleecion insertMany:
  Estos es para insertar varios elementos a la vez, se hace con fromato Array y se ve como un JSON.
· Ejemplo:
db.test.insertMany([{"nombre": "pepe"}, {"nombre": "juan"}])// Array de objetos

# Filtrar elementos de la coleccion find():
  Metodo de busqueda, si el mismo no encuentra nada me trae todos los elementos de la coleccion, se pueden hacer filtros 
  si quiero buscar los elementos llamados pepe me devuelve el mismo, si no le paso filtro al find me trae todos.
· Ejemplo:
db.test.find(Aca es donde pones el filtro, ejemplo: {"nombre": "pepe"} con el formato de objeto)

# Eliminar elementos de la coleccion deleteOne:
  DeleteOne elemina un elemento de la coleccion, no todos.
· Ejemplo:
db.test.deleteOne({"nombre": "pepe"})

# Eliminar elementos de la coleccion deleteMany:
  DeleteMany elimina todos los elementos de la coleccion.
· Ejemplo:
db.test.deleteMany({"nombre": "pepe"})

___________________________________________________________________ººº_______________________________________________________________________

# Metodos de busqueda y filtrado en la coleccion:
  Casos en los que podria usar find con sus respectivos comandos $regex/$gt/$gte/$lt

* Buscar a todos los elementos que cummpkan con la condicion de que su nombre cumple con la expresion regular 'usuario' en la coleccion test.
  (significa que empieza con 'usuario') 
· Ejemplo:
  db.test.find(
    nombre{$regex: 'usuario'}
   )
.limit(2) Me traera dos elementos.

* Buscar todos los elementos que cumplan con la condicion de que su nombre sea 'pepe' o 'juan' en la coleccion test.
  (significa que empieza con 'pepe' o 'juan') 
· Ejemplo:
db.test.find(
    nombre{$regex: 'pepe|juan'}
)
.limit(2) Me traera dos elementos.

* Filtrar por una edad mayor a 70:
db.test.find({
    edad: {$gt: 70}     
})

* Filtrar por una edad menor a 70:
db.test.find({
    edad: {$lt: 70}     
})

* Filtrar por una edad mayor o igual a 70:
db.test.find({
    edad: {$gte: 70}     
})


___________________________________________________________________ººº_______________________________________________________________________
