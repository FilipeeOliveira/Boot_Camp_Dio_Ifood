/* podemos guardar o retorno de uma funtion em uma variavel para usar depois */


let resultado = soma(5, 10) /* a variavel "resultado" esta recebendo o chamador de funcao */

console.log("O resultado dessa função é: " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio  /* aqui ele esta retornando o calculo */
}


let resultado2 = soma(5, 10)

console.log("O resultado dessa função é: " + resultado)

function soma(numA, numB){
    return numA + numB  /* aqui ele esta retornando o calculo */
}


/* um retorn so pode retornar um valor */