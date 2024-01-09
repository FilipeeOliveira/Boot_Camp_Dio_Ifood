class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;

      case "guerreiro":
        ataque = "espada";
        break;

      case "monge":
        ataque = "artes marciais";
        break;

      case "ninja":
        ataque = "shuriken";
    }
    console.log(
      `O personagem ${this.nome} da classe ${this.tipo} atacou usando ${ataque}`
    );
  }
}

let nome = ["Marechal", "Altemar", "Gustavo", "Lucas"];
let idade = [22, 25, 23, 40];
let tipo = ["mago", "guerreiro", "ninja", "monge"];

for (i = 0; i < 4; i++) {
  let heroisatacando = new heroi(nome[i], idade[i], tipo[i]);
  heroisatacando.atacar();
}
