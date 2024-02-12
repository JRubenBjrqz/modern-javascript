// On weekdays, we open at 11
// but on weekends, we open at 9

// Visit our website to see if we're open today

const day = 0;
const currentHour = 10;

let openingHour;
let message;

// if ( day === 0 || day === 6 ) {
// if ( [0,6].includes( day ) ) {
//     console.log( 'Its weekend' );
//     openingHour = 9;
// } else {
//     console.log( 'Its weekday' );
//     openingHour = 11;
// }

openingHour = ( [0,6].includes( day ) ) ? 9 : 11;

// if ( currentHour >= openingHour ) {
//     message = 'Its open';
// } else {
//     message = `Its close, today we open at ${ openingHour }`;
// }

message = ( currentHour >= openingHour ) ? `Its open` : `Its close, today we open at ${ openingHour }`;

console.log({ openingHour })