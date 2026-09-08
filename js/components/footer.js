/* ==========================================================================
   BILLY PAGÁN · SITIO OFICIAL
   footer.js
   COMPONENTE · FOOTER GLOBAL (ANIMACIONES DE NAVEGACIÓN)
   ========================================================================== */

class FooterNavigation {
    constructor() {
        // Selectores de los elementos a animar
        this.selectors = '.footer-artista, .footer-terminos';
        this.animationClass = 'barrido';
        this.animationName = 'footerSweep';
        
        this.init();
    }

    /**
     * Inicializa el componente de forma segura
     */
    init() {
        // Usamos delegación de eventos en el documento para optimizar rendimiento
        document.addEventListener('click', (event) => this.handleNavigation(event));
    }

    /**
     * Gestiona la lógica de interacción y redirección diferida
     * @param {MouseEvent} event 
     */
    handleNavigation(event) {
        // Buscamos si el clic ocurrió dentro de uno de nuestros enlaces objetivos
        const targetLink = event.target.closest(this.selectors);
        
        if (!targetLink) return;

        // PERMITIR COMPORTAMIENTO NATIVO
        // Si el usuario presiona Ctrl, Cmd, Shift o Clic Central, dejamos que abra pestaña nueva de fondo
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
            return; 
        }

        // CONTROL DE DOBLE CLIC
        // Si la animación ya está en progreso, cancelamos cualquier acción posterior
        if (targetLink.classList.contains(this.animationClass)) {
            event.preventDefault();
            return;
        }

        // Guardamos las propiedades originales del enlace de forma segura
        const destination = targetLink.href;
        const targetWindow = targetLink.target || '_self';

        // Detenemos la navegación inmediata
        event.preventDefault();

        // REINICIO DE LA ANIMACIÓN
        // Forzamos el reflow del navegador para garantizar que la animación vuelva a empezar desde cero
        targetLink.classList.remove(this.animationClass);
        void targetLink.offsetWidth; 
        targetLink.classList.add(this.animationClass);

        // CONTROL DEL FINAL DE LA ANIMACIÓN
        // Escuchamos el fin de la animación. Con { once: true }, el propio navegador borra el listener al ejecutarse
        targetLink.addEventListener('animationend', (animEvent) => {
            
            // Nos aseguramos de responder únicamente a nuestra animación específica
            if (animEvent.animationName !== this.animationName) return;

            // Limpiamos la clase visual
            targetLink.classList.remove(this.animationClass);

            // NAVEGACIÓN ATÓMICA Y SEGURA
            // Evaluamos el tipo de redirección configurada nativamente en el HTML
            if (targetWindow === '_blank') {
                window.open(destination, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = destination;
            }
            
        }, { once: true });
    }
}

// Inicializar el controlador del footer en cuanto el DOM esté listo
document.addEventListener('DOMContentLoaded', () => new FooterNavigation());


