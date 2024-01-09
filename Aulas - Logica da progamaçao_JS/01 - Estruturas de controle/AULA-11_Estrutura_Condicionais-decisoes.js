let possuiOvos = false
let itemComprados = ""

if(possuiOvos){                         /* se */
    itemComprados = "leite"
}
else{
    console.log("passou na sessao de legumes")      /* se nao */
    itemComprados = "batata"
}

console.log("Item comprado: " + itemComprados)


/* else if - se nao se (ele fez duas verificaoes no começo*/

let nivelFome = 2

if(nivelFome === 1){
    console.log("pouca fome")
}
else if(nivelFome === 2){
    console.log("muita fome")
}

else{
    console.log("Você comeria mais que o pica pau")
}