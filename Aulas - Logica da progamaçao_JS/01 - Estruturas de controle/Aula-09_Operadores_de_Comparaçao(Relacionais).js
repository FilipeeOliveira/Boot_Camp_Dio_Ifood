/* Operadores de comparaçao (RELACIONAIS) */

/* comparação */

let numero = "1"
console.log(numero == "1")
console.log(numero === 1) 

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log("O usurario está barrado? " + ehCPFBloqueado)

/* = é atribuição */
/* == é para comparar o valor */
/* === é para comparar o valor e o formato do conteudo */






/* diferente de */

let marca = "Apple"
console.log(marca !== "samsung") 
/* !== é diferente? */

let resultado = marca !== "samgung"  /* pode guarda o resulsado de uma comparacao em uma variavel */
console.log(resultado)


let CPFPermitido = "222.555.333-01"
let CPFDousuario = "222.555.333-02"
let Bloqueado = cpfUsuario !== CPFPermitido   /* cpf do usuario é diferente do cpf do permitido? */
console.log("O usuario é invalido? " + Bloqueado)






/* maior ou menor */

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)



let idadeDeCorte = 50
let idadeDeUsuario = 45
let resultadoEhTerceiraIdade = idadeDeCorte < idadeDeUsuario










