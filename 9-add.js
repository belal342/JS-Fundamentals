let num=process.argv.slice(2);

if(isNaN(Number(num[0]))&& isNaN(Number(num[1]))){
  console.log(NaN);
}else{
  
    console.log(add(Number(num[0]),Number(num[1])));

}

function add(a, b) {
  return a + b;
}



