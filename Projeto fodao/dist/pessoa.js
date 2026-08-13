"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pessoa {
    nome = "    ";
    idade = 0;
    cpf = "";
    getnome() {
        return this.nome;
    }
    setnome(nome) {
        this.nome = nome;
    }
    imprimirInfo() {
        console.log(`Nome ${this.nome}, idade${this.idade}`);
        console.log(`Cpf:${this.cpf}`);
    }
}
exports.default = pessoa;
//# sourceMappingURL=pessoa.js.map