class Pelicula {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.vista = false;
    }

    descripcion() {
        const estado = this.vista ? "Vista" : "Pendiente";
        return `${this.titulo} (${this.genero}) - [${estado}] `;
    }
}

const form = document.querySelector("#form-pelicula");
const lista = document.querySelector("#lista-peliculas");

function agregarPeliculaEnDOM(pelicula) {
    const li = document.createElement("li");
    const texto = document.createElement("span");
    texto.textContent = pelicula.descripcion();

    const btnEstado = document.createElement("button");
    btnEstado.textContent = "Marcar vista";
    btnEstado.addEventListener("click", () => {
        pelicula.vista = !pelicula.vista;
        texto.textContent = pelicula.descripcion();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(texto);
    li.appendChild(btnEstado);
    li.appendChild(btnBorrar);
    lista.appendChild(li);
}

agregarPeliculaEnDOM(new Pelicula("Inception", "Ciencia Ficción"));
agregarPeliculaEnDOM(new Pelicula("Toy Story", "Animación"));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.querySelector("#titulo").value.trim();
    const genero = document.querySelector("#genero").value.trim();

    if (titulo && genero) {
        const nueva = new Pelicula(titulo, genero);
        agregarPeliculaEnDOM(nueva);
        form.reset();
    }
});
