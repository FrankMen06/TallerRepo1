function guardarDatos(){

    let datoNombre = document.getElementById("nombres").value; 
    document.getElementById("aleatorios").innerHTML = datoNombre; 


    savearray = [];
    var guardar = function(){
        var array = [];                                 
        for (var i = 0; i < 3; i++) {               
            array[i] = (guardarDatos);
            savearray.push (array[i]);  
        }
    }                       

}
