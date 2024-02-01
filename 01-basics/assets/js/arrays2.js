let games = ['Zelda', 'Mario', 'Spiderman', 'FF7'];
console.log( 'Length:', games.length );

let first = games[ 2 - 2 ];
let last = games[ games.length - 1 ];

console.log({ first, last });

games.forEach( (element, index, arr) => {
    console.log({ element, index, arr });
});

//Add a new element to the last position
let newLength = games.push( 'F-Zero' );
console.log({ newLength, games });

//Add a new element to the first position
newLength = games.unshift( 'Fire Emblem' );
console.log({ newLength, games });

//Remove the last element from
let removedGame = games.pop();
console.log({ removedGame });

let pos = 1;

console.log( games );
//Removes elements from an array
let removedGames = games.splice( pos, 2 );
console.log({ removedGames, games });

let spidermanIndex = games.indexOf('Spiderman');