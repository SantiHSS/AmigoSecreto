// Creacion de un array para almacenar los nombres

let amigos = [];

// Implementacion de una función para agregar amigos

// Desarrollo una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    mostrarAmigos(); 
}

// Implementa una función para actualizar la lista de amigos

function mostrarAmigos() {
    let amigosList = document.getElementById("listaAmigos");
    amigosList.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        amigosList.appendChild(amigoItem);
    }
}

// Implementa una función para sortear los amigos

function sortearAmigo() {
    if (amigos.length > 1) {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.textContent = "El amigo secreto es: " + amigoSecreto;
    } else {
        alert("Agregue al menos dos amigos antes de sortear.");
    }
}


// Boton de eliminar lista de amigos
function limpiarAmigos() {
    amigos = [];
    resultado.textContent = "";
    mostrarAmigos();
}