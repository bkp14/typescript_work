import promptSync from "prompt-sync";
const prompt = promptSync();
let room:number = Number(prompt("Enter starting room: "));
for(let i=room;i<=100;i+=10){
    console.log(i);
}
export{}