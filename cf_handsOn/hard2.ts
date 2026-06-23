import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const readlineInterface = readline.promises.createInterface({ input, output });
    
    const userInput = await readlineInterface.question("Enter month number and year (e.g., 2, 2016): ");
    const inputParts = userInput.split(',').map((part: string) => part.trim());
    
    const monthNumber = parseInt(inputParts[0]!);
    const yearNumber = parseInt(inputParts[1]!);
    
    const monthNames = ["", "January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    
    const monthName = monthNames[monthNumber]!;
    
    const isLeapYear = (yearNumber % 400 === 0) || (yearNumber % 4 === 0 && yearNumber % 100 !== 0);
    
    let daysInMonth = 0;
    
    if (monthNumber === 2) {
        daysInMonth = isLeapYear ? 29 : 28;
    } else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
        daysInMonth = 30;
    } else {
        daysInMonth = 31;
    }
    
    console.log(monthName + " " + yearNumber + " has " + daysInMonth + " days");
    
    readlineInterface.close();
}

main();
