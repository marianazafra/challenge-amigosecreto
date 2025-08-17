//Array almacenamiento de nombres de amigos 
let amigos = [];

//Funcion para agregar amigos 
function agregarAmigos() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert ("Por favor, escribe un nombre");
        return; 
    }


    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);
 
    //Limpiar el campo 
    inputAmigo.value = "";
    
    //Actualizar la lista en el Html
    actualizarLista();



}

//Funcion para actualizar la lista de amigos en la interfaz 
function actualizarLista() {
    const listaAmigo = document.getElementById ("listaAmigos");
    listaAmigo.innerHTML = ""; //Borra contenido previo 

    //Recorrer el array con For
    for(let i= 0; i < amigos.length; i++){
        const lista = document.createElement("li");
        lista.textContent = amigos[i];
        listaAmigo.appendChild(lista);
    }
    
}


//Función para seleccionar un amigo aleatorio 
function sortearAmigo(){
    //Validar amigos disponibles
    if(amigos.length === 0){
        alert("Aún no hay amigos disponibles para el sorteo, por favor agrega nombres.");
        return;
    }

    //Indice aleatorio 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    

    //Mostrar el resultado en el Html
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`
}

//Función para inciar nuevo juego 
function nuevoJuego(){
    amigos= [];

    const listaAmigo = document.getElementById("listaAmigos");
    listaAmigo.innerHTML = "";

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const inputAmigo = document.getElementById("amigo");
    inputAmigo.value = "";
}