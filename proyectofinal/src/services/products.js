//Guardar o modificar elementos
import Swal from 'sweetalert2';
import { handleGetProductToStore, handleRenderList } from "../views/store";
import { handleGetProductLoclaStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { productoActivo } from "../../main";

/*====PRODUCTOS====*/



//guardamos
const acceptButton = document.getElementById('aceptButton');
acceptButton.addEventListener('click',() =>{
    handleSaveOrModifyElements();
});

//funcion de guardar
const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById('nombre').value,
    imagen = document.getElementById('img').value,
    precio = document.getElementById('precio').value,
    categories = document.getElementById('categoria').value;
  let object = null;

  if(productoActivo){
    object = {
        ...productoActivo,
        nombre,
        imagen,
        precio,
        categories,        
    }
  }else{
    object = {
        id: new Date().toISOString(),//Date me da la fecha exacta en el momento que guardo un objeto(es una funcion de js), esto permite que el id sea unico, el toISOString me muestra la fecha en String.
        nombre,
        imagen,
        precio,
        categories,
    };
  }
  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado crrectamente",
    icon: "success"
  });


    setInLocalStorage(object);//Lo guarda
    handleGetProductToStore();//Lo lleva a la tienda
    closeModal(); // cierra
};


//eliminar elemento

export const handleDeletePorduct = () =>{
    Swal.fire({
        title: "¿Desea eliminar elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, elimimar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLoclaStorage();
            const result = products.filter((el)=>el.id !== productoActivo.id); // Aquí, se usa el método filter para crear un nuevo array que contiene todos los productos excepto el producto activo, es decir, el que deseas eliminar. Esto se logra comparando el id de cada producto en el array con el id de productoActivo. Si no coincide, ese producto se mantiene en el array result.
            //setear el nuevo Array
            localStorage.setItem('products',JSON.stringify(result)); // Una vez que has eliminado el producto activo, guardas el nuevo array result en el localStorage. Usas JSON.stringify(result) para convertir el array en una cadena de texto antes de almacenarlo.
            const newProducts = handleGetProductLoclaStorage(); // Vuelves a llamar a handleGetProductLoclaStorage() para obtener el array de productos actualizado que acabas de almacenar.
            handleRenderList(newProducts); // Ahora llamas a la función handleRenderList(newProducts) para actualizar la interfaz de la página con la nueva lista de productos, excluyendo el que se eliminó.
            closeModal();
        }else{
            closeModal();
        }
      });

    
};