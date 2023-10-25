function hello(){
    console.log('hello');
}

hello();
hello();

let hello2 = () => console.log('hello2');

hello2();

let hello3 = () => {
    console.log('hello3');
}

hello3();

function sum(a, b){
  console.log(a+b);
}

sum(1, 4);

sum(5, 7);

let helloName = name => console.log('hello' + name);

helloName('Matten');
helloName('Karma');

function sum2(a, b){
     return a+b;
}

let answer = sum2(3, 4);
console.log(sum2(4,7));

function logic(bool){
    if(bool){
        return'true'
    } 
    return 'false'
    
}

console.log(logic(true));
console.log(logic(false));

function recursion(i){
    if(i<10){
        console.log(i);
        recursion(i+1);
    }
}

recursion(0);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

let powers = array.map( num => num*num);
console.log(powers);
let even = array.filter( num => num%2==0);
console.log(even);
let arraySum = array.reduce((sum, num) => sum+num);
console.log(arraySum);
let sorted = array.sort((a, b) => {
    if(a>b){
        return 1;
    } else if (a<b){
        return -1;
    } else {
        return 0;
    }
});
sorted = array.sort((a, b) => b-a);
console.log(sorted);

array.forEach(num =>{
    console.log(num)
});

let object = {
    hello: () => {
        console.log('object Hello')
    },
    hello2(){
        console.log('object Hello2')
    }
}

object.hello();
object.hello2();