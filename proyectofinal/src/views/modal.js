/*====POPUP====*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeletePorduct } from "../services/products";

const buttonCancel = document.getElementById('cancelButton');

buttonCancel.addEventListener('click',()=>{
    closeModal(); // Cuando esto haga click va a hacer la funcion closeModal que hace que se cierre el popup

});


// FUNCINOES ABRIR CERRAR MODAL
export const openModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = "flex";
    const buttonDelete = document.getElementById('deleteButton');
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById('nombre'),
        imagen = document.getElementById('img'),
        precio = document.getElementById('precio'),
        categories = document.getElementById('categoria');
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
    }else{

    }

};

export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = "none";
    setProductoActivo(null); // se agregaa esto pq el procucto activo se ejecuta sienpre?
    resetModal();

};

const resetModal = () =>{
    const nombre = document.getElementById('nombre'),
    imagen = document.getElementById('img'),
    precio = document.getElementById('precio'),
    categories = document.getElementById('categoria');
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";

};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click',()=>{
    buttonDelete();
});

const buttonDelete = () =>{
    handleDeletePorduct();
}