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
             * el barrido, ignoramos el nuevo clic.
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
             * Reiniciamos la animación.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos un nuevo cálculo de layout
             * para reiniciar correctamente el efecto.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el barrido editorial.
             */

            enlace.classList.add("barrido");


            /* ==================================================
               FINAL DE LA ANIMACIÓN
            ================================================== */

            const finalizarNavegacion = function (evento) {


                /*
                 * Nos aseguramos de reaccionar únicamente
                 * a nuestra animación footerSweep.
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
                 * Navegamos al destino.
                 */

                window.location.href = destino;

            };


            /*
             * Esperamos al final real de la animación.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});
