var entrada2 = require("readline-sync");
var media = 0;
for (var i = 0; i < 5; i++) {
    var valor = parseFloat(entrada2.question('Digite a nota: '));
    media = media + valor;
}
console.log(media / 5);
