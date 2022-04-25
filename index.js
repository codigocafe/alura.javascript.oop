import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente1 = new ContaCorrente(cliente1, 1001);
contaCorrente1.depositar(100);

const contaCorrente2 = new ContaCorrente(cliente2, 1001);
contaCorrente2.depositar(150);
contaCorrente1.transferir(50,contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroDeConta);