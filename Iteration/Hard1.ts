import promptSync from "prompt-sync";
const prompt = promptSync();
let start:number = Number(prompt("Enter start number: "));
let end:number = Number(prompt("Enter end number: "));
for(let i=start;i<=end;i++){
    if(i%10==0){
        console.log("dong");
    }
    else if(i%5==0){
        console.log("ding");
    }
    else{
        console.log(i);
    }
}
export{}