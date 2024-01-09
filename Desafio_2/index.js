let resultado = ranqueadas(300, 120)
let ranking = ""

function ranqueadas(vitorias, derrotas) {
    let contagem = vitorias - derrotas
    return contagem    
}


for (i = 0; i<10; i++){



if (resultado < 10){
    ranking = "Ferro"
}

else if(resultado > 10 && resultado <= 20){
    ranking = "Bronze"
}

else if(resultado > 20 && resultado <= 50){
    ranking = "Prata"
}

else if(resultado > 50 && resultado <= 80){
    ranking = "Ouro"
}

else if(resultado > 80 && resultado <= 90){
    ranking = "Diamante"
}

else if(resultado > 91 && resultado <= 100){
    ranking = "Lendário"
}

else if(resultado >= 101){
    ranking = "Imortal"
}


console.log(`O herói tem de saldo ${resultado} e está no elo ${ranking}`)

}