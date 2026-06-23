import * as promptSync from 'prompt-sync';
const prompt = (promptSync as any).default ? (promptSync as any).default() : (promptSync as any)();
let inp1:String = prompt("enter val1: ") || "";
let inp1num1 = Number(inp1);
let inp2:String = prompt("enter val2: ") || "";
let inp1num2 = Number(inp2);

if(inp1num1 == inp1num2){
    console.log("Square")
}
else{
    console.log('Not A Square')
}