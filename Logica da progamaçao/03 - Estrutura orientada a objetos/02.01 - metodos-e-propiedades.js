/* toda vez que criar uma classe precisa criar esse constructor (uma funtion basicamente) */

class formaDeBolo{  /* a classe é como uma forma, ela padroniza */
    constructor(saborDaMassa, saborRecheio){     
        this.saborDaMassa = saborDaMassa /* this é a mesma coisa que a classe */
        this.saborRecheio = saborRecheio
    }
    
    escrever(){ /* funtion na classe nao precisa escrever (funtion), pode ser direta */
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    contagem(){
        this.contagem = 2 + 2
        console.log(this.contagem)
        return this.contagem 
    }
}



/* instacias objetos - aqui e uma instacia de objetos - objetos aqui */

let boloFesta = new formaDeBolo("chocolate", "nutella")  /* variavel bolofesta está recebendo o chamando da classe e informando as informacoes para classe */

let boloPremium = new formaDeBolo("baunilha", "Morango") /* pode colocar quantas infos forem necessarias com a mesma estrutura por causa da classe esta pradonizando */

let contagemTeste = new formaDeBolo()


boloFesta.escrever() /* aqui está mostrando as informacoes do console.log da funtion (escrever) da classe */

boloPremium.escrever()

contagemTeste.contagem()  /* coloquei outra saida*/