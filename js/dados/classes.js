const HEROIC_CLASSES = ["Jedi", "Sith", "Nobre", "Malandro", "Batedor", "Soldado"];
const PRESTIGE_CLASSES = [
    "Piloto Ás", "Caçador de Recompensas", "Senhor do Crime", "Soldado de Elite", 
    "Adepto da Força", "Discípulo da Força", "Pistoleiro", "Cavaleiro Jedi", 
    "Mestre Jedi", "Oficial",
    "Agente Corporativo", "Gladiador", "Duelista de Melee", "Executor",
    "Droide Independente", "Infiltrador", "Corsário Mestre"
];

const CLASS_DATA = {
    "Jedi": {
            "nome": "Jedi",
            "desc": "Os Jedi são os guardiões da paz e justiça na galáxia. Eles aprendem a dominar a Força e sua arma característica é o Sabre de Luz.",
            "hp": "30 + CON no 1º nível; 1d10 + CON por nível.",
            "forcePoints": "5 + metade do nível do personagem por nível de classe.",
            "defenses": "Fortitude +1, Reflexos +1, Vontade +1.",
            "skills": "2 + INT: Acrobacia, Tolerância, Iniciativa, Saltar, Conhecimento, Mecânica, Percepção, Pilotar, Usar a Força.",
            "feats": "Sensibilidade à Força, Proficiência com Sabres de Luz, Proficiência com Armas Simples.",
            "defenseBonuses": {
                    "FORT": 1,
                    "REF": 1,
                    "VON": 1
            },
            "initialTalents": [
                    "Sensibilidade à Força",
                    "Proficiência com Sabres de Luz",
                    "Proficiência com Armas Simples"
            ],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Sabre de Luz, Aptidão, Talentos Iniciais"
                    ],
                    [
                            "2º",
                            "+2",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão, Construção de Sabre de Luz"
                    ],
                    [
                            "8º",
                            "+8",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "11º",
                            "+11",
                            "Aptidão"
                    ],
                    [
                            "12º",
                            "+12",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "13º",
                            "+13",
                            "Aptidão"
                    ],
                    [
                            "14º",
                            "+14",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "15º",
                            "+15",
                            "Aptidão"
                    ],
                    [
                            "16º",
                            "+16",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "17º",
                            "+17",
                            "Aptidão"
                    ],
                    [
                            "18º",
                            "+18",
                            "Talento Bônus (Jedi)"
                    ],
                    [
                            "19º",
                            "+19",
                            "Aptidão"
                    ],
                    [
                            "20º",
                            "+20",
                            "Talento Bônus (Jedi)"
                    ]
            ]
    },
    "Noble": {
            "nome": "Nobre",
            "desc": "O Nobre é um negociador astuto que inspira confiança e é um excelente líder. Usa intelecto e carisma para navegar na galáxia.",
            "hp": "18 + CON no 1º nível; 1d6 + CON por nível.",
            "forcePoints": "5 + metade do nível do personagem por nível de classe.",
            "defenses": "Reflexos +1, Vontade +2.",
            "skills": "6 + INT: Enganar, Reunir Informação, Iniciativa, Conhecimento, Percepção, Persuasão, Pilotar, Montar, Tratar Ferimento, Usar Computador.",
            "feats": "Linguista, Proficiência com Pistolas, Proficiência com Armas Simples.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 1,
                    "VON": 2
            },
            "initialTalents": [
                    "Linguista",
                    "Proficiência com Pistolas",
                    "Proficiência com Armas Simples"
            ],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão, Talentos Iniciais"
                    ],
                    [
                            "2º",
                            "+1",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "11º",
                            "+8",
                            "Aptidão"
                    ],
                    [
                            "12º",
                            "+9",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "13º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "14º",
                            "+10",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "15º",
                            "+11",
                            "Aptidão"
                    ],
                    [
                            "16º",
                            "+12",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "17º",
                            "+12",
                            "Aptidão"
                    ],
                    [
                            "18º",
                            "+13",
                            "Talento Bônus (Nobre)"
                    ],
                    [
                            "19º",
                            "+14",
                            "Aptidão"
                    ],
                    [
                            "20º",
                            "+15",
                            "Talento Bônus (Nobre)"
                    ]
            ]
    },
    "Scoundrel": {
            "nome": "Malandro",
            "desc": "O Malandro é um ladino habilidoso que prefere a furtividade e a astúcia à força bruta. Vivem no limiar da lei.",
            "hp": "18 + CON no 1º nível; 1d6 + CON por nível.",
            "forcePoints": "5 + metade do nível do personagem por nível de classe.",
            "defenses": "Reflexos +2, Vontade +1.",
            "skills": "4 + INT: Acrobacia, Enganar, Reunir Informação, Iniciativa, Conhecimento, Mecânica, Percepção, Persuasão, Pilotar, Furtividade, Usar Computador.",
            "feats": "Tiro à Queima-Roupa, Proficiência com Pistolas, Proficiência com Armas Simples.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 2,
                    "VON": 1
            },
            "initialTalents": [
                    "Tiro à Queima-Roupa",
                    "Proficiência com Pistolas",
                    "Proficiência com Armas Simples"
            ],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão, Talentos Iniciais"
                    ],
                    [
                            "2º",
                            "+1",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "11º",
                            "+8",
                            "Aptidão"
                    ],
                    [
                            "12º",
                            "+9",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "13º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "14º",
                            "+10",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "15º",
                            "+11",
                            "Aptidão"
                    ],
                    [
                            "16º",
                            "+12",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "17º",
                            "+12",
                            "Aptidão"
                    ],
                    [
                            "18º",
                            "+13",
                            "Talento Bônus (Malandro)"
                    ],
                    [
                            "19º",
                            "+14",
                            "Aptidão"
                    ],
                    [
                            "20º",
                            "+15",
                            "Talento Bônus (Malandro)"
                    ]
            ]
    },
    "Scout": {
            "nome": "Batedor",
            "desc": "Exploradores astutos e sobreviventes natos, os Batedores operam nas fronteiras selvagens do espaço.",
            "hp": "24 + CON no 1º nível; 1d8 + CON por nível.",
            "forcePoints": "5 + metade do nível do personagem por nível de classe.",
            "defenses": "Fortitude +1, Reflexos +2.",
            "skills": "5 + INT: Escalar, Tolerância, Iniciativa, Saltar, Conhecimento, Mecânica, Percepção, Pilotar, Montar, Furtividade, Sobrevivência, Nadar.",
            "feats": "Shake It Off, Proficiência com Pistolas, Proficiência com Rifles, Proficiência com Armas Simples.",
            "defenseBonuses": {
                    "FORT": 1,
                    "REF": 2,
                    "VON": 0
            },
            "initialTalents": [
                    "Shake It Off",
                    "Proficiência com Pistolas",
                    "Proficiência com Rifles",
                    "Proficiência com Armas Simples"
            ],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão, Talentos Iniciais"
                    ],
                    [
                            "2º",
                            "+1",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "11º",
                            "+8",
                            "Aptidão"
                    ],
                    [
                            "12º",
                            "+9",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "13º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "14º",
                            "+10",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "15º",
                            "+11",
                            "Aptidão"
                    ],
                    [
                            "16º",
                            "+12",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "17º",
                            "+12",
                            "Aptidão"
                    ],
                    [
                            "18º",
                            "+13",
                            "Talento Bônus (Batedor)"
                    ],
                    [
                            "19º",
                            "+14",
                            "Aptidão"
                    ],
                    [
                            "20º",
                            "+15",
                            "Talento Bônus (Batedor)"
                    ]
            ]
    },
    "Soldier": {
            "nome": "Soldado",
            "desc": "Guerreiros disciplinados com treinamento marcial inigualável, os Soldados são os mestres do combate na galáxia.",
            "hp": "30 + CON no 1º nível; 1d10 + CON por nível.",
            "forcePoints": "5 + metade do nível do personagem por nível de classe.",
            "defenses": "Reflexos +1, Fortitude +2.",
            "skills": "3 + INT: Escalar, Tolerância, Iniciativa, Saltar, Conhecimento (Táticas), Mecânica, Percepção, Pilotar, Nadar, Tratar Ferimento, Usar Computador.",
            "feats": "Proficiência com Armaduras (Leve, Média), Proficiência com Pistolas, Proficiência com Rifles, Proficiência com Armas Simples.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 1,
                    "VON": 0
            },
            "initialTalents": [
                    "Proficiência com Armaduras (Leve, Média)",
                    "Proficiência com Pistolas",
                    "Proficiência com Rifles",
                    "Proficiência com Armas Simples"
            ],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão, Talentos Iniciais"
                    ],
                    [
                            "2º",
                            "+2",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "11º",
                            "+11",
                            "Aptidão"
                    ],
                    [
                            "12º",
                            "+12",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "13º",
                            "+13",
                            "Aptidão"
                    ],
                    [
                            "14º",
                            "+14",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "15º",
                            "+15",
                            "Aptidão"
                    ],
                    [
                            "16º",
                            "+16",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "17º",
                            "+17",
                            "Aptidão"
                    ],
                    [
                            "18º",
                            "+18",
                            "Talento Bônus (Soldado)"
                    ],
                    [
                            "19º",
                            "+19",
                            "Aptidão"
                    ],
                    [
                            "20º",
                            "+20",
                            "Talento Bônus (Soldado)"
                    ]
            ]
    },
    "Sith": {
            "nome": "Sith",
            "desc": "Manifestam a Força através de emoções intensas. São os antagonistas naturais dos Jedi, buscando poder e domínio.",
            "hp": "30 + CON no 1º nível; 1d10 + CON por nível.",
            "forcePoints": "5 + metade do nível do personagem por nível de classe.",
            "defenses": "Fortitude +1, Reflexos +1, Vontade +1.",
            "skills": "2 + INT: Acrobacia, Conhecimento, Enganar, Iniciativa, Intimidar, Percepção, Persuasão, Pilotar, Saltar, Usar a Força.",
            "feats": "Sensibilidade à Força, Proficiência com Sabres de Luz, Proficiência com Armas Simples.",
            "defenseBonuses": {
                    "FORT": 1,
                    "REF": 1,
                    "VON": 1
            },
            "initialTalents": [
                    "Sensibilidade à Força",
                    "Proficiência com Sabres de Luz",
                    "Proficiência com Armas Simples"
            ],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Sabre de Luz, Aptidão, Talentos Iniciais"
                    ],
                    [
                            "2º",
                            "+2",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "7º",
                            "+7",
                            "Construir Sabre de Luz, Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "11º",
                            "+11",
                            "Aptidão"
                    ],
                    [
                            "12º",
                            "+12",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "13º",
                            "+13",
                            "Aptidão"
                    ],
                    [
                            "14º",
                            "+14",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "15º",
                            "+15",
                            "Aptidão"
                    ],
                    [
                            "16º",
                            "+16",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "17º",
                            "+17",
                            "Aptidão"
                    ],
                    [
                            "18º",
                            "+18",
                            "Talento Bônus (Sith)"
                    ],
                    [
                            "19º",
                            "+19",
                            "Aptidão"
                    ],
                    [
                            "20º",
                            "+20",
                            "Talento Bônus (Sith)"
                    ]
            ]
    },
    "Ace Pilot": {
            "nome": "Piloto Ás",
            "desc": "Classe de Prestígio.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 4,
                    "VON": 0
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Esquiva Veicular +1"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Esquiva Veicular +2"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Esquiva Veicular +3"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Esquiva Veicular +4"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Esquiva Veicular +5"
                    ]
            ]
    },
    "Bounty Hunter": {
            "nome": "Caçador de Recompensas",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 4,
                    "VON": 0
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Inimigo Familiar +1"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Inimigo Familiar +2"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Inimigo Familiar +3"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Inimigo Familiar +4"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Inimigo Familiar +5"
                    ]
            ]
    },
    "Crime Lord": {
            "nome": "Senhor do Crime",
            "desc": "Classe de Prestígio.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +2, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 2,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Cobertura de Comando +1, Aptidão"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Cobertura de Comando +2, Aptidão"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Cobertura de Comando +3, Aptidão"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Cobertura de Comando +4, Aptidão"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Cobertura de Comando +5, Aptidão"
                    ]
            ]
    },
    "Elite Trooper": {
            "nome": "Soldado de Elite",
            "desc": "Classe de Prestígio.",
            "hp": "1d12 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +4, Reflexos +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 4,
                    "REF": 2,
                    "VON": 0
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Adiar Dano, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Damage Reduction 1"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Damage Reduction 2"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Damage Reduction 3"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Damage Reduction 4"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Damage Reduction 5"
                    ]
            ]
    },
    "Force Adept": {
            "nome": "Adepto da Força",
            "desc": "Classe de Prestígio.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +2, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 2,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Técnica da Força"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Técnica da Força"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Técnica da Força"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Técnica da Força"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Técnica da Força"
                    ]
            ]
    },
    "Force Disciple": {
            "nome": "Discípulo da Força",
            "desc": "Classe de Prestígio.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "7 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +3, Reflexos +3, Vontade +6.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 3,
                    "REF": 3,
                    "VON": 6
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Indomável, Profeta, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Segredo da Força, Profeta"
                    ],
                    [
                            "3º",
                            "+2",
                            "Segredo da Força, Profeta, Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Segredo da Força, Profeta"
                    ],
                    [
                            "5º",
                            "+3",
                            "Segredo da Força, Profeta, Aptidão"
                    ]
            ]
    },
    "Gunslinger": {
            "nome": "Pistoleiro",
            "desc": "Classe de Prestígio.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +4, Vontade +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 4,
                    "VON": 2
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Arma de Confiança +1"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Arma de Confiança +2"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Arma de Confiança +3"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Arma de Confiança +4"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Arma de Confiança +5"
                    ]
            ]
    },
    "Jedi Knight": {
            "nome": "Cavaleiro Jedi",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +2, Vontade +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 2,
                    "VON": 2
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Técnica da Força"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Técnica da Força"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Técnica da Força"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Técnica da Força"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Técnica da Força"
                    ]
            ]
    },
    "Jedi Master": {
            "nome": "Mestre Jedi",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "7 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +3, Reflexos +3, Vontade +3.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 3,
                    "REF": 3,
                    "VON": 3
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Destemido, Serenidade, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Segredo da Força"
                    ],
                    [
                            "3º",
                            "+3",
                            "Segredo da Força, Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Segredo da Força"
                    ],
                    [
                            "5º",
                            "+5",
                            "Segredo da Força, Aptidão"
                    ]
            ]
    },
    "Officer": {
            "nome": "Oficial",
            "desc": "Classe de Prestígio.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +2, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 2,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Cobertura de Comando +1, Compartilhar Aptidão"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Cobertura de Comando +2, Compartilhar Aptidão"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Cobertura de Comando +3, Compartilhar Aptidão"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Cobertura de Comando +4, Compartilhar Aptidão"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Cobertura de Comando +5, Compartilhar Aptidão"
                    ]
            ]
    },
    "Sith Apprentice": {
            "nome": "Aprendiz Sith",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +2, Vontade +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 2,
                    "VON": 2
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Técnica da Força"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Técnica da Força"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Técnica da Força"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Técnica da Força"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Técnica da Força"
                    ]
            ]
    },
    "Sith Lord": {
            "nome": "Lorde Sith",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "7 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +3, Reflexos +3, Vontade +3.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 3,
                    "REF": 3,
                    "VON": 3
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Destemido, Aptidão, Tentação"
                    ],
                    [
                            "2º",
                            "+2",
                            "Segredo da Força"
                    ],
                    [
                            "3º",
                            "+3",
                            "Segredo da Força, Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Segredo da Força"
                    ],
                    [
                            "5º",
                            "+5",
                            "Segredo da Força, Aptidão"
                    ]
            ]
    },
    "Assassin": {
            "nome": "Assassino",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 4,
                    "VON": 0
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Marca +1"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Marca +2"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Marca +3"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Marca +4"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Marca +5"
                    ]
            ]
    },
    "Imperial Knight": {
            "nome": "Cavaleiro Imperial",
            "desc": "Classe de Prestígio.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +2, Vontade +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 2,
                    "VON": 2
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Técnica da Força"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Técnica da Força"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Técnica da Força"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Técnica da Força"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Técnica da Força"
                    ]
            ]
    },
    "Corporate Agent": {
            "nome": "Agente Corporativo",
            "desc": "Classe de Prestígio (Knights of the Old Republic Campaign Guide). Agentes corporativos cuidam dos interesses de grandes corporações interestelares, podendo se especializar em segurança, fraude, exploração, administração ou espionagem corporativa.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +2, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 2,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Liderança Executiva (1/Encontro)"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Liderança Executiva (2/Encontro)"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Liderança Executiva (3/Encontro)"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Liderança Executiva (4/Encontro)"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Liderança Executiva (5/Encontro)"
                    ]
            ]
    },
    "Gladiator": {
            "nome": "Gladiador",
            "desc": "Classe de Prestígio (Knights of the Old Republic Campaign Guide). Gladiadores são combatentes de arena extremamente perigosos, vindos de diversos backgrounds — ex-soldados, caçadores de emoções ou prisioneiros forçados a lutar.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Fortitude +2, Reflexos +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 2,
                    "REF": 4,
                    "VON": 0
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Inabalável (1/Encontro)"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Inabalável (2/Encontro)"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Inabalável (3/Encontro)"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Inabalável (4/Encontro)"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Inabalável (5/Encontro)"
                    ]
            ]
    },
    "Melee Duelist": {
            "nome": "Duelista de Melee",
            "desc": "Classe de Prestígio (Knights of the Old Republic Campaign Guide). Especialistas em combate singular, os Duelistas de Melee dominam manobras, fintas e truques com armas corpo a corpo. Jedi e Sith também podem se tornar Duelistas para aprimorar seu combate com sabres de luz.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +4, Vontade +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 4,
                    "VON": 2
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Mestre do Movimento (1/Encontro)"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Mestre do Movimento (2/Encontro)"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Mestre do Movimento (3/Encontro)"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Mestre do Movimento (4/Encontro)"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Mestre do Movimento (5/Encontro)"
                    ]
            ]
    },
    "Enforcer": {
            "nome": "Executor",
            "desc": "Classe de Prestígio (Force Unleashed Campaign Guide). Executores são oficiais de elite da lei — investigadores habilidosos, patrulheiros experientes e líderes dentro de suas organizações. Podem ser honestos defensores da paz ou corruptos em busca de poder pessoal.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +4, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 4,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Recursos, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Recursos, Suspeito Alvo +1"
                    ],
                    [
                            "3º",
                            "+2",
                            "Recursos, Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Recursos, Suspeito Alvo +2"
                    ],
                    [
                            "5º",
                            "+3",
                            "Recursos, Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Recursos, Suspeito Alvo +3"
                    ],
                    [
                            "7º",
                            "+5",
                            "Recursos, Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Recursos, Suspeito Alvo +4"
                    ],
                    [
                            "9º",
                            "+6",
                            "Recursos, Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Recursos, Suspeito Alvo +5"
                    ]
            ]
    },
    "Independent Droid": {
            "nome": "Droide Independente",
            "desc": "Classe de Prestígio (Force Unleashed Campaign Guide). Droides altamente independentes e autossuficientes que passaram por um evento que quebrou sua programação — ordens conflitantes, processador com defeito ou ação deliberada. Rejeitam a noção de pertencer a alguém e expressam forte individualidade.",
            "hp": "1d12 por nível.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +2, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 2,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Sapiência, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Espírito Independente +1"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Espírito Independente +2"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Espírito Independente +3"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Espírito Independente +4"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Espírito Independente +5"
                    ]
            ]
    },
    "Infiltrator": {
            "nome": "Infiltrador",
            "desc": "Classe de Prestígio (Force Unleashed Campaign Guide). Infiltradores são espiões, agentes secretos e operativos de forças especiais que se especializam em penetrar secretamente fortalezas ou organizações inimigas. Operam individualmente ou em pequenos grupos, com ênfase em furtividade e combate discreto.",
            "hp": "1d8 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +4, Vontade +2.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 4,
                    "VON": 2
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+0",
                            "Bônus de Defesa, Aptidão"
                    ],
                    [
                            "2º",
                            "+1",
                            "Atordoamento Desarmado (+1 dado)"
                    ],
                    [
                            "3º",
                            "+2",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+3",
                            "Infiltrador Líder"
                    ],
                    [
                            "5º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+4",
                            "Atordoamento Desarmado (+2 dados)"
                    ],
                    [
                            "7º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+6",
                            "Infiltrador Líder (x2)"
                    ],
                    [
                            "9º",
                            "+6",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+7",
                            "Atordoamento Desarmado (+3 dados)"
                    ]
            ]
    },
    "Master Privateer": {
            "nome": "Corsário Mestre",
            "desc": "Classe de Prestígio (Force Unleashed Campaign Guide). Corsários Mestres são especialistas na arte de parar e apreender naves. São pilotos habilidosos, combatentes capazes e negociadores astutos que operam sob cartas de corso de governos ou corporações. A linha entre piratas e corsários é frequentemente borrada.",
            "hp": "1d10 por nível + CON.",
            "forcePoints": "6 + metade do nível de personagem a cada nível nesta classe.",
            "defenses": "Reflexos +2, Vontade +4.",
            "skills": "Não ganha perícias treinadas adicionais.",
            "feats": "Não ganha talentos iniciais.",
            "defenseBonuses": {
                    "FORT": 0,
                    "REF": 2,
                    "VON": 4
            },
            "initialTalents": [],
            "table": [
                    [
                            "Nível",
                            "BBA",
                            "Características"
                    ],
                    [
                            "1º",
                            "+1",
                            "Bônus de Defesa, Tentação da Pirataria, Aptidão"
                    ],
                    [
                            "2º",
                            "+2",
                            "Corsário Veterano (1/Encontro)"
                    ],
                    [
                            "3º",
                            "+3",
                            "Aptidão"
                    ],
                    [
                            "4º",
                            "+4",
                            "Corsário Veterano (2/Encontro)"
                    ],
                    [
                            "5º",
                            "+5",
                            "Aptidão"
                    ],
                    [
                            "6º",
                            "+6",
                            "Corsário Veterano (3/Encontro)"
                    ],
                    [
                            "7º",
                            "+7",
                            "Aptidão"
                    ],
                    [
                            "8º",
                            "+8",
                            "Corsário Veterano (4/Encontro)"
                    ],
                    [
                            "9º",
                            "+9",
                            "Aptidão"
                    ],
                    [
                            "10º",
                            "+10",
                            "Corsário Veterano (5/Encontro)"
                    ]
            ]
    }
};
