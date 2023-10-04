let boolean = true;
console.log(boolean)
boolean = false;
console.log(boolean);
boolean = true && false && true;
console.log (boolean);
boolean = true || false || true;
console.log (boolean);
boolean = !true;
console.log(boolean);
boolean = true && false || true && !false;
console.log(boolean);
num = '10';
boolean = num > 10;
boolean = num < 10;
boolean = num == 10;
boolean = num === 10; // checks type and value
boolean = num >= 10;
boolean = num <= 10;
boolean = num != 10;
boolean = num !== 10; // checks type and value
console.log(boolean);

if(num == 10) {
  console.log('võrdne kümnega');
} else {
    console.log('ei ole võrdne kümnega');
}

console.log(Boolean(num));
console.log(Boolean('asdasd'));
console.log(Boolean(0));
console.log(Boolean(''));

let  noValue = null;
let  noValue2;
console.log(noValue);
console.log(noValue2);
num = 1/0;
console.log(num);
num = -1/0;
console.log(num);num = 0/0;
console.log(num);
num = 0 * -1;
console.log(num);
num = 0.1 + 0.2;
console.log(num);
