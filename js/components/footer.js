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
       EFECTO EDITORIAL AL HACER CLIC
    ================================================== */

    enlacesFooter.forEach(function (enlace) {


        enlace.addEventListener("click", function (event) {


            /*
             * Si el efecto ya está activo,
             * evitamos una segunda activación.
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


            /*
             * Cuando termina realmente la animación,
             * eliminamos la clase y navegamos.
             */

            enlace.addEventListener(
                "animationend",
                function finalizarNavegacion() {

                    enlace.classList.remove("barrido");

                    enlace.removeEventListener(
                        "animationend",
                        finalizarNavegacion
                    );

                    window.location.href = destino;

                }
            );


        });


    });


});


