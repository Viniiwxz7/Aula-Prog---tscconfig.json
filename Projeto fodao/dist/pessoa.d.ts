export default abstract class pessoa {
    private nome;
    private idade;
    private cpf;
    private tipoSanquineo?;
    constructor(nome: string, idade: number, cpf: string);
    getnome(): string;
    getidade(): number;
    getcpf(): string;
    setnome(nome: string): void;
    setidade(idade: number): void;
    setcpf(cpf: string): void;
    abstract imprimirInfo(): void;
}
//# sourceMappingURL=pessoa.d.ts.map