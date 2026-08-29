/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   main.js
   FUNCIONES GENERALES · MENÚ
====================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       ELEMENTOS DEL MENÚ MÓVIL
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

    const cerrarMenu = () => {

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

    };


    const alternarMenu = () => {

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

    };


    /* ==================================================
       BOTÓN HAMBURGUESA
    ================================================== */

    hamburguesa.addEventListener(
        "click",
        alternarMenu
    );


    /* ==================================================
       CERRAR AL SELECCIONAR UNA PÁGINA
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
       CERRAR CON ESC
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
