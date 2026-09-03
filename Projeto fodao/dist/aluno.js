"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class aluno extends pessoa_1.default {
    matricula;
    escolaOrigem;
    constructor(matricula, escolaOrigem, nome, idade, cpf) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.escolaOrigem = escolaOrigem;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    imprimirInfo() {
        console.log(`Nome ${this.getnome()} - CPF: ${this.getcpf} - Idade: ${this.getidade} - Matricula: ${this.getMatricula}`);
        console.log(`Nome: ${this.getnome()}`);
        console.log(`Idade: ${this.getidade()}`);
        console.log(`Matrícula: ${this.getMatricula()}`);
        console.log(`Escola de Origem: ${this.escolaOrigem}`);
    }
}
exports.default = aluno;
//# sourceMappingURL=aluno.js.map