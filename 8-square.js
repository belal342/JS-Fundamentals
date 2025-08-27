const args = process.argv.slice(2);
if(!Number(args[0])){
    console.log("Missing size");
}
else{
    for (let i=0;i<Number(args[0]);i++){     
            console.log("x".repeat(Number(args[0])));
    }
}