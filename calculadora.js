function somar(a, b){
    return `${a} + ${b} = ${a + b}`;
};

function subtrair(a, b){
    return `${a} - ${b} = ${a - b}`;
};

function multiplicar(a, b){
    return `${a} x ${b} = ${a * b}`;
};

function dividir(a, b){

    return (b != 0) ? `${a} / ${b} = ${a / b}` : `${a} / ${b} = Zero não pode ser divisor`;

};

function calcularResto(a, b){
    return (b != 0) ? `Resto da divisão entre ${a} e ${b} = ${a % b}` :
    `${a} / ${b} = Zero não pode ser divisor, portanto, não haverá resto.`;
}

console.log('Vários códigos');
console.log(somar(40, 5));
console.log(subtrair(40, 5));
console.log(dividir(40, 5));
console.log(dividir(40, 0));
console.log(multiplicar(40, 5));
console.log(calcularResto(40, 5));
console.log(calcularResto(40, 0));