import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const readlineInterface = readline.promises.createInterface({ input, output });
    
    const userInput = await readlineInterface.question("Enter month number (1-12): ");
    const monthNumber = parseInt(userInput.trim());
    
    readlineInterface.close();
    
    if (monthNumber < 1 || monthNumber > 12) {
        console.log("Invalid month");
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log("Spring");
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log("Summer");
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log("Autumn");
    } else {
        console.log("Winter");
    }
}

main();
