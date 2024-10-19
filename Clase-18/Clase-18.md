Clase 18º 14/10/2024

# Temas:
· Teoria SSR Y CSR.
· Eleccion de servidor.
· Express-handlebars.
· Next.js / Nuxt / Remix (Investigar).

# Anotaciones:
· Las aplicaciones modernas a menudo usan una combinación de CSR y SSR (Server-Side Rendering) para equilibrar rendimiento y SEO.
· Diferencias entre CSR y SSR: 
1) CSR: renderizado en el servidor y en el cliente, lo que mejora el rendimiento y SEO.
2) SSR: renderizado en el servidor, lo que mejora el SEO.


________________________________________________________________________________________________________________________________________________

# Client-Side Rendering (CSR):
Es un enfoque en el cual la mayor parte del HTML se genera en el navegador del cliente, en lugar de en el servidor. 
Con CSR, la aplicación web carga una página HTML mínima desde el servidor y luego utiliza JavaScript para renderizar el contenido dinámico.

* ¿Como funciona? 

1) Carga inicial: El servidor envía una página HTML básica al cliente.
2) JavaScript: Una vez que la página se carga en el navegador, se ejecuta el JavaScript que solicita los datos necesarios del servidor.
3) Renderizado: El contenido dinámico se genera y muestra en el navegador utilizando frameworks como React, Vue, o Angular.

- Ejemplo con HTML:
Supongamos que tenes un archivo HTML que carga un script JavaScript:

<!DOCTYPE html>
<html>
<head>
    <title>Client-Side Rendering</title>
</head>
<body>
    <div id="app"></div>
    <script src="app.js"></script>
</body>
</html>

En app.js, podrías tener algo como esto:

- Ejemplo con JavaScript:

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            const appDiv = document.getElementById('app');
            appDiv.innerHTML = `<h1>${data.title}</h1><p>${data.description}</p>`;
        });
});

# Ventajas de CSR:
1) Experiencia de usuario dinámica: Interacciones rápidas y fluidas.
2) Desarrollo modular: Facilita el uso de componentes y estado del cliente.

# Desventajas de CSR:
1) Tiempo de carga inicial: Puede ser más lento debido a la cantidad de JavaScript que debe descargarse y ejecutarse.
2) SEO: Los motores de búsqueda pueden tener dificultades para indexar contenido renderizado en el cliente.

Las aplicaciones modernas a menudo usan una combinación de CSR y SSR (Server-Side Rendering) para equilibrar rendimiento y SEO.

________________________________________________________________________________________________________________________________________________

# Server-Side Rendering (SSR):
Es un enfoque en el cual el servidor genera el HTML completo antes de enviarlo al navegador del cliente.
 Esto significa que el contenido dinámico se renderiza en el servidor, lo que puede mejorar el tiempo de carga inicial y el SEO.

* ¿Como funciona?
1) Solicitud inicial: El cliente solicita una página al servidor.
2) Renderizado en el servidor: El servidor genera el HTML completo con los datos dinámicos.
3) Envío al cliente: El servidor envía la página HTML generada al cliente, que se muestra en el navegador.

- Ejemplo simple:
Supongamos que tenes un archivo HTML que carga un script JavaScript:

<!DOCTYPE html>
<html>
<head>
    <title>Server-Side Rendering</title>
</head>
<body>
    <div id="app"></div>
    <script src="app.js"></script>
</body>
</html>

En app.js, podrías tener algo como esto:

// JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '<h1>Loading...</h1>';
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = `<h1>${data.title}</h1><p>${data.description}</p>`;
        });
})
________________________________________________________________________________________________________________________________________________


# Next.js:
Es un framework de React que permite construir aplicaciones web con facilidad, incluyendo capacidades tanto de Client-Side Rendering (CSR) 
como de Server-Side Rendering (SSR). Ofrece una experiencia de desarrollo enriquecida con funcionalidades como enrutamiento basado en archivos,
optimización automática del rendimiento, y soporte para API routes.

