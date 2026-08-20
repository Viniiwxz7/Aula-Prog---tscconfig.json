import pessoa from "./pessoa"

export default class  aluno extends pessoa{
    private matricula: string;
    private escolaOrigem: string;

    constructor(matricula: string, escolaOrigem:string, nome:string, idade:number, cpf:string){
        super(nome,idade,cpf)
        this.matricula = matricula;
        this.escolaOrigem = escolaOrigem;

    }

    getMatricula():string{
    return this.matricula;
    }
    setMatricula(matricula:string):void{
        this.matricula = matricula; 

    }
}