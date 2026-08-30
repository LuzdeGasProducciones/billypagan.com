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
       BARRIDO AL HACER CLIC
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el enlace ya está ejecutando
             * el barrido, no permitimos otro clic.
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
             * Detenemos temporalmente la navegación
             * para mostrar el destello.
             */

            event.preventDefault();


            /*
             * Activamos el barrido.
             */

            enlace.classList.add("barrido");


            /* ==================================================
               FINAL DE LA ANIMACIÓN
            ================================================== */

            const finalizarNavegacion = function (evento) {


                /*
                 * Solo reaccionamos a nuestra animación.
                 */

                if (evento.animationName !== "footerSweep") {

                    return;

                }


                /*
                 * Eliminamos el listener.
                 */

                enlace.removeEventListener(
                    "animationend",
                    finalizarNavegacion
                );


                /*
                 * Navegación inmediata.
                 */

                window.location.href = destino;

            };


            /*
             * Escuchamos el final real de la animación.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});

