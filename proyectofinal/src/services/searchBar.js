import { handleGetProductLoclaStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () =>{
    const inputHeader = document.getElementById("input_Header");
    const products = handleGetProductLoclaStorage();

    const result = products.filter((el)=>
    el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase())  // lowerCase() pasa todos nuestros nombres de los productos a minuscula. el.nombre.toLowerCase(): Convierte el nombre de cada producto a minúsculas para que la búsqueda no sea sensible a mayúsculas o minúsculas. Es decir, si tienes un producto llamado "Hamburguesa", al aplicar toLowerCase(), se convertirá en "hamburguesa". Esto asegura que puedas buscar "hamburguesa", "HAMBURGUESA", o cualquier combinación de mayúsculas/minúsculas y obtener el mismo resultado.
                                                                      // inputHeader.value: Representa el valor actual que el usuario ha escrito en el campo de búsqueda (input). Si el usuario ha escrito "ham", este valor será "ham".
                                                                     // .includes(inputHeader.value): Verifica si el valor ingresado por el usuario (el texto de búsqueda) está contenido en el nombre del producto, ya convertido a minúsculas. Por ejemplo, si el nombre del producto es "hamburguesa" y el usuario escribe "ham", entonces includes("ham") devolverá true, lo que significa que ese producto coincide con el término de búsqueda.
    );      
    handleRenderList(result);



}