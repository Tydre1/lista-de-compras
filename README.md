
<h1 align="center">7 Days of Code Challenge - Meu Gerenciador de Lista de Compras 🛒</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Desafio-7%20Days%20of%20Code-brightgreen.svg" alt="Desafio 7 Days of Code">
</p>

<p align="center">
    <em>Hey pessoal! Aqui está um dos desafios que participei no incrível evento <strong>7 Days of Code</strong>. Foi super divertido criar meu próprio gerenciador de lista de compras usando JavaScript.</em>
</p>


## Screenshot do prompt:

![lista](https://github.com/Tydre1/lista-de-compras/assets/132526838/d3770397-2830-45eb-855b-0fdb4582ee74)


## Sobre o Desafio

Estou animado para compartilhar com vocês um dos desafios que enfrentei durante o <strong>7 Days of Code</strong>. Neste projeto, eu me propus a criar um gerenciador de lista de compras básico usando JavaScript.

## Como Funciona

1. Eu iniciei o programa e ele me perguntou se eu queria adicionar algo ao carrinho.
2. Quando respondi "Sim", ele pediu o nome do item e a categoria (frutas, laticínios, congelados ou doces).
3. Os itens que eu adicionei foram organizados automaticamente nas categorias correspondentes.
4. Quando decidi que não queria adicionar mais itens, o programa exibiu a lista de compras formatada.

## Código JavaScript

```javascript
// Parte do código JavaScript que criei para o meu gerenciador de lista de compras
if (desejo == "Sim") {
                let comidaInserida = prompt("Qual comida você deseja inserir?");
                let qualCategoria = prompt('Em qual categoria ela se encaixa: frutas, laticínios, congelados, doces.');

             if (qualCategoria == "frutas") {
                listaDeCompras.frutas.push(comidaInserida);
            } else if (qualCategoria == "laticínios") {
                listaDeCompras.laticinios.push(comidaInserida);
            } else if (qualCategoria == "congelados") {
                listaDeCompras.congelados.push(comidaInserida);
            } else if (qualCategoria == "doces") {
                listaDeCompras.doces.push(comidaInserida);
            } else {
                alert("Categoria Inválida");
            }
        } else if (desejo == Não) {
            
           let listaFormatada = `Na sua lista foi adicionado:\n
           Frutas: ${formatarLista(listaDeCompras.frutas)}\n
           Laticínios: ${formatarLista(listaDeCompras.laticinios)}\n
           Congelados: ${formatarLista(listaDeCompras.congelados)}\n
           Doces: ${formatarLista(listaDeCompras.doces)}`;

            alert(listaFormatada);
            break;
        } else {
            alert("Resposta inválida. Por favor, responda 'Sim' ou 'Não'.");
        }
// Restante do código
```

## Executando o Programa

Para testar o programa, tudo o que precisei fazer foi copiar o código JavaScript acima e colá-lo no console do meu navegador ou em um ambiente JavaScript apropriado.

## Participando do Desafio

Se você quiser tentar este desafio também, aqui estão os passos:

1. Faça o fork deste repositório.
2. Clone o repositório forkado para o seu computador.
3. Siga as instruções no código JavaScript para executar o programa.
4. Divirta-se criando seu próprio gerenciador de lista de compras! 🛒

### Compartilhando Minha Jornada

Decidi compartilhar minha experiência durante este desafio nas redes sociais usando a hashtag <strong>#7DaysOfCode</strong>. Vou adorar ver o que vocês estão criando também!

<strong>Espero que aproveitem o desafio tanto quanto eu! 🚀</strong>
