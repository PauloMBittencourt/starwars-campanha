// Pré-requisitos de Talentos e Aptidões, usados para liberar ou bloquear escolhas.
// Chave = nome na Biblioteca, com o detalhe entre colchetes quando importa: "Artes Marciais (...) [II]".
//   atributo = { attr, min }   bba = { min }   pericia = { pericia } (treinada)   nivel = { min } (nível de personagem)
//   talento / aptidao = { nome, detalhe? }     texto = não dá para checar: só aviso para o Mestre conferir

const TALENT_PREREQUISITES = {
    "Golpe Acrobático (Acrobatic Strike)": [
        {
            "tipo": "pericia",
            "pericia": "acrobacia"
        }
    ],
    "Proficiência com Armadura (Armor Proficiency) [Pesada]": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Leve"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Média"
        }
    ],
    "Proficiência com Armadura (Armor Proficiency) [Leve]": [],
    "Proficiência com Armadura (Armor Proficiency) [Média]": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Leve"
        }
    ],
    "Investida Bantha (Bantha Rush)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Fogo em Rajada (Burst Fire)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Pesadas"
        }
    ],
    "Tiro Cuidadoso (Careful Shot)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "bba",
            "min": 2
        }
    ],
    "Fogo em Investida (Charging Fire)": [
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Trespassar (Cleave)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Ataque Poderoso (Power Attack)"
        }
    ],
    "Reflexos de Combate (Combat Reflexes)": [],
    "Ataque Coordenado (Coordinated Attack)": [
        {
            "tipo": "bba",
            "min": 2
        }
    ],
    "Esmagar (Crush)": [
        {
            "tipo": "talento",
            "nome": "Imobilizar (Pin)"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Cirurgia Cibernética (Cybernetic Surgery)": [
        {
            "tipo": "pericia",
            "pericia": "primeiros"
        }
    ],
    "Olho Morto (Deadeye)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Preciso (Precise Shot)"
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Esquiva (Dodge)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Ataque Duplo (Double Attack)": [
        {
            "tipo": "bba",
            "min": 6
        }
    ],
    "Fúria Pavorosa (Dreadful Rage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Fúria"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III)) [I]": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III)) [II]": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 15
        },
        {
            "tipo": "bba",
            "min": 6
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        }
    ],
    "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III)) [III]": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 17
        },
        {
            "tipo": "bba",
            "min": 11
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "II"
        }
    ],
    "Proficiência com Arma Exótica (Exotic Weapon Proficiency)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Fúria Extra (Extra Rage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Fúria"
        }
    ],
    "Recuperar o Fôlego Extra (Extra Second Wind)": [
        {
            "tipo": "pericia",
            "pericia": "resistencia"
        }
    ],
    "Tiro Distante (Far Shot)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        }
    ],
    "Dádiva da Força (Force Boon)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        }
    ],
    "Sensibilidade à Força (Force Sensitivity)": [
        {
            "tipo": "droide",
            "droide": false
        }
    ],
    "Treinamento da Força (Force Training)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        }
    ],
    "Trespassar Maior (Great Cleave)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Ataque Poderoso (Power Attack)"
        },
        {
            "tipo": "talento",
            "nome": "Trespassar (Cleave)"
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Investida Aprimorada (Improved Charge)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Esquiva (Dodge)"
        },
        {
            "tipo": "talento",
            "nome": "Mobilidade (Mobility)"
        }
    ],
    "Defesas Aprimoradas (Improved Defenses)": [],
    "Desarmar Aprimorado (Improved Disarm)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Defesa Corpo a Corpo (Melee Defense)"
        }
    ],
    "Limite de Dano Aprimorado (Improved Damage Threshold)": [],
    "Linguista (Linguist)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        }
    ],
    "Artes Marciais (I, II e III) (Martial Arts (I, II, and III)) [I]": [],
    "Artes Marciais (I, II e III) (Martial Arts (I, II, and III)) [II]": [
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "bba",
            "min": 3
        }
    ],
    "Artes Marciais (I, II e III) (Martial Arts (I, II, and III)) [III]": [
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "II"
        },
        {
            "tipo": "bba",
            "min": 6
        }
    ],
    "Defesa Corpo a Corpo (Melee Defense)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        }
    ],
    "Golpe Poderoso (Mighty Swing)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        }
    ],
    "Mobilidade (Mobility)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Esquiva (Dodge)"
        }
    ],
    "Imobilizar (Pin)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Tiro à Queima-Roupa (Point Blank Shot)": [],
    "Ataque Poderoso (Power Attack)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        }
    ],
    "Investida Poderosa (Powerful Charge)": [
        {
            "tipo": "tamanho",
            "tamanhos": [
                "medio",
                "grande"
            ],
            "texto": "Tamanho Médio ou maior"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Tiro Preciso (Precise Shot)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        }
    ],
    "Saque Rápido (Quick Draw)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Tiro Rápido (Rapid Shot)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Golpe Rápido (Rapid Strike)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Ataque em Corrida (Running Attack)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Sacudir o Efeito (Shake It Off)": [
        {
            "tipo": "atributo",
            "attr": "CON",
            "min": 13
        },
        {
            "tipo": "pericia",
            "pericia": "resistencia"
        }
    ],
    "Foco em Perícia (Skill Focus)": [],
    "Treinamento em Perícia (Skill Training)": [],
    "Franco-Atirador (Sniper)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Preciso (Precise Shot)"
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Forte na Força (Strong in the Force)": [],
    "Especialização Cirúrgica (Surgical Expertise)": [
        {
            "tipo": "pericia",
            "pericia": "primeiros"
        }
    ],
    "Arremessar (Throw)": [
        {
            "tipo": "talento",
            "nome": "Derrubar (Trip)"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Robustez (Toughness)": [],
    "Derrubar (Trip)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Ataque Triplo (Triple Attack)": [
        {
            "tipo": "bba",
            "min": 11
        },
        {
            "tipo": "talento",
            "nome": "Ataque Duplo (Double Attack)"
        }
    ],
    "Crítico Triplo (Triple Crit)": [
        {
            "tipo": "bba",
            "min": 8
        }
    ],
    "Combate Veicular (Vehicular Combat)": [
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Acuidade com Arma (Weapon Finesse)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Foco em Arma (Weapon Focus)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "@escolhido"
        }
    ],
    "Proficiência com Arma (Weapon Proficiency)": [],
    "Ataque Turbilhão (Whirlwind Attack)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Defesa Corpo a Corpo (Melee Defense)"
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Projetista de Naves (Starship Designer)": [
        {
            "tipo": "talento",
            "nome": "Especialista Técnico (Tech Specialist)"
        },
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Táticas de Nave (Starship Tactics)": [
        {
            "tipo": "talento",
            "nome": "Combate Veicular (Vehicular Combat)"
        },
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Gênio Tático (Tactical Genius)": [
        {
            "tipo": "talento",
            "nome": "Táticas de Nave (Starship Tactics)"
        },
        {
            "tipo": "talento",
            "nome": "Combate Veicular (Vehicular Combat)"
        },
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Especialista Técnico (Tech Specialist)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Algumas Manobras (A Few Maneuvers)": [
        {
            "tipo": "talento",
            "nome": "Esquiva (Dodge)"
        },
        {
            "tipo": "talento",
            "nome": "Combate Veicular (Vehicular Combat)"
        }
    ],
    "Golpe de Impulso (Momentum Strike)": [
        {
            "tipo": "periciaAlguma",
            "pericias": [
                "pilotar",
                "montaria"
            ]
        }
    ],
    "Defesa Montada (Mounted Defense)": [
        {
            "tipo": "periciaAlguma",
            "pericias": [
                "pilotar",
                "montaria"
            ]
        }
    ],
    "Fogo de Supressão (Suppression Fire)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Fogo em Rajada (Burst Fire)"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Pesadas"
        }
    ],
    "Golpe Acelerado (Accelerated Strike)": [
        {
            "tipo": "bba",
            "min": 6
        }
    ],
    "Condicionamento (Conditioning)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "atributo",
            "attr": "CON",
            "min": 13
        }
    ],
    "Golpe Crítico (Critical Strike)": [
        {
            "tipo": "bba",
            "min": 9
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)"
        }
    ],
    "Treinamento Echani (Echani Training)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        }
    ],
    "Rajada de Golpes (Flurry)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Prontidão da Força (Force Readiness)": [],
    "Engenhoqueiro (Gearhead)": [],
    "Treinamento com Implantes (Implant Training)": [
        {
            "tipo": "texto",
            "texto": "Possuir um implante cibernético"
        }
    ],
    "Golpe Rápido Aprimorado (Improved Rapid Strike)": [
        {
            "tipo": "talento",
            "nome": "Golpe Rápido (Rapid Strike)"
        }
    ],
    "Agilidade Aumentada (Increased Agility)": [
        {
            "tipo": "talento",
            "nome": "Condicionamento (Conditioning)"
        }
    ],
    "Atualização Lógica: Tático (Logic Upgrade: Tactician)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Treinamento Mandaloriano (Mandalorian Training)": [
        {
            "tipo": "talento",
            "nome": "Fogo em Investida (Charging Fire)"
        }
    ],
    "Resistência a Veneno (Poison Resistance)": [
        {
            "tipo": "atributo",
            "attr": "CON",
            "min": 13
        }
    ],
    "Disparo Poderoso (Power Blast)": [],
    "Perícia Rápida (Quick Skill)": [],
    "Treinamento Militar Republicano (Republic Military Training)": [],
    "Treinamento Militar Sith (Sith Military Training)": [],
    "Tiro de Franco-Atirador (Sniper Shot)": [],
    "Defesa Acrobática (Tumble Defense)": [],
    "Golpe de Retirada (Withdrawal Strike)": [
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Ataque Vantajoso (Advantageous Attack)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Cobertura Vantajosa (Advantageous Cover)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Arremesso Angulado (Angled Throw)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Mau Pressentimento (Bad Feeling)": [],
    "Barragem de Blaster (Blaster Barrage)": [
        {
            "tipo": "talento",
            "nome": "Ataque Coordenado (Coordinated Attack)"
        }
    ],
    "Fúria Controlada (Controlled Rage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Fúria"
        }
    ],
    "Fogo Cruzado (Crossfire)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Preciso (Precise Shot)"
        },
        {
            "tipo": "bba",
            "min": 6
        }
    ],
    "Ataque Astuto (Cunning Attack)": [],
    "Fúria Focada (Focused Rage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Fúria"
        },
        {
            "tipo": "talento",
            "nome": "Fúria Controlada (Controlled Rage)"
        }
    ],
    "Investida Bantha Aprimorada (Improved Bantha Rush)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 15
        },
        {
            "tipo": "talento",
            "nome": "Investida Bantha (Bantha Rush)"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Informante (Informer)": [
        {
            "tipo": "pericia",
            "pericia": "percepcao"
        }
    ],
    "Arremesso Poderoso (Mighty Throw)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        }
    ],
    "Fúria Poderosa (Powerful Rage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Fúria"
        }
    ],
    "Afinidade (Rapport)": [
        {
            "tipo": "atributo",
            "attr": "SAB",
            "min": 13
        }
    ],
    "Recordar (Recall)": [
        {
            "tipo": "periciaAlguma",
            "pericias": [
                "conhecimentoBurocracia",
                "conhecimentoCienciasFisicas",
                "conhecimentoCienciasSociais",
                "conhecimentoCienciasVida",
                "conhecimentoTaticas",
                "conhecimentoTecnologia",
                "conhecimentoTradicaoGalactica"
            ],
            "texto": "Treinado em alguma perícia de Conhecimento"
        }
    ],
    "Ataque Selvagem (Savage Attack)": [
        {
            "tipo": "talento",
            "nome": "Ataque Duplo (Double Attack)"
        }
    ],
    "Catador (Scavenger)": [],
    "Metralhar (Strafe)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Enxamear (Swarm)": [
        {
            "tipo": "talento",
            "nome": "Ataque Coordenado (Coordinated Attack)"
        }
    ],
    "Liberado (Unleashed)": [
        {
            "tipo": "texto",
            "texto": "Ter um Destino"
        },
        {
            "tipo": "texto",
            "texto": "Aprovação do Mestre"
        }
    ],
    "Explosão de Velocidade (Burst of Speed)": [
        {
            "tipo": "pericia",
            "pericia": "resistencia"
        }
    ],
    "Fuga de Combate Próximo (Close Combat Escape)": [
        {
            "tipo": "pericia",
            "pericia": "acrobacia"
        }
    ],
    "Dano Colateral (Collateral Damage)": [
        {
            "tipo": "talento",
            "nome": "Tiro Rápido (Rapid Shot)"
        },
        {
            "tipo": "bba",
            "min": 6
        }
    ],
    "Encurralado (Cornered)": [],
    "Franco-Atirador Mortal (Deadly Sniper)": [
        {
            "tipo": "talento",
            "nome": "Franco-Atirador (Sniper)"
        },
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        },
        {
            "tipo": "bba",
            "min": 9
        }
    ],
    "Queda Enganosa (Deceptive Drop)": [
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Gambito Desesperado (Desperate Gambit)": [],
    "Abaixar e Cobrir (Duck and Cover)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Amigos em Lugares Baixos (Friends in Low Places)": [
        {
            "tipo": "pericia",
            "pericia": "obterInfo"
        }
    ],
    "Modificação Apressada (Hasty Modification)": [
        {
            "tipo": "talento",
            "nome": "Especialista Técnico (Tech Specialist)"
        }
    ],
    "Aspecto Horrendo (Hideous Visage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Metamorfose"
        }
    ],
    "Personificar (Impersonate)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Metamorfose"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Perícia (Skill Focus)",
            "detalhe": "Enganação"
        }
    ],
    "Movimento Impetuoso (Impetuous Move)": [
        {
            "tipo": "atributo",
            "attr": "CON",
            "min": 13
        }
    ],
    "Voo Impulsivo (Impulsive Flight)": [],
    "Truque com Faca (Knife Trick)": [
        {
            "tipo": "talento",
            "nome": "Saque Relâmpago (Lightning Draw)"
        },
        {
            "tipo": "talento",
            "nome": "Saque Rápido (Quick Draw)"
        },
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Saque Relâmpago (Lightning Draw)": [
        {
            "tipo": "talento",
            "nome": "Saque Rápido (Quick Draw)"
        }
    ],
    "Metamorfo (Metamorph)": [
        {
            "tipo": "atributo",
            "attr": "CON",
            "min": 13
        },
        {
            "tipo": "texto",
            "texto": "Traço racial Metamorfose"
        },
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        }
    ],
    "Retirada Oportunista (Opportunistic Retreat)": [
        {
            "tipo": "talento",
            "nome": "Reflexos de Combate (Combat Reflexes)"
        }
    ],
    "Ressurgência (Resurgence)": [
        {
            "tipo": "pericia",
            "pericia": "resistencia"
        }
    ],
    "Dispositivo Característico (Signature Device)": [
        {
            "tipo": "talento",
            "nome": "Especialista Técnico (Tech Specialist)"
        }
    ],
    "Manobra Escorregadia (Slippery Maneuver)": [
        {
            "tipo": "talento",
            "nome": "Esquiva (Dodge)"
        }
    ],
    "Permanecer de Pé (Stay Up)": [
        {
            "tipo": "pericia",
            "pericia": "resistencia"
        }
    ],
    "Tecnologia Superior (Superior Tech)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 17
        },
        {
            "tipo": "talento",
            "nome": "Especialista Técnico (Tech Specialist)"
        },
        {
            "tipo": "nivel",
            "min": 9
        }
    ],
    "Vantagem Tática (Tactical Advantage)": [
        {
            "tipo": "talento",
            "nome": "Reflexos de Combate (Combat Reflexes)"
        }
    ],
    "Golpe Perverso (Wicked Strike)": [
        {
            "tipo": "talento",
            "nome": "Golpe Rápido (Rapid Strike)"
        }
    ],
    "Disparo de Artilharia (Artillery Shot)": [],
    "Barragem Coordenada (Coordinated Barrage)": [
        {
            "tipo": "talento",
            "nome": "Ataque Coordenado (Coordinated Attack)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Conhecimento de Droides (Droidcraft)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Caçador de Droides (Droid Hunter)": [],
    "Treinamento Militar do Grande Exército da República (Grand Army of the Republic Training)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Leve"
        }
    ],
    "Especialista em Artilharia (Gunnery Specialist)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Familiaridade Jedi (Jedi Familiarity)": [],
    "Líder de Droides (Leader of Droids)": [],
    "Ataque Avassalador (Overwhelming Attack)": [],
    "Manto do Lado Sombrio (Pall of the Dark Side)": [
        {
            "tipo": "texto",
            "texto": "Pontuação do Lado Sombrio 1 ou mais"
        }
    ],
    "Treinamento Militar Separatista (Separatist Military Training)": [],
    "Tiro em Leque (Spray Shot)": [],
    "Guerreiro de Trincheira (Trench Warrior)": [],
    "Força Imparável (Unstoppable Force)": [],
    "Resolução Inabalável (Unwavering Resolve)": [
        {
            "tipo": "pericia",
            "pericia": "percepcao"
        }
    ],
    "Defensor Cauteloso (Wary Defender)": [],
    "Combo de Ataque (Disparar e Golpear) (Attack Combo (Fire and Strike))": [
        {
            "tipo": "talento",
            "nome": "Combo de Ataque (Corpo a Corpo) (Attack Combo (Melee))"
        },
        {
            "tipo": "talento",
            "nome": "Combo de Ataque (À Distância) (Attack Combo (Ranged))"
        },
        {
            "tipo": "bba",
            "min": 9
        }
    ],
    "Combo de Ataque (Corpo a Corpo) (Attack Combo (Melee))": [
        {
            "tipo": "bba",
            "min": 3
        }
    ],
    "Combo de Ataque (À Distância) (Attack Combo (Ranged))": [
        {
            "tipo": "bba",
            "min": 3
        }
    ],
    "Assalto com Fogo Automático (Autofire Assault)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)"
        }
    ],
    "Varredura com Fogo Automático (Autofire Sweep)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)"
        }
    ],
    "Especialista em Biotecnologia (Biotech Specialist)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Cirurgia Biotecnológica (Biotech Surgery)": [
        {
            "tipo": "pericia",
            "pericia": "primeiros"
        }
    ],
    "À Beira da Morte (Brink of Death)": [],
    "Acerto Fatal (Fatal Hit)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Feito de Força (Feat of Strength)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 15
        }
    ],
    "Treinamento Militar da Aliança Galáctica (Galactic Alliance Military Training)": [],
    "Resistência a Agarrões (Grapple Resistance)": [],
    "Bater Cabeças (Knock Heads)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Agarrão Múltiplo (Multi‑Grab)"
        }
    ],
    "Esmagamento do Rancor (Rancor Crush)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 15
        },
        {
            "tipo": "talento",
            "nome": "Esmagar (Crush)"
        },
        {
            "tipo": "talento",
            "nome": "Imobilizar (Pin)"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Fogo de Retorno (Return Fire)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 15
        },
        {
            "tipo": "talento",
            "nome": "Saque Rápido (Quick Draw)"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)"
        }
    ],
    "Inseto Retornante (Returning Bug)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        }
    ],
    "Especialização em Sistemas de Veículos (Vehicle Systems Expertise)": [
        {
            "tipo": "talento",
            "nome": "Especialista Técnico (Tech Specialist)"
        },
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Alcance Zero (Zero Range)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        }
    ],
    "Prosseguir o Ataque (Follow Through)": [],
    "Maestria em Regimes da Força (Force Regimen Mastery)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        },
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Golpe de Haste Longa (Long Haft Strike)": [],
    "Ataque Implacável (Relentless Attack)": [
        {
            "tipo": "talento",
            "nome": "Ataque Duplo (Double Attack)"
        }
    ],
    "Determinação Inabalável (Unswerving Resolve)": [
        {
            "tipo": "bba",
            "min": 2
        }
    ],
    "Ataque Garantido (Assured Attack)": [],
    "Investida Hábil (Deft Charge)": [],
    "Surto Rápido (Fast Surge)": [],
    "Treinamento Militar Imperial (Imperial Military Training)": [],
    "Alvo em Movimento (Moving Target)": [
        {
            "tipo": "talento",
            "nome": "Esquiva (Dodge)"
        }
    ],
    "Tiro Principal (Prime Shot)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        }
    ],
    "Reação Rápida (Rapid Reaction)": [],
    "Treinamento Militar Rebelde (Rebel Military Training)": [
        {
            "tipo": "talento",
            "nome": "Ataque em Corrida (Running Attack)"
        }
    ],
    "Surto de Recuperação (Recovering Surge)": [],
    "Combatente Imparável (Unstoppable Combatant)": [
        {
            "tipo": "talento",
            "nome": "Recuperar o Fôlego Extra (Extra Second Wind)"
        }
    ],
    "Surto Veicular (Vehicular Surge)": [
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Surto de Vitalidade (Vitality Surge)": [
        {
            "tipo": "talento",
            "nome": "Recuperar o Fôlego Extra (Extra Second Wind)"
        }
    ],
    "Condutor de Banthas (Bantha Herder)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Ataque Demolidor (Battering Attack)": [
        {
            "tipo": "talento",
            "nome": "Investida Bantha (Bantha Rush)"
        },
        {
            "tipo": "talento",
            "nome": "Derrubar (Trip)"
        }
    ],
    "Força Destrutiva (Destructive Force)": [],
    "Incapacitar (Disabler)": [],
    "Mergulhar para Cobertura (Dive for Cover)": [
        {
            "tipo": "pericia",
            "pericia": "saltar"
        }
    ],
    "Lutar Apesar da Dor (Fight Through Pain)": [],
    "Explosão Vigorosa (Forceful Blast)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Força de Personalidade (Force of Personality)": [
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Recuperação Fortificante (Fortifying Recovery)": [
        {
            "tipo": "atributo",
            "attr": "CON",
            "min": 13
        }
    ],
    "Nunca se Render (Never Surrender)": [
        {
            "tipo": "pericia",
            "pericia": "resistencia"
        }
    ],
    "Treinamento de Candidatura a Oficial (Officer Candidacy Training)": [],
    "Atirador Oportunista (Opportunistic Shooter)": [],
    "Pistoleiro (Pistoleer)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Pistolas"
        }
    ],
    "Defesa Preditiva (Predictive Defense)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        }
    ],
    "Força Resiliente (Resilient Strength)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        }
    ],
    "Mestre dos Rifles (Riflemaster)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Rifles"
        }
    ],
    "Assumir Riscos (Risk Taker)": [
        {
            "tipo": "periciaAlguma",
            "pericias": [
                "escalar",
                "saltar"
            ]
        }
    ],
    "Caçador Esportivo (Sport Hunter)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {"tipo": "talento", "nome": "Proficiência com Arma (Weapon Proficiency)", "detalhe": "Pistolas"},
                {"tipo": "talento", "nome": "Proficiência com Arma (Weapon Proficiency)", "detalhe": "Rifles"}
            ]
        }
    ],
    "Posição Estabilizadora (Steadying Position)": [
        {
            "tipo": "talento",
            "nome": "Tiro Cuidadoso (Careful Shot)"
        }
    ],
    "Precisão de Mira (Aiming Accuracy)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Preciso (Precise Shot)"
        }
    ],
    "Conversão de Dano (Damage Conversion)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Droide Distraidor (Distracting Droid)": [
        {
            "tipo": "droide",
            "droide": true
        }
    ],
    "Foco em Droides (Droid Focus)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        },
        {
            "tipo": "pericia",
            "pericia": "usarComputador"
        }
    ],
    "Maestria em Escudo de Droides (Droid Shield Mastery)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "texto",
            "texto": "Gerador de escudo (acessório de droide)"
        }
    ],
    "Alvo Errático (Erratic Target)": [
        {
            "tipo": "texto",
            "texto": "Droide com locomoção flutuante ou de voo"
        },
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Esquiva (Dodge)"
        }
    ],
    "Blindagem Iônica (Ion Shielding)": [
        {
            "tipo": "texto",
            "texto": "Droide com Força 13 ou híbrido ciborgue com Constituição 13"
        }
    ],
    "Atualização Lógica: Troca de Perícia (Logic Upgrade: Skill Swap)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "texto",
            "texto": "Processador básico (droide)"
        }
    ],
    "Artes Marciais Mecânicas (Mechanical Martial Arts)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Pinça (Pincer)": [
        {
            "tipo": "texto",
            "texto": "Droide com apêndice de garra ou mão"
        },
        {
            "tipo": "bba",
            "min": 1
        },
        {
            "tipo": "talento",
            "nome": "Imobilizar (Pin)"
        },
        {
            "tipo": "talento",
            "nome": "Esmagar (Crush)"
        }
    ],
    "Precisão Cirúrgica (Pinpoint Accuracy)": [
        {
            "tipo": "droide",
            "droide": true
        },
        {
            "tipo": "talento",
            "nome": "Precisão de Mira (Aiming Accuracy)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Preciso (Precise Shot)"
        }
    ],
    "Vínculo de Sensores (Sensor Link)": [
        {
            "tipo": "texto",
            "texto": "Droide ou híbrido ciborgue"
        }
    ],
    "Surto de Escudo (Shield Surge)": [
        {
            "tipo": "texto",
            "texto": "Droide ou híbrido ciborgue"
        },
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Golpeador (Slammer)": [
        {
            "tipo": "texto",
            "texto": "Droide Pequeno ou maior com 2+ apêndices"
        },
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        }
    ],
    "Frenesi de Ferramentas (Tool Frenzy)": [
        {
            "tipo": "texto",
            "texto": "Droide Pequeno ou maior com 2+ apêndices de ferramenta"
        }
    ],
    "Virar e Disparar (Turn and Burn)": [
        {
            "tipo": "texto",
            "texto": "Droide com locomoção flutuante, de voo, com rodas ou esteiras"
        },
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Talento Adaptável (Adaptable Talent)": [],
    "Esmagador de Ossos (Bone Crusher)": [
        {
            "tipo": "talento",
            "nome": "Esmagar (Crush)"
        },
        {
            "tipo": "talento",
            "nome": "Imobilizar (Pin)"
        }
    ],
    "Defesa Brilhante (Brilliant Defense)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        }
    ],
    "Canalizar Fúria (Channel Rage)": [
        {
            "tipo": "texto",
            "texto": "Traço racial Fúria"
        }
    ],
    "Cortar a Burocracia (Cut the Red Tape)": [
        {
            "tipo": "pericia",
            "pericia": "conhecimentoBurocracia"
        }
    ],
    "Golpe Desmoralizante (Demoralizing Strike)": [
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Presença Perturbadora (Disturbing Presence)": [
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        }
    ],
    "Subornador Especialista (Expert Briber)": [
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Flèche (Flèche)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Recuperação Vigorosa (Forceful Recovery)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        },
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Tiro de Raspão (Grazing Shot)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        }
    ],
    "Golpe Debilitante (Hobbling Strike)": [
        {
            "tipo": "texto",
            "texto": "Ataque Furtivo, Tiro Rápido ou Golpe Rápido"
        }
    ],
    "Truque Oportunista Aprimorado (Improved Opportunistic Trickery)": [
        {
            "tipo": "talento",
            "nome": "Reflexos de Combate (Combat Reflexes)"
        },
        {
            "tipo": "talento",
            "nome": "Truque Oportunista (Opportunistic Trickery)"
        }
    ],
    "Personalidade Indomável (Indomitable Personality)": [
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Mestre dos Disfarces (Master of Disguise)": [
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        },
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Escudo de Carne (Meat Shield)": [
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Preciso (Precise Shot)"
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Truque Oportunista (Opportunistic Trickery)": [
        {
            "tipo": "talento",
            "nome": "Reflexos de Combate (Combat Reflexes)"
        },
        {
            "tipo": "texto",
            "texto": "Aptidão Ataque Furtivo"
        }
    ],
    "Sucesso Recorrente (Recurring Success)": [],
    "Postura Resoluta (Resolute Stance)": [
        {
            "tipo": "bba",
            "min": 1
        }
    ],
    "Golpe Sádico (Sadistic Strike)": [],
    "Língua de Prata (Silver Tongue)": [
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Desafio de Perícia: Evasão Catastrófica (Skill Challenge: Catastrophic Avoidance)": [],
    "Desafio de Perícia: Último Recurso (Skill Challenge: Last Resort)": [],
    "Desafio de Perícia: Recuperação (Skill Challenge: Recovery)": [],
    "Manter-se Firme (Stand Tall)": [],
    "Aliado Acrobático (Acrobatic Ally)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "pericia",
            "pericia": "acrobacia"
        }
    ],
    "Esquiva Acrobática (Acrobatic Dodge)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Mobilidade (Mobility)"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Perícia (Skill Focus)",
            "detalhe": "Acrobacia"
        }
    ],
    "Truque de Combate (Combat Trickery)": [
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        }
    ],
    "Trespassar Assustador (Frightening Cleave)": [
        {
            "tipo": "atributo",
            "attr": "FOR",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Trespassar (Cleave)"
        },
        {
            "tipo": "talento",
            "nome": "Ataque Poderoso (Power Attack)"
        },
        {
            "tipo": "bba",
            "min": 4
        }
    ],
    "Contra-Agarrão (Grab Back)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Parar (Halt)": [
        {
            "tipo": "talento",
            "nome": "Derrubar (Trip)"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)"
        },
        {
            "tipo": "bba",
            "min": 8
        }
    ],
    "Golpeador Pesado (Heavy Hitter)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Armas Pesadas"
        }
    ],
    "Manter Unido (Hold Together)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Hiperblaster (Hyperblazer)": [
        {
            "tipo": "pericia",
            "pericia": "usarComputador"
        }
    ],
    "Prestidigitação Aprimorada (Improved Sleight of Hand)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 15
        },
        {
            "tipo": "talento",
            "nome": "Foco em Perícia (Skill Focus)",
            "detalhe": "Enganação"
        },
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Maestria em Armas Improvisadas (Improvised Weapon Mastery)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        }
    ],
    "Ataque Instintivo (Instinctive Attack)": [
        {
            "tipo": "droide",
            "droide": false
        }
    ],
    "Defesa Instintiva (Instinctive Defense)": [
        {
            "tipo": "droide",
            "droide": false
        }
    ],
    "Intimidador (Intimidator)": [
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Investida Maníaca (Maniacal Charge)": [],
    "Combate Montado (Mounted Combat)": [
        {
            "tipo": "pericia",
            "pericia": "montaria"
        }
    ],
    "Sobrevivência Nikto (Nikto Survival)": [
        {
            "tipo": "especie",
            "especies": [
                "nikto"
            ],
            "texto": "Ser Nikto"
        }
    ],
    "Área Direcionada (Targeted Area)": [
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Primeiros Socorros Selvagens (Wilderness First Aid)": [
        {
            "tipo": "pericia",
            "pericia": "sobrevivencia"
        }
    ],
    "Foco em Arma (Weapon Focus) [Sabres de Luz]": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "@escolhido"
        }
    ],
    "Proficiência com Arma (Weapon Proficiency) [Sabres de Luz]": [],
    "Proficiência com Arma (Weapon Proficiency) [Armas Simples]": [],
    "Proficiência com Arma (Weapon Proficiency) [Armas Brancas Avançadas]": [],
    "Proficiência com Arma (Weapon Proficiency) [Pistolas]": [],
    "Proficiência com Arma (Weapon Proficiency) [Rifles]": [],
    "Proficiência com Arma (Weapon Proficiency) [Armas Pesadas]": []
};

