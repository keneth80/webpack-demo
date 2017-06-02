import * as calculation from './module/calculation';
import Cat from './Cat';

var x = 10;
var y = 20;

console.log('sum', calculation.sum(x,y));
console.log('subtract', calculation.subtract(x,y));



let myCat = new Cat("Momo");
console.log(myCat.getName()); // Name is Momo
console.log(myCat.bawl());   // "야옹~~~~~~"

console.log(PRODUCTION, VERSION);
