"""Gera js/dados/imagens-talentos.js com a lista de imagens de img/talentos/.

Uso, na raiz do projeto:  python dev/atualizar-imagens-talentos.py
Rode de novo sempre que colocar ou tirar imagens em img/talentos/.

Por que existe: o site não consegue listar uma pasta sozinho (hospedado ou em file://),
então a Biblioteca usa esta lista para saber quais talentos têm imagem.
"""
import json
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
IMAGES = REPO / 'img' / 'talentos'
OUTPUT = REPO / 'js' / 'dados' / 'imagens-talentos.js'
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}

files = sorted(p.name for p in IMAGES.iterdir() if p.suffix.lower() in EXTENSIONS)
# nome sem extensão -> nome do arquivo
index = {Path(name).stem: name for name in files}

OUTPUT.write_text(
    '// Gerado por: python dev/atualizar-imagens-talentos.py (não editar à mão)\n'
    '// Nome da imagem (sem extensão) -> arquivo em img/talentos/\n'
    f'window.TALENT_IMAGE_FILES = {json.dumps(index, indent=4)};\n',
    encoding='utf-8',
)
print(f'{len(index)} imagens listadas em {OUTPUT.relative_to(REPO)}')
