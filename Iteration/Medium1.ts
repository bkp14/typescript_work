import promptSync from "prompt-sync";
const prompt = promptSync();
let n:number = Number(prompt("Enter number: "));
let odd:number = 0;
let even:number = 0;
for(let i=1;i<=n;i++){
    if(i%2==0){
        even=even+i;
    }
    else{
        odd=odd+i;
    }
}
console.log(odd,even);
export{}