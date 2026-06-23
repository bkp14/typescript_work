import promptSync from "prompt-sync";
const prompt = promptSync();
let n:number = Number(prompt("Enter number: "));
let sum:number = 0;
for(let i = n; i >= 1; i--){
    console.log(i);
    sum = sum + i;
}
console.log(sum);
export{}