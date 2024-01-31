let firstName = 'Peter';
console.log( firstName );

firstName = 'Ben';
console.log( firstName );

firstName = 'May';
//typeof allows you to know the variable type
console.log( typeof firstName );

//JavaScringe moment
firstName = 123;
console.log( typeof firstName );

let age = 33;
console.log( typeof age );

age = 33.0001;
console.log( typeof age );

let SpidermanSuperpower;
//It's 'Undefined' because you didn't provide a value
console.log( typeof SpidermanSuperpower );

let isNull = null;
//In JavaScringe, everything is an object except for primitives values
console.log( typeof isNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );

//False
console.log( typeof symbol1 === symbol2 );