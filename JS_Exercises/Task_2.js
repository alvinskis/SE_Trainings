let num1 = 1;
let num2 = 0;
let num3;

for (let i = 0; i < 8; i++) {
    num3 = num1 + num2;
    console.log(num2);
    num1 = num2;
    num2 = num3;
}