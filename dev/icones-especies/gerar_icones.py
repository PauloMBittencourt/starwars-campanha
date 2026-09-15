"""Gera os ícones de raças (estilo SWTOR) em img/especies/.

Uso, na raiz do projeto:
    python dev/icones-especies/gerar_icones.py            -> gera todas as raças do recortes.json
    python dev/icones-especies/gerar_icones.py wookiee    -> gera só as raças informadas

Como funciona:
  1. Recorta a moldura do ícone img/especies/originais/clawdite.png (fica idêntica em todos).
  2. Cria o fundo azul padrão.
  3. Para cada raça do recortes.json: apaga o fundo da imagem em fontes/, recorta do rosto
     ao busto e monta fundo + retrato + moldura em 256x256.
  4. Ícones já prontos colocados em img/especies/originais/ são só reduzidos para 256x256.

Campos do recortes.json:
  arquivo = nome da imagem dentro de fontes/
  x       = centro horizontal do recorte, em % da largura da imagem
  y       = topo do recorte, em % da altura da imagem
  lado    = lado do quadrado, em % da largura da imagem (maior = mais "zoom out")
  limiar  = tolerância para apagar o fundo (maior apaga mais; padrão 60)
  fundo   = "remover" (padrão), "claros" (também apaga tons claros soltos) ou "manter"
"""
import json
import sys
import warnings
from pathlib import Path

try:
    from PIL import Image, ImageChops, ImageDraw, ImageFilter
except ImportError:
    sys.exit('Falta a biblioteca Pillow. Instale com:  python -m pip install --user Pillow')

BASE = Path(__file__).resolve().parent
REPO = BASE.parents[1]
CONFIG = BASE / 'recortes.json'
SOURCES = BASE / 'fontes'
ORIGINALS = REPO / 'img' / 'especies' / 'originais'
TEMPLATE = ORIGINALS / 'clawdite.png'
OUTPUT = REPO / 'img' / 'especies'
FINAL_SIZE = 256
SENTINEL = (255, 0, 254)


def mask_of_sentinel(image_rgb):
    mask = Image.new('L', image_rgb.size, 0)
    mask.putdata([255 if px == SENTINEL else 0 for px in image_rgb.getdata()])
    return mask


def flood_region(image_rgb, seeds, thresh):
    """Máscara (L) com as áreas alcançadas pelo flood fill a partir das sementes."""
    work = image_rgb.copy()
    for seed in seeds:
        if work.getpixel(seed) != SENTINEL:
            ImageDraw.floodfill(work, seed, SENTINEL, thresh=thresh)
    return mask_of_sentinel(work)


def square_box(box):
    """Menor quadrado centrado que contém a caixa (evita distorcer ao redimensionar)."""
    left, top, right, bottom = box
    side = max(right - left, bottom - top)
    x0 = round((left + right - side) / 2)
    y0 = round((top + bottom - side) / 2)
    return (x0, y0, x0 + side, y0 + side)


