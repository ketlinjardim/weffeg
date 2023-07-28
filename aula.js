var entrada1 = require("readline-sync");
var numero = parseFloat(entrada1.question("digite um numero: "));
for (var i = 0; i <= numero; i = i + 2) {
    console.log(i);
}
