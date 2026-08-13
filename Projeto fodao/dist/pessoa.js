"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pessoa {
    nome = "    ";
    idade = 0;
    cpf = "";
    tipoSanquineo = "";
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getnome() {
        return this.nome;
    }
    getidade() {
        return this.idade;
    }
    getcpf() {
        return this.cpf;
    }
    setnome(nome) {
        if (nome != "") {
            this.nome = nome;
        }
        else {
            console.log("O nome não pode ser vazio.");
        }
    }
    setidade(idade) {
        if (idade < 0) {
            this.idade = idade;
        }
        else {
            console.log("O valor não pode ser vazio");
        }
    }
    setcpf(cpf) {
        if (cpf != "") {
            this.cpf = cpf;
        }
        else {
            console.log("O cpf nao pode ser vazio");
        }
    }
    imprimirInfo() {
        console.log(`Nome ${this.nome}, idade${this.idade}`);
        console.log(`Cpf:${this.cpf}`);
    }
}
exports.default = pessoa;
//# sourceMappingURL=pessoa.js.map