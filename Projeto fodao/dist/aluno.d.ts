import pessoa from "./pessoa";
export default class aluno extends pessoa {
    private matricula;
    private escolaOrigem;
    constructor(matricula: string, escolaOrigem: string, nome: string, idade: number, cpf: string);
    getMatricula(): string;
    setMatricula(matricula: string): void;
    imprimirInfo(): void;
}
//# sourceMappingURL=aluno.d.ts.map