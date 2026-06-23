import promptSync from "prompt-sync";
const prompt = promptSync();
let x:number = Number(prompt("Enter first number: "));
let y:number = Number(prompt("Enter second number: "));
let sum1:number = 0;
let sum2:number = 0;
for(let i = 1; i < x; i++){
    if(x % i == 0){
        sum1 = sum1 + i;
    }
}
for(let i = 1; i < y; i++){
    if(y % i == 0){
        sum2 = sum2 + i;
    }
}
if(sum1 == y && sum2 == x){
    console.log("Amicable pair");
}
else{
    console.log("Not an amicable pair");
}
export{}