//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
    str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0,pt) + "." + str.slice(pt);
    }

    /*combos*/
    const preSup = 7.25;
    const prePer = 5.74;
    const preInf = 3.50;

    /*PRODUCTOS VARIOS */
    const preEnsa = 1.50;
    const prePapa = 1.25;
    const prePoGra = 1.75;
    const prePoMed = 1.50;
    const prePoPeq = 1.25;
    const preBebGran = 1.50;
    const preBebMed= 1.25;
    const preBebPeq = 1.00;
    const preCafe = 0.50;
    const prePostre = 1.25;

  


    /*items*/
    function cant(){
        var supComb = getElementById('super').value;
        var personal = getElementById('personal').value;
        var infantil = getElementById('infantil').value;
    
        var ensa = getElementById('ensa').value;
        var papa = getElementById('papa').value;
        var pzGrande = getElementById('pzGrande').value;
        var pzMed = getElementById('pzMed').value;
        var pzPeq = getElementById('pzPeq').value;
        var bebGran = getElementById('bebGran').value;
        var bebMed = getElementById('bebMed').value;
        var bebPeq = getElementById('bebPeq').value;
        var cafe = getElementById('cafe').value;
        var postre = getElementById('postre').value;

        var imprimir = supComb;
        
        var cant =  document.getElementById('cant');
        cant.innerHTML = imprimir;
    }

    function total(){
        
    }
