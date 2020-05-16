const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let vowels = 'aeiouyAEIOUY';

readline.on('line', (input) => {
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] == input) {
            console.log(`${input} is vowel`);
            readline.close();
        }
    }
})
