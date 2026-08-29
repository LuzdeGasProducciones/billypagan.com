/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   components/footer.js
   FOOTER GLOBAL
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const contenedoresFooter =
        document.querySelectorAll("[data-footer]");

    if (!contenedoresFooter.length) {
        return;
    }


    /* ==================================================
       DETERMINAR RUTAS
    ================================================== */

    const estamosEnPaginas =
        window.location.pathname.includes("/paginas/");

    const estamosEnSubcarpeta =
        window.location.pathname.includes("/paginas/conciertos/") ||
        window.location.pathname.includes("/paginas/discos/") ||
        window.location.pathname.includes("/paginas/legal/");


    let rutaInicio;
    let rutaTerminos;


    if (estamosEnSubcarpeta) {

        rutaInicio = "../../../index.html";
        rutaTerminos = "../legal/terminos-y-condiciones.html";

    } else if (estamosEnPaginas) {

        rutaInicio = "../index.html";
        rutaTerminos = "legal/terminos-y-condiciones.html";

    } else {

        rutaInicio = "index.html";
        rutaTerminos = "paginas/legal/terminos-y-condiciones.html";

    }


    /* ==================================================
       FOOTER
    ================================================== */

    contenedoresFooter.forEach(footer => {

        footer.innerHTML = `

            <div class="footer-contenido">

                <div class="footer-copy">

                    © 2026

                    <a
                        href="${rutaInicio}"
                        class="footer-artista"
                        aria-label="Billy Pagán · Página de inicio"
                    >
                        BILLY PAGÁN
                    </a>

                    . TODOS LOS DERECHOS RESERVADOS.

                </div>


                <div class="footer-legal">

                    <a
                        href="${rutaTerminos}"
                        class="footer-terminos"
                    >
                        TÉRMINOS Y CONDICIONES
                    </a>

                </div>

            </div>

        `;

    });

});
