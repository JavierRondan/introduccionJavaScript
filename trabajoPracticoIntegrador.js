const prompt = require("prompt-sync")({ sigint: true });

// Punto 1: Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:

// id (número)
// título (string),
// autor (string),
// año (número),
// género (string),
// disponible (booleano).



let libros = [ 
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, género: "Realismo mágico", disponible: true },    
    { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949, género: "Distopía", disponible: false },
    { id: 3, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", anio: 1954, género: "Fantasía", disponible: true },
    { id: 4, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, género: "Aventura", disponible: true },
    { id: 5, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", anio: 1866, género: "Drama", disponible: false },
    { id: 6, titulo: "La odisea", autor: "Homero", anio: -800, género: "Epica", disponible: true },
    { id: 7, titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813, género: "Romance", disponible: true },
    { id: 8, titulo: "El principito", autor: "Antoine de Saint-Exupéry", anio: 1943, género: "Ficción", disponible: false },
    { id: 9, titulo: "Matar a un ruiseñor", autor: "Harper Lee", anio: 1960, género: "Drama", disponible: true },
    { id: 10, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, género: "Ciencia ficción", disponible: true },
];
//console.log(libros); 

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:

// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).


let usuarios = [
    { id: 1, nombre: "Javier Rondan", email: "carlosjavier.rondan@gmail.com", librosPrestados: [1, 3] },
    { id: 2, nombre: "Maria Lopez", email: "mariaj.lopez98@gmail.com", librosPrestados: [2] },
    { id: 3, nombre: "Analia Garcia", email: "analia_garcia@hotmail.com", librosPrestados: [4, 5, 6] },
    { id: 4, nombre: "Luis Fernandez", email: "luis.fernandez61@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Sofia Martinez", email: "sofia_martinez2@hotmail.com", librosPrestados: [7, 8] }
];

//console.log(usuarios);

// Punto 2: Funciones de Gestion de Libro
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

// Funcion que pushea un libro al array libros.
// Llamo a un objeto nuevoLibro como parametro
function agregarLibro(nuevoLibro) {
    libros.push({
        id: nuevoLibro.id,
        titulo: nuevoLibro.titulo,
        autor: nuevoLibro.autor,
        anio: nuevoLibro.anio,
        género: nuevoLibro.genero,
        disponible: nuevoLibro.disponible = true // Al ser un nuevo libro agregado por defecto aparece como disponible
    });
}
//agregarLibro()

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal

// Función que busca un libro por título, autor o género
function buscarLibro(criterio, valor) {
     // Convertir los valores de la busqueda a minuscula, para que no haya un error al usar mayusculas
    let resultado = libros.filter(libro => {
        if (libro[criterio]) {
            return libro[criterio].toString().toLowerCase().includes(valor.toString().toLowerCase());
        }
        return false;
    });
    return resultado.length > 0 ? resultado : "No se encontraron libros que coincidan con los datos proporcionados.";
}
// Función que busca un libro por título, autor o género
function buscarLibro(criterio, valor) {
    let resultado = libros.filter(libro => {
        if (libro[criterio]) {
            return libro[criterio].includes(valor); //Si encuentra coincidencias, devuelve un array con los libros elegidos
        }
        return false;
    });
    //Si NO encuentra coincidencias, devuelve un mensaje indicando que no se encontraron resultados
    return resultado.length > 0 ? resultado : "No se encontraron libros que coincidan con los datos proporcionados.";
}

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.


// Función para ordenar libros por título o año usando el bubble sort. Si los criterios no son validos, muestra un mensaje de error y termina
function ordenarLibros(criterio) {
    if (criterio !== "titulo" && criterio !== "anio") {
        console.log("Criterio inválido. Usa 'titulo' o 'anio'.");
        return;
    }
// Primer ciclo for repite los elementos del principio hasta el final, el segundo ciclo repite hasta el final del arreglo -1
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                //Aca compara y hace los cambios correspondientes de los elementos
                let temp = libros[j];
            libros[j] = libros[j + 1];             
            libros[j + 1] = temp;
        }
    }
}

// Muestra los libros ordenados en la consola
console.log(`Libros ordenados por ${criterio}:`);
console.log(libros);
}
/*
//  Tres ejemplos de uso:
ordenarLibros("titulo"); // Se ordena por título
ordenarLibros("año");    // Se ordena por año
ordenarLibros("genero"); // Ejemplo invalido */

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

// Función que borra un libro por su ID
function borrarLibro(id) {
    // Busca el libro con el ID proporcionado
    const i = libros.findIndex(libro => libro.id === id);

    if (i !== -1) {
        // Eliminar el libro del array por su indice
        const libroEliminado = libros.shift(i, 1)[0];
        console.log(`Libro eliminado:, libroEliminado`);
    } else {
        console.log(`No se encontró un libro con el ID: ${id}`);
    }
}

/*
// Dos ejemplos de uso:
console.log("Libros antes de borrar:");
console.log(libros);
/*
borrarLibro(2); // Eliminar libro con el ID 2
borrarLibro(15); // Ejemplo de ID invalido*/

//console.log("Libros después de borrar:");
//console.log(libros);*/

