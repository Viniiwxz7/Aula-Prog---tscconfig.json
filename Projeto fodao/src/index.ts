import pessoa from "./pessoa";

export default class aluno
extends pessoa{
private matricula : string;
private curso :string;
private escolaOrigem?: string;

constructor(nome:string,idade:number,cpf:string, matricula: string, curso:string){
    super(nome,idade,cpf)
    this.matricula = matricula;
    this.curso = curso;
}

    getMatricula():string{
        return this.matricula;
    }
    setMatricula
    (matricula:string):void{
        this.matricula = matricula;
    }

    imprimirInfo(): void {
        console.log(`Nome${this.getnome()} - CPF: ${this.getcpf()} - Idade: ${this.getidade()} - `)
    
        console.log(`Matricula: ${this.matricula} - curso:${this.curso} - EscolaOrigem: ${this.escolaOrigem}`)
    }

}