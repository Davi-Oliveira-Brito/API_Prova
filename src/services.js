export function dobro(numero){
    return numero * 2;
}

export function somar(a,b){
    return a + b;
}

export function media(nota1,nota2,nota3){
    return (nota1 + nota2 + nota3)/3;
}

export function tabuada(numero){
    let tabuada =[];
    for(let i = 0; i <+ numero; i++){
        tabuada[i] = numero * i;
    }
    return tabuada;
}


export function medirtemperatura(temperatura){
    let febre = true;
    if(temperatura < 37){
        febre = false;
    }
    else{
        febre = true;
    }
    return febre;
}

export function corprimaria(cor){
    let verificacao = cor === 'amarelo' || cor === 'vermelho' || cor === 'azul';
    return verificacao;
}

export function ingressocinema(dia, nacionalidade,qtdinteiras, qtdmeias){
    let preco = 28.50;
    if(dia === 'quarta'){
        preco = preco / 2;
    }else if (nacionalidade === 'brasileira'){
        preco = 5.00;
    }

    let int = qtdinteiras * preco;
    let mei = qtdmeias * (preco / 2);
}
