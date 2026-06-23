import promptSync from "prompt-sync";
const prompt = promptSync();
let m:number = Number(prompt("Enter m value: "));
let n:number = Number(prompt("Enter n value: "));
let power:number = 1;
for(let i=1;i<=n;i++){
    power*=m;
}
console.log(power);
export{}