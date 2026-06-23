import promptSync from "prompt-sync";
const prompt = promptSync();
let n:number = Number(prompt("Enter a number: "));
for(let i=2;i<=n;i++){
    let count:number = 0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
}
export{}