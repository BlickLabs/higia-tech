# Higia Tech

## ¿Cómo correrlo localmente?
Una vez que se ha clonado el proyecto, deben ser instaladas las dependencias para npm y bower, con los comandos:
```bash
npm install
bower install
```

El comando para correr el proyecto en localhost es:
```bash
gulp
```

Cuando terminen de minificarse los assets, el último paso es acceder en la barra de direcciones del navegador a la dirección:
> localhost:8080

En determinado caso en donde el puerto cambie, revisar en la consola una linea similar:
> Server started http://localhost:8080


## ¿Cómo correrlo en producción?
El procedimiento como se lleva a cabo dentro de More Co. es el siguiente:
* **Agregar dominios**: Dentro de /src se encuentra la carpeta /nginx; a su vez contiene un archivo con el nombre del repositorio/carpeta del proyecto. Ahí es donde se agregan los dominios para producción. Hasta el momento solo se encuentra un dominio para el ambiente sandbox.
* **Obtener assets minificados**: Es imprescindible eliminar las siguientes carpetas que se ubican en la raíz del proyecto, si es que ya existen: /build, /dis y /.publish. Ejecutar los siguientes comandos que minificaran los assets para hacer un despliegue a la rama gh-pages:
```bash
gulp --production
gulp deploy
```

* **Conectarse al servidor remoto para realizar el despliegue**: En el servidor habrá que posicionarse en la carpeta que contiene los proyectos estáticos y realizar los siguientes pasos:
	* **Clonar rama de gh-pages**: Si existe eliminar primero la carpeta del proyecto:
  ```bash
  sudo rm -rf higia-tech/
  ```
  Si no hay ninguna carpeta con el mismo nombre:
  ```bash
  git clone -b gh-pages --single-branch https://github.com/BlickLabs/higia-tech.git
  ```
  * **Crear el enlace simbólico**: Primero posicionarse dentro de la carpeta del proyecto y ejecutar el siguiente comando:
  ```bash
  ln -sf /home/static/higia-tech/project-higia-tech /etc/nginx/sites-enabled/
  ```
  * **Reiniciar el servivicio de nginx**: Por último hay que reiniciar el servicio de nginx:
  ```bash
  sudo service nginx restart
  ```


## ¿Cómo está organizado el proyecto?

Aquí hay una breve explicación de cada archivo y directorio que se genera (excluyendo los obvios ...):

