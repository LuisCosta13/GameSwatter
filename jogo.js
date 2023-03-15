//1- Definir o palco do jogo
//Definiar altura e largura


//Prever a acao de redimensionar a tela
var altura= 0;
var largura = 0;
var vidas = 1;
var time = 20;

var nivel  = window.location.search
alert(nivel);
nivel.replace('?','');
var criarmosquito = 1500;

if(nivel === 'normal'){
    criarmosquito = 1500;
}
if(nivel ==='dificil'){
    criarmosquito = 1000;
}
if(nivel === ' chucknorris'){
    criarmosquito = 750;
}
//Funcao exectuada no body onresize para saber o tamanho da tele dinamicamente sempreque houver um resize
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura,largura);
}

ajustaTamanhoPalcoJogo();


var cronometro = setInterval(function(){
    time -=1;
    if(time < 0){
        clearInterval(cronometro);//Limpamos a memoria do interval e nao executa mais
        clearInterval(criaMosca);
        window.location.href='vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = time;
    }
},1000)


function posicaoRandom(){

//remover o mosquito anterior caso existe
//Para nao haver acumulacao de mosquistos no ecra
//erro porque no inicio do jogo nao ha esse id para ser removido
/* document.getElementById('mosquito').remove(); */

if(document.getElementById('mosquito')){
    //Se for true
    if(vidas >= 3){
        window.location.href = 'fim_de_jogo.html';
    }
    document.getElementById('mosquito').remove();
    document.getElementById('v'+ vidas).src= 'imagens/coracao_vazio.png';
    vidas++;
}


//Criar valores randomicos para posicao do mosquito
//A criacao tem que respeitar a altura e largura do palco de jogo
var posicaoX = Math.floor( Math.random() * largura )-90;
var posicaoY = Math.floor( Math.random() * altura ) -90;

posicaoX = posicaoX<0 ? 0 : posicaoX;
posicaoY = posicaoY<0 ? 0 : posicaoY;

console.log(posicaoX,posicaoY)
//Criar o elemento dinamicamente
var mosquito = document.createElement('img');
mosquito.src = 'imagens/mosca.png';//Settar o valor de src atraves de javascript
mosquito.style.left = posicaoX + 'px'; //As coordenadas sao aplciadas em Pixeis
mosquito.style.top = posicaoY + 'px';
mosquito.style.position = 'absolute';
mosquito.className = tamanhoAleatorio() +' '+ladoAleatorio();//Para definir o tamanho adicionamos a classe ao elemento dinamicamente e obrigator colocar espaçamento entre as calsse paara associar
document.body.appendChild(mosquito);//AppendChild adiciona no fim 
mosquito.id = 'mosquito';
mosquito.onclick = function(){
    this.remove();//This remete para o mosquito ou para o que é clicado, o elemento que executa a função
}
console.log(tamanhoAleatorio());

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3); //Sera algo entre 0 e muito proximo de 3 || Com math.floor fazmos isto e temos valor entre 0,1,2 e esses vao ser adicionados para o tamanho dos mosquitos
    console.log(classe);

    switch(classe){
        case 0:
            return 'mosquito1'; //Nao usamos break porque return ja finaliza a nossa funcao
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2); //Dois lados A e b || 0 e 1
    switch(lado){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}



