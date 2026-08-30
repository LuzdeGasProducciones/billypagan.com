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
       BARRIDO Y NAVEGACIÓN
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si ya está ejecutándose el efecto,
             * evitamos nuevos clics.
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
             * Detenemos temporalmente la navegación.
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
                 * Solo respondemos a nuestra animación.
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
             * Escuchamos el final real del CSS.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});
