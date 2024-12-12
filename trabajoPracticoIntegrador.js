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

// Punto 6: Identificacion Avanzada de libros
// a) Implementar una funcion librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo titulo contiene mas de una palabra
// (no titulos que contengan numeros ni otros caracteres). La funcion debe devolver un array con los titulos de esos libros y monstrarlo en la consola

function librosConPalabrasEnTitulo() {
    // Uso filter para buscar en todos los libros y verificr de que el titulo contiene solo palabras alfabeticas(sin numeros ni caracteres especiales)
    let librosFiltrados = libros.filter(libro => {
        // Dividir el título en palabras y comprobar si tiene más de una palabra
        let palabras = libro.titulo.split(' ').filter(palabra => /^[a-zA-ZáéíóúÁÉÍÓÚÑñ]+$/.test(palabra));
        // Si el titulo tiene mas de una palabra valida y es igual al titulo original, entonces lo retornamos
        return palabras.length > 1&& libro.titulo === palabras.join(' ');
    });
    // Usamos map para extraer solo los títulos de los libros que cumplen con la condicin de tenes mas de una palabra valida
    let titulos = librosFiltrados.map(libro => libro.titulo);

    // Devuelve en consola los resultados. Muestra la lista final de libros que contiene mas de una palabra en su titulo y sin caracteres especiales
    console.log("Libros con más de una palabra en el título:");
    console.log(titulos);
    
    return titulos;
}
librosConPalabrasEnTitulo()

// Punto 7: Calculos Estadisticos
// a) Desarrollar una funcion calcularEstadisticas() que utilice el objeto Math para caucular y motrar:
// Promedio de años de publicacion de los libros.
// Año de publicacion mas frecuente.
// Diferencia en años entre el libro mas antiguo y el mas nuevo.

function calcularEstadisticas() {
    // Promedio de años de publicación. Usamos reduce para sumar todos los años de publicacion de los libros
    // luego dividimos entre la cantidad total de libros y asi obtenemos el promedio
    let totalAnios = libros.reduce((suma, libro) => suma + libro.año, 0);
    let promedioAnios = totalAnios / libros.length;

    // Año de publicación más frecuente. Usamos un objeto para contar las veces que aparece cada año.
    let aniosFrequentes = libros.reduce((acumulador, libro) => {
        acumulador[libro.año] = (acumulador[libro.año] || 0) + 1;
        return acumulador;
    }, {});

    // Encontrar el año más frecuente
    // Despues encontramos el año con mayor frecuencia de publicaciones
    let anioMasFrecuente = Object.keys(aniosFrequentes).reduce((anioMax, anio) => {
        return aniosFrequentes[anio] > aniosFrequentes[anioMax] ? anio : anioMax;
    });

    // Diferencia en años entre el libro más antiguo y el más nuevo.
    // usamos Math.min y Match.Max para encontrar los años de publicacion mas antiguo y mas reciente
    // y por ultimo los restamos
    // En este caso uso spread operator para poder transformar el array libros.map en algo que Math.min y Math.max puedan leer.
    // en caso de no usarlo de esta manera estallaria el proceso. El spread operator se usa para poder llamar a un array en otro lugar donde se espara un valor individual
    let anioMasAntiguo = Math.min(...libros.map(libro => libro.año)); //Año mas antiguo
    let anioMasNuevo = Math.max(...libros.map(libro => libro.año)); //Año mas reciente
    let diferenciaAnios = anioMasNuevo - anioMasAntiguo; //Año mas antiguo - Año mas reciente

 // Mostrar los resultados
console.log(`Estadísticas:`);
console.log(`Promedio de años de publicación: ${promedioAnios.toFixed(2)}`);  // el toFixed(2) lo utilizo para dedondear el promedio en 2 decimales
console.log(`Año de publicación más frecuente: ${anioMasFrecuente}`); //Nos muestra el año que aparece mas veces
console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios} años`); // Calcula la diferencia entre los libros, mas antiguo y el mas reciente del array
}

// Punto 8: Manejode Cadenas
// a) Crear una funcion normalizarDatos() que utilice metodos de strings para:
// Convertir todos los titulos a mayusculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minusculas.

function normalizarDatos() {
    // Convierte todos los títulos de los libros a mayúsculas.
    // Usamos forEach para movernos por el rray libros y aplicar toUpperCase() a cada titulo, esto modifica los titulos de los libros a mayuscula
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
    });

    // Eliminar los espacios en blanco al inicio y final de los nombres de los autores.
    // Usamos forEach para recorrer los libros y aplicar el trim() a cada nombre
    libros.forEach(libro => {
        libro.autor = libro.autor.trim(); // El metodo trim() elimina los espacios al principio y final de la cadena
    });

    // Formatear los emails de los usuarios a minúsculas usando forEach
    // Este recorre el array usuarios y aplica toLoweCase() a cada email
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase(); // Este convierte todos los correos a minusculas
    });

    console.log("Datos normalizados:");
    console.log(libros);
    console.log(usuarios);
}
/*
// Ejemplo de uso
normalizarDatos(); */

function menuPrincipal() {
    let opcion;
    do {
        //Limpiar consola antes de mostrar el menu principal
        console.clear();

        // Mostrar menú de opciones al usuario
        opcion = prompt(`Menú Principal:\n
