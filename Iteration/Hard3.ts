import promptSync from "prompt-sync";

const prompt = promptSync();

let n:number = Number(prompt("Enter price: "));
let max:number = n;
let min:number = n;
let sum:number = 0;
let count:number = 0;
while(n!=-1){
    if(n>max){
        max=n;
    }
    if(n<min){
        min=n;
    }
    if(n >= 5 && n <= 30){
        sum=sum+n;
        count++;
    }
    n = Number(prompt("Enter price: "));
}
let avg:number = Math.floor(sum/count);
console.log(max,min,avg);
export{}