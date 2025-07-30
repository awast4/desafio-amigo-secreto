let listaAmigos = [];



function adicionarAmigo() {

    let participante = document.querySelector('input').value;
    if (participante == "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaAmigos.includes(participante)) {
        alert("Esse participante já foi adicionado.");
        return;
    }

    listaAmigos.push(participante);
    document.querySelector('input').value = "";
    atualizarLista();

}

function resetarAmigos() {
    listaAmigos = [];
    document.querySelector('input').value = "";
    atualizarLista();
}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione amigos para sortear.");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(`O amigo secreto é: ${amigoSorteado}`);
}
