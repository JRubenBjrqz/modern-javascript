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
}

//Arrow function
const arrowGreet = () => {
    console.log( 'Hello Arrow' );
}

const arrowGreet2 = ( name ) => {
    console.log( 'Hello' + name );
}

greet();
greet2( 'Rubio' );
greet3( 'Tulio', 24, true, 'Mexico' );
arrowGreet();
arrowGreet2( 'Maya' );