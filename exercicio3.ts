const entrada3=require("readline-sync");


let tab : number = entrada3.question("Digite um numero: ");

for(let i = 0; i <= 10; i++)
{
    console.log(i* tab);
}