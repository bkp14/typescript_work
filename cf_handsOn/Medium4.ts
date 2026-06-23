import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const rl = readline.promises.createInterface({ input, output });
    const userInput = await rl.question("Enter total and animal counts : ");
    rl.close();

    // Parse input
    const numbers: number[] = userInput.split(',').map((str: string) => parseInt(str.trim()));
    
    const totalCounted: number = numbers[0]!;
    const counts: number[] = numbers.slice(1);
    const sumOfCounts: number = counts.reduce((a: number, b: number) => a + b, 0);
    const difference: number = Math.abs(sumOfCounts - totalCounted);

    if (difference > 5) {
        console.log("Counted wrongly");
    } else if (sumOfCounts === totalCounted) {
        console.log("Baby lion is well behaved");
    } else {
        console.log("Baby lion is mischievous");
    }
}

main();
