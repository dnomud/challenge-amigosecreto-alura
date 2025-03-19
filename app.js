let listaAmigos= [];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo')
    
    if(amigo.value != ''){
        listaAmigos.push(amigo.value)   
        amigo.value = ''
    } else {
        alert('Por favor, inserte un nombre.')
    }
    let listado = document.getElementById('listaAmigos')
    let participante = ''
    for(let i=0; i<listaAmigos.length; i++){
        participante = `<li>${listaAmigos[i]}</li>` + participante
    }
    listado.innerHTML = `<li>Participantes:</li><li>${participante}</li>`
};

function sortearAmigos (){
    if(listaAmigos.length!=0){
        let nombreSorteado = Math.floor(Math.random()*listaAmigos.length);
        let personaSorteada = document.getElementById('resultado')
        personaSorteada.innerHTML = `<li>Amigo secreto:</li><li>${listaAmigos[nombreSorteado]}</li>`
    }
};

