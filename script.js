document.addEventListener("DOMContentLoaded", function(){

    console.log("Billy Pagán - Sitio Oficial");

    const hamburguesa = document.getElementById("hamburguesa");
    const menuMovil = document.getElementById("menuMovil");

    if(hamburguesa && menuMovil){

        hamburguesa.addEventListener("click", function(){

            menuMovil.classList.toggle("abierto");

            if(menuMovil.classList.contains("abierto")){

                hamburguesa.innerHTML = "✕";

            }else{

                hamburguesa.innerHTML = "☰";

            }

        });

    }

});
