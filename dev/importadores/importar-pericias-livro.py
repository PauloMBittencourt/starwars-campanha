"""Importa o capítulo completo de perícias do PDF PT-BR fornecido pelo usuário.
Uso: python dev/importadores/importar-pericias-livro.py caminho-do-livro.pdf
Requer pypdfium2; o site gerado continua sem dependências adicionais.
"""
import json
import re
import subprocess
import sys
from pathlib import Path
import pypdfium2 as pdfium

ROOT = Path(__file__).resolve().parents[2]
PDF = pdfium.PdfDocument(sys.argv[1])

def page_text(number):
    text = PDF[number - 1].get_textpage().get_text_range().replace('\r', '')
    text = re.sub(r'\s*' + str(number - 1) + r'\s*$', '', text)
    continues_word = text.endswith('\ufffe')
    text = text.replace('\ufffe\n', '').replace('\ufffe', '').replace('\u00ad\n', '')
    text = re.sub(r'(?m)^' + str(number - 1) + r'\s*$', '', text)
    text = re.sub(r'(?<=[a-zÀ-ÿ])' + str(number - 1) + r'\n(?=[a-zÀ-ÿ])', '', text)
    text = re.sub(r'(?<=[A-Za-zÀ-ÿ])-\n(?=[a-zà-ÿ])', '', text)
    text = re.sub(r'(?<=\w)\n-(?=[a-zà-ÿ])', '-', text)
    for quote in [r'“UH, EU TIVE.*?-\s*HAN SOLO', r'“EU PREFIRO.*?-\s*HAN SOLO', r'“PARA UM MECÂNICO.*?-\s*C\s*-\s*3PO', r'“A HABILIDADE.*?-\s*DARTH VADER']:
        text = re.sub(quote, '', text, flags=re.S)
    return text + ('\ufffe' if continues_word else '')

def norm(text):
    text = text.replace('\ufffe\n', '').replace('\ufffe', '')
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    output = ''
    for line in lines:
        separator = '\n\n' if output.endswith('.') and re.match(r'[A-ZÀ-Ý]', line) else ' '
        output += (separator if output else '') + line
    return re.sub(r'(?<=[a-zà-ÿ])-\s+(?=[a-zà-ÿ])', '', output).strip()

def table(caption, headers, rows):
    return {'caption': caption, 'headers': headers, 'rows': rows}

def take_table(raw, start, end):
    begin = raw.index(start)
    finish = raw.index(end, begin) if end else len(raw)
    return raw[:begin] + raw[finish:]