* Características clave de Next.js:
1) SSR y CSR: Renderizado en el servidor y en el cliente, lo que mejora el rendimiento y SEO.
2) Generación estática: Puedes pre-renderizar páginas en tiempo de construcción, creando sitios web estáticos ultra rápidos.
3) Enrutamiento basado en archivos: Las rutas se crean automáticamente basándose en la estructura de directorios dentro de la carpeta pages.
4) API Routes: Puedes crear endpoints de API directamente dentro de tu aplicación Next.js.
5) Estilos CSS y Sass: Soporte incorporado para CSS y Sass, junto con CSS-in-JS usando librerías como styled-components.

* Ventajas de Next.js:
1) Performance: Mejor rendimiento con pre-renderizado y optimización automática.
2) SEO: Mejor soporte para SEO con SSR.
3) Facilidad de uso: Enrutamiento sencillo basado en archivos.
4) Desventajas de Next.js:
5) Complejidad inicial: Puede tener una curva de aprendizaje si vienes de aplicaciones puramente CSR.
6) Sobre carga de servidor: SSR puede aumentar la carga en el servidor para aplicaciones muy grandes o con alto tráfico.

Next.js es ideal para aplicaciones que necesitan una combinación de renderizado en el servidor y el cliente, ofreciendo una experiencia de 
desarrollo fluida y optimizada.

________________________________________________________________________________________________________________________________________________

# Servidores:
Un servidor es una computadora o un sistema que proporciona recursos, datos, servicios o programas a otros dispositivos, llamados clientes, 
a través de una red. Los servidores pueden ser hardware dedicados o software que se ejecuta en una computadora física.

* Tipos comunes de servidores:
1) Servidores web: Entregan contenido web a los navegadores de los usuarios.
2) Servidores de bases de datos: Almacenan y gestionan bases de datos.
3) Servidores de correo: Gestionan y envían correos electrónicos.
4) Servidores de archivos: Almacenan y administran archivos para que los clientes puedan acceder y compartir datos.

________________________________________________________________________________________________________________________________________________

# Handlebars:
Es un motor de plantillas de HTML para Node.js, Express, y otros frameworks de JavaScript. Puede ser usado para renderizar plantillas HTML desde
JavaScript.
Ayuda a generar HTML dinámico en tu aplicación. Usa expresiones en doble llave como {{expression}} para insertar contenido dinámico en las
plantillas.

* Configuramos nuestro motor de plantillas:
1) npm install express-handlebars // Instala el paquete
2) Indicamos a la aplicacion que motor debe utilizar
app.engine('handlebars', express_handlebars.engine())
3) Indicamos que usaremos como plantilla
app.set('view engine', 'handlebars')
4) Indicamos la direccion donde estaran nuestras plantillas
app.set('views', './views') // views es el directorio donde estan las plantillas carpeta views.
5) app.use(express.static('public')) //Cargamos los archivos estaticos


* Funcionamiento:
1) app.get('/', (req, res) => res.render('index'));
2) app.get('/about', (req, res) => res.render('about'));
3) app.get('/contact', (req, res) => res.render('contact'));
4) app.get('/services', (req, res) => res.render('services'));

# Referencias:
1) https://expressjs.com/es/guide/using-template-engines.html
2) https://handlebarsjs.com/guide/index.html
3) https://www.npmjs.com/package/express-handlebars

* Ejemplo de uso en HTML:
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Productos</title>
</head>
<body>
    <h1>Listado de Productos</h1>
    <ul>
        {{#each products}}
            <li>
                <h2>{{this.title}}</h2>
                <p>{{this.description}}</p>
            </li>
        {{/each}}
    </ul>
</body>
</html>

* Ejemplo de uso en JavaScript:

app.get('/products', (req, res) => {
    const products = [
        { title: 'Producto 1', 
          description: 'Descripción del producto 1'
        },
        { title: 'Producto 2',
          description: 'Descripción del producto 2'
        },
        // Más productos...
    ];
    res.render('products', { products }); //Renderiza la plantilla 'products' con los datos de 'products'
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

________________________________________________________________________________________________________________________________________________

# res.render:
Es un método en Express que se usa para renderizar una vista utilizando un motor de plantillas y enviar el HTML resultante al cliente.
Se basa en la configuración del motor de plantillas que hayas definido, como Handlebars, EJS, etc.
res.render convierte las plantillas en HTML dinámico basado en los datos que le pasas, facilitando así la creación de contenido web interactivo
y personalizado.

