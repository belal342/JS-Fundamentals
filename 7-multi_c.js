const args = process.argv.slice(2);
if(!Number(args[0])){
    console.log("Missing number of occurrences");
}
else{
    for (let i=0;i<Number(args[0]);i++){
        console.log("C is fun");
    }
}