# O cabeçalho e os usos são marcadores do próprio livro, não reconstruções resumidas.
CONFIG = [
    ('acrobacia', 'ACROBACIA (DES)', [
        ('Equilibrar-se', 'Equilíbrio:'), ('Atravessar terreno difícil', 'Cruzar Terreno Difícil (Somente Treinado):'),
        ('Escapar de amarras', 'Escapar de Amarras:'), ('Deitar-se', 'Cair Deitado (Somente Treinado):'),
        ('Reduzir dano de queda', 'Reduzir Dano de Queda (Somente Treinado):'), ('Levantar-se', 'Levantando do Chão (Somente Treinado):'),
        ('Acrobacia em combate', 'Cambalhotas (Somente Treinado):')]),
    ('conhecimentos', 'CONHECIMENTO (INT)', [('Conhecimento comum', 'Conhecimento Comum:'), ('Conhecimento especializado', 'Conhecimento de Especialista (Somente Treinado):')]),
    ('enganacao', 'ENGANAR (CAR)', [('Aparência enganosa', 'Aparência Enganosa:'), ('Informação enganosa', 'Informação Enganosa:'),
        ('Criar distração para esconder-se', 'Criar uma Distração para Se Esconder:'), ('Fintar', 'Finta:')]),
    ('escalar', 'ESCALAR (VIG)', [('Escalar superfície', 'Escalar Superfície:'), ('Escalada acelerada', 'Escalada Acelerada:'),
        ('Agarrar-se durante uma queda', 'Interrompendo a Queda:'), ('Criar apoios', 'Criando Apoios para as Mãos e Pés:')]),
    ('furtividade', 'FURTIVIDADE (DES)', [('Mover-se furtivamente', 'Passar Escondido:'), ('Esconder objeto', 'Esconder Item:'),
        ('Criar distração para esconder-se', 'Criar uma Distração para Se Esconder:'), ('Bater carteira', 'Furtar:'),
        ('Prestidigitação', 'Prestidigitação:'), ('Atirar e esconder-se', 'Tiro de Emboscada:')]),
    ('iniciativa', 'INICIATIVA (DES)', [('Iniciar combate', 'Começar a Batalha:'), ('Resistir a finta', 'Evitar Finta:')]),
    ('mecanica', 'MECÂNICA (INT)', [('Desativar dispositivo', 'Desativar Dispositivo (requer kit de segurança):'),
        ('Manipular explosivos', 'Manejar Explosivos:'), ('Armar detonador', 'Armar Detonador:'), ('Plantar dispositivo explosivo', 'Plantar Dispositivo Explosivo:'),
        ('Desarmar dispositivo explosivo', 'Desarmar Dispositivo Explosivo (requer um kit de segurança):'), ('Reparo improvisado', 'Reparo Improvisado:'),
        ('Modificar droide', 'Modificar Dróide (requer kit de ferramentas):'), ('Recarregar escudos', 'Recarregar Escudos:'), ('Regular energia', 'Regular Potência:'),
        ('Reparar', 'Reparar (requer kit de ferramentas):'), ('Reparar droide', 'Reparar Dróide (requer um kit de ferramentas):'), ('Reparar objeto', 'Reparar Objeto:')]),
    ('montaria', 'MONTAR (DES)', [('Cavalgar', 'Cavalgar Montaria:'), ('Amortecer queda', 'Amortecer a Queda:'), ('Usar montaria como cobertura', 'Usar Montaria como Cobertura:'),
        ('Controlar montaria em combate', 'Controlar Montaria em Batalha:'), ('Guiar com os joelhos', 'Guiar com Joelhos:'),
        ('Montar ou desmontar rapidamente', 'Montar ou Desmontar Rapidamente:'), ('Permanecer na sela', 'Permanecer sobre a Sela:'), ('Saltar com a montaria', 'Saltar:')]),
    ('nadar', 'NADAR (VIG)', [('Nadar', 'Natação:')]),
    ('percepcao', 'PERCEPÇÃO (SAB)', [('Evitar surpresa', 'Evitar Surpresa:'), ('Escutar conversa', 'Escutar às Escondidas:'), ('Ouvir ruído', 'Ouvir Sons Distantes ou Ambientes:'),
        ('Notar alvos', 'Perceber Alvos:'), ('Procurar', 'Procurar:'), ('Perceber engano', 'Sentir Enganação:'), ('Perceber influência', 'Sentir Influência:')]),
    ('persuasao', 'PERSUASÃO (CAR)', [('Mudar atitude', 'Mudar Atitude:'), ('Barganhar', 'Pechinchar:'), ('Intimidar', 'Intimidar:')]),
    ('pilotar', 'PILOTAR (DES)', [('Evitar colisão', 'Evitar Colisão:'), ('Perseguição (briga de cão)', 'Perseguição (Briga de Cão):'),
        ('Engajar o inimigo', 'Se Engajando contra o Inimigo (Somente Treinado):'), ('Aumentar velocidade', 'Aumentar Velocidade do Veículo (Somente Treinado):'), ('Colidir intencionalmente', 'Bater:')]),
    ('obterInfo', 'REUNIR INFORMAÇÃO (CAR)', [('Notícias e rumores', 'Descobrir Notícias e Rumores:'), ('Informação secreta', 'Descobrir Informação Secreta:'), ('Localizar indivíduo', 'Localizar Indivíduo:')]),
    ('saltar', 'SALTAR (VIG)', [('Salto em distância', 'Salto em Distância:'), ('Salto em altura', 'Salto em Altura:'), ('Saltar para baixo', 'Pular pra Baixo:')]),
    ('sobrevivencia', 'SOBREVIVÊNCIA (SAB)', [('Sobrevivência básica', 'Sobrevivência Básica:'), ('Suportar temperaturas extremas', 'Tolerar Temperaturas Extremas (requer kit de campo):'),
        ('Determinar direção', 'Intuir Direção:'), ('Rastrear', 'Rastrear (Somente Treinado):')]),
    ('resistencia', 'TOLERÂNCIA (CON)', [('Marcha forçada', 'Marcha Forçada:'), ('Prender a respiração', 'Segurar Fôlego:'), ('Suportar fome', 'Ignorar Fome:'), ('Suportar sede', 'Ignorar Sede:'),
        ('Correr', 'Correr:'), ('Dormir de armadura', 'Dormir na Armadura:'), ('Nadar por longos períodos', 'Nadar/ Boiar na Água:')]),
    ('primeiros', 'TRATAR FERIMENTO (SAB)', [('Primeiros socorros', 'Primeiros Socorros (requer um medpac):'), ('Cuidados prolongados', 'Cuidados à Longo Prazo:'),
        ('Cirurgia', 'Realizar Cirurgia (Somente Treinado; requer um kit de cirurgia):'), ('Cirurgia: curar dano', 'Curar Dano:'), ('Instalar prótese cibernética', 'Instalar uma Prótese Cibernética:'),
        ('Reanimar', 'Revivificar (Somente Treinado; requer um kit de medicina):'), ('Tratar doença', 'Tratar Doença (Somente Treinado; requer um kit de medicina):'),
        ('Tratar veneno', 'Tratar Veneno (Somente Treinado; requer um kit de medicina):'), ('Tratar radiação', 'Tratar Radiação (Somente Treinado; requer um kit de medicina):')]),
    ('usarForca', 'USAR A FORÇA (CAR)', [('Ativar poder da Força', 'Ativar Poder da Força (Somente Treinado):'), ('Transe da Força', 'Transe da Força (Somente Treinado):'),
        ('Mover objeto leve', 'Mover Objeto Leve (Somente Treinado):'), ('Consultar sentimentos', 'Buscar em seus Sentimentos:'), ('Sentir a Força', 'Sentir a Força (Somente Treinado):'),
        ('Sentir arredores', 'Sentir os Arredores:'), ('Telepatia', 'Telepatia:')]),
    ('usarComputador', 'USAR COMPUTADOR (INT)', [('Acessar informações', 'Acessar Informação (requer que a atitude do computador seja de\nindiferente para melhor):'),
        ('Astrogação', 'Astronavegar (Somente Treinado):'), ('Desativar ou apagar programa', 'Desativar ou Apagar Programa (Somente Treinado; a atitude do\ncomputador deve ser prestativa):'),
        ('Melhorar acesso', 'Melhorar Acesso (Somente Treinado):'), ('Comando rotineiro', 'Emitir Comando de Rotina (requer que a atitude do computador\nseja amistosa ou melhor):'),
        ('Reprogramar droide', 'Reprogramar Dróide (Somente Treinado; requer kit de ferramentas):')]),
]

