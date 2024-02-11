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
    console.log( 'It isnt Monday, Tuesday or Sunday.' );
}

day = 3;

const week = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

const arrayWeek = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Tuesday', 
    'Friday', 
    'Saturday'
];

console.log( week[day] || 'Día no definido');
console.log( arrayWeek[day] || 'Día no definido');

