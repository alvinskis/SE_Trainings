const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let s = [];

readline.on('line', (input) => {
    if (isNaN(input)) {
        console.log(`${input} is not a number`)
        readline.close();
    }

    for (let i = 1; i < input - 1; i++) {
        s[0] = input + input + input;
        s[i] = input + ' ' + input;
        s[input - 1] = input + input + input;
    }
    for (let y = 0; y < s.length; y++) {
        console.log(s[y]);
    }
})