import promptSync from "prompt-sync";
const prompt = promptSync();
let n:number = Number(prompt("Enter the limit"))
for(let i=0;i<n;i++){
    console.log(i)
}