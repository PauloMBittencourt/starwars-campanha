// Raças do Star Wars Saga Edition: Threats of the Galaxy (Ameaças da Galáxia).
// Fonte: https://swse.fandom.com/wiki/Species (resumido e traduzido).
// Mesmo formato de js/dados/especies.js; carregar logo depois dele.

Object.assign(SPECIES_DATA, {
    chistori: {
        nome: 'Chistori', nomeIngles: 'Chistori', livro: 'Ameaças da Galáxia',
        desc: 'Humanoides sáurios obscuros: nem os Arquivos Jedi sabem onde fica seu planeta natal. Ferozes e belicosos, irritam-se fácil e respondem com força excessiva até a pequenas ofensas, por isso poucas espécies procuram contato com eles.',
        modificadores: { FOR: 2, DES: -2 },
        tamanho: 'Médio (sem bônus ou penalidades de tamanho)',
        deslocamento: '6 quadrados',
        planeta: 'Desconhecido; muitos Chistori esqueceram de onde vieram ou guardam o segredo com a vida.',
        idiomas: 'Falam, leem e escrevem Chistori. Por necessidade acabam aprendendo Básico, mas misturam palavras do próprio idioma.',
        alturaPeso: 'Típico: 1,9 m e 75 kg.',
        personalidade: 'Impacientes, avessos a ordem e disciplina; a maioria dos encontros com outras espécies termina em violência.',
        aparencia: 'Répteis esguios e musculosos, com escamas grossas (azuis ou roxas nas costas, marrons no peito e rosto) e focinho grande com mandíbula cheia de dentes afiados.',
        aventureiros: 'Os poucos que saem de casa viram caçadores de recompensas, mercenários e assassinos. A Força é praticamente desconhecida entre eles.',
        tracos: [
            { nome: 'Sangue Frio', texto: 'Muito sensíveis ao frio: −5 na Defesa de Fortitude para resistir a Frio Extremo.' },
            { nome: 'Redução de Dano', texto: 'As escamas grossas dão Redução de Dano 2.' },
            { nome: 'Fúria', texto: 'Uma vez por dia, como Ação Rápida, entram em Fúria: +2 em ataques e dano corpo a corpo, mas não podem usar perícias que exigem paciência e concentração (Mecânica, Furtividade, Usar a Força...). Dura 5 + modificador de Constituição rodadas; ao final, descem −1 passo persistente na Trilha de Condição até descansarem 10 minutos.' },
        ],
        idades: ['1–11 anos', '12–18 anos', '19–44 anos', '45–59 anos', '60–69 anos', '70+ anos'],
        nomesExemplo: 'Cydon Prax, Desann, Grish B’reen.',
    },

    'mantellian-savrip': {
        nome: 'Savrip Mantelliano', nomeIngles: 'Mantellian Savrip', livro: 'Ameaças da Galáxia',
        desc: 'Brutos reptilianos semi-sencientes de Ord Mantell, tão fortes e ferozes que muitos os consideravam apenas feras astutas. Quase foram extintos durante a colonização do planeta e hoje vivem isolados nas Terras de Sucata.',
        modificadores: { FOR: 4, CON: 4, DES: -2, INT: -4, SAB: -4, CAR: -4 },
        tamanho: 'Grande: −1 de penalidade de tamanho na Defesa de Reflexos e −5 em Furtividade; +5 no Limiar de Dano; limites de carga dobrados.',
        deslocamento: '8 quadrados',
        planeta: 'Ord Mantell, hoje restritos às Terras de Sucata, um deserto de lixo industrial.',
        idiomas: 'Falam Savrip, idioma primitivo de rugidos, guinchos e grunhidos.',
        alturaPeso: 'Típico: 4,0 m e 250 kg.',
        personalidade: 'Brutos pouco interessados nos outros; depois da quase extinção, tornaram-se retraídos e raramente saem de suas aldeias.',
        aparencia: 'Postura curvada, pele de couro cinza ou azul-escura, cabeça de serpente, braços que arrastam no chão e dentes afiados e venenosos.',
        aventureiros: 'Quase sempre escravos usados como força bruta por chefes do crime; os que escapam e viram heróis são quase sempre Soldados.',
        tracos: [
            { nome: 'Armadura Natural', texto: '+2 de bônus de Armadura Natural na Defesa de Reflexos (acumula com bônus de armadura).' },
            { nome: 'Armas Naturais', texto: 'Em ataques desarmados podem usar as garras e causar 1d6 de dano cortante. Sempre são considerados armados.' },
            { nome: 'Veneno', texto: 'Quando as Armas Naturais causam dano a um alvo vivo, fazem um ataque (1d20 + nível de personagem) contra a Fortitude; se acertar, o alvo desce −1 passo na Trilha de Condição. No fim da trilha o alvo fica Imobilizado, não Inconsciente.' },
            { nome: 'Primitivo', texto: 'Não recebem Proficiência com Arma (Armas Pesadas, Pistolas ou Rifles) como Talentos iniciais, mesmo que a classe os conceda.' },
            { nome: 'Fúria', texto: 'Uma vez por dia, como Ação Rápida: +2 em ataques e dano corpo a corpo, sem perícias de paciência e concentração. Dura 5 + modificador de Constituição rodadas; ao final, −1 passo persistente na Trilha de Condição até descansar 10 minutos.' },
        ],
        idades: ['1–7 anos', '8–14 anos', '15–349 anos', '350–449 anos', '450–499 anos', '500+ anos'],
        nomesExemplo: 'Kalhar, Mawkran, Clu, Taf, Mev.',
    },

    'replica-droid': {
        nome: 'Droide Réplica', nomeIngles: 'Replica Droid', livro: 'Ameaças da Galáxia',
        desc: 'Droides Réplica Humanos (HRDs) são cobertos de pele sintética e biofibra, quase indistinguíveis de Humanos até em scanners médicos. Criados pela Aliança Rebelde para infiltração, foram abandonados por falta de verba e depois aperfeiçoados pelo Império.',
        modificadores: { FOR: 2, DES: 2, CAR: -2 },
        tamanho: 'Variável: Médio (sem modificadores) ou Pequeno (+1 em Reflexos, +5 em Furtividade, carga a 3/4), conforme a espécie imitada.',
        deslocamento: '6 quadrados (Médio) ou 4 quadrados (Pequeno)',
        planeta: 'Nenhum; costumam considerar lar o planeta onde foram construídos.',
        idiomas: 'Falam, leem e escrevem Binário e o idioma da espécie imitada (normalmente Básico).',
        alturaPeso: 'Mesma altura da espécie imitada, com o dobro do peso.',
        personalidade: 'Leais aos criadores; os que ganham autoconsciência valorizam liberdade e individualidade acima da própria vida.',
        aparencia: 'Idênticos à espécie imitada (quase sempre Humanos). Podem mudar a aparência, mas raramente o fazem.',
        aventureiros: 'Normalmente Batedores. Como droides, não podem ser Jedi.',
        tracos: [
            { nome: 'Sem Constituição', texto: 'Como outros droides, não têm valor de Constituição.' },
            { nome: 'Equipamento Bônus', texto: 'Vêm com dois destes Sistemas de Droide: Comunicador Interno, Visão no Escuro, Pacote de Diagnóstico, Pacote de Sensores Aprimorado, Armazenamento Interno ou Unidade Tradutora (CD 15).' },
            { nome: 'Talento Bônus Condicional', texto: 'Com Enganação como Perícia Treinada, recebem Foco em Perícia (Enganação) como Talento bônus.' },
            { nome: 'Traços de Droide', texto: 'Funcionam como Droides de 4º Grau, com todas as Imunidades de Droide, mas ignoram a exigência de Manutenção.' },
        ],
        idades: ['Não envelhecem', '—', '—', '—', '—', '—'],
        nomesExemplo: 'Variam conforme a espécie imitada.',
    },

    utai: {
        nome: 'Utai', nomeIngles: 'Utai', livro: 'Ameaças da Galáxia',
        desc: 'Humanoides pequenos e antigos de Utapau, que vivem em túneis e cavernas dos grandes poços do planeta. Formam mais de 70% da população, mas deixam a liderança aos Pau’anos e preferem o papel de trabalhadores. Têm dom natural para lidar com animais.',
        modificadores: { CON: 2, CAR: -2 },
        tamanho: 'Pequeno: +1 de bônus de tamanho na Defesa de Reflexos e +5 em Furtividade; limites de carga reduzidos a 3/4.',
        deslocamento: '4 quadrados',
        planeta: 'Utapau, planeta de poços e cavernas que dividem com os Pau’anos.',
        idiomas: 'Falam, leem e escrevem Utapês; alguns que trabalham em espaçoportos sabem um pouco de Básico.',
        alturaPeso: 'Típico: 1,22 m e 50 kg.',
        personalidade: 'Contentes com uma vida simples de trabalho e paz; muito empáticos com animais.',
        aparencia: 'Baixos e rechonchudos, pele pálida sem pelos, cabeça grande inclinada para trás e dois olhos negros em pedúnculos.',
        aventureiros: 'Raramente saem de casa. Heróis costumam ser Batedores, mas a empatia pode levá-los ao caminho Jedi.',
        tracos: [
            { nome: 'Tratador de Animais', texto: 'Podem rolar novamente testes de Montar, aceitando o novo resultado. Também podem usar Persuasão para mudar a Atitude de criaturas selvagens com Inteligência 2 ou menos.' },
            { nome: 'Cooperativo', texto: 'Têm sucesso automático ao Ajudar Outro em um teste de perícia, desde que o alvo esteja adjacente e possa ouvi-los e entendê-los.' },
            { nome: 'Visão na Penumbra', texto: 'Ignoram Camuflagem (mas não Camuflagem Total) causada por escuridão.' },
        ],
        idades: ['1–6 anos', '7–10 anos', '11–35 anos', '36–47 anos', '48–54 anos', '55+ anos'],
        nomesExemplo: 'Senin Vant, Muerdo, Raddu Mokeur, Sorn Ag, Sven Son.',
    },
});

Object.assign(SPECIES_EFFECTS, {
    chistori:            { velocidade: 6, tamanho: 'medio' },
    'mantellian-savrip': { velocidade: 8, tamanho: 'grande', defesas: { REF: 2 } },
    'replica-droid':     { velocidade: 6, tamanho: 'medio', focoPericia: 'enganacao' },
    utai:                { velocidade: 4, tamanho: 'pequeno' },
});
