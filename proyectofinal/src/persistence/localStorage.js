//====LOCAL STORAGE====//

export const handleGetProductLoclaStorage = ()=>{

    const products = JSON.parse(localStorage.getItem('products')); //Utiliza localStorage.getItem('products') para recuperar los datos guardados bajo la clave 'products'. Si existen datos, los convierte de formato JSON a un objeto de JavaScript usando JSON.parse(). ¿Porque se guardan en product como hago para que se guarden en otro lado?
    if(products){
        return products;
    }else{
        return[];
    }
};

// Guardar en LocalStorage
    
//recibir un producto
export const setInLocalStorage = (productIn) => {
    
    //traer todos los elementos 
    let productInLocal = handleGetProductLoclaStorage();// productInLocal es un array
    
    const existingIndex = productInLocal.findIndex((productsLocal)=> //Sí, en esa función de JavaScript, productsLocal es el parámetro que hace referencia a cada elemento del arreglo productInLocal durante la iteración del método findIndex. El método findIndex recorre el arreglo productInLocal y, por cada elemento, ejecuta la función de comparación que verifica si el id de ese elemento (es decir, productsLocal.id) es igual al id de otro objeto productIn.
        productsLocal.id === productIn.id // si pasa esto nuestro indice existe
                                          // Este metodo nos da -1 si no existe  
    );

    //Verificar si el elemento existe
    if(existingIndex !== -1){
    //Si existe debe reemplazarse 
        productInLocal[existingIndex] = productIn; // si existe el indice tomamos el array(productInLocal), accedemos a ese indice(productInLocal[existingIndex]), y lo reemplazamos por el nuevo valor productIn 
    }else{
    //Si no agregarse
        productInLocal.push(productIn);

    };
    //setear el nuevo Array
    localStorage.setItem('products',JSON.stringify(productInLocal));//Finalmente, actualiza el localStorage con los productos modificados, convirtiendo el arreglo a una cadena JSON usando JSON.stringify
}