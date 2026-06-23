import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = readline.promises.createInterface({ input, output });
    
    const userInput = await rl.question("Sample Input: ");
    rl.close();

    const num = Number(userInput);

    if (num > 0) {
        console.log("Sample Output: positive");
    } else if (num < 0) {
        console.log("Sample Output: negative");
    } else {
        console.log("Sample Output: zero");
    }
}

main();