body = '\n'.join(page_text(page) for page in range(63, 79)).replace('\ufffe\n', '')
existing = subprocess.check_output(['node', '-e', "const fs=require('fs'),vm=require('vm'),c=vm.createContext({});vm.runInContext(fs.readFileSync('js/dados/pericias-usos.js','utf8'),c);process.stdout.write(vm.runInContext('JSON.stringify({skills:SKILL_USES,tactics:KNOWLEDGE_TACTICS_USES})',c));"], cwd=ROOT)
data = json.loads(existing)

def source_pages(heading, next_heading):
    start = next(page for page in range(63, 79) if heading in page_text(page))
    end = next(page for page in range(start, 79) if next_heading and next_heading in page_text(page)) if next_heading else 78
    return f'Star Wars RPG — Edição Saga (v1.05), pp. {start - 1}–{end - 1} (PDF pp. {start}–{end})'

for index, (key, heading, markers) in enumerate(CONFIG):
    next_heading = CONFIG[index + 1][1] if index + 1 < len(CONFIG) else None
    begin = body.index(heading) + len(heading)
    end = body.index(next_heading, begin) if next_heading else len(body)
    block = body[begin:end].strip()
    positions = [block.index(marker) for _, marker in markers]
    if positions != sorted(positions):
        raise ValueError(f'{key}: ordem de usos inválida')
    tail_start = len(block)
    for tail in ['Re-tentar:', 'Especial:']:
        found = block.find(tail, positions[-1])
        if found >= 0:
            tail_start = min(tail_start, found)
    label = source_pages(heading, next_heading)
    reference = data['skills'][key]
    additions = [use for use in reference['uses'] if use.get('supplement')]
    reference['description'] = norm(block[:positions[0]])
    reference['rules'] = norm(block[tail_start:])
    reference['sourceLabel'] = label
    reference['note'] = ''
    reference.pop('source', None)
    core = []
    for number, (title, marker) in enumerate(markers):
        last = positions[number + 1] if number + 1 < len(markers) else tail_start
        raw = block[positions[number] + len(marker):last].strip()
        trained = 'Somente Treinado' in marker or key == 'mecanica' or title in ['Cirurgia: curar dano', 'Instalar prótese cibernética']
        use = {'title': title, 'text': norm(raw), 'trainedOnly': trained, 'supplement': False, 'sourceLabel': label}
        if '(' in marker:
            use['requirements'] = marker.split('(', 1)[1].rsplit(')', 1)[0]
        use['_raw'] = raw
        core.append(use)
    reference['uses'] = core + additions
    if key == 'pilotar':
        reference['uses'].insert(0, {'title': 'Operar veículo', 'text': reference['description'], 'trainedOnly': False, 'supplement': False, 'sourceLabel': label})
    if key == 'mecanica':
        help_text = page_text(62).split('COOPERAÇÃO\n', 1)[1].split('TESTES DE HABILIDADE', 1)[0]
        reference['uses'].insert(0, {'title': 'Ajudar outro', 'text': norm(help_text), 'trainedOnly': False, 'supplement': False, 'sourceLabel': 'Livro PT-BR, pp. 61 e 68 (PDF pp. 62 e 69)'})

