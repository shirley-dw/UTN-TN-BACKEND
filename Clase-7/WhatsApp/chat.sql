CREATE TABLE chats (
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    emisor_id INT NOT NULL,
    receptor_id INT NOT NULL,
    mensaje_texto TEXT NOT NULL,
    activo BOOLEAN DEFAULT TRUE, 
    create_date DATE DEFAULT CURRENT_DATE,
    estado INT DEFAULT 1 CHECK (estado IN (1, 2, 3)),
    FOREIGN KEY (emisor_id) REFERENCES usuarios(user_id) ON DELETE CASCADE,
    FOREIGN KEY (receptor_id) REFERENCES usuarios(user_id) ON DELETE CASCADE

);

/* Tabla de chat:
# chat_id : Es la clave primaria de la tabla de chat esto se indica con PRIMARY KEY, AUTO_INCREMENT indica que la
clave primaria se incrementa automaticamente.

# emisor_id : Es la clave primaria de la tabla de chat esto se indica con PRIMARY KEY, NOT NULL indica que el valor no
puede ser nulo, UNIQUE indica que todos los valores de la clave sean unicos.

# receptor_id : Es la clave primaria de la tabla de chat esto se indica con PRIMARY KEY, NOT NULL indica que el valor no
puede ser nulo, UNIQUE indica que todos los valores de la clave sean unicos.

# activo : Es una columna booleana que indica si el chat esta activo o no. Por defecto se establece en TRUE.

# create_in : Es una columna que indica la fecha de creacion del chat. Por defecto se establece en la fecha actual.

# estado : Es una columna que indica el estado del chat. Por defecto se establece en 1. CHECK sirve para definir las condiciones
establecidas.

# FOREIGN KEY : Define la clave foranea de la tabla.

# REFERENCES : Define la clave primaria de la tabla.
 */