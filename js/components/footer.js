/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL
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
             * Guardamos el destino original
             * antes de detener la navegación.
             */

            const destino = enlace.href;


            /*
             * Evitamos la navegación inmediata
             * para permitir que el barrido
             * pueda ejecutarse completo.
             */

            event.preventDefault();


            /*
             * Evitamos dobles activaciones
             * mientras el efecto está ejecutándose.
             */

            if (enlace.classList.contains("barrido")) {
                return;
            }


            /*
             * Reiniciamos la animación por seguridad.
             */

            enlace.classList.remove("barrido");


            /*
             * Forzamos al navegador a recalcular
             * el estado antes de volver a activar
             * la animación.
             */

            void enlace.offsetWidth;


            /*
             * Activamos el barrido de luz.
             */

            enlace.classList.add("barrido");


            /*
             * Esperamos prácticamente la duración
             * completa de la animación CSS.
             *
             * CSS:
             * footerSweep = 0.95s
             */

            setTimeout(function () {

                window.location.href = destino;

            }, 950);


        });


    });


});
