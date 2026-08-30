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
       INTERACCIÓN
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el barrido ya está activo,
             * evitamos un segundo clic.
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
             * Reiniciamos cualquier animación anterior.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos el navegador a recalcular
             * el estado del elemento.
             */

            void enlace.offsetWidth;


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
                 * Evitamos que el listener permanezca activo.
                 */

                enlace.removeEventListener(
                    "animationend",
                    finalizarNavegacion
                );


                /*
                 * Limpiamos el estado visual.
                 */

                enlace.classList.remove("barrido");


                /*
                 * Navegamos inmediatamente.
                 */

                window.location.href = destino;

            };


            /*
             * Esperamos el final real del destello.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});
