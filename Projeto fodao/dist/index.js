"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
let p1 = new pessoa_1.default();
p1.setnome("Vinicius valentim");
let n = p1.getnome();
console.log(n);
//# sourceMappingURL=index.js.map