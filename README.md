# Sistema de Gestión de Pedidos para Empresa de Comidas

Este proyecto es una aplicación web desarrollada para gestionar el menú y los pedidos de una empresa que vende comidas. La aplicación permite registrar productos, crear un historial de pedidos y mantener los datos a través de la persistencia utilizando `localStorage`.

## Funcionalidades

### 1. Estructura HTML
- **Formulario de Registro de Productos**: Permite ingresar información sobre los productos que se ofrecen, incluyendo:
  - Nombre del producto.
  - URL de la imagen.
  - Precio del producto.
  - Categoría del producto (mediante un selector).

- **Menú de Comidas**: Muestra un listado de opciones de menú con los precios correspondientes. Este listado puede ser estático o generado dinámicamente.

### 2. Estilo CSS
- **Diseño Responsive**: Utiliza media queries para adaptar la interfaz a diferentes tamaños de pantalla (desktop, tablet, móvil).
- **Flexbox y Grid**:
  - Flexbox se usa para alinear los campos del formulario.
  - Grid organiza la disposición de los pedidos en la interfaz.
- **Estilos Atractivos**: Botones y campos del formulario con estilo, destacando tipos de comida y totales de pedidos para mejor visualización.

### 3. Funcionalidad JavaScript
- **Manejo de Productos**: 
  - Los productos se gestionan mediante un array de objetos.
  - Funciones para agregar, calcular totales y eliminar productos.
- **Almacenamiento Persistente**:
  - Utiliza `localStorage` para guardar los productos, asegurando que los datos persistan entre sesiones.
  - Al recargar la página, los productos se cargan desde el `localStorage`.
- **Interacción con el DOM**:
  - La grilla de productos se genera dinámicamente en base a los datos almacenados.
  - Los usuarios pueden eliminar productos, lo cual actualiza tanto el DOM como el `localStorage`.

## Requisitos Técnicos
- Uso de `Visual Studio Code` y la consola del navegador para desarrollo.
- Implementación basada en buenas prácticas de desarrollo front-end con HTML, CSS y JavaScript.

## Cómo Ejecutar el Proyecto
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tuusuario/sistema-pedidos-comidas.git
2. Abre el proyecto en tu editor de código favorito (se recomienda Visual Studio Code).
3. Abre el archivo index.html en un navegador para ver la aplicación en funcionamiento.
