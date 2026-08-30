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
       BARRIDO DE LUZ AL HACER CLIC
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el enlace ya está ejecutando el efecto,
             * evitamos nuevos clics durante la animación.
             */

            if (enlace.classList.contains("barrido")) {

                event.preventDefault();

                return;

            }


            /*
             * Guardamos el destino original
             * antes de detener la navegación.
             */

            const destino = enlace.href;


            /*
             * Detenemos temporalmente la navegación
             * para permitir que el efecto visual
             * pueda completarse.
             */

            event.preventDefault();


            /*
             * Reiniciamos cualquier estado anterior.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos un nuevo cálculo de layout.
             *
             * Esto permite que la animación CSS
             * vuelva a comenzar correctamente.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el barrido editorial.
             */

            enlace.classList.add("barrido");


            /* ==================================================
               FINALIZACIÓN DE LA ANIMACIÓN
            ================================================== */

            const finalizarNavegacion = function (event) {


                /*
                 * Comprobamos que el evento pertenece
                 * realmente a la animación del barrido.
                 */

                if (event.animationName !== "editorialSweep") {

                    return;

                }


                /*
                 * Eliminamos el listener inmediatamente
                 * para evitar ejecuciones posteriores.
                 */

                enlace.removeEventListener(
                    "animationend",
                    finalizarNavegacion
                );


                /*
                 * Eliminamos la clase para dejar el enlace
                 * limpio antes de abandonar la página.
                 */

                enlace.classList.remove("barrido");


                /*
                 * Navegamos al destino original.
                 */

                window.location.href = destino;

            };


            /*
             * Esperamos al evento real de finalización
             * de la animación CSS.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});

