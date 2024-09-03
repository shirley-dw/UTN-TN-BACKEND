CREATE TABLE usuarios(
    user_id INT PRIMARY KEY  AUTO_INCREMENT ,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL ,
    activo BOOLEAN DEFAULT TRUE,
    create_in DATE DEFAULT CURRENT_DATE
    )

/* // Codigo para la creacion de la tabla de usuarios.
· PRIMARY KEY: Define la clave primaria de la tabla.
· AUTO_INCREMENT: Incrementa automaticamente el valor de la clave primaria.
· UNIQUE: Define que todos los valores de la clave sean unicos.
· NOT NULL: Define que el valor no puede ser nulo.
· DEFAULT TRUE: Define el valor por defecto de la columna.
· CURRENT_DATE: Define el valor por defecto de la columna como la fecha actual. */