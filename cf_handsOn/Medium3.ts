import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = readline.promises.createInterface({ input, output });
    const userInput = await rl.question("Enter items : ");
    rl.close();

    // Parse input: Wrap it in brackets and evaluate it as a JavaScript list
    const items: any[] = eval(`[${userInput}]`);
    const code = items[0];
    const values = items.slice(1);

    if (code === 1) {
        const sum = values.reduce((acc: number, val: any) => acc + parseFloat(val), 0);
        console.log(sum);
    } else if (code === 2) {
        const product = values.reduce((acc: number, val: any) => acc * parseInt(val), 1);
        console.log(product);
    } else if (code === 3) {
        const joined = values.join('');
        console.log(joined);
    }
}

main();