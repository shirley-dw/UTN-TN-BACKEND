Clase 7º 02/09

# Temas de la clase:
· Asigna continuacion del ejercicio POO con TS, agregando herencia y Polimosfismo.
· XAMPP: Descarga en clase 6º y explicacion de config en clase 7º

_________________________________________________________###________________________________________________________________

# ERROR TIPICO DE MYSQL: (ESTA PINEADO EN SLACK)
Resumen:
· Abrir CMD como administrador
· netstat -ano | findstr :3306 (o el puerto de tu MySQL)
· Tomar del respuesta del comando anterior el PID (mirar imagenes)
· taskkill /PID (aca iria su process id (PID)) /F ,  EJEMPLO: taskkill /PID 4960 /F
· Dar start otra vez a MySQL

_________________________________________________________###________________________________________________________________

# Click en admin MySQL:
· Creo mi base de dato, voy a nueva.
· Nombre : UTN_TN_PWA_AGOSTO2024 (NO ES CASE SENSITIVE).
· Para aprender BS(BASE DE DATOS) Haremos una base de dato simulando la de WhatsApp.

# Anotaciones:
* Todas las tablas normalmente tienen un ID.
* IMPORTANTE: Que siempre tenga una tabla de fecha de creacion.
* SI EL USUARIO FUE MODIFICADO: Importante que tenga una tabla de modificado_en.
* SIEMPRE CREAR UNA TABLA QUE SE LLAME ACTIVO / STATUS: Esta columna permite decidir si un usuario esta en status activo / pendiente / etc. O puede estar con un BOOLEANO (true/false). Permite controlar y luego manejar auditorias.


# CODIGO SQL:
Es el que se utiliza para crear tablas , columnas y etc. Con el cual voy a desarrollar la base de datos.

CREATE TABLE usuarios(
    user_id INT PRIMARY KEY  AUTO_INCREMENT ,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL ,
    activo BOOLEAN DEFAULT TRUE,
    create_in DATE DEFAULT CURRENT_DATE
    )

*    INDICACIONES EN MAYUSCULA
*    Minuscula nombre de tablas.

# Codigo para la creacion de la tabla de usuarios.
· PRIMARY KEY: Define la clave primaria de la tabla.
· AUTO_INCREMENT: Incrementa automaticamente el valor de la clave primaria.
· UNIQUE: Define que todos los valores de la clave sean unicos.
· NOT NULL: Define que el valor no puede ser nulo.
· DEFAULT TRUE: Define el valor por defecto de la columna.
· CURRENT_DATE: Define el valor por defecto de la columna como la fecha actual.

#  Tabla de contactos:
· PRIMARY KEY: Define la clave primaria de la tabla.
· AUTO_INCREMENT: Incrementa automaticamente el valor de la clave primaria.
· UNIQUE: Define que todos los valores de la clave sean unicos.
· NOT NULL: Define que el valor no puede ser nulo.
· DEFAULT TRUE: Define el valor por defecto de la columna.
· CURRENT_DATE: Define el valor por defecto de la columna como la fecha actual.

# Example:

CREATE TABLE contactos (
    contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL UNIQUE,
    usuario_contacto_id INT NOT NULL UNIQUE,
    activo BOOLEAN DEFAULT TRUE,
    create_in DATE DEFAULT CURRENT_DATE
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_contacto_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    UNIQUE(user_id, usuario_contacto_id)
    ) 
Explicacion:
# contacto_id: Es la clave primaria de la tabla de contactos esto se indica con PRIMARY KEY, AUTO_INCREMENT indica que la
 clave primaria se incrementa automaticamente, UNIQUE indica que todos los valores de la clave sean unicos, NOT NULL indica
 que el valor no puede ser nulo, DEFAULT TRUE indica el valor por defecto de la columna, CURRENT_DATE indica el valor por
 defecto de la columna como la fecha actual.

# user_id: Es la clave primaria de la tabla de usuarios esto se indica con PRIMARY KEY, NOT NULL indica que el valor no
 puede ser nulo, UNIQUE indica que todos los valores de la clave sean unicos.

# usuario_contacto_id: Es la clave primaria de la tabla de contactos esto se indica con PRIMARY KEY, NOT NULL indica que el
 valor no puede ser nulo, UNIQUE indica que todos los valores de la clave sean unicos.

# activo: Es una columna booleana que indica si el contacto esta activo o no. Por defecto se establece en TRUE.


# UNIQUE(user_id, usuario_contacto_id): Es una clave unica compuesta de dos columnas, user_id y usuario_contacto_id dice que 
estas dos columnas deben ser unicas, es una buena practica porque 
se asegura que no existan dos contactos con el mismo usuario.

# create_in: 
Es una columna que indica la fecha de creacion del contacto. Por defecto se establece en la fecha actual.

# FOREIGN KEY: 
Define la clave foranea de la tabla.

# REFERENCES: 
Define la clave primaria de la tabla.

# ON DELETE CASCADE: 
Define que se elimine el contacto si se elimina el usuario para evitar que se pierda la informacion.

# ON UPDATE CASCADE: 
Define que se actualice el contacto si se actualiza el usuario para evitar que se pierda la informacion.


_________________________________________________________###________________________________________________________________

# Claves primarias:
Una clave primaria es una columna o un conjunto de columnas en una tabla cuyos valores identifican de forma exclusiva una fila de la tabla. Una base de datos relacional está diseñada para imponer la exclusividad de las claves primarias permitiendo que haya sólo una fila con un valor de clave primaria específico en una tabla.

# Claves foráneas:
Una clave foránea es una columna o un conjunto de columnas en una tabla cuyos valores corresponden a los valores de la clave primaria de otra tabla. Para poder añadir una fila con un valor de clave foránea específico, debe existir una fila en la tabla relacionada con el mismo valor de clave primaria.


# ALTER TABLE:
Es para modificar la tabla 