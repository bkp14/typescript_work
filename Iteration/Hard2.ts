import promptSync from "prompt-sync";
const prompt = promptSync();

let n:number = Number(prompt("Enter a number: "));
let temp:number = n;
let temp2:number = n;
let count:number = 0;
let sum:number = 0;
while(temp > 0){
    count++;
    temp=Math.floor(temp/10);
}
while(temp2 > 0){
    let rem:number = temp2%10;
    sum=sum+rem**count;
    temp2=Math.floor(temp2/10);
}
if(sum==n){
    console.log("true");
}
else{
    console.log("false");
}
export{}