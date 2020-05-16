const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let customerId;
let customerName;
let unit;

readline.question('Enter Id: ', (id) => {
    readline.question('Enter Name: ', (name) => {
        readline.question('Enter Unit: ', (input) => {
            customerId = id;
            customerName = name;
            unit = input;
            if (isNaN(unit) || unit < 100) {
                console.log(`${unit} bill is not correct`)
                process.exit();
            }
            if (unit < 199) {
                unit = unit * 1.2;
            }
            else if (200 <= unit && unit < 400) {
                unit = unit * 1.5;
            }
            else if (400 <= unit && unit < 600) {
                unit = unit * 1.8;
                unit = unit * 1.15;
            }
            else if (600 <= unit) {
                unit = unit * 2;
                unit = unit * 1.15;
            }

            console.log(`Customer Id: ${customerId}, Name: ${customerName}, Bill: ${unit}`);
            process.exit();
        })
    })
})

