var entrada4 = require("readline-sync");
var luan = 0;
var bob = 1;
for (var i = 0; i <= 10; i++) {
    var f = luan + bob;
    console.log(f);
    bob = luan;
    luan = f;
}
