/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER
====================================================== */


/* ======================================================
   DESTELLO · ACTIVACIÓN AL HACER CLIC
====================================================== */

document.addEventListener("DOMContentLoaded", () => {


    const enlacesFooter =
        document.querySelectorAll(".footer a");


    enlacesFooter.forEach(enlace => {


        enlace.addEventListener("click", () => {


            /* ------------------------------------------
               Reinicia el efecto si se pulsa de nuevo
            ------------------------------------------ */

            enlace.classList.remove(
                "destello-activo"
            );


            /* ------------------------------------------
               Fuerza el reinicio de la animación
            ------------------------------------------ */

            void enlace.offsetWidth;


            /* ------------------------------------------
               Activa el destello
            ------------------------------------------ */

            enlace.classList.add(
                "destello-activo"
            );


        });


    });


});


/* ======================================================
   FIN · footer.js
====================================================== */
