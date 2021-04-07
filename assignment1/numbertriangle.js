//  program to print
// 1
// 12
// 123
// 1234
// 12345

let n=5;
let row=1;
while (row<=n) {
    
    let col=1;
    while (col<=row) {
        process.stdout.write(String(col));
        col=col+1;
    }
    process.stdout.write("\n");
    row+=1;
}
