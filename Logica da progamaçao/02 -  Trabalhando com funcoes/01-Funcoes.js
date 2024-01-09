/* funcao serve para guardar partes de codigo dentro de uma "caixa" e assim podendo chamar quando necessario. */


torrar()  /* assim voce chama a funçao e se quiser chamar funcao dentro de funcao voce so coloca para chamar dentro dd primeira. */

function torrar(){
    console.log("Torrando pão")  
    injetarPao()  /* aqui a funcao chama a segunda funcao. */
}

function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}

/* -------------------------------------------------------------------------------------------------------- */

mainChamandoTodasFunoces()

/* podes fazer uma funcao pai para chamar todas as funcoes se quisesse. */
function mainChamandoTodasFunoces(){ 
    getData()
    checkvalues()
    sendToDatabase()
}


/* sempre tente fazer funcoes para fazer coisas especificas, para facilitar uma manutencao */
function getData(){
  console.log("pegando dados do usúario")
    if (1 < 3) {
        console.log("Numero encontrado")
        console.log("Numero encontrado")
        console.log("Numero encontrado")
  }
}


function checkvalues(){
    console.log("validando dados")
}


function sendToDatabase(){
    console.log("cadastrando dados")
}



enviarDados()
function enviarDados(){
    let nomeDoBando = "banco-de-dados"
    console.log("salvando dados em: " + nomeDoBando)
    
    if(1 < 3){
        console.log("senha validadada")
    }

}