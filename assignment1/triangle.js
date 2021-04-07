// program to print
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

let n=5;
let j=0;
while(j<n){
    let m=0;
    while (m<=j) {
        process.stdout.write("* ");
        m=m+1;  
    }
    process.stdout.write("\n");
    
    j=j+1;
}