//   poder = { nome } (Poder da Força na ficha)   alguma = { requisitos } (basta um)   todos = { requisitos }
//   arvoreQuantidade = { arvores, min } (pelo menos N aptidões de uma dessas árvores)
const APTITUDE_PREREQUISITES = {
    "Patrulha Avançada (Forward Patrol)": [
        {
            "tipo": "aptidao",
            "nome": "Passo Vigilante (Watchful Step)"
        }
    ],
    "Combatente Móvel (Mobile Combatant)": [
        {
            "tipo": "aptidao",
            "nome": "Patrulha Avançada (Forward Patrol)"
        },
        {
            "tipo": "aptidao",
            "nome": "Passo Vigilante (Watchful Step)"
        }
    ],
    "Pioneiro (Trailblazer)": [
        {
            "tipo": "pericia",
            "pericia": "sobrevivencia"
        }
    ],
    "Ocultar Outro (Conceal Other)": [
        {
            "tipo": "aptidao",
            "nome": "Presença Enterrada (Buried Presence)"
        }
    ],
    "Mira Perspicaz (Insightful Aim)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "talento",
                    "nome": "Proficiência com Arma (Weapon Proficiency)",
                    "detalhe": "Pistolas"
                },
                {
                    "tipo": "talento",
                    "nome": "Proficiência com Arma (Weapon Proficiency)",
                    "detalhe": "Rifles"
                }
            ]
        }
    ],
    "Maestria em Dobrar o Espaço (Folded Space Mastery)": [
        {
            "tipo": "poder",
            "nome": "Dobrar o Espaço (Fold Space)"
        }
    ],
    "Libertar (Liberate)": [
        {
            "tipo": "aptidao",
            "nome": "Aura de Liberdade (Aura of Freedom)"
        }
    ],
    "Muitas Faces da Força (Many Shades of the Force)": [
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Ilusão (Illusion)": [
        {
            "tipo": "poder",
            "nome": "Truque Mental (Mind Trick)"
        }
    ],
    "Vínculo Ilusório (Illusion Bond)": [
        {
            "tipo": "aptidao",
            "nome": "Ilusão (Illusion)"
        }
    ],
    "Mascarada (Masquerade)": [
        {
            "tipo": "aptidao",
            "nome": "Ilusão (Illusion)"
        }
    ],
    "Mover Objeto Massivo (Move Massive Object)": [
        {
            "tipo": "aptidao",
            "nome": "Poder Telecinético (Telekinetic Power)"
        },
        {
            "tipo": "poder",
            "nome": "Mover Objeto (Move Object)"
        }
    ],
    "Suprimir a Força (Suppress Force)": [
        {
            "tipo": "aptidao",
            "nome": "Sábio da Influência (Influence Savant)"
        },
        {
            "tipo": "poder",
            "nome": "Truque Mental (Mind Trick)"
        }
    ],
    "Prodígio Telecinético (Telekinetic Prodigy)": [
        {
            "tipo": "aptidao",
            "nome": "Sábio Telecinético (Telekinetic Savant)"
        }
    ],
    "Influência Telepática (Telepathic Influence)": [
        {
            "tipo": "aptidao",
            "nome": "Elo Telepático (Telepathic Link)"
        }
    ],
    "Emboscador Destrutivo (Destructive Ambusher)": [
        {
            "tipo": "aptidao",
            "nome": "Especialista em Emboscada (Ambush Specialist)"
        }
    ],
    "Manter o Ritmo (Keep It Going)": [
        {
            "tipo": "aptidao",
            "nome": "Especialista em Emboscada (Ambush Specialist)"
        }
    ],
    "Mantê-los Atordoados (Keep Them Reeling)": [
        {
            "tipo": "aptidao",
            "nome": "Especialista em Emboscada (Ambush Specialist)"
        }
    ],
    "Emboscador Perceptivo (Perceptive Ambusher)": [
        {
            "tipo": "aptidao",
            "nome": "Especialista em Emboscada (Ambush Specialist)"
        }
    ],
    "Especialista em Escudo (Shield Expert)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Leve"
        }
    ],
    "Posicionamento Vantajoso (Advantageous Positioning)": [
        {
            "tipo": "aptidao",
            "nome": "Deslocar (Shift)"
        }
    ],
    "Ganhar Distância (Get Some Distance)": [
        {
            "tipo": "aptidao",
            "nome": "Posicionamento Vantajoso (Advantageous Positioning)"
        },
        {
            "tipo": "aptidao",
            "nome": "Deslocar (Shift)"
        }
    ],
    "Artes Assassinas II (Murderous Arts II)": [
        {
            "tipo": "aptidao",
            "nome": "Artes Assassinas I (Murderous Arts I)"
        }
    ],
    "Franco-Atirador Certeiro (Sniping Marksman)": [
        {
            "tipo": "aptidao",
            "nome": "Assassino Atirador (Sniping Assassin)"
        }
    ],
    "Mestre Franco-Atirador (Sniping Master)": [
        {
            "tipo": "aptidao",
            "nome": "Assassino Atirador (Sniping Assassin)"
        },
        {
            "tipo": "aptidao",
            "nome": "Franco-Atirador Certeiro (Sniping Marksman)"
        }
    ],
    "Droide Veloz (Swift Droid)": [
        {
            "tipo": "arvoreQuantidade",
            "arvores": [
                "Árvore de Aptidões: Autonomia (Autonomy)"
            ],
            "min": 2
        }
    ],
    "Reiniciar Iniciativa (Reset Initiative)": [
        {
            "tipo": "aptidao",
            "nome": "Sentidos Apurados (Acute Senses)"
        },
        {
            "tipo": "aptidao",
            "nome": "Iniciativa Aprimorada (Improved Initiative)"
        },
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Ponto Fraco (Weak Point)": [
        {
            "tipo": "aptidao",
            "nome": "Sentidos Apurados (Acute Senses)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro Atento (Keen Shot)"
        }
    ],
    "Maestria Vitoriosa da Força (Victorious Force Mastery)": [
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Conhecimento e Defesa (Knowledge and Defense)": [
        {
            "tipo": "aptidao",
            "nome": "Sentido de Perigo Aprimorado (Enhanced Danger Sense)"
        }
    ],
    "Montaria Vinculada (Bonded Mount)": [
        {
            "tipo": "aptidao",
            "nome": "Encantar Fera (Charm Beast)"
        }
    ],
    "Suplicar à Fera (Entreat Beast)": [
        {
            "tipo": "aptidao",
            "nome": "Encantar Fera (Charm Beast)"
        }
    ],
    "Presença Tranquilizadora (Soothing Presence)": [
        {
            "tipo": "aptidao",
            "nome": "Encantar Fera (Charm Beast)"
        }
    ],
    "Sentido Selvagem (Wild Sense)": [
        {
            "tipo": "aptidao",
            "nome": "Encantar Fera (Charm Beast)"
        }
    ],
    "Tiro Guiado pela Força (Force Directed Shot)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Negar e Redirecionar (Negate and Redirect)": [
        {
            "tipo": "poder",
            "nome": "Negar Energia (Negate Energy)"
        }
    ],
    "Raiva Crescente (Rising Anger)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        },
        {
            "tipo": "texto",
            "texto": "Pontuação do Lado Sombrio 1 ou mais"
        }
    ],
    "Pânico Crescente (Rising Panic)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        },
        {
            "tipo": "texto",
            "texto": "Pontuação do Lado Sombrio 1 ou mais"
        }
    ],
    "Cobertura Próxima (Close Cover)": [
        {
            "tipo": "aptidao",
            "nome": "Olha Só Isso (Watch This)"
        }
    ],
    "Agente da SpyNet (SpyNet Agent)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "especie",
                    "especies": [
                        "bothan"
                    ],
                    "texto": "Ser Bothan"
                },
                {
                    "tipo": "arvoreQuantidade",
                    "arvores": [
                        "Árvore de Aptidões: Infiltração (Infiltration)"
                    ],
                    "min": 2
                }
            ]
        }
    ],
    "Recursos Bothan (Bothan Resources)": [
        {
            "tipo": "aptidao",
            "nome": "Agente da SpyNet (SpyNet Agent)"
        }
    ],
    "Conhecimento é Vida (Knowledge is Life)": [
        {
            "tipo": "aptidao",
            "nome": "Agente da SpyNet (SpyNet Agent)"
        }
    ],
    "Conhecimento é Poder (Knowledge is Power)": [
        {
            "tipo": "aptidao",
            "nome": "Agente da SpyNet (SpyNet Agent)"
        }
    ],
    "Conhecimento é Força (Knowledge is Strength)": [
        {
            "tipo": "aptidao",
            "nome": "Agente da SpyNet (SpyNet Agent)"
        }
    ],
    "Seis Perguntas (Six Questions)": [
        {
            "tipo": "aptidao",
            "nome": "Agente da SpyNet (SpyNet Agent)"
        }
    ],
    "Pavor (Dread)": [
        {
            "tipo": "aptidao",
            "nome": "Marca do Caçador (Hunter's Mark)"
        },
        {
            "tipo": "aptidao",
            "nome": "Alvo do Caçador (Hunter's Target)"
        }
    ],
    "Rastro Eletrônico (Electronic Trail)": [
        {
            "tipo": "aptidao",
            "nome": "Sem Onde se Esconder (Nowhere to Hide)"
        },
        {
            "tipo": "pericia",
            "pericia": "usarComputador"
        }
    ],
    "Inimigos Conhecidos (Familiar Enemies)": [
        {
            "tipo": "texto",
            "texto": "Característica de classe Inimigo Familiar (Caçador de Recompensas)"
        }
    ],
    "Situação Conhecida (Familiar Situation)": [
        {
            "tipo": "texto",
            "texto": "Característica de classe Inimigo Familiar (Caçador de Recompensas)"
        }
    ],
    "Temível (Fearsome)": [
        {
            "tipo": "aptidao",
            "nome": "Notório (Notorious)"
        }
    ],
    "Sem Para Onde Fugir (Nowhere to Run)": [
        {
            "tipo": "aptidao",
            "nome": "Marca do Caçador (Hunter's Mark)"
        },
        {
            "tipo": "aptidao",
            "nome": "Alvo do Caçador (Hunter's Target)"
        },
        {
            "tipo": "aptidao",
            "nome": "Sem Onde se Esconder (Nowhere to Hide)"
        }
    ],
    "Algemas Rápidas (Quick Cuffs)": [
        {
            "tipo": "talento",
            "nome": "Saque Rápido (Quick Draw)"
        }
    ],
    "Revelando Segredos (Revealing Secrets)": [
        {
            "tipo": "aptidao",
            "nome": "Detetive (Detective)"
        }
    ],
    "Marcar (Tag)": [
        {
            "tipo": "aptidao",
            "nome": "Marca do Caçador (Hunter's Mark)"
        },
        {
            "tipo": "aptidao",
            "nome": "Alvo do Caçador (Hunter's Target)"
        }
    ],
    "Mestre da Baioneta (Bayonet Master)": [
        {
            "tipo": "aptidao",
            "nome": "Coronhada (Gun Club)"
        }
    ],
    "Controle de Multidão (Crowd Control)": [
        {
            "tipo": "aptidao",
            "nome": "Enredador (Entangler)"
        }
    ],
    "Golpe Esmagador Devastador (Devastating Melee Smash)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Esmagador (Melee Smash)"
        }
    ],
    "Brigão Experiente (Experienced Brawler)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Esmagador (Melee Smash)"
        },
        {
            "tipo": "aptidao",
            "nome": "Golpe Atordoante (Stunning Strike)"
        }
    ],
    "Arrumar Briga (Pick a Fight)": [
        {
            "tipo": "aptidao",
            "nome": "Brigão de Cantina (Cantina Brawler)"
        }
    ],
    "Assalto Implacável (Unrelenting Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Esmagador (Melee Smash)"
        }
    ],
    "Truque Baixo (Cheap Trick)": [
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        }
    ],
    "Presa Fácil (Easy Prey)": [
        {
            "tipo": "aptidao",
            "nome": "Truque Baixo (Cheap Trick)"
        }
    ],
    "Golpe Ligeiro (Quick Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Truque Baixo (Cheap Trick)"
        }
    ],
    "Combatente Astuto (Sly Combatant)": [
        {
            "tipo": "aptidao",
            "nome": "Truque Baixo (Cheap Trick)"
        },
        {
            "tipo": "aptidao",
            "nome": "Presa Fácil (Easy Prey)"
        }
    ],
    "Emboscada Prolongada (Extended Ambush)": [
        {
            "tipo": "aptidao",
            "nome": "Furtividade Aprimorada (Improved Stealth)"
        }
    ],
    "Esforço Coordenado (Coordinated Effort)": [
        {
            "tipo": "aptidao",
            "nome": "Protetor Dedicado (Dedicated Protector)"
        },
        {
            "tipo": "aptidao",
            "nome": "Na Linha de Fogo (Harm's Way)"
        }
    ],
    "Guardião Dedicado (Dedicated Guardian)": [
        {
            "tipo": "aptidao",
            "nome": "Protetor Dedicado (Dedicated Protector)"
        },
        {
            "tipo": "aptidao",
            "nome": "Na Linha de Fogo (Harm's Way)"
        }
    ],
    "Protetor Dedicado (Dedicated Protector)": [
        {
            "tipo": "aptidao",
            "nome": "Na Linha de Fogo (Harm's Way)"
        }
    ],
    "Posição Defensiva (Defensive Position)": [
        {
            "tipo": "aptidao",
            "nome": "Análise de Batalha (Battle Analysis)"
        }
    ],
    "Alvo Difícil (Hard Target)": [
        {
            "tipo": "aptidao",
            "nome": "Duro na Queda (Tough as Nails)"
        }
    ],
    "Fora de Perigo (Out of Harm's Way)": [
        {
            "tipo": "aptidao",
            "nome": "Na Linha de Fogo (Harm's Way)"
        },
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Recuperação da Força (Force Recovery)": [
        {
            "tipo": "aptidao",
            "nome": "Equilíbrio (Equilibrium)"
        }
    ],
    "Canalizar Energia (Channel Energy)": [
        {
            "tipo": "poder",
            "nome": "Negar Energia (Negate Energy)"
        }
    ],
    "Esforço da Força (Force Exertion)": [
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Influência Corporativa (Corporate Clout)": [
        {
            "tipo": "aptidao",
            "nome": "Impor Hesitação (Impose Hesitation)"
        },
        {
            "tipo": "aptidao",
            "nome": "Decisão Errada (Wrong Decision)"
        }
    ],
    "Impor Confusão (Impose Confusion)": [
        {
            "tipo": "aptidao",
            "nome": "Impor Hesitação (Impose Hesitation)"
        }
    ],
    "Negar Movimento (Deny Move)": [
        {
            "tipo": "aptidao",
            "nome": "Reduzir Mobilidade (Reduce Mobility)"
        }
    ],
    "Margem de Crítico Ampliada (Armas Pesadas) (Extended Critical Range (Heavy Weapons))": [
        {
            "tipo": "bba",
            "min": 10
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Pesadas"
        }
    ],
    "Margem de Crítico Ampliada (Rifles) (Extended Critical Range (Rifles))": [
        {
            "tipo": "bba",
            "min": 10
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Rifles"
        }
    ],
    "Ataque em Rajada (Flurry Attack)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "@escolhido"
        }
    ],
    "Margem de Crítico Ampliada (Armas Simples) (Extended Critical Range (Simple Weapons))": [
        {
            "tipo": "bba",
            "min": 10
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        }
    ],
    "Talismã do Lado Sombrio Maior (Greater Dark Side Talisman)": [
        {
            "tipo": "aptidao",
            "nome": "Talismã do Lado Sombrio (Dark Side Talisman)"
        }
    ],
    "Presença Sombria (Dark Presence)": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio (Power of the Dark Side)"
        },
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Vingança (Revenge)": [
        {
            "tipo": "aptidao",
            "nome": "Presença Sombria (Dark Presence)"
        },
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio (Power of the Dark Side)"
        }
    ],
    "Poder Rápido (Swift Power)": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio (Power of the Dark Side)"
        }
    ],
    "Preservação Sombria (Dark Preservation)": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio (Power of the Dark Side)"
        }
    ],
    "Transferir Essência (Transfer Essence)": [
        {
            "tipo": "texto",
            "texto": "Pontuação do Lado Sombrio igual à Sabedoria"
        }
    ],
    "Ira do Lado Sombrio (Wrath of the Dark Side)": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio (Power of the Dark Side)"
        }
    ],
    "Comandar Fera (Command Beast)": [
        {
            "tipo": "aptidao",
            "nome": "Encantar Fera (Charm Beast)"
        }
    ],
    "Voo (Flight)": [
        {
            "tipo": "aptidao",
            "nome": "Conjuradora Adepta (Adept Spellcaster)"
        }
    ],
    "Armadura de Sombras (Shadow Armor)": [
        {
            "tipo": "aptidao",
            "nome": "Manto de Sombras (Cloak of Shadows)"
        }
    ],
    "Golpe Automatizado (Automated Strike)": [
        {
            "tipo": "talento",
            "nome": "Ataque Duplo (Double Attack)"
        }
    ],
    "Coragem Droide (Droid Mettle)": [
        {
            "tipo": "aptidao",
            "nome": "Defesa Droide (Droid Defense)"
        }
    ],
    "Inspirar Competência (Inspire Competence)": [
        {
            "tipo": "aptidao",
            "nome": "Sensores Expandidos (Expanded Sensors)"
        }
    ],
    "Tropas Sobrecarregadas (Overclocked Troops)": [
        {
            "tipo": "aptidao",
            "nome": "Defesa Droide (Droid Defense)"
        }
    ],
    "Reforçar Comandos (Reinforce Commands)": [
        {
            "tipo": "aptidao",
            "nome": "Defesa Droide (Droid Defense)"
        }
    ],
    "Foco em Arma Maior (Sabres de Luz) (Greater Weapon Focus (Lightsabers))": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Especialização em Arma Maior (Sabres de Luz) (Greater Weapon Specialization (Lightsabers))": [
        {
            "tipo": "aptidao",
            "nome": "Especialização em Arma (Sabres de Luz) (Weapon Specialization (Lightsabers))"
        },
        {
            "tipo": "aptidao",
            "nome": "Foco em Arma Maior (Sabres de Luz) (Greater Weapon Focus (Lightsabers))"
        }
    ],
    "Arremesso de Sabre de Luz Aprimorado (Improved Lightsaber Throw)": [
        {
            "tipo": "aptidao",
            "nome": "Arremesso de Sabre de Luz (Lightsaber Throw)"
        }
    ],
    "Riposte Aprimorado (Improved Riposte)": [
        {
            "tipo": "aptidao",
            "nome": "Bloquear (Block)"
        },
        {
            "tipo": "aptidao",
            "nome": "Riposte (Riposte)"
        }
    ],
    "Redirecionamento Aprimorado (Improved Redirect)": [
        {
            "tipo": "aptidao",
            "nome": "Defletir (Deflect)"
        },
        {
            "tipo": "aptidao",
            "nome": "Redirecionar Disparo (Redirect Shot)"
        }
    ],
    "Maestria em Arremesso de Sabre de Luz (Thrown Lightsaber Mastery)": [
        {
            "tipo": "aptidao",
            "nome": "Arremesso de Sabre de Luz Aprimorado (Improved Lightsaber Throw)"
        },
        {
            "tipo": "aptidao",
            "nome": "Arremesso de Sabre de Luz (Lightsaber Throw)"
        }
    ],
    "Quebrar Programação (Break Program)": [
        {
            "tipo": "pericia",
            "pericia": "usarComputador"
        }
    ],
    "Maestria Heurística (Heuristic Mastery)": [
        {
            "tipo": "atributo",
            "attr": "SAB",
            "min": 15
        }
    ],
    "Rotinas Programadas (Scripted Routines)": [
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Ler a Chama (Reading the Flame)": [
        {
            "tipo": "aptidao",
            "nome": "Iniciado de Vahl (Initiate of Vahl)"
        }
    ],
    "Espada de Vahl (Sword of Vahl)": [
        {
            "tipo": "aptidao",
            "nome": "Iniciado de Vahl (Initiate of Vahl)"
        }
    ],
    "Marca de Vahl (Vahl's Brand)": [
        {
            "tipo": "aptidao",
            "nome": "Fortalecer Arma (Empower Weapon)"
        }
    ],
    "Colisão Intencional (Intentional Crash)": [
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Perseguição (Pursuit)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Sumir (Fade Out)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Furtividade Reativa (Reactive Stealth)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Autossuficiente (Self-Reliant)": [
        {
            "tipo": "arvoreQuantidade",
            "arvores": [
                "Árvore de Aptidões: Inspiração (Inspiration)"
            ],
            "min": 1
        }
    ],
    "Rolagem Evasiva (Roll Out)": [
        {
            "tipo": "aptidao",
            "nome": "Combatente Aéreo Evasivo (Elusive Dogfighter)"
        }
    ],
    "Detonar (Detonate)": [
        {
            "tipo": "poder",
            "nome": "Explosão da Força (Force Blast)"
        }
    ],
    "Explosão Nauseante (Sickening Blast)": [
        {
            "tipo": "poder",
            "nome": "Explosão da Força (Force Blast)"
        }
    ],
    "Estilo de Esgrima Nobre (Noble Fencing Style)": [
        {
            "tipo": "todos",
            "requisitos": [
                {
                    "tipo": "pericia",
                    "pericia": "enganacao"
                },
                {
                    "tipo": "pericia",
                    "pericia": "persuasao"
                }
            ]
        }
    ],
    "Defesa Desmoralizante (Demoralizing Defense)": [
        {
            "tipo": "aptidao",
            "nome": "Estilo de Esgrima Nobre (Noble Fencing Style)"
        }
    ],
    "Finta Condutora (Leading Feint)": [
        {
            "tipo": "aptidao",
            "nome": "Estilo de Esgrima Nobre (Noble Fencing Style)"
        }
    ],
    "Afronta Pessoal (Personal Affront)": [
        {
            "tipo": "aptidao",
            "nome": "Estilo de Esgrima Nobre (Noble Fencing Style)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Golpe Transpositor (Transposing Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Estilo de Esgrima Nobre (Noble Fencing Style)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Corpo Fortificado (Fortified Body)": [
        {
            "tipo": "aptidao",
            "nome": "Equilíbrio (Equilibrium)"
        }
    ],
    "Chamado Distante (Long Call)": [
        {
            "tipo": "aptidao",
            "nome": "Elo Místico (Mystical Link)"
        }
    ],
    "Talismã da Força Focado (Focused Force Talisman)": [
        {
            "tipo": "aptidao",
            "nome": "Talismã da Força (Force Talisman)"
        }
    ],
    "Talismã da Força Focado Maior (Greater Focused Force Talisman)": [
        {
            "tipo": "aptidao",
            "nome": "Talismã da Força (Force Talisman)"
        },
        {
            "tipo": "aptidao",
            "nome": "Talismã da Força Focado (Focused Force Talisman)"
        }
    ],
    "Tiro de Sorte (Lucky Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Jeito (Knack)"
        }
    ],
    "Evitar Desastre (Avert Disaster)": [
        {
            "tipo": "aptidao",
            "nome": "Sorte de Tolo (Fool's Luck)"
        }
    ],
    "Melhor Sortudo que Morto (Better Lucky than Dead)": [
        {
            "tipo": "aptidao",
            "nome": "Sorte de Tolo (Fool's Luck)"
        }
    ],
    "Pura Sorte (Dumb Luck)": [
        {
            "tipo": "aptidao",
            "nome": "Jeito (Knack)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro de Sorte (Lucky Shot)"
        }
    ],
    "Parada de Sorte (Lucky Stop)": [
        {
            "tipo": "aptidao",
            "nome": "Jeito (Knack)"
        }
    ],
    "Tiro de Ricochete (Ricochet Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Jeito (Knack)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro de Sorte (Lucky Shot)"
        }
    ],
    "Sorte Sobrenatural (Uncanny Luck)": [
        {
            "tipo": "aptidao",
            "nome": "Jeito (Knack)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro de Sorte (Lucky Shot)"
        }
    ],
    "Tiro Improvável (Unlikely Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Jeito (Knack)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro de Sorte (Lucky Shot)"
        }
    ],
    "Fugir (Flee)": [
        {
            "tipo": "aptidao",
            "nome": "Passada Longa (Long Stride)"
        }
    ],
    "Esquivar-se de Lado (Sidestep)": [
        {
            "tipo": "aptidao",
            "nome": "Passada Longa (Long Stride)"
        }
    ],
    "Impulso (Surge)": [
        {
            "tipo": "aptidao",
            "nome": "Passada Longa (Long Stride)"
        }
    ],
    "Andarilho Veloz (Swift Strider)": [
        {
            "tipo": "aptidao",
            "nome": "Passada Longa (Long Stride)"
        },
        {
            "tipo": "aptidao",
            "nome": "Esquivar-se de Lado (Sidestep)"
        }
    ],
    "Continuar na Luta (Stay in the Fight)": [
        {
            "tipo": "aptidao",
            "nome": "Subordinados Leais (Stalwart Subordinates)"
        }
    ],
    "Retirada Furtiva (Stealthy Withdrawal)": [
        {
            "tipo": "aptidao",
            "nome": "Retirada Apressada (Hasty Withdrawal)"
        }
    ],
    "Cerimônias do Localizador (Findsman Ceremonies)": [
        {
            "tipo": "talento",
            "nome": "Sensibilidade à Força (Force Sensitivity)"
        }
    ],
    "Presciência do Localizador (Findsman's Foresight)": [
        {
            "tipo": "aptidao",
            "nome": "Cerimônias do Localizador (Findsman Ceremonies)"
        }
    ],
    "Presságios (Omens)": [
        {
            "tipo": "aptidao",
            "nome": "Cerimônias do Localizador (Findsman Ceremonies)"
        }
    ],
    "Visões do Alvo (Target Visions)": [
        {
            "tipo": "aptidao",
            "nome": "Cerimônias do Localizador (Findsman Ceremonies)"
        }
    ],
    "Consciência Temporal (Temporal Awareness)": [
        {
            "tipo": "aptidao",
            "nome": "Cerimônias do Localizador (Findsman Ceremonies)"
        }
    ],
    "Golpe Manipulador Aprimorado (Improved Manipulating Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Manipulador (Manipulating Strike)"
        }
    ],
    "Ataque Brutal (Brutal Attack)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "@escolhido"
        }
    ],
    "Desafiar (Call Out)": [
        {
            "tipo": "aptidao",
            "nome": "Vingança Pessoal (Personal Vendetta)"
        }
    ],
    "Ataque Distrativo (Distracting Attack)": [
        {
            "tipo": "aptidao",
            "nome": "Ataque Brutal (Brutal Attack)"
        }
    ],
    "Mestre de Armas Exóticas (Exotic Weapons Master)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma Exótica (Exotic Weapon Proficiency)"
        }
    ],
    "Proficiência em Ataques Múltiplos (Armas Exóticas) (Multiattack Proficiency (Exotic Weapons))": [
        {
            "tipo": "aptidao",
            "nome": "Mestre de Armas Exóticas (Exotic Weapons Master)"
        }
    ],
    "Aparição Distrativa (Distracting Apparition)": [
        {
            "tipo": "aptidao",
            "nome": "Manifestar Espírito Guardião (Manifest Guardian Spirit)"
        }
    ],
    "Artilheiro de Combate Aéreo (Dogfight Gunner)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        }
    ],
    "Gatilho Rápido (Quick Trigger)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        }
    ],
    "Tiro no Sistema (System Hit)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        }
    ],
    "Tiro Incapacitante (Crippling Hit)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro no Sistema (System Hit)"
        }
    ],
    "Especialista em Ataque Rápido (Fast Attack Specialist)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        },
        {
            "tipo": "aptidao",
            "nome": "Gatilho Rápido (Quick Trigger)"
        }
    ],
    "Tiro Sobrecarregado (Overcharged Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        }
    ],
    "Fogo Sincronizado (Synchronized Fire)": [
        {
            "tipo": "aptidao",
            "nome": "Artilheiro Especialista (Expert Gunner)"
        }
    ],
    "Desarme Danoso (Damaging Disarm)": [
        {
            "tipo": "aptidao",
            "nome": "Desarme à Distância (Ranged Disarm)"
        }
    ],
    "Mantê-los na Linha (Keep Them Honest)": [
        {
            "tipo": "talento",
            "nome": "Tiro Cuidadoso (Careful Shot)"
        }
    ],
    "Debilitação Persistente (Lingering Debilitation)": [
        {
            "tipo": "aptidao",
            "nome": "Tiro Debilitante (Debilitating Shot)"
        }
    ],
    "Ataque Móvel (Pistolas) (Mobile Attack (Pistols))": [
        {
            "tipo": "aptidao",
            "nome": "Proficiência em Ataques Múltiplos (Pistolas) (Multiattack Proficiency (Pistols))"
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Pistolas"
        }
    ],
    "Tiro Retardante (Slowing Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Tiro Debilitante (Debilitating Shot)"
        }
    ],
    "Orientação (Guidance)": [
        {
            "tipo": "pericia",
            "pericia": "percepcao"
        }
    ],
    "Atacante Oculto (Hidden Attacker)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Sábio do Hiperespaço (Hyperspace Savant)": [
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Veículo Furtivo (Vehicle Sneak)": [
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Movimento Silencioso (Silent Movement)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Acovardar Inimigos (Cower Enemies)": [
        {
            "tipo": "aptidao",
            "nome": "Interrogatório da Força (Force Interrogation)"
        }
    ],
    "Presença Inquietante (Unsettling Presence)": [
        {
            "tipo": "aptidao",
            "nome": "Interrogatório da Força (Force Interrogation)"
        }
    ],
    "Inspirar Medo II (Inspire Fear II)": [
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo I (Inspire Fear I)"
        }
    ],
    "Inspirar Medo III (Inspire Fear III)": [
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo I (Inspire Fear I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo II (Inspire Fear II)"
        }
    ],
    "Notoriedade Compartilhada (Shared Notoriety)": [
        {
            "tipo": "aptidao",
            "nome": "Notório (Notorious)"
        }
    ],
    "Tema-me (Fear Me)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo I (Inspire Fear I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo II (Inspire Fear II)"
        }
    ],
    "Assustar (Frighten)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo I (Inspire Fear I)"
        }
    ],
    "Mestre Manipulador (Master Manipulator)": [
        {
            "tipo": "aptidao",
            "nome": "Notório (Notorious)"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Perícia (Skill Focus)",
            "detalhe": "Persuasão"
        }
    ],
    "Pequeno Favor (Small Favor)": [
        {
            "tipo": "aptidao",
            "nome": "Notório (Notorious)"
        },
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Aterrorizar (Terrify)": [
        {
            "tipo": "aptidao",
            "nome": "Assustar (Frighten)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo I (Inspire Fear I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo II (Inspire Fear II)"
        }
    ],
    "Má Reputação (Unsavory Reputation)": [
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo I (Inspire Fear I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo II (Inspire Fear II)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Medo III (Inspire Fear III)"
        },
        {
            "tipo": "aptidao",
            "nome": "Notório (Notorious)"
        }
    ],
    "Sempre Pronto (Always Ready)": [
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Aproximação Sorrateira (Creeping Approach)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Abate Silencioso (Silent Takedown)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Exigir Rendição (Demand Surrender)": [
        {
            "tipo": "aptidao",
            "nome": "Presença (Presence)"
        }
    ],
    "Enfraquecer Determinação Aprimorado (Improved Weaken Resolve)": [
        {
            "tipo": "aptidao",
            "nome": "Presença (Presence)"
        },
        {
            "tipo": "aptidao",
            "nome": "Enfraquecer Determinação (Weaken Resolve)"
        }
    ],
    "Enfraquecer Determinação (Weaken Resolve)": [
        {
            "tipo": "aptidao",
            "nome": "Presença (Presence)"
        }
    ],
    "Desconcertar (Fluster)": [
        {
            "tipo": "aptidao",
            "nome": "Presença (Presence)"
        },
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Defesa Intimidadora (Intimidating Defense)": [
        {
            "tipo": "aptidao",
            "nome": "Presença (Presence)"
        },
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Amado (Beloved)": [
        {
            "tipo": "aptidao",
            "nome": "Fortalecer Aliado (Bolster Ally)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inspirar Confiança (Inspire Confidence)"
        }
    ],
    "Força de Vontade (Willpower)": [
        {
            "tipo": "aptidao",
            "nome": "Inspirar Confiança (Inspire Confidence)"
        }
    ],
    "Curar Droide (Heal Droid)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Troca de Ações (Action Exchange)": [
        {
            "tipo": "aptidao",
            "nome": "Retardo da Força (Force Delay)"
        }
    ],
    "Retardo da Força (Force Delay)": [
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Transmitir Conhecimento (Impart Knowledge)": [
        {
            "tipo": "aptidao",
            "nome": "Conselheiro Habilidoso (Skilled Advisor)"
        }
    ],
    "Mestre Conselheiro (Master Advisor)": [
        {
            "tipo": "aptidao",
            "nome": "Conselheiro Habilidoso (Skilled Advisor)"
        }
    ],
    "Especialista em Sabre de Luz (Lightsaber Specialist)": [
        {
            "tipo": "aptidao",
            "nome": "Sabre de Luz Obra-Prima (Masterwork Lightsaber)"
        }
    ],
    "Sintonia Perfeita (Perfect Attunement)": [
        {
            "tipo": "aptidao",
            "nome": "Sabre de Luz Obra-Prima (Masterwork Lightsaber)"
        }
    ],
    "Modificação Rápida (Quick Modification)": [
        {
            "tipo": "aptidao",
            "nome": "Sabre de Luz Obra-Prima (Masterwork Lightsaber)"
        }
    ],
    "Círculo Defensivo (Defensive Circle)": [
        {
            "tipo": "aptidao",
            "nome": "Meditação de Batalha (Battle Meditation)"
        },
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "aptidao",
                    "nome": "Bloquear (Block)"
                },
                {
                    "tipo": "aptidao",
                    "nome": "Defletir (Deflect)"
                }
            ]
        },
        {
            "tipo": "aptidao",
            "nome": "Comandante de Batalha Jedi (Jedi Battle Commander)"
        }
    ],
    "Reviver pela Força (Force Revive)": [
        {
            "tipo": "aptidao",
            "nome": "Meditação de Batalha (Battle Meditation)"
        },
        {
            "tipo": "aptidao",
            "nome": "Comandante de Batalha Jedi (Jedi Battle Commander)"
        }
    ],
    "Comandante de Batalha Jedi (Jedi Battle Commander)": [
        {
            "tipo": "aptidao",
            "nome": "Meditação de Batalha (Battle Meditation)"
        }
    ],
    "Investida Cortante (Slashing Charge)": [
        {
            "tipo": "aptidao",
            "nome": "Bloquear (Block)"
        },
        {
            "tipo": "aptidao",
            "nome": "Riposte (Riposte)"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Ataque Móvel (Sabres de Luz) (Mobile Attack (Lightsabers))": [
        {
            "tipo": "aptidao",
            "nome": "Proficiência em Ataques Múltiplos (Sabres de Luz) (Multiattack Proficiency (Lightsabers))"
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Persuasão da Força (Force Persuasion)": [
        {
            "tipo": "aptidao",
            "nome": "Negociador Hábil (Adept Negotiator)"
        }
    ],
    "Mestre Negociador (Master Negotiator)": [
        {
            "tipo": "aptidao",
            "nome": "Negociador Hábil (Adept Negotiator)"
        }
    ],
    "Negociador Agressivo (Aggressive Negotiator)": [
        {
            "tipo": "aptidao",
            "nome": "Negociador Hábil (Adept Negotiator)"
        }
    ],
    "Visões Coletivas (Collective Visions)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Sabedoria do Consular (Consular's Wisdom)": [
        {
            "tipo": "aptidao",
            "nome": "Negociador Hábil (Adept Negotiator)"
        }
    ],
    "Vitalidade do Consular Aprimorada (Improved Consular's Vitality)": [
        {
            "tipo": "aptidao",
            "nome": "Vitalidade do Consular (Consular's Vitality)"
        }
    ],
    "Conhecer a Fraqueza (Know Weakness)": [
        {
            "tipo": "aptidao",
            "nome": "Conhecimento do Adversário (Adversary Lore)"
        }
    ],
    "Renovar Visão (Renew Vision)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Ataque Visionário (Visionary Attack)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        },
        {
            "tipo": "aptidao",
            "nome": "Iniciado do WatchCircle (WatchCircle Initiate)"
        }
    ],
    "Defesa Visionária (Visionary Defense)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        },
        {
            "tipo": "aptidao",
            "nome": "Iniciado do WatchCircle (WatchCircle Initiate)"
        }
    ],
    "Iniciado do WatchCircle (WatchCircle Initiate)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Fuga Protegida (Cover Escape)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "aptidao",
                    "nome": "Bloquear (Block)"
                },
                {
                    "tipo": "aptidao",
                    "nome": "Defletir (Deflect)"
                }
            ]
        }
    ],
    "Meditação de Batalha Aprimorada (Improved Battle Meditation)": [
        {
            "tipo": "aptidao",
            "nome": "Meditação de Batalha (Battle Meditation)"
        }
    ],
    "Reforço de Cura (Healing Boost)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Reforço de Cura Aprimorado (Improved Healing Boost)": [
        {
            "tipo": "aptidao",
            "nome": "Reforço de Cura (Healing Boost)"
        },
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Acalmar (Soothe)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Compartilhar Segredo da Força (Share Force Secret)": [
        {
            "tipo": "texto",
            "texto": "Pelo menos 1 Segredo da Força"
        }
    ],
    "Compartilhar Técnica da Força (Share Force Technique)": [
        {
            "tipo": "texto",
            "texto": "Pelo menos 1 Técnica da Força"
        }
    ],
    "Compartilhar Aptidão (Share Talent)": [
        {
            "tipo": "arvoreQuantidade",
            "arvores": [
                "Árvore de Aptidões: Combate com Sabre de Luz (Lightsaber Combat)",
                "Árvore de Aptidões: Duelista (Duelist)",
                "Árvore de Aptidões: Formas de Sabre de Luz (Lightsaber Forms)"
            ],
            "min": 1
        }
    ],
    "Transferir Poder (Transfer Power)": [
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Ecos da Força (Echoes of the Force)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Preparado para o Perigo (Prepared for Danger)": [
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Julgamento Claro (Unclouded Judgement)": [
        {
            "tipo": "aptidao",
            "nome": "Perceber Enganação (Sense Deception)"
        }
    ],
    "Véu da Força (Force Veil)": [
        {
            "tipo": "aptidao",
            "nome": "Difícil de Sentir (Difficult to Sense)"
        }
    ],
    "Flagelo do Lado Sombrio (Dark Side Scourge)": [
        {
            "tipo": "aptidao",
            "nome": "Sentir o Lado Sombrio (Dark Side Sense)"
        }
    ],
    "Névoa da Força (Force Haze)": [
        {
            "tipo": "aptidao",
            "nome": "Mente Clara (Clear Mind)"
        }
    ],
    "Resistir ao Lado Sombrio (Resist the Dark Side)": [
        {
            "tipo": "aptidao",
            "nome": "Sentir o Lado Sombrio (Dark Side Sense)"
        }
    ],
    "Retaliação Sombria (Dark Retaliation)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe da Sentinela (Sentinel Strike)"
        }
    ],
    "Ruína do Lado Sombrio (Dark Side Bane)": [
        {
            "tipo": "aptidao",
            "nome": "Sentir o Lado Sombrio (Dark Side Sense)"
        }
    ],
    "Névoa Persistente (Persistent Haze)": [
        {
            "tipo": "aptidao",
            "nome": "Mente Clara (Clear Mind)"
        },
        {
            "tipo": "aptidao",
            "nome": "Névoa da Força (Force Haze)"
        }
    ],
    "Olhos Invisíveis (Unseen Eyes)": [
        {
            "tipo": "aptidao",
            "nome": "Mente Clara (Clear Mind)"
        },
        {
            "tipo": "aptidao",
            "nome": "Névoa da Força (Force Haze)"
        }
    ],
    "Golpe da Sentinela Aprimorado (Improved Sentinel Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe da Sentinela (Sentinel Strike)"
        }
    ],
    "Gambito da Sentinela Aprimorado (Improved Sentinel's Gambit)": [
        {
            "tipo": "aptidao",
            "nome": "Gambito da Sentinela (Sentinel's Gambit)"
        }
    ],
    "Repelir as Trevas (Rebuke the Dark)": [
        {
            "tipo": "poder",
            "nome": "Refutar (Rebuke)"
        }
    ],
    "Mácula do Lado Sombrio (Taint of the Dark Side)": [
        {
            "tipo": "aptidao",
            "nome": "Enganação Sombria (Dark Deception)"
        }
    ],
    "Saque Rápido Aprimorado (Sabres de Luz) (Improved Quick Draw (Lightsabers))": [
        {
            "tipo": "talento",
            "nome": "Saque Rápido (Quick Draw)"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Avanço do Vigilante (Watchman's Advance)": [
        {
            "tipo": "aptidao",
            "nome": "Alerta da Força (Force Warning)"
        }
    ],
    "Maestria em Armas Gêmeas (Twin Weapon Mastery)": [
        {
            "tipo": "aptidao",
            "nome": "Estilo de Armas Gêmeas (Twin Weapon Style)"
        }
    ],
    "Imobilização com Shoto (Shoto Pin)": [
        {
            "tipo": "aptidao",
            "nome": "Bloquear (Block)"
        }
    ],
    "Maestria no Manto da Força (Force Cloak Mastery)": [
        {
            "tipo": "aptidao",
            "nome": "Manto da Força (Force Cloak)"
        }
    ],
    "Fortalecer Lança Siang (Empower Siang Lance)": [
        {
            "tipo": "aptidao",
            "nome": "Maestria com Lança Siang (Siang Lance Mastery)"
        },
        {
            "tipo": "bba",
            "min": 7
        }
    ],
    "Deflexão com Manopla-Escudo (Shield Gauntlet Deflect)": [
        {
            "tipo": "aptidao",
            "nome": "Defesa com Manopla-Escudo (Shield Gauntlet Defense)"
        }
    ],
    "Redirecionar com Manopla-Escudo (Shield Gauntlet Redirect)": [
        {
            "tipo": "aptidao",
            "nome": "Defesa com Manopla-Escudo (Shield Gauntlet Defense)"
        },
        {
            "tipo": "aptidao",
            "nome": "Deflexão com Manopla-Escudo (Shield Gauntlet Deflect)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Aprimoramento Blindado I (Armored Augmentation I)": [
        {
            "tipo": "texto",
            "texto": "Proficiência com a armadura vestida"
        }
    ],
    "Aprimoramento Blindado II (Armored Augmentation II)": [
        {
            "tipo": "texto",
            "texto": "Proficiência com a armadura vestida"
        },
        {
            "tipo": "aptidao",
            "nome": "Aprimoramento Blindado I (Armored Augmentation I)"
        }
    ],
    "Retaliação de Cortosis (Cortosis Retaliation)": [
        {
            "tipo": "aptidao",
            "nome": "Defesa de Cortosis (Cortosis Defense)"
        }
    ],
    "Praetoria Ishu (Praetoria Ishu)": [
        {
            "tipo": "aptidao",
            "nome": "Bloquear (Block)"
        },
        {
            "tipo": "aptidao",
            "nome": "Defletir (Deflect)"
        }
    ],
    "Praetoria Vonil (Praetoria Vonil)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Força do Império (Strength of the Empire)": [
        {
            "tipo": "aptidao",
            "nome": "Moral do Cavaleiro (Knight's Morale)"
        }
    ],
    "Ações do Treinador de Cães Akk (Akk Dog Trainer's Actions)": [
        {
            "tipo": "aptidao",
            "nome": "Mestre de Cães Akk (Akk Dog Master)"
        }
    ],
    "Treinamento de Ataque de Cães Akk (Akk Dog Attack Training)": [
        {
            "tipo": "aptidao",
            "nome": "Mestre de Cães Akk (Akk Dog Master)"
        }
    ],
    "Reação Protetora (Protective Reaction)": [
        {
            "tipo": "aptidao",
            "nome": "Mestre de Cães Akk (Akk Dog Master)"
        }
    ],
    "Ilusões Krath (Krath Illusions)": [
        {
            "tipo": "aptidao",
            "nome": "Ilusão (Illusion)"
        }
    ],
    "Presença de Comando (Commanding Presence)": [
        {
            "tipo": "aptidao",
            "nome": "Líder Nato (Born Leader)"
        },
        {
            "tipo": "aptidao",
            "nome": "Perspicácia Tática (Tactical Savvy)"
        }
    ],
    "Liderança Coordenada (Coordinated Leadership)": [
        {
            "tipo": "aptidao",
            "nome": "Líder Nato (Born Leader)"
        },
        {
            "tipo": "aptidao",
            "nome": "Coordenar (Coordinate)"
        }
    ],
    "Ataque Reativo (Reactionary Attack)": [
        {
            "tipo": "aptidao",
            "nome": "Líder Nato (Born Leader)"
        },
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Perspicácia Tática (Tactical Savvy)": [
        {
            "tipo": "aptidao",
            "nome": "Líder Nato (Born Leader)"
        }
    ],
    "Sintonizado (Attuned)": [
        {
            "tipo": "aptidao",
            "nome": "Ataque Focado (Focused Attack)"
        }
    ],
    "Especialização em Arma (Sabres de Luz) (Weapon Specialization (Lightsabers))": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Redirecionar Disparo (Redirect Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Defletir (Deflect)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Bloqueio com Manopla de Cortosis (Cortosis Gauntlet Block)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Leve"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Armadura (Armor Proficiency)",
            "detalhe": "Média"
        }
    ],
    "Redirecionamento Preciso (Precise Redirect)": [
        {
            "tipo": "aptidao",
            "nome": "Redirecionar Disparo (Redirect Shot)"
        }
    ],
    "Riposte (Riposte)": [
        {
            "tipo": "aptidao",
            "nome": "Bloquear (Block)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Amigos Influentes (Influential Friends)": [
        {
            "tipo": "aptidao",
            "nome": "Contatos (Connections)"
        }
    ],
    "Amigos Poderosos (Powerful Friends)": [
        {
            "tipo": "aptidao",
            "nome": "Contatos (Connections)"
        },
        {
            "tipo": "aptidao",
            "nome": "Amigos Influentes (Influential Friends)"
        }
    ],
    "Detecção de Campo (Field Detection)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Visão da Força Aprimorada (Improved Force Sight)": [
        {
            "tipo": "especie",
            "especies": [
                "miraluka"
            ],
            "texto": "Ser Miraluka"
        },
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Mestre Luka Sene (Luka Sene Master)": [
        {
            "tipo": "aptidao",
            "nome": "Detecção de Campo (Field Detection)"
        },
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Visão Rápida (Quickseeing)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        },
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Modificar Veneno (Modify Poison)": [
        {
            "tipo": "aptidao",
            "nome": "Técnicas Malkite (Malkite Techniques)"
        }
    ],
    "Veneno Entorpecente (Numbing Poison)": [
        {
            "tipo": "aptidao",
            "nome": "Técnicas Malkite (Malkite Techniques)"
        }
    ],
    "Veneno Indetectável (Undetectable Poison)": [
        {
            "tipo": "aptidao",
            "nome": "Técnicas Malkite (Malkite Techniques)"
        }
    ],
    "Veneno Cruel (Vicious Poison)": [
        {
            "tipo": "aptidao",
            "nome": "Técnicas Malkite (Malkite Techniques)"
        }
    ],
    "Mandaloriano Blindado (Armored Mandalorian)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        },
        {
            "tipo": "aptidao",
            "nome": "Glória Mandaloriana (Mandalorian Glory)"
        },
        {
            "tipo": "texto",
            "texto": "Proficiência com a armadura vestida"
        }
    ],
    "Ferocidade Mandaloriana (Mandalorian Ferocity)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 13
        }
    ],
    "Especialização Echani (Echani Expertise)": [
        {
            "tipo": "bba",
            "min": 10
        }
    ],
    "Golpe Perfurante (Piercing Hit)": [
        {
            "tipo": "aptidao",
            "nome": "Sentidos Apurados (Acute Senses)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro Atento (Keen Shot)"
        }
    ],
    "Armadilha Rápida (Quicktrap)": [
        {
            "tipo": "aptidao",
            "nome": "Improvisador (Jury-Rigger)"
        },
        {
            "tipo": "aptidao",
            "nome": "Fio de Armadilha (Tripwire)"
        }
    ],
    "Escalador Veloz (Speedclimber)": [
        {
            "tipo": "aptidao",
            "nome": "Passada Longa (Long Stride)"
        },
        {
            "tipo": "aptidao",
            "nome": "Passo Firme (Surefooted)"
        },
        {
            "tipo": "pericia",
            "pericia": "escalar"
        }
    ],
    "Surpreendentemente Rápido (Surprisingly Quick)": [
        {
            "tipo": "talento",
            "nome": "Foco em Perícia (Skill Focus)",
            "detalhe": "Iniciativa"
        }
    ],
    "Fio de Armadilha (Tripwire)": [
        {
            "tipo": "aptidao",
            "nome": "Improvisador (Jury-Rigger)"
        },
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Fundamentos de Teräs Käsi (Teräs Käsi Basics)": [
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        }
    ],
    "Maestria em Teräs Käsi (Teräs Käsi Mastery)": [
        {
            "tipo": "aptidao",
            "nome": "Fundamentos de Teräs Käsi (Teräs Käsi Basics)"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "II"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "III"
        }
    ],
    "Contragolpe Desarmado (Unarmed Counterstrike)": [
        {
            "tipo": "aptidao",
            "nome": "Fundamentos de Teräs Käsi (Teräs Käsi Basics)"
        },
        {
            "tipo": "aptidao",
            "nome": "Aparar Desarmado (Unarmed Parry)"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "II"
        }
    ],
    "Aparar Desarmado (Unarmed Parry)": [
        {
            "tipo": "aptidao",
            "nome": "Fundamentos de Teräs Käsi (Teräs Käsi Basics)"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Artes Marciais (I, II e III) (Martial Arts (I, II, and III))",
            "detalhe": "II"
        }
    ],
    "Atrair Lacaio Superior (Attract Superior Minion)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        },
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado I (Impel Ally I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado II (Impel Ally II)"
        }
    ],
    "Guarda-Costas I (Bodyguard I)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        }
    ],
    "Guarda-Costas II (Bodyguard II)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        },
        {
            "tipo": "aptidao",
            "nome": "Guarda-Costas I (Bodyguard I)"
        }
    ],
    "Guarda-Costas III (Bodyguard III)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        },
        {
            "tipo": "aptidao",
            "nome": "Guarda-Costas I (Bodyguard I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Guarda-Costas II (Bodyguard II)"
        }
    ],
    "Impelir Aliado III (Impel Ally III)": [
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado I (Impel Ally I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado II (Impel Ally II)"
        }
    ],
    "Inspirar Ira (Inspire Wrath)": [
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado I (Impel Ally I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado II (Impel Ally II)"
        }
    ],
    "Ordens do Mestre (Master's Orders)": [
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado I (Impel Ally I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado II (Impel Ally II)"
        }
    ],
    "Abrigo (Shelter)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        }
    ],
    "Urgência (Urgency)": [
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado I (Impel Ally I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Impelir Aliado II (Impel Ally II)"
        }
    ],
    "Abundância de Aliados (Wealth of Allies)": [
        {
            "tipo": "aptidao",
            "nome": "Atrair Lacaio (Attract Minion)"
        }
    ],
    "Defesa Wan-Shen (Wan-Shen Defense)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        }
    ],
    "Kata Wan-Shen (Wan-Shen Kata)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        }
    ],
    "Maestria Wan-Shen (Wan-Shen Mastery)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        },
        {
            "tipo": "aptidao",
            "nome": "Kata Wan-Shen (Wan-Shen Kata)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Truques Sujos (Dirty Tricks)": [
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        }
    ],
    "Floreio com Duas Armas I (Dual Weapon Flourish I)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Acuidade com Arma (Weapon Finesse)"
        }
    ],
    "Floreio com Duas Armas II (Dual Weapon Flourish II)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "II"
        },
        {
            "tipo": "aptidao",
            "nome": "Floreio com Duas Armas I (Dual Weapon Flourish I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Mestre da Elegância (Master of Elegance)"
        },
        {
            "tipo": "talento",
            "nome": "Acuidade com Arma (Weapon Finesse)"
        }
    ],
    "Mestre da Elegância (Master of Elegance)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "aptidao",
                    "nome": "Floreio com Duas Armas I (Dual Weapon Flourish I)"
                },
                {
                    "tipo": "aptidao",
                    "nome": "Floreio com Uma Arma I (Single Weapon Flourish I)"
                }
            ]
        },
        {
            "tipo": "talento",
            "nome": "Acuidade com Arma (Weapon Finesse)"
        }
    ],
    "Do Nada (Out of Nowhere)": [
        {
            "tipo": "pericia",
            "pericia": "enganacao"
        },
        {
            "tipo": "talento",
            "nome": "Acuidade com Arma (Weapon Finesse)"
        }
    ],
    "Floreio com Uma Arma I (Single Weapon Flourish I)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "talento",
                    "nome": "Ataque Duplo (Double Attack)",
                    "detalhe": "Armas Brancas Avançadas"
                },
                {
                    "tipo": "talento",
                    "nome": "Ataque Duplo (Double Attack)",
                    "detalhe": "Armas Exóticas"
                },
                {
                    "tipo": "talento",
                    "nome": "Ataque Duplo (Double Attack)",
                    "detalhe": "Sabres de Luz"
                }
            ]
        },
        {
            "tipo": "talento",
            "nome": "Acuidade com Arma (Weapon Finesse)"
        }
    ],
    "Floreio com Uma Arma II (Single Weapon Flourish II)": [
        {
            "tipo": "alguma",
            "requisitos": [
                {
                    "tipo": "talento",
                    "nome": "Ataque Duplo (Double Attack)",
                    "detalhe": "Armas Brancas Avançadas"
                },
                {
                    "tipo": "talento",
                    "nome": "Ataque Duplo (Double Attack)",
                    "detalhe": "Armas Exóticas"
                },
                {
                    "tipo": "talento",
                    "nome": "Ataque Duplo (Double Attack)",
                    "detalhe": "Sabres de Luz"
                }
            ]
        },
        {
            "tipo": "aptidao",
            "nome": "Mestre da Elegância (Master of Elegance)"
        },
        {
            "tipo": "aptidao",
            "nome": "Floreio com Uma Arma I (Single Weapon Flourish I)"
        },
        {
            "tipo": "talento",
            "nome": "Acuidade com Arma (Weapon Finesse)"
        }
    ],
    "Golpe Atordoante Aprimorado (Improved Stunning Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Atordoante (Stunning Strike)"
        }
    ],
    "Morte Giratória (Whirling Death)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Esmagador (Melee Smash)"
        },
        {
            "tipo": "aptidao",
            "nome": "Assalto Implacável (Unrelenting Assault)"
        }
    ],
    "Guerreiro Temido (Feared Warrior)": [
        {
            "tipo": "aptidao",
            "nome": "Presença de Comando (Commanding Presence)"
        }
    ],
    "Fogo Combinado (Combined Fire)": [
        {
            "tipo": "talento",
            "nome": "Ataque Coordenado (Coordinated Attack)"
        }
    ],
    "Determinação do Mercenário (Mercenary's Determination)": [
        {
            "tipo": "aptidao",
            "nome": "Garra do Mercenário (Mercenary's Grit)"
        }
    ],
    "Trabalho em Equipe do Mercenário (Mercenary's Teamwork)": [
        {
            "tipo": "aptidao",
            "nome": "Fogo Combinado (Combined Fire)"
        },
        {
            "tipo": "talento",
            "nome": "Ataque Coordenado (Coordinated Attack)"
        }
    ],
    "Especialista em Droides (Droid Expert)": [
        {
            "tipo": "aptidao",
            "nome": "Reparos em Movimento (Repairs on the Fly)"
        }
    ],
    "Modificações Rápidas (Quick Modifications)": [
        {
            "tipo": "aptidao",
            "nome": "Reparos em Movimento (Repairs on the Fly)"
        },
        {
            "tipo": "talento",
            "nome": "Especialista Técnico (Tech Specialist)"
        }
    ],
    "Sábio da Tecnologia (Tech Savant)": [
        {
            "tipo": "pericia",
            "pericia": "conhecimentoTecnologia"
        }
    ],
    "Táticas de Campo (Field Tactics)": [
        {
            "tipo": "aptidao",
            "nome": "Táticas de Posicionamento (Deployment Tactics)"
        }
    ],
    "Um pelo Time (One for the Team)": [
        {
            "tipo": "aptidao",
            "nome": "Táticas de Posicionamento (Deployment Tactics)"
        }
    ],
    "Manobrar Melhor (Outmaneuver)": [
        {
            "tipo": "aptidao",
            "nome": "Táticas de Posicionamento (Deployment Tactics)"
        },
        {
            "tipo": "aptidao",
            "nome": "Táticas de Campo (Field Tactics)"
        }
    ],
    "Mudar Defesa II (Shift Defense II)": [
        {
            "tipo": "aptidao",
            "nome": "Mudar Defesa I (Shift Defense I)"
        }
    ],
    "Mudar Defesa III (Shift Defense III)": [
        {
            "tipo": "aptidao",
            "nome": "Mudar Defesa I (Shift Defense I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Mudar Defesa II (Shift Defense II)"
        }
    ],
    "Prerrogativa do Comandante (Commander's Prerogative)": [
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Explorar Fraqueza (Exploit Weakness)": [
        {
            "tipo": "aptidao",
            "nome": "Táticas de Assalto (Assault Tactics)"
        }
    ],
    "Táticas Irregulares (Irregular Tactics)": [
        {
            "tipo": "texto",
            "texto": "Característica de classe Compartilhar Aptidão (Oficial)"
        }
    ],
    "Virar a Maré (Turn the Tide)": [
        {
            "tipo": "aptidao",
            "nome": "Prerrogativa do Comandante (Commander's Prerogative)"
        },
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Andar na Linha (Walk the Line)": [
        {
            "tipo": "aptidao",
            "nome": "Perturbador (Disruptive)"
        }
    ],
    "Apunhalador (Backstabber)": [
        {
            "tipo": "aptidao",
            "nome": "Ataque Furtivo (Sneak Attack)"
        }
    ],
    "Estrategista Astuto (Cunning Strategist)": [
        {
            "tipo": "aptidao",
            "nome": "Perturbador (Disruptive)"
        },
        {
            "tipo": "aptidao",
            "nome": "Andar na Linha (Walk the Line)"
        }
    ],
    "Escaramuçador Aprimorado (Improved Skirmisher)": [
        {
            "tipo": "aptidao",
            "nome": "Escaramuçador (Skirmisher)"
        }
    ],
    "Ataque Furtivo Aprimorado (Improved Sneak Attack)": [
        {
            "tipo": "aptidao",
            "nome": "Ataque Furtivo (Sneak Attack)"
        },
        {
            "tipo": "talento",
            "nome": "Tiro à Queima-Roupa (Point Blank Shot)"
        }
    ],
    "Semear Confusão (Sow Confusion)": [
        {
            "tipo": "aptidao",
            "nome": "Hesitar (Hesitate)"
        }
    ],
    "Golpe Súbito (Sudden Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Escaramuçador (Skirmisher)"
        },
        {
            "tipo": "aptidao",
            "nome": "Ataque Furtivo (Sneak Attack)"
        }
    ],
    "Golpe Enfraquecedor (Weakening Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Covarde (Dastardly Strike)"
        }
    ],
    "Montaria de Batalha (Battle Mount)": [
        {
            "tipo": "aptidao",
            "nome": "Cavaleiro Especialista (Expert Rider)"
        },
        {
            "tipo": "aptidao",
            "nome": "Orientação no Terreno (Terrain Guidance)"
        },
        {
            "tipo": "pericia",
            "pericia": "montaria"
        }
    ],
    "Cavaleiro Especialista (Expert Rider)": [
        {
            "tipo": "pericia",
            "pericia": "montaria"
        }
    ],
    "Piloto Mecanizado (Mechanized Rider)": [
        {
            "tipo": "pericia",
            "pericia": "montaria"
        },
        {
            "tipo": "pericia",
            "pericia": "pilotar"
        }
    ],
    "Orientação no Terreno (Terrain Guidance)": [
        {
            "tipo": "pericia",
            "pericia": "montaria"
        }
    ],
    "Maestria em Regimes (Regimen Mastery)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Regimes da Força (Force Regimen Mastery)"
        }
    ],
    "Prosperar no Caos (Thrive on Chaos)": [
        {
            "tipo": "aptidao",
            "nome": "Abertura Vantajosa (Advantageous Opening)"
        }
    ],
    "Desforra (Vindication)": [
        {
            "tipo": "aptidao",
            "nome": "Retribuição (Retribution)"
        }
    ],
    "Foco em Arma Maior (Fira) (Greater Weapon Focus (Fira))": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Fira"
        }
    ],
    "Ataque Desconcertante (Confounding Attack)": [
        {
            "tipo": "aptidao",
            "nome": "Enroscar (Tangle Up)"
        },
        {
            "tipo": "aptidao",
            "nome": "Instintos Sobrenaturais (Uncanny Instincts)"
        }
    ],
    "Dobrar a Aposta (Double Up)": [
        {
            "tipo": "aptidao",
            "nome": "Achar uma Brecha (Find an Opening)"
        },
        {
            "tipo": "aptidao",
            "nome": "Aproveitar o Momento (Seize the Moment)"
        }
    ],
    "Achar uma Brecha (Find an Opening)": [
        {
            "tipo": "aptidao",
            "nome": "Aproveitar o Momento (Seize the Moment)"
        }
    ],
    "Defesa Oportunista (Opportunistic Defense)": [
        {
            "tipo": "aptidao",
            "nome": "Instintos Sobrenaturais (Uncanny Instincts)"
        }
    ],
    "Enroscar (Tangle Up)": [
        {
            "tipo": "aptidao",
            "nome": "Instintos Sobrenaturais (Uncanny Instincts)"
        }
    ],
    "Reparos Rápidos (Fast Repairs)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Ligação Direta (Hotwire)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Conserto Rápido (Quick Fix)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Pergunta de Forasteiro (Outsider's Query)": [
        {
            "tipo": "pericia",
            "pericia": "persuasao"
        }
    ],
    "Cauteloso (Wary)": [
        {
            "tipo": "aptidao",
            "nome": "Olhar de Forasteiro (Outsider's Eye)"
        },
        {
            "tipo": "pericia",
            "pericia": "percepcao"
        }
    ],
    "Medidas Defensivas (Defensive Measures)": [
        {
            "tipo": "aptidao",
            "nome": "Zona Segura (Safe Zone)"
        }
    ],
    "Ponto de Lançamento (Launch Point)": [
        {
            "tipo": "aptidao",
            "nome": "Zona Segura (Safe Zone)"
        }
    ],
    "Defesas Ocultantes (Obscuring Defenses)": [
        {
            "tipo": "aptidao",
            "nome": "Zona Segura (Safe Zone)"
        }
    ],
    "Realocar (Relocate)": [
        {
            "tipo": "aptidao",
            "nome": "Zona Segura (Safe Zone)"
        }
    ],
    "Passagem Segura (Safe Passage)": [
        {
            "tipo": "aptidao",
            "nome": "Caça de Escolta (Escort Fighter)"
        }
    ],
    "Zona de Recuperação (Zone of Recuperation)": [
        {
            "tipo": "aptidao",
            "nome": "Zona Segura (Safe Zone)"
        }
    ],
    "Lutar até a Morte (Fight to the Death)": [
        {
            "tipo": "aptidao",
            "nome": "Sanguinário (Bloodthirsty)"
        }
    ],
    "Reputação Selvagem (Savage Reputation)": [
        {
            "tipo": "aptidao",
            "nome": "Sanguinário (Bloodthirsty)"
        }
    ],
    "Correr e Disparar (Dash and Blast)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Ataque em Corrida (Running Attack)"
        }
    ],
    "Fogo de Flanco (Flanking Fire)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        }
    ],
    "Tiro Garantido (Guaranteed Shot)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        }
    ],
    "Chuva de Disparos (Hailfire)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        }
    ],
    "Tiro Duplo (Twin Shot)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Tiro Rápido (Rapid Shot)"
        }
    ],
    "Blaster e Lâmina I (Blaster and Blade I)": [
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Brancas Avançadas"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Pistolas"
        }
    ],
    "Blaster e Lâmina II (Blaster and Blade II)": [
        {
            "tipo": "aptidao",
            "nome": "Blaster e Lâmina I (Blaster and Blade I)"
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Brancas Avançadas"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Pistolas"
        }
    ],
    "Blaster e Lâmina III (Blaster and Blade III)": [
        {
            "tipo": "aptidao",
            "nome": "Blaster e Lâmina I (Blaster and Blade I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Blaster e Lâmina II (Blaster and Blade II)"
        },
        {
            "tipo": "talento",
            "nome": "Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))",
            "detalhe": "I"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Brancas Avançadas"
        },
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Pistolas"
        }
    ],
    "Só o Melhor (Only the Finest)": [
        {
            "tipo": "aptidao",
            "nome": "Comprador do Mercado Negro (Black Market Buyer)"
        }
    ],
    "Guarda Blindado (Armored Guard)": [
        {
            "tipo": "aptidao",
            "nome": "Proteger (Ward)"
        }
    ],
    "Resistência do Guarda (Guard's Endurance)": [
        {
            "tipo": "aptidao",
            "nome": "Proteger (Ward)"
        }
    ],
    "Salva-Vidas (Lifesaver)": [
        {
            "tipo": "aptidao",
            "nome": "Sacrifício do Guarda-Costas (Bodyguard's Sacrifice)"
        }
    ],
    "Rolar com o Golpe (Roll With It)": [
        {
            "tipo": "aptidao",
            "nome": "Sacrifício do Guarda-Costas (Bodyguard's Sacrifice)"
        },
        {
            "tipo": "aptidao",
            "nome": "Receber o Golpe (Take the Hit)"
        }
    ],
    "Receber o Golpe (Take the Hit)": [
        {
            "tipo": "aptidao",
            "nome": "Sacrifício do Guarda-Costas (Bodyguard's Sacrifice)"
        }
    ],
    "Amigo ou Inimigo (Friend or Foe)": [
        {
            "tipo": "aptidao",
            "nome": "Lançar Suspeita (Cast Suspicion)"
        }
    ],
    "Vantagem Roubada (Stolen Advantage)": [
        {
            "tipo": "aptidao",
            "nome": "Lançar Suspeita (Cast Suspicion)"
        }
    ],
    "Traição Verdadeira (True Betrayal)": [
        {
            "tipo": "aptidao",
            "nome": "Lançar Suspeita (Cast Suspicion)"
        },
        {
            "tipo": "aptidao",
            "nome": "Amigo ou Inimigo (Friend or Foe)"
        }
    ],
    "Números Reforçados (Bolstered Numbers)": [
        {
            "tipo": "aptidao",
            "nome": "Recrutar Inimigo (Recruit Enemy)"
        }
    ],
    "Sacrifício Nobre (Noble Sacrifice)": [
        {
            "tipo": "aptidao",
            "nome": "Recrutar Inimigo (Recruit Enemy)"
        }
    ],
    "Recrutamento de Equipe (Team Recruiting)": [
        {
            "tipo": "aptidao",
            "nome": "Recrutar Inimigo (Recruit Enemy)"
        }
    ],
    "Atrair para Perto (Lure Closer)": [
        {
            "tipo": "aptidao",
            "nome": "Passo Enganoso (Trick Step)"
        }
    ],
    "Risco pela Recompensa (Risk for Reward)": [
        {
            "tipo": "aptidao",
            "nome": "Achar Brechas (Find Openings)"
        }
    ],
    "Assalto em Combate Próximo (Close-Combat Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Líder de Equipe de Reconhecimento (Reconnaissance Team Leader)"
        }
    ],
    "Ações de Reconhecimento (Reconnaissance Actions)": [
        {
            "tipo": "aptidao",
            "nome": "Líder de Equipe de Reconhecimento (Reconnaissance Team Leader)"
        }
    ],
    "Maior Potência (Higher Yield)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Troca de Arma (Weapon Shift)": [
        {
            "tipo": "aptidao",
            "nome": "Coronhada (Gun Club)"
        }
    ],
    "Lançador de Bombas (Bomb Thrower)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Pela Causa (For the Cause)": [
        {
            "tipo": "aptidao",
            "nome": "Dar o Exemplo (Make an Example)"
        }
    ],
    "Assalto Flamejante (Burning Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Treinamento com Jetpack (Jet Pack Training)"
        }
    ],
    "Trajetória Aprimorada (Improved Trajectory)": [
        {
            "tipo": "aptidao",
            "nome": "Treinamento com Jetpack (Jet Pack Training)"
        }
    ],
    "Retirada com Jetpack (Jet Pack Withdraw)": [
        {
            "tipo": "aptidao",
            "nome": "Treinamento com Jetpack (Jet Pack Training)"
        }
    ],
    "Golpe Baixo (Cheap Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Oportunista (Opportunistic Strike)"
        }
    ],
    "Sem Escapatória (No Escape)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Oportunista (Opportunistic Strike)"
        }
    ],
    "Golpe Escorregadio (Slippery Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Golpear e Correr (Strike and Run)"
        }
    ],
    "Explosão Extrema (Extreme Explosion)": [
        {
            "tipo": "aptidao",
            "nome": "Demolidor Habilidoso (Skilled Demolitionist)"
        },
        {
            "tipo": "aptidao",
            "nome": "Explosão Direcionada (Shaped Explosion)"
        }
    ],
    "Explosão Direcionada (Shaped Explosion)": [
        {
            "tipo": "aptidao",
            "nome": "Demolidor Habilidoso (Skilled Demolitionist)"
        }
    ],
    "Previsão (Foresight)": [
        {
            "tipo": "aptidao",
            "nome": "Percepção da Força (Force Perception)"
        }
    ],
    "Avaliar Potencial na Força (Gauge Force Potential)": [
        {
            "tipo": "aptidao",
            "nome": "Percepção da Força (Force Perception)"
        }
    ],
    "Visões (Visions)": [
        {
            "tipo": "aptidao",
            "nome": "Percepção da Força (Force Perception)"
        },
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Reflexos da Força (Force Reflexes)": [
        {
            "tipo": "aptidao",
            "nome": "Piloto da Força (Force Pilot)"
        },
        {
            "tipo": "talento",
            "nome": "Táticas de Nave (Starship Tactics)"
        }
    ],
    "Navegação Instintiva (Instinctive Navigation)": [
        {
            "tipo": "aptidao",
            "nome": "Piloto da Força (Force Pilot)"
        }
    ],
    "Movimento do Futuro (Motion of the Future)": [
        {
            "tipo": "aptidao",
            "nome": "Percepção da Força (Force Perception)"
        },
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Psicometria (Psychometry)": [
        {
            "tipo": "aptidao",
            "nome": "Percepção da Força (Force Perception)"
        },
        {
            "tipo": "poder",
            "nome": "Visão Distante (Farseeing)"
        }
    ],
    "Redemoinho Móvel (Mobile Whirlwind)": [
        {
            "tipo": "aptidao",
            "nome": "Ciclone Seyugi (Seyugi Cyclone)"
        }
    ],
    "Redemoinho Repulsor (Repelling Whirlwind)": [
        {
            "tipo": "aptidao",
            "nome": "Ciclone Seyugi (Seyugi Cyclone)"
        }
    ],
    "Tempestade Súbita (Sudden Storm)": [
        {
            "tipo": "aptidao",
            "nome": "Ciclone Seyugi (Seyugi Cyclone)"
        }
    ],
    "Levado pela Tempestade (Tempest Tossed)": [
        {
            "tipo": "aptidao",
            "nome": "Ciclone Seyugi (Seyugi Cyclone)"
        }
    ],
    "Maestria em Biotecnologia (Biotech Mastery)": [
        {
            "tipo": "talento",
            "nome": "Especialista em Biotecnologia (Biotech Specialist)"
        }
    ],
    "Remendo Rápido (Expedient Mending)": [
        {
            "tipo": "aptidao",
            "nome": "Moldador Especialista (Expert Shaper)"
        }
    ],
    "Mestre Remendador (Master Mender)": [
        {
            "tipo": "aptidao",
            "nome": "Moldador Especialista (Expert Shaper)"
        }
    ],
    "Implantador Habilidoso (Skilled Implanter)": [
        {
            "tipo": "talento",
            "nome": "Cirurgia Biotecnológica (Biotech Surgery)"
        }
    ],
    "Combustão (Combustion)": [
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Trovão (Thunderclap)": [
        {
            "tipo": "talento",
            "nome": "Investida Bantha (Bantha Rush)"
        },
        {
            "tipo": "talento",
            "nome": "Treinamento da Força (Force Training)"
        }
    ],
    "Tiro de Precisão (Precision Shot)": [
        {
            "tipo": "talento",
            "nome": "Tiro Distante (Far Shot)"
        }
    ],
    "Na Mosca (Bullseye)": [
        {
            "tipo": "aptidao",
            "nome": "Fazer Mira (Draw a Bead)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro de Precisão (Precision Shot)"
        },
        {
            "tipo": "talento",
            "nome": "Franco-Atirador (Sniper)"
        }
    ],
    "Fazer Mira (Draw a Bead)": [
        {
            "tipo": "aptidao",
            "nome": "Tiro de Precisão (Precision Shot)"
        },
        {
            "tipo": "bba",
            "min": 10
        }
    ],
    "Tiro Imobilizador (Pinning Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Tiro de Precisão (Precision Shot)"
        }
    ],
    "Tiro Perturbador (Harrying Shot)": [
        {
            "tipo": "aptidao",
            "nome": "Tiro Imobilizador (Pinning Shot)"
        },
        {
            "tipo": "aptidao",
            "nome": "Tiro de Precisão (Precision Shot)"
        }
    ],
    "Jab Defensivo (Defensive Jab)": [
        {
            "tipo": "aptidao",
            "nome": "Jab de Retaliação (Retaliation Jab)"
        }
    ],
    "Boxeador de Choque Atordoante (Stunning Shockboxer)": [
        {
            "tipo": "aptidao",
            "nome": "Jab Pungente (Stinging Jab)"
        }
    ],
    "Causar Mutação (Cause Mutation)": [
        {
            "tipo": "aptidao",
            "nome": "Alquimia Sith (Sith Alchemy)"
        }
    ],
    "Especialista em Alquimia Sith (Sith Alchemy Specialist)": [
        {
            "tipo": "aptidao",
            "nome": "Alquimia Sith (Sith Alchemy)"
        }
    ],
    "Medidas Desesperadas (Desperate Measures)": [
        {
            "tipo": "aptidao",
            "nome": "Focar o Terror (Focus Terror)"
        }
    ],
    "Poder do Ódio (Power of Hatred)": [
        {
            "tipo": "aptidao",
            "nome": "Incitar Fúria (Incite Rage)"
        }
    ],
    "Mestre do Lado Sombrio (Dark Side Master)": [
        {
            "tipo": "aptidao",
            "nome": "Adepto do Lado Sombrio (Dark Side Adept)"
        }
    ],
    "Cura Sombria Aprimorada (Improved Dark Healing)": [
        {
            "tipo": "aptidao",
            "nome": "Cura Sombria (Dark Healing)"
        }
    ],
    "Golpe Perverso (Wicked Strike)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        },
        {
            "tipo": "aptidao",
            "nome": "Especialização em Arma (Sabres de Luz) (Weapon Specialization (Lightsabers))"
        }
    ],
    "Campo de Cura Sombria (Dark Healing Field)": [
        {
            "tipo": "aptidao",
            "nome": "Cura Sombria (Dark Healing)"
        },
        {
            "tipo": "aptidao",
            "nome": "Cura Sombria Aprimorada (Improved Dark Healing)"
        }
    ],
    "Drenar a Força (Drain Force)": [
        {
            "tipo": "aptidao",
            "nome": "Aflição (Affliction)"
        }
    ],
    "Forma Roubada (Stolen Form)": [
        {
            "tipo": "texto",
            "texto": "Pelo menos 1 Técnica da Força"
        },
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Falsificação Eletrônica (Electronic Forgery)": [
        {
            "tipo": "pericia",
            "pericia": "usarComputador"
        }
    ],
    "Sabotagem Eletrônica (Electronic Sabotage)": [
        {
            "tipo": "pericia",
            "pericia": "usarComputador"
        }
    ],
    "Slicer de Segurança (Security Slicer)": [
        {
            "tipo": "pericia",
            "pericia": "mecanica"
        }
    ],
    "Lábia (Fast Talker)": [
        {
            "tipo": "aptidao",
            "nome": "Arte da Ocultação (Art of Concealment)"
        }
    ],
    "Armas Escondidas (Hidden Weapons)": [
        {
            "tipo": "aptidao",
            "nome": "Arte da Ocultação (Art of Concealment)"
        }
    ],
    "Saqueador do Espaço Profundo (Deep Space Raider)": [
        {
            "tipo": "aptidao",
            "nome": "Lobo do Espaço (Spacehound)"
        },
        {
            "tipo": "aptidao",
            "nome": "Saqueador de Naves (Starship Raider)"
        }
    ],
    "Linguagem de Computador (Computer Language)": [
        {
            "tipo": "texto",
            "texto": "Saber o idioma Binário"
        }
    ],
    "Manipulação Aprimorada (Enhanced Manipulation)": [
        {
            "tipo": "atributo",
            "attr": "DES",
            "min": 15
        }
    ],
    "Reforço de Energia (Power Boost)": [
        {
            "tipo": "aptidao",
            "nome": "Pico de Energia (Power Surge)"
        }
    ],
    "Incógnito (Incognito)": [
        {
            "tipo": "aptidao",
            "nome": "Misturar-se (Blend In)"
        }
    ],
    "Vigilância Aprimorada (Improved Surveillance)": [
        {
            "tipo": "aptidao",
            "nome": "Vigilância (Surveillance)"
        },
        {
            "tipo": "pericia",
            "pericia": "percepcao"
        }
    ],
    "Conhecimento Íntimo (Intimate Knowledge)": [
        {
            "tipo": "aptidao",
            "nome": "Vigilância (Surveillance)"
        }
    ],
    "Vigilância (Surveillance)": [
        {
            "tipo": "pericia",
            "pericia": "percepcao"
        }
    ],
    "Táticas Coordenadas (Coordinated Tactics)": [
        {
            "tipo": "aptidao",
            "nome": "Oficial Comandante (Commanding Officer)"
        }
    ],
    "Fogo à Vontade (Fire at Will)": [
        {
            "tipo": "aptidao",
            "nome": "Oficial Comandante (Commanding Officer)"
        },
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Ações do Esquadrão (Squad Actions)": [
        {
            "tipo": "aptidao",
            "nome": "Oficial Comandante (Commanding Officer)"
        }
    ],
    "Inteligência Avançada (Advanced Intel)": [
        {
            "tipo": "aptidao",
            "nome": "Observador (Spotter)"
        }
    ],
    "Buscar e Destruir (Seek and Destroy)": [
        {
            "tipo": "aptidao",
            "nome": "Olhos Ocultos (Hidden Eyes)"
        }
    ],
    "Defesas Psíquicas (Psychic Defenses)": [
        {
            "tipo": "aptidao",
            "nome": "Cidadela Psíquica (Psychic Citadel)"
        }
    ],
    "Enganação Danosa (Damaging Deception)": [
        {
            "tipo": "aptidao",
            "nome": "Distração Astuta (Cunning Distraction)"
        }
    ],
    "Grito Distrativo (Distracting Shout)": [
        {
            "tipo": "aptidao",
            "nome": "Distração Astuta (Cunning Distraction)"
        }
    ],
    "Cobertura Leve Aprimorada (Improved Soft Cover)": [
        {
            "tipo": "aptidao",
            "nome": "Inofensivo (Innocuous)"
        }
    ],
    "Traiçoeiro (Treacherous)": [
        {
            "tipo": "aptidao",
            "nome": "Cobertura Leve Aprimorada (Improved Soft Cover)"
        },
        {
            "tipo": "aptidao",
            "nome": "Inofensivo (Innocuous)"
        }
    ],
    "Mira Focada (Focused Targeting)": [
        {
            "tipo": "aptidao",
            "nome": "Companheiros de Armas (Comrades in Arms)"
        }
    ],
    "Falange (Phalanx)": [
        {
            "tipo": "aptidao",
            "nome": "Cuidar das Costas (Watch Your Back)"
        }
    ],
    "Ficar Juntos (Stick Together)": [
        {
            "tipo": "aptidao",
            "nome": "Companheiros de Armas (Comrades in Arms)"
        }
    ],
    "Torreta Blaster II (Blaster Turret II)": [
        {
            "tipo": "aptidao",
            "nome": "Torreta Blaster I (Blaster Turret I)"
        }
    ],
    "Torreta Blaster III (Blaster Turret III)": [
        {
            "tipo": "aptidao",
            "nome": "Torreta Blaster I (Blaster Turret I)"
        },
        {
            "tipo": "aptidao",
            "nome": "Torreta Blaster II (Blaster Turret II)"
        }
    ],
    "Torreta de Íons (Ion Turret)": [
        {
            "tipo": "aptidao",
            "nome": "Torreta Blaster I (Blaster Turret I)"
        }
    ],
    "Torreta Atordoante (Stun Turret)": [
        {
            "tipo": "aptidao",
            "nome": "Torreta Blaster I (Blaster Turret I)"
        }
    ],
    "Autodestruição da Torreta (Turret Self-Destruct)": [
        {
            "tipo": "aptidao",
            "nome": "Torreta Blaster I (Blaster Turret I)"
        }
    ],
    "Ciclo da Harmonia (Cycle of Harmony)": [
        {
            "tipo": "aptidao",
            "nome": "Adepto Tyia (Tyia Adept)"
        }
    ],
    "Estabilizar pela Força (Force Stabilize)": [
        {
            "tipo": "aptidao",
            "nome": "Adepto Tyia (Tyia Adept)"
        }
    ],
    "Segundo Golpe (Second Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Revidar Disparo (Blast Back)"
        }
    ],
    "Guinada (Swerve)": [
        {
            "tipo": "aptidao",
            "nome": "Desvanecer (Fade Away)"
        }
    ],
    "Cobertura Impenetrável (Impenetrable Cover)": [
        {
            "tipo": "aptidao",
            "nome": "Maximizar Cobertura (Maximize Cover)"
        }
    ],
    "Atacante Invisível (Invisible Attacker)": [
        {
            "tipo": "aptidao",
            "nome": "Maximizar Cobertura (Maximize Cover)"
        }
    ],
    "Choque de Bombardeio (Shellshock)": [
        {
            "tipo": "aptidao",
            "nome": "Enfraquecer o Alvo (Soften the Target)"
        }
    ],
    "Triangular (Triangulate)": [
        {
            "tipo": "aptidao",
            "nome": "Visão Aprimorada (Enhanced Vision)"
        }
    ],
    "Adaptação Desequilibrante (Unbalancing Adaptation)": [
        {
            "tipo": "aptidao",
            "nome": "Adaptar e Sobreviver (Adapt and Survive)"
        }
    ],
    "Remédio de Campo de Batalha (Battlefield Remedy)": [
        {
            "tipo": "pericia",
            "pericia": "primeiros"
        }
    ],
    "Guerreiro Calejado (Grizzled Warrior)": [
        {
            "tipo": "aptidao",
            "nome": "Já Vi de Tudo (Seen It All)"
        },
        {
            "tipo": "aptidao",
            "nome": "Testado em Batalha (Tested in Battle)"
        }
    ],
    "Imprudente (Reckless)": [
        {
            "tipo": "aptidao",
            "nome": "Testado em Batalha (Tested in Battle)"
        }
    ],
    "Já Vi de Tudo (Seen It All)": [
        {
            "tipo": "aptidao",
            "nome": "Testado em Batalha (Tested in Battle)"
        },
        {
            "tipo": "pericia",
            "pericia": "iniciativa"
        }
    ],
    "Golpe Desarmado Brutal (Brutal Unarmed Strike)": [
        {
            "tipo": "aptidao",
            "nome": "Golpe Telecinético (Telekinetic Strike)"
        }
    ],
    "Golpe Simultâneo (Simultaneous Strike)": [
        {
            "tipo": "bba",
            "min": 5
        }
    ],
    "Arremesso Telecinético (Telekinetic Throw)": [
        {
            "tipo": "talento",
            "nome": "Arremessar (Throw)"
        }
    ],
    "Oportunidade Simples (Simple Opportunity)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Simples"
        }
    ],
    "Ameaça Estendida (Extended Threat)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "@escolhido"
        }
    ],
    "Assalto Feroz (Ferocious Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Rajada Controlada (Controlled Burst)"
        },
        {
            "tipo": "bba",
            "min": 12
        }
    ],
    "Arremesso Dois por Um (Two-For-One Throw)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Armas Simples"
        }
    ],
    "Especialização em Arma (Weapon Specialization)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "@escolhido"
        }
    ],
    "Assalto com Fogo Automático (Autofire Assault)": [
        {
            "tipo": "talento",
            "nome": "Proficiência com Arma (Weapon Proficiency)",
            "detalhe": "Armas Pesadas"
        }
    ],
    "Assalto Esmagador (Crushing Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Especialização em Arma (Weapon Specialization)"
        }
    ],
    "Ataque Desarmante (Disarming Attack)": [
        {
            "tipo": "atributo",
            "attr": "INT",
            "min": 13
        },
        {
            "tipo": "talento",
            "nome": "Desarmar Aprimorado (Improved Disarm)"
        },
        {
            "tipo": "aptidao",
            "nome": "Especialização em Arma (Weapon Specialization)"
        }
    ],
    "Assalto Empalador (Impaling Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Especialização em Arma (Weapon Specialization)"
        }
    ],
    "Assalto Pungente (Stinging Assault)": [
        {
            "tipo": "aptidao",
            "nome": "Especialização em Arma (Weapon Specialization)"
        }
    ],
    "Imersão na Força (Force Immersion)": [
        {
            "tipo": "aptidao",
            "nome": "Adepto da Corrente Branca (White Current Adept)"
        },
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Imergir Outro (Immerse Another)": [
        {
            "tipo": "aptidao",
            "nome": "Adepto da Corrente Branca (White Current Adept)"
        },
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Fazer Bloqueio (Run Interference)": [
        {
            "tipo": "aptidao",
            "nome": "Piloto de Escolta (Escort Pilot)"
        }
    ],
    "Retribuição do Ala (Wingman Retribution)": [
        {
            "tipo": "aptidao",
            "nome": "Piloto de Escolta (Escort Pilot)"
        }
    ],
    "Arremesso Curvo (Curved Throw)": [
        {
            "tipo": "aptidao",
            "nome": "Picada de Inseto (Bugbite)"
        }
    ],
    "Biotecnologia Velada (Veiled Biotech)": [
        {
            "tipo": "pericia",
            "pericia": "furtividade"
        }
    ],
    "Arco da Lâmina-Disco (Discblade Arc)": [
        {
            "tipo": "texto",
            "texto": "Proficiência com Lâmina-Disco"
        }
    ],
    "Arremesso Distante de Lâmina-Disco (Distant Discblade Throw)": [
        {
            "tipo": "texto",
            "texto": "Proficiência com Lâmina-Disco"
        }
    ],
    "Chamar Lâmina-Disco (Recall Discblade)": [
        {
            "tipo": "texto",
            "texto": "Proficiência com Lâmina-Disco"
        }
    ],
    "Vigilância Telecinética (Telekinetic Vigilance)": [
        {
            "tipo": "poder",
            "nome": "Interceptar (Intercept)"
        }
    ],
    "Especialização em Arma (Lâmina-Disco) (Weapon Specialization (Discblade))": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Discblade"
        }
    ],
    "Especialização em Arma (sabres de luz)": [
        {
            "tipo": "talento",
            "nome": "Foco em Arma (Weapon Focus)",
            "detalhe": "Sabres de Luz"
        }
    ],
    "Presença Sombria": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio"
        },
        {
            "tipo": "atributo",
            "attr": "CAR",
            "min": 13
        }
    ],
    "Mestre do Lado Sombrio": [
        {
            "tipo": "aptidao",
            "nome": "Adepto do Lado Sombrio"
        }
    ],
    "Drenar Vida": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio"
        }
    ],
    "Transferência de Essência": [
        {
            "tipo": "texto",
            "texto": "Pontuação do Lado Sombrio igual ao modificador de Sabedoria"
        }
    ],
    "Poder Rápido": [
        {
            "tipo": "aptidao",
            "nome": "Poder do Lado Sombrio"
        }
    ],
    "Corrupção": [
        {
            "tipo": "aptidao",
            "nome": "Adepto do Lado Sombrio"
        }
    ]
};

