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
	"ver1": [
		new Pergunta("C", "A", "Qual tipo de incêndio é caracterizado pela presença de energia elétrica?"),
		new Pergunta("Plástico", "Metal", "Qual tipo de resíduo deve ser descartado no contentor vermelho?"),
		new Pergunta("Acidentes", "Anomalias", "O que significa a letra A na sigla CIPA?"),
		new Pergunta("Na área", "Na meia-lua", "Onde deve ser feita a baixa da PT?"),
		new Pergunta("Você mesmo", "Jair Messias Bolsonaro", "Quem é o maior responsável pela sua segurança?"),
		new Pergunta("Álcool e drogas", "Sexo, drogas e Rock&Roll", "Qua é o nome de uma das regras de ouro?"),
		new Pergunta("Luva Nitrílica", "Luva de Raspas", "Qual é o EPI indicado para atividades de pintura?"),
		new Pergunta("Nunca", "Só com camisinha", "Em que condição se pode entrar em atmosfera explosiva?"),
		new Pergunta("TOR", "Capitão América", "Qual mede a Taxa de Ocorrências Registráveis?"),
		new Pergunta("Pontoons", "Pantoons", "Como são chamados os flutuadores da plataforma?"),
		new Pergunta("Água", "PQS", "Qual o tipo de extintor é o mais indicado para princípios de incêndio classe A?"),
		new Pergunta("Atmosfera Explosiva", "Na dúvida Pare", "Qual é uma das regras de ouro?"),
		new Pergunta("Na Entrada", "No Fumódromo", "Onde deve ficar o vigia do espaço confinado?"),
		new	Pergunta("CESS", "CETB", "Qual curso credencia a pessoa a tripular uma baleeira?"),
		new Pergunta("Técnico de Segurança", "RPM", "Qual deles NÃO faz parte do cartão de tripulação de segurança de P-07?"),
		new Pergunta("Cipista eleito há mais dias a bordo", "GEPLAT", "Quem é o vice-presidente da CIPA?"),
		new Pergunta("Diego Trezza", "NR-33", "Quem determina o que é e o que não é espaço confinado na UO-BC?"),
		new Pergunta("Mestre de Cabotagem", "COEMB", "De acordo com o PRE das plataformas, quem é o líder do Grupo de Controle de Salvatagem?"),
		new Pergunta("'Não sejes burro!'", "'Na dúvida pare!", "Qual frase esteve presente em quase todos DDSs do GEPLAT Daniel em 2018?"),
		new Pergunta("Panama", "Ilhas Marshall", "Qual a bandeira de conveniência arvorada em P-07?"),
		new Pergunta("P-7", "P-15", "Qual plataforma tem a melhor SIPAT da bacia?"),
	] ,
	"ver2": [
		new Pergunta("SIPAT", "SISPAT", "Qual o nome do evento que você está participando?"),
		new Pergunta("Guindaste", "Dessalinizadora", "Qual o equipamento utilizado para movimentar cargas?"),
		new Pergunta("Dessalinizadora", "Guindaste", "Qual o equipamento produz água potável?"),
		new Pergunta("Popa", "Polpa", "Onde ficam as bombas de incêndio diesel da P-07?"),
		new Pergunta("Heliponto", "Aeroporto", "Onde o helicóptero pousa na plataforma?"),
		new Pergunta("NR-10", "NR-33", "Qual norma regulamenta trabalhos elétricos?"),
		new Pergunta("Bóia Circular", "Bóia de Braço", "Qual é jogada para 'homem ao mar'?"),
		new Pergunta("Espaço confinado", "Espaço com falecido", "Como é considerado o interior dos tanques de lastro de P-07?"),
		new Pergunta("Bomba", "Dinamite", "Qual é utilizada para movimentar fluidos?"),
		new Pergunta("Marinha", "Exército", "Qual orgão fiscaliza a plataforma?"),
		new Pergunta("Rádio VHF", "Rádio UHF", "Qual é utilizado para comunicação entre plataformas e embarcações de apoio?"),
		new Pergunta("Semi Submersível", "FDPSO", "A P-07 é uma plataforma de qual tipo?"),
		new Pergunta("Vigia", "Gandula", "Quem monitora a entrada do espaço confinado?"),
		new Pergunta("Luva", "Capacete", "Qual EPI protege mãos e dedos?"),
		new Pergunta("Bote de resgate", "Baleeira", "Qual equipamento é utilizado preferencialmente para resgate de homem ao mar?"),
		new Pergunta("Espaço Confinado", "Camarote", "Qual não foi projetado para a permanência humana?"),
		new Pergunta("PT a Quente", "PT Elétrica", "Qual é utilizada para trabalhos com solda elétrica?"),
		new Pergunta("POB", "BOP", "Qual deles representa o efetivo total da plataforma?"),
		new Pergunta("APLAT", "SAP", "Qual o sistema utilizado para emissão de PT?"),
		new Pergunta("PT Elétrica", "PQ a Quente", "Qual delas é utilizada para serviços elétricos?"),
		new Pergunta("Külkamp", "Ku Klux Klan", "Qual o sobrenome do Presidente da CIPA")
	] ,
	"ver3": [
		new Pergunta("Comece e termine o dia com segurança", "Comece o dia com segurança, mas desista no meio do caminho", "Qual o tema da SIPAT de 2018?"),
		new Pergunta("Com a autorização do responsável", "Se não tiver ninguém vendo", "Em que situação se pode entrar em área isolada?"),
		new Pergunta("Matriz de Trabalho em Equipamento Energizado", "Colhões de Aço", "O que é indispensável para serviços elétricos energizados?"),
		new Pergunta("Remo", "Payssandu", "Qual compõe a palamenta da baleeira do mestre Fiel?"),
		new Pergunta("3FWD3", "9PSL", "Qual o indicativo de chamada da plataforma?"),
		new Pergunta("ALPH", "GEPLAT", "Quem é o lider da EMCIA?"),
		new Pergunta("..-", "...---...", "Qual o códio Morse para a letra U?"),
		new Pergunta("'Estou dando Atrás'", "Chulispa!", "O que significa quando uma embarcação dá 3 apitos curtos?"),
		new Pergunta("PT", "PSL", "Qual documento Libera a execução de um Serviço e é título de uma regra de ouro?"),
		new Pergunta("GM", "SIGM", "Qual sistema é atualmente utilizado para gestão de mudanças?"),
		new Pergunta("TAR < 1", "Redução da alavancagem", "Para qual meta de topo da PETROBRAS a P-7 pode contribuir positivamente?"),
		new Pergunta("Rádio VHF", "Rádio UHF", "Qual é utilizado para comunicação entre plataformas e embarcações de apoio?"),
		new Pergunta("Não", "Sim", "Serviços de instrumentação alimentados em extra-baixa tensão e posteriores a elementos que limitam o nível de curto são considerados 'serviços elétricos'?"),
		new Pergunta("Luva", "Capacete", "Qual EPI protege mãos e dedos?"),
		new Pergunta("Gerente de Instalação Operacional", "GEPLAT", "Quem é responsável pela autirização de um bypasse de longa duração de um elemento iniciador de ESD-3?"),
		new Pergunta("Programa Amigo do Peito", "Programa Amigos amigos, negócios à parte", "Qual programa foi criado como iniciativa de evolução da cultura de segurança e envolve troca de cartões?"),
		new Pergunta("Arco Elétrico", "Arco-íris de energia", "Qual é um perigo associado ao trabalho em salas de painéis elétricos?"),
		new Pergunta("Cachorro", "Gato", "Qual é um componente de segurança do guincho de âncora?"),
		new Pergunta("Gato", "Cachorro", "Qual deles está associado ao sistema de içamento do bote de resgate?"),
		new Pergunta("Isolamento de Energias", "Não sejes porco", "Qual regra de ouro passou por reformulação em 2018?"),
		new Pergunta("Bendoran", "Atlantic III", "Qual já foi um nome da plataforma?")
	],
	"ver4": [
		new Pergunta("Mensalmente, conforme condições de mar", "Só quando o GEPLAT Daniel embarca", "Com que frequência deve ser feito teste de navegabilidade do bote de resgate?"),
		new Pergunta("2", "3", "Em que canal está sintonizado o rádio UHF do Enfermeiro?"),
		new Pergunta("Com dupla proteção auricular", "Completamente nu devido ao forte calor", "Como se deve trabalhar na sala de máquinas?"),
		new Pergunta("Colete Salva Vidas", "Mascara de Fuga", "Qual EPI é indicado para trabalhos sobre o mar?"),
		new Pergunta("9PSL", "3FWD3", "Qual o código de aerodromo privado de P-07?"),
		new Pergunta("Radio-operador de Plataforma Maritma", "Revoluções por Minuto", "Qual RPM deve possuir carteira de registro junto à bandeira panamenha?"),
		new Pergunta("U", "F", "Qual letra é sinalizada em código morse pela buzina de cerração?"),
		new Pergunta("RIPEAM", "RIPANÃOCHORÁ", "Qual o regulamento internacional para evitar abalroamentos no mar?"),
		new Pergunta("Escada Portátil", "Caixote Robusto", "Qual deve ser utilizado para acessar partes altas de um armário?"),
		new Pergunta("11 Atitudes da UO-BC", "Regra inominável de Diamante", "Qual é a iniciativa oficial da UO-BC para melhoria da qualidade dos relacionamentos no ambiente de trabalho?"),
		new Pergunta("Utiliza o trava quedas", "Segura na mão de Deus e vai", "O que se faz para acessar a sala de bombas de P-07?"),
		new Pergunta("Grupo de Controle da Fonte", "Grupo de Controle de Impacto", "Qual grupo é responsável pela segurança da planta de processos durante uma faina de emergências?"),
		new Pergunta("Água salgada", "Pó químico ABC", "Qual NÃO deve ser utilizado como extintor em princípios de incêndio classe C?"),
		new Pergunta("Dois Cipistas eleitos", "Três Cipistas indicados", "A presença de quais membros é um requisito para a realização da reunião da CIPA?"),
		new Pergunta("Quinzenal", "A cada 21 dias", "De acordo com o PP-3UBC-00402, qual a frequência de treinamentos do cenário de incêndio?"),
		new Pergunta("3", "1", "Se a frequência do treinamento de do cenário de desastres naturais é anual, ao todo quantos treinamentos desse cenário devem ter sido realizados em 2018?"),
		new Pergunta("Salto na água", "Abdução por seres do planeta Nibiru", "Qual a última opção para abandono de uma unidade marítma em emergência?"),
		new Pergunta("Fibras", "Cabos coaxiais", "O consumo de qual está associado à sensação de saciedade e à motilidade intestinal?"),
		new Pergunta("Punição", "Reflexão", "Qual não faz parte do programa amigo do peito?"),
		new Pergunta("Frustração", "Santa Catarina", "Qual é um estado crítico?"),
		new Pergunta("Safe Start", "Manual de Segurança do E&P", "A qual deles são associados os conceitos de Estados críticos e erros críticos?")
	]};

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
	listaDePerguntas = catalogo[$("#selVers").val()];
	mostraPergunta();
	mostraTempo();
	timerID = setInterval(timer,1000);
	$("#message").html("timer ID:" + timerID);
}

