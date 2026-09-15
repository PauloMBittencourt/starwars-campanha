// Raças do Star Wars Saga Edition: Jedi Academy Training Manual.
// Fonte: https://swse.fandom.com/wiki/Species (resumido e traduzido).
// Mesmo formato de js/dados/especies.js; carregar logo depois dele.

Object.assign(SPECIES_DATA, {
    celegian: {
        nome: 'Celegiano', nomeIngles: 'Celegian', livro: 'Academia Jedi',
        desc: 'Espécie antiga de grande intelecto e sabedoria, descendente de invertebrados oceânicos. Respiram cianogênio (o oxigênio os mata) e flutuam por uma espécie de repulsor natural. Fora de casa vivem sempre dentro de câmaras de suporte de vida.',
        modificadores: { INT: 2, DES: -2 },
        tamanho: 'Médio (sem bônus ou penalidades de tamanho)',
        deslocamento: 'Voo 6 quadrados (podem pairar); natação 10 quadrados',
        planeta: 'Celegia, mundo antigo de mares revoltos na Região de Expansão.',
        idiomas: 'Comunicam-se por telepatia; não têm idioma falado nem escrito, mas entendem Básico.',
        alturaPeso: 'Típico: 1,95 m e 90 kg.',
        personalidade: 'Sábios e ponderados, buscam soluções lógicas e adoram enigmas e paradoxos; evitam conflito e perigo.',
        aparencia: 'Um corpo em forma de cérebro (cerca de 1,2 m de diâmetro) com uma massa de tentáculos de até 2,2 m, dentro de uma câmara de transparisteel.',
        aventureiros: 'Exploradores natos; normalmente Nobres ou Batedores. Jedi Celegianos são raríssimos.',
        tracos: [
            { nome: 'Voo', texto: 'Voam, mas não se estiverem com Carga Pesada.' },
            { nome: 'Telepata Transmissor', texto: 'Usam Telepatia (Usar a Força) sem treinamento, mesmo sem Sensibilidade à Força, e têm sucesso automático ao se comunicar com alvos voluntários a até 60 quadrados na linha de visão.' },
            { nome: 'Nadador Especialista', texto: 'Podem rolar novamente qualquer teste de Nadar, mas devem aceitar o novo resultado. Também podem Escolher 10 em Nadar mesmo distraídos ou ameaçados.' },
            { nome: 'Equipamento Especial', texto: 'Fora de uma Câmara de Suporte de Vida Celegiana, começam a Sufocar.' },
        ],
        idades: ['1–10 anos', '11–20 anos', '21–142 anos', '143–210 anos', '211–250 anos', '251+ anos'],
        nomesExemplo: 'Ealu, Jolorr, Ooroo, Ruwaa.',
    },

    shard: {
        nome: 'Shard', nomeIngles: 'Shard', livro: 'Academia Jedi',
        desc: 'Seres cristalinos imóveis de Orax, à base de silício, que pensam em mente coletiva e se comunicam por computadores. Alguns, como os Cavaleiros de Ferro, habitam corpos de droide que controlam telepaticamente; muitos, se não todos, são sensíveis à Força.',
        modificadores: { SAB: 2, DES: -2 },
        tamanho: 'Médio (supondo corpo de droide humanoide; ajuste se o corpo for diferente)',
        deslocamento: '6 quadrados',
        planeta: 'Orax, mundo cristalino da Orla Exterior.',
        idiomas: 'Falam, leem e escrevem Básico e Binário; só se comunicam com outras criaturas conectados a um computador ou vocalizador.',
        alturaPeso: 'Definidos pelo corpo de droide.',
        personalidade: 'Pacientes e contemplativos; decisões por consenso podem levar séculos. Os que entram em corpos de droide ficam curiosos e fascinados com as sensações.',
        aparencia: 'Cristais cilíndricos facetados de 30 a 40 cm, com pulsos de luz internos; fora de Orax, instalados em corpos de droide.',
        aventureiros: 'Quase todos que saem de Orax se unem aos Cavaleiros de Ferro como Jedi ou Prodígios da Força.',
        tracos: [
            { nome: 'Constituição Mantida', texto: 'Mantêm o valor de Constituição mesmo dentro do corpo de droide.' },
            { nome: 'Perícia Treinada Bônus', texto: 'Recebem Usar Computadores como Perícia Treinada bônus, qualquer que seja a classe.' },
            { nome: 'Carcaça de Droide', texto: 'Precisam de Manutenção como droides; imunes a Veneno, Radiação, Perigos Atmosféricos não corrosivos e Vácuo; só recuperam PV com Reparar Droide (Mecânica), sem cura natural (salvo o Talento Reparo pela Força); contam como criaturas cibernéticas para dano de íons; podem usar Apêndices, Armadura, Comunicação, Compartimentos, Sensores e Tradutores de droide (custo ×1).' },
        ],
        idades: ['Não envelhecem', '—', '—', '—', '—', '—'],
        nomesExemplo: 'Firkrann, Ilum, Luxum.',
    },

    vultan: {
        nome: 'Vultano', nomeIngles: 'Vultan', livro: 'Academia Jedi',
        desc: 'Quase humanos tecnologicamente avançados de Vulta, na borda da Orla Média, com uma cultura de milênios marcada por ondas de modas e avanços. Adotam rápido qualquer ideia nova e muitos fazem parte de conselhos de corporações ou programam entretenimento holográfico.',
        modificadores: { INT: 2, SAB: -2 },
        tamanho: 'Médio (sem bônus ou penalidades de tamanho)',
        deslocamento: '6 quadrados',
        planeta: 'Vulta, colcha de retalhos de passarelas aéreas, túneis, parques artificiais e prédios de estilos diversos.',
        idiomas: 'Falam, leem e escrevem Básico e Dromnyr (um dos idiomas que deram origem ao Básico).',
        alturaPeso: 'Típico: 1,7 m e 70 kg.',
        personalidade: 'Inteligentes e muito curiosos por tendências e ideias; parecem ingênuos, mas não são.',
        aparencia: 'Como Humanos, com crescimentos de cartilagem no crânio: rente à cabeça nos machos, apontando para fora nas fêmeas.',
        aventureiros: 'Muitos viram comerciantes de tecnologia e arte; heróis costumam ser Nobres ou Malandros, e sensíveis à Força dão ótimos Jedi.',
        tracos: [
            { nome: 'Perícia Treinada Bônus', texto: 'Escolhem uma Perícia Treinada adicional no 1º nível, entre as Perícias de Classe.' },
            { nome: 'Talento Bônus Condicional', texto: 'Com uma ou mais perícias de Conhecimento treinadas, recebem Foco em Perícia em uma delas como Talento bônus.' },
        ],
        idades: ['1–11 anos', '12–19 anos', '20–59 anos', '60–74 anos', '75–89 anos', '90+ anos'],
        nomesExemplo: 'Echari Di’San, Koss Toko, Oss Wilum, Zona Luka.',
    },
});

Object.assign(SPECIES_EFFECTS, {
    celegian: { velocidade: 6, natacao: 10, tamanho: 'medio' },
    shard:    { velocidade: 6, tamanho: 'medio' },
    vultan:   { velocidade: 6, tamanho: 'medio' },
});
