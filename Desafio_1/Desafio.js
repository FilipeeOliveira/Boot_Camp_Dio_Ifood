
let nomeHeroi = "Marechal";
let xpHeroi = 5000;
let nivel = ""

if(xpHeroi > 0 && xpHeroi <= 1000){
    nivel = "Ferro"
}

else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    nivel = "Bronze"
}

else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    nivel = "Prata"
}

else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    nivel = "Ouro"
}

else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    nivel = "Platina"
}

else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    nivel = "Ascendente"
}

else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    nivel = "Imortal"
}

else if(xpHeroi > 10001){
    nivel = "Radiante"
}

else{
    console.log("A quantidade de XP do Herói não corresponde a nenhum elo conhecido.");
}



console.log("O heroi " + nomeHeroi + " está no elo " + nivel + " e com total de XP de: " + xpHeroi)
