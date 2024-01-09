/* aqui eu to atribundo um valor para variavel pão (dentro da funtion torrar) e assim quando eu chamar ela irá funcionar, e eu posso utilizar mais de uma chamada com a mesma variavel que ela tambem vai funcionar , */
torrar("pão de forma")  /* chamando e colocando valor para varivavel pao */
torrar("pão integral")

function torrar(pao){ /* varivavel pao (ela so existe dentro desse escorpo)*/
    console.log("torrada feita com " + pao)
}

console.log (pao)


/* pode conter mais de uma varivavel e mais de uma declaracao, seguindo essas organizacoes com virgulas como nos exemplos abaixo: */
torrar("pão de forma", "Filipe")  

function torrar(pao, nome){           
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
}


torrar("pão de forma", "Filipe")  
torrar("pão integral", "Janaina")  

function torrar(pao, nome){ 
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
}