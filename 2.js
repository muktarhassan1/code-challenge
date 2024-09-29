const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

rl.question('Enter the speed of the car (in km/h): ', (input) => {
    const speed = parseFloat(input);

    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed.");
    } else {
        calculateDemeritPoints(speed);
    }

    rl.close();
});
