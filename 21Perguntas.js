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
		new Pergunta("Resíduo Comum", "Resíduo Químico Biológico Radioativo", "EPI não contaminado e não reciclável (macacão, protetor auricular, luva e bota), deve ser descartado como que tipo de resíduo?"),
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
		new Pergunta("Alterar as características originais do EPI", "Responsabilizar-se pela guarda e conservação do EPI", "Qual delas não cabe ao empregado?"),
		new Pergunta("Os EPIs podem ser compartilhados sem passar por processo de higienização", "Os EPIs previnem ou minimizam as lesões e ou exposição a agente nocivo", "Qual das duas não é verdade?"),
		new Pergunta("Ao empregador", "Ao empregado", "A quem compete notificar o MTE qualquer irregularidade observada?"),
	] ,
	"AIDS": [
		new Pergunta("HIV", "Coronga", "Qual o nome do vírus causador da AIDS?"),
		new Pergunta("Síndrome da Imunodeficiência Adquirida", "Anemia Induzida Devido a Sexo", "O que significa a sigla AIDS?"),
		new Pergunta("Relação sexual sem proteção", "Sentar na mesma mesa no refeitório", "Qual delas é uma forma de contágio do HIV?"),
		new Pergunta("Sexo Oral", "Sexo Verbal", "Qual delas, quando sem proteção, é uma forma de contágio do HIV?"),
		new Pergunta("Sistema Imunológico", "Sistema Digestório", "Qual sistema do organismo é afetado pelo HIV?"),
		new Pergunta("Doenças Oportunistas", "Doenças Egoístas", "Como são chamadas as doenças potencializadas pela ação do HIV no organismo?"),
		new Pergunta("Camisinha", "Oração", "Qual delas é uma forma efetiva de proteção ao contágio do HIV?"),
		new Pergunta("Transfusão de sangue contaminado", "Abraço", "Qual delas é uma forma de contágio do HIV?"),
		new Pergunta("SARS-nCoV-2", "HIV", "O aperto de mãos não é recomendado devido a ser uma forma de transmissão de qual virus?"),
		new Pergunta("Bioproteção", "Será que vai dar tempo", "Qual deve ser a preocupação do socorrista ao atender uma vítima para se proteger do HIV?"),
		new Pergunta("Falso", "Verdadeiro", "A camisinha protege contra todos os tipos de IST?"),
		new Pergunta("Cancro mole", "Guacamole", "Qual desses é uma IST?"),
		new Pergunta("Infecção Sexualmente Transmissível", "Ih, Sujou Tôf***", "O que significa a sigla IST?"),
		new Pergunta("Possível mas não muito provável", "Certeza, moleque!", "A transmissão do HIV da mãe para o filho durante a gravidez é?"),
		new Pergunta("Herpes", "AIDS", "Dor, coceira e pequenas feridas com crostas são características de qual IST?"),
		new Pergunta("Diarréia", "Gonorreia", "Qual delas não é caracterizada por dor ao urinar e secreção anormal no pênis ou vagina?"),
		new Pergunta("Condiloma Acuminado", "Gonorreia", "Qual dessas IST é causada por vírus (HPV)?"),
		new Pergunta("HPV", "O virus da corrupção", "Qual agente causador de IST mais comum na população?"),
		new Pergunta("Câncer de colo de útero", "Clamídia", "Qual dessas doenças pode ser causada pelo HPV?"),
		new Pergunta("Candidíase", "HPV", "Contra qual desses não existe vacina?"),
		new Pergunta("www.aids.gov.br", "www.xvideos.com", "Em qual site posso obter informações sobre AIDS e outras ISTs?")
	] ,
	"NOV": [
		new Pergunta("Novembro azul", "Quatorzembro Trevoso", "Como é chamado o mês de conscientização sobre Câncer de Próstata?"),
		new Pergunta("Laço Azul", "Baleia Azul", "Qual o símbolo do Novembro Azul?"),
		new Pergunta("2011", "Na década de 00", "Quando surgiu a campanha?"),
		new Pergunta("#Azultitude", "Um dedo na consciência", "Qual o lema do novembro azul 2022 no Brasil?"),
		new Pergunta("conscientizar sobre o câncer de próstata e alertar os homens da importância do diagnóstico precoce", "Aumentar os lucros de empresas que vendem laços azuis", "Qual o objetivo do novembro azul?"),
		new Pergunta("29%", "10% do garçom", "Qual a taxa de Câncer de Próstata entre diagnósticos de câncer no país?"),
		new Pergunta("Nordeste e Centro-Oeste", "Sul e Sudeste", "Em quais regiões brasileiras se concentram as maiores taxas de casos de câncer de próstata?"),
		new Pergunta("Segunda", "Terceira", "Qual posição o Câncer de próstata ocupa nas taxas de mortalidade por câncer em homens no Brasil?"),
		new Pergunta("Fluxo urinário fraco e interrompido", "Vontade de comer rúcula ou chocolate ao leite", "Qual desses é um sintoma de câncer de próstata em estágio avançado?"),
		new Pergunta("Libido louca e insaciável", "Sangue na urina ou no sêmen", "Qual não representa sintoma de câncer de próstata?"),
		new Pergunta("Histórico familiar", "Vida sexual ativa após os 30 anos", "Qual representa um fator de risco para o câncer de próstata?"),
		new Pergunta("Idade", "Consumo de castanha do pará", "Qual representa um fator de risco para o câncer de mama?"),
		new Pergunta("Religião", "Nacionalidade", "Qual não representa um fator de risco para o câncer de mama?"),
		new Pergunta("Falso", "Verdadeiro", "A obesidade não é fator de risco incerto para o câncer de próstata?"),
		new Pergunta("Sim", "Não", "O tabagismo é considerado um fator de risco incerto para câncer de mama?"),
		new Pergunta("Claro que sim!", "Claro que não!", "O exame de toque retal é o único exame preventivo realizado em homens com mais de 40 anos?"),
		new Pergunta("Alcool e outras drogas", "Permissão para trabalho", "Qual regra de ouro ajuda a proteger contra o câncer de próstata?"),
		new Pergunta("Biópsia", "autópsia", "Qual exame confirma o câncer de próstata?"),
		new Pergunta("Pelo menos uma vez por ano", "Uma vez a cada título do Botafogo", "Qual a frequência recomendada de exame de toque retal para homens a partir de 50 anos?"),
		new Pergunta("Verdadeiro", "Falso", "Em homens jovens, a próstata possui o tamanho de uma ameixa, mas seu tamanho aumenta com o avançar da idade"),
		new Pergunta("Verdadeiro", "Falso", "O câncer de próstata, na maioria dos casos, cresce de forma lenta e não chega a dar sinais durante a vida e nem a ameaçar a saúde do homem.?")
	],
	"ver1": [
		new Pergunta("C", "A", "Qual tipo de incêndio é caracterizado pela presença de energia elétrica?"),
		new Pergunta("Plástico", "Metal", "Qual tipo de resíduo deve ser descartado no contentor vermelho?"),
		new Pergunta("Acidentes", "Anomalias", "O que significa a letra A na sigla SIPAT?"),
		new Pergunta("Na área", "Na meia-lua", "Onde deve ser feita a baixa da PT?"),
		new Pergunta("Você mesmo", "Luiz Inácio Lula da Silva", "Quem é o maior responsável pela sua segurança?"),
		new Pergunta("Álcool e drogas", "Sexo, drogas e Rock&Roll", "Qual é o nome de uma das regras de ouro?"),
		new Pergunta("Luva Nitrílica", "Luva de Raspas", "Qual é o EPI indicado para atividades de pintura?"),
		new Pergunta("Nunca", "Só com camisinha", "Em que condição se pode entrar em atmosfera explosiva?"),
		new Pergunta("TOR", "Capitão América", "Qual mede a Taxa de Ocorrências Registráveis?"),
		new Pergunta("Pontoons", "Pantoons", "Como são chamados os flutuadores de uma plataforma semi-submersível?"),
		new Pergunta("Água", "PQS", "Qual o tipo de extintor é o mais indicado para princípios de incêndio classe A?"),
		new Pergunta("Atmosfera Explosiva", "Na dúvida Pare", "Qual é uma das regras de ouro?"),
		new Pergunta("Na Entrada", "No Fumódromo", "Onde deve ficar o vigia do espaço confinado?"),
		new	Pergunta("CESS", "CETB", "Qual curso credencia a pessoa a tripular uma baleeira?"),
		new Pergunta("Técnico de Segurança", "Soldador", "Qual deles Não faz parte da EOR de PCH-2?"),
		new Pergunta("Cipista eleito há mais dias a bordo", "GEPLAT", "Quem é o vice-presidente da CIPA?"),
		new Pergunta("Diego Trezza", "NR-33", "Quem determina o que é e o que não é espaço confinado na UN-BC?"),
		new Pergunta("Mestre de Cabotagem", "COMAN", "De acordo com o PRE das plataformas, quem é o líder do Grupo de Controle de Salvatagem?"),
		new Pergunta("Dias Perfeitos", "Na dúvida pare!", "Como é chamado o calendário que aponta a quantidade de dias em que não há ocorrências de acidente?"),
		new Pergunta("Marinha", "Exército", "Qual órgão fiscaliza a plataforma?"),
		new Pergunta("PCH-2", "PCH-1", "Qual plataforma tem a melhor SIPAT da bacia?"),
	] ,
	"ver2": [
		new Pergunta("SIPAT", "SISPAT", "Qual o nome do evento que você está participando?"),
		new Pergunta("Guindaste", "Dessalinizadora", "Qual o equipamento utilizado para movimentar cargas?"),
		new Pergunta("Dessalinizadora", "Guindaste", "Qual o equipamento produz água potável?"),
		new Pergunta("Popa", "Polpa", "Como é chamada a ré de um navio?"),
		new Pergunta("Heliponto", "Aeroporto", "Onde o helicóptero pousa na plataforma?"),
		new Pergunta("NR-10", "NR-33", "Qual norma regulamenta trabalhos elétricos?"),
		new Pergunta("Bóia Circular", "Bóia de Braço", "Qual é jogada para 'homem ao mar'?"),
		new Pergunta("Espaço confinado", "Espaço com falecido", "Como é considerado o interior dos separadores de PCH-2?"),
		new Pergunta("Bomba", "Dinamite", "Qual é utilizada para movimentar fluidos?"),
		new Pergunta("Marinha", "Exército", "Qual órgão fiscaliza a plataforma?"),
		new Pergunta("Rádio VHF", "Rádio UHF", "Qual é utilizado para comunicação entre plataformas e embarcações de apoio?"),
		new Pergunta("Fixa", "FDPSO", "PCH-2 é uma plataforma de qual tipo?"),
		new Pergunta("Vigia", "Gandula", "Quem monitora a entrada do espaço confinado?"),
		new Pergunta("Luva", "Capacete", "Qual EPI protege mãos e dedos?"),
		new Pergunta("Bote de resgate", "Baleeira", "Qual equipamento é utilizado preferencialmente para resgate de homem ao mar?"),
		new Pergunta("Espaço Confinado", "Camarote", "Qual não foi projetado para a permanência humana?"),
		new Pergunta("PT a Quente", "PT Elétrica", "Qual é utilizada para trabalhos com solda elétrica?"),
		new Pergunta("POB", "BOP", "Qual deles representa o efetivo total da plataforma?"),
		new Pergunta("APLAT", "SAP", "Qual o sistema utilizado para emissão de PT?"),
		new Pergunta("PT Elétrica", "PQ a Quente", "Qual delas é utilizada para serviços elétricos?"),
		new Pergunta("Almuiña", "Albumina", "Qual o sobrenome do Presidente da CIPLAT")
	] ,
	"ver3": [
		new Pergunta("A arte do cuidado", "Comece o dia com segurança, mas desista no meio do caminho", "Qual o tema da SIPAT de 2022?"),
		new Pergunta("Com a autorização do responsável", "Se não tiver ninguém vendo", "Em que situação se pode entrar em área isolada?"),
		new Pergunta("Matriz de Trabalho em Equipamento Energizado", "Colhões de Aço", "O que é iindispensável para serviços elétricos energizados?"),
		new Pergunta("Remo", "Payssandu", "Qual compõe a palamenta da baleeira do mestre Aloísio?"),
		new Pergunta("3FWD3", "9PPH", "Qual o indicativo de chamada da plataforma?"),
		new Pergunta("ALPH", "GEPLAT", "Quem é o líder da EMCIA?"),
		new Pergunta("..-", "...---...", "Qual o código Morse para a letra U?"),
		new Pergunta("'Estou dando Atrás'", "Chulispa!", "O que significa quando uma embarcação dá 3 apitos curtos?"),
		new Pergunta("PT", "PSL", "Qual documento Libera a execução de um Serviço e é título de uma regra de ouro?"),
		new Pergunta("GM", "SIGM", "Qual sistema é atualmente utilizado para gestão de mudanças?"),
		new Pergunta("TAR < 1", "Redução da alavancagem", "Para qual meta de topo da PETROBRAS a PCH-2 pode contribuir positivamente?"),
		new Pergunta("Rádio VHF", "Rádio UHF", "Qual é utilizado para comunicação entre plataformas e embarcações de apoio?"),
		new Pergunta("Não", "Sim", "Serviços de instrumentação alimentados em extra-baixa tensão e posteriores a elementos que limitam o nível de curto são considerados 'serviços elétricos'?"),
		new Pergunta("Luva", "Capacete", "Qual EPI protege mãos e dedos?"),
		new Pergunta("Gerente de Instalação Operacional", "GEPLAT", "Quem é rresponsável pela autorização de um bypass de longa duração de um elemento iniciador de ESD-3?"),
		new Pergunta("Programa Amigo do Peito", "Programa Amigos amigos, negócios à parte", "Qual programa foi criado como iniciativa de evolução da cultura de segurança e envolve cuidar e ser cuidado?"),
		new Pergunta("Arco Elétrico", "Arco-íris de energia", "Qual é um perigo associado ao trabalho em salas de painéis elétricos?"),
		new Pergunta("Cachorro", "Gato", "Qual é um componente de segurança de guinchos de âncora?"),
		new Pergunta("Gato", "Cachorro", "Qual deles está associado ao sistema de içamento do bote de resgate?"),
		new Pergunta("Isolamento de Energias", "Não sejes porco", "Qual regra de ouro passou por reformulação em 2018?"),
		new Pergunta("Cinto de Segurança", "Colete Salva Vidas", "Qual EPI é indicado para trabalho em altura?")
	],
	"ver4": [
		new Pergunta("Mensalmente, conforme condições de mar", "Só quando o GEPLAT Leandro embarca", "Com que frequência deve ser feito teste de navegabilidade do bote de resgate?"),
		new Pergunta("2", "3", "Em que canal está sintonizado o rádio UHF da Enfermeira?"),
		new Pergunta("Com dupla proteção auricular", "Completamente nu devido ao forte calor", "Como se deve trabalhar no atendimento à aeronave no Heliponto?"),
		new Pergunta("Colete Salva Vidas", "Mascara de Fuga", "Qual EPI é indicado para trabalhos sobre o mar?"),
		new Pergunta("Olfativo", "Visual", "Qual é um tipo de alarme presente em ambientes protegidos por CO2?"),
		new Pergunta("Radio-operador de Plataforma Marítima", "Revoluções por Minuto", "Qual a definição de RPM à luz do glossário da Normam 27?"),
		new Pergunta("U", "F", "Qual letra é sinalizada em código morse pela buzina de cerração?"),
		new Pergunta("Dióxido de Carbono", "Monóxido de Carbono", "Qual é um composto químico constituído por dois átomos de oxigénio e um átomo de carbono e tem como representação química o CO2?"),
		new Pergunta("Escada Portátil", "Caixote Robusto", "Qual deve ser utilizado para acessar partes altas de um armário?"),
		new Pergunta("LIBRA", "Áries", "Qual está associado à regra de Ouro Isolamento de Energias?"),
		new Pergunta("Utiliza o cinto de segurança", "Segura na mão de Deus e vai", "trabalhar em altura superior a 2 metros, onde haja risco de queda?"),
		new Pergunta("Grupo de Controle da Fonte", "Grupo de Controle de Impacto", "Qual grupo é responsável pela segurança da planta de processos durante uma faina de emergências?"),
		new Pergunta("Água salgada", "P químico ABC", "Qual não deve ser utilizado como extintor em princípios de incêndio classe C?"),
		new Pergunta("Ordinária", "Safada", "Qual tipo de reunião deve ser realizada pela CIPLAT mensalmente, atendendo ao calendário previamente estabelecido?"),
		new Pergunta("Quinzenal", "A cada 21 dias", "De acordo com o PE-3UBC-02412, qual a frequência de treinamentos do cenário de incêndio?"),
		new Pergunta("3", "1", "Se a frequência do treinamento de do cenário de desastres naturais é anual, ao todo quantos treinamentos desse cenário devem ter sido realizados em 2022?"),
		new Pergunta("Salto na água", "Abdução por seres do planeta Nibiru", "Qual a última opção para abandono de uma unidade marítima em emergência?"),
		new Pergunta("Fibras", "Cabos coaxiais", "O consumo de qual está associado à sensação de saciedade e à motilidade intestinal?"),
		new Pergunta("Punição", "Reflexão", "Qual não faz parte do programa amigo do peito?"),
		new Pergunta("Frustração", "Santa Catarina", "Qual é um estado crítico?"),
		new Pergunta("Raquete", "Peteca", "Qual é um dispositivo inter-flanges?")
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

