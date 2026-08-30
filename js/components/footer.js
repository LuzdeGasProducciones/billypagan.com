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
       BARRIDO EDITORIAL AL HACER CLIC
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el enlace ya está ejecutando
             * el efecto, evitamos nuevos clics.
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
             * para permitir que el destello termine.
             */

            event.preventDefault();


            /*
             * Reiniciamos cualquier animación anterior.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos un nuevo cálculo de layout
             * para garantizar el reinicio de la animación.
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
                 * Solo reaccionamos a la animación
                 * específica del barrido editorial.
                 */

                if (evento.animationName !== "footerSweep") {

                    return;

                }


                /*
                 * Eliminamos el listener para evitar
                 * ejecuciones posteriores.
                 */

                enlace.removeEventListener(
                    "animationend",
                    finalizarNavegacion
                );


                /*
                 * Limpiamos el estado visual.

                 * La navegación se produce inmediatamente
                 * después de terminar el efecto.
                 */

                enlace.classList.remove("barrido");


                /*
                 * Navegamos al destino original.
                 */

                window.location.href = destino;

            };


            /*
             * Escuchamos la finalización real
             * de la animación CSS.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});

