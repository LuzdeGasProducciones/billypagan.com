/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER
====================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       ELEMENTOS
    ================================================== */

    const enlacesFooter =
        document.querySelectorAll(".footer a");


    /* ==================================================
       COMPROBACIÓN
    ================================================== */

    if (!enlacesFooter.length) {

        return;

    }


    /* ==================================================
       DESTELLO AL HACER CLIC / TOCAR
    ================================================== */

    enlacesFooter.forEach(enlace => {


        enlace.addEventListener("click", event => {


            /* ------------------------------------------
               EVITAR DOBLE CLIC DURANTE EL EFECTO
            ------------------------------------------ */

            if (
                enlace.classList.contains("destello")
            ) {

                event.preventDefault();

                return;

            }


            /* ------------------------------------------
               AÑADIR DESTELLO
            ------------------------------------------ */

            enlace.classList.add("destello");


            /* ------------------------------------------
               GUARDAR DESTINO
            ------------------------------------------ */

            const destino =
                enlace.href;


            /* ------------------------------------------
               DEJAR QUE EL DESTELLO TERMINE
            ------------------------------------------ */

            event.preventDefault();


            setTimeout(() => {

                window.location.href = destino;

            }, 650);


        });


    });


});
