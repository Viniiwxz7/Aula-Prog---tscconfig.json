"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
let p1 = new pessoa_1.default(" ", 17, " ");
p1.setnome("Vinícius Valentim Dos Santos");
p1.setidade(17);
p1.setcpf("12345678987");
let n = p1.getnome();
let i = p1.getidade();
let c = p1.getcpf();
console.log(n);
//# sourceMappingURL=index.js.map