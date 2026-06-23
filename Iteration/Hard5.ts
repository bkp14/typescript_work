import promptSync from "prompt-sync";
const prompt = promptSync();

let n:number = Number(prompt("Enter a number: "));
for(let i=2;i<=n;i++){
    while(n%i==0){
        console.log(i);
        n=n/i;
    }
}
export{}