def build_frame():
    """Separa a moldura do ícone de referência: devolve (moldura RGBA, máscara do miolo, caixa da moldura)."""
    ref = Image.open(TEMPLATE).convert('RGBA')
    rgb = ref.convert('RGB')
    w, h = rgb.size

    # Miolo: tudo que o flood fill alcança a partir do centro sem atravessar a borda preta
    barrier = Image.new('L', rgb.size)
    barrier.putdata([255 if sum(px) > 40 else 0 for px in rgb.getdata()])
    fill = Image.merge('RGB', [barrier] * 3)
    ImageDraw.floodfill(fill, (w // 2, h // 2), SENTINEL, thresh=0)
    reached = mask_of_sentinel(fill)

    # Fecha os "buracos" (pixels escuros do retrato): miolo = tudo que não é alcançável por fora
    outside = Image.merge('RGB', [ImageChops.invert(reached)] * 3)
    ImageDraw.floodfill(outside, (0, 0), SENTINEL, thresh=0)
    inner = ImageChops.invert(mask_of_sentinel(outside))

    # Fundo cinza em volta da moldura vira transparente
    margin = flood_region(rgb, [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)], thresh=18)

    alpha = ImageChops.subtract(ref.getchannel('A'), ImageChops.lighter(inner, margin))
    frame = ref.copy()
    frame.putalpha(alpha)
    box = square_box(alpha.point(lambda v: 255 if v > 0 else 0).getbbox())
    return frame, inner, box


def blue_background(size, inner_box):
    """Fundo azul padrão: degradê, faixa clara em arco e scanlines."""
    w, h = size
    left, top, right, bottom = inner_box
    bg = Image.new('RGB', size)
    px = bg.load()
    cx, cy = left + (right - left) * 0.62, top + (bottom - top) * 0.38
    radius = (right - left) * 0.78
    for y in range(h):
        for x in range(w):
            d = min(1.0, ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5 / radius)
            r = int(0x1c + (0x04 - 0x1c) * d)
            g = int(0x52 + (0x18 - 0x52) * d)
            b = int(0x9e + (0x38 - 0x9e) * d)
            if (y // 4) % 2 == 0:  # scanlines
                r, g, b = int(r * 0.93), int(g * 0.93), int(b * 0.93)
            px[x, y] = (r, g, b)

    arc = Image.new('L', size, 0)
    ImageDraw.Draw(arc).ellipse(
        [left + (right - left) * 0.35, top - (bottom - top) * 0.55, right + (right - left) * 0.9, top + (bottom - top) * 0.62],
        outline=70, width=int((right - left) * 0.09))
    arc = arc.filter(ImageFilter.GaussianBlur((right - left) * 0.04))
    return Image.composite(Image.new('RGB', size, (70, 120, 200)), bg, arc)


def cut_portrait(cfg):
    src = Image.open(SOURCES / cfg['arquivo']).convert('RGBA')
    w, h = src.size
    mode = cfg.get('fundo', 'remover')

    if mode in ('remover', 'claros'):
        rgb = Image.new('RGB', src.size, (255, 255, 255))
        rgb.paste(src, mask=src.getchannel('A'))
        step = max(1, min(w, h) // 40)
        seeds = [(x, 0) for x in range(0, w, step)] + [(x, h - 1) for x in range(0, w, step)] \
            + [(0, y) for y in range(0, h, step)] + [(w - 1, y) for y in range(0, h, step)]
        background = flood_region(rgb, seeds, thresh=cfg.get('limiar', 60))
        alpha = ImageChops.subtract(src.getchannel('A'), background)
        if mode == 'claros':
            # Também apaga tons claros e pouco saturados em qualquer lugar
            # (cabelo ou névoa que se confunde com o fundo branco)
            light = Image.new('L', src.size)
            light.putdata([255 if min(px) > 185 and max(px) - min(px) < 50 else 0 for px in rgb.getdata()])
            alpha = ImageChops.subtract(alpha, light)
        # tira a franja clara da borda e suaviza
        alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1))
        src.putalpha(alpha)

    side = w * cfg['lado'] / 100
    left = w * cfg['x'] / 100 - side / 2
    top = h * cfg['y'] / 100
    return src.crop((round(left), round(top), round(left + side), round(top + side)))


def make_icon(frame, inner, frame_box, background, cfg):
    left, top, right, bottom = square_box(inner.getbbox())
    portrait = cut_portrait(cfg).resize((right - left, bottom - top), Image.LANCZOS)

    canvas = Image.new('RGBA', frame.size, (0, 0, 0, 0))
    canvas.paste(background, mask=inner)
    layer = Image.new('RGBA', frame.size, (0, 0, 0, 0))
    layer.paste(portrait, (left, top), portrait)
    layer.putalpha(ImageChops.multiply(layer.getchannel('A'), inner))
    canvas = Image.alpha_composite(canvas, layer)
    canvas = Image.alpha_composite(canvas, frame)
    return canvas.crop(frame_box).resize((FINAL_SIZE, FINAL_SIZE), Image.LANCZOS)


def shrink_reference(path, frame_box):
    """Reduz um ícone já pronto (como os de originais/) para o mesmo tamanho e recorte."""
    ref = Image.open(path).convert('RGBA')
    rgb = ref.convert('RGB')
    w, h = rgb.size
    margin = flood_region(rgb, [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)], thresh=18)
    ref.putalpha(ImageChops.subtract(ref.getchannel('A'), margin))
    return ref.crop(frame_box).resize((FINAL_SIZE, FINAL_SIZE), Image.LANCZOS)


