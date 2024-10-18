//====CATEGORIA====

import { handleRenderList } from "../views/store";
import { handleGetProductLoclaStorage } from "../persistence/localstorage";
import { categoriaActiva } from "../../main";

const handleFilterProductsByCategory = (categoryIn) =>{
    const products = handleGetProductLoclaStorage();

    switch (categoryIn) { // El switch evalúa el valor de categoryIn, que es la categoría que se seleccionó al hacer clic en un elemento del filtro.
        case categoriaActiva: //si la categoria entrante es igual a la categoriaActiva. Sí, la idea detrás de esa condición es que si el usuario selecciona nuevamente la misma categoría que ya está activa (la que se está mostrando), el sistema no aplique ningún filtro adicional ni realice un cambio visible en la página. 
                handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=>el.categories === categoryIn)
            handleRenderList(result);

            break;
        default:
            break;
        case "mayorPrecio":
        const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio );//La función sort() de JavaScript se utiliza para ordenar un array. En este caso, se está ordenando el array products, que contiene todos los productos.La función de comparación (a, b) recibe dos elementos consecutivos del array, a y b, y los compara.La función de comparación (a, b) recibe dos elementos consecutivos del array, a y b, y los compara.
                                                                              // Si b.precio es mayor que a.precio, la expresión será positiva, lo que colocará b antes que a en el array.
                                                                              // Si a.precio es mayor, la expresión será negativa, lo que mantendrá a antes que b.
        handleRenderList(resultPrecioMayor);//resultPrecioMayor es el array de productos ordenados de mayor a menor, que se pasa como argumento a la función que se encarga de renderizarlos en la página.


            break;
        case "menorPrecio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio );
            handleRenderList(resultPrecioMenor);

            break;
    } 
}




//render de la vista categories
export const renderCategories = ()=>{ // con export podemos usar la funcion con cualquier importandola desde cualquier lado de nuestra aplicacion

    // tomamos elementos de la lista
    const ullist = document.getElementById("listFilter");
    //Creamos esos elementos dentro de la lista
    ullist.innerHTML = `
    <li id="Todo"> Todos los productos </li>
    <li id="Hamburguesas"> Hamburguesas </li> 
    <li id="Papas"> Papas </li> 
    <li id="Gaseosas"> Gaseosas </li> 
    <li id="mayorPrecio"> Mayor Precio </li>
    <li id="menorPrecio"> Menor Precio </li>

    `;
    // Añadimos dinamicamente el evento click
    const liElements = ullist.querySelectorAll("li"); // dentro de ullist vamos a tomar todos los elemmtos que tenga la eqtiqueta "li"
    liElements.forEach((liElement)=>{
        liElement.addEventListener(('click'),()=>{
            handleClick(liElement)
        });
    });
    // Verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento)=>{ // elemento es igual a liElement?
        handleFilterProductsByCategory(elemento.id); // Exactamente, al pasar el id del elemento, puedes identificar fácilmente de qué categoría de producto estás hablando. En tu código, los id de los elementos coinciden con los nombres de las categorías o los criterios de orden, como "Hamburguesas", "Papas", "Gaseosas", "mayorPrecio", "menorPrecio"
        liElements.forEach((el)=>{  //Recorre todos los elementos de la lista
            if(el.classList.contains('liActive')){ // Luego verifica si alguno de los elementos contiene la lista activa
                el.classList.remove('liActive'); // Si alguno la tiene se la remueve
            } else {    
                if(elemento === el){ // y sino en el caso de que elemento(al que le hicimos click) sea igual a alguno de la lista le agrega la clase
                  el.classList.add('liActive') 
                }
            }
        })
    }
};

