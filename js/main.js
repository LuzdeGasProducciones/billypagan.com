/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   menu.js
   COMPONENTE · MENÚ MÓVIL + HAMBURGUESA
====================================================== */


/* ======================================================
   INICIALIZACIÓN
====================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       01. ELEMENTOS
    ================================================== */

    const hamburguesa =
        document.getElementById("hamburguesa");

    const menuMovil =
        document.getElementById("menuMovil");


    /* ==================================================
       02. COMPROBACIÓN
    ================================================== */

    if (!hamburguesa || !menuMovil) {

        return;

    }


    /* ==================================================
       03. FUNCIÓN · CERRAR MENÚ
    ================================================== */

    const cerrarMenu = () => {

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

    };


    /* ==================================================
       04. ABRIR / CERRAR MENÚ
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
       05. CERRAR AL NAVEGAR
    ================================================== */

    menuMovil
        .querySelectorAll("a")
        .forEach(enlace => {

            enlace.addEventListener(
                "click",
                cerrarMenu
            );

        });


    /* ==================================================
       06. CERRAR CON ESC
    ================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                menuMovil.classList.contains("abierto")
            ) {

                cerrarMenu();

            }

        }
    );


});


/* ======================================================
   FIN · menu.js
====================================================== */
