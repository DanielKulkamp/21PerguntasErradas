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

var catalogo = {
	"epi1": [
		new Pergunta("Equipamento de Proteção Individual", "Equipamento Para Ignorar", "O que Significa EPI?"),
		new Pergunta("Assinar a ficha de registro de entrega", "Dizer 'brigado mas eu nem queria mesmo'", "O que o empregado deve fazer ao receber o EPI?"),
		new Pergunta("NR-6", "NR24", "Qual norma regulamentadora se trata de EPIs?"),
		new Pergunta("Tem que ter CA emitido pelo MTE", "Tem que ter disposição, tem que ter habilidade", "O que um EPI deve possuir para ter validade no Brasil?"),
		new Pergunta("Do Empregador", "Do Empregado", "De quem é a obrigação de registrar o fornecimento do EPI?"),
		new Pergunta("Do Empregado", "Do Empregador", "De quem é a obrigação de assinar a ficha de controle individual?"),
		new Pergunta("Sim", "Não", "É obrigatório apresentar justificativa para fornecimento de EPI não relacionado às atividades do Grupo de Exposição Ocupacional do empregado?"),
		new Pergunta("Resíduo Comum", "Resíduo Químico Biológico Radioativo", "EPI não contaminado e não reciclável (macacão, protetor auricular, luva e bota), deve ser descardo como que tipo de resíduo?"),
		new Pergunta("No almoxarifado da U.M.", "Na sala do GEPLAT", "Onde deve ser solicitado o EPI na unidade marítima?"),
		new Pergunta("O almoxarife entrega, registra e o empregado assina", "O almoxarife diz 'tá naquela prateleira ali, ó só pegar!', o empregado retira o EPI e diz 'show de bola, meu consagrado!'", "Como é o procedimento de entrega de EPI na unidade marítima?"),
		new Pergunta("Ato faltoso", "Sinal de masculidade", "O que constitui a recusa injustificada do uso do EPI?"),
		new Pergunta("NR-1", "NR-6", "Qual norma regulamentadora diz que a recusa injustificada de uso do EPI constitui ato faltoso?"),
		new Pergunta("Por Desgaste", "Quando Marte está em Conjunção com Saturno", "Em que situação o empregado deve solicitar a substituição do EPI?"),
		new	Pergunta("Por Extravio", "Por que eu mereço", "Em que situação o empregado deve solicitar a substituição do EPI?"),
		new Pergunta("No Período recomendado de troca", "No período da quaresma", "Em que situação o empregado deve solicitar a substituição do EPI?"),
		new Pergunta("Quando a validade vencer", "Quando o Vasco vencer", "Em que situação o empregado deve solicitar a substituição do EPI?"),
		new Pergunta("Quando danificado durante o uso", "Quando tiver um modelo mais bonito", "Em que situação o empregado deve solicitar a substituição do EPI?"),
		new Pergunta("8364", "Não sei, mas vou anotar e fazer o curso caso já não tenha feito", "Qual o ID do treinamento Básico de EPI – Equipamento de Proteção Individua no SIRH?"),
		new Pergunta("Alterar as características originais do EPI", "Responsabilizar-se pela guarda e conservação do EPI", "Qual delas não cabe ao empergado?"),
		new Pergunta("Os EPIs podem ser compartilhados sem passar por processo de higienização", "Os EPIs previnem ou minimizam as lesões e ou exposição a agente nocivo", "Qual das duas não é verdade?"),
		new Pergunta("Ao empregador", "Ao empregado", "A quem compete notificar o MTE qualquer irregularidade observada?"),
	] ,
	"AIDS": [
		new Pergunta("HIV", "Coronga", "Qual o nome do vírus causador da AIDS?"),
		new Pergunta("Sindrome da Imunodeficiência Adquirida", "Anemia Induzida Devido a Sexo", "O que significa a sigla AIDS?"),
		new Pergunta("Relação sexual sem proteção", "Sentar na mesma mesa no refeitório", "Qual delas é uma forma de contágio do HIV?"),
		new Pergunta("Sexo Oral", "Sexo Verbal", "Qual delas, quando sem proteção, é uma forma de contágio do HIV?"),
		new Pergunta("Sistema Imunológico", "Sistema Digestório", "Qual sistema do organismo é afetado pelo HIV?"),
		new Pergunta("Doenças Oportunistas", "Doenças Egoístas", "Como são chamadas as doenças potencializadas pela ação do HIV no organismo?"),
		new Pergunta("Camisinha", "Oração", "Qual delas é uma forma efetiva de proteção ao contágio do HIV?"),
		new Pergunta("Transfusão de sangue contaminado", "Abraço", "Qual delas é uma forma de contágio do HIV?"),
		new Pergunta("SARS-nCoV-2", "HIV", "O aperto de mãos não é recomendado devido a ser uma forma de transmissão de qual virus?"),
		new Pergunta("Bioproteção", "Será que vai dar tempo", "Qual deve ser a preocupação do socorrista ao atender uma vitima para se proteger do HIV?"),
		new Pergunta("Falso", "Verdadeiro", "A camisinha protege contra todos os tipos de IST?"),
		new Pergunta("Cancro mole", "Guacamole", "Qual desses é uma IST?"),
		new Pergunta("Infecção Sexualmente Transmissivel", "Ih, Sujou Tôf***", "O que significa a sigla IST?"),
		new Pergunta("Possível mas não muito provável", "Certeza, moleque!", "A tranmissão do HIV da mãe para o filho durante a gravidez é?"),
		new Pergunta("Herpes", "AIDS", "Dor, coceira e pequenas feridas com crostas são características de qual IST?"),
		new Pergunta("Diarréia", "Gonorreia", "Qual delas não é caracterizada por dor ao urinar e secreção anormal no pênis ou vagina?"),
		new Pergunta("Condiloma Acuminado", "Gonorreia", "Qual dessas IST é causada por vírus (HPV)?"),
		new Pergunta("HPV", "O virus da corrupção", "Qual agente causador de IST mais comum na população?"),
		new Pergunta("Câncer de colo de útero", "Clamídia", "Qual dessas doenças pode ser causada pelo HPV?"),
		new Pergunta("Candidíase", "HPV", "Contra qual desses não existe vacina?"),
		new Pergunta("www.aids.gov.br", "www.xvideos.com", "Em qual site posso obter informações sobre AIDs e outras ISTs?")
	]};

var tempo = 300;
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
		//fase = "timeAttack";
		clearInterval(timerID);
		//timerID = setInterval(timeAttack, 6000);
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
		//lose.play();
	}
}

var jogo = null;
function iniciar(){
	clearInterval(timerID);
	fase = "normal";
	tempo = 300;
	bis = 20;
	perguntaAtual = 0;
	listaDePerguntas = catalogo[$("#selVers").val()];
	mostraPergunta();
	mostraTempo();
	timerID = setInterval(timer,1000);
	$("#message").html("timer ID:" + timerID);
}

