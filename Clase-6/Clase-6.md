Clase 6º 28/8

# Temas:
· Correccion ejercicio de POO y TS.
· SQL introduccion con diapositivas.

# INVESTIGAR MySQL mysql2 Y MONGOOSE / SUPABASE

_________________________________________________________________···______________________________________________________________________________________

# Bases de datos:
Una base de datos es un sistema para archivar información en una computadora cuyo propósito general es mantener información y hacer que esté disponible 
cuando se la solicite.
Entonces, la podemos definir como una serie de datos organizados y relacionados entre sí, los cuales son recolectados y explotados 
por los sistemas de información de una empresa o negocio en particular.

* Apunte: 
- Informacion persistente y disponibilidad de la misma cuando se la precise (Facil acceso).
- Es una serie de datos organizados y relacionados entre si.

# Características:
* Independencia lógica y física de los datos:
  Datos separados del producto en si mismo, no son validas planillas o excel.

* NO HAY Redundancia mínima:(Repeticion de datos)
  Una base de datos relacional funciona con un modelo de tablas, las mimas tiene distintas tablas asociadas 
  ej: contactos / mensajes / etc. 
  La tabla se compone por distintas columnas y grillas, ej: tablas: id / telefono / nombre, 
  si quiero guardar un usuario debo de guardarlo en distinas filas, asi sucesivamente (ESTO ES UN MODELO DE TABLA).
  De este modo en distintas tablas se repetirian los datos, lo cual la base de datos tiene redunciancia minima 
  utilizando referencias para minimizar 
  la repeticion de datos.

* Acceso concurrente por parte de múltiples usuarios:
  Recibe multiples consultas lo que permite que no se corrompa el archivo en el caso de que multiples personas accedan al mismo para modificarlo o consultar.

* Integridad de los datos:
  Los datos tienen tipado, lo que asegura que los mismos pertenezcan al tipo de dato correcto.

* Consultas complejas optimizadas:
  Si un JSON tiene 10.000 archivos y tarda 2 segundos, base de dato tardara 0.5 segundos, lo que permite velocidad al acceder a cada consulta, 
  las mismas serian optimizadas y mejoran los recursos de la empresa.

* Seguridad de acceso y auditoría:
  Permite administrar los usuarios que entran a la vace de datos, y auditoria para acceder a los datos de la misma.

* Respaldo y recuperación: Sistema de BackUp.

* Acceso a través de lenguajes de programación estándar:
  Se puede acceder con la mayoria de lenguajes de programacion.

_________________________________________________________________···______________________________________________________________________________________

# Tablas y columnas:
Cada base de datos se compone de una o más tablas que guardan un conjunto de datos.
  Cada tabla tiene una o más columnas y filas. Las columnas guardan una parte de la información sobre cada elemento 
  que queramos guardar en la tabla,
  cada fila de la tabla conforma un registro.

Las tablas y columnas son componentes fundamentales en una base de datos relacional:

# Tablas:
Una tabla es una estructura que organiza los datos en filas y columnas. 
Cada tabla en una base de datos representa una entidad específica, como clientes, productos o pedidos.

# Columnas:
Las columnas son los campos de una tabla y definen el tipo de datos que se almacenan en cada registro. 
Cada columna tiene un nombre y un tipo de dato asociado, como texto, número, fecha, etc.

* Ejemplo de una tabla
Imagina una tabla llamada Clientes en una base de datos de una tienda en línea. Esta tabla podría tener las siguientes columnas:

· ID: Un identificador único para cada cliente.
· Nombre: El nombre del cliente.
· Apellido: El apellido del cliente.
· Correo Electrónico: La dirección de correo electrónico del cliente.
· Teléfono: El número de teléfono del cliente.

# Relaciones entre tablas:
Las tablas pueden estar relacionadas entre sí mediante claves primarias y claves foráneas. 
La clave primaria es un campo que identifica de manera única cada registro en una tabla, 
mientras que la clave foránea es un campo que establece una 
relación con la clave primaria de otra tabla.

