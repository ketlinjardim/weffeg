var entrada5 = require("readline-sync");
var Digitados = [];
var med = 0;
for (var i5 = 1; i5 <= 10; i5++) {
    var num = parseFloat(entrada5.question("Digite a nota: "));
    Digitados.push(num);
    med = med + num;
}
console.log(med / 10);
console.log(Math.max.apply(Math, Digitados));
console.log(Math.min.apply(Math, Digitados));