1. Agregar libro\n2. Buscar libro\n3. Ordenar libros\n4. Borrar libro\n5. Registrar Usuario\n6. Mostrar todos los usuarios\n7. Buscar usuario por mail\n8. Borrar usuario\n9. Prestar libro \n10. Devolver libro\n11. Genera reporte de libro\n12. Calcular estadisticas\n13. Normalizar datos\n14. Salir\nSelecciona una opción:`);

        switch (opcion) {
            case "1":
                // Opción para agregar libro
                let nuevoLibro = {
                    id: parseInt(prompt("Ingrese el ID del libro:")),
                    titulo: prompt("Ingrese el título del libro:"),
                    autor: prompt("Ingrese el autor del libro:"),
                    anio: parseInt(prompt("Ingrese el año del libro:")),
                    genero: prompt("Ingrese el género del libro:")
                };
                agregarLibro(nuevoLibro);
                console.log("Libro agregado correctamente.");
                break;

            case "2":
                // Opción para buscar libro
                let criterio = prompt("Buscar por (titulo, autor, género):");
                let valor = prompt("Ingrese el valor de búsqueda:");
                let resultados = buscarLibro(criterio, valor);
                console.log("Resultados de la búsqueda:", resultados);
                break;

            case "3":
                // Opción para ordenar libros
                let criterioOrden = prompt("Ordenar por (titulo, anio):");
                ordenarLibros(criterioOrden);
                break;

            case "4":
                // Opcion para borrar libro
                let idLibroBorrar = parseInt(prompt("Ingrese el ID del libro a borrar: "));
            borrarLibro(idLibroBorrar);
            break;
            
            case "5":
                // Opcion Registrar usuario
                let nombre = prompt("Ingrese el nombre del usuario:");
                let email = prompt("Ingrese el email del usuario:");
                registrarUsuario(nombre, email);
                break;
            
            case "6":
                // Opcion Mostrar todos los usuarios
                let usuariosList = mostrarTodosLosUsuarios();
                console.log(usuariosList);
                break;
        
            case "7":
                // Buscas usuario por mail
                let emailBusqueda = prompt("Ingrese el email del usuario a buscar:");
                let usuarioEncontrado = buscarUsuario(emailBusqueda);
                console.log(usuarioEncontrado);
                break;
        
            case "8":
                // Borrar Usuario
                let nombreBorrar = prompt("Ingrese el nombre del usuario a borrar:");
                let emailBorrar = prompt("Ingrese el email del usuario a borrar:");
                borrarUsuario(nombreBorrar, emailBorrar);
                break;
            
            case "9":
                // Prestar libro
                let idLibroPrestar = parseInt(prompt("Ingrese el ID del libro a prestar:"));
                let idUsuarioPrestar = parseInt(prompt("Ingrese el ID del usuario que lo solicita:"));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;
    
            case "10":
                // Devolver libro
            let idLibroDevolver = parseInt(prompt("Ingrese el ID del libro a devolver:"));
            let idUsuarioDevolver = parseInt(prompt("Ingrese el ID del usuario que lo devuelve:"));
            devolverLibro(idLibroDevolver, idUsuarioDevolver);
            break;
            
            case "11":
                // Genera un reporte de libro
                generarReporteLibros();
                break;
            
            case "12":
                calcularEstadisticas();
                break;
            
                case "13":
                normalizarDatos();
                console.log("Datos normalizados correctamente.");
                break;
            
            case "14":
                // Opción para salir
                console.log("Saliendo del sistema...");
                break;
            
            default:
                // Nos devuelve un mensaje diciendo que la opcion es invalida
                console.log("Opción inválida. Por favor, selecciona una opción del menú.");
        }
    } 
    while (opcion !== "14");
}
menuPrincipal();
