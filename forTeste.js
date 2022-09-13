console.log('=============================================');
console.log('    ============   TABUADA   ============    ');
console.log('=============================================');

let tabuada = 10;

for(let i = 0; i <= 10; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

console.log('============================================');
console.log('== IDENTIFICANDO SE NÚMERO É PAR OU ÍMPAR ==')
console.log('============================================');

for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(`${i} é PAR`);
    } else {
        console.log(`${i} é ÍMPAR`);
    }
}