# Tabelas do capítulo são dados estruturados, para não virarem linhas soltas ou perderem colunas.
def use(key, title):
    return next(item for item in data['skills'][key]['uses'] if item['title'] == title)

balance = use('acrobacia', 'Equilibrar-se')
balance['text'] = norm(take_table(balance.pop('_raw'), 'SUPERFÍCIE ESTREITA', 'Você é considerado'))
balance['table'] = table('Superfície estreita', ['Largura da superfície', 'CD de Acrobacia'], [['8–15 cm', '10'], ['4–7 cm', '15'], ['Menos de 4 cm', '20']])
escape = use('acrobacia', 'Escapar de amarras')
escape['text'] = norm(take_table(escape.pop('_raw'), 'CONTENÇÃO CD', None))
escape['table'] = table('Contenções', ['Contenção', 'CD de Acrobacia'], [['Cordas', 'Teste de Destreza do oponente + 10'], ['Rede', '15'], ['Algemas', '25']])

appearance = use('enganacao', 'Aparência enganosa')
raw = appearance.pop('_raw')
start = raw.index('TABELA 4-3:')
end = raw.index('de Enganar. Em todos os casos', start)
table_raw = raw[start:end]
rows = []
deception_levels = [('Simples', '+5'), ('Moderada', '+0'), ('Difícil', '-5'), ('Incrível', '-10'), ('Absurda', '-20')]
for number, (name, modifier) in enumerate(deception_levels):
    match = re.search(re.escape(name) + r'\s+' + re.escape(modifier), table_raw)
    finish = re.search(re.escape(deception_levels[number + 1][0]) + r'\s+' + re.escape(deception_levels[number + 1][1]), table_raw).start() if number < 4 else len(table_raw)
    rows.append([name, modifier, norm(table_raw[match.end():finish])])
