import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css'; // importo los estilos para agregar estilos desde js

//====APLICACIÓN====

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}


handleGetProductToStore();
renderCategories();


//HEADER
const buttonAdd = document.getElementById('buttonAddElement');

buttonAdd.addEventListener('click',()=>{
    openModal(); // Cuando esto haga click va a hacer la funcion openModal que hace que aparezca el popup

});

//buttonSearch

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName();
});



