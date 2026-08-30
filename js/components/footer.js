/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER
====================================================== */


/* ======================================================
   01. DESTELLO · SOLO AL HACER CLIC
====================================================== */

document.addEventListener("DOMContentLoaded", () => {


    const enlacesFooter =
        document.querySelectorAll(".footer a");


    enlacesFooter.forEach(enlace => {


        enlace.addEventListener("click", () => {


            /* ------------------------------------------
               Elimina una animación anterior
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
