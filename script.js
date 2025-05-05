// Validación de formulario //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const email = form.email.value.trim();
    const telefono = form.telefono.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !apellido || !email || !telefono || !mensaje) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresá un email válido.");
      return;
    }
    alert("¡Formulario enviado!");
    form.reset();
  });
});

//modo oscuro//

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("cambiar-modo");

  if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("modo", "oscuro");
    } else {
      localStorage.setItem("modo", "claro");
    }
  });
});

// Ocultar seccion peliculas //

const btnPeliculas = document.getElementById("ocultar-peliculas");
const seccionPeliculas = document.getElementById("peliculas");

btnPeliculas.addEventListener("click", () => {
  if (seccionPeliculas.style.display === "none") {
    seccionPeliculas.style.display = "block";
  } else {
    seccionPeliculas.style.display = "none";
  }
});

// Contador de visitas //

const contadorElemento = document.getElementById("contador-visitas");
let visitas = localStorage.getItem("contadorVisitas");

if (!visitas) {
  visitas = 1;
} else {
  visitas = parseInt(visitas) + 1;
}

localStorage.setItem("contadorVisitas", visitas);
contadorElemento.textContent = `Visitas a esta página: ${visitas}`;
