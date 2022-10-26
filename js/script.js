function guardarDatos(){

    let datoNombre = document.getElementById("nombres").value; 

    savearray = [];
    var guardar = function(){
        var array = [];                                 
        for (var i = 0; i < 3; i++) {               
            array[i] = (datoNombre);
            savearray.push (array[i]);  
            document.getElementById("aleatorios").innerHTML = (datoNombre[i].value); 
        }
    }                       

}



