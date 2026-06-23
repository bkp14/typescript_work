import promptSync from "prompt-sync";
const prompt = promptSync();
let n:number = Number(prompt("Enter a number: "));
let count:number = 0;
for(let i=1;i<= n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    console.log("Yes");
}
else{
    console.log("No");
}
export{}