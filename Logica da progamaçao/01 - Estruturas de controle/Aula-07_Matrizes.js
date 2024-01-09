/* Matrizes */
let timePokemon = [
    ["Pikachu", "M", 1],
    ["Charmander", "F", 4],
    ["Bulbasaur", "M", 3]
]

console.log("O pokemon " + timePokemon[0][0], "está no nivel " + timePokemon[0][2], "e ele é do sexo " + timePokemon[0][1])

console.log("O pokemon " + timePokemon[1][0], "está no nivel " + timePokemon[1][2], "e ele é do sexo " + timePokemon[1][1])

console.log("O pokemon " + timePokemon[2][0], "está no nivel " + timePokemon[2][2], "e ele é do sexo " + timePokemon[2][1])




/* quando você quer organizar varios tipos e informacoes é bom utilizar matrizes para informações */

/* quando você quer organizar informaçoes do mesmo tipo e de forma mais simples e bom usar vetores  */



let nomesFuncionario = ["joao", "filipe", "ricardo"]
let infoFuncionarios = [
    ["B", 18, "contratado"],
    ["A e B", 21, "contratado"],
    ["A", 20, "dispensado"]
]

console.log("O candidato " + nomesFuncionario[0], "possui a carteira " + infoFuncionarios[0][0], "possui " + infoFuncionarios[0][1], "anos e foi" + infoFuncionarios[0][2])
