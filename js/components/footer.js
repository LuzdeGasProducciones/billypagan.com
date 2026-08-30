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
       INTERACCIÓN DEL FOOTER
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el efecto ya está ejecutándose,
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
             * para permitir que se vea el barrido.
             */

            event.preventDefault();


            /*
             * Reiniciamos cualquier estado anterior.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos un nuevo cálculo de layout
             * para reiniciar correctamente la animación.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el barrido editorial.
             */

            enlace.classList.add("barrido");


            /* ==================================================
               NAVEGACIÓN AL TERMINAR LA ANIMACIÓN
            ================================================== */

            const finalizarNavegacion = function (evento) {


                /*
                 * Solo reaccionamos a la animación
                 * del pseudo-elemento ::after.
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
                 * Navegamos al destino original.
                 */

                window.location.href = destino;

            };


            /*
             * Esperamos la finalización real
             * de la animación CSS.
             */

            enlace.addEventListener(
                "animationend",
                finalizarNavegacion
            );


        });


    });


});
