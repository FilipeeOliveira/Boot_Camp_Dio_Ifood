/* AND (&&) */

let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

/* 100 moedas coletadas e 1 item estrela */

let moedasColetadas = 100
let item = "estrela"
resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)


// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva

let tempo = "sol"
let itemPersonagem = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva") 
/* tempo e diferente de chuva? e item e igual a guarda chuva?  */
console.log("Nosso personagem pode sair? " + podeSair)



// NOT  ( !) - nega uma afirmação

tempo = "chuva"
resultado = tempo === "chuva"
console.log(!resultado)


tempo = "chuva"
horario = 8

resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)