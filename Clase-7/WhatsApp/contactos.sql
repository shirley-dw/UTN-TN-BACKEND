CREATE TABLE contactos (
    contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL UNIQUE,
    usuario_contacto_id INT NOT NULL UNIQUE,
    activo BOOLEAN DEFAULT TRUE,
    create_in DATE DEFAULT CURRENT_DATE
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (usuario_contacto_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    UNIQUE(user_id, usuario_contacto_id)
    )
/*  Tabla de contactos:
· PRIMARY KEY: Define la clave primaria de la tabla.
· AUTO_INCREMENT: Incrementa automaticamente el valor de la clave primaria.
· UNIQUE: Define que todos los valores de la clave sean unicos.
· NOT NULL: Define que el valor no puede ser nulo.
· DEFAULT TRUE: Define el valor por defecto de la columna.
· CURRENT_DATE: Define el valor por defecto de la columna como la fecha actual.

Explicacion:
# contacto_id: Es la clave primaria de la tabla de contactos esto se indica con PRIMARY KEY, AUTO_INCREMENT indica que la
 clave primaria se incrementa automaticamente, UNIQUE indica que todos los valores de la clave sean unicos, NOT NULL indica
 que el valor no puede ser nulo, DEFAULT TRUE indica el valor por defecto de la columna, CURRENT_DATE indica el valor por
 defecto de la columna como la fecha actual.

# user_id: Es la clave primaria de la tabla de usuarios esto se indica con PRIMARY KEY, NOT NULL indica que el valor no
 puede ser nulo, UNIQUE indica que todos los valores de la clave sean unicos.

# usuario_contacto_id: Es la clave primaria de la tabla de contactos esto se indica con PRIMARY KEY, NOT NULL indica que el
 valor no puede ser nulo, UNIQUE indica que todos los valores de la clave sean unicos.

# UNIQUE(user_id, usuario_contacto_id): Es una clave unica compuesta de dos columnas, user_id y usuario_contacto_id dice que 
estas dos columnas deben ser unicas, es una buena practica porque 
se asegura que no existan dos contactos con el mismo usuario.

# activo: Es una columna booleana que indica si el contacto esta activo o no. Por defecto se establece en TRUE.

# create_in: Es una columna que indica la fecha de creacion del contacto. Por defecto se establece en la fecha actual.

# FOREIGN KEY: Define la clave foranea de la tabla.

# REFERENCES: Define la clave primaria de la tabla.

# ON DELETE CASCADE: Define que se elimine el contacto si se elimina el usuario para evitar que se pierda la informacion.

# ON UPDATE CASCADE: Define que se actualice el contacto si se actualiza el usuario para evitar que se pierda la informacion.


# ALTER TABLE:
Es para modificar la tabla de contactos. Por ejemplo, se agrega la restriccion UNIQUE (user_id, usuario_contacto_id)
 */