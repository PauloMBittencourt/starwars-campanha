# Ícones de raças (estilo SWTOR)

Gera os ícones de `img/especies/` a partir de imagens das raças: apaga o fundo, recorta do rosto
ao busto e coloca no fundo azul com a moldura do `img/especies/originais/clawdite.png`.

## Preparar (uma vez só)

```bash
python -m pip install --user Pillow
```

## Adicionar ou ajustar uma raça

1. **Baixe a imagem** da raça (por exemplo do [wiki](https://swse.fandom.com/wiki/Species)) e salve em
   `dev/icones-especies/fontes/`, com o nome da raça em minúsculas: `togruta.jpg`.
2. **Adicione uma linha** no `recortes.json` (copie uma parecida e troque os valores):
   ```json
   "togruta": { "arquivo": "togruta.jpg", "x": 50, "y": 5, "lado": 40, "limiar": 60 }
   ```
3. **Suba o servidor local** (na raiz do projeto) e abra a página de ajuste:
   ```bash
   python dev/servidor.py
   ```
   http://localhost:8765/dev/icones-especies/ajustar.html

   O quadrado amarelo mostra o recorte. Mude `x`, `y` e `lado` até ele pegar do topo da cabeça ao peito.
4. **Gere o ícone** (em outro terminal, na raiz do projeto):
   ```bash
   python dev/icones-especies/gerar_icones.py togruta
   ```
   Sem o nome da raça, ele gera todas (leva cerca de 1 minuto).
5. **Recarregue** a página de ajuste para ver o resultado. Repita 3–5 até ficar bom.

## O que cada campo faz

| Campo | O que é | Dica |
|---|---|---|
| `x` | centro horizontal do recorte, em % da largura | aumente para ir para a direita |
| `y` | topo do recorte, em % da altura | diminua se a cabeça ficar cortada em cima |
| `lado` | tamanho do quadrado, em % da largura | aumente para afastar, diminua para aproximar |
| `limiar` | quanto do fundo é apagado | fundo escuro: 40; branco: 60; sobrou fundo: suba; comeu o personagem: desça |
| `fundo` | `"remover"` (padrão), `"claros"` ou `"manter"` | `"claros"` apaga também manchas claras soltas; `"manter"` não apaga nada |

## Ícones que você mesmo fez

Coloque o ícone pronto (com a moldura, como o `clawdite.png`) em `img/especies/originais/`.
O script só reduz para 256×256 e salva em `img/especies/` com o mesmo nome. Não precisa de linha no `recortes.json`.

## Mudou a moldura (clawdite.png)?

Regere as camadas usadas pelo editor do site (Raças → Trocar imagem):

```bash
python dev/icones-especies/gerar_icones.py --camadas
```

Isso atualiza `img/icones/` e `js/dados/icones-camadas.js` (as mesmas imagens em base64, para o editor
conseguir baixar o PNG mesmo com o site aberto direto do disco).

## Observações

- A pasta `fontes/` fica fora do git (arte de terceiros num repositório público).
- O `clawdite.png` em `originais/` é a fonte da moldura: não apague.
