//====STORE==== 

import { setProductoActivo } from "../../main";
import { handleGetProductLoclaStorage } from "../persistence/localstorage";
import { openModal } from "./modal";




//funcion que se encarga de traer los elementos y llamar al render
export const handleGetProductToStore = () => { //¿Que pasa si la saco?

    const products = handleGetProductLoclaStorage()
    handleRenderList(products); // para renderizar estos productos en la página web.
    
};

// funcion que se encarga de filtrar y de renderizar la seccion con todos sus respectivos elementos 
export const handleRenderList = (productosIn) => { // Esta es la función principal para organizar y mostrar los productos en la página. Toma como entrada un arreglo de productos (productosIn).
    //Vamos a filtrar por categoria los productos que recibe. Filtrado de arrays por categorias
    const burgers = productosIn.filter((el)=>el.categories === "Hamburguesas"); // El método filter en JavaScript crea un nuevo array con todos los elementos que cumplen una condición específica. Aquí, filter está recorriendo el array productosIn, que contiene todos los productos, y selecciona únicamente aquellos cuyo atributo categories sea igual a "Hamburguesas". El resultado es un nuevo array, burgers, que contiene todos los productos cuya categoría sea "Hamburguesas".
    const papas = productosIn.filter((el)=>el.categories === "Papas");
    const gaseosas = productosIn.filter((el)=>el.categories === "Gaseosas");

    // funcion que renderiza los elementos de la seccion
    const renderProductGroup = (productos, title) => {//Esta funcion nos va a definir cada seccion de nuestra pagina web (Hamburguesas, gaseosas, papas). Esta función genera un bloque HTML para una sección de productos en función de la categoría.
                                                      // productos: Es un array que contiene los productos filtrados de una categoría específica, como burgers, papas, o gaseosas. title: Es una cadena de texto que representa el título de la categoría que se está renderizando, como "Hamburguesas", "Papas", o "Gaseosas".

        if(productos.length>0){ // Si hay productos en la categoría (productos.length > 0), procede a generar el HTML para cada uno.
            //Generar HTML de cada producto:
            const productosHTML = productos.map((producto, index)=>{ //Se usa map para iterar sobre cada producto y generar un bloque HTML.Recorre cada elemento del array productos. En cada iteración, recibe un producto (representado por el parámetro producto) y el índice de ese producto en el array (representado por index).
                return`<div class='containerTargetItem' id = 'product-${producto.categories}-${index}'>
                <div> 
                <img src='${producto.imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                
                <div class='targetProps'>
                <p> <b>Precio: </b> $ ${producto.precio} </p>
                </div> 
                
                </div>
                </div>`;

            });
            // retorna la seccion con todos los elementos dentro. La función flecha devuelve un string de HTML para cada producto, con información como la imagen, nombre, precio y categoría del producto. También genera un id único para cada producto usando su categoría y su índice en el array(id = 'product-${producto.categories}-${index}').
            return `
                    <section class='sectionStore'>
                    <div class='containerTitleSection'> <h3> ${title} </h3> </div>
                    <div class='containerProductStore'>
                    ${productosHTML.join("")}
                    </div>
                    </section>
            
            `; // map devuelve un nuevo array llamado productosHTML que contiene cadenas de HTML para cada producto. Cada elemento de este array es una cadena que representa un producto en HTML.
               // productosHTML: Es un array que contiene cadenas de texto, cada una representando un bloque de HTML generado por el método map para cada producto.
               // El método join en JavaScript toma un array y lo convierte en una sola cadena de texto. El argumento que le pasas a join (en este caso "") es el separador que se colocará entre los elementos del array cuando los una.
               // productosHTML.join(""): Toma el array productosHTML, que contiene múltiples cadenas HTML, y las convierte en una sola cadena sin separadores entre los elementos.
        }else{
            return""; // Si no hay productos, simplemente devuelve una cadena vacía.
        }
    };

    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");//Se selecciona el contenedor donde se insertarán los productos (storeContainer en el HTML).

    appContainer.innerHTML = `
    ${renderProductGroup(burgers,"Hamburguesas")} 
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}

    `; // Aquí se renderizan las tres categorías (Hamburguesas, Papas, Gaseosas) dentro del contenedor seleccionado (storeContainer). La cadena resultante de renderProductGroup(burgers, "Hamburguesas") es la que se inserta en appContainer.innerHTML, lo que significa que se convierte en parte del contenido HTML que se mostrará en la página. Esta cadena HTML resultante se inserta en el lugar donde aparece ${renderProductGroup(burgers, "Hamburguesas")} dentro del template literal.
       // Exactamente! En el código que proporcionaste, innerHTML se utiliza para agregar el contenido generado por las funciones renderProductGroup al elemento appContainer, que representa el contenedor donde se mostrarán los productos de la tienda. El innerHTML es fundamental para agregar el contenido de los productos al contenedor storeContainer. 

    // se añaden los eventos de manera dinamica
    const addEvents = (productsIn) => {
        if (productsIn) {
            productsIn.forEach((element, index) => {  // element: En cada iteración, este parámetro hace referencia al producto actual (un objeto que contiene los detalles del producto, como su nombre, categoría, precio, etc.). index: Es el índice actual del producto dentro del array, empezando desde 0. Este índice se usa para asignar un identificador único a cada producto, facilitando su acceso en el DOM.
                const productContainer = document.getElementById(
                    `product-${element.categories}-${index}` //Aquí se busca el <div> que contiene ese producto específico, utilizando el id que fue asignado previamente (product-${element.categories}-${index}).
                );
                if (productContainer) {  // Asegúrate de que el elemento existe en el DOM
                    productContainer.addEventListener('click', () => {
                        setProductoActivo(element);
                        openModal();
                    });
                }
            });
        }
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
