import pessoa from "./pessoa";

let p1 = new pessoa(" ",17," ")

p1.setnome("Vinícius Valentim Dos Santos")
p1.setidade(17)
p1.setcpf("12345678987")



let n = p1.getnome()
let i = p1.getidade()
let c = p1.getcpf()
console.log(n,i,c)