appearance['text'] = norm(raw[:start] + raw[end:])
data['skills']['enganacao']['tables'] = [table('Tabela 4-3: Enganações', ['Enganação', 'Modificador do teste', 'Descrição'], rows)]

climb = use('escalar', 'Escalar superfície')
climb['text'] = norm(take_table(climb.pop('_raw'), 'CD EXEMPLO DE MURO', '*Estes modificadores'))
climb['table'] = table('Superfícies e modificadores cumulativos', ['CD / ajuste', 'Superfície ou circunstância'], [
    ['0', 'Inclinação muito acentuada para subir caminhando; corda com nós paralela a um muro.'], ['5', 'Corda paralela a um muro ou corda com nós, mas não ambos.'],
    ['10', 'Superfície com apoios firmes para mãos e pés, como parede muito irregular.'], ['15', 'Apoios adequados para mãos e pés, naturais ou artificiais; rocha natural muito irregular, árvore ou corda sem nós.'],
    ['20', 'Superfície desigual com apoios estreitos para mãos e pés.'], ['25', 'Superfície irregular, como parede de rocha natural ou de tijolos.'], ['25', 'Saliência ou teto com apoios para mãos, mas não para pés.'],
    ['Impossível', 'Superfície perfeitamente lisa, plana e vertical.'], ['−10', 'Duto ou local onde seja possível apoiar-se entre duas paredes opostas.'], ['−5', 'Canto com paredes perpendiculares.'], ['+5', 'Superfície escorregadia.']])

device = use('mecanica', 'Desativar dispositivo')
device['text'] = norm(take_table(device.pop('_raw'), 'DISPOSITIVO CD*', '*Se você'))
device['table'] = table('Complexidade do dispositivo', ['Dispositivo', 'CD', 'Exemplos'], [
    ['Simples', '15', 'Sabotar dispositivo mecânico, emperrar blaster, desativar tranca mecânica básica.'], ['Complicado', '20', 'Sabotar dispositivo eletrônico, desativar tranca eletrônica básica.'],
    ['Complexo', '25', 'Desarmar sistema de segurança eletrônico ou desativar tranca mecânica/eletrônica complexa.']])

ride = use('montaria', 'Cavalgar')
ride['text'] = norm(take_table(ride.pop('_raw'), 'TAREFA DE MONTARIA', None))
data['skills']['montaria']['tables'] = [table('Tarefas de montaria', ['Tarefa', 'CD'], [['Guiar com os joelhos', '10'], ['Permanecer na sela', '10'], ['Usar cobertura', '15'], ['Amortecer queda', '15'], ['Saltar', '15'], ['Controlar montaria em batalha', '20'], ['Montar ou desmontar rapidamente', '20; aplica penalidade de armadura']])]

swim = use('nadar', 'Nadar')
swim['text'] = norm(take_table(swim.pop('_raw'), 'SITUAÇÃO CD', None))
swim['table'] = table('Condições da água', ['Situação', 'CD'], [['Águas calmas', '10'], ['Águas agitadas', '15'], ['Águas violentas', '20']])

