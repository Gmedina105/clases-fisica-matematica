ScrollReveal({
    distance: '70px',
    duration: 1200,
    easing: 'ease-out',
    reset: false,
});

ScrollReveal().reveal('.hero h2', { origin: 'bottom' });
ScrollReveal().reveal('.hero p', { origin: 'bottom', delay: 200 });
ScrollReveal().reveal('.hero .button-scroll', { origin: 'top', delay: 800 });

ScrollReveal().reveal('.estadisticas', { origin: 'bottom', delay: 300 });

ScrollReveal().reveal('.materias-titulo', { origin: 'bottom', delay: 150 });
ScrollReveal().reveal('.fisica-feature', { origin: 'left', delay: 250 });
ScrollReveal().reveal('.matematica-feature', { origin: 'right', delay: 350 });

ScrollReveal().reveal('.opiniones-titulo', { origin: 'bottom', delay: 150 });
ScrollReveal().reveal('.opinion-card:nth-child(1)', { origin: 'left', delay: 250 });
ScrollReveal().reveal('.opinion-card:nth-child(2)', { origin: 'right', delay: 350 });

const botonHamburguesa = document.querySelector(".menu-hambur");
const menuOverlay = document.querySelector(".menu-overlay");
const botonCerrarMenu = document.querySelector(".menu-overlay .fa-xmark");

const errorModal = document.querySelector(".error-modal");
const botonCerrarError = document.querySelector(".btn-cerrar-error");

const seccionContacto = document.querySelector(".contacto");
const botonReserva = document.querySelector(".boton-reserva");

const linksContacto = document.querySelectorAll(".link-contacto");
const linksEstadisticas = document.querySelectorAll(".link-estadisticas");
const linksMaterias = document.querySelectorAll(".link-materias");
const linksOpiniones = document.querySelectorAll(".link-opiniones");

const seccionEstadisticas = document.querySelector("#estadisticas");
const seccionMaterias = document.querySelector("#materias");
const seccionOpiniones = document.querySelector("#opiniones");

const form = document.querySelector(".formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const materia = document.querySelector("#materia");
const mensaje = document.querySelector("#mensaje");

const TU_NUMERO_WHATSAPP = "59899399754";

function cerrarMenu() {
    menuOverlay.classList.remove("activo");
    document.body.classList.remove("no-scroll");
}

function mostrarErrorFormulario() {
    errorModal.classList.add("activo");
}

function cerrarErrorFormulario() {
    errorModal.classList.remove("activo");
}

function abrirContactoYScroll() {
    seccionContacto.classList.add("active");

    setTimeout(() => {
        const posicion = seccionContacto.offsetTop - 20;

        window.scrollTo({
            top: posicion,
            behavior: "smooth"
        });
    }, 50);
}

function hacerScrollASeccion(seccion) {
    const posicion = seccion.offsetTop - 20;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
}

function limpiarErrores() {
    nombre.classList.remove("error");
    email.classList.remove("error");
    materia.classList.remove("error");
}

function validarFormulario() {
    limpiarErrores();
    let hayError = false;

    if (nombre.value.trim() === "") {
        nombre.classList.add("error");
        hayError = true;
    }

    if (email.value.trim() === "") {
        email.classList.add("error");
        hayError = true;
    }

    if (materia.value.trim() === "") {
        materia.classList.add("error");
        hayError = true;
    }

    return !hayError;
}

botonHamburguesa.addEventListener("click", () => {
    menuOverlay.classList.toggle("activo");
    document.body.classList.toggle("no-scroll");
});

botonCerrarMenu.addEventListener("click", () => {
    cerrarMenu();
});

botonReserva.addEventListener("click", () => {
    abrirContactoYScroll();
});

botonCerrarError.addEventListener("click", () => {
    cerrarErrorFormulario();
});

errorModal.addEventListener("click", (e) => {
    if (e.target === errorModal) {
        cerrarErrorFormulario();
    }
});

linksContacto.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarMenu();
        abrirContactoYScroll();
    });
});

linksEstadisticas.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarMenu();
        hacerScrollASeccion(seccionEstadisticas);
    });
});

linksMaterias.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarMenu();
        hacerScrollASeccion(seccionMaterias);
    });
});

linksOpiniones.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarMenu();
        hacerScrollASeccion(seccionOpiniones);
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formularioValido = validarFormulario();

    if (!formularioValido) {
        mostrarErrorFormulario();
        return;
    }

    const textoMensaje = `
Hola Gabriel, quiero consultar por clases.

Nombre: ${nombre.value.trim()}
Email: ${email.value.trim()}
Teléfono: ${telefono.value.trim() || "No indicó"}
Materia: ${materia.value.trim()}
Mensaje: ${mensaje.value.trim() || "Sin mensaje adicional"}
    `.trim();

    const mensajeCodificado = encodeURIComponent(textoMensaje);
    const urlWhatsApp = `https://wa.me/${TU_NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, "_blank");
});