/* "Split" e uma funcao que serve para cortar e é que divide uma string em partes com base em um separador específico e basicamente cria um vetor. Assim da pegar posicoes.*/

let userName= getFirstName("Filipe Leite Oliveira") 

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0] /* ele corta e transforma em vertor */
    return firstName

}


/* ou pode usar o splitchar */


let userName1 = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-") /* coloquei o valor da variavel que quero que corte */
console.log("Seja bem vindo " + userName1)

function getFirstName(name, splitChar){  /* aqui eu criei uma variavel "splitchar" para fazer cortes */
	let firstName1 = name.split(splitChar)[0] /* coloco aqui a variavel para cortar */
    return firstName1
}