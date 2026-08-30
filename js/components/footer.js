/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL
====================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       ENLACES DEL FOOTER
    ================================================== */

    const enlacesFooter = document.querySelectorAll(
        ".footer-artista, .footer-terminos"
    );


    /* ==================================================
       BARRIDO DE LUZ AL HACER CLIC
    ================================================== */

    enlacesFooter.forEach(function (enlace) {

        enlace.addEventListener("click", function (event) {

            /*
             * Guardamos el destino original.
             */

            const destino = enlace.href;


            /*
             * Evitamos la navegación inmediata
             * para permitir que el efecto visual
             * pueda completarse.
             */

            event.preventDefault();


            /*
             * Reiniciamos la animación por si el usuario
             * vuelve a pulsar rápidamente.
             */

            enlace.classList.remove("barrido");


            void enlace.offsetWidth;


            /*
             * Activamos el barrido.
             */

            enlace.classList.add("barrido");


            /*
             * Navegamos una vez terminado el efecto.
             */

            setTimeout(function () {

                window.location.href = destino;

            }, 500);

        });

    });

});
