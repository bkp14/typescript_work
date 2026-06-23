import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = readline.promises.createInterface({ input, output });
    
    const userInput = await rl.question("Sample Input: ");
    rl.close();

    const cost = Number(userInput);

    if (cost <= 15000) {
        console.log("Sample Output: Mobile chosen is within the budget");
    } else {
        console.log("Sample Output: Mobile chosen is beyond the budget");
    }
}

main();