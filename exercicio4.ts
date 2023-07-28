const entrada4= require("readline-sync");

let luan = 0;
let bob = 1;

for(let i = 0; i <= 10; i++){
    let f = luan+ bob;

    console.log(f);

    bob = luan
    luan = f
}