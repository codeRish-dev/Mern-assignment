// program to return 9735 > 5379

let n=9735;
let r=0;
while(n>0){
    let k=r*10+n%10;
    n=Math.floor(n/10);
    process.stdout.write(String(k));
    
}
  
