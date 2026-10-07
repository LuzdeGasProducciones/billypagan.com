/* ==================================================
   DISCOGRAFÍA · BILLY PAGÁN
================================================== */


/*
    ==================================================
    DATOS DE LOS DISCOS
    ==================================================

    Aquí iremos introduciendo la información real
    de cada álbum.

    NO es necesario modificar el HTML para añadir
    nuevos discos.
*/


const discografia = [

    {
        titulo: "CERTIFICADO DE EXISTENCIA",
        anio: "2013",

        portada:
            "../../img/musica/certificado-de-existencia.jpg",

        formato:
            "Álbum · 2013",

        descripcion:
            "Descripción del álbum pendiente de incorporar.",

        creditosGenerales: [

            "Producción: pendiente",
            "Grabación: pendiente",
            "Mezcla: pendiente",
            "Mastering: pendiente"

        ],

        tienda:
            "../tienda.html",

        canciones: [

            /*
            {
                numero: 1,
                titulo: "Título de la canción",

                letra:
                    `Letra de la canción...`,

                acordes:
                    `[Am]Letra con acordes...`,

                creditos: [
                    "Billy Pagán · voz",
                    "Nombre · guitarra",
                    "Nombre · bajo"
                ]
            }
            */

        ]
    },


    {
        titulo: "ENSAYOS CLÍNICOS VOL. I",
        anio: "",

        portada:
            "../../img/musica/ensayos-clinicos-vol-1.jpg",

        formato:
            "Álbum",

        descripcion:
            "Descripción del álbum pendiente de incorporar.",

        creditosGenerales: [],

        tienda:
            "../tienda.html",

        canciones: []

    },


    {
        titulo: "EL PEREGRINO",
        anio: "2024",

        portada:
            "../../img/musica/el-peregrino.jpg",

        formato:
            "Álbum · 2024",

        descripcion:
            "Grabado entre España y Chile.",

        creditosGenerales: [],

        tienda:
            "../tienda.html",

        canciones: []

    },


    {
        titulo: "PERDIDO STUDIOS",
        anio: "2025",

        portada:
            "../../img/musica/perdido-studios.jpg",

        formato:
            "Álbum",

        descripcion:
            "Grabaciones realizadas entre 2013 y 2025.",

        creditosGenerales: [],

        tienda:
            "../tienda.html",

        canciones: []

    }

];


/* ==================================================
   ESTADO
================================================== */

let discoActual = 0;

let cancionActual = null;


/* ==================================================
   ELEMENTOS
================================================== */

const portadas =
    document.getElementById("discografiaPortadas");

const informacion =
    document.getElementById("discoInformacion");

const tracklist =
    document.getElementById("discoTracklist");

const panelCancion =
    document.getElementById("cancionPanel");

const cerrarCancion =
    document.getElementById("cerrarCancion");

const cancionNumero =
    document.getElementById("cancionNumero");

const cancionTitulo =
    document.getElementById("cancionTitulo");

const cancionContenido =
    document.getElementById("cancionContenido");

const botonAnterior =
    document.getElementById("discoAnterior");

const botonSiguiente =
    document.getElementById("discoSiguiente");


/* ==================================================
   CREAR PORTADAS
================================================== */

function renderPortadas() {

    portadas.innerHTML = "";

    discografia.forEach((disco, indice) => {

        const elemento =
            document.createElement("article");

        elemento.className =
            "disco-portada";

        if (indice === discoActual) {

            elemento.classList.add("activa");

        }


        elemento.innerHTML = `

            <img
                src="${disco.portada}"
                alt="Portada de ${disco.titulo}"
            >

            <div class="disco-portada-titulo">
                ${disco.titulo}
            </div>

            <span class="disco-portada-anio">
                ${disco.anio}
            </span>

        `;


        elemento.addEventListener(
            "click",
            () => {

                discoActual = indice;

                actualizarDisco();

            }
        );


        portadas.appendChild(elemento);

    });

}


/* ==================================================
   INFORMACIÓN DEL DISCO
================================================== */

function renderInformacion() {

    const disco =
        discografia[discoActual];


    const creditos =
        disco.creditosGenerales.length
            ? disco.creditosGenerales
                .map(
                    credito =>
                        `<p>${credito}</p>`
                )
                .join("")
            : "";


    informacion.innerHTML = `

        <h2>
            ${disco.titulo}
        </h2>

        <div class="disco-informacion-meta">
            ${disco.formato}
        </div>

        <div class="disco-informacion-descripcion">
            ${disco.descripcion}
        </div>

        ${
            creditos
                ? `
                    <div class="disco-creditos-generales">

                        <h3>
                            CRÉDITOS
                        </h3>

                        ${creditos}

                    </div>
                `
                : ""
        }

        <a
            class="disco-tienda"
            href="${disco.tienda}"
        >
            VER EN TIENDA
        </a>

    `;

}


/* ==================================================
   TRACKLIST
================================================== */

