export default class pessoa{
    private nome: string = "    "
    private idade:number = 0
    private cpf:string = ""

    getnome():string{
        return this.nome
    }

    setnome(nome:string):void{
        this.nome = nome
    }

    imprimirInfo():void{
        console.log(`Nome ${this.nome}, idade${this.idade}`)
        console.log(`Cpf:${this.cpf}`)
    }
}
