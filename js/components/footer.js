/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL
   ELEGANT MINIMAL · LIGHT SWEEP
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
             * para que el barrido pueda verse completo.
             */

            event.preventDefault();


            /*
             * Evitamos múltiples clics mientras
             * la animación está ejecutándose.
             */

            if (enlace.classList.contains("barrido")) {

                return;

            }


            /*
             * Reiniciamos la animación.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos un nuevo cálculo de layout
             * para permitir que la animación vuelva a empezar.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el barrido.
             */

            enlace.classList.add("barrido");


            /*
             * Navegamos cuando termina la animación.
             *
             * Duración CSS:
             * 0.95 segundos
             */

            setTimeout(function () {

                window.location.href = destino;

            }, 950);


        });


    });


});


