/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   main.js
   FUNCIONES GENERALES
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       MENÚ MÓVIL
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


        hamburguesa.textContent =
            abierto ? "✕" : "☰";

    });


    /* ==================================================
       CERRAR MENÚ AL NAVEGAR
    ================================================== */

    menuMovil
        .querySelectorAll("a")
        .forEach(enlace => {

            enlace.addEventListener("click", () => {

                menuMovil.classList.remove("abierto");

                hamburguesa.setAttribute(
                    "aria-expanded",
                    "false"
                );

                hamburguesa.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

                hamburguesa.textContent = "☰";

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

            hamburguesa.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburguesa.setAttribute(
                "aria-label",
                "Abrir menú"
            );

            hamburguesa.textContent = "☰";

        }

    });

});
