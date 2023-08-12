function listaFormatada(lista) {
    return lista.join(", ");
}

let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
};

while (true) {
    let desejo = prompt("Deseja colocar alguma coisa no seu carrinho? Sim ou Não?");

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
}