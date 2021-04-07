// program to find GCD of two number.
let num1=128;
let num2=96;
let gcd;

for (let i = 1;i <= num1 && i<=num2; i++) {
    if (num1%i===0 && num2%i===0) {
        gcd=i;
    }
    
}console.log(gcd);