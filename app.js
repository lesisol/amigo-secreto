// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
  - Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
  - Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
  - Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
  - Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
  - Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

let listaDeAmigos = []

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo === "") {
        alert("Por favor, inserte un nombre");
    } else {
        listaDeAmigos.push(amigo);
    }
    document.getElementById("amigo").value = "";
    actualizarLista();
    return;
}


function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {   // Variable contador, condicion, incremento
        let elemento = document.createElement("li");
        elemento.textContent = listaDeAmigos[i];
        lista.appendChild(elemento);
        }
    return;
}


