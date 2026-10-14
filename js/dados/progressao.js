// Progressão de nível: o que cada classe dá a cada nível e de onde saem as escolhas.
// Gerado a partir da wiki do Saga Edition (classes do livro) e do PDF da classe Sith.
//   tipo        = heroica (Aptidão nos níveis ímpares, Talento Bônus nos pares) ou prestigio
//   bba         = completo (+1 por nível) ou 3/4 (+0, +1, +2, +3, +3...)
//   vagas       = só nas de prestígio: aptidaoImpar, aptidaoTodoNivel, aptidaoImparTecnica, aptidaoImparSegredo
//   arvores     = árvores de aptidão (nomes da Biblioteca) de onde saem as Aptidões da classe
//   preRequisitos = só nas de prestígio: regras para entrar na classe (mesmo formato de prerequisitos-talentos.js;
//                   "nivel" e "bba" contam as outras classes da ficha, sem a de prestígio)
//   talentosBonus = Talentos (nomes da Biblioteca) permitidos nos níveis pares das classes heroicas

// Níveis de personagem (soma das classes) em que se ganha um Talento livre
const HEROIC_TALENT_LEVELS = [1, 3, 6, 9, 12, 15, 18];

// Bônus base de ataque por nível de classe
const BBA_PROGRESSION = {
    completo: level => level,
    '3/4': level => Math.floor(level * 3 / 4),
};

// Árvores da Força: quem tem Sensibilidade à Força pode trocar a Aptidão de classe heroica por uma destas.
// As de Tradição exigem pertencer à tradição (só aviso, o Mestre confere).
const FORCE_TALENT_TREES = [
    "Árvore de Aptidões: Alterar (Alter)",
    "Árvore de Aptidões: Controle (Control)",
    "Árvore de Aptidões: Lado Sombrio (Dark Side)",
    "Árvore de Aptidões: Sentido (Sense)",
    "Árvore de Aptidões: Lado Luminoso (Light Side)",
    "Árvore de Aptidões: Espírito Guardião (Guardian Spirit)"
];

const FORCE_TRADITION_TREES = [
    "Árvore de Aptidões: Agente de Ossus (Agent of Ossus)",
    "Árvore de Aptidões: Monge Aing-Tii (Aing-Tii Monk)",
    "Árvore de Aptidões: Capitão Bando Gora (Bando Gora Captain)",
    "Árvore de Aptidões: Sábio Baran Do (Baran Do Sage)",
    "Árvore de Aptidões: Discípulo Crente (Believer Disciple)",
    "Árvore de Aptidões: Corrente Flamejante (Blazing Chain)",
    "Árvore de Aptidões: Bruxa de Dathomir (Dathomiri Witch)",
    "Árvore de Aptidões: Discípulo do Crepúsculo (Disciple of Twilight)",
    "Árvore de Aptidões: Brasa de Vahl (Ember of Vahl)",
    "Árvore de Aptidões: Xamã Feluciano (Felucian Shaman)",
    "Árvore de Aptidões: Cavaleiro de Ferro (Iron Knight)",
    "Árvore de Aptidões: Jal Shey (Jal Shey)",
    "Árvore de Aptidões: Defensor Jensaarai (Jensaarai Defender)",
    "Árvore de Aptidões: Keetael (Keetael)",
    "Árvore de Aptidões: Patrulheiro Kilian (Kilian Ranger)",
    "Árvore de Aptidões: Adepto Korunnai (Korunnai Adept)",
    "Árvore de Aptidões: Krath (Krath)",
    "Árvore de Aptidões: Luka Sene (Luka Sene)",
    "Árvore de Aptidões: Adepto Matukai (Matukai Adept)",
    "Árvore de Aptidões: Ordem de Shasa (Order of Shasa)",
    "Árvore de Aptidões: Dervixe Seyugi (Seyugi Dervish)",
    "Árvore de Aptidões: Moldadores de Kro Var (Shapers of Kro Var)",
    "Árvore de Aptidões: Adepto Tyia (Tyia Adept)",
    "Árvore de Aptidões: Guardião do Céu (Warden of the Sky)",
    "Árvore de Aptidões: Adepto da Corrente Branca (White Current Adept)",
    "Árvore de Aptidões: Guerreiro Zeison Sha (Zeison Sha Warrior)"
];