* Ejemplo: Podrías tener una tabla Pedidos que tenga una columna ClienteID que se relacione con la columna ID de la tabla Clientes. 
* Esto permite vincular cada pedido con el cliente correspondiente.

# Beneficios de usar tablas y columnas
· Organización: Facilitan la organización y el acceso a los datos.
· Eficiencia: Permiten realizar consultas rápidas y eficientes.
· Integridad: Ayudan a mantener la coherencia y precisión de los datos.
· Si tienes alguna pregunta específica sobre cómo diseñar tablas o columnas para tu proyecto, ¡no dudes en preguntar!

_________________________________________________________________···______________________________________________________________________________________

# Llaves o claves primarias
Una clave primaria es un campo (o varios) que identifica unívocamente 1 solo registro (fila) en una tabla. 
Para un valor del campo clave existe solamente 1 registro. Los valores no se repiten ni pueden ser nulos.

Una tabla sólo puede tener una clave primaria. Cualquier campo (de cualquier tipo) puede ser clave primaria, 
debe cumplir como requisito, 
que sus valores no se repitan.

* RESUMEN:
- Clave primaria: Es un campo (o combinación de campos) que identifica de manera única cada registro en una tabla.

- Unicidad: Cada valor de la clave primaria es único y no se repite.

- No nulo: Los valores de la clave primaria no pueden ser nulos.

- Única por tabla: Cada tabla puede tener solo una clave primaria.

- Cualquier tipo: Cualquier campo puede ser clave primaria, siempre que sus valores sean únicos y no nulos.

_________________________________________________________________···______________________________________________________________________________________

# Llaves o claves foráneas 
Son campos llave que permiten referenciar unívocamente a un registro que está dentro de otra tabla.
Para poder añadir una fila con un valor de clave foránea específico,
 debe existir una fila en la tabla relacionada con el mismo valor de clave primaria.

_________________________________________________________________···______________________________________________________________________________________

# Tipos de datos SQL :
Cadena (cadena de texto o alfanumérica) 	=>	VARCHAR(tamaño)
Número entero (sin decimales)			    =>	INT
Número decimal                          	=>	FLOAT
Fecha 							            =>	DATE



# Tipos de campo: (DATOS)
Introduccion MySQL  (y BD reacionales):
https://docs.google.com/presentation/d/1UJIs_-nwcWEKf_SW6rEt8A1VUkRPQ0wPmnaissdebr0/edit?usp=sharing

* Alfanuméricos: Contienen cifras y letras. Presentan una longitud ilimitada (255 caracteres).

* Numéricos: Existen dos tipos principales, enteros (sin decimales) y reales (con decimales).

* Booleanos: Almacenan dos valores: Verdadero o falso (Sí o No).

* Fechas: Almacenan fechas facilitando posteriormente su explotación. Poseen formatos estándar para simplificar 
  ordenar las fechas o calcular diferencias entre una fecha
  y otra.

* Memos: Son campos alfanuméricos de longitud ilimitada. Presentan el inconveniente de no poder ser indexados 
  (veremos más adelante lo que esto quiere decir).

* Autoincrementables: Son campos numéricos enteros que incrementan en una unidad su valor cada vez que se inserta un nuevo registro
  en la tabla donde están definidos. 
  Su utilidad resulta muy evidente: Servir de identificador ya que resultan exclusivos de cada registro.

_________________________________________________________________···______________________________________________________________________________________

# PHP MY ADMIN:
* Es un software de código abierto.
* Aporta una interfaz visual basada en el navegador a MySQL, facilitando el trabajo con la base de datos. 
* Está escrito en PHP. (podemos gestionarla en la web)
* La mayoría de alojamiento web incluyen acceso a phpMyAdmin.

_________________________________________________________________···______________________________________________________________________________________


