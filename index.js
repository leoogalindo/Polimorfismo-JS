// super classe
function Conta (agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        console.log(`Valor sacado R$${valor}`)
        console.log(`Saldo insuficiente R$${this.saldo}`)
        this.verSaldo()
        return
    }

    this.saldo = this.saldo - valor
    console.log(`Valor sacado R$${valor}`)
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo = this.saldo + valor
    console.log(`Valor depositado R$${valor}`)
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta}`)
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
//sobrescrevendo a função sacar
ContaCorrente.prototype.sacar = function (valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Valor sacado R$${valor}`)
        console.log(`Saldo insuficiente R$${this.saldo}`)
        this.verSaldo()
        return
    }

    this.saldo = this.saldo - valor
    console.log(`Valor sacado R$${valor}`)
    this.verSaldo()
}

function ContaPoupanca (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

/*
const c1 = new Conta(111, 222, 50)
console.log(c1)
c1.depositar(10)
c1.sacar(2)
c1.sacar(70)
*/

const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)

console.log('-------------------------')

const cp = new ContaPoupanca (12, 33, 0)
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)

