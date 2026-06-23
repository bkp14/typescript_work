import promptSync from "prompt-sync";
const prompt = promptSync();
let n:string = prompt("Enter the number : ")
if(n.length==5){
    console.log(n.split("").reverse().join(""))
}
else{
    console.log("Enter 5 digit number")
}