document.addEventListener("DOMContentLoaded", function(){


const boton = document.getElementById("entrar");


const portada = document.querySelector(".hero");


const principal = document.querySelector(".principal");



boton.addEventListener("click", function(){


portada.style.transition="opacity 1s ease";


portada.style.opacity="0";



setTimeout(function(){


principal.scrollIntoView({

behavior:"smooth"

});


},1000);



});


});
