const entrada5 = require("readline-sync");

let Digitados:number[] = [];
let med:number = 0


for( let i5 = 1;i5 <= 10;i5++) {
  let num = parseFloat(entrada5.question("Digite a nota: " ));
      Digitados.push(num);

  med = med + num;
  
}

console.log(med/10)
console.log(Math.max(...Digitados))
console.log(Math.min(...Digitados))