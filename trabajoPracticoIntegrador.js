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