intimidate = use('persuasao', 'Intimidar')
raw = intimidate.pop('_raw')
raw = take_table(raw, 'SITUAÇÃO MODIFICADOR', 'Você não pode forçar')
raw = take_table(raw, 'TABELA 4-4:', 'Uma criatura que você conseguir intimidar')
intimidate['text'] = norm(raw)
intimidate['table'] = table('Ameaça percebida pelo alvo', ['Situação', 'Modificador'], [['Alvo inofensivo ou completamente à sua mercê', '+5'], ['Alvo claramente em menor número ou desvantagem', '+0'], ['Alvo equilibrado com você', '−5'], ['Você claramente em menor número ou desvantagem', '−10'], ['Você inofensivo ou completamente à mercê do alvo', '−15']])
use('persuasao', 'Barganhar')['table'] = table('Pechinchar', ['Atitude', 'CD'], [['Pouco amistoso', '30'], ['Indiferente', '25'], ['Amistoso', '20'], ['Prestativo', '15']])
data['skills']['persuasao']['tables'] = [table('Tabela 4-4: Passos da atitude', ['Atitude', 'Descrição'], [['Hostil', 'Assume riscos para ferir você, normalmente atacando de imediato.'], ['Pouco amistoso', 'Deseja seu mal, mas não sairá do caminho para ferir você.'], ['Indiferente', 'Não considera você ameaça nem aliado; provavelmente não vai atacar.'], ['Amistoso', 'Deseja seu bem, mas não assume riscos de vida em seu favor.'], ['Prestativo', 'Assume riscos para ajudar você.']])]

track = use('sobrevivencia', 'Rastrear')
raw = track.pop('_raw')
raw = take_table(raw, 'SUPERFÍCIE CD', 'Chão Macio:')
raw = take_table(raw, 'CIRCUNSTÂNCIA\nMOD.', None)
track['text'] = norm(raw)
track['tables'] = [table('Superfície rastreada', ['Superfície', 'CD'], [['Chão macio', '10'], ['Chão firme', '20'], ['Chão duro', '30']]), table('Modificadores para rastrear', ['Circunstância', 'Modificador da CD'], [['Cada grupo de 3 criaturas rastreadas', '−1'], ['Cada dia desde que a trilha foi aberta', '+1'], ['Cada hora de chuva desde que a trilha foi aberta', '+1'], ['Neve fresca cobrindo a trilha', '+5'], ['Visibilidade ruim', '+5'], ['Alvo esconde a trilha e move-se à metade da velocidade', '+5'], ['Maior criatura: Enorme ou maior', '−10'], ['Maior criatura: Grande', '−5'], ['Maior criatura: Médio', '+0'], ['Maior criatura: Pequeno', '+5'], ['Maior criatura: Miúdo ou menor', '+10']])]

telepathy = use('usarForca', 'Telepatia')
telepathy['text'] = norm(take_table(telepathy.pop('_raw'), 'DISTÂNCIA DA TELEPATIA', None))
telepathy['table'] = table('Distância da telepatia', ['Distância', 'CD'], [['Mesmo planeta', '15'], ['Mesmo sistema', '20'], ['Mesma região/quadrante da galáxia', '25'], ['Região/quadrante diferente da galáxia', '30']])

information = use('usarComputador', 'Acessar informações')
information['text'] = norm(take_table(information.pop('_raw'), 'INFORMAÇÃO CD TEMPO', None))
information['table'] = table('Informações em computadores', ['Informação', 'CD', 'Tempo necessário'], [['Comum', '15', '1 minuto (10 rodadas)'], ['Específica', '20', '10 minutos'], ['Privada', '25', '1 hora'], ['Secreta; exige computador prestativo', '30', '1 dia (8 horas)']])
ref = data['skills']['usarComputador']
ref['rules'] = ref['rules'].split('TABELA 4-5:', 1)[0].strip()
ref['tables'] = [table('Tabela 4-5: Atitude do computador', ['Atitude', 'O computador…'], [['Hostil', 'Trata você como intruso hostil e tenta rastrear sua localização e isolar sua conexão.'], ['Pouco amistoso', 'Trata você como usuário não autorizado e bloqueia acesso a programas e informações.'], ['Indiferente', 'Trata você como convidado; concede acesso não confidencial, sem contrariar comandos anteriores.'], ['Amistoso', 'Trata você como usuário autorizado; concede acesso não confidencial, sem contrariar comandos anteriores. Bônus de equipamento do computador aplica-se aos testes.'], ['Prestativo', 'Trata você como proprietário/administrador; concede acesso a todos os programas e informações, inclusive contrariando comandos anteriores. Bônus de equipamento do computador aplica-se aos testes.']])]

