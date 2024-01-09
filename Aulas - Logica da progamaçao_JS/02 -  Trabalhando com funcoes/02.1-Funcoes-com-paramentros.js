torrar("pão de forma", /* "Filipe" */)  /* se voce nao declarar um nome ou nada aqui voce pode declarar um valor direto na funtion  */

function torrar(pao, nome = "Cliente"){ /* aqui ele vai ser um valor padrao(default) se nao tiver na chamada. */
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
}



torrar2("pão de forma", "Marechal", 10.90)  

function torrar2(pao, nome = "Cliente", valor){ 
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é: " + valor)
}


torrar3("pão de forma", 10.90)

function torrar3(pao, valor, nome = "Cliente"){  /* se eu quiser colocar somente um valor padrao, posso que ele aceita mas coloca por ultimo para nao da erro*/
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é: " + valor)
}