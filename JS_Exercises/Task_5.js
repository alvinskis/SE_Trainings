const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let triangleSides = [];
console.log('Enter three triangle sides: ');

readline.on('line', (input) => {
    triangleSides.push(input);
    if (triangleSides.length == 3) {
        readline.close();
        if (triangleSides[0] == triangleSides[1] && triangleSides[0] == triangleSides[2]) {
            console.log('Equilateral');
            process.exit();
        }
        else if (triangleSides[0] !== triangleSides[1] && triangleSides[0] !== triangleSides[2]) {
            console.log('Scalene');
            process.exit();
        }
        else {
            console.log('Isosceles');
            process.exit();
        }
    }
})