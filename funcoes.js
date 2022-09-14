module.exports = {
    somar: function(a, b){
        return `${a} + ${b} = ${a + b}`;
    },
    
    subtrair: function(a, b){
        return `${a} - ${b} = ${a - b}`;
    },
    
    multiplicar: function(a, b){
        return `${a} x ${b} = ${a * b}`;
    },
    
    dividir: function(a, b){
    
        return (b != 0) ? `${a} / ${b} = ${a / b}` : `${a} / ${b} = Zero não pode ser divisor`;
    
    },
    
    calcularResto: function(a, b){
        return (b != 0) ? `Resto da divisão entre ${a} e ${b} = ${a % b}` :
        `${a} / ${b} = Zero não pode ser divisor, portanto, não haverá resto.`;
    }
}