/* ==================================================
   DISCOGRAFÍA · BILLY PAGÁN
================================================== */


/* ==================================================
   DATOS DE LOS DISCOS
================================================== */

const discografia = [

    {
        titulo: "CERTIFICADO DE EXISTENCIA",
        anio: "2013",

        portada:
            "../../images/tienda/portada-certificado.jpg",

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

        canciones: []

    },


    {
        titulo: "ENSAYOS CLÍNICOS VOL. I",
        anio: "",

        portada:
            "../../images/tienda/portada-ensayos1.png",

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
            "../../images/tienda/portada-peregrino.JPG",

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
            "../../images/tienda/portada-front.jpg",

        formato:
            "Álbum · 2025",

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

let animacionEnCurso = false;


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

function crearPortadas() {

    portadas.innerHTML = "";

    discografia.forEach((disco, indice) => {

        const elemento =
            document.createElement("article");

        elemento.className =
            "disco-portada";


        elemento.dataset.indice =
            indice;


        elemento.innerHTML = `

            <img
                src="${disco.portada}"
                alt="Portada de ${disco.titulo}"
                draggable="false"
            >

            <div class="disco-portada-titulo">
                ${escapeHtml(disco.titulo)}
            </div>

            <span class="disco-portada-anio">
                ${escapeHtml(disco.anio)}
            </span>

        `;


        elemento.addEventListener(
            "click",
            () => {

                const indiceSeleccionado =
                    Number(elemento.dataset.indice);

                if (
                    indiceSeleccionado === discoActual ||
                    animacionEnCurso
                ) {
                    return;
                }


                const diferencia =
                    obtenerDiferenciaCircular(
                        indiceSeleccionado,
                        discoActual,
                        discografia.length
                    );


                if (diferencia === 1) {

                    cambiarDisco(1);

                } else if (diferencia === -1) {

                    cambiarDisco(-1);

                } else if (diferencia > 0) {

                    cambiarDisco(1);

                } else {

                    cambiarDisco(-1);

                }

            }
        );


        portadas.appendChild(elemento);

    });

}


/* ==================================================
   POSICIÓN DE CADA PORTADA
================================================== */

function actualizarPosiciones() {

    const elementos =
        portadas.querySelectorAll(
            ".disco-portada"
        );


    const total =
        discografia.length;


    elementos.forEach(elemento => {

        const indice =
            Number(elemento.dataset.indice);


        const diferencia =
            obtenerDiferenciaCircular(
                indice,
                discoActual,
                total
            );


        elemento.classList.remove(

            "posicion-central",

            "posicion-izquierda",

            "posicion-derecha",

            "posicion-oculta-izquierda",

            "posicion-oculta-derecha"

        );


        if (diferencia === 0) {

            elemento.classList.add(
                "posicion-central"
            );

            return;

        }


        if (diferencia === -1) {

            elemento.classList.add(
                "posicion-izquierda"
            );

            return;

        }


        if (diferencia === 1) {

            elemento.classList.add(
                "posicion-derecha"
            );

            return;

        }


        if (diferencia < 0) {

            elemento.classList.add(
                "posicion-oculta-izquierda"
            );

            return;

        }


        elemento.classList.add(
            "posicion-oculta-derecha"
        );

    });

}


/* ==================================================
   DIFERENCIA CIRCULAR
================================================== */

function obtenerDiferenciaCircular(
    indice,
    centro,
    total
) {

    let diferencia =
        indice - centro;


    if (
        diferencia >
        total / 2
    ) {

        diferencia -= total;

    }


    if (
        diferencia <
        -total / 2
    ) {

        diferencia += total;

    }


    return diferencia;

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
                        `<p>${escapeHtml(credito)}</p>`
                )
                .join("")

            : "";


    informacion.innerHTML = `

        <h2>
            ${escapeHtml(disco.titulo)}
        </h2>

        <div class="disco-informacion-meta">
            ${escapeHtml(disco.formato)}
        </div>

        <div class="disco-informacion-descripcion">
            ${escapeHtml(disco.descripcion)}
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
            href="${escapeHtml(disco.tienda)}"
        >
            VER EN TIENDA
        </a>

    `;

}


/* ==================================================
   ANIMACIÓN DE INFORMACIÓN
================================================== */

function actualizarInformacionConAnimacion() {

    informacion.classList.add(
        "cambiando"
    );


    setTimeout(
        () => {

            renderInformacion();


            requestAnimationFrame(
                () => {

                    informacion.classList.remove(
                        "cambiando"
                    );

                }
            );

        },
        220
    );

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

            .map(
                cancion => `

                    <article class="track">

                        <span class="track-numero">
                            ${String(
                                cancion.numero
                            ).padStart(2, "0")}
                        </span>

                        <span class="track-titulo">
                            ${escapeHtml(
                                cancion.titulo
                            )}
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

                `
            )
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


    mostrarVistaCancion(
        vista
    );


    panelCancion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==================================================
   VISTA DE CANCIÓN
================================================== */

function mostrarVistaCancion(
    vista
) {

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


    if (!cancionActual) {
        return;
    }


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

                ${formatearAcordes(
                    acordes
                )}

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

function formatearAcordes(
    texto
) {

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

function escapeHtml(
    texto
) {

    return String(texto)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* ==================================================
   CAMBIAR DISCO
================================================== */

function cambiarDisco(
    direccion
) {

    if (animacionEnCurso) {
        return;
    }


    animacionEnCurso = true;


    discoActual += direccion;


    if (
        discoActual < 0
    ) {

        discoActual =
            discografia.length - 1;

    }


    if (
        discoActual >=
        discografia.length
    ) {

        discoActual = 0;

    }


    actualizarPosiciones();


    actualizarInformacionConAnimacion();


    renderTracklist();


    panelCancion.hidden = true;


    cancionActual = null;


    setTimeout(
        () => {

            animacionEnCurso = false;

        },
        720
    );

}


/* ==================================================
   NAVEGACIÓN
================================================== */

botonAnterior.addEventListener(
    "click",
    () => {

        cambiarDisco(-1);

    }
);


botonSiguiente.addEventListener(
    "click",
    () => {

        cambiarDisco(1);

    }
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

crearPortadas();

actualizarPosiciones();

renderInformacion();

renderTracklist();
