const args = process.argv.slice(2);

 const factorial = function(n) {
         if (n == 0) 
            return 1;
        else {
            return (n * factorial(n - 1));
        }

    }

if(!Number(args[0])){
    console.log(1);
}else{
    
    console.log(factorial(args[0]));
    }

