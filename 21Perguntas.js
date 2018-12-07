var beee = new Audio('./beee.mp3');
var errou = new Audio('./errou.mp3');
var fuefuefue = new Audio('./fuefuefue.mp3');
var miseravi = new Audio('./miseravi.mp3');
var lose = new Audio('./lose.mp3');

function certou(){
	perguntaAtual++;
	if(perguntaAtual >= 21){
		clearInterval(timerID);
		miseravi.play();
		$("#numPerg21").css("color","#FF0");
		alert("Venceu!");		
	} else {
		mostraPergunta();
	}    
}

function erro(){
	errou.play();
    voltaPergunta = perguntaAtual;
    perguntaAtual = 0;
    mostraPergunta();
}



document.addEventListener('keydown', function(event){
    switch(event.keyCode){
    	case 38:
    		if(listaDePerguntas[perguntaAtual].errado == $("#opcao1").text()){
    			certou();
    		} else {
    			erro();
    		}
    		break;
    	case 40:
    		if(listaDePerguntas[perguntaAtual].errado == $("#opcao2").text()){
	 			certou();
    		} else {
    			erro();
    		}
    		break;
    	case 8:
    		perguntaAtual = voltaPergunta;
    		mostraPergunta();
    		break;
    	case 32:
    		if (fase == timeAttack){
    			clearInterval(timerID);
    			alert("timer parou!");
    		}
    	default:
    		//alert(event.keyCode);

    }
} );

document.addEventListener('mousedown', function(event){
    if (event.button == 1 && fase == "normal"){
		beee.play();
		voltaPergunta = perguntaAtual;
    	perguntaAtual = 0;
    	mostraPergunta();
    }
} );

document.addEventListener('contextmenu', function(event){
    return false;
} );

function Pergunta(certo, errado, pergunta) {
  this.certo = certo;
  this.errado = errado;
  this.pergunta = pergunta;
  this.ordem = ordem = Math.floor(Math.random() * 2) +1;
}

var perguntasDemo = [
	new Pergunta("C", "A", "Qual tipo de inc�ndio � caracterizado pela presen�a de energia el�trica?"),
	new Pergunta("Pl�stico", "Metal", "Qual tipo de res�duo deve ser descartado no contentor vermelho?"),
	new Pergunta("Acidentes", "Anomalias", "O que significa a letra A na sigla CIPA?"),
	new Pergunta("Na �rea", "Na meia-lua", "Onde deve ser feita a baixa da PT?"),
	new Pergunta("Voc� mesmo", "Jair Messias Bolsonaro", "Quem � o maior respons�vel pela sua seguran�a?"),
	new Pergunta("�lcool e drogas", "Sexo, drogas e Rock&Roll", "Qua � o nome de uma das regras de ouro?"),
	new Pergunta("Luva Nitr�lica", "Luva de Raspas", "Qual � o EPI indicado para atividades de pintura?"),
	new Pergunta("Nunca", "S� com camisinha", "Em que condi��o se pode entrar em atmosfera explosiva?"),
	new Pergunta("TOR", "Capit�o Am�rica", "Qual mede a Taxa de Ocorr�ncias Registr�veis?"),
	new Pergunta("Pontoons", "Pantoons", "Como s�o chamados os flutuadores da plataforma?"),
	new Pergunta("�gua", "PQS", "Qual o tipo de extintor � o mais indicado para princ�pios de inc�ndio classe A?"),
	new Pergunta("Atmosfera Explosiva", "Na d�vida Pare", "Qual � uma das regras de ouro?"),
	new Pergunta("Na Entrada", "No Fum�dromo", "Onde deve ficar o vigia do espa�o confinado?"),
	new Pergunta("CESS", "CETB", "Qual curso credencia a pessoa a tripular uma baleeira?"),
	new Pergunta("T�cnico de Seguran�a", "RPM", "Qual deles N�O faz parte do cart�o de tripula��o de seguran�a de P-07?"),
	new Pergunta("Cipista eleito h� mais dias a bordo", "GEPLAT", "Quem � o vice-presidente da CIPA?"),
	new Pergunta("Diego Trezza", "NR-33", "Quem determina o que � e o que n�o � espa�o confinado na UO-BC?"),
	new Pergunta("Mestre de Cabotagem", "COEMB", "De acordo com o PRE das plataformas, quem � o l�der do Grupo de Controle de Salvatagem?"),
	new Pergunta("'N�o sejes burro!'", "'Na d�vida pare!", "Qual frase esteve presente em quase todos DDSs do GEPLAT Daniel em 2018?"),
	new Pergunta("Panama", "Ilhas Marshall", "Qual a bandeira de conveni�ncia arvorada em P-07?"),
	new Pergunta("P-7", "P-15", "Qual plataforma tem a melhor SIPAT da bacia?"),
];
var perguntasDois = [
	new Pergunta("SIPAT", "SISPAT", "Qual o nome do evento que voc� est� participando?"),
	new Pergunta("Guindaste", "Dessalinizadora", "Qual o equipamento utilizado para movimentar cargas?"),
	new Pergunta("Dessalinizadora", "Guindaste", "Qual o equipamento produz �gua pot�vel?"),
	new Pergunta("Popa", "Polpa", "Onde ficam as bombas de inc�ndio diesel da P-07?"),
	new Pergunta("Heliponto", "Aeroporto", "Onde o helic�ptero pousa na plataforma?"),
	new Pergunta("NR-10", "NR-33", "Qual norma regulamenta trabalhos el�tricos?"),
	new Pergunta("B�ia Circular", "B�ia de Bra�o", "Qual � jogada para 'homem ao mar'?"),
	new Pergunta("Espa�o confinado", "Espa�o com falecido", "Como � considerado o interior dos tanques de lastro de P-07?"),
	new Pergunta("Bomba", "Dinamite", "Qual � utilizada para movimentar fluidos?"),
	new Pergunta("Marinha", "Ex�rcito", "Qual org�o fiscaliza a plataforma?"),
	new Pergunta("R�dio VHF", "R�dio UHF", "Qual � utilizado para comunica��o entre plataformas e embarca��es de apoio?"),
	new Pergunta("Semi Submers�vel", "FDPSO", "A P-07 � uma plataforma de qual tipo?"),
	new Pergunta("Vigia", "Gandula", "Quem monitora a entrada do espa�o confinado?"),
	new Pergunta("Luva", "Capacete", "Qual EPI protege m�os e dedos?"),
	new Pergunta("Bote de resgate", "Baleeira", "Qual equipamento � utilizado preferencialmente para resgate de homem ao mar?"),
	new Pergunta("Espa�o Confinado", "Camarote", "Qual n�o foi projetado para a perman�ncia humana?"),
	new Pergunta("PT a Quente", "PT El�trica", "Qual � utilizada para trabalhos com solda el�trica?"),
	new Pergunta("POB", "BOP", "Qual deles representa o efetivo total da plataforma?"),
	new Pergunta("APLAT", "SAP", "Qual o sistema utilizado para emiss�o de PT?"),
	new Pergunta("PT El�trica", "PQ a Quente", "Qual delas � utilizada para servi�os el�tricos?"),
	new Pergunta("K�lkamp", "Ku Klux Klan", "Qual o sobrenome do Presidente da CIPA")
];

