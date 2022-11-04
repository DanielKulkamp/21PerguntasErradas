var beee = new Audio('./beee.mp3');
var errou = new Audio('./errou.mp3');
var fuefuefue = new Audio('./fuefuefue.mp3');
var miseravi = new Audio('./miseravi.mp3');
var lose = new Audio('./lose.mp3');

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
	] ,
	"OUT": [
		new Pergunta("Outubro Rosa", "Quatorzembro Trevoso", "Como é chamado o mês de conscientização sobre Câncer de Mama?"),
		new Pergunta("Laço Cor de Rosa", "Pantera Cor de Rosa", "Qual o símbolo do Outubro Rosa?"),
		new Pergunta("Na década de 90", "Na década de 00", "Quando surgiu a campanha?"),
		new Pergunta("Eu cuido da minha saúde todos os dias. E você?", "Eu cuido da minha vida e você cuida da tua!", "Qual o lema do outrobro rosa 2021 no Brasil?"),
		new Pergunta("divulgar informações sobre o câncer de mama e fortalecer as recomendações do Ministério da Saúde para prevenção, diagnóstico precoce e rastreamento da doença", "Equipes esportivas lucrarem com a venda de uniformes especiais na cor rosa", "Qual o objetivo do outubro rosa?"),
		new Pergunta("24,5%", "10% do garçon", "Qual a taxa de Cancer de Mama entre os novos casos de neoplasia em mulheres?"),
		new Pergunta("Sul e Sudeste", "Norte e Nordeste", "Em quais regiões brasileiras se concentram as maiores taxas de casos de cancer de mama ?"),
		new Pergunta("Primeira", "Terceira", "Qual posição o Cancer de mama ocupa nas taxas de mortalidade por câncer em mulheres no Brasil e no Mundo?"),
		new Pergunta("'Caroço' rígido indolor no seio, ou abaixo das axilas ou no pescoço.", "Vontade de comer rúcula ou chocolate ao leite", "Qual é o primeiro sintoma mais frequente do cancer de mama?"),
		new Pergunta("Libido louca e insaciável", "pele da mama avermelhada ou parecida com casca de laranja, alterações no bico do peito (mamilo)", "Qual não representa sintoma de câncer de mama?"),
		new Pergunta("Sedentarismo", "Vida sexual ativa após os 30 anos", "Qual representa um fator de risco para o câncer de mama?"),
		new Pergunta("Consumo de bebida alcoólica", "Consumo de castanha do pará", "Qual representa um fator de risco para o câncer de mama?"),
		new Pergunta("Primeira menstruação após os 14 anos", "Sobrepeso após a menopausa", "Qual não representa um fator de risco para o câncer de mama?"),
		new Pergunta("Falso", "Verdadeiro", "O uso da pílula anticoncepcional não é fator de risco para o câncer de mama?"),
		new Pergunta("Sim", "Não", "Não ter filhos ou primeira gravidez após os trinta é um fator de risco para câncer de mama?"),
		new Pergunta("Claro que sim!", "Claro que não!", "Homem também pode ter câncer de mama?"),
		new Pergunta("Alcool e outras drogas", "Permissão para trabalho", "Qual regra de ouro ajuda a proteger contra o câncer de mama?"),
		new Pergunta("Auto-exame", "autópsia", "Para ser efetivo é fundamental que pessoa conheça o seu corpo e esteja atenta à mudanças?"),
		new Pergunta("Pelo menos uma vez a cada dois anos", "Uma vez a cada título do Botafogo", "Qual a frequência recomendada de mamografia para mulhers acima de 50 anos independente de apresentar sintomas?"),
		new Pergunta("Verdadeiro", "Falso", "A mamografia de rastreamento pode ajudar a reduzir a mortalidade por câncer de mama, mas também expõe a mulher a alguns riscos.?"),
		new Pergunta("Verdadeiro", "Falso", "Em mulheres fora da faixa entre 50 a 69 anos, as mamografias de rotina provavelmente não trarão benefícios, e os riscos serão ainda maiores.?")
	],
	"ver1": [
		new Pergunta("C", "A", "Qual tipo de incêndio é caracterizado pela presen�a de energia el�trica?"),
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
		new	Pergunta("CESS", "CETB", "Qual curso credencia a pessoa a tripular uma baleeira?"),
		new Pergunta("T�cnico de Seguran�a", "RPM", "Qual deles N�O faz parte do cart�o de tripula��o de seguran�a de P-07?"),
		new Pergunta("Cipista eleito h� mais dias a bordo", "GEPLAT", "Quem � o vice-presidente da CIPA?"),
		new Pergunta("Diego Trezza", "NR-33", "Quem determina o que � e o que n�o � espa�o confinado na UO-BC?"),
		new Pergunta("Mestre de Cabotagem", "COEMB", "De acordo com o PRE das plataformas, quem � o l�der do Grupo de Controle de Salvatagem?"),
		new Pergunta("'N�o sejes burro!'", "'Na d�vida pare!", "Qual frase esteve presente em quase todos DDSs do GEPLAT Daniel em 2018?"),
		new Pergunta("Panama", "Ilhas Marshall", "Qual a bandeira de conveni�ncia arvorada em P-07?"),
		new Pergunta("P-7", "P-15", "Qual plataforma tem a melhor SIPAT da bacia?"),
	] ,
	"ver2": [
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
	] ,
	"ver3": [
		new Pergunta("Comece e termine o dia com seguran�a", "Comece o dia com seguran�a, mas desista no meio do caminho", "Qual o tema da SIPAT de 2018?"),
		new Pergunta("Com a autoriza��o do respons�vel", "Se n�o tiver ningu�m vendo", "Em que situa��o se pode entrar em �rea isolada?"),
		new Pergunta("Matriz de Trabalho em Equipamento Energizado", "Colh�es de A�o", "O que � indispens�vel para servi�os el�tricos energizados?"),
		new Pergunta("Remo", "Payssandu", "Qual comp�e a palamenta da baleeira do mestre Fiel?"),
		new Pergunta("3FWD3", "9PSL", "Qual o indicativo de chamada da plataforma?"),
		new Pergunta("ALPH", "GEPLAT", "Quem � o lider da EMCIA?"),
		new Pergunta("..-", "...---...", "Qual o c�dio Morse para a letra U?"),
		new Pergunta("'Estou dando Atr�s'", "Chulispa!", "O que significa quando uma embarca��o d� 3 apitos curtos?"),
		new Pergunta("PT", "PSL", "Qual documento Libera a execu��o de um Servi�o e � t�tulo de uma regra de ouro?"),
		new Pergunta("GM", "SIGM", "Qual sistema � atualmente utilizado para gest�o de mudan�as?"),
		new Pergunta("TAR < 1", "Redu��o da alavancagem", "Para qual meta de topo da PETROBRAS a P-7 pode contribuir positivamente?"),
		new Pergunta("R�dio VHF", "R�dio UHF", "Qual � utilizado para comunica��o entre plataformas e embarca��es de apoio?"),
		new Pergunta("N�o", "Sim", "Servi�os de instrumenta��o alimentados em extra-baixa tens�o e posteriores a elementos que limitam o n�vel de curto s�o considerados 'servi�os el�tricos'?"),
		new Pergunta("Luva", "Capacete", "Qual EPI protege m�os e dedos?"),
		new Pergunta("Gerente de Instala��o Operacional", "GEPLAT", "Quem � respons�vel pela autiriza��o de um bypasse de longa dura��o de um elemento iniciador de ESD-3?"),
		new Pergunta("Programa Amigo do Peito", "Programa Amigos amigos, neg�cios � parte", "Qual programa foi criado como iniciativa de evolu��o da cultura de seguran�a e envolve troca de cart�es?"),
		new Pergunta("Arco El�trico", "Arco-�ris de energia", "Qual � um perigo associado ao trabalho em salas de pain�is el�tricos?"),
		new Pergunta("Cachorro", "Gato", "Qual � um componente de seguran�a do guincho de �ncora?"),
		new Pergunta("Gato", "Cachorro", "Qual deles est� associado ao sistema de i�amento do bote de resgate?"),
		new Pergunta("Isolamento de Energias", "N�o sejes porco", "Qual regra de ouro passou por reformula��o em 2018?"),
		new Pergunta("Bendoran", "Atlantic III", "Qual j� foi um nome da plataforma?")
	],
	"ver4": [
		new Pergunta("Mensalmente, conforme condi��es de mar", "S� quando o GEPLAT Daniel embarca", "Com que frequ�ncia deve ser feito teste de navegabilidade do bote de resgate?"),
		new Pergunta("2", "3", "Em que canal est� sintonizado o r�dio UHF do Enfermeiro?"),
		new Pergunta("Com dupla prote��o auricular", "Completamente nu devido ao forte calor", "Como se deve trabalhar na sala de m�quinas?"),
		new Pergunta("Colete Salva Vidas", "Mascara de Fuga", "Qual EPI � indicado para trabalhos sobre o mar?"),
		new Pergunta("9PSL", "3FWD3", "Qual o c�digo de aerodromo privado de P-07?"),
		new Pergunta("Radio-operador de Plataforma Maritma", "Revolu��es por Minuto", "Qual RPM deve possuir carteira de registro junto � bandeira panamenha?"),
		new Pergunta("U", "F", "Qual letra � sinalizada em c�digo morse pela buzina de cerra��o?"),
		new Pergunta("RIPEAM", "RIPAN�OCHOR�", "Qual o regulamento internacional para evitar abalroamentos no mar?"),
		new Pergunta("Escada Port�til", "Caixote Robusto", "Qual deve ser utilizado para acessar partes altas de um arm�rio?"),
		new Pergunta("11 Atitudes da UO-BC", "Regra inomin�vel de Diamante", "Qual � a iniciativa oficial da UO-BC para melhoria da qualidade dos relacionamentos no ambiente de trabalho?"),
		new Pergunta("Utiliza o trava quedas", "Segura na m�o de Deus e vai", "O que se faz para acessar a sala de bombas de P-07?"),
		new Pergunta("Grupo de Controle da Fonte", "Grupo de Controle de Impacto", "Qual grupo � respons�vel pela seguran�a da planta de processos durante uma faina de emerg�ncias?"),
		new Pergunta("�gua salgada", "P� qu�mico ABC", "Qual N�O deve ser utilizado como extintor em princ�pios de inc�ndio classe C?"),
		new Pergunta("Dois Cipistas eleitos", "Tr�s Cipistas indicados", "A presen�a de quais membros � um requisito para a realiza��o da reuni�o da CIPA?"),
		new Pergunta("Quinzenal", "A cada 21 dias", "De acordo com o PP-3UBC-00402, qual a frequ�ncia de treinamentos do cen�rio de inc�ndio?"),
		new Pergunta("3", "1", "Se a frequ�ncia do treinamento de do cen�rio de desastres naturais � anual, ao todo quantos treinamentos desse cen�rio devem ter sido realizados em 2018?"),
		new Pergunta("Salto na �gua", "Abdu��o por seres do planeta Nibiru", "Qual a �ltima op��o para abandono de uma unidade mar�tma em emerg�ncia?"),
		new Pergunta("Fibras", "Cabos coaxiais", "O consumo de qual est� associado � sensa��o de saciedade e � motilidade intestinal?"),
		new Pergunta("Puni��o", "Reflex�o", "Qual n�o faz parte do programa amigo do peito?"),
		new Pergunta("Frustra��o", "Santa Catarina", "Qual � um estado cr�tico?"),
		new Pergunta("Safe Start", "Manual de Seguran�a do E&P", "A qual deles s�o associados os conceitos de Estados cr�ticos e erros cr�ticos?")
	],
};



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


