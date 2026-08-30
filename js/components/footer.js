/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL
   ====================================================== */


/* ======================================================
   INICIALIZACIÓN
   ====================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       ENLACES DEL FOOTER
       ================================================== */

    const enlacesFooter = document.querySelectorAll(
        ".footer-artista, .footer-terminos"
    );


    /* ==================================================
       INTERACCIÓN DE LOS ENLACES
       ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Guardamos el destino original.
             */

            const destino = enlace.href;


            /*
             * Evitamos la navegación inmediata
             * para permitir que la microinteracción
             * sea perceptible.
             */

            event.preventDefault();


            /*
             * Evitamos dobles activaciones.
             */

            if (enlace.classList.contains("barrido")) {

                return;

            }


            /*
             * Activamos el estado visual.
             */

            enlace.classList.add("barrido");


            /*
             * Navegamos rápidamente después
             * de mostrar el pequeño efecto.
             *
             * La interacción es deliberadamente
             * breve para mantener la elegancia.
             */

            setTimeout(function () {

                window.location.href = destino;

            }, 180);


        });


    });


});


