const boton = document.getElementById("entrar");

const portada = document.getElementById("inicio");

const web = document.getElementById("web");



boton.addEventListener("click", function(){


portada.classList.add("salida");



setTimeout(function(){


web.scrollIntoView({

behavior:"smooth"

});


},800);



});