def export_editor_layers(frame, inner, frame_box, background):
    """Camadas do editor de ícones do site (js/especies.js): moldura e fundo azul em 512x512."""
    import base64

    size = 512
    layers_dir = REPO / 'img' / 'icones'
    layers_dir.mkdir(exist_ok=True)
    frame.crop(frame_box).resize((size, size), Image.LANCZOS).save(layers_dir / 'moldura.png', optimize=True)
    blue = background.convert('RGBA')
    blue.putalpha(inner)
    blue.crop(frame_box).resize((size, size), Image.LANCZOS).save(layers_dir / 'fundo-azul.png', optimize=True)

    # As mesmas imagens em base64 dentro de um .js: abrindo o site direto do disco (file://),
    # o Chrome não deixa exportar um canvas que desenhou imagens carregadas de arquivo.
    data = {
        name: 'data:image/png;base64,' + base64.b64encode((layers_dir / f'{file}.png').read_bytes()).decode('ascii')
        for name, file in (('fundo', 'fundo-azul'), ('moldura', 'moldura'))
    }
    script = ('// Gerado por: python dev/icones-especies/gerar_icones.py --camadas (não editar à mão)\n'
              f'window.ICON_LAYER_DATA = {json.dumps(data)};\n')
    (REPO / 'js' / 'dados' / 'icones-camadas.js').write_text(script, encoding='utf-8')


def main():
    config = json.loads(CONFIG.read_text(encoding='utf-8'))
    args = sys.argv[1:]

    if '--camadas' in args:
        print('Gerando camadas do editor (leva alguns segundos)...')
        frame, inner, frame_box = build_frame()
        background = blue_background(frame.size, square_box(inner.getbbox()))
        export_editor_layers(frame, inner, frame_box, background)
        print('  gerado  img/icones/moldura.png, img/icones/fundo-azul.png e js/dados/icones-camadas.js')
        return

    only = set(args)

    unknown = only - set(config) - {p.stem for p in ORIGINALS.glob('*.png')}
    if unknown:
        sys.exit(f'Raça não encontrada no recortes.json nem em originais/: {", ".join(sorted(unknown))}')

    print('Preparando moldura e fundo (leva alguns segundos)...')
    frame, inner, frame_box = build_frame()
    background = blue_background(frame.size, square_box(inner.getbbox()))

    for slug, cfg in config.items():
        if only and slug not in only:
            continue
        source = SOURCES / cfg['arquivo']
        if not source.exists():
            print(f'  PULADO {slug}: não achei {source.relative_to(REPO)}')
            continue
        make_icon(frame, inner, frame_box, background, cfg).save(OUTPUT / f'{slug}.png', optimize=True)
        print(f'  gerado  img/especies/{slug}.png')

    for original in sorted(ORIGINALS.glob('*.png')):
        if not only or original.stem in only:
            shrink_reference(original, frame_box).save(OUTPUT / f'{original.stem}.png', optimize=True)
            print(f'  reduzido img/especies/{original.stem}.png (de originais/)')


if __name__ == '__main__':
    warnings.filterwarnings('ignore', category=DeprecationWarning)
    main()
