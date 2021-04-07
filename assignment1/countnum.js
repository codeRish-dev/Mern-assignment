// program for count number digit.
let n = 4759;
let i = 0;
while (n != 0) {
    i++;
    n = Math.floor(n / 10);
}
console.log(i);
