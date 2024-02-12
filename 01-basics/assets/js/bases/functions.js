function greet() {
    console.log('Hello World');
}

//Anonymous function
const greet2 = function( name ) {
    console.log('Hello' + name);
}

function greet3( name ) {
    console.log( arguments );
    console.log( 'Hello' + name );
    return 1, 2;

    //This code is not executed
    console.log( 'Code after return' );
}

//Arrow function
const arrowGreet = () => {
    console.log( 'Hello Arrow' );
}

const arrowGreet2 = ( name ) => {
    console.log( 'Hello' + name );
}

const returnGreet = greet( 'Fernando', 40, true, 'Mexico' ); //1

// greet();
// greet2( 'Rubio' );
// greet3( 'Tulio', 24, true, 'Mexico' );
// arrowGreet();
// arrowGreet2( 'Maya' );

function plus( a, b ) {
    return a + b;
}

// const arrowPlus = ( a, b ) => {
//     return a + b;
// }

const arrowPlus = ( a, b ) => a + b;

// console.log( plus(2,6) );
// console.log( arrowPlus(2,6) );

function getRandom() {
    return Math.random();
}

const arrowGetRandom = () => Math.random();

console.log( getRandom() );
console.log( arrowGetRandom() );
