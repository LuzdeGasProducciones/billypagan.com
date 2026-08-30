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
             * ignoramos nuevos clics.
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
             * se complete.
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
             * vuelva a comenzar desde el principio.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el barrido de luz.
             */

            enlace.classList.add("barrido");


            /* ==================================================
               NAVEGACIÓN AL FINAL DE LA ANIMACIÓN
            ================================================== */

            const finalizarNavegacion = function () {


                /*
                 * Eliminamos el listener para evitar
                 * ejecuciones duplicadas.
                 */

                enlace.removeEventListener(
                    "animationend",
                    finalizarNavegacion
                );


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


