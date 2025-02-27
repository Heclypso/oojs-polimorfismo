function Pokemon(especie, tipo, vida, forteContra, fracoContra, habilidade) { // função construtora da classe Pokemon
    this.especie = especie;
    this.tipo = tipo;
    this.vida = vida;
    this.forteContra = forteContra;
    this.fracoContra = fracoContra;
    this.habilidade = habilidade;
    
    this.ataque = function(){ // metodo ataque
        console.log(this.especie + " atacou com " + this.habilidade)
    }
    
    this.dizDigiEvolucao = function () {  // agumon ganhou o acesso a esse método através do call
        console.log(this.digiEvolucao)
    }
}

function Digimon (especie, tipo, vida, forteContra, fracoContra, habilidade, digiEvolucao) { // função construtora da classe Digimon recebendo herança
    this.digiEvolucao = digiEvolucao;
    
    Pokemon.call(this, especie, tipo, vida, forteContra, fracoContra, habilidade); // herança da classe Pokemon
}

const pikachu = new Pokemon("Pikachu", "Elétrico", "10", "Agua", "Rocha", "Choque do trovão"); // instancia da classe pokemon
const agumon = new Digimon("Agumon", "Vaccine", "10", "Virus", "Data", "Soco", "Greymon") // instancia da classe digimon
const itens = ["revive", "pokebola"] // array de itens

pikachu.ataque(); // pikachu atacou
agumon.ataque(); // agumon atacou

pikachu.dizDigiEvolucao(); // undefined por que o pikachu não tem digievolucao
agumon.dizDigiEvolucao(); // greymon

console.log(typeof Pokemon) // retorna function

console.log(typeof pikachu) // retorna object
console.log(typeof itens) // retorna objeto por que usando typeof temos o retorno de object tanto para arrays quanto para objetos instanciados por isso para esse tipo de verificação usamos instanceof

console.log(pikachu instanceof Pokemon) // retorna true
console.log(agumon instanceof Pokemon) // retorna false
console.log(itens instanceof Pokemon) // retorna false
console.log(itens instanceof Array) // retorna true