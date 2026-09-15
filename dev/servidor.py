"""Servidor local para desenvolvimento, sem cache (CSS/JS sempre atualizados).

Uso, na raiz do projeto:  python dev/servidor.py [porta]
Depois abra http://localhost:8765/star_wars_firebase.html
ou a pré-visualização sem login: http://localhost:8765/dev/preview.html
"""

import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    root = Path(__file__).resolve().parent.parent
    handler = partial(NoCacheHandler, directory=str(root))
    print(f"Servindo {root} em http://localhost:{port}")
    ThreadingHTTPServer(("", port), handler).serve_forever()
