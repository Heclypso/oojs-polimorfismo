function Pokemon(especie, tipo, hp, forteContra, fracoContra, habilidade) { // função construtora da classe Pokemon
    this.especie = especie;
    this.tipo = tipo;
    this.hp = hp;
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

function Digimon (especie, tipo, hp, forteContra, fracoContra, habilidade, digiEvolucao) { // função construtora da classe Digimon recebendo herança
    // this.digiEvolucao = digiEvolucao;
    let _digiEvolucao = digiEvolucao; // para tornar um atributo privado não podemos utilizar o this, armazenamos o atributo em uma variavel e nomeamos ele por convenção com _nome
    let _hp = hp;

    this.getDigiEvolução = function() { // por convenção recebe get (recuperação)
        return `A digievolução de ${this.especie} é ${_digiEvolucao}`
    }

    this.getHp = function() { // por convenção recebe get (recuperação)
        return _hp;
    }

    this.setDigiEvolução = function(valor) { // por convenção recebe set (definição)
        if (typeof valor === 'string') {
            _digiEvolucao = valor;
        }
    }

    this.setHp = function(valor) { // por convenção recebe set (definição)
        if (typeof valor === 'number') {
            _hp = valor;
        }
    }

    this.hpBuff = function() { // polimorfismo, o metodo executa diferentes buffs de acordo com o tipo
        const novoHp = _hp  * 1.1;
        _hp = novoHp;
    }
    
    Pokemon.call(this, especie, tipo, hp, forteContra, fracoContra, habilidade); // herança da classe Pokemon
}

function Virus(especie) { 
    Digimon.call(this, especie, "Virus", 20, "Data", "Vacine", "Soco", "Greymon"); 
    
    this.hpBuff = function() { // polimorfismo, o metodo executa diferentes buffs de acordo com o tipo
        const novoHp = this.getHp() * 1.2;
        this.setHp(novoHp)
    }
}

function Data(especie) { 
    Digimon.call(this, especie, "Data", 30, "Vacine", "Virus", "Soco", "Greymon"); 
    
    this.hpBuff = function() { // polimorfismo, o metodo executa diferentes buffs de acordo com o tipo
        const novoHp = this.getHp() * 1.3;
        this.setHp(novoHp)
    }
}

const agumon = new Digimon("Agumon", "Vaccine", "10", "Virus", "Data", "Soco", "Greymon") 
const agumon2 = new Virus("Agumon2")
const agumon3 = new Data("Agumon3")

agumon.hpBuff();
console.log(agumon.getHp())

agumon2.hpBuff();
console.log(agumon2.getHp())

agumon3.hpBuff();
console.log(agumon3.getHp())
