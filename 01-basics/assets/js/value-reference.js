let = a;
let = b;
a = 30;

console.log({ a, b });

let juan = { firstName: 'Juan' };
let ana = { ...juan };
ana.firstName = 'Ana';

console.log({ juan, ana });

const changeFirstName = ( user ) => {
    user.firstName = 'Tony';
    return user;
}

let peter = { firstName: 'Peter' };
let tony = changeFirstName( peter );

console.log({ peter, tony });

// Arrays

const fruits = ['Apple', 'Watermelon', 'Avocado'];

console.time('slice');
const sliceOtherFruits = fruits.slice();
console.timeEnd('slice');

console.time('spread');
const otherFruits = [ ...fruits ];
console.timeEnd('spread');

otherFruits.push('Mango');

console.table({ fruits, otherFruits });