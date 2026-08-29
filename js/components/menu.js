/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   menu.js
   COMPONENTE · MENÚ MÓVIL + HAMBURGUESA
====================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       ELEMENTOS
    ================================================== */

    const hamburguesa =
        document.getElementById("hamburguesa");

    const menuMovil =
        document.getElementById("menuMovil");


    /* ==================================================
       COMPROBACIÓN
    ================================================== */

    if (!hamburguesa || !menuMovil) {
        return;
    }


    /* ==================================================
       ABRIR / CERRAR MENÚ
    ================================================== */

    hamburguesa.addEventListener("click", () => {

        const abierto =
            menuMovil.classList.toggle("abierto");


        hamburguesa.classList.toggle(
            "abierta",
            abierto
        );


        hamburguesa.setAttribute(
            "aria-expanded",
            abierto ? "true" : "false"
        );


        hamburguesa.setAttribute(
            "aria-label",
            abierto
                ? "Cerrar menú"
                : "Abrir menú"
        );

    });


    /* ==================================================
       CERRAR MENÚ AL NAVEGAR
    ================================================== */

    menuMovil
        .querySelectorAll("a")
        .forEach(enlace => {

            enlace.addEventListener("click", () => {

                menuMovil.classList.remove("abierto");

                hamburguesa.classList.remove("abierta");

                hamburguesa.setAttribute(
                    "aria-expanded",
                    "false"
                );

                hamburguesa.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

            });

        });


    /* ==================================================
       CERRAR MENÚ CON ESC
    ================================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            menuMovil.classList.contains("abierto")
        ) {

            menuMovil.classList.remove("abierto");

            hamburguesa.classList.remove("abierta");

            hamburguesa.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburguesa.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        }

    });

});
