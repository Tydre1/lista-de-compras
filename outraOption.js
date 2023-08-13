let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";
while (adicionarMais != "não") { // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não' .");
    
    while (adicionarMais != "sim" && adicionarMais != "não") { //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
        alert(`Operações não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não' .")
    }

    if (adicionarMais === "não") { //se o texto lido for "não", sair do while
        break;
    }

        comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces', ou 'congelados'?");
    if (categoria === 'frutas') {
        frutas.push(comida);
    } else if (categoria === 'laticínios') {
        laticionios.push(comida);
    } else if (categoria === 'doces') {
        doces.push(comida);
    } else if (categoria === 'congelados') {
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.");
    }
}

alert(`Lista de Compras: \n Frutas: ${frutas}\n Laticínios: ${laticionios}\n Doces: ${doces}\n Congelados: ${congelados}`);