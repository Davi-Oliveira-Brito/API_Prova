
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
    let total = 0;

    if(nacionalidade == "brasileira") {
        total = (qtdmeias + qtdinteiras) * 5.0;
    }else{
        if(dia == "quarta-feira") {
            total = (qtdmeias + qtdinteiras) * (28.5 / 2);
        
        }else{
            total = (qtdinteiras * 28.5) + (qtdmeias * 28.5 / 2);
        }
    }
    return total;
}

export function maiornumero(numero) {
    let maior = 0;
    let length = numero.length

    for(let i = 0; i < length; i++){
        if(numero[i] > maior){
            maior = numero[i];
        }
    }
    return maior;
}

export function frequenciaCaracter(text, char) {
    let len = text.length;
    let counter = 0;
    for(let i = 0; i < len; i++){
        if(text[i] === char){
            counter++;
        }
    }
    return counter
}