// Aptidões que podem ser escolhidas mais de uma vez (valor = máximo)
const APTITUDE_REPEATABLE = {
    "Ocultar Outro (Conceal Other)": 20,
    "Sábio Telecinético (Telekinetic Savant)": 20,
    "Sábio da Influência (Influence Savant)": 20,
    "Item Característico (Signature Item)": 20,
    "Contato Próximo (Close Contact)": 20,
    "Proficiência em Ataques Múltiplos (Rifles) (Multiattack Proficiency (Rifles))": 20,
    "Demolidor (Demolitionist)": 20,
    "Indomável (Indomitable)": 20,
    "Esforço da Força (Force Exertion)": 20,
    "Ataque em Rajada (Flurry Attack)": 20,
    "Sábio do Lado Sombrio (Dark Side Savant)": 20,
    "Armadura de Sombras (Shadow Armor)": 20,
    "Proficiência em Ataques Múltiplos (Sabres de Luz) (Multiattack Proficiency (Lightsabers))": 20,
    "Sábio das Formas de Sabre de Luz (Lightsaber Form Savant)": 20,
    "Adepto de Poderes da Força (Force Power Adept)": 20,
    "Apostador (Gambler)": 20,
    "Jeito (Knack)": 20,
    "Tiro de Sorte (Lucky Shot)": 20,
    "Gambito de Assalto (Assault Gambit)": 20,
    "Proficiência em Ataques Múltiplos (Armas Exóticas) (Multiattack Proficiency (Exotic Weapons))": 20,
    "Proficiência em Ataques Múltiplos (Pistolas) (Multiattack Proficiency (Pistols))": 20,
    "Instrução (Instruction)": 20,
    "Fortalecer Aliado (Bolster Ally)": 20,
    "Compartilhar Aptidão (Share Talent)": 20,
    "Golpe da Sentinela (Sentinel Strike)": 20,
    "Coordenar (Coordinate)": 20,
    "Surto de Luz (Surge of Light)": 20,
    "Defesa com Sabre de Luz (Lightsaber Defense)": 3,
    "Perícia Espontânea (Spontaneous Skill)": 20,
    "Inspirar Lealdade (Inspire Loyalty)": 20,
    "Ferocidade Mandaloriana (Mandalorian Ferocity)": 20,
    "Atrair Lacaio (Attract Minion)": 20,
    "Defesa Wan-Shen (Wan-Shen Defense)": 20,
    "Proficiência em Ataques Múltiplos (Armas Brancas Avançadas) (Multiattack Proficiency (Advanced Melee Weapons))": 20,
    "Ataque Furtivo (Sneak Attack)": 20,
    "Atrair Corsário (Attract Privateer)": 20,
    "Percepção Aguçada (Heightened Awareness)": 20,
    "Especialista em Alquimia Sith (Sith Alchemy Specialist)": 20,
    "Forma Roubada (Stolen Form)": 20,
    "Oficial Comandante (Commanding Officer)": 20,
    "Perícia Garantida (Assured Skill)": 20,
    "Perícia Excepcional (Exceptional Skill)": 20,
    "Dádiva de Perícia (Skill Boon)": 20,
    "Confiança na Perícia (Skill Confidence)": 20,
    "Recuperação Habilidosa (Skillful Recovery)": 20,
    "Sequência de Golpes (Flurry of Blows)": 20,
    "Proficiência em Ataques Múltiplos (Armas Pesadas) (Multiattack Proficiency (Heavy Weapons))": 20,
    "Proficiência em Ataques Múltiplos (Armas Simples) (Multiattack Proficiency (Simple Weapons))": 20,
    "Fazer Bloqueio (Run Interference)": 20,
    "Defesa com Sabre de Luz": 3
};