document.addEventListener('DOMContentLoaded', (event)=>{
	for (const key in catalogo){
		console.log(key, catalogo[key])
		let version = document.createElement("option")
		version.value = key
		version.textContent = key
		document.getElementById("selVers").appendChild(version)
	}
	
})

document.addEventListener('keydown', function(event){
	switch(event.code){
    	case "ArrowUp":
    		if(listaDePerguntas[perguntaAtual].errado == $("#opcao1").text()){
    			certou();
    		} else {
    			erro();
    		}
    		break;
    	case "ArrowDown":
    		if(listaDePerguntas[perguntaAtual].errado == $("#opcao2").text()){
	 			certou();
    		} else {
    			erro();
    		}
    		break;
    	case "Backspace":
    		perguntaAtual = voltaPergunta;
    		mostraPergunta();
    		break;
    	default:
    		//alert(event.keyCode);

    }
} );

document.addEventListener('mousedown', function(event){
    if (event.button == 1){
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


var tempo = 180;
var perguntaAtual = -1;
var listaDePerguntas = [];
var timerID = 0;
var voltaPergunta = 0;
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
	tempo = 180;
	bis = 20;
	perguntaAtual = 0;
	listaDePerguntas = catalogo[$("#selVers").val()];
	mostraPergunta();
	mostraTempo();
	timerID = setInterval(timer,1000);
	$("#message").html("timer ID:" + timerID);
}