const CLASS_PROGRESSION = {
    "Jedi": {
        "tipo": "heroica",
        "nivelMax": 20,
        "bba": "completo",
        "talentosIniciais": [
            {
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Simples"
            }
        ],
        "talentosBonus": [
            "Acuidade com Arma (Weapon Finesse)",
            "Alvo em Movimento (Moving Target)",
            "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "Assumir Riscos (Risk Taker)",
            "Ataque Demolidor (Battering Attack)",
            "Ataque Duplo (Double Attack)",
            "Ataque Garantido (Assured Attack)",
            "Ataque Instintivo (Instinctive Attack)",
            "Ataque Poderoso (Power Attack)",
            "Ataque Selvagem (Savage Attack)",
            "Ataque Triplo (Triple Attack)",
            "Ataque em Corrida (Running Attack)",
            "Combo de Ataque (Corpo a Corpo) (Attack Combo (Melee))",
            "Crítico Triplo (Triple Crit)",
            "Defensor Cauteloso (Wary Defender)",
            "Defesa Acrobática (Tumble Defense)",
            "Defesa Brilhante (Brilliant Defense)",
            "Defesa Corpo a Corpo (Melee Defense)",
            "Defesa Instintiva (Instinctive Defense)",
            "Desarmar Aprimorado (Improved Disarm)",
            "Enxamear (Swarm)",
            "Esquiva (Dodge)",
            "Explosão de Velocidade (Burst of Speed)",
            "Feito de Força (Feat of Strength)",
            "Foco em Arma (Weapon Focus)",
            "Foco em Perícia (Skill Focus)",
            "Forte na Força (Strong in the Force)",
            "Força Imparável (Unstoppable Force)",
            "Força Resiliente (Resilient Strength)",
            "Força de Personalidade (Force of Personality)",
            "Fuga de Combate Próximo (Close Combat Escape)",
            "Fúria Pavorosa (Dreadful Rage)",
            "Golpe Acelerado (Accelerated Strike)",
            "Golpe Acrobático (Acrobatic Strike)",
            "Golpe Crítico (Critical Strike)",
            "Golpe Perverso (Wicked Strike)",
            "Golpe Rápido (Rapid Strike)",
            "Golpe Rápido Aprimorado (Improved Rapid Strike)",
            "Golpe de Retirada (Withdrawal Strike)",
            "Investida Aprimorada (Improved Charge)",
            "Investida Hábil (Deft Charge)",
            "Investida Poderosa (Powerful Charge)",
            "Lutar Apesar da Dor (Fight Through Pain)",
            "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "Manobra Escorregadia (Slippery Maneuver)",
            "Manter-se Firme (Stand Tall)",
            "Mergulhar para Cobertura (Dive for Cover)",
            "Mobilidade (Mobility)",
            "Movimento Impetuoso (Impetuous Move)",
            "Nunca se Render (Never Surrender)",
            "Permanecer de Pé (Stay Up)",
            "Postura Resoluta (Resolute Stance)",
            "Proficiência com Arma (Weapon Proficiency)",
            "Prontidão da Força (Force Readiness)",
            "Rajada de Golpes (Flurry)",
            "Reação Rápida (Rapid Reaction)",
            "Reflexos de Combate (Combat Reflexes)",
            "Resistência a Agarrões (Grapple Resistance)",
            "Resolução Inabalável (Unwavering Resolve)",
            "Ressurgência (Resurgence)",
            "Retirada Oportunista (Opportunistic Retreat)",
            "Saque Relâmpago (Lightning Draw)",
            "Saque Rápido (Quick Draw)",
            "Sensibilidade à Força (Force Sensitivity)",
            "Surto Rápido (Fast Surge)",
            "Surto de Recuperação (Recovering Surge)",
            "Treinamento de Candidatura a Oficial (Officer Candidacy Training)",
            "Treinamento em Perícia (Skill Training)",
            "Trespassar (Cleave)",
            "Trespassar Maior (Great Cleave)",
            "Vantagem Tática (Tactical Advantage)",
            "Voo Impulsivo (Impulsive Flight)",
            "À Beira da Morte (Brink of Death)"
        ],
        "arvores": [
            "Árvore de Aptidões: Consular Jedi (Jedi Consular)",
            "Árvore de Aptidões: Guardião Jedi (Jedi Guardian)",
            "Árvore de Aptidões: Sentinela Jedi (Jedi Sentinel)",
            "Árvore de Aptidões: Combate com Sabre de Luz (Lightsaber Combat)"
        ]
    },
    "Nobre": {
        "tipo": "heroica",
        "nivelMax": 20,
        "bba": "3/4",
        "talentosIniciais": [
            {
                "nome": "Linguista (Linguist)"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Pistolas"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Simples"
            }
        ],
        "talentosBonus": [
            "Acuidade com Arma (Weapon Finesse)",
            "Afinidade (Rapport)",
            "Amigos em Lugares Baixos (Friends in Low Places)",
            "Caçador Esportivo (Sport Hunter)",
            "Cirurgia Biotecnológica (Biotech Surgery)",
            "Cirurgia Cibernética (Cybernetic Surgery)",
            "Combate Montado (Mounted Combat)",
            "Cortar a Burocracia (Cut the Red Tape)",
            "Defensor Cauteloso (Wary Defender)",
            "Defesa Brilhante (Brilliant Defense)",
            "Defesa Corpo a Corpo (Melee Defense)",
            "Defesa Preditiva (Predictive Defense)",
            "Dispositivo Característico (Signature Device)",
            "Encurralado (Cornered)",
            "Especialista Técnico (Tech Specialist)",
            "Especialista em Biotecnologia (Biotech Specialist)",
            "Especialização Cirúrgica (Surgical Expertise)",
            "Flèche (Flèche)",
            "Foco em Perícia (Skill Focus)",
            "Fogo de Retorno (Return Fire)",
            "Força de Personalidade (Force of Personality)",
            "Golpe Desmoralizante (Demoralizing Strike)",
            "Golpe Perverso (Wicked Strike)",
            "Golpe Sádico (Sadistic Strike)",
            "Incapacitar (Disabler)",
            "Informante (Informer)",
            "Inseto Retornante (Returning Bug)",
            "Intimidador (Intimidator)",
            "Linguista (Linguist)",
            "Lutar Apesar da Dor (Fight Through Pain)",
            "Líder de Droides (Leader of Droids)",
            "Língua de Prata (Silver Tongue)",
            "Manter-se Firme (Stand Tall)",
            "Mestre dos Disfarces (Master of Disguise)",
            "Modificação Apressada (Hasty Modification)",
            "Personalidade Indomável (Indomitable Personality)",
            "Perícia Rápida (Quick Skill)",
            "Presença Perturbadora (Disturbing Presence)",
            "Proficiência com Arma (Weapon Proficiency)",
            "Proficiência com Arma Exótica (Exotic Weapon Proficiency)",
            "Proficiência com Armadura (Armor Proficiency)",
            "Rajada de Golpes (Flurry)",
            "Reação Rápida (Rapid Reaction)",
            "Recordar (Recall)",
            "Resolução Inabalável (Unwavering Resolve)",
            "Retirada Oportunista (Opportunistic Retreat)",
            "Subornador Especialista (Expert Briber)",
            "Surto Rápido (Fast Surge)",
            "Surto de Recuperação (Recovering Surge)",
            "Tecnologia Superior (Superior Tech)",
            "Treinamento em Perícia (Skill Training)",
            "Truque de Combate (Combat Trickery)",
            "Vantagem Tática (Tactical Advantage)",
            "Voo Impulsivo (Impulsive Flight)"
        ],
        "arvores": [
            "Árvore de Aptidões: Antecipação (Anticipation)",
            "Árvore de Aptidões: Colaborador (Collaborator)",
            "Árvore de Aptidões: Desgraça (Disgrace)",
            "Árvore de Aptidões: Exilado (Exile)",
            "Árvore de Aptidões: Esgrima (Fencing)",
            "Árvore de Aptidões: Líder Apostador (Gambling Leader)",
            "Árvore de Aptidões: Ideólogo (Ideologue)",
            "Árvore de Aptidões: Influência (Influence)",
            "Árvore de Aptidões: Inspiração (Inspiration)",
            "Árvore de Aptidões: Liderança (Leadership)",
            "Árvore de Aptidões: Linhagem (Lineage)",
            "Árvore de Aptidões: Protetor Leal (Loyal Protector)",
            "Árvore de Aptidões: Mestre da Intriga (Master of Intrigue)",
            "Árvore de Aptidões: Provocador (Provocateur)",
            "Árvore de Aptidões: Desafio de Perícia (Skill Challenge)",
            "Árvore de Aptidões: Perícias Superiores (Superior Skills)"
        ]
    },
    "Malandro": {
        "tipo": "heroica",
        "nivelMax": 20,
        "bba": "3/4",
        "talentosIniciais": [
            {
                "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Pistolas"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Simples"
            }
        ],
        "talentosBonus": [
            "Abaixar e Cobrir (Duck and Cover)",
            "Acerto Fatal (Fatal Hit)",
            "Alcance Zero (Zero Range)",
            "Aliado Acrobático (Acrobatic Ally)",
            "Alvo em Movimento (Moving Target)",
            "Amigos em Lugares Baixos (Friends in Low Places)",
            "Ataque Astuto (Cunning Attack)",
            "Ataque Avassalador (Overwhelming Attack)",
            "Ataque Vantajoso (Advantageous Attack)",
            "Ataque em Corrida (Running Attack)",
            "Atirador Oportunista (Opportunistic Shooter)",
            "Catador (Scavenger)",
            "Caçador de Droides (Droid Hunter)",
            "Cobertura Vantajosa (Advantageous Cover)",
            "Combate Veicular (Vehicular Combat)",
            "Combo de Ataque (À Distância) (Attack Combo (Ranged))",
            "Condutor de Banthas (Bantha Herder)",
            "Conhecimento de Droides (Droidcraft)",
            "Dano Colateral (Collateral Damage)",
            "Defesa Corpo a Corpo (Melee Defense)",
            "Defesa Preditiva (Predictive Defense)",
            "Dispositivo Característico (Signature Device)",
            "Encurralado (Cornered)",
            "Engenhoqueiro (Gearhead)",
            "Especialista Técnico (Tech Specialist)",
            "Especialista em Biotecnologia (Biotech Specialist)",
            "Especialização em Sistemas de Veículos (Vehicle Systems Expertise)",
            "Esquiva (Dodge)",
            "Esquiva Acrobática (Acrobatic Dodge)",
            "Explosão de Velocidade (Burst of Speed)",
            "Foco em Perícia (Skill Focus)",
            "Fogo Cruzado (Crossfire)",
            "Fogo de Retorno (Return Fire)",
            "Força de Personalidade (Force of Personality)",
            "Fuga de Combate Próximo (Close Combat Escape)",
            "Gambito Desesperado (Desperate Gambit)",
            "Golpe Debilitante (Hobbling Strike)",
            "Golpe Sádico (Sadistic Strike)",
            "Incapacitar (Disabler)",
            "Lutar Apesar da Dor (Fight Through Pain)",
            "Língua de Prata (Silver Tongue)",
            "Manter Unido (Hold Together)",
            "Manter-se Firme (Stand Tall)",
            "Mau Pressentimento (Bad Feeling)",
            "Mestre dos Disfarces (Master of Disguise)",
            "Mobilidade (Mobility)",
            "Modificação Apressada (Hasty Modification)",
            "Olho Morto (Deadeye)",
            "Personalidade Indomável (Indomitable Personality)",
            "Perícia Rápida (Quick Skill)",
            "Pistoleiro (Pistoleer)",
            "Posição Estabilizadora (Steadying Position)",
            "Presença Perturbadora (Disturbing Presence)",
            "Prestidigitação Aprimorada (Improved Sleight of Hand)",
            "Proficiência com Arma (Weapon Proficiency)",
            "Queda Enganosa (Deceptive Drop)",
            "Reação Rápida (Rapid Reaction)",
            "Resistência a Veneno (Poison Resistance)",
            "Saque Relâmpago (Lightning Draw)",
            "Saque Rápido (Quick Draw)",
            "Subornador Especialista (Expert Briber)",
            "Surto Rápido (Fast Surge)",
            "Surto Veicular (Vehicular Surge)",
            "Surto de Recuperação (Recovering Surge)",
            "Tecnologia Superior (Superior Tech)",
            "Tiro Preciso (Precise Shot)",
            "Tiro Principal (Prime Shot)",
            "Tiro Rápido (Rapid Shot)",
            "Tiro de Franco-Atirador (Sniper Shot)",
            "Tiro à Queima-Roupa (Point Blank Shot)",
            "Treinamento com Implantes (Implant Training)",
            "Treinamento em Perícia (Skill Training)",
            "Truque Oportunista (Opportunistic Trickery)",
            "Truque Oportunista Aprimorado (Improved Opportunistic Trickery)",
            "Truque com Faca (Knife Trick)",
            "Truque de Combate (Combat Trickery)",
            "Voo Impulsivo (Impulsive Flight)"
        ],
        "arvores": [
            "Árvore de Aptidões: Bandoleiro (Brigand)",
            "Árvore de Aptidões: Fortuna (Fortune)",
            "Árvore de Aptidões: Envenenador Malkite (Malkite Poisoner)",
            "Árvore de Aptidões: Infortúnio (Misfortune)",
            "Árvore de Aptidões: Oportunista (Opportunist)",
            "Árvore de Aptidões: Técnico Fora da Lei (Outlaw Tech)",
            "Árvore de Aptidões: Forasteiro (Outsider)",
            "Árvore de Aptidões: Imprudência (Recklessness)",
            "Árvore de Aptidões: Revolucionário (Revolutionary)",
            "Árvore de Aptidões: Correr e Atirar (Run and Gun)",
            "Árvore de Aptidões: Slicer (Slicer)",
            "Árvore de Aptidões: Contrabando (Smuggling)",
            "Árvore de Aptidões: Espacial (Spacer)",
            "Árvore de Aptidões: Biotecnologia Yuuzhan Vong (Yuuzhan Vong Biotech)"
        ]
    },
    "Batedor": {
        "tipo": "heroica",
        "nivelMax": 20,
        "bba": "3/4",
        "talentosIniciais": [
            {
                "nome": "Sacudir o Efeito (Shake It Off)"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Pistolas"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Rifles"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Simples"
            }
        ],
        "talentosBonus": [
            "Abaixar e Cobrir (Duck and Cover)",
            "Acerto Fatal (Fatal Hit)",
            "Agilidade Aumentada (Increased Agility)",
            "Alvo em Movimento (Moving Target)",
            "Assumir Riscos (Risk Taker)",
            "Ataque Astuto (Cunning Attack)",
            "Ataque Vantajoso (Advantageous Attack)",
            "Ataque em Corrida (Running Attack)",
            "Atirador Oportunista (Opportunistic Shooter)",
            "Caçador Esportivo (Sport Hunter)",
            "Caçador de Droides (Droid Hunter)",
            "Cobertura Vantajosa (Advantageous Cover)",
            "Combate Montado (Mounted Combat)",
            "Combate Veicular (Vehicular Combat)",
            "Combo de Ataque (À Distância) (Attack Combo (Ranged))",
            "Condicionamento (Conditioning)",
            "Conhecimento de Droides (Droidcraft)",
            "Encurralado (Cornered)",
            "Engenhoqueiro (Gearhead)",
            "Escudo de Carne (Meat Shield)",
            "Especialização em Sistemas de Veículos (Vehicle Systems Expertise)",
            "Esquiva (Dodge)",
            "Explosão Vigorosa (Forceful Blast)",
            "Explosão de Velocidade (Burst of Speed)",
            "Feito de Força (Feat of Strength)",
            "Foco em Perícia (Skill Focus)",
            "Fogo de Retorno (Return Fire)",
            "Força Destrutiva (Destructive Force)",
            "Força Resiliente (Resilient Strength)",
            "Franco-Atirador (Sniper)",
            "Franco-Atirador Mortal (Deadly Sniper)",
            "Golpe Debilitante (Hobbling Strike)",
            "Hiperblaster (Hyperblazer)",
            "Incapacitar (Disabler)",
            "Investida Hábil (Deft Charge)",
            "Investida Maníaca (Maniacal Charge)",
            "Linguista (Linguist)",
            "Maestria em Armas Improvisadas (Improvised Weapon Mastery)",
            "Manobra Escorregadia (Slippery Maneuver)",
            "Manter Unido (Hold Together)",
            "Manter-se Firme (Stand Tall)",
            "Mau Pressentimento (Bad Feeling)",
            "Mergulhar para Cobertura (Dive for Cover)",
            "Mestre dos Rifles (Riflemaster)",
            "Mobilidade (Mobility)",
            "Nunca se Render (Never Surrender)",
            "Olho Morto (Deadeye)",
            "Permanecer de Pé (Stay Up)",
            "Pistoleiro (Pistoleer)",
            "Posição Estabilizadora (Steadying Position)",
            "Primeiros Socorros Selvagens (Wilderness First Aid)",
            "Proficiência com Arma (Weapon Proficiency)",
            "Proficiência com Armadura (Armor Proficiency)",
            "Reação Rápida (Rapid Reaction)",
            "Recuperação Fortificante (Fortifying Recovery)",
            "Resistência a Agarrões (Grapple Resistance)",
            "Resistência a Veneno (Poison Resistance)",
            "Ressurgência (Resurgence)",
            "Sacudir o Efeito (Shake It Off)",
            "Surto Rápido (Fast Surge)",
            "Surto Veicular (Vehicular Surge)",
            "Surto de Recuperação (Recovering Surge)",
            "Tiro Cuidadoso (Careful Shot)",
            "Tiro Distante (Far Shot)",
            "Tiro Preciso (Precise Shot)",
            "Tiro Principal (Prime Shot)",
            "Tiro Rápido (Rapid Shot)",
            "Tiro de Raspão (Grazing Shot)",
            "Tiro à Queima-Roupa (Point Blank Shot)",
            "Treinamento Militar Rebelde (Rebel Military Training)",
            "Treinamento em Perícia (Skill Training)",
            "Área Direcionada (Targeted Area)"
        ],
        "arvores": [
            "Árvore de Aptidões: Patrulha Avançada (Advance Patrol)",
            "Árvore de Aptidões: Percepção (Awareness)",
            "Árvore de Aptidões: Camuflagem (Camouflage)",
            "Árvore de Aptidões: Espionagem (Espionage)",
            "Árvore de Aptidões: Fronteiriço (Fringer)",
            "Árvore de Aptidões: Explorador do Hiperespaço (Hyperspace Explorer)",
            "Árvore de Aptidões: Batedor Mestre (Master Scout)",
            "Árvore de Aptidões: Batedor Móvel (Mobile Scout)",
            "Árvore de Aptidões: Reconhecimento (Reconnaissance)",
            "Árvore de Aptidões: Espião (Spy)",
            "Árvore de Aptidões: Vigilância (Surveillance)",
            "Árvore de Aptidões: Sobrevivente (Survivor)",
            "Árvore de Aptidões: Imprevisível (Unpredictable)",
            "Árvore de Aptidões: Versatilidade (Versatility)"
        ]
    },
    "Soldado": {
        "tipo": "heroica",
        "nivelMax": 20,
        "bba": "completo",
        "talentosIniciais": [
            {
                "nome": "Proficiência com Armadura (Armor Proficiency)",
                "detalhe": "Leve"
            },
            {
                "nome": "Proficiência com Armadura (Armor Proficiency)",
                "detalhe": "Média"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Pistolas"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Rifles"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Simples"
            }
        ],
        "talentosBonus": [
            "Acerto Fatal (Fatal Hit)",
            "Afinidade (Rapport)",
            "Agilidade Aumentada (Increased Agility)",
            "Alcance Zero (Zero Range)",
            "Arremessar (Throw)",
            "Arremesso Angulado (Angled Throw)",
            "Arremesso Poderoso (Mighty Throw)",
            "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "Assalto com Fogo Automático (Autofire Assault)",
            "Assumir Riscos (Risk Taker)",
            "Ataque Avassalador (Overwhelming Attack)",
            "Ataque Coordenado (Coordinated Attack)",
            "Ataque Demolidor (Battering Attack)",
            "Ataque Duplo (Double Attack)",
            "Ataque Garantido (Assured Attack)",
            "Ataque Poderoso (Power Attack)",
            "Ataque Selvagem (Savage Attack)",
            "Ataque Triplo (Triple Attack)",
            "Ataque em Corrida (Running Attack)",
            "Atirador Oportunista (Opportunistic Shooter)",
            "Barragem Coordenada (Coordinated Barrage)",
            "Barragem de Blaster (Blaster Barrage)",
            "Bater Cabeças (Knock Heads)",
            "Caçador Esportivo (Sport Hunter)",
            "Caçador de Droides (Droid Hunter)",
            "Cobertura Vantajosa (Advantageous Cover)",
            "Combate Veicular (Vehicular Combat)",
            "Combo de Ataque (Corpo a Corpo) (Attack Combo (Melee))",
            "Combo de Ataque (Disparar e Golpear) (Attack Combo (Fire and Strike))",
            "Combo de Ataque (À Distância) (Attack Combo (Ranged))",
            "Condicionamento (Conditioning)",
            "Condutor de Banthas (Bantha Herder)",
            "Contra-Agarrão (Grab Back)",
            "Crítico Triplo (Triple Crit)",
            "Dano Colateral (Collateral Damage)",
            "Defensor Cauteloso (Wary Defender)",
            "Defesa Acrobática (Tumble Defense)",
            "Defesa Corpo a Corpo (Melee Defense)",
            "Derrubar (Trip)",
            "Desarmar Aprimorado (Improved Disarm)",
            "Disparo Poderoso (Power Blast)",
            "Disparo de Artilharia (Artillery Shot)",
            "Escudo de Carne (Meat Shield)",
            "Esmagador de Ossos (Bone Crusher)",
            "Esmagamento do Rancor (Rancor Crush)",
            "Esmagar (Crush)",
            "Especialista em Artilharia (Gunnery Specialist)",
            "Explosão Vigorosa (Forceful Blast)",
            "Explosão de Velocidade (Burst of Speed)",
            "Feito de Força (Feat of Strength)",
            "Flèche (Flèche)",
            "Foco em Arma (Weapon Focus)",
            "Foco em Perícia (Skill Focus)",
            "Fogo Cruzado (Crossfire)",
            "Fogo em Investida (Charging Fire)",
            "Força Destrutiva (Destructive Force)",
            "Força Imparável (Unstoppable Force)",
            "Força Resiliente (Resilient Strength)",
            "Franco-Atirador (Sniper)",
            "Franco-Atirador Mortal (Deadly Sniper)",
            "Golpe Acelerado (Accelerated Strike)",
            "Golpe Crítico (Critical Strike)",
            "Golpe Debilitante (Hobbling Strike)",
            "Golpe Poderoso (Mighty Swing)",
            "Golpe Rápido (Rapid Strike)",
            "Golpe Rápido Aprimorado (Improved Rapid Strike)",
            "Golpe Sádico (Sadistic Strike)",
            "Golpe de Retirada (Withdrawal Strike)",
            "Golpeador Pesado (Heavy Hitter)",
            "Guerreiro de Trincheira (Trench Warrior)",
            "Imobilizar (Pin)",
            "Incapacitar (Disabler)",
            "Investida Aprimorada (Improved Charge)",
            "Investida Bantha (Bantha Rush)",
            "Investida Bantha Aprimorada (Improved Bantha Rush)",
            "Investida Hábil (Deft Charge)",
            "Investida Maníaca (Maniacal Charge)",
            "Maestria em Armas Improvisadas (Improvised Weapon Mastery)",
            "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "Manobra Escorregadia (Slippery Maneuver)",
            "Mergulhar para Cobertura (Dive for Cover)",
            "Mestre dos Rifles (Riflemaster)",
            "Metralhar (Strafe)",
            "Movimento Impetuoso (Impetuous Move)",
            "Nunca se Render (Never Surrender)",
            "Olho Morto (Deadeye)",
            "Parar (Halt)",
            "Permanecer de Pé (Stay Up)",
            "Pistoleiro (Pistoleer)",
            "Posição Estabilizadora (Steadying Position)",
            "Postura Resoluta (Resolute Stance)",
            "Proficiência com Arma (Weapon Proficiency)",
            "Proficiência com Arma Exótica (Exotic Weapon Proficiency)",
            "Proficiência com Armadura (Armor Proficiency)",
            "Rajada de Golpes (Flurry)",
            "Reação Rápida (Rapid Reaction)",
            "Recuperação Fortificante (Fortifying Recovery)",
            "Reflexos de Combate (Combat Reflexes)",
            "Resistência a Agarrões (Grapple Resistance)",
            "Ressurgência (Resurgence)",
            "Robustez (Toughness)",
            "Sacudir o Efeito (Shake It Off)",
            "Saque Relâmpago (Lightning Draw)",
            "Saque Rápido (Quick Draw)",
            "Surto Rápido (Fast Surge)",
            "Surto Veicular (Vehicular Surge)",
            "Surto de Recuperação (Recovering Surge)",
            "Tiro Cuidadoso (Careful Shot)",
            "Tiro Distante (Far Shot)",
            "Tiro Preciso (Precise Shot)",
            "Tiro Principal (Prime Shot)",
            "Tiro Rápido (Rapid Shot)",
            "Tiro de Franco-Atirador (Sniper Shot)",
            "Tiro de Raspão (Grazing Shot)",
            "Tiro à Queima-Roupa (Point Blank Shot)",
            "Treinamento Militar Imperial (Imperial Military Training)",
            "Treinamento Militar Rebelde (Rebel Military Training)",
            "Treinamento Militar Separatista (Separatist Military Training)",
            "Treinamento Militar da Aliança Galáctica (Galactic Alliance Military Training)",
            "Treinamento Militar do Grande Exército da República (Grand Army of the Republic Training)",
            "Treinamento de Candidatura a Oficial (Officer Candidacy Training)",
            "Treinamento em Perícia (Skill Training)",
            "Trespassar (Cleave)",
            "Trespassar Assustador (Frightening Cleave)",
            "Trespassar Maior (Great Cleave)",
            "Varredura com Fogo Automático (Autofire Sweep)",
            "À Beira da Morte (Brink of Death)",
            "Área Direcionada (Targeted Area)"
        ],
        "arvores": [
            "Árvore de Aptidões: Emboscador (Ambusher)",
            "Árvore de Aptidões: Especialista em Armadura (Armor Specialist)",
            "Árvore de Aptidões: Brigão (Brawler)",
            "Árvore de Aptidões: Esquadrão Brutal (Brute Squad)",
            "Árvore de Aptidões: Comando (Commando)",
            "Árvore de Aptidões: Mercenário (Mercenary)",
            "Árvore de Aptidões: Saltador com Foguete (Rocket Jumper)",
            "Árvore de Aptidões: Boxeador de Choque (Shockboxer)",
            "Árvore de Aptidões: Líder de Esquadrão (Squad Leader)",
            "Árvore de Aptidões: Tropa (Trooper)",
            "Árvore de Aptidões: Veterano (Veteran)",
            "Árvore de Aptidões: Guerreiro (Warrior)",
            "Árvore de Aptidões: Especialista em Armas (Weapon Specialist)"
        ]
    },
    "Sith": {
        "tipo": "heroica",
        "nivelMax": 20,
        "bba": "completo",
        "talentosIniciais": [
            {
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Simples"
            }
        ],
        "talentosBonus": [
            "Acuidade com Arma (Weapon Finesse)",
            "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "Ataque Duplo (Double Attack)",
            "Ataque Poderoso (Power Attack)",
            "Ataque Triplo (Triple Attack)",
            "Ataque em Corrida (Running Attack)",
            "Crítico Triplo (Triple Crit)",
            "Defesa Corpo a Corpo (Melee Defense)",
            "Desarmar Aprimorado (Improved Disarm)",
            "Esquiva (Dodge)",
            "Foco em Arma (Weapon Focus)",
            "Foco em Perícia (Skill Focus)",
            "Forte na Força (Strong in the Force)",
            "Golpe Acrobático (Acrobatic Strike)",
            "Golpe Rápido (Rapid Strike)",
            "Investida Aprimorada (Improved Charge)",
            "Investida Poderosa (Powerful Charge)",
            "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "Mobilidade (Mobility)",
            "Reflexos de Combate (Combat Reflexes)",
            "Saque Rápido (Quick Draw)",
            "Treinamento em Perícia (Skill Training)",
            "Trespassar (Cleave)",
            "Trespassar Maior (Great Cleave)"
        ],
        "aptidoesComoTalentoBonus": [
            "Poder do Lado Sombrio",
            "Adepto do Lado Sombrio"
        ],
        "arvores": [
            "Árvore de Aptidões do Guerreiro Sith",
            "Árvore de Aptidões do Inquisidor Sith",
            "Árvore de Aptidões do Lorde Sith"
        ]
    },
    "Piloto Ás": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Furador de Bloqueio (Blockade Runner)",
            "Árvore de Aptidões: Piloto Especialista (Expert Pilot)",
            "Árvore de Aptidões: Artilheiro (Gunner)",
            "Árvore de Aptidões: Espacial (Spacer)",
            "Árvore de Aptidões: Líder de Esquadrilha (Squadron Leader)",
            "Árvore de Aptidões: Ala (Wingman)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "pilotar"
            },
            {
                "tipo": "talento",
                "nome": "Combate Veicular (Vehicular Combat)"
            }
        ]
    },
    "Caçador de Recompensas": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Percepção (Awareness)",
            "Árvore de Aptidões: Caçador de Recompensas (Bounty Hunter)",
            "Árvore de Aptidões: Caçador da Força (Force Hunter)",
            "Árvore de Aptidões: Localizador Gand (Gand Findsman)",
            "Árvore de Aptidões: Infortúnio (Misfortune)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "sobrevivencia"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Percepção (Awareness)"
                ],
                "min": 2
            }
        ]
    },
    "Senhor do Crime": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoTodoNivel",
        "arvores": [
            "Árvore de Aptidões: Infâmia (Infamy)",
            "Árvore de Aptidões: Influência (Influence)",
            "Árvore de Aptidões: Mentor Criminoso (Mastermind)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "enganacao"
            },
            {
                "tipo": "pericia",
                "pericia": "persuasao"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Fortuna (Fortune)",
                    "Árvore de Aptidões: Linhagem (Lineage)",
                    "Árvore de Aptidões: Infortúnio (Misfortune)"
                ],
                "min": 1
            }
        ]
    },
    "Soldado de Elite": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Camuflagem (Camouflage)",
            "Árvore de Aptidões: Comando (Commando)",
            "Árvore de Aptidões: Mestre dos Críticos (Critical Master)",
            "Árvore de Aptidões: Guerreiro Mandaloriano (Mandalorian Warrior)",
            "Árvore de Aptidões: Mestre de Teräs Käsi (Master of Teräs Käsi)",
            "Árvore de Aptidões: Especialista Corpo a Corpo (Melee Specialist)",
            "Árvore de Aptidões: Proteção (Protection)",
            "Árvore de Aptidões: Comando Republicano (Republic Commando)",
            "Árvore de Aptidões: Mestre de Armas (Weapon Master)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "bba",
                "min": 7
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Armadura (Armor Proficiency)",
                "detalhe": "Leve"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Armadura (Armor Proficiency)",
                "detalhe": "Média"
            },
            {
                "tipo": "talento",
                "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
                "detalhe": "I"
            },
            {
                "tipo": "alguma",
                "requisitos": [
                    {
                        "tipo": "talento",
                        "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
                    },
                    {
                        "tipo": "talento",
                        "nome": "Rajada de Golpes (Flurry)"
                    }
                ]
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Especialista em Armadura (Armor Specialist)",
                    "Árvore de Aptidões: Comando (Commando)",
                    "Árvore de Aptidões: Mercenário (Mercenary)",
                    "Árvore de Aptidões: Especialista em Armas (Weapon Specialist)"
                ],
                "min": 1
            }
        ]
    },
    "Adepto da Força": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoImparTecnica",
        "arvores": [
            "Árvore de Aptidões: Guardião das Feras (Beastwarden)",
            "Árvore de Aptidões: Devoto do Lado Sombrio (Dark Side Devotee)",
            "Árvore de Aptidões: Adepto da Força (Force Adept)",
            "Árvore de Aptidões: Item da Força (Force Item)",
            "Árvore de Aptidões: Inquisidor Imperial (Imperial Inquisitor)",
            "Árvore de Aptidões: Místico (Mystic)",
            "Árvore de Aptidões: Telepata (Telepath)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "aptidoesDaForca",
                "min": 3
            }
        ]
    },
    "Discípulo da Força": {
        "tipo": "prestigio",
        "nivelMax": 5,
        "bba": "3/4",
        "vagas": "aptidaoImparSegredo",
        "arvores": [
            "Árvore de Aptidões: Adepto da Força (Force Adept)"
        ],
        "arvoresDaForca": true,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 12
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Devoto do Lado Sombrio (Dark Side Devotee)",
                    "Árvore de Aptidões: Adepto da Força (Force Adept)",
                    "Árvore de Aptidões: Item da Força (Force Item)"
                ],
                "min": 2
            },
            {
                "tipo": "poder",
                "nome": "Visão Distante (Farseeing)"
            },
            {
                "tipo": "escolhaQuantidade",
                "escolha": "tecnica",
                "min": 1
            }
        ]
    },
    "Pistoleiro": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Percepção (Awareness)",
            "Árvore de Aptidões: Carabineiro (Carbineer)",
            "Árvore de Aptidões: Fortuna (Fortune)",
            "Árvore de Aptidões: Pistoleiro (Gunslinger)",
            "Árvore de Aptidões: Pistoleiro de Pistola (Pistoleer)",
            "Árvore de Aptidões: Atirador de Elite (Sharpshooter)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "talento",
                "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
            },
            {
                "tipo": "talento",
                "nome": "Tiro Preciso (Precise Shot)"
            },
            {
                "tipo": "talento",
                "nome": "Saque Rápido (Quick Draw)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Pistolas"
            }
        ]
    },
    "Cavaleiro Jedi": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImparTecnica",
        "arvores": [
            "Árvore de Aptidões: Especialista em Armadura (Armor Specialist)",
            "Árvore de Aptidões: Duelista (Duelist)",
            "Árvore de Aptidões: Arquivista Jedi (Jedi Archivist)",
            "Árvore de Aptidões: Artesão Jedi (Jedi Artisan)",
            "Árvore de Aptidões: Mestre de Batalha Jedi (Jedi Battlemaster)",
            "Árvore de Aptidões: Consular Jedi (Jedi Consular)",
            "Árvore de Aptidões: Guardião Jedi (Jedi Guardian)",
            "Árvore de Aptidões: Curandeiro Jedi (Jedi Healer)",
            "Árvore de Aptidões: Instrutor Jedi (Jedi Instructor)",
            "Árvore de Aptidões: Investigador Jedi (Jedi Investigator)",
            "Árvore de Aptidões: Refugiado Jedi (Jedi Refugee)",
            "Árvore de Aptidões: Sentinela Jedi (Jedi Sentinel)",
            "Árvore de Aptidões: Sombra Jedi (Jedi Shadow)",
            "Árvore de Aptidões: Vigilante Jedi (Jedi Watchman)",
            "Árvore de Aptidões: Mestre de Armas Jedi (Jedi Weapon Master)",
            "Árvore de Aptidões: Combate com Sabre de Luz (Lightsaber Combat)",
            "Árvore de Aptidões: Formas de Sabre de Luz (Lightsaber Forms)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "bba",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "tipo": "texto",
                "texto": "Ter construído o próprio sabre de luz"
            },
            {
                "tipo": "texto",
                "texto": "Pertencer à tradição Jedi"
            }
        ]
    },
    "Mestre Jedi": {
        "tipo": "prestigio",
        "nivelMax": 5,
        "bba": "completo",
        "vagas": "aptidaoImparSegredo",
        "arvores": [
            "Árvore de Aptidões: Duelista (Duelist)"
        ],
        "arvoresDaForca": true,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 12
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "tipo": "escolhaQuantidade",
                "escolha": "tecnica",
                "min": 1
            },
            {
                "tipo": "texto",
                "texto": "Pertencer à tradição Jedi"
            }
        ]
    },
    "Oficial": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Comando (Commando)",
            "Árvore de Aptidões: Comandante Fugitivo (Fugitive Commander)",
            "Árvore de Aptidões: Liderança (Leadership)",
            "Árvore de Aptidões: Táticas Militares (Military Tactics)",
            "Árvore de Aptidões: Oficial Naval (Naval Officer)",
            "Árvore de Aptidões: Recrutador Rebelde (Rebel Recruiter)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "conhecimentoTaticas"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Liderança (Leadership)",
                    "Árvore de Aptidões: Comando (Commando)",
                    "Árvore de Aptidões: Veterano (Veteran)"
                ],
                "min": 1
            },
            {
                "tipo": "texto",
                "texto": "Pertencer a uma organização com braço militar ou paramilitar"
            }
        ]
    },
    "Aprendiz Sith": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImparTecnica",
        "arvores": [
            "Árvore de Aptidões: Especialista em Armadura (Armor Specialist)",
            "Árvore de Aptidões: Duelista (Duelist)",
            "Árvore de Aptidões: Combate com Sabre de Luz (Lightsaber Combat)",
            "Árvore de Aptidões: Alquimia Sith (Sith Alchemy)",
            "Árvore de Aptidões: Comandante Sith (Sith Commander)",
            "Árvore de Aptidões: Sith (Sith)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "tipo": "texto",
                "texto": "Pontuação do Lado Sombrio igual à Sabedoria"
            },
            {
                "tipo": "texto",
                "texto": "Pertencer aos Sith"
            }
        ]
    },
    "Lorde Sith": {
        "tipo": "prestigio",
        "nivelMax": 5,
        "bba": "completo",
        "vagas": "aptidaoImparSegredo",
        "arvores": [
            "Árvore de Aptidões: Sith (Sith)"
        ],
        "arvoresDaForca": true,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 12
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "tipo": "escolhaQuantidade",
                "escolha": "tecnica",
                "min": 1
            },
            {
                "tipo": "texto",
                "texto": "Pontuação do Lado Sombrio igual à Sabedoria"
            },
            {
                "tipo": "texto",
                "texto": "Pertencer aos Sith"
            }
        ]
    },
    "Assassino": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Assassino (Assassin)",
            "Árvore de Aptidões: GenoHaradan (GenoHaradan)",
            "Árvore de Aptidões: Envenenador Malkite (Malkite Poisoner)",
            "Árvore de Aptidões: Infortúnio (Misfortune)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "furtividade"
            },
            {
                "tipo": "talento",
                "nome": "Franco-Atirador (Sniper)"
            },
            {
                "tipo": "aptidao",
                "nome": "Golpe Covarde (Dastardly Strike)"
            }
        ]
    },
    "Cavaleiro Imperial": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImparTecnica",
        "arvores": [
            "Árvore de Aptidões: Especialista em Armadura (Armor Specialist)",
            "Árvore de Aptidões: Duelista (Duelist)",
            "Árvore de Aptidões: Armadura do Cavaleiro (Knight's Armor)",
            "Árvore de Aptidões: Determinação do Cavaleiro (Knight's Resolve)",
            "Árvore de Aptidões: Combate com Sabre de Luz (Lightsaber Combat)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "bba",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "usarForca"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Armadura (Armor Proficiency)",
                "detalhe": "Leve"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Armadura (Armor Proficiency)",
                "detalhe": "Média"
            },
            {
                "tipo": "talento",
                "nome": "Sensibilidade à Força (Force Sensitivity)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Sabres de Luz"
            },
            {
                "tipo": "texto",
                "texto": "Ser defensor jurado do Imperador Roan Fel"
            }
        ]
    },
    "Agente Corporativo": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Poder Corporativo (Corporate Power)",
            "Árvore de Aptidões: Liderança (Leadership)",
            "Árvore de Aptidões: Linhagem (Lineage)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "obterInfo"
            },
            {
                "tipo": "pericia",
                "pericia": "conhecimentoBurocracia"
            },
            {
                "tipo": "talento",
                "nome": "Foco em Perícia (Skill Focus)",
                "detalhe": "Burocracia"
            },
            {
                "tipo": "texto",
                "texto": "Trabalhar para uma grande corporação interestelar"
            }
        ]
    },
    "Gladiador": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Especialista em Armadura (Armor Specialist)",
            "Árvore de Aptidões: Percepção (Awareness)",
            "Árvore de Aptidões: Combate Gladiatorial (Gladiatorial Combat)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "bba",
                "min": 7
            },
            {
                "tipo": "talento",
                "nome": "Limite de Dano Aprimorado (Improved Damage Threshold)"
            },
            {
                "tipo": "talento",
                "nome": "Proficiência com Arma (Weapon Proficiency)",
                "detalhe": "Armas Brancas Avançadas"
            }
        ]
    },
    "Duelista de Melee": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Brigão (Brawler)",
            "Árvore de Aptidões: Duelista Corpo a Corpo (Melee Duelist)",
            "Árvore de Aptidões: Especialista em Armas (Weapon Specialist)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "bba",
                "min": 7
            },
            {
                "tipo": "talento",
                "nome": "Defesa Corpo a Corpo (Melee Defense)"
            },
            {
                "tipo": "talento",
                "nome": "Golpe Rápido (Rapid Strike)"
            },
            {
                "tipo": "alguma",
                "requisitos": [
                    {
                        "tipo": "talento",
                        "nome": "Foco em Arma (Weapon Focus)",
                        "detalhe": "Armas Brancas Avançadas"
                    },
                    {
                        "tipo": "talento",
                        "nome": "Foco em Arma (Weapon Focus)",
                        "detalhe": "Sabres de Luz"
                    },
                    {
                        "tipo": "talento",
                        "nome": "Foco em Arma (Weapon Focus)",
                        "detalhe": "Armas Simples"
                    }
                ]
            }
        ]
    },
    "Executor": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Aplicação da Lei (Enforcement)",
            "Árvore de Aptidões: Sobrevivente (Survivor)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "obterInfo"
            },
            {
                "tipo": "pericia",
                "pericia": "percepcao"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Sobrevivente (Survivor)"
                ],
                "min": 1
            },
            {
                "tipo": "texto",
                "texto": "Pertencer a uma organização policial ou de segurança"
            }
        ]
    },
    "Droide Independente": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Autonomia (Autonomy)",
            "Árvore de Aptidões: Droide de Elite (Elite Droid)",
            "Árvore de Aptidões: Droide Especializado (Specialized Droid)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 3
            },
            {
                "tipo": "pericia",
                "pericia": "usarComputador"
            },
            {
                "tipo": "droide",
                "droide": true
            },
            {
                "tipo": "texto",
                "texto": "Sistema de droide Processador Heurístico"
            }
        ]
    },
    "Infiltrador": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "3/4",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Rede de Espionagem Bothan (Bothan Spynet)",
            "Árvore de Aptidões: Camuflagem (Camouflage)",
            "Árvore de Aptidões: Infiltração (Infiltration)",
            "Árvore de Aptidões: Espião (Spy)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "percepcao"
            },
            {
                "tipo": "pericia",
                "pericia": "furtividade"
            },
            {
                "tipo": "talento",
                "nome": "Foco em Perícia (Skill Focus)",
                "detalhe": "Furtividade"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Camuflagem (Camouflage)",
                    "Árvore de Aptidões: Espião (Spy)"
                ],
                "min": 2
            }
        ]
    },
    "Corsário Mestre": {
        "tipo": "prestigio",
        "nivelMax": 10,
        "bba": "completo",
        "vagas": "aptidaoImpar",
        "arvores": [
            "Árvore de Aptidões: Infâmia (Infamy)",
            "Árvore de Aptidões: Pirataria (Piracy)",
            "Árvore de Aptidões: Corsário (Privateer)",
            "Árvore de Aptidões: Espacial (Spacer)"
        ],
        "arvoresDaForca": false,
        "preRequisitos": [
            {
                "tipo": "nivel",
                "min": 7
            },
            {
                "tipo": "pericia",
                "pericia": "enganacao"
            },
            {
                "tipo": "pericia",
                "pericia": "pilotar"
            },
            {
                "tipo": "talento",
                "nome": "Combate Veicular (Vehicular Combat)"
            },
            {
                "tipo": "arvoreQuantidade",
                "arvores": [
                    "Árvore de Aptidões: Infortúnio (Misfortune)",
                    "Árvore de Aptidões: Contrabando (Smuggling)",
                    "Árvore de Aptidões: Espacial (Spacer)"
                ],
                "min": 2
            }
        ]
    }
};