var tempo = 180;
var perguntaAtual = -1;
var listaDePerguntas = [];
var timerID = 0;
var voltaPergunta = 0;
var fase = "parado"
var bis = 20;


function mostraPergunta() {
	$("#textoPergunta").html(listaDePerguntas[perguntaAtual].pergunta);
	if(listaDePerguntas[perguntaAtual].ordem == 1){
		$("#opcao2").html(listaDePerguntas[perguntaAtual].certo);
		$("#opcao1").html(listaDePerguntas[perguntaAtual].errado);
	} else {
		$("#opcao1").html(listaDePerguntas[perguntaAtual].certo);
		$("#opcao2").html(listaDePerguntas[perguntaAtual].errado);
	}
	for(var i = 0; i<(perguntaAtual);i++){
		//alert();
		$("#numPerg"+(i+1)).css("color","#FF0");
	}
	for (i = perguntaAtual;i<21;i++){
		//alert("#numPerg"+(i+1));
		$("#numPerg"+(i+1)).css("color","#880");
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
		fase = "timeAttack";
		clearInterval(timerID);
		timerID = setInterval(timeAttack, 6000);
		fuefuefue.play();

		//$("#divTimeAttack").css("display","block");

		
		
	} 
}

function mostraBis(){
	var stringbis = "" ;
	if (bis != 14) {
		for (var i = 0; i< bis; i++){
			stringbis = stringbis + "<img src='./bis2.png'></img>";
		}
		$("#divTimeAttack").html(stringbis);
	} else {
		$("#divTimeAttack").html("<img src='./14bis.png'>");
	}

}

function timeAttack(){
	bis--;
	mostraBis();
	if (bis == 0){
		clearInterval(timerID);
		fuefuefue.play();
	}
	else {
		lose.play();
	}
}

var jogo = null;
function iniciar(){
	clearInterval(timerID);
	fase = "normal";
	tempo = 180;
	bis = 20;
	perguntaAtual = 0;
	listaDePerguntas = perguntasDemo;
	mostraPergunta();
	mostraTempo();
	timerID = setInterval(timer,1000);
	$("#message").html("timer ID:" + timerID);
}

