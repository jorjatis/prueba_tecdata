# Prueba TECDATA

Disponible en netlify: https://jgarcia-prueba-tecdata.netlify.app/

Esta prueba de maquetación esta construida bajo una **arquitectura base** para la creación de sitios web estáticos utilizando tecnologías modernas como **HTML**, **Handlebars (HBS)**, **SCSS**, y **JavaScript**, disponible en: https://github.com/jorjatis/gg-web-builder-kit. Proporciona una estructura organizada para desarrollar rápidamente sitios web en desarrollo/local, con una configuración optimizada de Webpack para el manejo de plantillas, estilos y recursos, desarrollada durante mis años de experiencia como maquetador / desarrollador de interfaces web.

## Características

- **Handlebars** para plantillas HTML dinámicas.
- **SCSS** para estilos flexibles y organizados.
- Configuración de **Webpack** para manejo de:
  - Compilación de SCSS a CSS.
  - Manejo de imágenes, tipografías y otros activos.
  - División de código (chunking) para optimización de recursos.
- **Auto-carga de datos** desde archivos JSON para llenar las plantillas Handlebars.
- **Servidor de desarrollo** con soporte de hot-reloading para facilitar el trabajo durante el desarrollo.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas y archivos, que pueden diferir del proyecto que surje a partir del proyecto base:

```bash
.
└── src/ 
    ├── assets/ 
    │   ├── fonts/ # Fuentes 
    │   ├── images/ # Imágenes estáticas 
    │   └── styles/ 
    │       ├── [...]/ # Subcarpetas para organizar los archivos SCSS
    │       └── main.scss # Estilos principales 
    ├── js/ # Archivos JS /
    │   ├── main.js
    ├── views/ 
    │   ├── pages/ # Plantillas Handlebars (HBS) para las páginas 
    │       └── index.hbs
    │   └── partials/ # Parciales para las plantillas Handlebars ordenados en subcarpetas (HBS)
    │       ├── [...]/ # Subcarpetas para organizar los archivos SCSS
    │           ├── header.hbs
│               ├── footer.hbs
    │           └── [...].hbs
    ├── config.js # Punto de entrada de la aplicación 
    ├── webpack.config.js # Configuración de Webpack 
    └── package.json # Dependencias y scripts
```

## Requisitos

- **Node.js** v14 o superior.
- **npm** o **yarn** (se recomienda npm).

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/jorjatis/prueba_tecdata.git
   cd prueba_tecdata
   ```

2. Instala las dependencias necesarias:
  ```bash
  npm install
  ```

3. Ejecuta el proyecto:
  ```bash
  npm start
  ```

4. Abre tu navegador en http://localhost:8080 para ver el proyecto en ejecución.


