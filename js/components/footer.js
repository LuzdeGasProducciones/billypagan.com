/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js · COMPONENTE FOOTER
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const enlaces = document.querySelectorAll(".footer a");

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", event => {

            if (enlace.classList.contains("destello")) {
                event.preventDefault();
                return;
            }

            enlace.classList.add("destello");

            const destino = enlace.href;

            event.preventDefault();

            setTimeout(() => {
                window.location.href = destino;
            }, 650);

        });

    });

});


