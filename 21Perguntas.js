var beee = new Audio('./beee.mp3');
var errou = new Audio('./errou.mp3');
var fuefuefue = new Audio('./fuefuefue.mp3');

document.addEventListener('keydown', function(event){
    switch(event.keyCode){
    	case 38:
    		if(listaDePerguntas[perguntaAtual].errado == $("#opcao1").text()){
    			perguntaAtual++;
    			mostraPergunta();
    		} else {
    			errou.play();
    			voltaPergunta = perguntaAtual;
    			perguntaAtual = 0;
    			mostraPergunta();
    		}
    		break;
    	case 40:
    		if(listaDePerguntas[perguntaAtual].errado == $("#opcao2").text()){
    			perguntaAtual++;
    			mostraPergunta();
    		} else {
    			errou.play();
    			voltaPergunta = perguntaAtual;
    			perguntaAtual = 0;
    			mostraPergunta();
    		}
    		break;
    	case 8:
    		voltaPergunta = perguntaAtual;
    		perguntaAtual = 0;
    		mostraPergunta();
    		break;
    }
} );

document.addEventListener('mousedown', function(event){
    if (event.button == 2 && fase == "normal"){
		beee.play();
		voltaPergunta = perguntaAtual;
    	perguntaAtual = 0;
    	mostraPergunta();
    }
} );



function Pergunta(certo, errado, pergunta) {
  this.certo = certo;
  this.errado = errado;
  this.pergunta = pergunta;
  this.ordem = ordem = Math.floor(Math.random() * 2) +1;
}

var perguntasDemo = [
	new Pergunta("4", "2", "Quanto é 2 + 2?"),
	new Pergunta("Cabral", "Vespúcio", "A quem é atribuído o descobrimento do brasil?"),
	new Pergunta("1", "2", "1"),
	new Pergunta("2", "3", "2"),
	new Pergunta("3", "2", "3"),
	new Pergunta("4", "2", "4"),
	new Pergunta("5", "2", "5"),
	new Pergunta("6", "2", "6"),
	new Pergunta("7", "2", "7"),
	new Pergunta("8", "2", "8"),
	new Pergunta("9", "2", "9"),
	new Pergunta("10", "2", "10"),
	new Pergunta("11", "2", "11"),
	new Pergunta("12", "2", "12"),
	new Pergunta("13", "2", "13"),
	new Pergunta("14", "2", "14"),
	new Pergunta("15", "2", "15"),
	new Pergunta("16", "2", "16"),
	new Pergunta("17", "2", "17"),
	new Pergunta("18", "2", "18"),
	new Pergunta("19", "2", "19"),
];


var tempo = 210;
var perguntaAtual = 0;
var listaDePerguntas = [];
var timerID = 0;
var voltaPergunta = 0;
var fase = "parado"


function mostraPergunta() {
	$("#textoPergunta").html(listaDePerguntas[perguntaAtual].pergunta);
	if(listaDePerguntas[perguntaAtual].ordem == 1){
		$("#opcao2").html(listaDePerguntas[perguntaAtual].certo);
		$("#opcao1").html(listaDePerguntas[perguntaAtual].errado);
	} else {
		$("#opcao1").html(listaDePerguntas[perguntaAtual].certo);
		$("#opcao2").html(listaDePerguntas[perguntaAtual].errado);
	}
}

function mostraTempo(){
	$("#minutos").html(""+Math.floor(tempo/60));
	seg = tempo%60;
	$("#segundos").html(""+(seg<10?"0":"")+tempo%60);
}

function timer() {
	//alert("tempo: "+tempo);
	//alert("t: "+t);
	tempo--;
	mostraTempo();
	if (tempo == 0){
		clearInterval(timerID);
		fuefuefue.play();
	} 
}

var jogo = null;
function iniciar(){
	clearInterval(timerID);
	fase = "normal";
	tempo = 210
	listaDePerguntas = perguntasDemo
	mostraPergunta();
	mostraTempo();
	timerID = setInterval(timer,1000);
	$("#message").html("timer ID:" + timerID);
}

