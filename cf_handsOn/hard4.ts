import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const readlineInterface = readline.promises.createInterface({ input, output });
    
    const userInput = await readlineInterface.question("Enter your income: ");
    const income = parseInt(userInput.trim());
    
    readlineInterface.close();
    
    const bracket1_limit = 250000;
    const bracket2_limit = 500000;
    const bracket3_limit = 1200000;
    
    let taxAmount = 0;
    
    if (income <= bracket1_limit) {
        console.log("You are exempted from tax");
    } else if (income <= bracket2_limit) {
        const taxableInBracket = income - bracket1_limit;
        taxAmount = taxableInBracket * 0.10;
        console.log("Tax amount is " + taxAmount);
    } else if (income <= bracket3_limit) {
        const taxableInBracket1 = bracket2_limit - bracket1_limit;
        const taxableInBracket2 = income - bracket2_limit;
        taxAmount = (taxableInBracket1 * 0.10) + (taxableInBracket2 * 0.20);
        console.log(taxAmount);
    } else {
        const taxableInBracket1 = bracket2_limit - bracket1_limit;
        const taxableInBracket2 = bracket3_limit - bracket2_limit;
        const taxableInBracket3 = income - bracket3_limit;
        taxAmount = (taxableInBracket1 * 0.10) + (taxableInBracket2 * 0.20) + (taxableInBracket3 * 0.30);
        console.log(taxAmount);
    }
}

main();
