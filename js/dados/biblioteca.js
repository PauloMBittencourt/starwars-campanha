const LIBRARY_DATA = {
    forcePowers: {
        label: 'Poderes da Força',
        items: [
            'Agressão Temperada (Tempered Aggression)',
            'Aproximar (Draw Closer)',
            'Atordoamento da Força (Force Stun)',
            'Avalanche Cadente (Falling Avalanche)',
            'Balistocinese (Ballistakinesis)',
            'Barreira de Lâminas (Barrier of Blades)',
            'Bloqueio Desequilibrante (Unbalancing Block)',
            'Bomba de Pensamento (Thought Bomb)',
            'Cambalear (Stagger)',
            'Camuflagem (Cloak)',
            'Carga Desimpedida (Unhindered Charge)',
            'Cegueira (Blind)',
            'Círculo de Proteção (Circle of Shelter)',
            'Combate Cinético (Kinetic Combat)',
            'Combustão (Combustion)',
            'Convecção (Convection)',
            'Corrupção (Corruption)',
            'Cortar a Força (Sever Force)',
            'Crioquinese (Cryokinesis)',
            'Crucitorn (Crucitorn)',
            'Defesa de Terreno Elevado (High Ground Defense)',
            'Deflexão Shien (Shien Deflection)',
            'Desarmar pela Força (Force Disarm)',
            'Detonar (Detonate)',
            'Dilacerar (Rend)',
            'Dobrar o Espaço (Fold Space)',
            'Drenar Energia (Drain Energy)',
            'Dreno de Vida (Force Drain)',
            'Enxame de Sabres (Saber Swarm)',
            'Escudo da Força (Force Shield)',
            'Estilhaço Mental (Mind Shard)',
            'Explosão da Força (Force Blast)',
            'Explosão de Relâmpago (Lightning Burst)',
            'Fase (Phase)',
            'Ferida (Wound)',
            'Ferocidade do Vornskr (Vornskr\'s Ferocity)',
            'Flanco Rápido (Swift Flank)',
            'Fúria Sombria (Dark Rage)',
            'Golpe da Força (Force Slam)',
            'Golpe de Batalha (Battle Strike)',
            'Golpe Desarmador (Disarming Slash)',
            'Golpe Duplo (Twin Strike)',
            'Golpe Garantido (Assured Strike)',
            'Golpe Revelador (Deflecting Slash)',
            'Grito da Força (Force Scream)',
            'Iluminar (Force Light)',
            'Iluminar Aliado (Enlighten)',
            'Ilusão da Força (Force Illusion)',
            'Impulso (Surge)',
            'Impulso da Força (Force Thrust)',
            'Inércia (Inertia)',
            'Inspirar (Inspire)',
            'Interceptar (Intercept)',
            'Ionizar (Ionize)',
            'Lentidão (Slow)',
            'Malacia (Malacia)',
            'Meditação de Batalha (Battle Meditation)',
            'Medo (Fear)',
            'Morichro (Morichro)',
            'Mover Objeto (Move Object)',
            'Negar Energia (Negate Energy)',
            'Obscurecer (Obscure)',
            'Ódio (Hatred)',
            'Oportunidade Contenciosa (Contentious Opportunity)',
            'Passar a Lâmina (Pass the Blade)',
            'Ponto de Ruptura (Shatterpoint)',
            'Presciência (Prescience)',
            'Pressão da Força (Force Grip)',
            'Projeção da Força (Force Projection)',
            'Rastrear pela Força (Force Track)',
            'Redemoinho Ascendente (Rising Whirlwind)',
            'Redemoinho da Força (Force Whirlwind)',
            'Refutar (Rebuke)',
            'Reorganização (Rearrangement)',
            'Repulsa (Repulse)',
            'Resistência a Energia (Energy Resistance)',
            'Resistir à Força (Resist Force)',
            'Riposte Fluido (Fluid Riposte)',
            'Riposte Makashi (Makashi Riposte)',
            'Surgimento de Plantas (Plant Surge)',
            'Tecnometria (Technometry)',
            'Tempestade da Força (Force Storm)',
            'Transferência de Essência (Essence Transfer)',
            'Transferência Sombria (Dark Transfer)',
            'Transferência Vital (Vital Transfer)',
            'Truque Mental (Mind Trick)',
            'Valor (Valor)',
            'Varredura Sarlacc (Sarlacc Sweep)',
            'Visão Distante (Farseeing)',
            'Voo do Hawk-bat (Hawk-Bat Swoop)'
        ]
    },
    aptitudes: {
        label: 'Aptidões',
        trees: [
            {
                name: 'Árvore de Aptidões do Guerreiro Sith',
                items: [
                    'Bloquear',
                    'Defletir',
                    'Defesa com Sabre de Luz',
                    'Especialização em Arma (sabres de luz)',
                    'Fúria Sombria',
                    'Presença Sombria'
                ]
            },
            {
                name: 'Árvore de Aptidões do Inquisidor Sith',
                items: [
                    'Adepto do Lado Sombrio',
                    'Drenar Vida',
                    'Enganação da Força',
                    'Mestre do Lado Sombrio',
                    'Poder do Lado Sombrio'
                ]
            },
            {
                name: 'Árvore de Aptidões do Lorde Sith',
                items: [
                    'Alquimia Sith',
                    'Corrupção',
                    'Poder Rápido',
                    'Transferência de Essência',
                    'Vingança'
                ]
            },
            {
                name: 'Árvore de Aptidões: Adepto da Corrente Branca (White Current Adept)',
                items: [
                    'Imersão na Força (Force Immersion)',
                    'Imergir Outro (Immerse Another)',
                    'Seguir a Corrente (Ride the Current)',
                    'Render-se à Corrente (Surrender to the Current)',
                    'Adepto da Corrente Branca (White Current Adept)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Adepto da Força (Force Adept)',
                items: [
                    'Adepto de Poderes da Força (Force Power Adept)',
                    'Tratamento pela Força (Force Treatment)',
                    'Corpo Fortificado (Fortified Body)',
                    'Instrumento da Força (Instrument of the Force)',
                    'Chamado Distante (Long Call)',
                    'Elo Místico (Mystical Link)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Adepto Korunnai (Korunnai Adept)',
                items: [
                    'Mestre de Cães Akk (Akk Dog Master)',
                    'Ações do Treinador de Cães Akk (Akk Dog Trainer\'s Actions)',
                    'Treinamento de Ataque de Cães Akk (Akk Dog Attack Training)',
                    'Reação Protetora (Protective Reaction)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Adepto Matukai (Matukai Adept)',
                items: [
                    'Controle Corporal (Body Control)',
                    'Surto Físico (Physical Surge)',
                    'De Macio a Sólido (Soft to Solid)',
                    'Defesa Wan-Shen (Wan-Shen Defense)',
                    'Kata Wan-Shen (Wan-Shen Kata)',
                    'Maestria Wan-Shen (Wan-Shen Mastery)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Adepto Tyia (Tyia Adept)',
                items: [
                    'Ciclo da Harmonia (Cycle of Harmony)',
                    'Estabilizar pela Força (Force Stabilize)',
                    'Repelir a Discórdia (Repel Discord)',
                    'Sufocar o Conflito (Stifle Conflict)',
                    'Adepto Tyia (Tyia Adept)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Agente de Ossus (Agent of Ossus)',
                items: [
                    'Presença Enterrada (Buried Presence)',
                    'Ocultar Outro (Conceal Other)',
                    'Mira Perspicaz (Insightful Aim)',
                    'Desaparecer (Vanish)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Ala (Wingman)',
                items: [
                    'Concentrar Todo o Fogo (Concentrate All Fire)',
                    'Piloto de Escolta (Escort Pilot)',
                    'Despistar Perseguidores (Lose Pursuit)',
                    'Fazer Bloqueio (Run Interference)',
                    'Retribuição do Ala (Wingman Retribution)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Alquimia Sith (Sith Alchemy)',
                items: [
                    'Causar Mutação (Cause Mutation)',
                    'Alquimia Rápida (Rapid Alchemy)',
                    'Alquimia Sith (Sith Alchemy)',
                    'Especialista em Alquimia Sith (Sith Alchemy Specialist)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Alterar (Alter)',
                items: [
                    'Golpe Disciplinado (Disciplined Strike)',
                    'Poder Telecinético (Telekinetic Power)',
                    'Sábio Telecinético (Telekinetic Savant)',
                    'Aversão (Aversion)',
                    'Fluxo da Força (Force Flow)',
                    'Ilusão (Illusion)',
                    'Vínculo Ilusório (Illusion Bond)',
                    'Sábio da Influência (Influence Savant)',
                    'Elo (Link)',
                    'Mascarada (Masquerade)',
                    'Mover Objeto Massivo (Move Massive Object)',
                    'Suprimir a Força (Suppress Force)',
                    'Prodígio Telecinético (Telekinetic Prodigy)',
                    'Influência Telepática (Telepathic Influence)',
                    'Elo Telepático (Telepathic Link)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Antecipação (Anticipation)',
                items: [
                    'Antecipar Movimento (Anticipate Movement)',
                    'Alertar Aliados (Forewarn Allies)',
                    'Abaixem-se (Get Down)',
                    'Zona de Fogo Pesado (Heavy Fire Zone)',
                    'Convocar Ajuda (Summon Aid)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Aplicação da Lei (Enforcement)',
                items: [
                    'Apoio na Cobertura (Cover Bracing)',
                    'Colisão Intencional (Intentional Crash)',
                    'Táticas Não Letais (Nonlethal Tactics)',
                    'Perseguição (Pursuit)',
                    'Oficial Respeitado (Respected Officer)',
                    'Atordoamento Retardante (Slowing Stun)',
                    'Imobilização (Takedown)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Aquisição (Procurement)',
                items: [
                    'Comprador do Mercado Negro (Black Market Buyer)',
                    'Equipamento Excelente (Excellent Kit)',
                    'Exatamente o que Precisa (Just What is Needed)',
                    'Só o Melhor (Only the Finest)',
                    'Equipamento Certo para o Trabalho (Right Gear for the Job)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Armadura do Cavaleiro (Knight\'s Armor)',
                items: [
                    'Aprimoramento Blindado I (Armored Augmentation I)',
                    'Aprimoramento Blindado II (Armored Augmentation II)',
                    'Maestria em Armadura (Armor Mastery)',
                    'Defesa de Cortosis (Cortosis Defense)',
                    'Retaliação de Cortosis (Cortosis Retaliation)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Arquivista Jedi (Jedi Archivist)',
                items: [
                    'Direcionar (Direct)',
                    'Transmitir Conhecimento (Impart Knowledge)',
                    'Discernimento da Força (Insight of the Force)',
                    'Mestre Conselheiro (Master Advisor)',
                    'Conhecimento Erudito (Scholarly Knowledge)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Artesão Jedi (Jedi Artisan)',
                items: [
                    'Chamar Arma (Call Weapon)',
                    'Especialista em Sabre de Luz (Lightsaber Specialist)',
                    'Sabre de Luz Obra-Prima (Masterwork Lightsaber)',
                    'Sintonia Perfeita (Perfect Attunement)',
                    'Modificação Rápida (Quick Modification)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Artilheiro (Gunner)',
                items: [
                    'Artilheiro de Combate Aéreo (Dogfight Gunner)',
                    'Artilheiro Especialista (Expert Gunner)',
                    'Gatilho Rápido (Quick Trigger)',
                    'Tiro no Sistema (System Hit)',
                    'Tiro Incapacitante (Crippling Hit)',
                    'Especialista em Ataque Rápido (Fast Attack Specialist)',
                    'Grande Tiro (Great Shot)',
                    'Tiro Sobrecarregado (Overcharged Shot)',
                    'Fogo Sincronizado (Synchronized Fire)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Assassino (Assassin)',
                items: [
                    'Posicionamento Vantajoso (Advantageous Positioning)',
                    'Ganhar Distância (Get Some Distance)',
                    'Artes Assassinas I (Murderous Arts I)',
                    'Artes Assassinas II (Murderous Arts II)',
                    'Implacável (Ruthless)',
                    'Deslocar (Shift)',
                    'Assassino Atirador (Sniping Assassin)',
                    'Franco-Atirador Certeiro (Sniping Marksman)',
                    'Mestre Franco-Atirador (Sniping Master)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Atirador de Elite (Sharpshooter)',
                items: [
                    'Tiro de Precisão (Precision Shot)',
                    'Na Mosca (Bullseye)',
                    'Fazer Mira (Draw a Bead)',
                    'Tiro Imobilizador (Pinning Shot)',
                    'Tiro Perturbador (Harrying Shot)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Autonomia (Autonomy)',
                items: [
                    'Eletrônica Defensiva (Defensive Electronics)',
                    'Resistência a Íons 10 (Ion Resistance 10)',
                    'Reinicialização Suave (Soft Reset)',
                    'Especialista em Modificações (Modification Specialist)',
                    'Autorreparo (Repair Self)',
                    'Só um Droide (Just a Droid)',
                    'Droide Veloz (Swift Droid)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Bandoleiro (Brigand)',
                items: [
                    'Truque Baixo (Cheap Trick)',
                    'Presa Fácil (Easy Prey)',
                    'Golpe Ligeiro (Quick Strike)',
                    'Combatente Astuto (Sly Combatant)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Batedor Mestre (Master Scout)',
                items: [
                    'Golpe Perfurante (Piercing Hit)',
                    'Armadilha Rápida (Quicktrap)',
                    'Escalador Veloz (Speedclimber)',
                    'Surpreendentemente Rápido (Surprisingly Quick)',
                    'Fio de Armadilha (Tripwire)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Batedor Móvel (Mobile Scout)',
                items: [
                    'Montaria de Batalha (Battle Mount)',
                    'Cavaleiro Especialista (Expert Rider)',
                    'Piloto Mecanizado (Mechanized Rider)',
                    'Orientação no Terreno (Terrain Guidance)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Biotecnologia Yuuzhan Vong (Yuuzhan Vong Biotech)',
                items: [
                    'Adepto da Biotecnologia (Biotech Adept)',
                    'Picada de Inseto (Bugbite)',
                    'Arremesso Curvo (Curved Throw)',
                    'Armas Surpreendentes (Surprising Weapons)',
                    'Biotecnologia Velada (Veiled Biotech)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Brasa de Vahl (Ember of Vahl)',
                items: [
                    'Iniciado de Vahl (Initiate of Vahl)',
                    'Ler a Chama (Reading the Flame)',
                    'Espada de Vahl (Sword of Vahl)',
                    'Marca de Vahl (Vahl\'s Brand)',
                    'Chama de Vahl (Vahl\'s Flame)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Brigão (Brawler)',
                items: [
                    'Agarrador Especialista (Expert Grappler)',
                    'Coronhada (Gun Club)',
                    'Golpe Esmagador (Melee Smash)',
                    'Golpe Atordoante (Stunning Strike)',
                    'Desequilibrar Oponente (Unbalance Opponent)',
                    'Mestre da Baioneta (Bayonet Master)',
                    'Brigão de Cantina (Cantina Brawler)',
                    'Contragolpe (Counterpunch)',
                    'Controle de Multidão (Crowd Control)',
                    'Golpe Esmagador Devastador (Devastating Melee Smash)',
                    'Desarmar e Atacar (Disarm and Engage)',
                    'Enredador (Entangler)',
                    'Brigão Experiente (Experienced Brawler)',
                    'Agarrador (Grabber)',
                    'Golpe de Martelo (Hammerblow)',
                    'Dar um Jeito (Make Do)',
                    'Homem Caído (Man Down)',
                    'Arrumar Briga (Pick a Fight)',
                    'Força Invertida (Reverse Strength)',
                    'Agarrão Forte (Strong Grab)',
                    'Soco Traiçoeiro (Sucker Punch)',
                    'Assalto Implacável (Unrelenting Assault)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Bruxa de Dathomir (Dathomiri Witch)',
                items: [
                    'Conjuradora Adepta (Adept Spellcaster)',
                    'Encantar Fera (Charm Beast)',
                    'Comandar Fera (Command Beast)',
                    'Voo (Flight)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Caçador da Força (Force Hunter)',
                items: [
                    'Vazio na Força (Force Blank)',
                    'Evasão de Sabre de Luz (Lightsaber Evasion)',
                    'Fogo de Precisão (Precision Fire)',
                    'Mente de Aço (Steel Mind)',
                    'Obstinado (Strong-Willed)',
                    'Resistência Telecinética (Telekinetic Resistance)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Caçador de Recompensas (Bounty Hunter)',
                items: [
                    'Marca do Caçador (Hunter\'s Mark)',
                    'Alvo do Caçador (Hunter\'s Target)',
                    'Notório (Notorious)',
                    'Sem Onde se Esconder (Nowhere to Hide)',
                    'Incansável (Relentless)',
                    'Negociador Implacável (Ruthless Negotiator)',
                    'Detetive (Detective)',
                    'Pavor (Dread)',
                    'Rastro Eletrônico (Electronic Trail)',
                    'Inimigos Conhecidos (Familiar Enemies)',
                    'Situação Conhecida (Familiar Situation)',
                    'Temível (Fearsome)',
                    'Caçador de Jedi (Jedi Hunter)',
                    'Sem Para Onde Fugir (Nowhere to Run)',
                    'Algemas Rápidas (Quick Cuffs)',
                    'Revelando Segredos (Revealing Secrets)',
                    'Item Característico (Signature Item)',
                    'Marcar (Tag)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Camuflagem (Camouflage)',
                items: [
                    'Movimento Oculto (Hidden Movement)',
                    'Furtividade Aprimorada (Improved Stealth)',
                    'Camuflagem Total (Total Concealment)',
                    'Entrincheirar-se (Dig In)',
                    'Emboscada Prolongada (Extended Ambush)',
                    'Agressor Fantasma (Ghost Assailant)',
                    'Esconder-se à Vista (Hide in Plain Sight)',
                    'Abrigar-se (Hunker Down)',
                    'Atacante das Sombras (Shadow Striker)',
                    'Passar Despercebido (Slip By)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Capitão Bando Gora (Bando Gora Captain)',
                items: [
                    'Surto Bando Gora (Bando Gora Surge)',
                    'Lutador da Força (Force Fighter)',
                    'Resistir ao Esgotamento (Resist Enervation)',
                    'Maestria Vitoriosa da Força (Victorious Force Mastery)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Carabineiro (Carbineer)',
                items: [
                    'Rebote (Blowback)',
                    'Contato Próximo (Close Contact)',
                    'Proficiência em Ataques Múltiplos (Rifles) (Multiattack Proficiency (Rifles))',
                    'Velho Companheiro (Old Faithful)',
                    'Fogo Oportuno (Opportunity Fire)',
                    'Mestre do Rifle (Rifle Master)',
                    'Atirar da Cintura (Shoot from the Hip)',
                    'Tiro Instantâneo (Snap Shot)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Cavaleiro de Ferro (Iron Knight)',
                items: [
                    'Duelista Droide (Droid Duelist)',
                    'Reparo pela Força (Force Repair)',
                    'Curar Droide (Heal Droid)',
                    'Mascarar Presença (Mask Presence)',
                    'Mente de Silício (Silicon Mind)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Colaborador (Collaborator)',
                items: [
                    'Agente Duplo (Double Agent)',
                    'Táticas Inimigas (Enemy Tactics)',
                    'Repassar Informações (Feed Information)',
                    'Fogo Amigo (Friendly Fire)',
                    'Proteção (Protection)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Comandante Droide (Droid Commander)',
                items: [
                    'Golpe Automatizado (Automated Strike)',
                    'Defesa Droide (Droid Defense)',
                    'Coragem Droide (Droid Mettle)',
                    'Sensores Expandidos (Expanded Sensors)',
                    'Inspirar Competência (Inspire Competence)',
                    'Manter o Foco (Maintain Focus)',
                    'Tropas Sobrecarregadas (Overclocked Troops)',
                    'Reforçar Comandos (Reinforce Commands)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Comandante Fugitivo (Fugitive Commander)',
                items: [
                    'Trapaça Disciplinada (Disciplined Trickery)',
                    'Percepção de Grupo (Group Perception)',
                    'Retirada Apressada (Hasty Withdrawal)',
                    'Subordinados Leais (Stalwart Subordinates)',
                    'Continuar na Luta (Stay in the Fight)',
                    'Retirada Furtiva (Stealthy Withdrawal)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Comandante Sith (Sith Commander)',
                items: [
                    'Medidas Desesperadas (Desperate Measures)',
                    'Focar o Terror (Focus Terror)',
                    'Incitar Fúria (Incite Rage)',
                    'Poder do Ódio (Power of Hatred)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Comando (Commando)',
                items: [
                    'Análise de Batalha (Battle Analysis)',
                    'Fogo de Cobertura (Cover Fire)',
                    'Demolidor (Demolitionist)',
                    'Atrair Fogo (Draw Fire)',
                    'Na Linha de Fogo (Harm\'s Way)',
                    'Indomável (Indomitable)',
                    'Duro na Queda (Tough as Nails)',
                    'Esforço Coordenado (Coordinated Effort)',
                    'Guardião Dedicado (Dedicated Guardian)',
                    'Protetor Dedicado (Dedicated Protector)',
                    'Posição Defensiva (Defensive Position)',
                    'Alvo Difícil (Hard Target)',
                    'Mantê-los à Distância (Keep Them at Bay)',
                    'Fora de Perigo (Out of Harm\'s Way)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Comando Republicano (Republic Commando)',
                items: [
                    'Emboscada (Ambush)',
                    'Maior Potência (Higher Yield)',
                    'Recarga Rápida (Rapid Reload)',
                    'Ombro a Ombro (Shoulder to Shoulder)',
                    'Força nos Números (Strength in Numbers)',
                    'Troca de Arma (Weapon Shift)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Combate com Sabre de Luz (Lightsaber Combat)',
                items: [
                    'Bloquear (Block)',
                    'Defletir (Deflect)',
                    'Defesa com Sabre de Luz (Lightsaber Defense)',
                    'Especialização em Arma (Sabres de Luz) (Weapon Specialization (Lightsabers))',
                    'Arremesso de Sabre de Luz (Lightsaber Throw)',
                    'Redirecionar Disparo (Redirect Shot)',
                    'Bloqueio com Manopla de Cortosis (Cortosis Gauntlet Block)',
                    'Redirecionamento Preciso (Precise Redirect)',
                    'Precisão (Precision)',
                    'Riposte (Riposte)',
                    'Foco no Shoto (Shoto Focus)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Combate Gladiatorial (Gladiatorial Combat)',
                items: [
                    'Ataque Brutal (Brutal Attack)',
                    'Desafiar (Call Out)',
                    'Ataque Distrativo (Distracting Attack)',
                    'Mestre de Armas Exóticas (Exotic Weapons Master)',
                    'Golpe de Contenção (Lockdown Strike)',
                    'Proficiência em Ataques Múltiplos (Armas Exóticas) (Multiattack Proficiency (Exotic Weapons))',
                    'Vingança Pessoal (Personal Vendetta)',
                    'Imparável (Unstoppable)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Consular Jedi (Jedi Consular)',
                items: [
                    'Negociador Hábil (Adept Negotiator)',
                    'Persuasão da Força (Force Persuasion)',
                    'Mestre Negociador (Master Negotiator)',
                    'Conselheiro Habilidoso (Skilled Advisor)',
                    'Conhecimento do Adversário (Adversary Lore)',
                    'Negociador Agressivo (Aggressive Negotiator)',
                    'Purificar a Mente (Cleanse Mind)',
                    'Visões Coletivas (Collective Visions)',
                    'Vitalidade do Consular (Consular\'s Vitality)',
                    'Sabedoria do Consular (Consular\'s Wisdom)',
                    'Suplicar Ajuda (Entreat Aid)',
                    'Poder da Vontade (Force of Will)',
                    'Golpes Guiados (Guiding Strikes)',
                    'Vitalidade do Consular Aprimorada (Improved Consular\'s Vitality)',
                    'Conhecer a Fraqueza (Know Weakness)',
                    'Recordar (Recall)',
                    'Renovar Visão (Renew Vision)',
                    'Ataque Visionário (Visionary Attack)',
                    'Defesa Visionária (Visionary Defense)',
                    'Iniciado do WatchCircle (WatchCircle Initiate)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Contrabando (Smuggling)',
                items: [
                    'Arte da Ocultação (Art of Concealment)',
                    'Lábia (Fast Talker)',
                    'Armas Escondidas (Hidden Weapons)',
                    'Negócios Ilícitos (Illicit Dealings)',
                    'Golpe Surpresa (Surprise Strike)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Controle (Control)',
                items: [
                    'Redução de Dano 10 (Damage Reduction 10)',
                    'Equilíbrio (Equilibrium)',
                    'Foco da Força (Force Focus)',
                    'Recuperação da Força (Force Recovery)',
                    'Truque com Feras (Beast Trick)',
                    'Canalizar Energia (Channel Energy)',
                    'Esforço da Força (Force Exertion)',
                    'Harmonia da Força (Force Harmony)',
                    'Supressão da Força (Force Suppression)',
                    'Vontade Indomável (Indomitable Will)',
                    'A Vontade de Resistir (The Will to Resist)',
                    'Estabilidade Telecinética (Telekinetic Stability)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Corrente Flamejante (Blazing Chain)',
                items: [
                    'Tiro Guiado pela Força (Force Directed Shot)',
                    'Negar e Redirecionar (Negate and Redirect)',
                    'Raiva Crescente (Rising Anger)',
                    'Pânico Crescente (Rising Panic)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Correr e Atirar (Run and Gun)',
                items: [
                    'Golpe Baixo (Cheap Shot)',
                    'Sem Escapatória (No Escape)',
                    'Golpe Oportunista (Opportunistic Strike)',
                    'Golpe Escorregadio (Slippery Strike)',
                    'Golpear e Correr (Strike and Run)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Corsário Mestre (Master Privateer)',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Curandeiro Jedi (Jedi Healer)',
                items: [
                    'Tratamento pela Força (Force Treatment)',
                    'Reforço de Cura (Healing Boost)',
                    'Reforço de Cura Aprimorado (Improved Healing Boost)',
                    'Acalmar (Soothe)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Defensor Jensaarai (Jensaarai Defender)',
                items: [
                    'Sintonizar Armadura (Attune Armor)',
                    'Manto da Força (Force Cloak)',
                    'Maestria no Manto da Força (Force Cloak Mastery)',
                    'Defesa Vinculada (Linked Defense)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Dervixe Seyugi (Seyugi Dervish)',
                items: [
                    'Ciclone Seyugi (Seyugi Cyclone)',
                    'Redemoinho Móvel (Mobile Whirlwind)',
                    'Redemoinho Repulsor (Repelling Whirlwind)',
                    'Tempestade Súbita (Sudden Storm)',
                    'Levado pela Tempestade (Tempest Tossed)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Desafio de Perícia (Skill Challenge)',
                items: [
                    'Dádiva Garantida (Guaranteed Boon)',
                    'Perícia de Liderança (Leading Skill)',
                    'Aprender com os Erros (Learn from Mistakes)',
                    'Tentar a Sorte (Try Your Luck)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Desbravador (Pathfinder)',
                items: [
                    'Destruidor de Bunker (Bunker Buster)',
                    'Medidas Defensivas (Defensive Measures)',
                    'Melhorar Cobertura (Enhance Cover)',
                    'Caça de Escolta (Escort Fighter)',
                    'Ponto de Lançamento (Launch Point)',
                    'Defesas Ocultantes (Obscuring Defenses)',
                    'Realocar (Relocate)',
                    'Passagem Segura (Safe Passage)',
                    'Zona Segura (Safe Zone)',
                    'Zona de Recuperação (Zone of Recuperation)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Desgraça (Disgrace)',
                items: [
                    'Emboscada (Ambush)',
                    'Repreender (Castigate)',
                    'Táticas Sujas (Dirty Tactics)',
                    'Lealdade Equivocada (Misplaced Loyalty)',
                    'Duas Caras (Two-Faced)',
                    'Indecifrável (Unreadable)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Determinação do Cavaleiro (Knight\'s Resolve)',
                items: [
                    'Moral do Cavaleiro (Knight\'s Morale)',
                    'Juramento do Dever (Oath of Duty)',
                    'Praetoria Ishu (Praetoria Ishu)',
                    'Praetoria Vonil (Praetoria Vonil)',
                    'Força do Império (Strength of the Empire)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Devoto do Lado Sombrio (Dark Side Devotee)',
                items: [
                    'Canalizar Agressão (Channel Aggression)',
                    'Canalizar Raiva (Channel Anger)',
                    'Golpe Aleijador (Crippling Strike)',
                    'Abraçar o Lado Sombrio (Embrace the Dark Side)',
                    'Talismã do Lado Sombrio (Dark Side Talisman)',
                    'Talismã do Lado Sombrio Maior (Greater Dark Side Talisman)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Discípulo Crente (Believer Disciple)',
                items: [
                    'Intuição do Crente (Believer Intuition)',
                    'Reforço de Defesa (Defense Boost)',
                    'Vigor (Hardiness)',
                    'Alto Impacto (High Impact)',
                    'Reverência Sith (Sith Reverence)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Discípulo do Crepúsculo (Disciple of Twilight)',
                items: [
                    'Manto de Sombras (Cloak of Shadows)',
                    'Fantasma (Phantasm)',
                    'Revelação (Revelation)',
                    'Armadura de Sombras (Shadow Armor)',
                    'Visão das Sombras (Shadow Vision)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Droide Especializado (Specialized Droid)',
                items: [
                    'Linguagem de Computador (Computer Language)',
                    'Mestre dos Computadores (Computer Master)',
                    'Manipulação Aprimorada (Enhanced Manipulation)',
                    'Processador Adulterado (Hotwired Processor)',
                    'Pico de Energia (Power Surge)',
                    'Conversão de Perícia (Skill Conversion)',
                    'Reforço de Energia (Power Boost)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Duelista (Duelist)',
                items: [
                    'Fortificação da Força (Force Fortification)',
                    'Foco em Arma Maior (Sabres de Luz) (Greater Weapon Focus (Lightsabers))',
                    'Especialização em Arma Maior (Sabres de Luz) (Greater Weapon Specialization (Lightsabers))',
                    'Proficiência em Ataques Múltiplos (Sabres de Luz) (Multiattack Proficiency (Lightsabers))',
                    'Golpe Decepador (Severing Strike)',
                    'Arremesso de Sabre de Luz Aprimorado (Improved Lightsaber Throw)',
                    'Riposte Aprimorado (Improved Riposte)',
                    'Redirecionamento Aprimorado (Improved Redirect)',
                    'Sábio das Formas de Sabre de Luz (Lightsaber Form Savant)',
                    'Maestria em Arremesso de Sabre de Luz (Thrown Lightsaber Mastery)',
                    'Mestre do Shoto (Shoto Master)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Duelista Corpo a Corpo (Melee Duelist)',
                items: [
                    'Golpe Vantajoso (Advantageous Strike)',
                    'Truques Sujos (Dirty Tricks)',
                    'Floreio com Duas Armas I (Dual Weapon Flourish I)',
                    'Floreio com Duas Armas II (Dual Weapon Flourish II)',
                    'Mestre da Elegância (Master of Elegance)',
                    'Proficiência em Ataques Múltiplos (Armas Brancas Avançadas) (Multiattack Proficiency (Advanced Melee Weapons))',
                    'Do Nada (Out of Nowhere)',
                    'Floreio com Uma Arma I (Single Weapon Flourish I)',
                    'Floreio com Uma Arma II (Single Weapon Flourish II)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Emboscador (Ambusher)',
                items: [
                    'Especialista em Emboscada (Ambush Specialist)',
                    'Emboscador Destrutivo (Destructive Ambusher)',
                    'Manter o Ritmo (Keep It Going)',
                    'Mantê-los Atordoados (Keep Them Reeling)',
                    'Emboscador Perceptivo (Perceptive Ambusher)',
                    'Acionar a Armadilha (Spring the Trap)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Engenheiro Militar (Military Engineer)',
                items: [
                    'Romper Cobertura (Breach Cover)',
                    'Explosivo de Brecha (Breaching Explosive)',
                    'Especialista em Droides (Droid Expert)',
                    'Explosivo Preparado (Prepared Explosive)',
                    'Solucionador de Problemas (Problem Solver)',
                    'Modificações Rápidas (Quick Modifications)',
                    'Reparos em Movimento (Repairs on the Fly)',
                    'Sabotar Dispositivo (Sabotage Device)',
                    'Sábio da Tecnologia (Tech Savant)',
                    'Impulso Veicular (Vehicular Boost)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Envenenador Malkite (Malkite Poisoner)',
                items: [
                    'Técnicas Malkite (Malkite Techniques)',
                    'Modificar Veneno (Modify Poison)',
                    'Veneno Entorpecente (Numbing Poison)',
                    'Veneno Indetectável (Undetectable Poison)',
                    'Veneno Cruel (Vicious Poison)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Esgrima (Fencing)',
                items: [
                    'Estilo de Esgrima Nobre (Noble Fencing Style)',
                    'Defesa Desmoralizante (Demoralizing Defense)',
                    'Finta Condutora (Leading Feint)',
                    'Afronta Pessoal (Personal Affront)',
                    'Golpe Transpositor (Transposing Strike)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Espacial (Spacer)',
                items: [
                    'Movido a Hiperpropulsão (Hyperdriven)',
                    'Lobo do Espaço (Spacehound)',
                    'Saqueador de Naves (Starship Raider)',
                    'Guerreiro Estelar (Stellar Warrior)',
                    'Luta em Espaço Apertado (Cramped Quarters Fighting)',
                    'Saqueador do Espaço Profundo (Deep Space Raider)',
                    'Fuga Desesperada (Make a Break for It)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Especialista Corpo a Corpo (Melee Specialist)',
                items: [
                    'Golpe Certeiro (Accurate Blow)',
                    'Lutador de Curta Distância (Close-Quarters Fighter)',
                    'Ignorar Armadura (Ignore Armor)',
                    'Golpe Atordoante Aprimorado (Improved Stunning Strike)',
                    'Morte Giratória (Whirling Death)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Especialista em Armadura (Armor Specialist)',
                items: [
                    'Maestria em Armadura (Armor Mastery)',
                    'Defesa Blindada (Armored Defense)',
                    'Defesa Blindada Aprimorada (Improved Armored Defense)',
                    'Rolo Compressor (Juggernaut)',
                    'Segunda Pele (Second Skin)',
                    'Especialista em Escudo (Shield Expert)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Especialista em Armas (Weapon Specialist)',
                items: [
                    'Ataque Devastador (Devastating Attack)',
                    'Ataque Penetrante (Penetrating Attack)',
                    'Especialização em Arma (Weapon Specialization)',
                    'Assalto com Fogo Automático (Autofire Assault)',
                    'Assalto Esmagador (Crushing Assault)',
                    'Ataque Desarmante (Disarming Attack)',
                    'Assalto Empalador (Impaling Assault)',
                    'Fogo de Supressão Aprimorado (Improved Suppression Fire)',
                    'Assalto Pungente (Stinging Assault)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Espião (Spy)',
                items: [
                    'Misturar-se (Blend In)',
                    'Incógnito (Incognito)',
                    'Vigilância Aprimorada (Improved Surveillance)',
                    'Conhecimento Íntimo (Intimate Knowledge)',
                    'Vigilância (Surveillance)',
                    'Adulteração sem Rastros (Traceless Tampering)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Espionagem (Espionage)',
                items: [
                    'Sumir (Fade Out)',
                    'Manter Juntos (Keep Together)',
                    'Fuga Prudente (Prudent Escape)',
                    'Furtividade Reativa (Reactive Stealth)',
                    'Avaliar o Oponente (Sizing Up)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Espírito Guardião (Guardian Spirit)',
                items: [
                    'Conselho Crucial (Crucial Advice)',
                    'Aparição Distrativa (Distracting Apparition)',
                    'Espírito Guardião (Guardian Spirit)',
                    'Manifestar Espírito Guardião (Manifest Guardian Spirit)',
                    'Encorajamento Vital (Vital Encouragement)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Esquadrão Brutal (Brute Squad)',
                items: [
                    'Líder de Gangue (Gang Leader)',
                    'Assalto Corpo a Corpo (Melee Assault)',
                    'Bruto Corpo a Corpo (Melee Brute)',
                    'Oportunista Corpo a Corpo (Melee Opportunist)',
                    'Brutalidade do Esquadrão (Squad Brutality)',
                    'Superioridade do Esquadrão (Squad Superiority)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Exilado (Exile)',
                items: [
                    'Bravata Arrogante (Arrogant Bluster)',
                    'Unir Forças (Band Together)',
                    'Orientação Galáctica (Galactic Guidance)',
                    'Discurso Inflamado (Rant)',
                    'Autossuficiente (Self-Reliant)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Explorador do Hiperespaço (Hyperspace Explorer)',
                items: [
                    'Gambito do Espaço Profundo (Deep-Space Gambit)',
                    'Orientação (Guidance)',
                    'Atacante Oculto (Hidden Attacker)',
                    'Sábio do Hiperespaço (Hyperspace Savant)',
                    'Veículo Furtivo (Vehicle Sneak)',
                    'Movimento Silencioso (Silent Movement)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Fora da Lei (Outlaw)',
                items: [
                    'Ataque Desconcertante (Confounding Attack)',
                    'Dobrar a Aposta (Double Up)',
                    'Achar uma Brecha (Find an Opening)',
                    'Defesa Oportunista (Opportunistic Defense)',
                    'Sentidos Preternaturais (Preternatural Senses)',
                    'Aproveitar o Momento (Seize the Moment)',
                    'Enroscar (Tangle Up)',
                    'Instintos Sobrenaturais (Uncanny Instincts)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Forasteiro (Outsider)',
                items: [
                    'Desajeitado (Oafish)',
                    'Olhar de Forasteiro (Outsider\'s Eye)',
                    'Pergunta de Forasteiro (Outsider\'s Query)',
                    'Cauteloso (Wary)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Formas de Artes Marciais (Martial Arts Forms)',
                items: [
                    'Especialização Echani (Echani Expertise)',
                    'Especialização Hijkata (Hijkata Expertise)',
                    'Especialização K\'tara (K\'tara Expertise)',
                    'Especialização K\'thri (K\'thri Expertise)',
                    'Especialização Stava (Stava Expertise)',
                    'Especialização Tae-Jitsu (Tae-Jitsu Expertise)',
                    'Especialização Wrruushi (Wrruushi Expertise)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Formas de Sabre de Luz (Lightsaber Forms)',
                items: [
                    'Ataru (Ataru)',
                    'Djem So (Djem So)',
                    'Jar\'Kai (Jar\'Kai)',
                    'Juyo (Juyo)',
                    'Makashi (Makashi)',
                    'Niman (Niman)',
                    'Shien (Shien)',
                    'Shii-Cho (Shii-Cho)',
                    'Sokan (Sokan)',
                    'Soresu (Soresu)',
                    'Trakata (Trakata)',
                    'Vaapad (Vaapad)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Fortuna (Fortune)',
                items: [
                    'Sorte de Tolo (Fool\'s Luck)',
                    'Favor da Fortuna (Fortune\'s Favor)',
                    'Apostador (Gambler)',
                    'Jeito (Knack)',
                    'Tiro de Sorte (Lucky Shot)',
                    'Evitar Desastre (Avert Disaster)',
                    'Melhor Sortudo que Morto (Better Lucky than Dead)',
                    'Pura Sorte (Dumb Luck)',
                    'Mente Labiríntica (Labyrinthine Mind)',
                    'Parada de Sorte (Lucky Stop)',
                    'Tiro de Ricochete (Ricochet Shot)',
                    'Sorte Sobrenatural (Uncanny Luck)',
                    'Tiro Improvável (Unlikely Shot)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Fronteiriço (Fringer)',
                items: [
                    'Barganhar (Barter)',
                    'Sábio da Orla (Fringe Savant)',
                    'Passada Longa (Long Stride)',
                    'Improvisador (Jury-Rigger)',
                    'Fugir (Flee)',
                    'Manter a Calma (Keep it Together)',
                    'Esquivar-se de Lado (Sidestep)',
                    'Impulso (Surge)',
                    'Andarilho Veloz (Swift Strider)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Furador de Bloqueio (Blockade Runner)',
                items: [
                    'Cobertura Próxima (Close Cover)',
                    'Deixar para Trás (Outrun)',
                    'Romper o Bloqueio (Punch Through)',
                    'Alvo Pequeno (Small Target)',
                    'Olha Só Isso (Watch This)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Genoharadan',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Guardião das Feras (Beastwarden)',
                items: [
                    'Encantar Fera (Charm Beast)',
                    'Montaria Vinculada (Bonded Mount)',
                    'Suplicar à Fera (Entreat Beast)',
                    'Presença Tranquilizadora (Soothing Presence)',
                    'Sentido Selvagem (Wild Sense)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Guardião do Céu (Warden of the Sky)',
                items: [
                    'Golpe Desarmado Brutal (Brutal Unarmed Strike)',
                    'Ressurgimento Marcial (Martial Resurgence)',
                    'Salto de Ricochete (Rebound Leap)',
                    'Golpe Simultâneo (Simultaneous Strike)',
                    'Golpe Telecinético (Telekinetic Strike)',
                    'Arremesso Telecinético (Telekinetic Throw)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Guardião Jedi (Jedi Guardian)',
                items: [
                    'Recuperação Acrobática (Acrobatic Recovery)',
                    'Meditação de Batalha (Battle Meditation)',
                    'Alvo Evasivo (Elusive Target)',
                    'Intuição da Força (Force Intuition)',
                    'Resiliência (Resilience)',
                    'Manobra Próxima (Close Maneuvering)',
                    'Fuga Protegida (Cover Escape)',
                    'Acuidade Defensiva (Defensive Acuity)',
                    'Golpe Expositor (Exposing Strike)',
                    'Guerreiro Vigoroso (Forceful Warrior)',
                    'Defesa contra Granadas (Grenade Defense)',
                    'Golpe do Guardião (Guardian Strike)',
                    'Segurar a Linha (Hold the Line)',
                    'Inabalável (Immovable)',
                    'Meditação de Batalha Aprimorada (Improved Battle Meditation)',
                    'Combatente Móvel (Mobile Combatant)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Guerreiro (Warrior)',
                items: [
                    'Campeão (Champion)',
                    'Aprendiz Rápido (Quick Study)',
                    'Oportunidade Simples (Simple Opportunity)',
                    'Consciência de Guerreiro (Warrior\'s Awareness)',
                    'Determinação de Guerreiro (Warrior\'s Determination)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Guerreiro Mandaloriano (Mandalorian Warrior)',
                items: [
                    'Mandaloriano Blindado (Armored Mandalorian)',
                    'Avanço Mandaloriano (Mandalorian Advance)',
                    'Ferocidade Mandaloriana (Mandalorian Ferocity)',
                    'Glória Mandaloriana (Mandalorian Glory)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Guerreiro Zeison Sha (Zeison Sha Warrior)',
                items: [
                    'Arco da Lâmina-Disco (Discblade Arc)',
                    'Arremesso Distante de Lâmina-Disco (Distant Discblade Throw)',
                    'Chamar Lâmina-Disco (Recall Discblade)',
                    'Vigilância Telecinética (Telekinetic Vigilance)',
                    'Especialização em Arma (Lâmina-Disco) (Weapon Specialization (Discblade))'
                ]
            },
            {
                name: 'Árvore de Aptidões: Ideólogo (Ideologue)',
                items: [
                    'Instrução (Instruction)',
                    'Idealista (Idealist)',
                    'Conheça seu Inimigo (Know Your Enemy)',
                    'Dissidente Conhecido (Known Dissident)',
                    'Liderar pelo Exemplo (Lead by Example)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Imprevisível (Unpredictable)',
                items: [
                    'Surto Agressivo (Aggressive Surge)',
                    'Revidar Disparo (Blast Back)',
                    'Desvanecer (Fade Away)',
                    'Segundo Golpe (Second Strike)',
                    'Guinada (Swerve)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Imprudência (Recklessness)',
                items: [
                    'Achar Brechas (Find Openings)',
                    'Ao Chão (Hit the Deck)',
                    'Atrair para Perto (Lure Closer)',
                    'Risco pela Recompensa (Risk for Reward)',
                    'Passo Enganoso (Trick Step)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Infâmia (Infamy)',
                items: [
                    'Inspirar Medo I (Inspire Fear I)',
                    'Inspirar Medo II (Inspire Fear II)',
                    'Inspirar Medo III (Inspire Fear III)',
                    'Notório (Notorious)',
                    'Notoriedade Compartilhada (Shared Notoriety)',
                    'Tema-me (Fear Me)',
                    'Assustar (Frighten)',
                    'Mestre Manipulador (Master Manipulator)',
                    'Pequeno Favor (Small Favor)',
                    'Aterrorizar (Terrify)',
                    'Má Reputação (Unsavory Reputation)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Infiltração (Infiltration)',
                items: [
                    'Sempre Pronto (Always Ready)',
                    'Especialista em Armas Ocultas (Concealed Weapon Expert)',
                    'Aproximação Sorrateira (Creeping Approach)',
                    'No Modo Atordoar (Set for Stun)',
                    'Abate Silencioso (Silent Takedown)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Influência (Influence)',
                items: [
                    'Presença (Presence)',
                    'Exigir Rendição (Demand Surrender)',
                    'Enfraquecer Determinação Aprimorado (Improved Weaken Resolve)',
                    'Enfraquecer Determinação (Weaken Resolve)',
                    'Desconcertar (Fluster)',
                    'Defesa Intimidadora (Intimidating Defense)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Infortúnio (Misfortune)',
                items: [
                    'Golpe Covarde (Dastardly Strike)',
                    'Perturbador (Disruptive)',
                    'Escaramuçador (Skirmisher)',
                    'Ataque Furtivo (Sneak Attack)',
                    'Andar na Linha (Walk the Line)',
                    'Apunhalador (Backstabber)',
                    'Confundir (Befuddle)',
                    'Estrategista Astuto (Cunning Strategist)',
                    'Hesitar (Hesitate)',
                    'Escaramuçador Aprimorado (Improved Skirmisher)',
                    'Ataque Furtivo Aprimorado (Improved Sneak Attack)',
                    'Sedutor (Seducer)',
                    'Tomar Objeto (Seize Object)',
                    'Semear Confusão (Sow Confusion)',
                    'Frustrar (Stymie)',
                    'Golpe Súbito (Sudden Strike)',
                    'Golpe Enfraquecedor (Weakening Strike)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Inquisidor Imperial (Imperial Inquisitor)',
                items: [
                    'Acovardar Inimigos (Cower Enemies)',
                    'Interrogatório da Força (Force Interrogation)',
                    'Inquisição (Inquisition)',
                    'Presença Inquietante (Unsettling Presence)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Inspiração (Inspiration)',
                items: [
                    'Fortalecer Aliado (Bolster Ally)',
                    'Inflamar Fervor (Ignite Fervor)',
                    'Inspirar Confiança (Inspire Confidence)',
                    'Inspirar Pressa (Inspire Haste)',
                    'Inspirar Zelo (Inspire Zeal)',
                    'Amado (Beloved)',
                    'Força de Vontade (Willpower)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Instrutor Jedi (Jedi Instructor)',
                items: [
                    'Dádiva do Aprendiz (Apprentice Boon)',
                    'Compartilhar Segredo da Força (Share Force Secret)',
                    'Compartilhar Técnica da Força (Share Force Technique)',
                    'Compartilhar Aptidão (Share Talent)',
                    'Transferir Poder (Transfer Power)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Investigador Jedi (Jedi Investigator)',
                items: [
                    'Ecos da Força (Echoes of the Force)',
                    'Presa do Jedi (Jedi Quarry)',
                    'Preparado para o Perigo (Prepared for Danger)',
                    'Perceber Enganação (Sense Deception)',
                    'Julgamento Claro (Unclouded Judgement)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Item da Força (Force Item)',
                items: [
                    'Sintonizar Arma (Attune Weapon)',
                    'Fortalecer Arma (Empower Weapon)',
                    'Talismã da Força (Force Talisman)',
                    'Talismã da Força Maior (Greater Force Talisman)',
                    'Talismã da Força Focado (Focused Force Talisman)',
                    'Arremesso da Força (Force Throw)',
                    'Talismã da Força Focado Maior (Greater Focused Force Talisman)',
                    'Bloqueio Primitivo (Primitive Block)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Jal Shey',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Keetael',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Krath',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Lado Luminoso (Light Side)',
                items: [
                    'Em Paz (At Peace)',
                    'Sintonizado (Attuned)',
                    'Ataque Focado (Focused Attack)',
                    'Surto de Luz (Surge of Light)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Lado Sombrio (Dark Side)',
                items: [
                    'Poder do Lado Sombrio (Power of the Dark Side)',
                    'Presença Sombria (Dark Presence)',
                    'Vingança (Revenge)',
                    'Poder Rápido (Swift Power)',
                    'Consumido pela Escuridão (Consumed by Darkness)',
                    'Preservação Sombria (Dark Preservation)',
                    'Sábio do Lado Sombrio (Dark Side Savant)',
                    'Drenar Conhecimento (Drain Knowledge)',
                    'Transferir Essência (Transfer Essence)',
                    'Ira do Lado Sombrio (Wrath of the Dark Side)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Líder Apostador (Gambling Leader)',
                items: [
                    'Gambito de Assalto (Assault Gambit)',
                    'Fogo Direto (Direct Fire)',
                    'Encarar o Inimigo (Face the Foe)',
                    'Liderar na Linha de Frente (Lead From the Front)',
                    'A Sorte Favorece os Ousados (Luck Favors the Bold)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Líder de Esquadrão (Soldado de Elite) (Squad Leader (Elite Trooper))',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Líder de Esquadrão (Soldado) (Squad Leader (Soldier))',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Líder de Esquadrilha (Squadron Leader)',
                items: [
                    'Iniciar Passagem de Ataque (Begin Attack Run)',
                    'Reorganizar (Regroup)',
                    'Manobras de Esquadrilha (Squadron Maneuvers)',
                    'Táticas de Esquadrilha (Squadron Tactics)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Liderança (Leadership)',
                items: [
                    'Líder Nato (Born Leader)',
                    'Coordenar (Coordinate)',
                    'Comando à Distância (Distant Command)',
                    'Líder Destemido (Fearless Leader)',
                    'Reagrupar (Rally)',
                    'Confiança (Trust)',
                    'Presença de Comando (Commanding Presence)',
                    'Liderança Coordenada (Coordinated Leadership)',
                    'Ataque Reativo (Reactionary Attack)',
                    'Perspicácia Tática (Tactical Savvy)',
                    'Aliado Inabalável (Unwavering Ally)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Linhagem (Lineage)',
                items: [
                    'Contatos (Connections)',
                    'Instruído (Educated)',
                    'Perícia Espontânea (Spontaneous Skill)',
                    'Riqueza (Wealth)',
                    'Engenheiro (Engineer)',
                    'Amigos Influentes (Influential Friends)',
                    'Amigos Poderosos (Powerful Friends)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Localizador Gand (Gand Findsman)',
                items: [
                    'Cerimônias do Localizador (Findsman Ceremonies)',
                    'Presciência do Localizador (Findsman\'s Foresight)',
                    'Presságios (Omens)',
                    'Visões do Alvo (Target Visions)',
                    'Consciência Temporal (Temporal Awareness)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Luka Sene',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Maestria Desarmada (Unarmed Mastery)',
                items: [
                    'Sequência de Golpes (Flurry of Blows)',
                    'Golpe Endurecido (Hardened Strike)',
                    'Golpe Punitivo (Punishing Strike)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Medicina Avançada (Advanced Medicine)',
                items: [
                    'Médico de Campo de Batalha (Battlefield Medic)',
                    'Trazê-los de Volta (Bring Them Back)',
                    'Equipe de Emergência (Emergency Team)',
                    'Primeiros Socorros Extras (Extra First Aid)',
                    'Milagre Médico (Medical Miracle)',
                    'Cura Natural (Natural Healing)',
                    'Segunda Chance (Second Chance)',
                    'Firme Sob Pressão (Steady Under Pressure)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mentor Criminoso (Mastermind)',
                items: [
                    'Atrair Lacaio (Attract Minion)',
                    'Impelir Aliado I (Impel Ally I)',
                    'Impelir Aliado II (Impel Ally II)',
                    'Atrair Lacaio Superior (Attract Superior Minion)',
                    'Guarda-Costas I (Bodyguard I)',
                    'Guarda-Costas II (Bodyguard II)',
                    'Guarda-Costas III (Bodyguard III)',
                    'Plano de Contingência (Contingency Plan)',
                    'Impelir Aliado III (Impel Ally III)',
                    'Inspirar Ira (Inspire Wrath)',
                    'Ordens do Mestre (Master\'s Orders)',
                    'Abrigo (Shelter)',
                    'Superioridade Tática (Tactical Superiority)',
                    'Retirada Tática (Tactical Withdraw)',
                    'Urgência (Urgency)',
                    'Abundância de Aliados (Wealth of Allies)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mercenário (Mercenary)',
                items: [
                    'Presença de Comando (Commanding Presence)',
                    'Luta Suja (Dirty Fighting)',
                    'Guerreiro Temido (Feared Warrior)',
                    'Guerreiro Focado (Focused Warrior)',
                    'Implacável (Ruthless)',
                    'Fogo Combinado (Combined Fire)',
                    'Determinação do Mercenário (Mercenary\'s Determination)',
                    'Garra do Mercenário (Mercenary\'s Grit)',
                    'Trabalho em Equipe do Mercenário (Mercenary\'s Teamwork)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mestre da Intriga (Master of Intrigue)',
                items: [
                    'Planejamento Avançado (Advanced Planning)',
                    'Misturar-se (Blend In)',
                    'Já Fiz de Tudo (Done It All)',
                    'Tomar Posição (Get Into Position)',
                    'Mestre Manipulador (Master Manipulator)',
                    'Retaliação (Retaliation)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mestre de Armas (Weapon Master)',
                items: [
                    'Rajada Controlada (Controlled Burst)',
                    'Maestria em Arma Exótica (Exotic Weapon Mastery)',
                    'Ataque Devastador Maior (Greater Devastating Attack)',
                    'Ataque Penetrante Maior (Greater Penetrating Attack)',
                    'Foco em Arma Maior (Greater Weapon Focus)',
                    'Especialização em Arma Maior (Greater Weapon Specialization)',
                    'Proficiência em Ataques Múltiplos (Armas Pesadas) (Multiattack Proficiency (Heavy Weapons))',
                    'Proficiência em Ataques Múltiplos (Rifles) (Multiattack Proficiency (Rifles))',
                    'Ameaça Estendida (Extended Threat)',
                    'Assalto Feroz (Ferocious Assault)',
                    'Proficiência em Ataques Múltiplos (Armas Simples) (Multiattack Proficiency (Simple Weapons))',
                    'Arremesso Dois por Um (Two-For-One Throw)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mestre de Armas Jedi (Jedi Weapon Master)',
                items: [
                    'Transe de Combate (Combat Trance)',
                    'Maestria em Armas Improvisadas (Improvised Weapon Mastery)',
                    'Estilo de Armas Gêmeas (Twin Weapon Style)',
                    'Maestria em Armas Gêmeas (Twin Weapon Mastery)',
                    'Imobilização com Shoto (Shoto Pin)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mestre de Batalha Jedi (Jedi Battlemaster)',
                items: [
                    'Círculo Defensivo (Defensive Circle)',
                    'Reviver pela Força (Force Revive)',
                    'Comandante de Batalha Jedi (Jedi Battle Commander)',
                    'Investida Cortante (Slashing Charge)',
                    'Ataque Móvel (Sabres de Luz) (Mobile Attack (Lightsabers))'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mestre de Teräs Käsi (Master of Teräs Käsi)',
                items: [
                    'Ignorar Redução de Dano (Ignore Damage Reduction)',
                    'Fundamentos de Teräs Käsi (Teräs Käsi Basics)',
                    'Maestria em Teräs Käsi (Teräs Käsi Mastery)',
                    'Contragolpe Desarmado (Unarmed Counterstrike)',
                    'Aparar Desarmado (Unarmed Parry)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Mestre dos Críticos (Critical Master)',
                items: [
                    'Negar Movimento (Deny Move)',
                    'Margem de Crítico Ampliada (Armas Pesadas) (Extended Critical Range (Heavy Weapons))',
                    'Margem de Crítico Ampliada (Rifles) (Extended Critical Range (Rifles))',
                    'Ataque em Rajada (Flurry Attack)',
                    'Repelir (Knockback)',
                    'Reduzir Defesa (Reduce Defense)',
                    'Reduzir Mobilidade (Reduce Mobility)',
                    'Margem de Crítico Ampliada (Armas Simples) (Extended Critical Range (Simple Weapons))'
                ]
            },
            {
                name: 'Árvore de Aptidões: Místico (Mystic)',
                items: [
                    'Canalizar Vitalidade (Channel Vitality)',
                    'Mente Fechada (Closed Mind)',
                    'Técnica Esotérica (Esoteric Technique)',
                    'Maestria Mística (Mystic Mastery)',
                    'Maestria em Regimes (Regimen Mastery)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Moldador (Shaper)',
                items: [
                    'Maestria em Biotecnologia (Biotech Mastery)',
                    'Remendo Rápido (Expedient Mending)',
                    'Moldador Especialista (Expert Shaper)',
                    'Mestre Remendador (Master Mender)',
                    'Implantador Habilidoso (Skilled Implanter)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Moldadores de Kro Var (Shapers of Kro Var)',
                items: [
                    'Combustão (Combustion)',
                    'Terra Revolta (Earth Buckle)',
                    'Fluidez (Fluidity)',
                    'Trovão (Thunderclap)',
                    'Vórtice de Vento (Wind Vortex)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Monge Aing-Tii (Aing-Tii Monk)',
                items: [
                    'Aura de Liberdade (Aura of Freedom)',
                    'Maestria em Dobrar o Espaço (Folded Space Mastery)',
                    'Libertar (Liberate)',
                    'Muitas Faces da Força (Many Shades of the Force)',
                    'Integridade Espacial (Spatial Integrity)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Oficial Naval (Naval Officer)',
                items: [
                    'Fogo Combinado (Combined Fire)',
                    'Posicionamento da Frota (Fleet Deployment)',
                    'Táticas de Frota (Fleet Tactics)',
                    'É uma Armadilha! (It\'s a Trap!)',
                    'Comandante Lendário (Legendary Commander)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Oportunista (Opportunist)',
                items: [
                    'Abertura Vantajosa (Advantageous Opening)',
                    'Retribuição (Retribution)',
                    'Passar Despercebido (Slip By)',
                    'Prosperar no Caos (Thrive on Chaos)',
                    'Desforra (Vindication)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Ordem de Shasa (Order of Shasa)',
                items: [
                    'Consciência da Enganação (Deception Awareness)',
                    'Foco em Arma Maior (Fira) (Greater Weapon Focus (Fira))',
                    'Chamado do Progenitor (Progenitor\'s Call)',
                    'Forma de Onda (Waveform)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Patrulha Avançada (Advance Patrol)',
                items: [
                    'Patrulha Avançada (Forward Patrol)',
                    'Combatente Móvel (Mobile Combatant)',
                    'Pioneiro (Trailblazer)',
                    'Passo Vigilante (Watchful Step)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Patrulheiro Kilian (Kilian Ranger)',
                items: [
                    'Fortalecer Lança Siang (Empower Siang Lance)',
                    'Defesa com Manopla-Escudo (Shield Gauntlet Defense)',
                    'Deflexão com Manopla-Escudo (Shield Gauntlet Deflect)',
                    'Redirecionar com Manopla-Escudo (Shield Gauntlet Redirect)',
                    'Maestria com Lança Siang (Siang Lance Mastery)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Percepção (Awareness)',
                items: [
                    'Sentidos Apurados (Acute Senses)',
                    'Rastreador Especialista (Expert Tracker)',
                    'Iniciativa Aprimorada (Improved Initiative)',
                    'Tiro Atento (Keen Shot)',
                    'Esquiva Sobrenatural I (Uncanny Dodge I)',
                    'Esquiva Sobrenatural II (Uncanny Dodge II)',
                    'Reiniciar Iniciativa (Reset Initiative)',
                    'Ponto Fraco (Weak Point)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Perícias Superiores (Superior Skills)',
                items: [
                    'Perícia Garantida (Assured Skill)',
                    'Sucesso Crítico em Perícia (Critical Skill Success)',
                    'Perícia Excepcional (Exceptional Skill)',
                    'Dádiva Confiável (Reliable Boon)',
                    'Dádiva de Perícia (Skill Boon)',
                    'Confiança na Perícia (Skill Confidence)',
                    'Recuperação Habilidosa (Skillful Recovery)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Piloto Especialista (Expert Pilot)',
                items: [
                    'Combatente Aéreo Evasivo (Elusive Dogfighter)',
                    'Aceleração Total (Full Throttle)',
                    'Finta (Juke)',
                    'Manter a Calma (Keep it Together)',
                    'Perseguição Implacável (Relentless Pursuit)',
                    'Evasão Veicular (Vehicular Evasion)',
                    'Ponto Cego (Blind Spot)',
                    'Raspão (Clip)',
                    'Por um Triz (Close Scrape)',
                    'Passagem de Ataque Aprimorada (Improved Attack Run)',
                    'Mestre Defensor (Master Defender)',
                    'Piloto Renomado (Renowned Pilot)',
                    'Rolagem Evasiva (Roll Out)',
                    'Desviar Dano (Shunt Damage)',
                    'Foco em Veículo (Vehicle Focus)',
                    'Ala (Wingman)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Pirataria (Piracy)',
                items: [
                    'Sanguinário (Bloodthirsty)',
                    'Lutar até a Morte (Fight to the Death)',
                    'Mantê-los Atordoados (Keep Them Reeling)',
                    'Frenesi do Saqueador (Raider\'s Frenzy)',
                    'Surto do Saqueador (Raider\'s Surge)',
                    'Reputação Selvagem (Savage Reputation)',
                    'Pegá-los Vivos (Take Them Alive)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Pistoleiro (Gunslinger)',
                items: [
                    'Tiro Debilitante (Debilitating Shot)',
                    'Tiro Enganoso (Deceptive Shot)',
                    'Saque Rápido Aprimorado (Improved Quick Draw)',
                    'Tiro Derrubador (Knockdown Shot)',
                    'Proficiência em Ataques Múltiplos (Pistolas) (Multiattack Proficiency (Pistols))',
                    'Desarme à Distância (Ranged Disarm)',
                    'Dedo no Gatilho (Trigger Work)',
                    'Tiro às Cegas (Blind Shot)',
                    'Desarme Danoso (Damaging Disarm)',
                    'Mantê-los na Linha (Keep Them Honest)',
                    'Debilitação Persistente (Lingering Debilitation)',
                    'Ataque Móvel (Pistolas) (Mobile Attack (Pistols))',
                    'Duelista de Pistola (Pistol Duelist)',
                    'Flanquear à Distância (Ranged Flank)',
                    'Fogo em Retirada (Retreating Fire)',
                    'Tiro Retardante (Slowing Shot)',
                    'Tiro Veloz (Swift Shot)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Pistoleiro de Pistola (Pistoleer)',
                items: [
                    'Correr e Disparar (Dash and Blast)',
                    'Fogo de Flanco (Flanking Fire)',
                    'Tiro Garantido (Guaranteed Shot)',
                    'Chuva de Disparos (Hailfire)',
                    'Tiro Duplo (Twin Shot)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Poder Corporativo (Corporate Power)',
                items: [
                    'Ímpeto Competitivo (Competitive Drive)',
                    'Vantagem Competitiva (Competitive Edge)',
                    'Influência Corporativa (Corporate Clout)',
                    'Impor Confusão (Impose Confusion)',
                    'Impor Hesitação (Impose Hesitation)',
                    'Determinação Obstinada (Willful Resolve)',
                    'Decisão Errada (Wrong Decision)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Proteção (Protection)',
                items: [
                    'Guarda Blindado (Armored Guard)',
                    'Sacrifício do Guarda-Costas (Bodyguard\'s Sacrifice)',
                    'Resistência do Guarda (Guard\'s Endurance)',
                    'Salva-Vidas (Lifesaver)',
                    'Fora de Perigo (Out of Harm\'s Way)',
                    'Rolar com o Golpe (Roll With It)',
                    'Receber o Golpe (Take the Hit)',
                    'Proteger (Ward)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Protetor Leal (Loyal Protector)',
                items: [
                    'Inspirar Lealdade (Inspire Loyalty)',
                    'Lealdade Eterna (Undying Loyalty)',
                    'Proteção Punitiva (Punishing Protection)',
                    'Ações do Protetor (Protector Actions)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Provocador (Provocateur)',
                items: [
                    'Lançar Suspeita (Cast Suspicion)',
                    'Da Aflição à Discórdia (Distress to Discord)',
                    'Amigo ou Inimigo (Friend or Foe)',
                    'Aproveitar o Momento (Seize the Moment)',
                    'Vantagem Roubada (Stolen Advantage)',
                    'Traição Verdadeira (True Betrayal)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Reconhecimento (Reconnaissance)',
                items: [
                    'Líder de Equipe de Reconhecimento (Reconnaissance Team Leader)',
                    'Assalto em Combate Próximo (Close-Combat Assault)',
                    'Tomar Posição (Get Into Position)',
                    'Ações de Reconhecimento (Reconnaissance Actions)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Recrutador Rebelde (Rebel Recruiter)',
                items: [
                    'Recrutar Inimigo (Recruit Enemy)',
                    'Números Reforçados (Bolstered Numbers)',
                    'Sacrifício Nobre (Noble Sacrifice)',
                    'Continuar na Luta (Stay in the Fight)',
                    'Recrutamento de Equipe (Team Recruiting)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Rede de Espionagem Bothan (Bothan Spynet)',
                items: [
                    'Agente da SpyNet (SpyNet Agent)',
                    'Recursos Bothan (Bothan Resources)',
                    'Conhecimento é Vida (Knowledge is Life)',
                    'Conhecimento é Poder (Knowledge is Power)',
                    'Conhecimento é Força (Knowledge is Strength)',
                    'Seis Perguntas (Six Questions)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Refugiado Jedi (Jedi Refugee)',
                items: [
                    'Apagar Rastros (Cover Your Tracks)',
                    'Difícil de Sentir (Difficult to Sense)',
                    'Véu da Força (Force Veil)',
                    'Rede Jedi (Jedi Network)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Revolucionário (Revolutionary)',
                items: [
                    'Lançador de Bombas (Bomb Thrower)',
                    'Pela Causa (For the Cause)',
                    'Dar o Exemplo (Make an Example)',
                    'Retórica Revolucionária (Revolutionary Rhetoric)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sábio Baran Do (Baran Do Sage)',
                items: [
                    'Sentido de Perigo Aprimorado (Enhanced Danger Sense)',
                    'Horizonte Expandido (Expanded Horizon)',
                    'Conhecimento e Defesa (Knowledge and Defense)',
                    'Sintonia Planetária (Planetary Attunement)',
                    'Meditação Precognitiva (Precognitive Meditation)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sabotagem (Sabotage)',
                items: [
                    'Bloqueador de Dispositivos (Device Jammer)',
                    'Bloqueador de Droides (Droid Jammer)',
                    'Explosão Extrema (Extreme Explosion)',
                    'Maestria em Minas (Mine Mastery)',
                    'Explosão Direcionada (Shaped Explosion)',
                    'Demolidor Habilidoso (Skilled Demolitionist)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Saltador com Foguete (Rocket Jumper)',
                items: [
                    'Treinamento com Jetpack (Jet Pack Training)',
                    'Assalto Flamejante (Burning Assault)',
                    'Trajetória Aprimorada (Improved Trajectory)',
                    'Retirada com Jetpack (Jet Pack Withdraw)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sentido (Sense)',
                items: [
                    'Percepção da Força (Force Perception)',
                    'Piloto da Força (Force Pilot)',
                    'Previsão (Foresight)',
                    'Avaliar Potencial na Força (Gauge Force Potential)',
                    'Visões (Visions)',
                    'Sentir a Força (Feel the Force)',
                    'Reflexos da Força (Force Reflexes)',
                    'Percepção Aguçada (Heightened Awareness)',
                    'Navegação Instintiva (Instinctive Navigation)',
                    'Movimento do Futuro (Motion of the Future)',
                    'Psicometria (Psychometry)',
                    'Mudar Sentido (Shift Sense)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sentinela Jedi (Jedi Sentinel)',
                items: [
                    'Mente Clara (Clear Mind)',
                    'Sentir o Lado Sombrio (Dark Side Sense)',
                    'Flagelo do Lado Sombrio (Dark Side Scourge)',
                    'Névoa da Força (Force Haze)',
                    'Resistir ao Lado Sombrio (Resist the Dark Side)',
                    'Abafar Presença (Dampen Presence)',
                    'Retaliação Sombria (Dark Retaliation)',
                    'Ruína do Lado Sombrio (Dark Side Bane)',
                    'Resistência Gradual (Gradual Resistance)',
                    'Mestre da Grande Caçada (Master of the Great Hunt)',
                    'Névoa Persistente (Persistent Haze)',
                    'Alvos Prioritários (Prime Targets)',
                    'Colher Retribuição (Reap Retribution)',
                    'Sentir a Força Primordial (Sense Primal Force)',
                    'Golpe da Sentinela (Sentinel Strike)',
                    'Gambito da Sentinela (Sentinel\'s Gambit)',
                    'Observação da Sentinela (Sentinel\'s Observation)',
                    'Determinação de Aço (Steel Resolve)',
                    'Olhos Invisíveis (Unseen Eyes)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Shockboxer',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sith',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Slicer',
                items: [
                    'Conteúdo desta árvore ainda não preenchido.'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sobrevivente (Survivor)',
                items: [
                    'Evasão (Evasion)',
                    'Esforço Extremo (Extreme Effort)',
                    'Disparada (Sprint)',
                    'Passo Firme (Surefooted)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sombra Jedi (Jedi Shadow)',
                items: [
                    'Enganação Sombria (Dark Deception)',
                    'Golpe da Sentinela Aprimorado (Improved Sentinel Strike)',
                    'Gambito da Sentinela Aprimorado (Improved Sentinel\'s Gambit)',
                    'Repelir as Trevas (Rebuke the Dark)',
                    'Mácula do Lado Sombrio (Taint of the Dark Side)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Táticas Militares (Military Tactics)',
                items: [
                    'Táticas de Assalto (Assault Tactics)',
                    'Táticas de Posicionamento (Deployment Tactics)',
                    'Táticas de Campo (Field Tactics)',
                    'Um pelo Time (One for the Team)',
                    'Manobrar Melhor (Outmaneuver)',
                    'Mudar Defesa I (Shift Defense I)',
                    'Mudar Defesa II (Shift Defense II)',
                    'Mudar Defesa III (Shift Defense III)',
                    'Margem Tática (Tactical Edge)',
                    'Prerrogativa do Comandante (Commander\'s Prerogative)',
                    'Explorar Fraqueza (Exploit Weakness)',
                    'Grande Líder (Grand Leader)',
                    'Táticas Irregulares (Irregular Tactics)',
                    'Liderar pelo Exemplo (Lead by Example)',
                    'Virar a Maré (Turn the Tide)',
                    'Defesa Sobrenatural (Uncanny Defense)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Técnico Fora da Lei (Outlaw Tech)',
                items: [
                    'Reparos Rápidos (Fast Repairs)',
                    'Ligação Direta (Hotwire)',
                    'Conserto Rápido (Quick Fix)',
                    'Modificações Personalizadas (Personalized Modifications)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Telepata (Telepath)',
                items: [
                    'Sondagem Mental (Mind Probe)',
                    'Telepatia Perfeita (Perfect Telepathy)',
                    'Cidadela Psíquica (Psychic Citadel)',
                    'Defesas Psíquicas (Psychic Defenses)',
                    'Intruso Telepático (Telepathic Intruder)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Torreta (Turret)',
                items: [
                    'Torreta Blaster I (Blaster Turret I)',
                    'Torreta Blaster II (Blaster Turret II)',
                    'Torreta Blaster III (Blaster Turret III)',
                    'Torreta de Íons (Ion Turret)',
                    'Torreta Atordoante (Stun Turret)',
                    'Autodestruição da Torreta (Turret Self-Destruct)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Trapaça (Trickery)',
                items: [
                    'Distração Astuta (Cunning Distraction)',
                    'Enganação Danosa (Damaging Deception)',
                    'Grito Distrativo (Distracting Shout)',
                    'Cobertura Leve Aprimorada (Improved Soft Cover)',
                    'Inofensivo (Innocuous)',
                    'Traiçoeiro (Treacherous)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Tropa (Trooper)',
                items: [
                    'Companheiros de Armas (Comrades in Arms)',
                    'Mira Focada (Focused Targeting)',
                    'Falange (Phalanx)',
                    'Ficar Juntos (Stick Together)',
                    'Cuidar das Costas (Watch Your Back)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Vanguarda (Vanguard)',
                items: [
                    'Visão Aprimorada (Enhanced Vision)',
                    'Cobertura Impenetrável (Impenetrable Cover)',
                    'Atacante Invisível (Invisible Attacker)',
                    'Marcar o Alvo (Mark the Target)',
                    'Maximizar Cobertura (Maximize Cover)',
                    'Choque de Bombardeio (Shellshock)',
                    'Enfraquecer o Alvo (Soften the Target)',
                    'Triangular (Triangulate)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Versatilidade (Versatility)',
                items: [
                    'Adaptar e Sobreviver (Adapt and Survive)',
                    'Proteção Defensiva (Defensive Protection)',
                    'Ágil nos Pés (Quick on Your Feet)',
                    'Pronto e Disposto (Ready and Willing)',
                    'Adaptação Desequilibrante (Unbalancing Adaptation)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Veterano (Veteran)',
                items: [
                    'Remédio de Campo de Batalha (Battlefield Remedy)',
                    'Guerreiro Calejado (Grizzled Warrior)',
                    'Imprudente (Reckless)',
                    'Já Vi de Tudo (Seen It All)',
                    'Testado em Batalha (Tested in Battle)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Vigilância (Surveillance)',
                items: [
                    'Inteligência Avançada (Advanced Intel)',
                    'Olhos Ocultos (Hidden Eyes)',
                    'Caçar o Caçador (Hunt the Hunter)',
                    'Buscar e Destruir (Seek and Destroy)',
                    'Observador (Spotter)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Vigilante Jedi (Jedi Watchman)',
                items: [
                    'Alerta da Força (Force Warning)',
                    'Saque Rápido Aprimorado (Sabres de Luz) (Improved Quick Draw (Lightsabers))',
                    'Postura Protetora (Sheltering Stance)',
                    'Vigilância (Vigilance)',
                    'Avanço do Vigilante (Watchman\'s Advance)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Xamã Feluciano (Felucian Shaman)',
                items: [
                    'Encantar Fera (Charm Beast)',
                    'Comandar Fera (Command Beast)',
                    'Detonar (Detonate)',
                    'Mente Coletiva (Hive Mind)',
                    'Infundir Arma (Infuse Weapon)',
                    'Explosão Nauseante (Sickening Blast)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Boxeador de Choque (Shockboxer)',
                items: [
                    'Jab Defensivo (Defensive Jab)',
                    'Esquiva Ágil (Nimble Dodge)',
                    'Jab de Retaliação (Retaliation Jab)',
                    'Jab Pungente (Stinging Jab)',
                    'Boxeador de Choque Atordoante (Stunning Shockboxer)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Corsário (Privateer)',
                items: [
                    'Espacial Blindado (Armored Spacer)',
                    'Atrair Corsário (Attract Privateer)',
                    'Blaster e Lâmina I (Blaster and Blade I)',
                    'Blaster e Lâmina II (Blaster and Blade II)',
                    'Blaster e Lâmina III (Blaster and Blade III)',
                    'Abordador (Boarder)',
                    'Maestria em Íons (Ion Mastery)',
                    'Proficiência em Ataques Múltiplos (Armas Brancas Avançadas) (Multiattack Proficiency (Advanced Melee Weapons))',
                    'Tiro Preservador (Preserving Shot)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Droide de Elite (Elite Droid)',
                items: [
                    'Quebrar Programação (Break Program)',
                    'Maestria Heurística (Heuristic Mastery)',
                    'Rotinas Programadas (Scripted Routines)',
                    'Ultrarresistente (Ultra Resilient)'
                ]
            },
            {
                name: 'Árvore de Aptidões: GenoHaradan (GenoHaradan)',
                items: [
                    'Repercussões Mortais (Deadly Repercussions)',
                    'Golpe Manipulador (Manipulating Strike)',
                    'Golpe Manipulador Aprimorado (Improved Manipulating Strike)',
                    'Mexendo os Pauzinhos (Pulling the Strings)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Jal Shey (Jal Shey)',
                items: [
                    'Troca de Ações (Action Exchange)',
                    'Retardo da Força (Force Delay)',
                    'Imbuir Item (Imbue Item)',
                    'Conhecimento da Força (Knowledge of the Force)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Keetael (Keetael)',
                items: [
                    'Ocultar Uso da Força (Conceal Force Use)',
                    'Direção da Força (Force Direction)',
                    'Ímpeto da Força (Force Momentum)',
                    'Visões do Passado (Past Visions)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Krath (Krath)',
                items: [
                    'Manipulação do Lado Sombrio (Dark Side Manipulation)',
                    'Ilusões Krath (Krath Illusions)',
                    'Intuição Krath (Krath Intuition)',
                    'Surto Krath (Krath Surge)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Luka Sene (Luka Sene)',
                items: [
                    'Detecção de Campo (Field Detection)',
                    'Visão da Força Aprimorada (Improved Force Sight)',
                    'Mestre Luka Sene (Luka Sene Master)',
                    'Visão Rápida (Quickseeing)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Líder de Esquadrão (Squad Leader)',
                items: [
                    'Oficial Comandante (Commanding Officer)',
                    'Táticas Coordenadas (Coordinated Tactics)',
                    'Fogo à Vontade (Fire at Will)',
                    'Ações do Esquadrão (Squad Actions)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Sith (Sith)',
                items: [
                    'Cura Sombria (Dark Healing)',
                    'Flagelo Sombrio (Dark Scourge)',
                    'Adepto do Lado Sombrio (Dark Side Adept)',
                    'Mestre do Lado Sombrio (Dark Side Master)',
                    'Enganação da Força (Force Deception)',
                    'Cura Sombria Aprimorada (Improved Dark Healing)',
                    'Golpe Perverso (Wicked Strike)',
                    'Aflição (Affliction)',
                    'Campo de Cura Sombria (Dark Healing Field)',
                    'Drenar a Força (Drain Force)',
                    'Alquimia Sith (Sith Alchemy)',
                    'Forma Roubada (Stolen Form)'
                ]
            },
            {
                name: 'Árvore de Aptidões: Slicer (Slicer)',
                items: [
                    'Artimanha (Gimmick)',
                    'Slicer Mestre (Master Slicer)',
                    'Rastrear Conexão (Trace)',
                    'Falsificação Eletrônica (Electronic Forgery)',
                    'Sabotagem Eletrônica (Electronic Sabotage)',
                    'Slicer de Segurança (Security Slicer)',
                    'Vírus (Virus)'
                ]
            }
        ]
    },
    talents: {
        label: 'Talentos',
        items: [
            'À Beira da Morte (Brink of Death)',
            'Abaixar e Cobrir (Duck and Cover)',
            'Acerto Fatal (Fatal Hit)',
            'Acuidade com Arma (Weapon Finesse)',
            'Afinidade (Rapport)',
            'Agarrão Múltiplo (Multi‑Grab)',
            'Agilidade Aumentada (Increased Agility)',
            'Alcance Zero (Zero Range)',
            'Algumas Manobras (A Few Maneuvers)',
            'Aliado Acrobático (Acrobatic Ally)',
            'Alvo em Movimento (Moving Target)',
            'Alvo Errático (Erratic Target)',
            'Amigos em Lugares Baixos (Friends in Low Places)',
            'Aproximação Desimpedida (Unhindered Approach)',
            'Área Direcionada (Targeted Area)',
            'Arremessar (Throw)',
            'Arremesso Angulado (Angled Throw)',
            'Arremesso Poderoso (Mighty Throw)',
            'Artes Marciais (I, II e III) (Martial Arts (I, II, and III))',
            'Artes Marciais Mecânicas (Mechanical Martial Arts)',
            'Aspecto Horrendo (Hideous Visage)',
            'Assalto com Fogo Automático (Autofire Assault)',
            'Assumir Riscos (Risk Taker)',
            'Ataque Astuto (Cunning Attack)',
            'Ataque Avassalador (Overwhelming Attack)',
            'Ataque Coordenado (Coordinated Attack)',
            'Ataque Demolidor (Battering Attack)',
            'Ataque Desestabilizador (Scum) (Staggering Attack (Scum))',
            'Ataque Desestabilizador (War) (Staggering Attack (War))',
            'Ataque Duplo (Double Attack)',
            'Ataque em Corrida (Running Attack)',
            'Ataque Garantido (Assured Attack)',
            'Ataque Implacável (Relentless Attack)',
            'Ataque Instintivo (Instinctive Attack)',
            'Ataque Poderoso (Power Attack)',
            'Ataque Selvagem (Savage Attack)',
            'Ataque Triplo (Triple Attack)',
            'Ataque Turbilhão (Whirlwind Attack)',
            'Ataque Vantajoso (Advantageous Attack)',
            'Atirador de Bowcaster (Bowcaster Marksman)',
            'Atirador Oportunista (Opportunistic Shooter)',
            'Atualização Lógica: Autodefesa (Logic Upgrade: Self Defense)',
            'Atualização Lógica: Tático (Logic Upgrade: Tactician)',
            'Atualização Lógica: Troca de Perícia (Logic Upgrade: Skill Swap)',
            'Barragem Coordenada (Coordinated Barrage)',
            'Barragem de Blaster (Blaster Barrage)',
            'Bater Cabeças (Knock Heads)',
            'Benefícios da Orla (Fringe Benefits)',
            'Blindagem Iônica (Ion Shielding)',
            'Brado Devastador (Devastating Bellow)',
            'Brado Poderoso (Strong Bellow)',
            'Buscador da Justiça (Justice Seeker)',
            'Caçador de Droides (Droid Hunter)',
            'Caçador Esportivo (Sport Hunter)',
            'Caçador Ungido (Annointed Hunter)',
            'Canalizar Fúria (Channel Rage)',
            'Catador (Scavenger)',
            'Charme Desarmante (Disarming Charm)',
            'Cirurgia Biotecnológica (Biotech Surgery)',
            'Cirurgia Cibernética (Cybernetic Surgery)',
            'Cobertura Vantajosa (Advantageous Cover)',
            'Combate Montado (Mounted Combat)',
            'Combate Veicular (Vehicular Combat)',
            'Combatente Imparável (Unstoppable Combatant)',
            'Combo de Ataque (À Distância) (Attack Combo (Ranged))',
            'Combo de Ataque (Corpo a Corpo) (Attack Combo (Melee))',
            'Combo de Ataque (Disparar e Golpear) (Attack Combo (Fire and Strike))',
            'Condicionamento (Conditioning)',
            'Condutor de Banthas (Bantha Herder)',
            'Conhecimento de Droides (Droidcraft)',
            'Conhecimento dos Anciões (Elder’s Knowledge)',
            'Construtor Naval Mon Calamari (Mon Calamari Shipwright)',
            'Contra-Agarrão (Grab Back)',
            'Conversão de Dano (Damage Conversion)',
            'Cortar a Burocracia (Cut the Red Tape)',
            'Crítico Triplo (Triple Crit)',
            'Cura Regenerativa (Regenerative Healing)',
            'Dádiva da Força (Force Boon)',
            'Dano Colateral (Collateral Damage)',
            'Defensor Cauteloso (Wary Defender)',
            'Defesa Acrobática (Tumble Defense)',
            'Defesa Brilhante (Brilliant Defense)',
            'Defesa Corpo a Corpo (Melee Defense)',
            'Defesa Instintiva (Instinctive Defense)',
            'Defesa Montada (Mounted Defense)',
            'Defesa Preditiva (Predictive Defense)',
            'Defesas Aprimoradas (Improved Defenses)',
            'Derrubar (Trip)',
            'Desafio de Perícia: Evasão Catastrófica (Skill Challenge: Catastrophic Avoidance)',
            'Desafio de Perícia: Recuperação (Skill Challenge: Recovery)',
            'Desafio de Perícia: Último Recurso (Skill Challenge: Last Resort)',
            'Desarmar Aprimorado (Improved Disarm)',
            'Descendente de Dorin (Scion of Dorin)',
            'Determinação Inabalável (Unswerving Resolve)',
            'Disparo de Artilharia (Artillery Shot)',
            'Disparo Poderoso (Power Blast)',
            'Dispositivo Característico (Signature Device)',
            'Droide Distraidor (Distracting Droid)',
            'Encurralado (Cornered)',
            'Engenhoqueiro (Gearhead)',
            'Enxamear (Swarm)',
            'Equipe Ágil (Nimble Team)',
            'Equipe de Slicers (Slicer Team)',
            'Equipe Médica (Medical Team)',
            'Escalador Seguro (Sure Climber)',
            'Escudo de Carne (Meat Shield)',
            'Esmagador de Ossos (Bone Crusher)',
            'Esmagamento do Rancor (Rancor Crush)',
            'Esmagar (Crush)',
            'Espacial Veterano (Veteran Spacer)',
            'Especialista da Natureza (Nature Specialist)',
            'Especialista em Artilharia (Gunnery Specialist)',
            'Especialista em Biotecnologia (Biotech Specialist)',
            'Especialista Técnico (Tech Specialist)',
            'Especialistas Aquáticos (Aquatic Specialists)',
            'Especialistas em Ascensão (Ascension Specialists)',
            'Especialistas Selvagens (Wilderness Specialists)',
            'Especialistas Técnicos (Technical Experts)',
            'Especialização Cirúrgica (Surgical Expertise)',
            'Especialização em Sistemas de Veículos (Vehicle Systems Expertise)',
            'Espreitador da Floresta (Forest Stalker)',
            'Esquadrão Incansável (Tireless Squad)',
            'Esquadrão Unificado (Unified Squadron)',
            'Esquiva (Dodge)',
            'Esquiva Acrobática (Acrobatic Dodge)',
            'Explosão de Velocidade (Burst of Speed)',
            'Explosão Vigorosa (Forceful Blast)',
            'Familiaridade Jedi (Jedi Familiarity)',
            'Faro Aguçado (Keen Scent)',
            'Feito de Força (Feat of Strength)',
            'Flèche (Flèche)',
            'Foco em Arma (Weapon Focus)',
            'Foco em Droides (Droid Focus)',
            'Foco em Perícia (Skill Focus)',
            'Foco Inabalável (Unwavering Focus)',
            'Fogo Cruzado (Crossfire)',
            'Fogo de Retorno (Return Fire)',
            'Fogo de Supressão (Suppression Fire)',
            'Fogo em Investida (Charging Fire)',
            'Fogo em Rajada (Burst Fire)',
            'Força de Personalidade (Force of Personality)',
            'Força Destrutiva (Destructive Force)',
            'Força Imparável (Unstoppable Force)',
            'Força Resiliente (Resilient Strength)',
            'Forrageamento Abundante (Ample Foraging)',
            'Forte na Força (Strong in the Force)',
            'Franco-Atirador (Sniper)',
            'Franco-Atirador Mortal (Deadly Sniper)',
            'Frenesi de Ferramentas (Tool Frenzy)',
            'Fuga de Combate Próximo (Close Combat Escape)',
            'Fúria Controlada (Controlled Rage)',
            'Fúria Extra (Extra Rage)',
            'Fúria Focada (Focused Rage)',
            'Fúria Pavorosa (Dreadful Rage)',
            'Fúria Poderosa (Powerful Rage)',
            'Fúria Wroshyr (Wroshyr Rage)',
            'Gambito Desesperado (Desperate Gambit)',
            'Gênio Tático (Tactical Genius)',
            'Golpe Acelerado (Accelerated Strike)',
            'Golpe Acrobático (Acrobatic Strike)',
            'Golpe Crítico (Critical Strike)',
            'Golpe de Haste Longa (Long Haft Strike)',
            'Golpe de Impulso (Momentum Strike)',
            'Golpe de Retirada (Withdrawal Strike)',
            'Golpe Debilitante (Hobbling Strike)',
            'Golpe Desmoralizante (Demoralizing Strike)',
            'Golpe Perverso (Wicked Strike)',
            'Golpe Poderoso (Mighty Swing)',
            'Golpe Rápido (Rapid Strike)',
            'Golpe Rápido Aprimorado (Improved Rapid Strike)',
            'Golpe Sádico (Sadistic Strike)',
            'Golpeador (Slammer)',
            'Golpeador Pesado (Heavy Hitter)',
            'Guerreiro de Trincheira (Trench Warrior)',
            'Guerreiro Impiedoso (Pitiless Warrior)',
            'Guerreiro Primitivo (Primitive Warrior)',
            'Habitante da Escuridão (Darkness Dweller)',
            'Herança Guerreira (Warrior Heritage)',
            'Herança Jedi (Jedi Heritage)',
            'Hiperblaster (Hyperblazer)',
            'Imobilizar (Pin)',
            'Incapacitar (Disabler)',
            'Influência Duradoura (Lasting Influence)',
            'Informante (Informer)',
            'Inseto Retornante (Returning Bug)',
            'Instintos do Caçador (Hunter’s Instincts)',
            'Intimidador (Intimidator)',
            'Intuição Perfeita (Perfect Intuition)',
            'Investida Aprimorada (Improved Charge)',
            'Investida Bantha (Bantha Rush)',
            'Investida Bantha Aprimorada (Improved Bantha Rush)',
            'Investida Hábil (Deft Charge)',
            'Investida Maníaca (Maniacal Charge)',
            'Investida Poderosa (Powerful Charge)',
            'Ler os Ventos (Read the Winds)',
            'Liberado (Unleashed)',
            'Líder de Droides (Leader of Droids)',
            'Limite de Dano Aprimorado (Improved Damage Threshold)',
            'Língua de Prata (Silver Tongue)',
            'Linguista (Linguist)',
            'Lutar Apesar da Dor (Fight Through Pain)',
            'Maestria em Armas Improvisadas (Improvised Weapon Mastery)',
            'Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))',
            'Maestria em Escudo de Droides (Droid Shield Mastery)',
            'Maestria em Regimes da Força (Force Regimen Mastery)',
            'Manobra Escorregadia (Slippery Maneuver)',
            'Manter Unido (Hold Together)',
            'Manter-se Firme (Stand Tall)',
            'Manto do Lado Sombrio (Pall of the Dark Side)',
            'Mau Pressentimento (Bad Feeling)',
            'Mente Binária (Binary Mind)',
            'Mente da Razão (Mind of Reason)',
            'Mentiroso Imperceptível (Imperceptible Liar)',
            'Mergulhar para Cobertura (Dive for Cover)',
            'Mestre de Armas Gungan (Gungan Weapon Master)',
            'Mestre dos Disfarces (Master of Disguise)',
            'Mestre dos Rifles (Riflemaster)',
            'Metamorfo (Metamorph)',
            'Metralhar (Strafe)',
            'Mira Múltipla (Multi‑Targeting)',
            'Mobilidade (Mobility)',
            'Modificação Apressada (Hasty Modification)',
            'Movimento Impetuoso (Impetuous Move)',
            'Nadador Perfeito (Perfect Swimmer)',
            'Nadador Rápido (Fast Swimmer)',
            'Negociador Astuto (Shrewd Bargainer)',
            'Nunca se Render (Never Surrender)',
            'Olho Morto (Deadeye)',
            'Operativos Secretos (Covert Operatives)',
            'Parar (Halt)',
            'Pegada Wookiee (Wookie Grip)',
            'Pele Grossa (Thick Skin)',
            'Percepção Instintiva (Instinctive Perception)',
            'Perícia Rápida (Quick Skill)',
            'Permanecer de Pé (Stay Up)',
            'Personalidade Indomável (Indomitable Personality)',
            'Personificar (Impersonate)',
            'Pés Ligeiros (Fleet‑Footed)',
            'Piloto Impecável (Flawless Pilot)',
            'Pinça (Pincer)',
            'Pistoleiro (Pistoleer)',
            'Posição Estabilizadora (Steadying Position)',
            'Postura Resoluta (Resolute Stance)',
            'Precisão Cirúrgica (Pinpoint Accuracy)',
            'Precisão de Mira (Aiming Accuracy)',
            'Presença Perturbadora (Disturbing Presence)',
            'Prestidigitação Aprimorada (Improved Sleight of Hand)',
            'Primeiros Socorros Selvagens (Wilderness First Aid)',
            'Proficiência com Arma (Weapon Proficiency)',
            'Proficiência com Arma Exótica (Exotic Weapon Proficiency)',
            'Proficiência com Armadura (Armor Proficiency)',
            'Projetista de Naves (Starship Designer)',
            'Prontidão da Força (Force Readiness)',
            'Prosseguir o Ataque (Follow Through)',
            'Queda Enganosa (Deceptive Drop)',
            'Rajada de Golpes (Flurry)',
            'Rastreador Mestre (Master Tracker)',
            'Reação Rápida (Rapid Reaction)',
            'Recordar (Recall)',
            'Recuperação Fortificante (Fortifying Recovery)',
            'Recuperação Vigorosa (Forceful Recovery)',
            'Recuperar o Fôlego Extra (Extra Second Wind)',
            'Reflexos de Combate (Combat Reflexes)',
            'Regimento Montado (Mounted Regiment)',
            'Resiliência Inata (Inborn Resilience)',
            'Resistência a Agarrões (Grapple Resistance)',
            'Resistência a Veneno (Poison Resistance)',
            'Resistência Aumentada (Increased Resistance)',
            'Resolução Inabalável (Unwavering Resolve)',
            'Ressurgência (Resurgence)',
            'Retirada Oportunista (Opportunistic Retreat)',
            'Retorno Rápido (Quick Comeback)',
            'Robustez (Toughness)',
            'Sacudir o Efeito (Shake It Off)',
            'Saque Rápido (Quick Draw)',
            'Saque Relâmpago (Lightning Draw)',
            'Sensibilidade à Força (Force Sensitivity)',
            'Sentidos Aguçados (Sharp Senses)',
            'Sentinelas Cautelosas (Wary Sentries)',
            'Sobrevivência Nikto (Nikto Survival)',
            'Sobrevivente de Ryloth (Survivor of Ryloth)',
            'Subespécie com Garras (Clawed Subspecies)',
            'Subornador Especialista (Expert Briber)',
            'Sucesso Confiante (Confident Success)',
            'Sucesso Recorrente (Recurring Success)',
            'Surto de Escudo (Shield Surge)',
            'Surto de Recuperação (Recovering Surge)',
            'Surto de Vitalidade (Vitality Surge)',
            'Surto do Espacial (Spacer’s Surge)',
            'Surto Rápido (Fast Surge)',
            'Surto Veicular (Vehicular Surge)',
            'Talento Adaptável (Adaptable Talent)',
            'Táticas de Nave (Starship Tactics)',
            'Tecnologia Superior (Superior Tech)',
            'Tiro à Queima-Roupa (Point Blank Shot)',
            'Tiro Cuidadoso (Careful Shot)',
            'Tiro de Franco-Atirador (Sniper Shot)',
            'Tiro de Raspão (Grazing Shot)',
            'Tiro Distante (Far Shot)',
            'Tiro em Leque (Spray Shot)',
            'Tiro Preciso (Precise Shot)',
            'Tiro Principal (Prime Shot)',
            'Tiro Rápido (Rapid Shot)',
            'Treinamento com Bastão (Stave Training)',
            'Treinamento com Implantes (Implant Training)',
            'Treinamento da Força (Force Training)',
            'Treinamento de Candidatura a Oficial (Officer Candidacy Training)',
            'Treinamento Echani (Echani Training)',
            'Treinamento em Perícia (Skill Training)',
            'Treinamento Hijkata (Hijkata Training)',
            'Treinamento K’tara (K’tara Training)',
            'Treinamento K’thri (K’thri Training)',
            'Treinamento Mandaloriano (Mandalorian Training)',
            'Treinamento Militar da Aliança Galáctica (Galactic Alliance Military Training)',
            'Treinamento Militar do Grande Exército da República (Grand Army of the Republic Training)',
            'Treinamento Militar Imperial (Imperial Military Training)',
            'Treinamento Militar Rebelde (Rebel Military Training)',
            'Treinamento Militar Republicano (Republic Military Training)',
            'Treinamento Militar Separatista (Separatist Military Training)',
            'Treinamento Militar Sith (Sith Military Training)',
            'Treinamento Tae-Jitsu (Tae‑Jitsu Training)',
            'Treinamento Teräs Käsi (Teräs Käsi Training)',
            'Treinamento Wrruushi (Wrruushi Training)',
            'Trespassar (Cleave)',
            'Trespassar Assustador (Frightening Cleave)',
            'Trespassar Maior (Great Cleave)',
            'Truque com Faca (Knife Trick)',
            'Truque de Combate (Combat Trickery)',
            'Truque Oportunista (Opportunistic Trickery)',
            'Truque Oportunista Aprimorado (Improved Opportunistic Trickery)',
            'Vantagem Tática (Tactical Advantage)',
            'Varredura com Fogo Automático (Autofire Sweep)',
            'Vínculo de Sensores (Sensor Link)',
            'Virar e Disparar (Turn and Burn)',
            'Visão Profunda (Deep Sight)',
            'Vitalidade Ressurgente (Resurgent Vitality)',
            'Vontade Bothan (Bothan Will)',
            'Voo Impulsivo (Impulsive Flight)'
        ]

    },
    forceTechniques: {
        label: 'Técnicas da Força',
        items: [
            'Recuperação de Pontos de Força (Force Point Recovery)',
            'Maestria em Poder da Força (Force Power Mastery)',
            'Transe da Força Aprimorado (Improved Force Trance)',
            'Mover Objeto Leve Aprimorado (Improved Move Light Object)',
            'Sentir a Força Aprimorado (Improved Sense Force)',
            'Sentir o Ambiente Aprimorado (Improved Sense Surroundings)',
            'Telepatia Aprimorada (Improved Telepathy)',
            'Dominar Mente (Dominate Mind)',
            'Resistência a Energia Aprimorada (Improved Energy Resistance)',
            'Golpe da Força Aprimorado (Improved Force Slam)',
            'Atordoamento da Força Aprimorado (Improved Force Stun)',
            'Ionizar Aprimorado (Improved Ionize)',
            'Combate Cinético Aprimorado (Improved Kinetic Combat)',
            'Resistir à Força Aprimorado (Improved Resist Force)',
            'Valor Aprimorado (Improved Valor)',
            'Transferência Vital Aprimorada (Improved Vital Transfer)',
            'Absorção de Idioma (Language Absorption)',
            'Golpe de Batalha Aprimorado (Improved Battle Strike)',
            'Fúria Sombria Aprimorada (Improved Dark Rage)',
            'Desarmar pela Força Aprimorado (Improved Force Disarm)',
            'Impulso da Força Aprimorado (Improved Force Thrust)',
            'Pressão da Força Aprimorada (Improved Force Grip)',
            'Relâmpago da Força Aprimorado (Improved Force Lightning)',
            'Truque Mental Aprimorado (Improved Mind Trick)',
            'Refutar Aprimorado (Improved Rebuke)',
            'Repulsa Aprimorada (Improved Repulse)',
            'Transferência Vital Avançada (Advanced Vital Transfer)',
            'Camuflagem Aprimorada (Improved Cloak)',
            'Levitar Aprimorado (Improved Levitate)',
            'Malacia Aprimorada (Improved Malacia)',
            'Fase Aprimorada (Improved Phase)',
            'Dilacerar Aprimorado (Improved Rend)',
            'Ponto de Ruptura Aprimorado (Improved Shatterpoint)',
            'Tecnometria Aprimorada (Improved Technometry)',
            'Desintoxicar Veneno (Detoxify Poison)',
            'Balistocinese Aprimorada (Improved Ballistakinesis)',
            'Transferência Sombria Aprimorada (Improved Dark Transfer)',
            'Detonar Aprimorado (Improved Detonate)',
            'Iluminar Aliado Aprimorado (Improved Enlighten)',
            'Explosão de Relâmpago Aprimorada (Improved Lightning Burst)',
            'Obscurecer Aprimorado (Improved Obscure)',
            'Escudo da Força Aprimorado (Improved Force Shield)',
            'Cambalear Aprimorado (Improved Stagger)',
            'Curar Doença (Cure Disease)',
            'Cegueira Estendida (Extended Blind)',
            'Desarmar pela Força Estendido (Extended Force Disarm)',
            'Pressão da Força Estendida (Extended Force Grip)',
            'Impulso da Força Estendido (Extended Force Thrust)',
            'Mover Objeto Estendido (Extended Move Object)',
            'Convecção Aprimorada (Improved Convection)',
            'Crucitorn Aprimorado (Improved Crucitorn)',
            'Crioquinese Aprimorada (Improved Cryokinesis)',
            'Dobrar o Espaço Aprimorado (Improved Fold Space)',
            'Iluminar Aprimorado (Improved Force Light)',
            'Tempestade da Força Aprimorada (Improved Force Storm)',
            'Surgimento de Plantas Aprimorado (Improved Plant Surge)',
            'Bomba de Pensamento Aprimorada (Improved Thought Bomb)'
        ]
    },
    forceSecrets: {
        label: 'Segredos da Força',
        items: [
            'Poder Devastador (Devastating Power)',
            'Poder Distante (Distant Power)',
            'Poder de Múltiplos Alvos (Multitarget Power)',
            'Poder Acelerado (Quicken Power)',
            'Poder Moldado (Shaped Power)',
            'Poder Corrompido (Corrupted Power)',
            'Poder Debilitante (Debilitating Power)',
            'Poder Ampliado (Enlarged Power)',
            'Poder Puro (Pure Power)',
            'Poder Remoto (Remote Power)',
            'Poder Prolongado (Extend Power)',
            'Poder Vinculado (Linked Power)',
            'Poder Incondicional (Unconditional Power)',
            'Mestre do Saber do Holocron (Holocron Loremaster)',
            'Mentor (Mentor)'
        ]
    },
    healing: {
        label: 'Cura',
        items: [
            'Recuperar o Fôlego (Second Wind)',
            'Cura Natural (Descanso)',
            'Primeiros Socorros',
            'Cirurgia',
            'Reanimar',
            'Injetor de Adrenalina',
            'Microrrobôs de Reparação',
            'Medpac de Combate',
            'Medpac de Combate Avançado'
        ]
    }
};
