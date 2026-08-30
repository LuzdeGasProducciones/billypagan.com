/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   menu.js · MENÚ MÓVIL + HAMBURGUESA
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hamburguesa = document.getElementById("hamburguesa");
    const menuMovil = document.getElementById("menuMovil");

    if (!hamburguesa || !menuMovil) return;

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


    hamburguesa.addEventListener("click", () => {

        const abierto =
            menuMovil.classList.toggle("abierto");

        hamburguesa.classList.toggle(
            "abierta",
            abierto
        );

        hamburguesa.setAttribute(
            "aria-expanded",
            String(abierto)
        );

        hamburguesa.setAttribute(
            "aria-label",
            abierto
                ? "Cerrar menú"
                : "Abrir menú"
        );

    });


    menuMovil.querySelectorAll("a").forEach(enlace => {

        enlace.addEventListener(
            "click",
            cerrarMenu
        );

    });


    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            menuMovil.classList.contains("abierto")
        ) {

            cerrarMenu();

        }

    });

});


