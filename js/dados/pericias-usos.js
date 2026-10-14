// Regras do capítulo de Perícias do livro PT-BR (v1.05), fornecido pelo usuário.
// Gerado por dev/importadores/importar-pericias-livro.py; complementos de suplementos têm fonte própria.
const SKILL_USES = {
    "acrobacia": {
        "page": "Acrobatics",
        "note": "",
        "uses": [
            {
                "title": "Equilibrar-se",
                "text": "Um teste bem sucedido de Acrobacia permite que você se mova com a metade da sua velocidade por uma superfície estreita tal como um peitoril, ou arame. A CD do teste de Acrobacia varia de acordo com a largura da superfície (ver abaixo). Se a superfície é escorregadia ou instável, aumente a CD por 5. Um teste falho significa que você caiu deitado e deve fazer um teste de Acrobacia CD 15 para agarrar o peitoril ou arame.\n\nVocê é considerado desprevenido enquanto estiver se equilibrando e, portanto perde seu bônus em Destreza em sua Defesa de Reflexo (se houver. Se você é treinado em Acrobacia, você não é considerado desprevenido enquanto estiver se equilibrando.\n\nSe você sofrer dano enquanto estiver se equilibrando, você deve imediatamente fazer outro teste de Acrobacia contra a mesma CD para evitar a queda.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "table": {
                    "caption": "Superfície estreita",
                    "headers": [
                        "Largura da superfície",
                        "CD de Acrobacia"
                    ],
                    "rows": [
                        [
                            "8–15 cm",
                            "10"
                        ],
                        [
                            "4–7 cm",
                            "15"
                        ],
                        [
                            "Menos de 4 cm",
                            "20"
                        ]
                    ]
                }
            },
            {
                "title": "Atravessar terreno difícil",
                "text": "Com um teste bem sucedido de Acrobacia CD15, você pode se mover através de terrenos difíceis com sua velocidade normal.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Escapar de amarras",
                "text": "Com um teste bem sucedido de Acrobacia, você pode se libertar de contenções (CD varia; ver tabela abaixo), pode se contorcer através de um espaço apertado (CD 20), ou escapar de uma agarrada (CD = o teste de agarrar do agarrador). A CD para escapar de uma contenção depende do tipo da contenção (ver tabela).\n\nLeva uma ação padrão para escapar de uma agarrada. Leva uma ação de rodada completa para escapar de uma rede ou para se mover 1 quadrado através de um espaço apertado. Leva um minuto para escapar de cordas, prendedores de punho ou algemas.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "table": {
                    "caption": "Contenções",
                    "headers": [
                        "Contenção",
                        "CD de Acrobacia"
                    ],
                    "rows": [
                        [
                            "Cordas",
                            "Teste de Destreza do oponente + 10"
                        ],
                        [
                            "Rede",
                            "15"
                        ],
                        [
                            "Algemas",
                            "25"
                        ]
                    ]
                }
            },
            {
                "title": "Deitar-se",
                "text": "Se você é treinado em Acrobacia e for bem sucedido em um teste com CD 15, você pode cair deitado como uma ação livre (ao invés de uma ação rápida).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Reduzir dano de queda",
                "text": "Com um teste bem sucedido de Acrobacia CD 15, você pode tratar uma queda como se fosse de 3 metros (2 quadrados) menor quando determinar o dano. Para cada 10 pontos em que você superar esta CD, você pode subtrair 3 metros a mais da queda para determinar o dano. Se você fizer este teste e não sofrer dano na queda. Você aterrissa em pé.\n\nSe você for atingido por um objeto que cai, você pode reduzir o dano que você sofre pela metade com um teste bem sucedido de Acrobacia CD 15 (ver Objetos que Caem, página 254).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Levantar-se",
                "text": "Se você é treinado em Acrobacia e for bem sucedido em um teste com CD 15, você pode levantar do chão como uma ação rápida (ao invés de uma ação de movimento).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Acrobacia em combate",
                "text": "Se você for bem sucedido em um teste de Acrobacia CD 15, você pode dar cambalhotas através da área ameaçada ou o espaço de luta de um inimigo como parte da sua ação de movimento sem provocar um ataque de oportunidade. Cada quadrado que você passar acrobaticamente conta como 2 quadrados de movimento.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Apanhar objeto",
                "text": "Após desarmar com sucesso um adversário, faça um teste de Acrobacia CD 20 como ação livre. Se passar, apanhe o objeto desarmado; você precisa ter pelo menos uma mão livre.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Acrobatics",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Escapista",
                "text": "Antes do teste de Escapar de amarras, aumente a CD em 10 para acelerar a fuga. Uma agarrada passa a exigir ação de movimento; uma rede ou avançar 1 quadrado em espaço apertado, ação padrão; cordas, prendedores de punho e algemas, 5 rodadas.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Acrobatics",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Gravidade baixa ou alta",
                "text": "Em gravidade baixa ou alta, passar em Acrobacia CD 20 elimina as penalidades de ataque decorrentes dessa gravidade.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Acrobatics",
                "sourceLabel": "Force Unleashed Campaign Guide"
            },
            {
                "title": "Investida ágil",
                "text": "Acrobacia CD 25 permite investir atravessando objetos baixos e terreno difícil. Falhar impede o ataque ao fim do movimento. Se combinar com Atravessar terreno difícil, a CD passa a 35.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Acrobatics",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Gravidade zero",
                "text": "Use Acrobacia sem penalidade para chegar ao destino ao cruzar áreas amplas ou congestionadas em gravidade zero. Como ação rápida, Acrobacia CD 20 reduz de −5 para −2 as penalidades de ataques e testes de perícia nessa gravidade.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Acrobatics",
                "sourceLabel": "Force Unleashed Campaign Guide"
            },
            {
                "title": "Direcionar queda",
                "text": "Em queda longa, Acrobacia CD 20 ajusta a aterrissagem em 1 quadrado por 60 metros (40 quadrados) caídos. O GM ajusta por vento e equipamento.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Acrobatics",
                "sourceLabel": "Force Unleashed Campaign Guide"
            }
        ],
        "description": "Penalidade de Armadura em Testes Você pode se mover em velocidade normal através de terrenos difíceis, manter o equilíbrio enquanto anda em uma superfície estreita, sofrer menos dano em uma queda, se libertar de contenções ou de um inimigo que te agarra, e levantar do chão em segurança. Além das opções específicas listadas abaixo, você pode usar Acrobacia para fazer cambalhotas, giros, ou manobras de ginástica típicas.",
        "rules": "Especial: Você não pode escolher 10 ou escolher 20 em um teste de Acrobacia.\n\nSe você é treinado em Acrobacia, você recebe um bônus de esquiva de +5 em sua Defesa de Reflexo quando estiver lutando defensivamente (ver Lutar Defensivamente, página 152).",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 62–63 (PDF pp. 63–64)"
    },
    "enganacao": {
        "page": "Deception",
        "uses": [
            {
                "title": "Aparência enganosa",
                "text": "Quando você produzir uma aparência enganosa, tal como disfarçar sua aparência ou produzir documentos falsos, faça um teste de Enganar resistido pelo teste de Percepção de qualquer alvo que observar a enganação. Se você for bem sucedido, este personagem acredita que a aparência é autentica. Se você falhar, o alvo detecta a enganação. Criar uma aparência enganosa requer ao menos 1 minuto (10 rodadas) para enganações simples, 10 minutos para enganações moderadas, 1 hora para enganações difíceis, 1 dia para enganações incríveis, ou 2 semanas para enganações absurdas. Você pode correr e criar a enganação em menos tempo (tratando como se fosse um passo mais fácil, até um mínimo de simples, mas você sofre uma penalidade de -10 em seu teste de Enganar. Em todos os casos, faça um teste simples de Enganar na hora que você criar a aparência enganosa e comparar o resultado do seu teste com o teste de Percepção de qualquer personagem que você encontrar e precisar enganar.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–65 (PDF pp. 64–66)"
            },
            {
                "title": "Informação enganosa",
                "text": "Quando você comunicar uma informação enganosa, tal como contar uma mentira ou distorcer fatos para levar um alvo à uma conclusão falsa, faça um teste de Enganar contra a Defesa de Vontade de qualquer alvo que puder ouvir você. Se você for bem sucedido, o alvo acredita que o que você está contando é verdade. Enquanto muitos casos de informação enganosa são ou verbais ou escritas, (requerendo que o alvo seja capaz de entender você), você pode enganar com gestos, linguagem corporal, expressões faciais, e daí por diante. Comunicar uma informação enganosa requer ao menos uma ação padrão para enganações simples, uma ação de rodada completa para enganações moderadas, 1 minuto (10 rodadas) ou ainda mais para enganações difíceis, incríveis, ou absurdas. Você pode correr e comunicar a enganação em menos tempo (tratando como se fosse um passo mais fácil, até um mínimo de simples, mas você sofre uma penalidade de -10 em seu teste de Enganar. Se a sua informação enganosa for escrita, gravada, ou de alguma outra forma preservadas para serem vistas mais tarde, o resultado do teste original é comparado a Defesa de Vontade de todos os alvos que mais tarde lerem ou observarem sua enganação.\n\nEm alguns casos, você pode comunicar juntas, uma aparência enganadora e uma informação enganadora. Por exemplo, se você criar um documento falsificado (tal como um relatório oficial, uma carta de um senador, ou ordens de um comandante militar), você deve produzir algo que pareça autêntico (aparência enganadora) enquanto cria também um conteúdo crível (informação enganosa). Neste caso, faça um teste simples de Enganar e compare-o a Percepção e a Defesa de Vontade do alvo ao mesmo tempo. Similarmente, você pode se disfarçar como um general do Império (aparência enganosa) e então dar ordens falsas a um stormtrooper (informação enganosa). Neste exemplo, você faz um teste de Enganar anteriormente para criar o disfarce e outro teste de Enganar na hora em que você der novas ordens ao stormtrooper.\n\nCircunstâncias favoráveis e desfavoráveis pesam muito no resultado de uma enganação. Duas circunstâncias podem pesar contra você: A enganação é difícil de se acreditar, ou se a ação que a enganação requer do alvo vá contra os próprios interesses, natureza, personalidade ou ordens do alvo.\n\nSe for importante, o GM pode diferenciar uma enganação que falha por que o alvo não acredita nela, e uma que falha simplesmente por que exige muito do alvo. Por exemplo, se a enganação pedir algo muito arriscado para o alvo, e o seu teste de enganação falhar por 10 ou menos, então o alvo até poderia não perceber a enganação, mas se provaria relutante a cumprir o que foi pedido mesmo acreditando ser verdade. Se o seu teste de Enganar falhar por 11 ou mais, ele percebe a enganação (e teria percebido mesmo se não representasse o mínimo risco para ele.).\n\nUm teste de Enganar bem sucedido indica que o alvo reage como você desejou, ao menos por um curto período de tempo, ou o alvo acredita em alguma coisa que você quer que ele acredite. Por exemplo, você poderia usar uma enganação para baixar a guarda de alguém dizendo a ele que tem alguém atrás dele. Na melhor das hipóteses, esta enganação faria com que o alvo apenas desse uma olhadinha por cima do ombro. Isso não faria o alvo ignorar você e virar completamente. Alternativamente, você poderia usar uma enganação para fazer o capitão de uma nave interestelar acreditar que ele tem ordens para levar a nave para Tatooine. Se for bem sucedido, o capitão cumpriria suas novas “ordens” mesmo que isso levasse um bom tempo, mas logo que ele encontrar informações contraditórias (tal como receber ordens contraditórias do seu real comandante, ou chegar a Tatooine e descobrir que ninguém o chamou) ele vai perceber que foi enganado.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–65 (PDF pp. 64–66)"
            },
            {
                "title": "Criar distração para esconder-se",
                "text": "Você pode usar Enganar para te ajudar a se esconder. Um teste bem sucedido de Enganar que iguale ou supere a Defesa de Vontade lhe concede a distração momentânea que você precisa para tentar um teste de Furtividade enquanto o alvo estiver consciente de você (ver a perícia Furtividade, página 72).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–65 (PDF pp. 64–66)"
            },
            {
                "title": "Fintar",
                "text": "Faça um teste de Enganar como uma ação padrão para determinar a CD do teste de Iniciativa do seu oponente. Se você bater a rolagem do seu oponente, este alvo é tratado como desprevenido contra o primeiro ataque que você fizer contra ele no próximo turno. Você sofre uma penalidade de -5 contra criaturas não humanóides ou contra criaturas com uma Inteligência menor que 3.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–65 (PDF pp. 64–66)"
            },
            {
                "title": "Fintar em grupo",
                "text": "Gaste uma rodada completa e escolha oponentes que você veja a até 6 quadrados. Faça um único teste de Enganar, com −5 por alvo adicional; cada alvo resiste com Iniciativa. Os alvos superados ficam desprevenidos contra seu primeiro ataque a eles na rodada seguinte.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/SaV_Character_Options",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "História alternativa",
                "text": "Ao falhar em Aparência enganosa ou Informação enganosa, você pode tentar imediatamente um segundo teste de Enganar, com penalidade de −10, para evitar suspeitas.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/SaV_Character_Options",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Trapacear",
                "text": "Em jogos de azar, substitua o teste de Sabedoria por Enganar. Oponentes que igualem ou superem seu resultado com Percepção percebem a trapaça. Contra a casa, supere a segurança: CD 15 comum, 25 boa, 35 ou mais excelente. Falhar permite à casa descobrir a fraude e reagir.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/SaV_Character_Options",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Mensagem dissimulada",
                "text": "Você e o destinatário precisam ser treinados. Use gestos e palavras codificadas: CD 10 para mensagem simples; CD 15–25 para instruções complexas. Quem vê e ouve pode decifrar com Percepção contra essa mesma CD. O GM pode ajustar pela distância, iluminação e ruído.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/SaV_Character_Options",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Criar distração para esconder objeto",
                "text": "Um teste de Enganar que iguale ou supere a Defesa de Vontade do observador cria a distração necessária para tentar Furtividade e esconder um objeto em você ou perto de você, mesmo estando sob observação.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Deception",
                "sourceLabel": "Force Unleashed Campaign Guide"
            },
            {
                "title": "Fingir pane",
                "text": "Uso exclusivo de droides. Como ação de rodada completa, teste Enganar contra a Defesa de Vontade de todos os oponentes em sua linha de visão. Os superados ficam desprevenidos contra você. Se você executar qualquer ação, a farsa termina ao fim de seu turno e eles deixam de estar desprevenidos.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Deception",
                "sourceLabel": "Force Unleashed Campaign Guide"
            },
            {
                "title": "Enganar com nave",
                "text": "Como piloto, você pode fintar ou criar distração para esconder a nave. Some o modificador de tamanho e de Destreza do veículo ao teste de Enganar; aplique −5 se não for treinado em Pilotar. Uma finta bem-sucedida deixa o alvo desprevenido apenas contra seu primeiro ataque, sem beneficiar os artilheiros.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Deception",
                "sourceLabel": "Starships of the Galaxy"
            }
        ],
        "description": "Você pode fazer o irreal parecer real, o absurdo parecer plausível, e o nefasto parecer ordinário. A perícia reúne vigarice, fala rápida, despistar, falsificação, disfarces, e mentiras deslavadas. Use um teste de Enganar para causar uma confusão temporária, se passar por alguém que você não é, fazer alguém virar a cabeça na direção que você apontar, ou passar documentos falsos como se fossem genuínos.\n\nEnganar: Quando você quer fazer com que outro personagem acredite em algo que não é verdade, você pode tentar iludi-lo. Você pode iludir um alvo de duas formas: produzindo uma aparência enganosa ou comunicando informações falsas.",
        "rules": "Re-tentar: Geralmente, um teste mal sucedido de Enganar deixa o alvo muito desconfiado para você tentar outro teste de Enganar nas mesmas circunstâncias. Para fintar em combate, você pode re-tentar livremente.\n\nEspecial: Você pode escolher 10 quando fizer uma enganação (exceto para fintar em combate), mas você não pode escolher 20.\n\nTempo: uma enganação leva pelo menos uma ação padrão, mas pode levar mais tempo se você tentar algo mais elaborado. Disfarces que requerem mudanças maiores em sua disposição física, ou documentos falsificados com muitos fiscais, podem levar horas ou mesmo dias.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–65 (PDF pp. 64–66)",
        "note": "",
        "tables": [
            {
                "caption": "Tabela 4-3: Enganações",
                "headers": [
                    "Enganação",
                    "Modificador do teste",
                    "Descrição"
                ],
                "rows": [
                    [
                        "Simples",
                        "+5",
                        "Uma enganação simples funciona à favor do alvo ou atende as expectativas do alvo, e não requer nada que você já não tenha em mãos. Enganações simples incluem convencer um dono de ferro velho a comprar alguns dróides roubados; disfarçando-se como alguém comum ou de tamanho, espécie, e sexo similares; e criando uma identidade falsa que passará por uma inspeção casual, mas não uma mais cuidadosa.."
                    ],
                    [
                        "Moderada",
                        "+0",
                        "Uma enganação moderada é crível e não afeta muito o alvo, e você tem muitos dos adereços que você precisa. Enganações moderadas incluem convencer um guarda suspeito que você não é um ladrão; se disfarçar como um membro de outra espécie ou sexo; e criar uma identidade falsa bem feita o suficiente para passar por uma analise visual mas não um exame eletrônico."
                    ],
                    [
                        "Difícil",
                        "-5",
                        "Uma enganação difícil é um pouco difícil de acreditar, coloca o alvo em algum tipo de risco, ou se coloca em uma averiguação. Os exemplos incluem convencer um grupo de bandidos que você quer e pode derrotá-los em uma luta na cantina, falsificar códigos de transponder de naves interestelares, passar por um oficial de forma convincente o suficiente para dar ordens a tropa, e criar documentos oficiais bem feitos o suficiente para passar por um exame eletrônico."
                    ],
                    [
                        "Incrível",
                        "-10",
                        "Uma enganação incrível é difícil de acreditar, coloca o alvo em um considerável risco, ou te requer que você passe por intensa averiguação. Enganações incríveis incluem convencer um respeitável vendedor de naves interestelares para comprar uma nave Imperial. Se passar por alguém de forma convincente o suficiente para convencer um velho amigo, e falsificar créditos."
                    ],
                    [
                        "Absurda",
                        "-20",
                        "Uma enganação improvável é quase tão improvável de se considerar ou requer material que você simplesmente não possui. Enganações absurdas incluem se passar por um Jedi (sem qualquer Sensitividade da Força) bem o bastante para enganar outro Jedi, dizer que é o Imperador disfarçado e dar ordens a stormtroopers, e falsificar documentos importantes sem ferramentas próprias ou exemplos para usar como molde."
                    ]
                ]
            }
        ]
    },
    "escalar": {
        "page": "Climb",
        "note": "",
        "uses": [
            {
                "title": "Escalar superfície",
                "text": "Com cada teste bem sucedido de Escalar, você pode subir, descer, ou atravessar lateralmente uma inclinação ou um muro ou outra superfície inclinada (ou até mesmo um teto com lugares para pendurar). Uma inclinação é considerada um ângulo de menos de 60 graus; um muro é considerado um ângulo igual ou superior a 60 graus. Você pode escalar metade da sua velocidade como uma ação de rodada completa.\n\nVocê pode se mover metade disso – um quarto de sua velocidade – como uma ação de movimento.\n\nUm teste de Escalar mal sucedido indica que você não fez progresso, e um teste que falha por 5 ou mais significa que você caiu da altura que você já tinha alcançado.\n\nA CD do teste depende das circunstâncias da escalada: *Estes modificadores são cumulativos; use todos que se aplicam a situação.\n\nJá que você não pode se mover para evitar um ataque enquanto estiver escalando, os oponentes recebem um bônus de +2 em rolagens de ataque contra você, e você perde quaisquer bônus de Destreza em sua Defesa de Reflexo.\n\nToda vez que você sofrer dano enquanto estiver escalando, faça um teste de Escalar contra a CD da inclinação ou muro. Uma falha significa que cai dá altura atual e sofre o dano de queda apropriado (ver Dano de Queda, página 255).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 65–66 (PDF pp. 66–67)",
                "table": {
                    "caption": "Superfícies e modificadores cumulativos",
                    "headers": [
                        "CD / ajuste",
                        "Superfície ou circunstância"
                    ],
                    "rows": [
                        [
                            "0",
                            "Inclinação muito acentuada para subir caminhando; corda com nós paralela a um muro."
                        ],
                        [
                            "5",
                            "Corda paralela a um muro ou corda com nós, mas não ambos."
                        ],
                        [
                            "10",
                            "Superfície com apoios firmes para mãos e pés, como parede muito irregular."
                        ],
                        [
                            "15",
                            "Apoios adequados para mãos e pés, naturais ou artificiais; rocha natural muito irregular, árvore ou corda sem nós."
                        ],
                        [
                            "20",
                            "Superfície desigual com apoios estreitos para mãos e pés."
                        ],
                        [
                            "25",
                            "Superfície irregular, como parede de rocha natural ou de tijolos."
                        ],
                        [
                            "25",
                            "Saliência ou teto com apoios para mãos, mas não para pés."
                        ],
                        [
                            "Impossível",
                            "Superfície perfeitamente lisa, plana e vertical."
                        ],
                        [
                            "−10",
                            "Duto ou local onde seja possível apoiar-se entre duas paredes opostas."
                        ],
                        [
                            "−5",
                            "Canto com paredes perpendiculares."
                        ],
                        [
                            "+5",
                            "Superfície escorregadia."
                        ]
                    ]
                }
            },
            {
                "title": "Escalada acelerada",
                "text": "Você tenta escalar mais rapidamente, mas sofre uma penalidade de -5 em testes de Escalar. Escalada acelerada permite que você escale com sua velocidade total como uma ação de rodada completa. Você pode se move metade disso – metade da sua velocidade – como uma ação de movimento.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 65–66 (PDF pp. 66–67)"
            },
            {
                "title": "Agarrar-se durante uma queda",
                "text": "É praticamente impossível segurar em um muro para interromper uma queda. Faça um teste de Escalar (DC = a CD do muro + 20) para conseguir. É relativamente mais fácil se segurar em uma inclinação (DC = CD da inclinação + 10).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 65–66 (PDF pp. 66–67)"
            },
            {
                "title": "Criar apoios",
                "text": "você pode criar seus próprios apoios para as mãos e pés, cravando pítons em um muro. Fazer isso leva 1 minuto por píton, e um píton é necessário por metro. Similar a qualquer superfície com apoios para as mãos e os pés, um muro com pítons terá uma CD de 15. Da mesma forma, um alpinista com um machado de furar gelo ou instrumento similar poderia abrir apoios de mão e de pés em um muro de gelo.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 65–66 (PDF pp. 66–67)"
            },
            {
                "title": "Escalar sob gravidade diferente",
                "text": "Em gravidade baixa, divida as CDs de Escalar pela metade e dobre o movimento de escalada. Em gravidade alta, dobre as CDs e reduza a velocidade de escalada à metade, com mínimo de 1 quadrado.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Climb",
                "sourceLabel": "Knights of the Old Republic Campaign Guide"
            },
            {
                "title": "Condições extremas",
                "text": "Altitude elevada, clima, temperatura e superfícies incomuns exigem equipamento adequado de escalada e sobrevivência. Cada condição extrema aumenta a CD em 5, além dos modificadores normais. Equipamento especializado pode eliminar essas penalidades nas condições para as quais foi feito; normalmente custa o mesmo que um kit de campo.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Climb",
                "sourceLabel": "Force Unleashed Campaign Guide"
            }
        ],
        "description": "Penalidade de Armadura em Testes Use esta perícia para escalar uma montanha, para entrar por uma janela no segundo andar de um prédio, ou escalar uma antena depois de cair do trafego aéreo no fundo de uma cidade flutuante.",
        "rules": "Especial: Alguém usando uma corda pode erguer um personagem (ou descê-lo) por meio da força bruta. Use as regras de carga (ver página 140) para determinar quanto peso um personagem pode levantar.\n\nVocê pode escolher 10 enquanto escala, mas não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 65–66 (PDF pp. 66–67)"
    },
    "furtividade": {
        "page": "Stealth",
        "note": "",
        "uses": [
            {
                "title": "Mover-se furtivamente",
                "text": "Seu teste de Furtividade determina a CD para testes de Percepção feitos para perceber você. Se o teste de Percepção de um oponente igualar ou superar seu teste de Furtividade, seu oponente percebe você.\n\nQualquer circunstância que atrapalhar sua habilidade de passar escondido impõe uma penalidade de -2 em seu teste, enquanto qualquer circunstância favorável concede um bônus de +2. Por exemplo, passar escondido por uma superfície coberta de destroços impõe uma penalidade de -2 em seu teste de Furtividade, enquanto uma sala cheia de lugares para se esconder concede um bônus de +2 em seu teste.\n\nSe você se mover mais que a sua velocidade em determinada rodada, você sofre uma penalidade de -5 em seu teste de Furtividade. Se você se mover o mais que o dobro da sua velocidade em determinada rodada, você sofre uma penalidade de -10 em seu teste de Furtividade.\n\nSeu tamanho providencia um modificador em seus testes de Furtividade: Minúsculo, +20; Diminuto,+15; Miúdo, +10; Pequeno, +5; Médio, +0; Grande, -5; Enorme, -10; Imenso, -15; Colossal, -20.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
            },
            {
                "title": "Esconder objeto",
                "text": "como uma ação padrão você pode tentar esconder um item (como uma arma) em sua pessoa. O item escondido deve ser ao menos uma categoria de tamanho menor que você, e você recebe um modificador em seu teste de perícia baseado no tamanho relativo do objeto: Um tamanho menor, -5; dois tamanhos menor, +0; três tamanhos menor, +5; quatro ou mais tamanhos menor, +10.\n\nOutros personagens podem perceber um objeto escondido com um teste bem sucedido de Percepção (resistido pelo resultado do seu teste de Furtividade), mas somente se você não tiver encobrimento total. Um personagem recebe um bônus de circunstância de +10 em seu teste de Percepção se ele te tocar fisicamente para procurar por itens; isto requer uma ação de rodada completa que somente pode ser executada se você for um alvo disposto a colaborar, imobilizado, ou indefeso.\n\nSacar uma arma escondida é uma ação padrão.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
            },
            {
                "title": "Criar distração para esconder-se",
                "text": "Você pode usar a perícia Enganar (página 64) para te ajudar a ser furtivo. Um teste bem sucedido de Enganar que iguale ou supere a Defesa de Vontade lhe concede a distração momentânea que você precisa para tentar um teste de Furtividade mesmo se as pessoas estiverem conscientes de você. Enquanto os outros desviam a atenção de você, você pode fazer um teste de Furtividade (normalmente, sem penalidade) se você puder alcançar um lugar qualquer para se esconder como uma ação de movimento.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
            },
            {
                "title": "Bater carteira",
                "text": "Com um teste bem sucedido de Furtividade, você pode furtar um objeto pequeno do tamanho da mão de um alvo dentro da sua extensão. Seu teste de Furtividade é resistido pelo teste de Percepção do alvo, e o alvo recebe um bônus de +5. Se você falhar por 4 ou menos, você é incapaz de pegar o item, mas o alvo não percebe a tentativa. Se você falhar por 5 ou mais, você é incapaz de pegar o item e o alvo te pega em flagrante.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
            },
            {
                "title": "Prestidigitação",
                "text": "Você pode empalmar objetos do tamanho da mão, executar truques mágicos, ou tentar executar uma pequena ação sem ser percebido (como apertar um interruptor, tirar o pino de um detonador termal, ou sacar uma arma escondida debaixo de uma mesa). Todos estes esforços são resistidos pelo teste de Percepção. Qualquer observador que bater seu teste de Furtividade percebe a ação que você tentou, e sabe como você fez.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
            },
            {
                "title": "Atirar e esconder-se",
                "text": "Depois de fazer um ataque de uma posição escondida, você pode tentar se esconder de novo. Você deve estar ao menos a 2 quadrados do alvo, e você já deve ter sido bem sucedido em usar Furtividade para se esconder do alvo. Faça um novo teste de Furtividade (normalmente, mas com uma penalidade de -10) como uma ação de movimento. Se você for bem sucedido, você permanece escondido; de outra forma, sua localização é revelada.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
            },
            {
                "title": "Ocultar objetos grandes",
                "text": "Esconder um objeto do seu tamanho ou maior em um cômodo, recipiente ou lugar semelhante exige ação de rodada completa. Percepção contra seu resultado de Furtividade revela o objeto ou indícios dele, mesmo com encobrimento total. Observadores no mesmo quadrado ou em quadrado adjacente ao objeto recebem +10 em Percepção. Recipientes ou locais especializados concedem +5 a +20 de equipamento em Furtividade. É permitido escolher 10, mas não 20.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Stealth",
                "sourceLabel": "Force Unleashed Campaign Guide"
            },
            {
                "title": "Plantar objeto",
                "text": "Faça Furtividade para depositar discretamente um objeto pequeno e oculto, como colocar droga numa bebida ou prender uma escuta na roupa de alguém. Qualquer observador que superar seu teste com Percepção percebe a colocação.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Stealth",
                "sourceLabel": "Scum and Villainy"
            }
        ],
        "description": "Penalidade de Armadura em Testes Use esta perícia para esconder-se e passar por sentinelas sem ser ouvido, pegar seu inimigo com a guarda baixa, atirar de uma posição oculta, ou executar uma prestidigitação.",
        "rules": "Especial: Você pode escolher 10 quando fizer um teste de Furtividade, mas você não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 66–67 (PDF pp. 67–68)"
    },
    "iniciativa": {
        "page": "Initiative",
        "note": "",
        "uses": [
            {
                "title": "Iniciar combate",
                "text": "Um teste de Iniciativa determina a ordem de combate quando uma luta começa. Cada personagem ciente da luta faz um teste de Iniciativa e vão da ordem do mais alto resultado até o mais baixo.\n\nQuando pilotar um veículo em combate, você deve aplicar o modificador de tamanho do veículo em seu teste de Iniciativa (ver Tabela 10-1: Tamanhos de Veículo, página 166).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–67 (PDF pp. 68–68)"
            },
            {
                "title": "Resistir a finta",
                "text": "Quando um oponente tenta fintar em combate, você resiste seu teste de Enganar com um teste de Iniciativa. Se você igualar ou bater o resultado do teste dele, sua tentativa de finta falha.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–67 (PDF pp. 68–68)"
            },
            {
                "title": "Choque de sabres",
                "text": "Regra opcional; requer a aptidão Bloquear. Se o teste de Usar a Força para Bloquear for exatamente igual à rolagem do ataque recebido, o ataque é negado e os sabres ficam travados. Atacante e defensor fazem testes resistidos de Iniciativa. Quem obtiver o maior resultado pode fazer imediatamente um ataque desarmado contra o outro como ação livre; então o choque termina.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Initiative",
                "sourceLabel": "Jedi Academy Training Manual — regra opcional"
            }
        ],
        "description": "Penalidade de Armadura em Testes Use esta perícia para conseguir a vantagem em combate.",
        "rules": "Especial: Você pode escolher 10 em um teste de Iniciativa, mas você não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–67 (PDF pp. 68–68)"
    },
    "mecanica": {
        "page": "Mechanics",
        "note": "",
        "uses": [
            {
                "title": "Ajudar outro",
                "text": "Algumas vezes os heróis individualmente reagem à mesma circunstância, e eles podem agir juntos para se ajudarem. Neste caso, um herói é considerado o líder do esforço e faz um teste de perícia enquanto cada ajudante faz um teste de perícia contra CD 10. (você não pode escolher 10 neste teste.) Para cada ajudante que for bem sucedido, o líder recebe um bônus de circunstância de +2 (como regra para circunstâncias favoráveis). Em muitos casos, a ajuda de um personagem não possibilitará benefícios, ou somente um número limitado de personagens poderão ajudar ao mesmo tempo. O GM limita a cooperação conforme lhe parecer correto para cada circunstância.\n\nPor exemplo, se Kelko foi seriamente ferido, Vor’en Kurn pode tentar um teste de Tratar Ferimento para evitar que ele morra. Um outro personagem pode ajudar Vor’en. Se o outro herói fizer um teste de Tratar Ferimento contra CD 10, então Vor’en recebe um bônus de +2 no teste de Tratar Ferimento que ele faz para ajudar Kelko. O GM determina que dois personagens não podem ajudar Vor’en ao mesmo tempo por que uma terceira pessoa só iria atrapalhar.\n\nCooperação pode não requerer que todos os personagens façam o mesmo teste de perícia. Se Kelko e Deel Surool tentarem encontrar informações sobre um negócio ilegal em um datapad de um Hutt, somente um pode fazer um teste de Usar Computador. Enquanto Kelko checa o datapad, Deel Surool percebe que seu Conhecimento (negócios) pode ser capaz de dar pistas do que procurar. Surool pode fazer um teste de Conhecimento (negócios) CD 10 para conceder a Kelko um bônus de +2 em seu teste de Usar Computador.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Livro PT-BR, pp. 61 e 68 (PDF pp. 62 e 69)"
            },
            {
                "title": "Desativar dispositivo",
                "text": "Você pode usar esta perícia para desabilitar um dispositivo de segurança, desativar uma tranca ou armadilha, ou sabotar um dispositivo para falhar quando for usado. O esforço leva uma ação de rodada completa, e a CD depende da complexidade e complicação do item desativado ou sabotado, como mostrado abaixo: *Se você tentar não deixar rastros da alteração, aumente a CD por 5.\n\nSe o teste de Mecânica falhar por 5 ou mais, algo dá errado. Se for uma armadilha, você a ativa. Se for algum tipo de sabotagem, você acha que o dispositivo está desativado, mas ainda funciona normalmente.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)",
                "requirements": "requer kit de segurança",
                "table": {
                    "caption": "Complexidade do dispositivo",
                    "headers": [
                        "Dispositivo",
                        "CD",
                        "Exemplos"
                    ],
                    "rows": [
                        [
                            "Simples",
                            "15",
                            "Sabotar dispositivo mecânico, emperrar blaster, desativar tranca mecânica básica."
                        ],
                        [
                            "Complicado",
                            "20",
                            "Sabotar dispositivo eletrônico, desativar tranca eletrônica básica."
                        ],
                        [
                            "Complexo",
                            "25",
                            "Desarmar sistema de segurança eletrônico ou desativar tranca mecânica/eletrônica complexa."
                        ]
                    ]
                }
            },
            {
                "title": "Manipular explosivos",
                "text": "Plantar um explosivo para explodir em determinado local não requer um teste, mas conectar e armar sim. E também, plantar um explosivo para efeito máximo contra uma estrutura precisa de um teste, como para desarmar um dispositivo explosivo.\n\nArmar um detonador, plantar um dispositivo explosivo, ou desarmar um dispositivo explosivo é uma ação de rodada completa.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Armar detonador",
                "text": "Muitos explosivos requerem um detonador para disparar a explosão. Conectar um detonador a um explosivo requer um teste de CD 10. Uma falha significa que o explosivo falha em disparar como planejado. Uma falha por 10 ou mais significa que o explosivo dispara enquanto o detonador está sendo instalado.\n\nVocê pode fazer com que um explosivo seja difícil de desarmar. Para tanto, você deve escolher a CD do desarme antes de fazer seu teste para armar o detonador (deve ser maior que 10). Sua CD para armar o detonador é igual a CD do desarme -5. Por exemplo, você pode decidir fazer o desarme ter CD 20. A CD para armar o detonador e desarmar o explosivo se torna 15 (ao invés do 10 normal).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Plantar dispositivo explosivo",
                "text": "Plantar cuidadosamente um explosivo em uma estrutura ou veículo (um objeto inanimado desacompanhado, imóvel) aumenta o dano causado explorando as fraquezas em sua construção. O GM faz o teste (para que então você não saiba exatamente o quão bem você fez). Com um resultado de 15 ou maior, você ignora a redução de dano de qualquer objeto no qual os explosivos estão presos.\n\nCom um resultado de 25 ou maior, o explosivo causa o dobro do dano a estrutura ou veículo contra o qual ele está colocado. Com um resultado de 35 ou maior, ele causa o triplo do dano. Em todos os casos, ele causa dano normal a todos os outros alvos dentro do seu raio de explosão.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Desarmar dispositivo explosivo",
                "text": "Desarmar um explosivo que foi armado para disparar requer um teste. A CD normalmente 15, a menos que quem armou o detonador tenha escolhido uma CD de desarme maior (ver Armar Detonador acima). Se você falhar no teste, você não desarma o explosivo. Se você falhar por 5 ou mais, o explosivo detona enquanto você está adjacente a ele.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)",
                "requirements": "requer um kit de segurança"
            },
            {
                "title": "Reparo improvisado",
                "text": "Você pode fazer reparos temporários em qualquer mecanismo ou dispositivo eletrônico desativado, desde uma simples ferramenta até um complexo componente de nave interestelar. Reparo Improvisado é uma ação de rodada completa e requer um teste bem sucedido CD 25. Se você usar um kit de ferramentas, você recebe um bônus de equipamento de +5 no teste. Um dispositivo com reparos improvisados recebe +2 passos no curso da condição e 1d8 pontos de vida. Ao fim de uma cena ou encontro, o dispositivo com reparos improvisados se move -5 passos ao longo do curso e fica desativado novamente. (ver Condições, pág. 148.)",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Modificar droide",
                "text": "Você pode fazer um teste de Mecânica para modificar um dróide (ver Modificando Dróides, página 197).\n\nUm dróide pode ser modificado para carregar equipamento adicional simplesmente fixando o novo equipamento aos chassis do dróide e conectando o novo componente ao processador do dróide. Adicionar equipamentos aumenta o peso do dróide. Dróides sofrem de penalidades de carga da mesma maneira que personagens orgânicos sofrem: Eles ficam mais lentos. Adicionar, remover, ou substituir os sistemas em um dróide requer um teste de Mecânica, a CD é determinada pelo tipo de sistema.\n\nLocomoção: Teste de Mecânica CD 25, representando 1 dia de trabalho.\n\nProcessador: Teste de Usar Computador CD 20 e teste de Mecânica CD 20, representando 1 dia de trabalho.\n\nApêndice: Teste de Mecânica CD 20, representando 1 hora de trabalho.\n\nAcessório: Teste de Mecânica CD 15, representando 1 hora de trabalho.\n\nFerramenta, Arma, ou Instrumento Instalado sobre um Apêndice: Teste de Mecânica CD 15, representando 10 minutos de trabalho. Você sofre uma penalidade em seu teste de Mecânica quando instalar uma arma em um dróide de 1ª, 2ª, 3ª, ou 5ª categoria.\n\nAuto Modificação: Um dróide pode instalar ou substituir um sistema de locomoção, apêndice, ou acessório em si mesmo, mas ele sofre uma penalidade de -5 em seu teste de Mecânica. Um dróide não pode substituir ou instalar um processador em si mesmo.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69); p. 197 (PDF p. 198)",
                "requirements": "requer kit de ferramentas",
                "table": {
                    "caption": "Modificações de sistemas de droides",
                    "headers": [
                        "Sistema",
                        "Teste",
                        "Trabalho"
                    ],
                    "rows": [
                        [
                            "Locomoção",
                            "Mecânica CD 25",
                            "1 dia"
                        ],
                        [
                            "Processador",
                            "Usar Computador CD 20 e Mecânica CD 20",
                            "1 dia"
                        ],
                        [
                            "Apêndice",
                            "Mecânica CD 20",
                            "1 hora"
                        ],
                        [
                            "Acessório",
                            "Mecânica CD 15",
                            "1 hora"
                        ],
                        [
                            "Ferramenta, arma ou instrumento em apêndice",
                            "Mecânica CD 15",
                            "10 minutos"
                        ]
                    ]
                }
            },
            {
                "title": "Recarregar escudos",
                "text": "Quando agir como o operador de escudo em um veículo ou operar um dispositivo com um valor de escudo, você pode gastar três ações rápidas no mesmo turno ou em turnos consecutivos para fazer um teste de Mecânica CD 20 para recarregar os escudos do veículo.\n\nSe for bem sucedido, você restaura 5 pontos em seu valor de escudo, até no máximo o seu valor máximo normal.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Regular energia",
                "text": "Quando agir como engenheiro em um veículo ou operar um dispositivo, você pode gastar três ações rápidas para fazer um teste de Mecânica CD 20 para regular sua potência. Se você for bem sucedido, o veículo se move +1 passo no curso da condição (ver Condições, página 148).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Reparar",
                "text": "Você pode reparar um dróide ou objeto danificado ou desativado (incluindo dispositivos e veículos). Isto requer ao menos 1 hora de trabalho, e ao fim deste tempo você deve fazer um teste de Mecânica. Somente um personagem pode reparar um determinado dróide ou objeto de cada vez, mas outros personagens podem usar a ação presta auxílio para ajudar (ver página 151).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)",
                "requirements": "requer kit de ferramentas"
            },
            {
                "title": "Reparar droide",
                "text": "Você pode gastar 1 hora e fazer um teste de Mecânica CD 20 para reparar um dróide danificado ou desativado, restaurando seus pontos de vida igual ao nível de personagem do dróide e removendo quaisquer condições persistentes atualmente afetando o dróide. Um dróide pode tentar reparar a si mesmo, mas ele sofre uma penalidade de -5 em seu teste de perícia.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)",
                "requirements": "requer um kit de ferramentas"
            },
            {
                "title": "Reparar objeto",
                "text": "Você pode gastar 1 hora e fazer um teste de Mecânica CD 20 para reparar um objeto danificado ou desativado, restaurando 1d8 pontos de vida e removendo quaisquer condições persistentes atualmente afetando o dispositivo ou veículo. Se você estiver a bordo de um veículo danificado quando você tentar repará-lo, aplique quaisquer penalidades quanto à posição do veículo no curso da condição em seu teste de Mecânica. (maiores reparos em veículos são mais bem tentados em uma garagem, hangar, doca seca, ou outra instalação especializada.)",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
            },
            {
                "title": "Adaptar biotecnologia",
                "text": "Requer kit de ferramentas. Enxertar sensores, comunicações ou computadores pequenos: 1 hora, CD 25. O equipamento passa a admitir Mecânica e Usar Computador como um dispositivo normal; modificações ainda exigem Especialista em Biotecnologia, não Especialista Técnico.\n\nAdicionar função mecânica: 1 hora, CD 30, após o enxerto. Aceita somente um dispositivo do mesmo tamanho ou menor, nunca arma ou armadura. Ele incorpora as funções do dispositivo conectado. O GM limita combinações ao que conexões normais permitem, sem superar equipamentos existentes.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/LECG_Heroic_Traits",
                "sourceLabel": "Legacy Era Campaign Guide"
            },
            {
                "title": "Preparar armadilha",
                "text": "Com kit de ferramentas, ao sabotar equipamento, aumente a CD em 5 por 1d4 de dano desejado. A armadilha ataca o próximo usuário: seu Bônus Base de Ataque contra a Defesa de Reflexos dele. Se acertar, causa o dano definido.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Mechanics",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Construir objeto",
                "text": "Requer kit de ferramentas, materiais e, conforme o objeto, oficina. Não constrói droides. Materiais custam o valor do item pronto; raridade ou distância podem multiplicar esse custo. A aptidão Scavenger pode fornecer materiais.\n\nComece com 0 PV. Determine os PV finais pelas estatísticas de objetos ou do veículo. A cada hora, teste Mecânica contra a complexidade: sucesso acrescenta 1d8 PV à construção. Só funciona quando concluído. O multiplicador de tamanho afeta o trabalho necessário, não os PV finais.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/FUCG_Heroic_Traits",
                "sourceLabel": "Force Unleashed Campaign Guide",
                "tables": [
                    {
                        "caption": "Complexidade",
                        "headers": [
                            "Objeto",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Simples: ferramentas e materiais comuns",
                                "10"
                            ],
                            [
                                "Moderado: eletrônica ou materiais especiais",
                                "25"
                            ],
                            [
                                "Complexo: fabricação avançada e instalações especiais",
                                "40"
                            ]
                        ]
                    },
                    {
                        "caption": "Modificadores cumulativos",
                        "headers": [
                            "Circunstância",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Modelo conhecido",
                                "−5"
                            ],
                            [
                                "Conhecimento detalhado do item",
                                "−10"
                            ],
                            [
                                "Esquemas detalhados disponíveis",
                                "−10"
                            ],
                            [
                                "Materiais ruins",
                                "+10"
                            ]
                        ]
                    },
                    {
                        "caption": "PV para determinar tempo de construção",
                        "headers": [
                            "Tamanho",
                            "Multiplicador"
                        ],
                        "rows": [
                            [
                                "Médio",
                                "×2"
                            ],
                            [
                                "Grande",
                                "×5"
                            ],
                            [
                                "Enorme",
                                "×10"
                            ],
                            [
                                "Imenso",
                                "×20"
                            ],
                            [
                                "Colossal",
                                "×50"
                            ],
                            [
                                "Colossal (fragata)",
                                "×100"
                            ],
                            [
                                "Colossal (cruzador)",
                                "×200"
                            ],
                            [
                                "Colossal (estação)",
                                "×500"
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "Adaptação ambiental",
                "text": "Requer kit de ferramentas. Gaste 10 minutos em um objeto ou 1 hora em um veículo e teste Mecânica. Se superar a Fortitude atual, use o resultado como Fortitude contra temperaturas extremas ou perigos atmosféricos daquele ambiente. Outra condição planetária exige nova adaptação. Escolher 20 é permitido, levando vinte vezes o tempo.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/RECG_Heroic_Traits",
                "sourceLabel": "Rebellion Era Campaign Guide"
            },
            {
                "title": "Sobrecarregar arma",
                "text": "Com kit de ferramentas, gaste 1 hora em uma arma energética: CD 20, +5 por categoria de tamanho acima de Miúdo. Sucesso aumenta o dano em 3. Uma rolagem natural de ataque de 5 ou menos desativa a arma; um 1 a faz explodir, causando seu dano modificado ao portador e metade às criaturas adjacentes.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Mechanics",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Conexão improvisada",
                "text": "Com kit de ferramentas, gaste 1 hora e passe em Mecânica CD 20 para conectar computadores ou aparelhos eletrônicos sem cabos adequados, usando materiais improvisados.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Mechanics",
                "sourceLabel": "Legacy Era Campaign Guide"
            },
            {
                "title": "Modernizar equipamento antigo",
                "text": "Requer kit de ferramentas e materiais valendo 20% do preço-base, antes do modelo Antiquated. Ao terminar, substitua esse modelo por Refitted. Cada dia exige 8 horas contínuas. Divida o tempo pelo número de trabalhadores treinados, até 20, com mínimo de 1 dia.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/LECG_Heroic_Traits",
                "sourceLabel": "Legacy Era Campaign Guide",
                "tables": [
                    {
                        "caption": "Tempo de modernização",
                        "headers": [
                            "Tamanho",
                            "Dias"
                        ],
                        "rows": [
                            [
                                "Médio ou menor",
                                "1"
                            ],
                            [
                                "Grande",
                                "2"
                            ],
                            [
                                "Enorme",
                                "5"
                            ],
                            [
                                "Imenso",
                                "10"
                            ],
                            [
                                "Colossal",
                                "20"
                            ],
                            [
                                "Colossal (fragata)",
                                "60"
                            ],
                            [
                                "Colossal (cruzador)",
                                "180"
                            ],
                            [
                                "Colossal (estação)",
                                "360"
                            ]
                        ]
                    }
                ]
            }
        ],
        "description": "Somente Treinado Você pode desativar trancas e armadilhas, armar e desarmar explosivos, consertar dispositivos defeituosos, e modificar e reparar dróides danificados.",
        "rules": "Re-tentar: você normalmente pode re-tentar um teste de Mecânica.\n\nEm alguns casos específicos, entretanto, um teste mal sucedido de Mecânica tem ramificações negativas que previnem testes repetidos (ver Desativar Dispositivo, acima, por exemplo).\n\nEspecial: Você pode escolher 10 ou escolher 20 em um teste de Mecânica. Quando fizer um teste de Mecânica para completar um reparo improvisado, você não pode escolher 20.\n\nPersonagens que não são treinados na perícia Mecânica ainda podem usar a ação prestar auxílio para ajudar em testes de Mecânica.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 67–68 (PDF pp. 68–69)"
    },
    "montaria": {
        "page": "Ride",
        "note": "",
        "uses": [
            {
                "title": "Cavalgar",
                "text": "As ações típicas de montaria não requerem teste.\n\nVocê pode selar, montar, cavalgar, e desmontar sem problemas. Montar ou desmontar de um animal de um animal é uma ação de movimento.\n\nAlgumas tarefas, como aquelas realizadas em combate ou outras circunstâncias extremas, requerem testes. Além disso, tentar truques de montaria ou convencer o animal a fazer algo fora do normal também requer um teste.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Amortecer queda",
                "text": "Você reage instantaneamente quando você cai de uma montaria, como quando ela morre ou quando ela cai, para tentar evitar o dano. Se você falhar, você sofre 1d6 pontos de dano por queda (ver Dano por Queda, página 255).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Usar montaria como cobertura",
                "text": "Você pode reagir instantaneamente para se abaixar e se pendurar ao lado de sua montaria, usando-a como meia cobertura. Você não pode atacar enquanto estiver usando sua montaria como cobertura. Se você falhar, você não recebe o benefício da cobertura.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Controlar montaria em combate",
                "text": "Como uma ação de movimento, você pode tentar controlar uma montaria enquanto estiver em combate. Se você falhar, você não poderá fazer mais nada nesta rodada. Você não precisa rolar para animais especificamente treinados para batalha.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Guiar com os joelhos",
                "text": "Você pode reagir instantaneamente para guiar sua montaria com seus joelhos para que você possa usar ambas as mãos em combate ou para executar alguma outra ação. Faça o teste no início da sua rodada. Se você falhar, você poderá usar somente uma mão esta rodada por que você precisará usar a outra para controlar sua montaria.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Montar ou desmontar rapidamente",
                "text": "Você pode montar ou desmontar como uma ação rápida. Se você falhar no teste, montar ou desmontar é uma ação de movimento. (Você não pode tentar montar ou desmontar rapidamente a menos que você possa montar ou desmontar como uma ação de movimento esta rodada, o teste falharia.)",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Permanecer na sela",
                "text": "Você pode reagir instantaneamente para tentar evitar cair quando sua montaria empinar ou disparar inesperadamente ou quando você sofrer dano.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            },
            {
                "title": "Saltar com a montaria",
                "text": "Você pode fazer sua montaria saltar obstáculos como parte do seu movimento. Use o modificador da perícia Montar ou o modificador da perícia Saltar da montaria, o que for menor, para ver o quão longe a montaria pode saltar (ver a perícia Saltar, página 68). Um teste de Montar CD 15 é necessário para permanecer na montaria quando ela saltar.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)"
            }
        ],
        "description": "Penalidade de Armadura em Testes Use esta perícia para se locomover sobre qualquer tipo de montaria, tal como os tauntaun, dewback, ou bantha.",
        "rules": "Especial: Você pode escolher 10 quando fizer um teste de Montar, mas você não pode escolher 20.\n\nTempo: Montar é uma ação de movimento, exceto quando descrito de outra forma nas tarefas listadas acima.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 68–69 (PDF pp. 69–70)",
        "tables": [
            {
                "caption": "Tarefas de montaria",
                "headers": [
                    "Tarefa",
                    "CD"
                ],
                "rows": [
                    [
                        "Guiar com os joelhos",
                        "10"
                    ],
                    [
                        "Permanecer na sela",
                        "10"
                    ],
                    [
                        "Usar cobertura",
                        "15"
                    ],
                    [
                        "Amortecer queda",
                        "15"
                    ],
                    [
                        "Saltar",
                        "15"
                    ],
                    [
                        "Controlar montaria em batalha",
                        "20"
                    ],
                    [
                        "Montar ou desmontar rapidamente",
                        "20; aplica penalidade de armadura"
                    ]
                ]
            }
        ]
    },
    "nadar": {
        "page": "Swim",
        "note": "",
        "uses": [
            {
                "title": "Nadar",
                "text": "Um teste bem sucedido de Nadar permite que você nade um quarto da sua velocidade como uma ação de movimento ou metade da sua velocidade como uma ação de rodada completa. Role uma vez por rodada.\n\nSe você falhar, você não consegue avançar pela água. Se você falhar por 5 ou mais, você submerge e deverá segurar seu fôlego (ver a perícia Tolerância, página 66) até você alcançar a superfície obtendo sucesso em um teste de Nadar.\n\nA CD para o teste de Nadar depende da situação:",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–69 (PDF pp. 70–70)",
                "table": {
                    "caption": "Condições da água",
                    "headers": [
                        "Situação",
                        "CD"
                    ],
                    "rows": [
                        [
                            "Águas calmas",
                            "10"
                        ],
                        [
                            "Águas agitadas",
                            "15"
                        ],
                        [
                            "Águas violentas",
                            "20"
                        ]
                    ]
                }
            }
        ],
        "description": "Penalidade de Armadura em Testes Usando esta perícia, uma criatura terrestre pode nadar, mergulhar, navegar por obstáculos subaquáticos, e daí por diante.",
        "rules": "Re-tentar: Um novo teste é permitido na rodada seguinte a uma falha em um teste de Nadar.\n\nEspecial: Você pode escolher 10 quando fizer um teste de Nadar, mas você não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–69 (PDF pp. 70–70)"
    },
    "percepcao": {
        "page": "Perception",
        "uses": [
            {
                "title": "Evitar surpresa",
                "text": "Um teste de Percepção feito no início de uma batalha determina se você estará ou não estará surpreso (ver Surpresa, pág. 149).\n\nUm teste de Percepção feito para evitar surpresa é uma reação.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Escutar conversa",
                "text": "Um teste de Percepção CD 10 permite que você escute às escondidas uma conversa. Você deve ser capaz de entender a linguagem sendo falada. A CD aumenta em 15 em áreas relativamente barulhentas (tal como uma cantina) ou 25 em áreas realmente barulhentas (tal como uma fabrica de dróides). Escutar às escondidas uma conversa é uma ação padrão.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Ouvir ruído",
                "text": "Um teste de Percepção CD 10 permite que você detecte e identifique sons distantes ou ambientes. Escutar ativamente por sons distantes ou ambientes é uma ação padrão.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Notar alvos",
                "text": "Um teste permite que você ouça ou veja outros alvos ou detecte alguém ou alguma coisa se aproximando sorrateiramente por trás de você. Se o alvo estiver tentando ativamente permanecer sem ser detectado, seu teste de Percepção é resistido pelo teste de Furtividade do alvo. Se o alvo não estiver fazendo nenhum esforço especial para evitar a detecção, a CD do teste de Percepção é determinada pelo tamanho do alvo: Colossal, CD -15; Imenso, CD -10; Enorme, CD -5; Grande, CD 0; Médio, CD 5; Pequeno, CD 10; Miúdo, CD 15; Diminuto, CD 20; Minúsculo, CD 25.\n\nPara cada 10 quadrados de distância entre você e o alvo, você sofre uma penalidade de -5 em seu teste de Percepção. Você também sofre uma penalidade de -5 se o alvo tiver encobrimento ou cobertura, ou uma penalidade de -10 se ele tiver encobrimento total ou cobertura total.\n\nDetectar um alvo que entrar em sua linha de visão é uma reação. Procurar ou escutar ativamente por inimigos escondidos (incluindo aqueles com quem você não tem uma linha de visão) é uma ação padrão.\n\nVocê também pode perceber se um personagem possui armas ou objetos escondidos. Faça um teste de Percepção resistido pelo resultado do teste de Furtividade do alvo. Se você vencer o teste resistido, você percebe o objeto escondido. Se você vencer o teste resistido por 5 ou mais, você pode dizer que tipo de objeto está escondido (por exemplo, distinguir uma blaster de um datapad).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Procurar",
                "text": "Você pode examinar cuidadosamente uma área de 1 quadrado ou um volume de produtos de 1 metro cúbico como uma ação de rodada completa. Um teste de Percepção CD 15 permite que você encontre pistas, compartimentos escondidos, portas secretas, armadilhas, irregularidades, e outros detalhes que não estão claramente aparentes dentro desta área. O GM pode aumentar a CD para artigos especialmente obscuros e bem escondidos.\n\nVocê também pode revistar um personagem para encontrar armas ou objetos escondidos. Faça um teste de Percepção resistido pelo resultado do teste de Furtividade do alvo. Se você vencer o teste resistido, você encontra o objeto escondido. Você recebe um bônus de circunstância de +10 em seus testes de Percepção se você tocar fisicamente o alvo para procurar por itens escondidos; isto requer uma ação de rodada completa e pode ser usado somente em um alvo disposto a colaborar, imobilizado, ou indefeso.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Perceber engano",
                "text": "Você pode usar a Percepção para perceber aparências enganosas feitas usando a perícia Enganar. Se o seu teste de igualar ou exceder o resultado do teste de Enganar, você percebe que você está sendo enganado. Seu teste de Percepção para sentir a enganação é uma reação.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Perceber influência",
                "text": "Faça um teste de Percepção para determinar se alguém está sob a influência de um poder da Força de ação mental ou outro método de coerção (assumindo que o efeito não é óbvio). Isto requer uma ação de rodada completa e um teste de CD 20.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)"
            },
            {
                "title": "Observador de longa distância",
                "text": "Requer eletrobinóculos. Você pode prestar auxílio ao ataque de um aliado ou veículo aliado com Percepção CD 10 em vez de uma rolagem de ataque, concedendo o bônus normal de +2. Você precisa ver o alvo pelos eletrobinóculos; ele deve estar a pelo menos 50 quadrados, na escala de personagem, tanto de você quanto do aliado. O aliado precisa ouvir e entender suas orientações.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Perception",
                "sourceLabel": "Clone Wars Campaign Guide"
            },
            {
                "title": "Busca rápida",
                "text": "Como ação de rodada completa, examine uma área de 5 quadrados ou um volume de 5 metros cúbicos para perceber os elementos mais importantes. Faça o teste normal de Procurar com penalidade de −10.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Perception",
                "sourceLabel": "Scum and Villainy"
            }
        ],
        "description": "Use esta perícia para perceber ameaças e seus arredores.\n\nA distância entre você e o que quer que você esteja tentando perceber afeta o seu teste de Percepção, como barreiras sólidas e encobrimento.",
        "rules": "Re-tentar: Você pode fazer um teste de Percepção toda vez que você tiver a oportunidade de perceber alguma coisa como uma reação. Como uma ação rápida, você pode tentar ver ou ouvir alguma coisa que você falhou (ou acreditar que falhou) em perceber antes.\n\nEspecial: Você pode escolher 10 ou escolher 20 quando fizer um teste de Percepção. Escolher 20 significa que você gastou 2 minutos tentando perceber algo que pode ou não estar lá.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 69–70 (PDF pp. 70–71)",
        "note": ""
    },
    "persuasao": {
        "page": "Persuasion",
        "uses": [
            {
                "title": "Mudar atitude",
                "text": "Como uma ação de rodada completa, você pode fazer um teste de Persuasão para ajustar a atitude de uma criatura com uma Inteligência de 2 ou maior usando palavras, linguagem corporal, ou uma combinação dos dois. O alvo deve ser capaz de ver você. Aplique um modificador no teste baseado na atitude atual do alvo em relação a você: hostil -10, pouco amistoso -5, indiferente -2, amistoso +0 (ver Tabela 4-4: Passos da Atitude). Se o teste igualar ou exceder a Defesa de Vontade do alvo, a atitude do alvo muda um passo a seu favor. Se a criatura alvo não entender sua fala, aplique uma penalidade de -5 em seu teste de Persuasão. Você pode tentar mudar a atitude de uma determinada criatura somente uma vez por encontro.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 70–71 (PDF pp. 71–72)"
            },
            {
                "title": "Barganhar",
                "text": "Toda vez que você usar a perícia Reunir Informação, você poderá fazer um teste de Persuasão como uma ação rápida para reduzir pela metade a quantidade que você deve pagar para adquirir a informação que você deseja. Inversamente, você pode usar esta perícia como uma ação de rodada completa para aumentar ou reduzir o preço de venda de um item desejado por 50%. A CD depende da atitude do individuo (ou indivíduos) com quem você está lidando: pouco amistoso CD 30, indiferente CD 25, amistoso CD 20, prestativo CD 15. Você não pode pechinchar com criaturas que são hostis em relação a você ou criaturas que possuem uma Inteligência de 2 ou menor. Não importa o quão habilidoso você é em pechinchar, uma criatura não vai pagar mais por um item que pode ser facilmente obtido em outro lugar pelo preço padrão definido.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 70–71 (PDF pp. 71–72)",
                "table": {
                    "caption": "Pechinchar",
                    "headers": [
                        "Atitude",
                        "CD"
                    ],
                    "rows": [
                        [
                            "Pouco amistoso",
                            "30"
                        ],
                        [
                            "Indiferente",
                            "25"
                        ],
                        [
                            "Amistoso",
                            "20"
                        ],
                        [
                            "Prestativo",
                            "15"
                        ]
                    ]
                }
            },
            {
                "title": "Intimidar",
                "text": "Como uma ação de rodada completa, você pode fazer um teste de Persuasão para forçar uma única criatura com uma Inteligência de 1 ou mais para desistir de uma confrontação, entregar uma das suas possessões, revelar parte de uma informação secreta, ou fugir de você por um curto período de tempo. A criatura deve ser capaz de ver você. O resultado do seu teste deve igualar ou exceder a Defesa de Vontade do alvo para que a tentativa do teste de intimidação seja bem sucedida. Aplique um modificador ao teste baseado na ameaça que o alvo sente vir de você: Você não pode forçar o alvo a obedecer cada comando seu ou fazer alguma coisa que ponha em perigo sua vida ou as vidas dos seus aliados.\n\nUma criatura que você conseguir intimidar se torna um passo mais hostil em relação a você logo que você não for mais considerado por ela uma ameaça iminente (ver Tabela 4-4: Passos da Atitude).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 70–71 (PDF pp. 71–72)",
                "table": {
                    "caption": "Ameaça percebida pelo alvo",
                    "headers": [
                        "Situação",
                        "Modificador"
                    ],
                    "rows": [
                        [
                            "Alvo inofensivo ou completamente à sua mercê",
                            "+5"
                        ],
                        [
                            "Alvo claramente em menor número ou desvantagem",
                            "+0"
                        ],
                        [
                            "Alvo equilibrado com você",
                            "−5"
                        ],
                        [
                            "Você claramente em menor número ou desvantagem",
                            "−10"
                        ],
                        [
                            "Você inofensivo ou completamente à mercê do alvo",
                            "−15"
                        ]
                    ]
                }
            },
            {
                "title": "Subornar",
                "text": "Use Persuasão para conseguir favores de uma autoridade ou pessoa influente. A CD depende do risco para sua posição se o suborno for descoberto, com os ajustes abaixo para perigo pessoal e valor oferecido.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Persuasion",
                "sourceLabel": "Force Unleashed Campaign Guide",
                "tables": [
                    {
                        "caption": "Risco do pedido",
                        "headers": [
                            "Pedido",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Dentro das funções normais da autoridade",
                                "10"
                            ],
                            [
                                "Fora das funções, mas dentro de suas capacidades",
                                "20"
                            ],
                            [
                                "Fora das funções e difícil de esconder",
                                "30"
                            ]
                        ]
                    },
                    {
                        "caption": "Modificadores do suborno",
                        "headers": [
                            "Circunstância",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Pedido pessoalmente perigoso",
                                "+15"
                            ],
                            [
                                "Oferta de duas vezes o valor usual",
                                "−10"
                            ],
                            [
                                "Oferta de quatro vezes o valor usual",
                                "−15"
                            ],
                            [
                                "Oferta de dez vezes o valor usual ou mais",
                                "−20"
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "Comunicação improvisada",
                "text": "Como ação de movimento, transmita um conceito simples por gestos a uma criatura que possa ver você, mesmo sem idioma comum. A CD é 20 menos o modificador de Inteligência do alvo. Sinais previamente combinados para esse conceito reduzem a CD em 5. Exemplos: parar, seguir, ajudar, ficar quieto, pegar ou largar algo. O GM decide se outros conceitos podem ser comunicados assim.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Persuasion",
                "sourceLabel": "Force Unleashed Campaign Guide"
            }
        ],
        "description": "Você pode influenciar outros com sua diplomacia, sutileza, e habilidade social, ou você pode ameaçá-los para serem mais cooperativos.",
        "rules": "Re-tentar: Se você falhar em um teste de Persuasão, você não poderá fazer mais nenhum teste de Persuasão contra a criatura alvo por 24 horas.\n\nEspecial: Você pode escolher 10 em um teste de Persuasão, mas você não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 70–71 (PDF pp. 71–72)",
        "note": "",
        "tables": [
            {
                "caption": "Tabela 4-4: Passos da atitude",
                "headers": [
                    "Atitude",
                    "Descrição"
                ],
                "rows": [
                    [
                        "Hostil",
                        "Assume riscos para ferir você, normalmente atacando de imediato."
                    ],
                    [
                        "Pouco amistoso",
                        "Deseja seu mal, mas não sairá do caminho para ferir você."
                    ],
                    [
                        "Indiferente",
                        "Não considera você ameaça nem aliado; provavelmente não vai atacar."
                    ],
                    [
                        "Amistoso",
                        "Deseja seu bem, mas não assume riscos de vida em seu favor."
                    ],
                    [
                        "Prestativo",
                        "Assume riscos para ajudar você."
                    ]
                ]
            }
        ]
    },
    "pilotar": {
        "page": "Pilot",
        "uses": [
            {
                "title": "Operar veículo",
                "text": "Use está perícia para operar um veículo. A operação básica de um veículo não requer um teste de perícia ou treinamento especial, mas executar manobras evasivas e acrobacias difíceis sim.\n\nToda vez que você fizer um teste de Pilotar, você deve aplicar o modificador de tamanho do veículo ao seu teste (ver Tabela 10-1: Tamanhos de Veículo, página 166).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)"
            },
            {
                "title": "Evitar colisão",
                "text": "Você pode fazer um teste de Pilotar CD 15 como uma reação para reduzir ou negar o dano de uma colisão (ver Evitar Colisão, página 173).\n\nA qualquer hora que o seu veículo estiver sujeito a uma colisão, você pode fazer um teste de Pilotar CD 15 como uma reação. Se você for bem sucedido no teste, todos os alvos envolvidos na colisão sofrem metade do dano (ver Colisões, abaixo, para mais informações).\n\nVocê não pode tentar evitar uma colisão quando você tenta intencionalmente bater contra um alvo (ver Bater, acima).\n\nEscala de Nave Interestelar: Colisões são mais fáceis de serem evitada em escala de nave interestelar. Se você for bem sucedido no teste de Pilotar para evitar uma colisão em escala interestelar, nenhuma colisão ocorre.\n\nUma colisão ocorre toda vez que o seu veículo se move para dentro do espaço ocupado por uma criatura, estrutura, outro veículo, ou uma casualidade (como com um asteróide), ou toda vez que essas coisas se moverem para dentro do espaço de luta do seu veículo. Uma colisão é tratada como um ataque de área (ver Ataques de Área, página 155). Você pode reduzir ou negar o dano de uma colisão como uma reação sendo em sucedido em um teste de Pilotar CD 15 (ver Evitar Colisão, acima). A menos que o veículo não conceda cobertura àqueles a bordo, qualquer dano causado a passageiros e tripulação em uma colisão é reduzido por uma quantidade igual ao limiar de dano do veículo.\n\nBatendo em Veículos: Quando a fonte da colisão é um veículo realizando a manobra bater, o piloto do veículo com a intenção de bater faz um teste de Pilotar (ao invés de uma rolagem de ataque) e compara o resultado com a Defesa de Reflexo do alvo. Se o teste for bem sucedido, o veículo realizando a manobra, o alvo, e todos os passageiros a bordo dos veículos envolvidos na colisão sofrem a quantidade de dano listado na Tabela 10-3: Dano por Colisão. Se o teste falhar, o dano é reduzido pela metade.\n\nCasualidades Móveis: Quando a fonte da colisão é uma casualidade móvel de tamanho Grande ou maior (como um asteróide ou um veículo sem direção), a casualidade que colide faz uma rolagem de ataque contra a Defesa de Reflexo do alvo. A rolagem de ataque da casualidade é resolvida rolando 1d20 e adicionando um modificador invariável baseado no seu tamanho: Grande, +1; Enorme, +2; Imenso, +5; Colossal ou maior, +10. Se o ataque acertar, a casualidade que colide, o alvo, e todos os passageiros a bordo dos veículos envolvidos na colisão sofrem a quantidade de dano listado na Tabela 10-3: Dano por Colisão. Se o ataque falhar, reduza o dano pela metade.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72); p. 173 (PDF p. 174); p. 173 (PDF p. 174)",
                "table": {
                    "caption": "Tabela 10-3: Dano por colisão",
                    "headers": [
                        "Tamanho do veículo ou casualidade que colide",
                        "Dano"
                    ],
                    "rows": [
                        [
                            "Colossal (estação)",
                            "20d6 + modificador de Vig"
                        ],
                        [
                            "Colossal (cruzador)",
                            "15d6 + modificador de Vig"
                        ],
                        [
                            "Colossal (fragata)",
                            "10d6 + modificador de Vig"
                        ],
                        [
                            "Colossal",
                            "8d6 + modificador de Vig"
                        ],
                        [
                            "Imenso",
                            "6d6 + modificador de Vig"
                        ],
                        [
                            "Enorme",
                            "4d6 + modificador de Vig"
                        ],
                        [
                            "Grande",
                            "2d6 + modificador de Vig"
                        ]
                    ]
                }
            },
            {
                "title": "Perseguição (briga de cão)",
                "text": "Quando operar um veículo voador, você pode fazer um teste de Pilotar como uma ação padrão para entrar em uma perseguição (ver Perseguição, página 171).\n\nComo uma ação padrão, o piloto de um airspeeder ou nave interestelar pode iniciar uma perseguição contra um airspeeder ou nave interestelar inimiga em um quadrado adjacente (escala de nave interestelar). Faça um teste de Pilotar com uma penalidade de -5, resistida pelo teste de Pilotar do inimigo. Se você for bem sucedido, você e o veículo alvo se envolvem em uma perseguição.\n\nConseqüências da Perseguição: Um veículo envolvido em uma perseguição deve selecionar a ação de perseguição em todo turno, e ele não pode se mover para fora do seu quadrado atual até que saia da perseguição (ver abaixo). Enquanto estiver envolvido em uma perseguição, você não pode atacar qualquer alvo fora da perseguição.\n\nDisparando para dentro de uma Perseguição: Se outro veículo disparar dentro de uma perseguição, ele sofre uma penalidade de -5 em sua rolagem de ataque a menos que o artilheiro tenha o talento Tiro Preciso.\n\nAtacando em uma Perseguição: Faça um teste de Pilotar resistido como uma ação padrão. Se você vencer o teste resistido, você pode fazer um único ataque com uma arma de veículo como uma ação rápida. Se você falhar, você não pode atacar o alvo, e todos os artilheiros no seu veículo sofrem uma penalidade de -5 em todas as rolagens de ataque que eles fizerem até o próximo turno.\n\nSaindo de uma Perseguição: Faça um teste de Pilotar resistido como uma ação de movimento. Se você vencer o teste resistido você é bem sucedido em sair da perseguição e pode se mover um número de quadrados igual a sua velocidade. Se você falhar, você permanece na perseguição, e todos os artilheiros em seu veículo sofrem uma penalidade de -5 em qualquer rolagem de ataque que eles fizerem até o seu próximo turno.\n\nAtaque de Oportunidade: Se um caça estelar inimigo tentar se mover através do seu quadrado ou de um quadrado adjacente, você pode tentar iniciar uma perseguição como um ataque de oportunidade. Se for bem sucedido, o caça estelar inimigo deve parar de se mover.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72); p. 171 (PDF p. 172)",
                "requirements": "Briga de Cão"
            },
            {
                "title": "Engajar o inimigo",
                "text": "Quando pilotar um veículo em combate, você pode escolher fazer um teste de Pilotar ao invés de um teste de Iniciativa para determinar seu lugar na ordem de Iniciativa.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Aumentar velocidade",
                "text": "Você pode fazer um teste de Pilotar CD 20 como uma ação rápida para fazer seu veículo funcionar além dos seus limites. (Você não pode escolher 10 neste teste.) Se o teste falhar, a velocidade do veículo não aumenta, e o seu veículo se move -1 passo no curso da condição (ver Condições, página 148). Se você for bem sucedido, a velocidade do seu veículo aumenta em 1 quadrado até o início do seu próximo turno. Para cada 5 pontos em que você exceder a CD, a velocidade do veículo aumenta 1 quadrado adicional.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Colidir intencionalmente",
                "text": "Você pode fazer um teste de Pilotar como parte de uma ação de rodada completa para colidir intencionalmente com um alvo (ver Bater, página 172).\n\nComo uma ação de rodada completa, você pode tentar bater contra um alvo movendo seu veículo para dentro do espaço de luta do alvo. Você deve ter movimento o suficiente para alcançar o espaço de luta do alvo, e a batida é tratada como um efeito de área. Você pode usar seu veículo para bater em quase qualquer coisa, incluindo outro veículo, uma criatura, ou uma estrutura.\n\nFaça um teste de Pilotar com uma penalidade de -10 contra a Defesa de Reflexo do alvo. Se o teste for bem sucedido, seu veículo, o alvo, e todos os passageiros a bordo dos veículos envolvidos na colisão (incluindo você) sofrem a quantidade de dano listado na Tabela 10-3: Dano por Colisão. Assumindo que você está vivo e consciente, você pode continuar se movendo através do espaço de luta do alvo. Se o seu veículo ainda tiver algum movimento restante. De outra forma, seu veículo é empurrado para fora do espaço de luta do alvo para dentro dos quadrados mais próximos possíveis, e seu turno termina.\n\nSe o seu teste de Pilotar falhar, seu veículo, o alvo, e todos os passageiros a bordo dos veículos envolvidos na colisão (incluindo você) sofrem metade do dano. Além disso, seu veículo é empurrado para fora do espaço de luta do alvo para dentro dos quadrados mais próximos possíveis, e neste ponto seu turno termina.\n\nMovimento Total: Se o veículo que bater estiver fazendo movimento total ou estiver se movendo na velocidade máxima (ver Movimento Total, acima), dobre o dano causado pela colisão.\n\nEvasão Veicular: Se você possuir a aptidão Evasão Veicular (página 207), você pode reduzir ou negar o dano que o seu veículo e seus passageiros sofrem quando batidos por outro veículo.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72); p. 172 (PDF p. 173)",
                "table": {
                    "caption": "Tabela 10-3: Dano por colisão",
                    "headers": [
                        "Tamanho do veículo ou casualidade que colide",
                        "Dano"
                    ],
                    "rows": [
                        [
                            "Colossal (estação)",
                            "20d6 + modificador de Vig"
                        ],
                        [
                            "Colossal (cruzador)",
                            "15d6 + modificador de Vig"
                        ],
                        [
                            "Colossal (fragata)",
                            "10d6 + modificador de Vig"
                        ],
                        [
                            "Colossal",
                            "8d6 + modificador de Vig"
                        ],
                        [
                            "Imenso",
                            "6d6 + modificador de Vig"
                        ],
                        [
                            "Enorme",
                            "4d6 + modificador de Vig"
                        ],
                        [
                            "Grande",
                            "2d6 + modificador de Vig"
                        ]
                    ]
                }
            },
            {
                "title": "Voar casualmente",
                "text": "Ao pilotar nave ou outro veículo, substitua Enganar por Pilotar para criar uma aparência de operação legítima. Isso evita levantar suspeitas, mas ainda pode exigir documentação e conhecimento dos procedimentos pertinentes; não torna códigos de autorização inválidos em códigos válidos.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Pilot",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Furtividade de nave",
                "text": "Como piloto, use Furtividade para ocultar a nave. Some a Destreza do veículo e o modificador de tamanho da tabela; aplique −5 se não for treinado em Pilotar. O resultado é a CD de Usar Computador dos sensores inimigos ou Percepção de observadores comuns.\n\nNormalmente exige cobertura ou encobrimento, como asteroides, naves ou nuvens. Você pode esconder-se junto ao casco de uma nave pelo menos duas categorias maior, se criar uma distração com Enganar e alcançar o casco em uma ação de movimento.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Pilot",
                "sourceLabel": "Starships of the Galaxy",
                "tables": [
                    {
                        "caption": "Tamanho para Furtividade de nave",
                        "headers": [
                            "Veículo",
                            "Modificador"
                        ],
                        "rows": [
                            [
                                "Grande",
                                "−5"
                            ],
                            [
                                "Enorme",
                                "−10"
                            ],
                            [
                                "Imenso",
                                "−15"
                            ],
                            [
                                "Colossal",
                                "−20"
                            ]
                        ]
                    }
                ]
            }
        ],
        "description": "Use está perícia para operar um veículo. A operação básica de um veículo não requer um teste de perícia ou treinamento especial, mas executar manobras evasivas e acrobacias difíceis sim.\n\nToda vez que você fizer um teste de Pilotar, você deve aplicar o modificador de tamanho do veículo ao seu teste (ver Tabela 10-1: Tamanhos de Veículo, página 166).",
        "rules": "Especial: Você pode escolher 10 quando fizer um teste de Pilotar exceto quando estiver tentando aumentar a velocidade de um veículo.\n\nVocê não pode escolher 20 em um teste de Pilotar.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)",
        "note": ""
    },
    "obterInfo": {
        "page": "Gather_Information",
        "note": "",
        "uses": [
            {
                "title": "Notícias e rumores",
                "text": "Artigos importantes dos jornais e noticiários e rumores locais populares podem ser descobertos com um teste de Reunir Informação CD 10. Descobrir os fatos detalhados e não confidenciais de um artigo jornalístico ou determinar a veracidade de um rumor requer um teste de CD 20 e 50 créditos em suborno.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)"
            },
            {
                "title": "Informação secreta",
                "text": "“Informação secreta” inclui qualquer informação indisponível ao publico em geral. Exemplos incluem um relatório confidencial da policia, uma localização secreta, projetos e esquemas militares, procedimento de segurança de instalações, e códigos de acesso a computadores. Descobrir uma parte de informação secreta requer tipicamente um teste de CD 25 e 5.000 créditos em subornos; entretanto, informações que são especialmente difíceis de obter (como os esquemas técnicos da Estrela da Morte) poderiam requerer um teste de perícia com CD 30 ou mais e custar 50.000 créditos ou mais, à vontade do GM. Se o teste falhar em 5 ou mais, alguém percebe que você está fazendo perguntas demais e vai investigar, prender, ou silenciar você.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)"
            },
            {
                "title": "Localizar indivíduo",
                "text": "Faça um teste de Reunir Informação para localizar um individuo específico – ou alguém que você conheça pelo nome ou alguém com a perícia, item, ou informação que você precisa. A CD do teste é igual a 15 se o alvo for relativamente fácil de localizar; se o alvo não for muito conhecido ou se tiver tomado providências para ocultar sua presença e/ou atividades, a CD é igual a 25 e a informação custa 500 créditos em suborno.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)"
            },
            {
                "title": "Analisar informações",
                "text": "Uma vez por dia, reavalie dados obtidos em testes seus ou de outras pessoas. CD 15: fontes confiáveis e completas podem dar +10 de competência; dados duvidosos ou incompletos, −5 a −10. Sucesso acrescenta +10 ao resultado de cada teste original, revelando informações disponíveis nas CDs superiores.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Gather_Information",
                "sourceLabel": "Force Unleashed Campaign Guide"
            },
            {
                "title": "Encontrar trabalho lucrativo",
                "text": "Gaste 1 hora; CD 10 + seu nível. Sucesso encontra trabalho pagando 110% do normal; o GM gera o serviço. Falha por até 5 paga 100%; por 6–10, 90%; a partir de 10, nenhum trabalho. A fonte sobrepõe as duas faixas no valor 10; o GM resolve esse limite.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Gather_Information",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Identificar item",
                "text": "Consulte especialistas: CD 20 revela a função de um item. Cada 5 pontos acima da CD revelam mais um fato ou informação útil. Aplicam-se as limitações normais de Reunir Informação, inclusive tempo e disponibilidade de pessoas adequadas; alguns itens não podem ser identificados dessa forma.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Gather_Information",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Informação rápida",
                "text": "Declare antes de rolar: aumente a CD em 10 para reduzir pela metade o tempo do teste de Reunir Informação. Todas as demais exigências do uso escolhido continuam valendo.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Gather_Information",
                "sourceLabel": "Scum and Villainy"
            }
        ],
        "description": "Use esta perícia para fazer contatos, descobrir novas histórias e rumores locais, e adquirir segredos.",
        "rules": "Especial: Você pode escolher 10 em um teste de Reunir Informação, mas você não pode escolher 20. Um teste bem sucedido de Persuasão pode reduzir o custo monetário de um teste de Reunir Informação (ver a perícia Persuasão, página 71).\n\nAlgumas informações estão além do alcance do teste da perícia Reunir Informação. Por exemplo, personagens procurando por Darth Vader não vão encontrá-lo falando com tribos Ewoks na Lua Floresta de Endor, não importando quantos Ewoks eles questionarem.\n\nTempo: Cada teste de Reunir Informação representa 1d6 horas de tempo falando com informantes, esmiuçando as transmissões de notícias da HoloNet, ou examinando cabines de informação.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–71 (PDF pp. 72–72)"
    },
    "saltar": {
        "page": "Jump",
        "note": "",
        "uses": [
            {
                "title": "Salto em distância",
                "text": "A CD de um salto em distância em corrida é igual a distância a ser pulada (em metros) multiplicada por 3. Por exemplo, pular um buraco de 3 metros de largura (2 quadrados de largura) requer um teste bem sucedido de Saltar CD 9. Se você não conseguir uma corrida de impulsão de ao menos 4 quadrados, a CD é dobrada.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–72 (PDF pp. 72–73)"
            },
            {
                "title": "Salto em altura",
                "text": "A CD de um salto em altura em corrida é igual a distância a ser pulada (em metros) multiplicada por 12. Por exemplo, aterrissar no topo de um parapeito de 1,5 metro de altura (1 quadrado de altura) requer um teste bem sucedido de Saltar CD 18. Se você usar uma vara de altura suficiente para ajudar você a superar a distância, a CD é reduzida a metade. Se você não conseguir uma corrida de impulsão de ao menos 4 quadrados, a CD é dobrada.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–72 (PDF pp. 72–73)"
            },
            {
                "title": "Saltar para baixo",
                "text": "Se você pular intencionalmente de uma altura, você pode tentar um teste de Saltar com CD 15 para sofrer dano de queda como se você tivesse caído de 3 metros (2 quadrados) menos do que você realmente caiu. Para cada 10 pontos que você superar a CD, Você poderá subtrair 3 metros adicionais da queda quando determinar o dano. Se você for bem sucedido neste teste e não sofrer dano, você aterrissa em pé.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–72 (PDF pp. 72–73)"
            }
        ],
        "description": "Penalidade de Armadura em Testes Use esta perícia para saltar por sobre buracos, saltar cercas baixas, ou pular para os galhos mais baixos de uma árvore.",
        "rules": "Especial: Você pode escolher 10 quando fizer um teste de Saltar. Se não houver dano associado a queda, você pode escolher 20. A distância coberta por um salto em distância ou salto em altura conta contra seu movimento máximo em uma rodada; a distância coberta por pular pra baixo não conta.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 71–72 (PDF pp. 72–73)"
    },
    "sobrevivencia": {
        "page": "Survival",
        "uses": [
            {
                "title": "Sobrevivência básica",
                "text": "Uma vez por dia, você pode fazer um teste de Sobrevivência CD 15 para evitar perigos naturais e se manter seguro e alimentado na selva pelas próximas 24 horas. Você pode prover comida e água para uma pessoa adicional para cada 2 pontos em que o resultado do seu teste exceder 10.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 72–73 (PDF pp. 73–74)"
            },
            {
                "title": "Suportar temperaturas extremas",
                "text": "uma vez por dia, você pode fazer um teste de Sobrevivência CD 20 para ignorar os efeitos do frio extremo ou calor extremo pelas próximas 24 horas (ver Temperaturas Extremas, página 254).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 72–73 (PDF pp. 73–74)",
                "requirements": "requer kit de campo"
            },
            {
                "title": "Determinar direção",
                "text": "Como uma ação de rodada completa, você pode descobrir para qual direção é o norte sendo bem sucedido em um teste de Sobrevivência CD 10 (desde que você esteja em algum lugar onde as direções cardeais importem).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 72–73 (PDF pp. 73–74)"
            },
            {
                "title": "Rastrear",
                "text": "Encontrar rastros ou segui-los requer uma ação de rodada completa e um teste bem sucedido de Sobrevivência.\n\nA CD do teste depende da superfície e das circunstâncias dominantes, como determinado. Você deverá fazer outro teste de Sobrevivência toda vez que os rastros se tornarem difíceis de seguir, como quando outros rastros se cruzarem com o que você está seguindo ou quando as circunstâncias dominantes mudarem.\n\nVocê se move na metade da velocidade normal enquanto estiver rastreando. Você pode escolher se mover na sua velocidade normal, mas você sofrerá uma penalidade de -5 em testes de Sobrevivência feitos para seguir rastros.\n\nChão Macio: Qualquer superfície (neve fresca, cinzas espessas, lama) que deixa claras impressões de pegadas.\n\nChão Firme: Qualquer superfície exterior (gramados, campos, bosques) ou superfícies internas excepcionalmente macias ou sujas (chãos empoeirados, carpetes grossos) que podem capturar pegadas da passagem de uma criatura.\n\nChão Duro: Qualquer superfície que não deixa pegadas de maneira nenhuma (rocha lisa, concreto, conveses revestidos de metal).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 72–73 (PDF pp. 73–74)",
                "requirements": "Somente Treinado",
                "tables": [
                    {
                        "caption": "Superfície rastreada",
                        "headers": [
                            "Superfície",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Chão macio",
                                "10"
                            ],
                            [
                                "Chão firme",
                                "20"
                            ],
                            [
                                "Chão duro",
                                "30"
                            ]
                        ]
                    },
                    {
                        "caption": "Modificadores para rastrear",
                        "headers": [
                            "Circunstância",
                            "Modificador da CD"
                        ],
                        "rows": [
                            [
                                "Cada grupo de 3 criaturas rastreadas",
                                "−1"
                            ],
                            [
                                "Cada dia desde que a trilha foi aberta",
                                "+1"
                            ],
                            [
                                "Cada hora de chuva desde que a trilha foi aberta",
                                "+1"
                            ],
                            [
                                "Neve fresca cobrindo a trilha",
                                "+5"
                            ],
                            [
                                "Visibilidade ruim",
                                "+5"
                            ],
                            [
                                "Alvo esconde a trilha e move-se à metade da velocidade",
                                "+5"
                            ],
                            [
                                "Maior criatura: Enorme ou maior",
                                "−10"
                            ],
                            [
                                "Maior criatura: Grande",
                                "−5"
                            ],
                            [
                                "Maior criatura: Médio",
                                "+0"
                            ],
                            [
                                "Maior criatura: Pequeno",
                                "+5"
                            ],
                            [
                                "Maior criatura: Miúdo ou menor",
                                "+10"
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "Criar posição defensiva",
                "text": "Ao parar para descansar, mesmo em área urbana, gaste 10 minutos e passe em Sobrevivência CD 20. Prepare até 20 × 20 quadrados. Você e aliados que dormirem ali não sofrem a penalidade de Percepção para notar alvos. Todas as criaturas sofrem −5 em Furtividade dentro da área; você e aliados recebem +2 de circunstância à Defesa de Reflexos. O efeito termina quando vocês abandonam a posição.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Survival",
                "sourceLabel": "Clone Wars Campaign Guide"
            },
            {
                "title": "Sobrevivência prolongada",
                "text": "Se precisar sobreviver por mais de 48 horas em uma área não civilizada, passe em Sobrevivência CD 20 para encontrar local apropriado para abrigo básico e acampamento. Enquanto usar esse acampamento, reduza em 5 a CD dos testes de Sobrevivência básica.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Survival",
                "sourceLabel": "Force Unleashed Campaign Guide"
            }
        ],
        "description": "Use esta perícia para caçar e sobreviver em ambientes selvagens, guiar um grupo de forma segura através de ermos áridos, identificar sinais de que gundarks vivem por perto, ou para evitar areia movediça e outros perigos naturais.",
        "rules": "Especial: Você pode escolher 10 quando fizer um teste de Sobrevivência.\n\nVocê pode escolher 20 se não perigo ou penalidade em caso de falha, mas levará vinte vezes mais tempo que o normal para tanto.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 72–73 (PDF pp. 73–74)",
        "note": ""
    },
    "resistencia": {
        "page": "Endurance",
        "note": "",
        "uses": [
            {
                "title": "Marcha forçada",
                "text": "Cada hora de caminhada depois de 8 horas requer que você tente um teste de Tolerância CD 10 (+2 por hora depois da primeira). Se você falhar, você se move um passo persistente ao longo do curso da condição (ver Condições, página 148). Você pode remover esta condição persistente somente se você descansar por 8 horas.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            },
            {
                "title": "Prender a respiração",
                "text": "Você pode segurar seu fôlego por um número de rodadas igual ao seu valor de Constituição. Depois deste período de tempo, você deve ser bem sucedido em um teste de Tolerância CD 10 para continuar segurando seu fôlego. A CD aumenta em +2 por rodada adicional. Se você falhar, você deve respirar ou você se moverá -1 passo no curso da condição (ver página 149). Se você alcançar o fundo do curso da condição, você cai desmaiado. Se você ainda for incapaz de respirar em seu próximo turno depois de cair desmaiado, você morre.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            },
            {
                "title": "Suportar fome",
                "text": "Você pode ficar sem comida por um número de dias igual ao seu modificador de Constituição (mínimo de 1 dia). Depois deste tempo, você deve ser bem sucedido em um teste de Tolerância a cada dia ou você se moverá -1 passo persistente ao longo do curso da condição (ver página 149). Você pode remover esta condição persistente somente se você comer uma refeição nutritiva. A CD é igual a 10 no primeiro dia e aumenta por +2 a cada dia seguinte.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            },
            {
                "title": "Suportar sede",
                "text": "Você pode ficar sem água por um número de dias igual a três vezes seu modificador de Constituição. Depois deste tempo, você deve ser bem sucedido em um teste de Tolerância a cada hora ou você se moverá -1 passo persistente ao longo do curso da condição (ver página 149). Você pode remover esta condição persistente somente se você beber ao menos 1 litro de água, para criaturas que não são do tamanho Médio, multiplique a água necessária por 10 para cada categoria de tamanho acima de Médio ou divida-a por 10 para cada categoria de tamanho abaixo de Médio. A CD é igual a 10 no primeiro dia e aumenta por +2 a cada dia seguinte.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            },
            {
                "title": "Correr",
                "text": "Você pode correr como uma ação de rodada completa. Quando você correr, você pode se mover até quatro vezes sua velocidade em uma linha reta (ou três vezes sua velocidade em uma linha reta se você estiver usando armadura pesada ou carregando uma carga pesada). Você perde qualquer bônus de Destreza em sua Defesa de Reflexo enquanto você estiver correndo, já que você não poderá evitar ataques ativamente.\n\nVocê pode correr por um número de rodadas igual ao seu valor de Constituição sem quaisquer problemas. Se você quiser continuar correndo depois disso, você deve ser em sucedido em um teste de Tolerância CD 10. Você deve fazer um teste novamente a cada rodada em que você continuar correndo, e a CD do teste de Tolerância aumenta em 1 para cada teste anterior que você tenha feito. Quando você falhar em um teste, você se move -1 passo persistente (ver Condições, página 148). Você pode remover esta condição persistente somente descansando pelo mesmo período de tempo em que você esteve correndo. Durante este período de descanso, você poderá somente se mover em sua velocidade normal.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            },
            {
                "title": "Dormir de armadura",
                "text": "Você pode dormir enquanto estiver usando armadura sendo bem sucedido em um teste de Tolerância (CD 10 para armadura leve, CD 15 para armadura média, e CD 20 para armadura pesada). Se você falhar, você não dorme e se move -1 passo persistente ao longo do curso da condição (ver página 149). Você pode remover esta condição persistente somente dormindo por 8 horas.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            },
            {
                "title": "Nadar por longos períodos",
                "text": "Cada hora que você nadar, você deve ser bem sucedido em um teste de Tolerância CD 15 ou se mover -1 passo persistente ao longo do curso da condição (ver página 149). Você pode remover esta condição persistente somente descansando (sem nadar ou boiar na água) pelo mesmo período de tempo que você esteve nadando. Cada hora consecutiva de natação aumenta a CD por +2. S você estiver somente boiando na água, reduza a CD por 5.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
            }
        ],
        "description": "Penalidade de Armadura em Testes Você pode se esforçar além dos seus limites físicos normais.",
        "rules": "",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 73–74 (PDF pp. 74–75)"
    },
    "primeiros": {
        "page": "Treat_Injury",
        "uses": [
            {
                "title": "Primeiros socorros",
                "text": "Como uma ação de rodada completa, você pode administrar os primeiros socorros em uma criatura desmaiada ou ferida. Se você for bem sucedido em um teste de Tratar Ferimento CD 15, a criatura recupera um número de pontos de vida igual ao nível de personagem dela, +1 para cada ponto em que o resultado do seu teste exceder a CD. Usar um kit de medicina concede um bônus de equipamento de +2 em seu teste de perícia. Se o teste de perícia for bem sucedido, a criatura tratada não poderá se beneficiar de primeiros socorros adicionais por 24 horas.\n\nVocê pode administrar os primeiros socorros em si mesmo, mas você sofre uma penalidade de-5 em seu teste de Tratar Ferimento.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
                "requirements": "requer um medpac"
            },
            {
                "title": "Cuidados prolongados",
                "text": "Se você tratar de uma criatura por 8 horas consecutivas, esta criatura recupera pontos de vida igual ao nível de personagem dela além daqueles recuperados através da cura natural (ver Cura Natural, página 148). Uma criatura pode se beneficiar de cuidados à longo prazo somente uma vez a cada período de 24 horas. Você pode tratar uma criatura de cada vez se não for treinado, ou até seis simultaneamente se for treinado. Você não pode dar cuidados à longo prazo a si mesmo.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)"
            },
            {
                "title": "Cirurgia",
                "text": "Você pode realizar cirurgia para curar os danos a uma criatura ferida, remover uma condição persistente, ou instalar uma prótese cibernética (ver página 137). Qualquer uma destas operações requer 1 hora de trabalho ininterrupto, e ao fim deste tempo você deve fazer um teste de Tratar Ferimento. Se você falhar no seu teste, a cirurgia não concede nenhum benefício (mas quaisquer recursos usados ainda serão perdidos). Além disso, se você falhar no seu teste por 5 ou mais, a criatura sofre dano igual ao seu limiar de dano. Se este dano reduzir os pontos de vida da criatura a 0, ela morre (ver 0 Pontos de Vida, página 146).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
                "requirements": "Somente Treinado; requer um kit de cirurgia"
            },
            {
                "title": "Cirurgia: curar dano",
                "text": "Você pode fazer um teste de Tratar Ferimento CD 20 para realizar uma cirurgia em uma criatura ferida, curando uma quantidade de dano igual ao bônus de Constituição da criatura (mínimo 1) × o nível da criatura. Se você falhar no teste, a criatura sofre dano igual ao limiar de dano dela. Se a criatura já estava com 0 pontos de vida, ela morre a menos que ela possa gastar um Ponto de Força para se salvar (ver página 93). Você pode realizar uma cirurgia em si mesmo para curar dano, mas você sofre uma penalidade de -5 em seu teste de perícia. Realizar cirurgia para curar dano também remove quaisquer condições persistentes afligindo o alvo.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)"
            },
            {
                "title": "Instalar prótese cibernética",
                "text": "Você deve ter o talento Cirurgia Cibernética (ver página 83) para instalar uma prótese cibernética em um ser vivo. Ao fim do procedimento, faça um teste de Tratar Ferimento CD 20. Se o teste for bem sucedido, a prótese estará instalada propriamente.\n\nSe o teste falhar, a prótese não estará; entretanto, você poderá tentar de novo após outra hora ininterrupta de cirurgia. Você pode instalar uma prótese cibernética em si mesmo, mas você sofre uma penalidade de -5 em seu teste de perícia.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)"
            },
            {
                "title": "Reanimar",
                "text": "Como uma ação de rodada completa, você pode reviver uma criatura que acabou de morrer. Você deve alcançar a criatura morta dentro de 1 rodada de sua morte para revivê-la, e você deve ser bem sucedido em um teste de Tratar Ferimento CD 25. Usar um medpac concede um bônus de equipamento de +2 no teste de perícia. Se o teste for bem sucedido, a criatura fica desmaiada ao invés de morta. Se o teste falhar, você será incapaz de reviver a criatura.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
                "requirements": "Somente Treinado; requer um kit de medicina"
            },
            {
                "title": "Tratar doença",
                "text": "Tratar um personagem doente requer 8 horas. Ao fim deste tempo, faça um teste de Tratar Ferimento contra a CD da doença (ver Doença, página 254). Se o teste for bem sucedido, o paciente estará curado e não mais sofrerá quaisquer efeitos da doença (incluindo condições persistentes causadas pela doença). Você pode tratar uma criatura de cada vez se não for treinado, ou até seis simultaneamente se for treinado.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
                "requirements": "Somente Treinado; requer um kit de medicina"
            },
            {
                "title": "Tratar veneno",
                "text": "Como uma ação de rodada completa, você pode tratar um personagem envenenado. Faça um teste de Tratar Ferimento; se o resultado igualar ou exceder a CD do veneno (ver Veneno, página 255), você é bem sucedido em desintoxicar o veneno do sistema do personagem e o paciente não mais sofrerá quaisquer efeitos da doença (incluindo condições persistentes causadas pelo veneno).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
                "requirements": "Somente Treinado; requer um kit de medicina"
            },
            {
                "title": "Tratar radiação",
                "text": "Tratar um personagem irradiado requer 8 horas. Ao fim deste tempo, faça um teste de Tratar Ferimento contra a CD da radiação (ver Radiação, página 255). Se o teste for bem sucedido, o paciente estará curado e não mais sofrerá quaisquer efeitos da radiação (incluindo condições persistentes causadas pela radiação). Você pode tratar uma criatura de cada vez se não for treinado, ou até seis simultaneamente se for treinado.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
                "requirements": "Somente Treinado; requer um kit de medicina"
            },
            {
                "title": "Reparo biotecnológico",
                "text": "Requer kit de ferramentas biotecnológicas. Em criaturas bioengenheiradas ou dispositivos vivos, aplique Primeiros socorros, Cirurgia, Reanimar, Tratar doença, Tratar veneno ou Tratar radiação com os testes e tempos correspondentes. Sofra −5 nos testes de reparo, salvo se tiver Especialista em Biotecnologia.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Treat_Injury",
                "sourceLabel": "Legacy Era Campaign Guide"
            },
            {
                "title": "Remendo temporário",
                "text": "Em dispositivo biotecnológico ou veículo vivo danificado ou desativado, gaste uma rodada completa e passe em Tratar Ferimento CD 20. Sem Especialista em Biotecnologia, aplique −5; kit biotecnológico concede +5 de equipamento. Sucesso restaura 1d8 PV e +2 passos na condição. Ao fim da cena ou encontro, perde 5 passos e fica desativado.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Treat_Injury",
                "sourceLabel": "Legacy Era Campaign Guide"
            },
            {
                "title": "Cuidados críticos",
                "text": "Requer medpac e kit cirúrgico. Gaste 1 minuto e um medpac; CD 20. Sucesso recupera PV iguais ao nível do paciente, mais o excedente da CD, permitindo tratamentos adicionais em 24 horas. Cada tentativa anterior, mesmo falha, impõe −5. Falha causa overdose: dano igual ao limiar do paciente; se chegar a 0 PV, morre, salvo gasto de Ponto de Força para salvar-se. Você pode tratar a si mesmo, com penalidade adicional de −5.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Jedi_Counseling",
                "sourceLabel": "Dawn of Defiance — The Gem of Alderaan; Jedi Counseling — regra opcional"
            }
        ],
        "description": "Use esta perícia para evitar que um amigo gravemente ferido morra, para curar os feridos, ou para tratar um personagem doente ou envenenado.",
        "rules": "Especial: Você pode escolher 10 quando fizer um teste de Tratar Ferimento, mas você não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 74–75 (PDF pp. 75–76)",
        "note": ""
    },
    "usarForca": {
        "page": "Use_the_Force",
        "note": "",
        "uses": [
            {
                "title": "Ativar poder da Força",
                "text": "Você faz um teste de Usar a Força para usar um poder da Força (ver Poderes da Força, página 95). Este uso da perícia não requer ação.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Transe da Força",
                "text": "Como uma ação de rodada completa, você pode entrar em um transe da Força com um teste de Usar a Força CD 10. Neste estado, você permanece totalmente consciente dos seus arredores. A cada hora que você permanecer no transe, você recupera um número de pontos de vida igual ao seu nível de personagem. Você pode voltar do transe como uma ação rápida. Se você permanecer em um transe da Força por 4 horas consecutivas, você volta do transe totalmente descansado (como se você estivesse descansado por 8 horas).\n\nEnquanto você estiver em um transe da Força, você pode continuar 10 vezes mais tempo que o normal sem comida ou água (ver a perícia Tolerância, página 66).",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Mover objeto leve",
                "text": "Como uma ação de movimento, você pode usar a Força para levantar e mover telecineticamente um objeto relativamente leve em sua linha de visão. Um teste de Usar a Força CD 10 permite que você mova um objeto pesando até 5 quilos por uma distância de 6 quadrados em qualquer direção. Como uma ação padrão, você pode usar o objeto como uma arma de disparo, mas a CD aumenta em 15. Se o seu teste de Usar a Força bater Defesa de Reflexo do alvo, o objeto acerta e causa 1d6 pontos de dano de concussão.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Consultar sentimentos",
                "text": "Como uma ação de rodada completa, você pode fazer um teste de Usar a Força CD 15 para determinar se uma ação em particular irá render resultados favoráveis ou desfavoráveis para você em um futuro imediato (10 minutos ou menos). Por exemplo, você pode fazer o teste para determinar se destruir um artefato do lado sombrio terá repercussões imediatas imprevistas. A resposta não leva em conta as conseqüências à longo prazo de uma ação prevista. Usando o exemplo acima, um teste bem sucedido não preveria um futuro encontro com integrantes vingativos do lado sombrio enfurecidos com a destruição do artefato do lado sombrio. (O GM deve avaliar as conseqüências imediatas da ação, baseado no que ele sabe sobre as circunstâncias.)",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)"
            },
            {
                "title": "Sentir a Força",
                "text": "Você automaticamente sente perturbações na Força. Uma localidade em que o lado sombrio da Força é poderoso pode ser sentido em um raio de 1 quilômetro, um parente, companheiro, ou amigo próximo em perigo mortal ou em grande dor pode ser sentido em um raio de 10.000 anos luz. Um grande distúrbio, como a destruição de um planeta inteiramente habitado ou a angústia de uma ordem inteira de aliados, pode ser sentido em qualquer lugar na mesma galáxia.\n\nComo uma ação de rodada completa, você pode fazer um teste de Usar a Força para determinar a distância e a direção geral da localidade da perturbação.\n\nComo uma ação de rodada completa, você pode usar esta habilidade para sentir ativamente outros usuários da Força dentro de um raio de 100 quilômetros. Se você for bem sucedido em um teste de Usar a Força CD 15, você sabe quantos usuários da Força estão dentro do raio, sua distância aproximada e a direção deles em relação a você, e se você já os encontrou antes ou não. Outro usuário dentro do raio pode tentar ocultar sua própria presença de você fazendo um teste resistido de Usar a Força. Se ele igualar ou exceder seu teste de Usar a Força, você definitivamente não sente sua presença.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Sentir arredores",
                "text": "Como uma ação rápida, você pode fazer um teste de Usar a Força CD 15 para ignorar os efeitos da cobertura e encobrimento quando fizer testes de Percepção para detectar ou observar alvos. Aumente a CD por 5 se esta habilidade for usada contra alvos com cobertura total.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)"
            },
            {
                "title": "Telepatia",
                "text": "Como uma ação padrão, você pode estabelecer uma ligação telepática com uma criatura distante. Através da ligação, você pode trocar emoções ou um simples pensamento, como “Vai!”, “Ajuda!”, ou “Perigo!” o alvo deve ter uma Inteligência de 2 ou mais, e a distância entre você e o alvo determina a CD (ver abaixo). Contra um alvo que não estiver disposto a colaborar, você deve fazer um teste de Usar a Força contra a Defesa de Vontade do alvo; se o teste falhar, você não pode estabelecer uma ligação telepaticamente ou tentar um contato telepático com o alvo por 24 horas a menos que o alvo torne-se disposto a colaborar.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)",
                "table": {
                    "caption": "Distância da telepatia",
                    "headers": [
                        "Distância",
                        "CD"
                    ],
                    "rows": [
                        [
                            "Mesmo planeta",
                            "15"
                        ],
                        [
                            "Mesmo sistema",
                            "20"
                        ],
                        [
                            "Mesma região/quadrante da galáxia",
                            "25"
                        ],
                        [
                            "Região/quadrante diferente da galáxia",
                            "30"
                        ]
                    ]
                }
            },
            {
                "title": "Controlar respiração",
                "text": "Usar a Força CD 15 permite ficar sem respirar por um número de rodadas igual a duas vezes seu valor de Constituição. Depois disso, faça os testes normais de Tolerância para continuar prendendo o fôlego.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_the_Force",
                "sourceLabel": "Knights of the Old Republic Campaign Guide"
            },
            {
                "title": "Colocar outro em transe",
                "text": "Como ação de rodada completa, toque um aliado adjacente e voluntário e passe em Usar a Força CD 15. Ele fica indefeso, como em coma; recupera PV iguais ao seu próprio nível por hora e descansa completamente após 4 horas. Pode passar dez vezes o tempo normal sem ar, comida ou água. Ele não pode sair por vontade própria: você deve tocá-lo, adjacente, e gastar uma ação rápida para despertá-lo. Alvos involuntários não podem ser colocados nesse transe.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_the_Force",
                "sourceLabel": "Clone Wars Campaign Guide"
            },
            {
                "title": "Interceptar objeto arremessado",
                "text": "Prepare a ação no seu turno, antes do arremesso. O objeto deve cair ao seu alcance e pesar no máximo 5 kg. Teste Usar a Força contra a rolagem de ataque da arma arremessada. Sucesso apanha e move o objeto até 6 quadrados; falha resolve o ataque normalmente. Um explosivo detona no fim do movimento. Também é possível usar o objeto como projétil, conforme Mover objeto leve.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/JATM_Power_of_the_Force",
                "sourceLabel": "Jedi Academy Training Manual"
            },
            {
                "title": "Sentir Yuuzhan Vong nos arredores",
                "text": "Como ação rápida, Usar a Força CD 30 permite aplicar Sentir arredores a alvos Yuuzhan Vong. Ignora cobertura e encobrimento ao detectá-los com Percepção até o início do próximo turno; cobertura total aumenta a CD em 5.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_the_Force",
                "sourceLabel": "Legacy Era Campaign Guide"
            },
            {
                "title": "Sentir presença de Yuuzhan Vong",
                "text": "Como ação padrão, Usar a Força CD 20 revela quantos Yuuzhan Vong estão a até 1 quilômetro. A biotecnologia deles impede Mover objeto leve, salvo adaptação tecnológica. Telepatia não funciona com eles, mesmo voluntários.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/LECG_Heroic_Traits",
                "sourceLabel": "Legacy Era Campaign Guide"
            }
        ],
        "description": "Requer o talento Sensitividade da Força Você invoca a Força para te ajudar a se recuperar de ferimentos, conseguir uma perspicácia especial, ou realizar outros atos incríveis. Você deve ter o talento Sensitividade da Força (página 85) para ser treinado nesta perícia.",
        "rules": "Especial: Você não pode fazer teste de Usar a Força a menos que você possua o talento Sensitividade da Força (ver página 85). Usar a Força é uma perícia de classe para qualquer personagem com o talento Sensitividade da Força.\n\nVocê pode escolher 10 em um teste de Usar a Força, mas você não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 75–76 (PDF pp. 76–77)"
    },
    "usarComputador": {
        "page": "Use_Computer",
        "uses": [
            {
                "title": "Acessar informações",
                "text": "Conseguir informação através de um computador requer que você se conecte com a rede apropriada (como a HoloNet, ou sua equivalente em outras eras) e localizar os arquivos que você procura. Conectar-se a uma rede (uma ação de rodada completa) não requer um teste de perícia se você usar um computador que já está conectado a ela. Entretanto, estabelecer uma conexão a uma rede usando um computador remoto requer um teste de Usar Computador CD 10. Você também pode conseguir informação sem se conectar a uma rede se você usar um computador cuja memória contenha esta informação; o GM decide que informação a memória de um computador vai realmente conter.\n\nEncontrar informação sobre um único assunto requer uma determinada quantidade de tempo (ver abaixo); ao fim deste tempo, você deve fazer um teste de Usar Computador. O tempo necessário e a CD do teste são determinados pelo tipo de informação procurada. Por exemplo, localizar informações comuns sobre um senador é mais fácil que localizar informações específicas (como por exemplo, a data de nascimento do senador), que é mais fácil que achar informações privadas (como por exemplo, o código do canal de comunicação privado do senador), que é mais fácil que descobrir informações secretas (como por exemplo, o código do cred stick do senador).",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78)",
                "requirements": "requer que a atitude do computador seja de\nindiferente para melhor",
                "table": {
                    "caption": "Informações em computadores",
                    "headers": [
                        "Informação",
                        "CD",
                        "Tempo necessário"
                    ],
                    "rows": [
                        [
                            "Comum",
                            "15",
                            "1 minuto (10 rodadas)"
                        ],
                        [
                            "Específica",
                            "20",
                            "10 minutos"
                        ],
                        [
                            "Privada",
                            "25",
                            "1 hora"
                        ],
                        [
                            "Secreta; exige computador prestativo",
                            "30",
                            "1 dia (8 horas)"
                        ]
                    ]
                }
            },
            {
                "title": "Astrogação",
                "text": "Você pode planejar um curso seguro através do hiperespaço. Fazer isso normalmente leva 1 minuto, e ao fim do deste tempo você deve ser bem sucedido em um teste de Usar Computador. Vários fatores influenciam a CD do teste (ver Astronavegação, página 237).\n\nMover-se de uma determinada localização para um destino desejado através do hiperespaço requer um teste de Usar Computador bem sucedido.\n\nPelo motivo de todos os objetos na galáxia estarem em constante movimento, o caminho preciso entre duas localizações muda de um dia pro outro. Se o astronavegador usa os dados atuais (um dia desatualizado no máximo), ele pode traçar um curso seguro. Fazê-lo leva 1 minuto e requer um teste bem sucedido de Usar Computador CD 10.\n\nSe um astronavegador não tem dados com os quais traçar um salto através do hiperespaço, a CD base do teste de Usar Computador é 30, e o astronavegador precisa gastar 1 hora calculando as coordenadas e vetores antes de tentar o teste.\n\nComo regra geral, os dados para uma rota em particular através do hiperespaço está disponível para qualquer um com acesso a HoloNet – embora estes dados possam estar desatualizados se a rota em questão não é freqüentemente usada por outras naves.\n\nCertas situações ou circunstâncias também podem modificar o teste, como mostrado na Tabela 13-1: Modificadores de CD para Astronavegação. A falta de um computador de navegação (ou, falhando este, um dróide astromecânico com as coordenadas armazenadas) torna a tarefa muito mais difícil. Se não perder tempo for importante, o astronavegador pode realizar um teste como uma ação de rodada completa sofrendo uma penalidade de -10 em seu teste de Usar Computador.\n\nSe o teste de Usar Computador for bem sucedido, a nave interestelar entra no hiperespaço sem incidentes e chega a seu destino em um número de dias igual a 1d6 × o multiplicador de hiperdrive da nave.\n\nUm teste de Usar Computador mal sucedido indica que o astronavegador cometeu um erro potencialmente perigoso em seus cálculos. Faça outro teste de Usar Computador usando os mesmo modificadores e contra a mesma CD. Se este segundo teste de Usar Computador for bem sucedido, o erro é percebido antes de entrar no hiperespaço, e o processo de traçar um curso deve ser iniciado de novo. Se este segundo teste de Usar Computador falhar, a nave interestelar se move -1 passo no curso da condição (ver Condições, página 148) e sofre um dano igual a 5% de seus pontos de vida totais por cada ponto no qual ele falhou no teste. (A condição persistente e o dano permanecem até a nave ser submetida à manutenção.) Se a nave não estiver desativada ou destruída, ela chega ao destino pretendido no dobro do tempo de viagem previsto. Se a nave estiver desativada, ela sairá do hiperespaço num local aleatório em algum lugar entre o ponto de origem e o de destino (a localização exata é determinada pelo GM).\n\nNão aplique a penalidade se a nave possui dados de astronavegação atual armazenada em um dróide astromecânico ou se receber dados transmitidos de outra nave.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78); p. 237 (PDF p. 238)",
                "requirements": "Somente Treinado",
                "table": {
                    "caption": "Tabela 13-1: Modificadores de astronavegação",
                    "headers": [
                        "Situação",
                        "Modificador do teste"
                    ],
                    "rows": [
                        [
                            "Usando computador de navegação",
                            "+5"
                        ],
                        [
                            "Sem utilização de computador de navegação",
                            "−10"
                        ],
                        [
                            "Sem acesso a HoloNet",
                            "−5"
                        ],
                        [
                            "Tentativa de fazer o teste em uma rodada",
                            "−10"
                        ]
                    ]
                }
            },
            {
                "title": "Desativar ou apagar programa",
                "text": "Você pode desativar ou apagar um programa em um computador que seja prestativo em relação a você (Ver Tabela 4-5: Passos da Atitude do Computador). Desativar ou apagar um programa leva 10 minutos e requer um teste de Usar Computador CD 15.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78)",
                "requirements": "Somente Treinado; a atitude do\ncomputador deve ser prestativa"
            },
            {
                "title": "Melhorar acesso",
                "text": "Como uma ação de rodada completa, você pode fazer um teste de Usar Computador para ajustar a atitude de um computador para conseguir acesso aos seus programas e informações. Você deve ser capaz de se comunicar com o computador através de uma interface direta (como um teclado) ou conectando-se a ele através de uma rede apropriada (como a HoloNet). Aplique um modificador ao teste baseado na atitude atual do computador em relação a você: hostil -10, pouco amistoso -5, indiferente -2, amistoso +0 (ver Tabela 4-5: Passos da Atitude do Computador). Se o teste igualar ou exceder a Defesa de Vontade do computador, a atitude do computador muda um passo em seu favor. Se você falhar por 5 ou mais, o computador se torna um passo pior (por exemplo, de indiferente para pouco amistoso) e o computador notifica o administrador do computador sobre a tentativa de acesso.\n\nUm computador hostil pode ser perigoso. Se um computador se tornar hostil ou se você falhar em qualquer teste de Usar Computador feito para melhorar o acesso a um computador hostil, ele rastreia sua localização exata e notifica o pessoal de segurança mais próximo. Além disso, se você falhar por 5 ou mais quando tentar melhorar o acesso a um computador hostil, ele isola sua conexão e rejeita qualquer outra tentativa sua de acesso por 24 horas.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78)",
                "requirements": "Somente Treinado"
            },
            {
                "title": "Comando rotineiro",
                "text": "Como uma ação padrão, você pode emitir um comando de rotina para um computador. Exemplos incluem ligar ou desligar um computador, ver e editar documentos ou gravações em sua memória, imprimir uma cópia de um documento ou uma imagem em uma folha de flimsiplástico abrir ou fechar portas que o computador controla, etc.\n\nEmitir comandos de rotina normalmente não requer testes de Usar Computador. Entretanto, se outro personagem emitir um comando contraditório, o computador segue o comando do personagem com quem ele tem a melhor atitude (por exemplo, ele seguirá o comando de alguém com quem ele é prestativo ao invés de alguém com quem ele é amistoso). Se o computador tem a mesma atitude em relação a ambos os personagens, faça um teste resistido de Usar Computador contra o personagem adversário. Se você for bem sucedido, seu comando tem efeito. Se você falhar, o comando do personagem adversário tem efeito.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78)",
                "requirements": "requer que a atitude do computador\nseja amistosa ou melhor"
            },
            {
                "title": "Reprogramar droide",
                "text": "Você pode fazer um teste para reprogramar um dróide para obedecer a um novo mestre, copiar dados armazenados em seu banco de memória, mudar suas perícias treinadas, apagar memórias seletivamente, ou apagar sua memória inteiramente (reiniciando o dróide para a sua configuração de fábrica). A CD para qualquer uma destas ações é igual a Defesa de Vontade do dróide. Reprogramar um dróide leva 10 minutos.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78)",
                "requirements": "Somente Treinado; requer kit de ferramentas"
            },
            {
                "title": "Acessar dispositivo eletrônico",
                "text": "Conecte o aparelho a um computador indiferente ou melhor, como ação de rodada completa. Conexão sem fio usa o teste de rede CD 10; por cabo, exige cabo adequado ou Conexão improvisada. Use as mesmas CDs e atitudes de Acessar informações. Aparelhos independentes geralmente não acionam alarmes nem isolam conexões.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_Computer",
                "sourceLabel": "Legacy Era Campaign Guide"
            },
            {
                "title": "Rastrear usuário anterior",
                "text": "Passe em Usar Computador CD 25 para identificar o último usuário e as informações que ele procurou. Aplique normalmente os modificadores da atitude do computador.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_Computer",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Copiar cartão ou cilindro de códigos",
                "text": "Conecte fisicamente o cartão ou cilindro a um computador indiferente ou melhor. Gaste 10 minutos para copiar códigos a outro dispositivo ou reprogramar códigos existentes; use a CD da segurança abaixo.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_Computer",
                "sourceLabel": "Legacy Era Campaign Guide",
                "tables": [
                    {
                        "caption": "Segurança dos códigos",
                        "headers": [
                            "Nível",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Administrativa civil",
                                "20"
                            ],
                            [
                                "Militar criptografada",
                                "30"
                            ],
                            [
                                "Militar imperial criptografada",
                                "35"
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "Encobrir rastros",
                "text": "Ao acessar um computador, aumente em 5 todas as CDs de Usar Computador para ocultar sua presença e atividades. Quem tentar Rastrear usuário anterior sofre −5 no teste para identificar você e o que fez.",
                "trainedOnly": true,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_Computer",
                "sourceLabel": "Scum and Villainy"
            },
            {
                "title": "Detectar viagem hiperespacial",
                "text": "Com sensores no mesmo sistema, faça Usar Computador CD 25 como reação para detectar a entrada ou saída de uma nave e seu ponto de chegada ou partida. Uma rodada completa e CD 25 medem radiação cronau e direção de partida para inferir o destino provável. A radiação dura horas; cada hora desde o salto aumenta a CD em 5.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Starship_Basics",
                "sourceLabel": "Starships of the Galaxy"
            },
            {
                "title": "Usar comunicações",
                "text": "Como operador de sistemas, chame um veículo com ação rápida e CD 5 (CD 0 com transponders IFF de mesmos códigos). O receptor voluntário abre o canal como reação.\n\nPara proteger o canal, ambos os operadores gastam ação de movimento e testam Usar Computador; o maior resultado fixa a CD de interceptação.\n\nInterceptar exige ação padrão: CD 20 sem proteção especial, ou o maior resultado de segurança dos interlocutores. Criptografia acrescenta 10 à CD. Se falhar por até 10 ao interceptar comunicação criptografada, identifique o protocolo usado.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Starship_Skills",
                "sourceLabel": "Starships of the Galaxy"
            },
            {
                "title": "Usar sensores",
                "text": "Como operador de sistemas, use Usar Computador em lugar de Percepção para evitar surpresa, notar alvos ou procurar armas e compartimentos ocultos no exterior da nave. Notar alvos ativamente exige ação padrão; um alvo oculto resiste com Furtividade.\n\nNa escala de naves, aplique −5 por 10 quadrados e −5 para alvo sem energia ou assinatura energética. Obstáculos, camuflagem, interferência e máscaras de sensores podem impor outras penalidades.\n\nIdentificar detalhes: CD 10 informa tamanho e escudos ativos; CD 15, modelo reconhecível e quantidade de sistemas de armas, sem tipos exatos. Modelos alienígenas desconhecidos permanecem não identificados. Na primeira aproximação a até 30 quadrados, esse teste é reação; tentativas seguintes exigem ação de movimento.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Use_Sensors",
                "sourceLabel": "Starships of the Galaxy",
                "tables": [
                    {
                        "caption": "Alvo que não se oculta",
                        "headers": [
                            "Tamanho",
                            "CD"
                        ],
                        "rows": [
                            [
                                "Colossal",
                                "−15"
                            ],
                            [
                                "Imenso",
                                "−10"
                            ],
                            [
                                "Enorme",
                                "−5"
                            ],
                            [
                                "Grande",
                                "0"
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "Astrogação com computador de navegação",
                "text": "Um computador de navegação permite astronavegar sem treinamento. Antes de rolar, cada aumento de 5 na CD reduz a viagem em 1 dia; quando cair abaixo de 1 dia, reduza o tempo restante à metade, até o mínimo de 1 hora. Alternativamente, dobrar voluntariamente o tempo de viagem concede +5 de circunstância ao teste.",
                "trainedOnly": false,
                "supplement": true,
                "source": "https://swse.fandom.com/wiki/Starship_Skills",
                "sourceLabel": "Starships of the Galaxy"
            }
        ],
        "description": "Use esta perícia para acessar arquivos protegidos e derrotar sistemas de segurança.",
        "rules": "Especial: Você pode escolher 10 em testes de Usar Computador.\n\nVocê pode escolher 20 em um teste de Usar Computador exceto quando tentar melhorar acesso.\n\nQuando um computador é prestativo ou amistoso em relação a você, você recebe um bônus de equipamento em todos os testes de Usar Computador feitos com este computador igual ao bônus de Inteligência dele.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 76–77 (PDF pp. 77–78)",
        "note": "",
        "tables": [
            {
                "caption": "Tabela 4-5: Atitude do computador",
                "headers": [
                    "Atitude",
                    "O computador…"
                ],
                "rows": [
                    [
                        "Hostil",
                        "Trata você como intruso hostil e tenta rastrear sua localização e isolar sua conexão."
                    ],
                    [
                        "Pouco amistoso",
                        "Trata você como usuário não autorizado e bloqueia acesso a programas e informações."
                    ],
                    [
                        "Indiferente",
                        "Trata você como convidado; concede acesso não confidencial, sem contrariar comandos anteriores."
                    ],
                    [
                        "Amistoso",
                        "Trata você como usuário autorizado; concede acesso não confidencial, sem contrariar comandos anteriores. Bônus de equipamento do computador aplica-se aos testes."
                    ],
                    [
                        "Prestativo",
                        "Trata você como proprietário/administrador; concede acesso a todos os programas e informações, inclusive contrariando comandos anteriores. Bônus de equipamento do computador aplica-se aos testes."
                    ]
                ]
            }
        ]
    },
    "conhecimentos": {
        "page": "Knowledge",
        "note": "",
        "uses": [
            {
                "title": "Conhecimento comum",
                "text": "Você pode responder uma questão básica sobre um assunto relacionado ao seu campo de estudo com um teste com CD 10. Por exemplo, um teste de Conhecimento (ciências biológicas) CD 10 é o suficiente para saber que Rodianos são caçadores habilidosos.",
                "trainedOnly": false,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–63 (PDF pp. 64–64)"
            },
            {
                "title": "Conhecimento especializado",
                "text": "Você pode fazer um teste de Conhecimento como uma ação rápida para responder uma questão dentro do seu campo de estudo que requer algum nível de especialização. A CD do teste varia de 15 (para questões simples) até 25 (para questões difíceis). O GM pode ajustar a CD dependendo da experiência pessoal do personagem. Por exemplo, um teste de Conhecimento (tradições galácticas) CD 20 poderia revelar informações específicas sobre os habitantes do planeta Dathomir, mas a CD poderia ser menor se o personagem que estiver fazendo o teste já estiver estado lá.",
                "trainedOnly": true,
                "supplement": false,
                "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–63 (PDF pp. 64–64)",
                "requirements": "Somente Treinado"
            }
        ],
        "description": "Conhecimento engloba uma série de perícias distintas. Os conhecimentos representam o estudo de alguma doutrina, possivelmente uma disciplina acadêmica ou cientifica.\n\nA cada vez que você selecionar Conhecimento como uma perícia treinada, você deve escolher um campo de estudos da lista a seguir: Burocracia: Procedimentos dos negócios, sistemas e regulamentos legais, e estruturas organizacionais Ciências Biológicas: Biologia, botânica, genética, arqueologia, xenobiologia, medicina, e medicina legal Ciências Exatas: Astronomia, astronavegação, química, matemática, física, e engenharia Ciências Humanas: Sociologia, psicologia, filosofia, teologia, e criminologia Táticas: Técnicas e estratégias para lançar e manobrar forças em combate Tecnologia: Função e princípio de dispositivos tecnológicos, tanto quanto o conhecimento de teorias recentes e avanços tecnológicos.\n\nTradições Galácticas: Planetas, mundos natais, setores do espaço, história galáctica, e a Força",
        "rules": "Re-tentar: Não, você não pode re-rolar um teste de Conhecimento mal sucedido. A rolagem representa o que você sabe, e pensar sobre um determinado assunto uma segunda vez não vai fazer com que você saiba alguma coisa que nunca aprendeu.\n\nEspecial: Você pode escolher 10 quando fazer um teste de Conhecimento, mas não pode escolher 20.",
        "sourceLabel": "Star Wars RPG — Edição Saga (v1.05), pp. 63–63 (PDF pp. 64–64)"
    }
};

const KNOWLEDGE_TACTICS_USES = [
    {
        "title": "Antecipar estratégia inimiga",
        "text": "Como ação de movimento, escolha um alvo em sua linha de visão. Teste Conhecimento (Táticas) contra sua Defesa de Vontade, ou CD 10 + ND se não houver essa defesa, como em veículos sem piloto específico. Sucesso revela ações prováveis no próximo turno: quem atacará, para onde se moverá ou outra estratégia. Mudanças de circunstâncias podem alterar essas ações. Normalmente não revela aptidões ou talentos; o GM determina a informação recebida.",
        "trainedOnly": true,
        "supplement": true,
        "source": "https://swse.fandom.com/wiki/Knowledge",
        "sourceLabel": "Clone Wars Campaign Guide"
    },
    {
        "title": "Táticas de batalha",
        "text": "Se você for comandante de uma unidade em combate em massa, gaste três ações rápidas em rodadas consecutivas e passe em Conhecimento (Táticas) CD 20. Sucesso permite conceder ações padrão extras a outros personagens da unidade, conforme as regras de combate em massa.",
        "trainedOnly": true,
        "supplement": true,
        "source": "https://swse.fandom.com/wiki/Knowledge",
        "sourceLabel": "Clone Wars Campaign Guide"
    }
];
