var altura = 0
var largura = 0
var tempo = 30
var vidas = 3
var nivel = window.location.search
var select = nivel.replace("?",'')

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
}
function mudarCor(){
    const select = document.getElementById("nivel")
    if (select.value==0){
        inicio = document.getElementById("inicio").style.background ="#4e6277"
    } if (select.value==2000){
        inicio = document.getElementById("inicio").style.background ="#067c06"
    } if (select.value==1500){
        inicio = document.getElementById("inicio").style.background ="#797910"
    } if (select.value==1000){
        inicio = document.getElementById("inicio").style.background ="#7c0303"
    } 
}
function redirecionar(){
    var nivel = document.getElementById('nivel').value
    console.log(select.value)
    if (nivel!=0){
        //ao colocar "?" no final do link + um parâmetro, esse parâmetro é salvo 
        window.location.href="file:///C:/Users/Pichau/Documents/Curso-Web/JAVASCRIPT/Mata%20Mosquito/jogo.html?" + nivel
    } else {
        alert("Selecione um nível")
    }
}
function perdeVida(){
    vida1 = document.getElementById("vida1")
    vida2 = document.getElementById("vida2")
    vida3 = document.getElementById("vida3")
    vidas -=1
    console.log(vidas)
    if (vidas == 2){
        vida1.className = "vazio"
    } if (vidas == 1){
        vida2.className = "vazio"
    } if (vidas == 0){
        vida3.className = "vazio"
        setInterval(perdeu,1000)
    }
}
function perdeu(){
    window.location.href="file:///C:/Users/Pichau/Documents/Curso-Web/JAVASCRIPT/Mata%20Mosquito/perdeu.html"
}
function reiniciar(){
    window.location.href="file:///C:/Users/Pichau/Documents/Curso-Web/JAVASCRIPT/Mata%20Mosquito/index.html"
}
function posicaoRandomica(){

//remover o mosquito anterior caso exista
if(document.getElementById("mosquito")){
    perdeVida()
    document.getElementById("mosquito").remove()

}
ajustaTamanho()
var posicaox = Math.floor(Math.random() * largura)
var posicaoy = Math.floor(Math.random() *altura)


//criar elemento(tipo do elemento) 
var mosquito = document.createElement("img")
mosquito.id="mosquito"
mosquito.src="imagens/mosca.png"
if (largura>600){
if (posicaoy>(altura-330)){
    posicaoy-=340
} if (posicaox>(largura-300)){
    posicaox-=360
}
} else {
   if (posicaoy>(altura-160)){
    posicaoy-=160
} if (posicaox>(largura-156)){
    posicaox-=160
} 

}

mosquito.style.left= posicaox + "px"
mosquito.style.top= posicaoy + "px"
//Tamanho da mosca
var tamanhoMosca = Math.ceil(Math.random()*3)
if (tamanhoMosca==1){
    //muda a classe do elemento
    mosquito.className="mosca1"
} if (tamanhoMosca==2){
    mosquito.className="mosca2"
} if (tamanhoMosca==3){
    mosquito.className="mosca3"
}

 
//adiciona um filho (mosquito) para o body
document.body.appendChild(mosquito)
reverso(mosquito)
mosquito.onclick = function (){
    document.getElementById("mosquito").remove()
}
}
function reverso(mosquito){
   var numero = Math.round(Math.random())
   if (numero == 1){
    //adiciona uma nova classe
    mosquito.classList.add("ladob")
   } if (numero==0){
    mosquito.classList.add("ladoa")
   }    
}
function cronometro(){
    tempo-=1
    document.getElementById("cronometro").innerHTML = tempo
    if (tempo==0){
        window.location.href="file:///C:/Users/Pichau/Documents/Curso-Web/JAVASCRIPT/Mata%20Mosquito/venceu.html"
    }
    
        
}
function tocaAudio(){
    const audio = document.getElementById("audio");
    const btn = document.getElementById("btnSom");
    let tocando = false;

    // O botão de play/pause
    btn.addEventListener("click", () => {
        // GARANTE que o som está liberado
        audio.muted = false;

        if (!tocando) {
            audio.play();
            btn.textContent = "🔊";
            tocando = true;

        } else {
            audio.pause();
            btn.textContent = "🔈";
            tocando = false;
        }
    });
}
function tocaAutomatico(){
    const audio = document.getElementById("audio");

    // Toca mutado automaticamente (permitido)
    audio.play().catch(err => console.log(err));

    // Quando o usuário interagir UMA vez, ativa o som
    document.addEventListener("click", function ativarSom() {
        audio.muted = false;   // ativa o som
        audio.play();          // garante que está tocando
        document.removeEventListener("click", ativarSom);
    });


}
function dificuldade(){

    var valor = select
    if (valor==1){
        nivel = 3000
    } if (valor==2){
        nivel = 2000
    } if (valor==1){
        nivel = 1000
    }
    console.log("o nivel é " + nivel)
}

const cursor = document.getElementById("cursor");

// Detectar dispositivo com toque
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouch) {
    // CELULAR → sem cursor customizado
    cursor.style.display = "none";
    document.body.style.cursor = "auto";

} else {
    // PC → cursor customizado
    document.body.style.cursor = "none";

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = (e.clientX - cursor.offsetWidth / 2) + "px";
        cursor.style.top = (e.clientY - cursor.offsetHeight / 2) + "px";
    });

    document.addEventListener("mousedown", () => {
        cursor.style.transform = "rotate(20deg)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "rotate(0deg)";
    });
}




