let num1 = 0;
let num2 = 1;
let sum = 0;
while(num2<4_000_000){
    if(num2%2===0){
        sum+=num2;
    }
    let temp = num2;
    num2 = num1+num2;
    num1 = temp;
}
console.log(sum);