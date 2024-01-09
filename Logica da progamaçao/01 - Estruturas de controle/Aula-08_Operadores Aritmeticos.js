let idade = 30
console.log("valor da minha variavel " + idade)
                            
idade = 30 + 6
console.log("operação de adição " + idade)     /* lembrando que o codigo mostra em ordem */      

idade = 30 - 6
console.log("operação de subtração " + idade)



/* subtração */
let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000
console.log(codigoExato)

let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)



/* multiplicação */
let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log("O valor com a taxa é " + valorComTaxa)

let multiplicador = 4  /* progama leu primeiro essa linha */
let multiplicando = 12 /* depois leu a 2 linha e por ai vai*/
let produto = multiplicador * multiplicando 
console.log("O resultado da multiplição é: " + produto)

multiplicador = 8 /* aqui colocamos outro valor com uma variavel ja declarada */
produto = multiplicador * multiplicando /* e reutilizamos o que ja foi declado */
console.log("O resultado da segunda multiplição é: " + produto) 




/* divisão */
let notaDoMercado = 5
let pessoaParaDividir = 2
console.log("Operação de divisão é: " + notaDoMercado / pessoaParaDividir) 
/* ou  console.log("Operação de divisão é: " + notaDoMercado / 2)*/



/* resto da divisão */

let calculo = 10 % 3
console.log ("Operação de módulo é: " + calculo)



/* Operadores de Incremento e Decremento: */

let contador = 1 
/* '++' incremento */
contador++
contador++

/* '--' decremento */
contador--
contador--

console.log(contador)





/* Operadores de atribuição */

let preco = 10
preco += 5  /* mesma coisa que preco = preco + 5 */
preco -= 5 /* mesma coisa que preco = preco - 5  */
console.log(preco)



/* expressoes aritimeticas */

let resultado = 2 * ((5 + 5) - 10)

console.log(resultado)