function renderTracklist() {

    const disco =
        discografia[discoActual];


    if (!disco.canciones.length) {

        tracklist.innerHTML = `

            <h2>
                TRACKLIST
            </h2>

            <p>
                Información próximamente.
            </p>

        `;

        return;

    }


    const canciones =
        disco.canciones
            .map(cancion => `

                <article class="track">

                    <span class="track-numero">
                        ${String(cancion.numero).padStart(2, "0")}
                    </span>

                    <span class="track-titulo">
                        ${cancion.titulo}
                    </span>

                    <div class="track-opciones">

                        <button
                            type="button"
                            class="track-opcion"
                            data-cancion="${cancion.numero}"
                            data-vista="letra"
                        >
                            LETRA
                        </button>

                        <button
                            type="button"
                            class="track-opcion"
                            data-cancion="${cancion.numero}"
                            data-vista="acordes"
                        >
                            ACORDES
                        </button>

                        <button
                            type="button"
                            class="track-opcion"
                            data-cancion="${cancion.numero}"
                            data-vista="creditos"
                        >
                            CRÉDITOS
                        </button>

                    </div>

                </article>

            `)
            .join("");


    tracklist.innerHTML = `

        <h2>
            TRACKLIST
        </h2>

        ${canciones}

    `;


    document
        .querySelectorAll(".track-opcion")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    const numero =
                        Number(
                            boton.dataset.cancion
                        );

                    const vista =
                        boton.dataset.vista;

                    abrirCancion(
                        numero,
                        vista
                    );

                }
            );

        });

}


/* ==================================================
   ABRIR CANCIÓN
================================================== */

function abrirCancion(
    numero,
    vista = "letra"
) {

    const disco =
        discografia[discoActual];


    cancionActual =
        disco.canciones.find(
            cancion =>
                cancion.numero === numero
        );


    if (!cancionActual) {
        return;
    }


    cancionNumero.textContent =
        String(
            cancionActual.numero
        ).padStart(2, "0");


    cancionTitulo.textContent =
        cancionActual.titulo;


    panelCancion.hidden = false;


    mostrarVistaCancion(vista);


    panelCancion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==================================================
   VISTA DE CANCIÓN
================================================== */

function mostrarVistaCancion(vista) {

    document
        .querySelectorAll(
            ".cancion-panel-opcion"
        )
        .forEach(boton => {

            boton.classList.toggle(
                "activo",
                boton.dataset.vista === vista
            );

        });


    if (vista === "letra") {

        cancionContenido.innerHTML = `

            <div class="letra-contenido">
                ${escapeHtml(
                    cancionActual.letra || 
                    "Letra próximamente."
                )}
            </div>

        `;

    }


    if (vista === "acordes") {

        const acordes =
            cancionActual.acordes ||
            "Acordes próximamente.";


        cancionContenido.innerHTML = `

            <div class="acordes-contenido">
                ${formatearAcordes(acordes)}
            </div>

        `;

    }


    if (vista === "creditos") {

        const creditos =
            cancionActual.creditos || [];


        cancionContenido.innerHTML = `

            <div class="creditos-cancion">

                ${
                    creditos.length
                        ? creditos
                            .map(
                                credito =>
                                    `<p>${escapeHtml(credito)}</p>`
                            )
                            .join("")
                        : "<p>Créditos próximamente.</p>"
                }

            </div>

        `;

    }

}


/* ==================================================
   ACORDES
================================================== */

function formatearAcordes(texto) {

    const seguro =
        escapeHtml(texto);


    return seguro.replace(
        /\[([^\]]+)\]/g,
        '<span class="acorde">[$1]</span>'
    );

}


/* ==================================================
   SEGURIDAD · TEXTO
================================================== */

function escapeHtml(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ==================================================
   CAMBIAR DISCO
================================================== */

function cambiarDisco(direccion) {

    discoActual += direccion;


    if (discoActual < 0) {

        discoActual =
            discografia.length - 1;

    }


    if (
        discoActual >=
        discografia.length
    ) {

        discoActual = 0;

    }


    actualizarDisco();

}


/* ==================================================
   ACTUALIZAR TODO
================================================== */

function actualizarDisco() {

    renderPortadas();

    renderInformacion();

    renderTracklist();

    panelCancion.hidden = true;

}


/* ==================================================
   NAVEGACIÓN
================================================== */

botonAnterior.addEventListener(
    "click",
    () => cambiarDisco(-1)
);


botonSiguiente.addEventListener(
    "click",
    () => cambiarDisco(1)
);


/* ==================================================
   CERRAR CANCIÓN
================================================== */

cerrarCancion.addEventListener(
    "click",
    () => {

        panelCancion.hidden = true;

    }
);


/* ==================================================
   CAMBIAR LETRA / ACORDES / CRÉDITOS
================================================== */

document
    .querySelectorAll(
        ".cancion-panel-opcion"
    )
    .forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                mostrarVistaCancion(
                    boton.dataset.vista
                );

            }
        );

    });


/* ==================================================
   INICIALIZACIÓN
================================================== */

actualizarDisco();
