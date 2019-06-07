$(document).ready(function(){


    imgs = [
        "img/goku.jpg",
        "img/mochila.jpg",
        "img/muneco.jpg",
        "img/pelicula.jpg",
    ] 

    var numero = -1;

    function carrusel(){
        
        if(numero >= imgs.length-1){
            numero = -1;
        }
        
        numero++;
        $("#img-carrusel").attr("src",imgs[numero]);

        console.log(numero);
        setTimeout(carrusel,2000);
    }

    carrusel();

  });