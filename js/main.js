/* ======================================================
   BILLY PAGÁN · SITIO OFICIAL
   main.js
   PORTADA
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hamburguesa =
        document.getElementById("hamburguesa");

    const menuMovil =
        document.getElementById("menuMovil");


    if (!hamburguesa || !menuMovil) {
        return;
    }


    /* ----------------------------------------------
       ABRIR / CERRAR MENÚ
    ---------------------------------------------- */

    hamburguesa.addEventListener("click", () => {

        const abierto =
            menuMovil.classList.toggle("abierto");

        hamburguesa.textContent =
            abierto ? "✕" : "☰";

        hamburguesa.setAttribute(
            "aria-expanded",
            abierto
        );

        hamburguesa.setAttribute(
            "aria-label",
            abierto
                ? "Cerrar menú"
                : "Abrir menú"
        );

    });


    /* ----------------------------------------------
       CERRAR AL SELECCIONAR UNA OPCIÓN
    ---------------------------------------------- */

    menuMovil.querySelectorAll("a").forEach(enlace => {

        enlace.addEventListener("click", () => {

            menuMovil.classList.remove("abierto");

            hamburguesa.textContent = "☰";

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

});
