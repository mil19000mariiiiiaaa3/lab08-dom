# Tarea: Mi componente interactivo

## Componente elegido
Lista de películas por ver que permite agregar películas nuevas, marcarlas como vistas y eliminarlas de la lista.

## Codigo principal
```js
class Pelicula {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.vista = false;
    }

    descripcion() {
        const estado = this.vista ? "Vista" : "Pendiente";
        return `\${this.titulo} (\({this.genero}) - [\){estado}] `;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.querySelector("#titulo").value.trim();
    const genero = document.querySelector("#genero").value.trim();
    if (titulo && genero) {
        agregarPeliculaEnDOM(new Pelicula(titulo, genero));
        form.reset();
    }
});
```

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Escribir título y género y presionar Agregar (`submit`) | Se crea un nuevo `<li>` con la película en estado Pendiente y se limpia el formulario | Si |
| Hacer clic en "Marcar vista" (`click`) | El texto cambia de `[Pendiente]` a `[Vista]` dinámicamente | Si |
| Hacer clic en "Borrar" (`click`) | El elemento `<li>` se elimina de la página con `remove()` | Si |

## Por que disene asi mi clase
Elegí los atributos `titulo`, `genero` y `vista` porque representan los datos esenciales para organizar películas pendientes. El método `descripcion()` formatea el texto junto con su estado actual para actualizar fácilmente el DOM cada vez que el usuario interactúa con ella.
