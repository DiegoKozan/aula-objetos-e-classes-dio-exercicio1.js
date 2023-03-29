/* 1- crie uma classe para representar carros,
   os carros posuem um amarca , uma cor e um gasto medio de combustivel por kilometro rodado.
   crie um metodo que dado a quantidade de quilometros eo preço do combustivel nos de o valor
   gasto em reais para realizar estw percurso
*/
class Carro{
 marca;
 cor;
 gastoMedioPorkm;

 constructor(marca,cor,gastoMedioPorkm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorkm = gastoMedioPorkm;
 }
calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorkm * precoCombustivel;
}
}

const uno = new Carro ('fiat', 'prata', 1/12);
console.log(uno.calcularGastoDePercurso(70,5));
const palio = new Carro('fiat', 'preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70,5));