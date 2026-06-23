import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function main() {
    const readlineInterface = readline.promises.createInterface({ input, output });
    
    const firstInput = await readlineInterface.question("Enter classes held and classes attended (e.g., 100, 80): ");
    const inputParts = firstInput.split(',').map((part: string) => part.trim());
    
    const totalClassesHeld = parseInt(inputParts[0]!);
    const classesStudentAttended = parseInt(inputParts[1]!);
    
    const attendancePercentage = (classesStudentAttended / totalClassesHeld) * 100;
    
    const minimumAttendanceRequired = 75;
    const hasEnoughAttendance = attendancePercentage >= minimumAttendanceRequired;
    
    let hasMedicalCause = false;
    
    if (hasEnoughAttendance) {
        console.log(Math.floor(attendancePercentage) + "% Allowed");
        readlineInterface.close();
    } else {
        if (inputParts.length > 2) {
            const medicalCauseValue = inputParts[2]!.toUpperCase();
            hasMedicalCause = medicalCauseValue === 'Y' || medicalCauseValue === 'YES';
        } else {
            const medicalCauseAnswer = await readlineInterface.question("Do you have medical cause? (Y/N): ");
            hasMedicalCause = medicalCauseAnswer.trim().toUpperCase() === 'Y';
        }
        
        readlineInterface.close();
        
        if (hasMedicalCause) {
            console.log(Math.floor(attendancePercentage) + "% Allowed");
        } else {
            console.log(Math.floor(attendancePercentage) + "% Not allowed");
        }
    }
}

main();
