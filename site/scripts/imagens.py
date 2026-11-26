# Converte as fotos de /imagens-originais (PNG/JPG/WEBP) para WebP otimizado nos caminhos do site.
# Uso (da pasta site):  python3 scripts/imagens.py
# Mapeamento destino -> nome da foto original em scripts/imagens.json
import json, os, glob
from PIL import Image, ImageFilter, ImageOps
BASE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(BASE); ORIG = os.path.join(os.path.dirname(SITE), 'imagens-originais')
def alvo(path):
    n = os.path.basename(path)
    if 'mapa-' in n: return (1200, 450)
    if n.startswith('cta-'): return (1200, 500)
    if 'hero' in n: return (1200, 800)
    if n.startswith('equipamento-'): return (600, 400)
    return (800, 600)
mapa = json.load(open(os.path.join(BASE, 'imagens.json')))
for dest, chave in mapa.items():
    achados = [p for p in glob.glob(os.path.join(ORIG, chave + '.*'))]
    if not achados: print('sem original:', chave); continue
    im = Image.open(achados[0]).convert('RGB')
    w, h = alvo(dest)
    im = ImageOps.fit(im, (w, h), Image.LANCZOS, centering=(0.5, 0.5))
    if im.width > 600: im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
    out = os.path.join(SITE, 'public', dest.lstrip('/'))
    os.makedirs(os.path.dirname(out), exist_ok=True)
    im.save(out, 'WEBP', quality=80, method=6)
    print(f'ok {dest} <- {chave} ({w}x{h}, {os.path.getsize(out)//1024} KB)')
