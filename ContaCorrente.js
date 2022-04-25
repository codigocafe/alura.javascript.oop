import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente
  _saldo = 0;
  static numeroDeConta = 0;

  constructor(cliente, agencia){
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroDeConta++;
  }

  set cliente(novoValor){
    if(novoValor instanceof Cliente)
      this._cliente = novoValor;
  }

  get cliente(){
    return this._cliente;
  }

  sacar(valor){
    if(this._saldo <= valor)
      return false;
    this._saldo -= valor;
    return true;
  }
  depositar(valor){
    if(valor > 0){
      this._saldo += valor;
    }
  }
  transferir(valor, conta){
    if(this.sacar(valor)){
      conta.depositar(valor);
    }
  }
  get saldo(){
    return this._saldo;
  }
}