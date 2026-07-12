document.addEventListener("DOMContentLoaded", () => {

    console.log("Billy Pagán · Sitio Oficial");

    const hamburguesa = document.getElementById("hamburguesa");
    const menuMovil = document.getElementById("menuMovil");

    if (!hamburguesa || !menuMovil) return;

    hamburguesa.addEventListener("click", () => {

        menuMovil.classList.toggle("abierto");

        hamburguesa.textContent =
            menuMovil.classList.contains("abierto") ? "✕" : "☰";

    });

    menuMovil.querySelectorAll("a").forEach(enlace => {

        enlace.addEventListener("click", () => {

            menuMovil.classList.remove("abierto");

            hamburguesa.textContent = "☰";

        });

    });

});
