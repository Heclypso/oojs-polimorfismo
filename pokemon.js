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
    // this.digiEvolucao = digiEvolucao;
    let _digiEvolucao = digiEvolucao; // para tornar um atributo privado não podemos utilizar o this, armazenamos o atributo em uma variavel e nomeamos ele por convenção com _nome

    this.getDigiEvolução = function() { // por convenção recebe get (recuperação)
        return `A digievolução de ${this.especie} é ${_digiEvolucao}`
    }

    this.setDigiEvolução = function(valor) { // por convenção recebe set (definição)
        if (typeof valor === 'string') {
            _digiEvolucao = valor;
        }
    }
    
    Pokemon.call(this, especie, tipo, vida, forteContra, fracoContra, habilidade); // herança da classe Pokemon
}

const pikachu = new Pokemon("Pikachu", "Elétrico", "10", "Agua", "Rocha", "Choque do trovão"); // instancia da classe pokemon
const agumon = new Digimon("Agumon", "Vaccine", "10", "Virus", "Data", "Soco", "Greymon") // instancia da classe digimon
const itens = ["revive", "pokebola"] // array de itens

pikachu.ataque(); // pikachu atacou
agumon.ataque(); // agumon atacou

pikachu.dizDigiEvolucao(); // undefined por que o pikachu não tem digievolucao
agumon.dizDigiEvolucao(); // não vai mais retornar greymon porque o valor foi armazenado em uma variavel.

// agumon.digiEvolucao = "2" // aqui temos um problema de encapsulamento porque deixamos o atributo digiEvolucao público assim qualquer um pode acessar e modificar ele para qualquer tipo.
console.log(agumon.digiEvolucao) // a partir do momento em que a digievolução é armazenada em uma variavel ela não é mais acessível através da notação ponto

console.log(agumon.getDigiEvolução())

agumon.setDigiEvolução("Wargreymon");
agumon.setDigiEvolução(2); // agora não é mais possível modificar para qualquer tipo pois foi colocado um if antes do setter

console.log(agumon.getDigiEvolução())