


ScrollReveal({
    distance: '70px',
    duration: 1200,
    easing: 'ease-out',
    reset: false,
});

ScrollReveal().reveal('.hero h2', { origin: 'bottom' });
ScrollReveal().reveal('.hero p', { origin: 'bottom', delay: 200 });
ScrollReveal().reveal('.hero .button-scroll', { origin: 'top', delay: 800 });
ScrollReveal().reveal('.estadisticas', { origin: 'bottom', delay: 300});

/*Menu Hamburguesa*/

const H = document.querySelector(".menu-hambur");
const menu = document.querySelector(".menu-overlay");
const X = document.querySelector(".menu-overlay .fa-xmark");

H.addEventListener("click", () => {
    menu.classList.toggle("activo");
    document.body.classList.toggle("no-scroll");
});

X.addEventListener("click", () => {
    menu.classList.remove("activo");
    document.body.classList.remove("no-scroll");
});

/*Aparicion del formulario*/

const contacto = document.querySelector(".contacto");
const reserva = document.querySelector(".hero .button-scroll .boton-reserva");

reserva.addEventListener("click", () => 
    {contacto.classList.toggle("active");
        contacto.scrollIntoView({behavior:"smooth"});    
} );

/*Val del formulario*/

const form = document.querySelector(".formulario");

form.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");

if (nombre.value === "" || email.value === "" || telefono.value === "") {

    alert("Rellenar los campos");
}

else {

    alert("Formulario completo!")
};
});

