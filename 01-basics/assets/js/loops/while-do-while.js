const cars = [
    'Ford',
    'Mazda',
    'Honda',
    'Toyota',
];

console.log( 'While' );
let i = 0;
while( i < cars.length ) {
    console.log( cars[i] );
    i++;
}

console.log( 'Do While' );
let j = 0;
do { 
    console.log( cars[j] );
    j++
} while( cars[j] );
