/* "for - para"  */
/* as pessoas usam muito i como contador */
for (let contador = 0; contador < 4; contador++){ /* aqui diz que a contagem começa do 0 e termina menos que 4, depois contador ++ incrementa mais 1 para contar. */
    console.log(contador)
    console.log("aumentando o contador")
}

/* -------------------------------------------------------------------------------- */
let TotaisPontosDeVida = 0

for(let i = 0; i < 11; i++){
    TotaisPontosDeVida += 1 /* pontosDeVida = pontosDeVida +1 */ /* aqui fiz para informar o total de pocoes */
    console.log("Tomou poção mágicas " + i)
}

console.log(TotaisPontosDeVida + " totais")


/* -------------------------------------------------------------------------------- */
/* "while - enquanto" é um alternativa do for*/

let contador1 = 0

while (contador1 < 3){
    console.log("olá")
    contador1++   /* sempre incrementa a variavel ++ (mais 1), pois se nao ele nunca sai do loop */
}

/* -------------------------------------------------------------------------------- */
/* "do while - faça enquanto"*/

let contador2 = 0
do{
    console.log("olá")
    contador2 ++
} while (contador2 < 3)






/* for: É como dar voltas em uma pista de corrida. Você define onde começa (inicialização), onde termina (condição) e o quanto avança a cada volta (expressão final). 

For (let i = 0; i < 5; i++) {
  console.log(i); // Vai imprimir os números de 0 a 4
}
*/


/* for…in: É como verificar todos os itens em uma mochila. O loop passa por cada item (propriedade do objeto) na mochila (objeto).

let mochila = { livro: 'Matemática', caneta: 'Azul', caderno: 'Grande' };
for (let item in mochila) {
  console.log(item); // Vai imprimir 'livro', 'caneta' e 'caderno'
} */


/* for…of: É como distribuir cartas de um baralho. O loop passa por cada carta (elemento) no baralho (lista).

let baralho = ['Ás', 'Rei', 'Dama', 'Valete'];
for (let carta of baralho) {
  console.log(carta); // Vai imprimir 'Ás', 'Rei', 'Dama' e 'Valete'
} */