# As remissões necessárias para executar esses usos também ficam no modal.
def append_book(key, title, page, start, end):
    item = use(key, title)
    raw = page_text(page).split(start, 1)[1]
    if end:
        raw = raw.split(end, 1)[0]
    item['text'] += '\n\n' + norm(raw)
    item['sourceLabel'] += f'; p. {page - 1} (PDF p. {page})'

append_book('mecanica', 'Modificar droide', 198, 'MODIFICANDO DRÓIDES', 'EXEMPLOS DE DRÓIDES')
use('mecanica', 'Modificar droide')['table'] = table('Modificações de sistemas de droides', ['Sistema', 'Teste', 'Trabalho'], [
    ['Locomoção', 'Mecânica CD 25', '1 dia'], ['Processador', 'Usar Computador CD 20 e Mecânica CD 20', '1 dia'],
    ['Apêndice', 'Mecânica CD 20', '1 hora'], ['Acessório', 'Mecânica CD 15', '1 hora'], ['Ferramenta, arma ou instrumento em apêndice', 'Mecânica CD 15', '10 minutos']])
append_book('pilotar', 'Evitar colisão', 174, 'Evitar Colisão\nSomente Piloto', 'REGRAS ESPECIAIS')
append_book('pilotar', 'Perseguição (briga de cão)', 172, 'Perseguição\nSomente Piloto', 'Lutar Defensivamente')
append_book('pilotar', 'Colidir intencionalmente', 173, 'Bater\nSomente Piloto', None)
append_book('pilotar', 'Evitar colisão', 174, 'COLISÕES', 'MÍSSEIS E TORPEDOS')
collision = table('Tabela 10-3: Dano por colisão', ['Tamanho do veículo ou casualidade que colide', 'Dano'], [
    ['Colossal (estação)', '20d6 + modificador de Vig'], ['Colossal (cruzador)', '15d6 + modificador de Vig'], ['Colossal (fragata)', '10d6 + modificador de Vig'],
    ['Colossal', '8d6 + modificador de Vig'], ['Imenso', '6d6 + modificador de Vig'], ['Enorme', '4d6 + modificador de Vig'], ['Grande', '2d6 + modificador de Vig']])
for title in ['Evitar colisão', 'Colidir intencionalmente']:
    use('pilotar', title)['table'] = collision
append_book('usarComputador', 'Astrogação', 238, 'ASTRONAVEGAÇÃO', 'TABELA 13-1:')
use('usarComputador', 'Astrogação')['text'] += '\n\n' + norm('Não aplique' + page_text(238).split('1 Não aplique', 1)[1])
use('usarComputador', 'Astrogação')['table'] = table('Tabela 13-1: Modificadores de astronavegação', ['Situação', 'Modificador do teste'], [
    ['Usando computador de navegação', '+5'], ['Sem utilização de computador de navegação', '−10'], ['Sem acesso a HoloNet', '−5'], ['Tentativa de fazer o teste em uma rodada', '−10']])

for ref in data['skills'].values():
    for item in ref['uses']:
        item.pop('_raw', None)

output = '// Regras do capítulo de Perícias do livro PT-BR (v1.05), fornecido pelo usuário.\n// Gerado por dev/importadores/importar-pericias-livro.py; complementos de suplementos têm fonte própria.\n'
output += 'const SKILL_USES = ' + json.dumps(data['skills'], ensure_ascii=False, indent=4) + ';\n\n'
output += 'const KNOWLEDGE_TACTICS_USES = ' + json.dumps(data['tactics'], ensure_ascii=False, indent=4) + ';\n'
(ROOT / 'js/dados/pericias-usos.js').write_text(output, encoding='utf-8')
print('Importadas', len(CONFIG), 'perícias; usos básicos:', sum(not use.get('supplement') for ref in data['skills'].values() for use in ref['uses']))