* **.jshintrc**: Contiene los ajustes de jshint, no dude en modificarlo.
* **gulpfile.js**: Archivo principal que importa las tareas individuales de gulp.
* **gulpconfig.js**: Archivo de configuración para rutas y otros valores utilizados en gulptasks.
* **gulptasks/**:  Carpeta que contiene archivos individuales para cada tarea de gulp.
* **src/**: Todo el código y los recursos del proyecto.
  * **locales/**: Contiene los archivos JSON para las versiones en español e inglés. Aquí es donde se agrega, modifica o elimina la información contenida en las secciones.
  * **js/**: Todos los archivos JS.
    * **app.js**: Archivo JS donde puede establecer propiedades globales y valores predeterminados.
  * **templates/**: Archivos Nunjucks.
    * **partials/**: Contiene la plantilla base, así como los archivos para la barra de navegación (navbar) y pie de página (footer). Puede agregar tantos como necesite.
      * **base.njk**: Plantilla base (las secciones se extienden en este archivo).
      * **navbar.njk**: Barra de navegación.
    * **sections/**: Contiene un par de carpetas para las versiones en español e inglés del sitio.
      * **es/**: Contiene las plantillas para su versión en español.
      * **es/**: Contiene las plantillas para su versión en inglés.
    * **seo**: Contiene los archivos para los metatags y un par más para los scripts de facebook pixel y google analytics. Se pueden agregar, modificar o eliminar dependiendo las necesidades. La referencia hacia estos archivos se encuentra en:
    > base.njk
  * **styl/**: Archivos del preprocesador de CSS "Stylus".
    * **sections/** Archivos de estilos para todas las secciones dle sitio.
    * **partials/** "Archivos de estilos para la barra de navegación y el pié de página."
    * **vars.styl**: Contiene la declaración de variables para estilos.
    * **mixins.styl**: Contiene la declaración de mixinx y funciones para estilos.
    * **fonts.styl**: Contiene la declaración de Fuentes a utilizar dentro del sitio.
    * **utils.styl**: Clases de utilidad que no son directamente parte de los estilos del sitio web.
    * **base.styl**: Estilos compartidos entre todas (o la mayoría) de las secciones y que forman parte de los estilos del sitio web. Incluye archivos de barra de navegación y pie de página de forma predeterminada.
    * **main.styl**: Importa todos los otros archivos.

## ¿Cómo hacer un cambio o agregar algo nuevo?

Dependiendo de la sección que valla ser modificada, los archivos JSON contienen objetos referenciados a cada vista. Por ejemplo, en la plantilla **allies.njk** la forma de pintar el título principal es de la siguiente forma:
```bash
<h1 class="allies-cover-title helvneue-bold">{{en.allies.cover.title}}</h1>
```
Comienza por el objeto: **en**, que define el idioma. Siguiendo el árbol, continúa con el nombre de la vista: **allies**, enseguida la sección: **cover** y por último el elemento, que es el título: **title**.

Si se desea generar una iteración de elementos que son repetitivos podemos tomar el ejemplo de la misma plantilla de allies.njk
 ```bash
 <section class="allies-cards-carousel owl-carousel">
  {% for card in en.allies.cards %}
  <div class="allies-cards-content">
    <img class="{{card.logoClass}}" src="{{card.logo}}">
    <div class="allies-cards-hover">
      <div class="allies-cards-hover-content">
        <h2 class="allies-cards-title">{{card.title}}</h2>
        <p class="allies-cards-desc">{{card.desc}}</p>
      </div>
    </div>
  </div>
  {% endfor %}
</section>
```

En este caso el objetivo es mostrar varios elementos dentro de un carrusel, entonces dentro de una sentencia **for** hay que iterar los arreglos de la información contenida en los archivos JSON, destinada para esa sección. [Para más información sobre Nunjucks y su funcionamiento](https://mozilla.github.io/nunjucks/)

Puntos de suma importancia a tomar en cuenta:
* **Links y rutas**: Por la forma en que se construyó el proyecto para tener un sitio multi idioma, todas las rutas que originalmente pueden considerarse sin **/** ahora deben llevarla, con excepción de si se va a evaluar un enlace en una condición. Ejemplos: **/es/index.njk**, **/en/allies.njk**, **/css/{{ projectFilesName }}.libs.css (dentro de base.njk)** y para evaluar enlaces: **es/index.njk**.
* **Diferenciar entre un enlace activo de uno que no lo está en las barras de navegación**: En todas las plantillas se encuentra una "directiva" que ayuda dentro de las condiciones de la barra de navegación, por ejemplo, allies.njk en sus versiones de español e inglés contienen la siguiente directiva:
```bash
{% set view_name = "allies" %}
```
Y la condición que ayuda a pintar de color rosa el enlace activo dentro de la barra de navegación:
```bash
{% if view_name == nav.viewName %}active{% endif %}
```
* **Cambio de idioma en la barra de navegación**: Para no llevar a una confusión, el único punto a tomar en cuenta es que las condiciones evaluán si la vista está en inglés para que al hacer el cambio redireccione a su contraparte.

* **Agregar más archivos Json**: Si se considera la opción de agregar más archivos JSON, es necesario incluir una tarea de gulp indicándoselo. La ruta del archivo es la siguiente: **src/gulptasks/html.js**.
```bash
.pipe(data(function() {
  return require('../src/locales/es.json')
}))
```
* **Definición de la ruta para el archivo particles-config.json**: Dentro de **src/gulptasks/scripts.js** se ha definido la ruta para este archivo. Esto para separarlo de la carpeta donde se encuentran los archivos **JSON** de los idiomas. Si se desea cambiar la ubicación, simplemente habra que eliminar el **pipe** dentro de **scripts.js** y agregarla a **html.js**

* **alertify.js**: Este plugin sirve para mostrar las notificaciones al enviar un formulario. Si no está contemplado dentro del proyecto, es conveniente eliminarlo de las dependencias de **bower**. También modificar el archivo **src/js/app.js** que contiene la integración de los formularios y el uso de **alertify**.

## ¿Cómo generar los assets para producción?

Al momento de hacer un despliegue a la rama de gh-pages
```bash
gulp --production
gulp deploy
```
los assets se minifican para poder ser utlizados, ya sea en un ambiente de desarrollo como sandbox o para producción.
Como consecuencia, en local se genera la carpeta /build. Para desarrollo y producción: /dist y /.publish.
Estas carpetas contienen los archivos minificados para estilos (main.css), javascript (higia-tech.js y higia-tech.libs.js) y las plantillas (algo.html).
Por eso, es importante eliminar dichas carpetas para que al volver a subir los cambios a la rama de gh-pages, tome en cuenta lo último que se compiló y no las modificaciones previas.
