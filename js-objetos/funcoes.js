const cliente = {
    come: "João",
    idade: 25,
    email: "joao@mail.com",
    telefone: "11 2233333-4444",
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado. novo saldo: ${this.saldo}`);
        }
    }
}

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(100);
cliente.efetuaPagamento(150);

console.log(cliente.saldo)