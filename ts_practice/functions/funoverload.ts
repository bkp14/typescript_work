function adds(x:string,y:string):string;
function adds(x:number,y:number):number;

function adds(x:any,y:any):any{
    return (x+y)
}
console.log(adds("hello","world"))
console.log(adds(12,10))

