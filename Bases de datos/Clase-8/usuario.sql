INSERT INTO users (username, password, email) VALUES (‘admin’, ‘admin’, ‘a@a.com’);
/* Explicación: Este comando inserta un nuevo registro en la tabla users con los valores especificados para las columnas 
username, password y email. En este caso, se está creando un usuario con el nombre de usuario ‘admin’, la contraseña ‘admin’ y 
el correo electrónico ‘pepe@gmail.com’.*/

ALTER TABLE users;
/* Explicación: ALTER TABLE se utiliza para modificar la estructura de una tabla existente, como agregar, eliminar o modificar columnas.*/

SELECT * FROM users;
/* Explicación: Este comando selecciona y muestra todos los registros de la tabla users. Es útil para ver todos los datos 
almacenados en esa tabla.*/

 DELETE FROM users;
/* Explicación: Este comando elimina todos los registros de la tabla users. Después de ejecutarlo, la tabla users estará vacía,
 lo que significa que no hay datos almacenados en ella pero la estructura de la tabla seguirá existiendo*/

DROP TABLE users;
/* Explicación: Este comando elimina la tabla users por completo, incluyendo todos sus registros y su estructura. 
Después de ejecutarlo, la tabla users ya no existirá en la base de datos.*/


/* Crear un usuario:
Para crear un usuario en la base de datos, puedes usar el siguiente script SQL: */
INSERT INTO users (username, password, email) VALUES ('admin', 'admin', 'a@a.com');

/* Nota sobre ALTER TABLE:
El comando ALTER TABLE se utiliza para modificar la estructura de una tabla, pero no para ver el historial de la base de datos. 
Para ver el historial de cambios, necesitarías utilizar herramientas de auditoría o registros específicos de la base de datos.*/