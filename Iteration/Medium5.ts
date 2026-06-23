import promptSync from "prompt-sync";
const prompt = promptSync();
let n:number = Number(prompt("Enter a number: "));
let even:number = 0;
let odd:number = 0;
while(n>0){
    let rem:number = n%10;

    if(rem%2==0){
        even = even+rem;
    }
    else{
        odd = odd+rem;
    }
    n = Math.floor(n/10);
}
console.log(even, odd);
export{}