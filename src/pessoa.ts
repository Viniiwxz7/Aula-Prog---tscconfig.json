export default class pessoa{
    private nome: string = "    "
    private idade:number = 0
    private cpf:string = ""
    private tipoSanquineo?: string = ""

    constructor(nome:string,idade:number,cpf:string){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    getnome():string{
        return this.nome
    } 

    getidade():number{
        return this.idade
    }

    getcpf():string{
        return this.cpf
    }

    setnome(nome:string):void{
        if (nome != ""){
            this.nome = nome
        }else{
            console.log("O nome não pode ser vazio.")
        }
    }

    setidade(idade:number):void{
        if(idade < 0){
            this.idade = idade
        }else{
            console.log("O valor não pode ser vazio")
        }
    }
    
    setcpf(cpf:string):void{
        if(cpf != ""){
            this.cpf = cpf
        }else{
            console.log("O cpf nao pode ser vazio")            
        }
    }


    imprimirInfo():void{
        console.log(`Nome ${this.nome}, idade${this.idade}`)
        console.log(`Cpf:${this.cpf}`)
    }
}
