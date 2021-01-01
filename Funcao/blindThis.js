const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


//O blind é reponsavel por amarar o objeto, para ele ser o dono do THIS
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


function Pessoa() {
    this.idade = 0

    const self = this // Pra resolver o problema do THIS podemos colocar o THIS que aponta para a função atual dentro de uma const e depois usa-la dento da função interna
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Outra forma de fazer o THIS dentro da função interna é colocar o .blind no final dela
}

new Pessoa