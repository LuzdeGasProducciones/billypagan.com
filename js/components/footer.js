/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL
   ELEGANT MINIMAL · EDITORIAL LIGHT SWEEP
====================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       ENLACES DEL FOOTER
    ================================================== */

    const enlacesFooter = document.querySelectorAll(
        ".footer-artista, .footer-terminos"
    );


    /* ==================================================
       DURACIÓN DEL DESTELLO
    ================================================== */

    const DURACION_DESTELLO = 480;


    /* ==================================================
       INTERACCIÓN
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el enlace ya está ejecutando
             * el efecto, no permitimos otro clic.
             */

            if (enlace.classList.contains("barrido")) {

                event.preventDefault();

                return;

            }


            /*
             * Guardamos el destino original.
             */

            const destino = enlace.href;


            /*
             * Evitamos la navegación inmediata.
             */

            event.preventDefault();


            /*
             * Activamos el barrido.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos el reinicio de la animación.
             */

            void enlace.offsetWidth;


            /*
             * Iniciamos el destello.
             */

            enlace.classList.add("barrido");


            /*
             * Navegación rápida después del destello.
             */

            setTimeout(function () {

                window.location.href = destino;

            }, DURACION_DESTELLO);


        });


    });


});

