const args = process.argv.slice(2);
let a=args[0];
let b=args[1];

const add=function(a,b){
    console.log(Number(a)+Number(b));
}

add(a,b);
