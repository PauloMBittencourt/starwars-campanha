# Star Wars — Campanha

Ficha de personagem de Star Wars Saga Edition, em português. O site usa HTML, CSS e JavaScript diretamente, com autenticação e salvamento no Firebase. Não há etapa de build.

## Estrutura

```text
star_wars_firebase.html       Página principal do site
css/                         Estilos da interface
js/                          Comportamento da ficha, Biblioteca e Firebase
  dados/                     Catálogos, descrições e regras do jogo
img/                         Imagens usadas pelo site, separadas por categoria
dev/
  preview/                   Site com fichas fictícias, sem login nem Firebase
  testes/                    Verificações automatizadas
  importadores/              Importação do livro e de textos de classes
  ferramentas/               Utilitários, como o índice de imagens da Biblioteca
  referencias/               Fontes de consulta e material de trabalho
    fontes-poderes.json      Referências da revisão dos Poderes da Força
    poderes/                 Referências visuais permanentes e prompts
    especies/                Fontes e originais para editar ícones de espécies
    icones-originais/        Acervo que estava em saga-crawler/static/features
    icones-reserva/          Imagens que estavam em img/sem-uso
output/                      Saídas temporárias locais; ignoradas pelo Git
AGENTS.md                    Orientações do projeto para os assistentes
```

As referências são preservadas para consulta. Uma imagem aprovada para uso no site deve ser colocada na categoria correspondente de `img/`. Tentativas e saídas temporárias ficam em `output/`.

## Onde alterar cada parte

| O que mudar | Arquivo ou pasta |
| --- | --- |
| Lista de poderes, aptidões e talentos | `js/dados/biblioteca.js` |
| Descrições completas e tabelas da Biblioteca | `js/dados/biblioteca-detalhes.js` |
| Tela da Biblioteca | `js/referencia.js` |
| Seleção de talentos, aptidões e poderes na ficha | `js/talentos.js` |
| Classes e progressão | `js/dados/classes.js`, `js/dados/progressao.js` |
| Espécies e suplementos | `js/dados/especies*.js` |
| Usos das perícias | `js/dados/pericias-usos.js` |
| Inventário e ataques | `js/equipamentos.js`, `js/ataques.js` |
| Aparência | `css/estilos.css` |
| Imagens da Biblioteca | `img/` e `js/dados/imagens-biblioteca.js` |

## Abrir localmente

Na raiz deste repositório, execute:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

- Site com Firebase: <http://127.0.0.1:8765/star_wars_firebase.html>
- Pré-visualização com fichas fictícias: <http://127.0.0.1:8765/dev/preview/>
- Biblioteca na pré-visualização: <http://127.0.0.1:8765/dev/preview/#biblioteca>
- Equipamentos na pré-visualização: <http://127.0.0.1:8765/dev/preview/#equipamentos>

Use a pré-visualização para experimentar mudanças sem editar as fichas salvas dos jogadores. O endereço público da página principal continua sendo `star_wars_firebase.html`.

## Verificações

Os testes usam Node.js, sem instalar pacotes. Para executar todos no PowerShell, a partir da raiz:

```powershell
Get-ChildItem dev/testes/verificar-*.cjs | ForEach-Object {
    node $_.FullName
    if ($LASTEXITCODE -ne 0) { throw "Falhou: $($_.Name)" }
}
```

## Atualizar dados e imagens

- Índice de imagens: abra `dev/ferramentas/atualizar-imagens-biblioteca.html`, selecione a pasta `img/` e salve o arquivo gerado em `js/dados/imagens-biblioteca.js`.
- Textos das classes: `node dev/importadores/importar-textos-classes.cjs caminho-do-original.html --check` confere o conteúdo. Sem `--check`, o script atualiza os textos locais.
- Perícias do livro: `python dev/importadores/importar-pericias-livro.py caminho-do-livro.pdf`. Requer `pypdfium2` e regrava `js/dados/pericias-usos.js`; confira as alterações antes de publicar.

As fontes baixadas em `dev/referencias/especies/fontes/` são locais e continuam ignoradas pelo Git. As referências permanentes, os originais e os prompts em `dev/referencias/` podem ser versionados.
