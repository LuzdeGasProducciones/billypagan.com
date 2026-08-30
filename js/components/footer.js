/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL
   ELEGANT MINIMAL · EDITORIAL LIGHT SWEEP
====================================================== */


document.addEventListener("DOMContentLoaded", function () {


    const enlacesFooter = document.querySelectorAll(
        ".footer-artista, .footer-terminos"
    );


    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            if (enlace.classList.contains("barrido")) {

                event.preventDefault();

                return;

            }


            const destino = enlace.href;


            event.preventDefault();


            enlace.classList.add("barrido");


            const finalizar = function () {

                enlace.removeEventListener(
                    "animationend",
                    finalizar
                );

                window.location.href = destino;

            };


            enlace.addEventListener(
                "animationend",
                finalizar,
                { once: true }
            );


            /*
             * Seguridad:
             * si animationend no se dispara,
             * navegamos igualmente.
             */

            setTimeout(function () {

                window.location.href = destino;

            }, 450);


        });


    });


});

