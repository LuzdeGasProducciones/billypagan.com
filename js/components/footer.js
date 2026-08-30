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
             * la animación.
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
             * para mostrar el barrido.
             */

            event.preventDefault();


            /*
             * Activamos el barrido.
             */

            enlace.classList.remove("barrido");

            void enlace.offsetWidth;

            enlace.classList.add("barrido");


            /*
             * Navegamos al terminar el barrido.
             */

            const finalizar = function (evento) {


                if (evento.animationName !== "footerSweep") {

                    return;

                }


                enlace.removeEventListener(
                    "animationend",
                    finalizar
                );


                window.location.href = destino;

            };


            enlace.addEventListener(
                "animationend",
                finalizar
            );


            /*
             * Respaldo de seguridad.
             *
             * Si el navegador no dispara animationend,
             * la navegación sigue produciéndose.
             */

            setTimeout(function () {

                window.location.href = destino;

            }, 480);


        });


    });


});


