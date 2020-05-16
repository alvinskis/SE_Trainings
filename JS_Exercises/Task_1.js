const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let arrayOfNumbers = [];

readline.on('line', (input) => {
    if (isNaN(input)) {
        console.log(`${input} is not a number`)
        readline.close();
    }
    arrayOfNumbers.push(input);
    if (arrayOfNumbers.length == 10) {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if ((arrayOfNumbers[i] % 2) == 0) {
                console.log(`Even Number: ${arrayOfNumbers[i]}`);
            }
        }
        readline.close();
    }
})
