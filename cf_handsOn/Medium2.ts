import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = createInterface({ input, output });
const input1 = await rl.question("enter val :");

rl.close()
const i1 = Number(input1)

if (i1%2==0){
    console.log(i1/2)
}
else if (i1%2 !==0){
    console.log((i1*3)+1)
}
    
}
main()