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
             * Evitamos dobles clics durante
             * el pequeño efecto de transición.
             */

            if (enlace.classList.contains("barrido")) {

                event.preventDefault();

                return;

            }


            /*
             * Guardamos el destino.
             */

            const destino = enlace.href;


            /*
             * Detenemos momentáneamente
             * la navegación.
             */

            event.preventDefault();


            /*
             * Reiniciamos el efecto.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos el navegador a recalcular
             * el estado antes de iniciar la animación.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el destello.
             */

            enlace.classList.add("barrido");


            /*
             * Función de navegación.
             */

            const finalizarNavegacion = function (evento) {


                /*
                 * Solo respondemos a footerSweep.
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
                 * Navegamos inmediatamente.
                 */

                window.location.href = destino;

            };


            /*
             * Esperamos únicamente los 0.35 s
             * de la animación real.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});


