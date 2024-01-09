/* toda vez que criar uma classe precisa criar esse constructor (uma funtion basicamente) */

class formaDeBolo{  /* a classe é como uma forma, ela padroniza */
    constructor(saborDaMassa, saborRecheio){     
        this.saborDaMassa = saborDaMassa /* this é a mesma coisa que a classe */
        this.saborRecheio = saborRecheio
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")  /* chamando a classe e informando as informacoes para classe */


console.log(boloFesta)