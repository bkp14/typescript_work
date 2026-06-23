import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = readline.promises.createInterface({ input, output });
    const userInput = await rl.question("Enter customer name and items : ");
    rl.close();

    // Parse input
    const parts: string[] = userInput.split(',').map((str: string) => str.trim());
    const customerName: string = parts[0]!;
    const itemCount: number = parseInt(parts[1]!);

    let costPerItem: number;

    if (itemCount < 10) {
        costPerItem = 12;
    } else if (itemCount >= 10 && itemCount < 100) {
        costPerItem = 10;
    } else {
        costPerItem = 7;
    }

    const totalCost: number = itemCount * costPerItem;
    console.log(`${customerName} ${totalCost}`);
}

main();
