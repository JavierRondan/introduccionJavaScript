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

// Punto 3: Gestion de Usuarios.
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

// Función para registrar un nuevo usuario
function registrarUsuario(nombre, email) {
    // Generar un nuevo ID basado en el último ID del array
    let nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;

   // Crear el nuevo usuario
    let nuevoUsuario = {
        id: nuevoId,
        nombre: nombre,
        email: email,
        librosPrestados: [] // Inicialmente, no tiene libros prestados
    };

    // Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    console.log("Usuario registrado exitosamente:");
    console.log(nuevoUsuario);
}


// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

// Función para mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
    console.log("Lista completa de usuarios:");
    return usuarios;
}
/*
// Ejemplo de uso:
let todosLosUsuarios = mostrarTodosLosUsuarios();
console.log(todosLosUsuarios);
*/
// c)Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

// Función para buscar un usuario por email
function buscarUsuario(email) {
    let usuario = usuarios.find(u => u.email === email);
    return usuario ? usuario : `No se encontró un usuario con el email: ${email}`;
}
// Función para borrar un usuario por nombre y email
function borrarUsuario(nombre, email) {
   // Encontrar el índice del usuario con el nombre y email proporcionados
    let i = usuarios.findIndex(u => u.nombre === nombre && u.email === email);

    if (i !== -1) {
        // Eliminar el usuario del array
        let usuarioEliminado = usuarios.splice(i, 1)[0];
        console.log("Usuario eliminado exitosamente:", usuarioEliminado);
    } else {
        console.log(`No se encontró un usuario con el nombre: ${nombre} y email: ${email}`);
    }
}
// Punto 4: Sistema de Prestamo
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.

// Función para prestar un libro,
function prestarLibro(idLibro, idUsuario) {
    //Busca el libro y el usuario usando find para encontrarlos en su array
    let usuario = usuarios.find(u => u.id === idUsuario);
    let libroI = libros.find(l => l.id === idLibro);
    // Busca si el libro y el usuario estan en el array
    //En caso que no este muestra un mensaje indicando que no esta disponible
    // Buscamos el libro por ID
    let libro = libros.find(libro => libro.id === idLibro);
    if (!libro) {
        console.log("No se encontro ningun libro con este ID.");
        return;
    }

    // Verificamos si el libro esta disponible en el array
    if (!libro.disponible) {
        console.log("El libro " + libro.titulo + " no esta disponible.");
        return;
    }
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
    console.log("Prestamo realizado con exito. Usuario: " + usuario.nombre + ", Libro: " + libro.titulo);
}

// b)implementar una funcion devolerLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario

// Función para devolver un libro prestado por un usuario
     function devolverLibro(idLibro, idUsuario) { // Buscamos el usuario por ID
        let usuario = usuarios.find(usuario => usuario.id === idUsuario);
        if (!usuario) {
            console.log("No se encontro ningun usuario con el ID proporcionado.");
            return;
        }
    
        let indiceLibroPrestado = usuario.librosPrestados.indexOf(idLibro); // Verificamos si el libro esta en la lista de libros prestados del usuario
        if (indiceLibroPrestado === -1) {
            console.log("El libro con ID " + idLibro + " no fue prestado al usuario.");
            return;
        }
    
        let libro = libros.find(libro => libro.id === idLibro); // Busca el libro por id
        if (!libro) {
            console.log("No se encontro ningun libro con este ID.");
            return;
        }
    
        libro.disponible = true; // Ponemos el libro como disponible y lo eliminamos del array de libros prestados
    
        usuario.librosPrestados.splice(indiceLibroPrestado, 1); // Eliminamos el ID del libro de la lista de libros prestados
        console.log("Devolucion realizada. Usuario: " + usuario.nombre + ", Libro: " + libro.titulo);
    }

// Punto 5:Sistema de Prestamos
// a) Crear una funcion generarReporteLibros() que utilice metodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con
// la siguiente informacion
// Canitdad total de libros
// Cantidad de libros prestados
// Cantidas de libros por genero
// Libro mas antiguo y mas nuevo

function generarReporteLibros() {
    // Cantidad total de libros. Calculamos con libros.length y da la contidad de libros disponibles
    let totalLibros = libros.length;

    // Cantidad de libros prestados. Utilizamos reduce para sumar la longitud de los arrays librosPrestados
    let totalLibrosPrestados = usuarios.reduce((total, usuario) => total + usuario.librosPrestados.length, 0);

    // Cantidad de libros por género. Use reduce para agrupar libros por genero e incrementar el contador correspondiente
    let librosPorGenero = libros.reduce((acumulador, libro) => {
        acumulador[libro.género] = (acumulador[libro.género] || 0) + 1;
        return acumulador;
    }, {});
    // Ordenamos los libros por año de publicacion usando forEach
    let libroMasAntiguo = libros[0]; // libroMasAntiguo
    let libroMasNuevo = libros[0];

    libros.forEach(libro => {
        if (libro.año < libroMasAntiguo.año) {
            libroMasAntiguo = libro;
        }
        if (libro.año > libroMasNuevo.año) {
            libroMasNuevo = libro;
        }
    });

    
    // Mostrar el reporte usando Object.keys y forEach.
    console.log("=== Reporte de Libros ===");
    console.log(`Cantidad total de libros: ${totalLibros}`);
    console.log(`Cantidad de libros prestados: ${totalLibrosPrestados}`);
    console.log("Cantidad de libros por género:");
    Object.keys(librosPorGenero).forEach(genero => {
        console.log(`  ${genero}: ${librosPorGenero[genero]}`);
    });
    console.log(`Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
    console.log(`Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);

}