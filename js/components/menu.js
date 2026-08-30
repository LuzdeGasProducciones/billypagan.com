/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   menu.js
   COMPONENTE · MENÚ MÓVIL + HAMBURGUESA
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

        menuMovil.classList.remove(
            "abierto"
        );


        hamburguesa.classList.remove(
            "abierta"
        );


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


        /* ----------------------------------------------
           ESTADO VISUAL DE LA HAMBURGUESA
        ---------------------------------------------- */

        hamburguesa.classList.toggle(
            "abierta",
            abierto
        );


        /* ----------------------------------------------
           ACCESIBILIDAD
        ---------------------------------------------- */

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
       05. CERRAR AL SELECCIONAR UNA OPCIÓN
    ================================================== */

    const enlaces =
        menuMovil.querySelectorAll("a");


    enlaces.forEach(enlace => {

        enlace.addEventListener("click", () => {

            cerrarMenu();

        });

    });


    /* ==================================================
       06. CERRAR CON ESC
    ================================================== */

    document.addEventListener("keydown", event => {


        if (
            event.key === "Escape" &&
            menuMovil.classList.contains("abierto")
        ) {

            cerrarMenu();

        }

    });


    /* ==================================================
       07. CERRAR AL CAMBIAR A HORIZONTAL
    ================================================== */

    const comprobarOrientacion = () => {


        if (
            window.innerWidth <= 767 &&
            window.matchMedia("(orientation: landscape)").matches
        ) {

            cerrarMenu();

        }


        if (window.innerWidth >= 768) {

            cerrarMenu();

        }

    };


    /* ==================================================
       08. CAMBIO DE TAMAÑO / ORIENTACIÓN
    ================================================== */

    window.addEventListener(
        "resize",
        comprobarOrientacion
    );


});
