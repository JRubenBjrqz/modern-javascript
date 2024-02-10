let a = 5;

if ( a >= 10 ) {
    console.log( 'A is greater or equal than 10');
} else {
    console.log( 'A is less than 10');
}

console.log( 'End' );

const today = new Date();
let day = today.getDay();

console.log({ day });

if ( day === 0 ) {
    console.log( 'Sunday' );
} else if ( day === 1 ) {
    console.log( 'Monday' );
} else if ( day === 2 ) {
    console.log('Tuesday');
} else {
    console.log( 'Other day' );
}