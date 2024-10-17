Clase 18º 16/10/2024

# Temas:
· Handlebars:
· Fomrularios con handlebars
· Mapeo con handlebars
· Accededr a distintas rutas con detalles de productos

# Anotaciones:


# Tareas:


________________________________________________________________________________________________________________________________________________

# Handlebars:
 Handlebars es un motor de plantillas para Express que permite generar HTML dinámico de manera sencilla. 
 Puedes usarlo para construir vistas basadas en datos y lógica, separando claramente la presentación de la lógica de la aplicación. 
 Si te interesa separar aún más la lógica del código, Handlebars es una excelente opción.

# each: 
Se usa en Handlebars para renderizar una lista de productos. Lo que hace es generar un nuevo objeto.
 La estructura que has compartido en tu mensaje recorre cada elemento en la lista products y renderiza el título y la descripción para 
cada producto. Handlebars es poderoso porque te permite separar claramente la lógica de la presentación

# Que hace each?
 El helper each en Handlebars itera sobre una colección de elementos (como un array) y genera la misma plantilla para cada elemento 
en la colección. Es una forma práctica de renderizar listas de ítems en tu HTML. 
 Por ejemplo, si tienes una lista de productos, each te permitirá generar el HTML para cada producto en esa lista.
 uando usas {{#each products}}, Handlebars toma cada elemento del array products y lo pasa a la plantilla entre {{#each}} y {{/each}},
de manera que {{this}} hace referencia a cada producto individual. Es decir, para cada producto, se genera un h2 con su título y un p con su
descripción.