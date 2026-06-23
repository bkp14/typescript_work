import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = readline.promises.createInterface({ input, output });
    
    const userInput = await rl.question("Sample Input: ");
    rl.close();

    const age = Number(userInput);

    if (age >= 4) {
        console.log("Sample Output: Eligible");
    } else {
        console.log("Sample Output: Not Eligible");
    }
}

main();