// Aptidões que pedem complemento (qual grupo de armas)
const APTITUDE_DETAIL_OPTIONS = {
    "Especialização em Arma (Weapon Specialization)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Foco em Arma Maior (Greater Weapon Focus)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Especialização em Arma Maior (Greater Weapon Specialization)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Ataque Devastador (Devastating Attack)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Ataque Penetrante (Penetrating Attack)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Ataque Devastador Maior (Greater Devastating Attack)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Ataque Penetrante Maior (Greater Penetrating Attack)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ],
    "Ataque Brutal (Brutal Attack)": [
        "Armas Simples",
        "Pistolas",
        "Rifles",
        "Armas Pesadas",
        "Sabres de Luz",
        "Armas Brancas Avançadas",
        "Armas Exóticas"
    ]
};

// Técnicas da Força: pré-requisitos (as "Aprimoradas" exigem ter o Poder da Força correspondente)
const FORCE_TECHNIQUE_PREREQUISITES = {
    "Transe da Força Aprimorado (Improved Force Trance)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Mover Objeto Leve Aprimorado (Improved Move Light Object)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Sentir a Força Aprimorado (Improved Sense Force)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Sentir o Ambiente Aprimorado (Improved Sense Surroundings)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Telepatia Aprimorada (Improved Telepathy)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Dominar Mente (Dominate Mind)": [
        {
            "tipo": "poder",
            "nome": "Truque Mental (Mind Trick)"
        }
    ],
    "Resistência a Energia Aprimorada (Improved Energy Resistance)": [
        {
            "tipo": "poder",
            "nome": "Resistência a Energia (Energy Resistance)"
        }
    ],
    "Golpe da Força Aprimorado (Improved Force Slam)": [
        {
            "tipo": "poder",
            "nome": "Golpe da Força (Force Slam)"
        }
    ],
    "Atordoamento da Força Aprimorado (Improved Force Stun)": [
        {
            "tipo": "poder",
            "nome": "Atordoamento da Força (Force Stun)"
        }
    ],
    "Ionizar Aprimorado (Improved Ionize)": [
        {
            "tipo": "poder",
            "nome": "Ionizar (Ionize)"
        }
    ],
    "Combate Cinético Aprimorado (Improved Kinetic Combat)": [
        {
            "tipo": "poder",
            "nome": "Combate Cinético (Kinetic Combat)"
        }
    ],
    "Resistir à Força Aprimorado (Improved Resist Force)": [
        {
            "tipo": "poder",
            "nome": "Resistir à Força (Resist Force)"
        }
    ],
    "Valor Aprimorado (Improved Valor)": [
        {
            "tipo": "poder",
            "nome": "Valor (Valor)"
        }
    ],
    "Transferência Vital Aprimorada (Improved Vital Transfer)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Absorção de Idioma (Language Absorption)": [
        {
            "tipo": "pericia",
            "pericia": "usarForca"
        }
    ],
    "Golpe de Batalha Aprimorado (Improved Battle Strike)": [
        {
            "tipo": "poder",
            "nome": "Golpe de Batalha (Battle Strike)"
        }
    ],
    "Fúria Sombria Aprimorada (Improved Dark Rage)": [
        {
            "tipo": "poder",
            "nome": "Fúria Sombria (Dark Rage)"
        }
    ],
    "Desarmar pela Força Aprimorado (Improved Force Disarm)": [
        {
            "tipo": "poder",
            "nome": "Desarmar pela Força (Force Disarm)"
        }
    ],
    "Impulso da Força Aprimorado (Improved Force Thrust)": [
        {
            "tipo": "poder",
            "nome": "Impulso da Força (Force Thrust)"
        }
    ],
    "Pressão da Força Aprimorada (Improved Force Grip)": [
        {
            "tipo": "poder",
            "nome": "Pressão da Força (Force Grip)"
        }
    ],
    "Relâmpago da Força Aprimorado (Improved Force Lightning)": [
        {
            "tipo": "texto",
            "texto": "Poder da Força Relâmpago da Força"
        }
    ],
    "Truque Mental Aprimorado (Improved Mind Trick)": [
        {
            "tipo": "poder",
            "nome": "Truque Mental (Mind Trick)"
        }
    ],
    "Refutar Aprimorado (Improved Rebuke)": [
        {
            "tipo": "poder",
            "nome": "Refutar (Rebuke)"
        }
    ],
    "Repulsa Aprimorada (Improved Repulse)": [
        {
            "tipo": "poder",
            "nome": "Repulsa (Repulse)"
        }
    ],
    "Transferência Vital Avançada (Advanced Vital Transfer)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Camuflagem Aprimorada (Improved Cloak)": [
        {
            "tipo": "poder",
            "nome": "Camuflagem (Cloak)"
        }
    ],
    "Levitar Aprimorado (Improved Levitate)": [
        {
            "tipo": "texto",
            "texto": "Poder da Força Levitar"
        }
    ],
    "Malacia Aprimorada (Improved Malacia)": [
        {
            "tipo": "poder",
            "nome": "Malacia (Malacia)"
        }
    ],
    "Fase Aprimorada (Improved Phase)": [
        {
            "tipo": "poder",
            "nome": "Fase (Phase)"
        }
    ],
    "Dilacerar Aprimorado (Improved Rend)": [
        {
            "tipo": "poder",
            "nome": "Dilacerar (Rend)"
        }
    ],
    "Ponto de Ruptura Aprimorado (Improved Shatterpoint)": [
        {
            "tipo": "poder",
            "nome": "Ponto de Ruptura (Shatterpoint)"
        }
    ],
    "Tecnometria Aprimorada (Improved Technometry)": [
        {
            "tipo": "poder",
            "nome": "Tecnometria (Technometry)"
        }
    ],
    "Desintoxicar Veneno (Detoxify Poison)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Balistocinese Aprimorada (Improved Ballistakinesis)": [
        {
            "tipo": "poder",
            "nome": "Balistocinese (Ballistakinesis)"
        }
    ],
    "Transferência Sombria Aprimorada (Improved Dark Transfer)": [
        {
            "tipo": "poder",
            "nome": "Transferência Sombria (Dark Transfer)"
        }
    ],
    "Detonar Aprimorado (Improved Detonate)": [
        {
            "tipo": "poder",
            "nome": "Detonar (Detonate)"
        }
    ],
    "Iluminar Aliado Aprimorado (Improved Enlighten)": [
        {
            "tipo": "poder",
            "nome": "Iluminar Aliado (Enlighten)"
        }
    ],
    "Explosão de Relâmpago Aprimorada (Improved Lightning Burst)": [
        {
            "tipo": "poder",
            "nome": "Explosão de Relâmpago (Lightning Burst)"
        }
    ],
    "Obscurecer Aprimorado (Improved Obscure)": [
        {
            "tipo": "poder",
            "nome": "Obscurecer (Obscure)"
        }
    ],
    "Escudo da Força Aprimorado (Improved Force Shield)": [
        {
            "tipo": "poder",
            "nome": "Escudo da Força (Force Shield)"
        }
    ],
    "Cambalear Aprimorado (Improved Stagger)": [
        {
            "tipo": "poder",
            "nome": "Cambalear (Stagger)"
        }
    ],
    "Curar Doença (Cure Disease)": [
        {
            "tipo": "poder",
            "nome": "Transferência Vital (Vital Transfer)"
        }
    ],
    "Cegueira Estendida (Extended Blind)": [
        {
            "tipo": "poder",
            "nome": "Cegueira (Blind)"
        }
    ],
    "Desarmar pela Força Estendido (Extended Force Disarm)": [
        {
            "tipo": "poder",
            "nome": "Desarmar pela Força (Force Disarm)"
        }
    ],
    "Pressão da Força Estendida (Extended Force Grip)": [
        {
            "tipo": "poder",
            "nome": "Pressão da Força (Force Grip)"
        }
    ],
    "Impulso da Força Estendido (Extended Force Thrust)": [
        {
            "tipo": "poder",
            "nome": "Impulso da Força (Force Thrust)"
        }
    ],
    "Mover Objeto Estendido (Extended Move Object)": [
        {
            "tipo": "poder",
            "nome": "Mover Objeto (Move Object)"
        }
    ],
    "Convecção Aprimorada (Improved Convection)": [
        {
            "tipo": "poder",
            "nome": "Convecção (Convection)"
        }
    ],
    "Crucitorn Aprimorado (Improved Crucitorn)": [
        {
            "tipo": "poder",
            "nome": "Crucitorn (Crucitorn)"
        }
    ],
    "Crioquinese Aprimorada (Improved Cryokinesis)": [
        {
            "tipo": "poder",
            "nome": "Crioquinese (Cryokinesis)"
        }
    ],
    "Dobrar o Espaço Aprimorado (Improved Fold Space)": [
        {
            "tipo": "poder",
            "nome": "Dobrar o Espaço (Fold Space)"
        }
    ],
    "Iluminar Aprimorado (Improved Force Light)": [
        {
            "tipo": "poder",
            "nome": "Iluminar (Force Light)"
        }
    ],
    "Tempestade da Força Aprimorada (Improved Force Storm)": [
        {
            "tipo": "poder",
            "nome": "Tempestade da Força (Force Storm)"
        }
    ],
    "Surgimento de Plantas Aprimorado (Improved Plant Surge)": [
        {
            "tipo": "poder",
            "nome": "Surgimento de Plantas (Plant Surge)"
        }
    ],
    "Bomba de Pensamento Aprimorada (Improved Thought Bomb)": [
        {
            "tipo": "poder",
            "nome": "Bomba de Pensamento (Thought Bomb)"
        }
    ]
};
