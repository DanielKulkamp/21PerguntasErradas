document.addEventListener('keydown', function(event){
    switch(event.keyCode){
    	case 38:
    		alert("Up")
    		break;
    	case 40:
    		alert("Down!")
    		break;
    	case 8:
    		alert("Backspace!")
    		break;
    }
} );

function Pergunta(certo, errado, pergunta) {
  this.certo = certo;
  this.errado = errado;
  this.pergunta = pergunta;
  this.orde = ordem = Math.floor(Math.random() * 2) +1;
}

var perguntasDemo = [
	new Pergunta("4", "2", "Quanto é 2 + 2?"),
	new Pergunta("Cabral", "Vespúcio", "A quem é atribuído o descobrimento do brasil?"),
	new Pergunta("1", "2", "1"),
	new Pergunta("2", "2", "2"),
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
	$("#segundos").html(""+tempo%60);
}

function timer() {
	tempo--;
	mostraTempo();
	if (tempo == 0){
		alert("Fim do tempo");
	} else {
		setTimeout(timer(), 1000);
	}
}

var jogo = null;
function iniciar(){
	tempo = 210
	listaDePerguntas = perguntasDemo
	mostraPergunta();
	mostraTempo();
	setTimeout(timer(),1000);
}

