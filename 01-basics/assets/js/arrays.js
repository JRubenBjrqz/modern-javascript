
// const arr = new Array(10);
// const arr = [];
// console.log( arr );

let videoGames = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoGames });

console.log( videoGames[0] );

let stuffArray = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({ stuffArray });
// console.log( stuffArray[2] );
console.log( stuffArray[7][4][1] );
