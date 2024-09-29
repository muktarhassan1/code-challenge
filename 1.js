const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

rl.question('Enter student marks (0-100): ', (input) => {
    const marks = parseFloat(input);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('80');
    } else {
        const grade = getGrade(marks);
        console.log(`The grade for marks ${marks} is: ${grade}`);
    }

    rl.close();
});
