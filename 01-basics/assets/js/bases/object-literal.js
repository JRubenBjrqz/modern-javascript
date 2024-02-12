//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

//Use let if I plan to add more properties to my 
//object, and if I don't want it to change, use const
//If I use const, I will not be able to change the
//property values

let character = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '10880, 90265',
        ubication: 'Malibu, California'
    },
    'last-movie': 'Infinity War'
};

console.log( character );
console.log( 'Name', character.name );
console.log( 'Name', character['name'] );
console.log( 'Edad', character.edad );

console.log( 'Coords', character.coords );
console.log( 'Lat', character.coords.lat );

console.log( 'No. Suits', character.suits.length );
console.log( 'Last suit', character.suits[ character.suits.length - 1 ] );

const x = 'alive';
console.log( 'Alive', character[x] );

console.log( 'Last movie', character['last-movie'] );

//Details

//This reserved word removes the property
delete character.age;
console.log( character );

character.married = true;

// Value pairs
const pairEntries = Object.entries( character );
console.log( pairEntries );

// character = true;
console.log( character );

Object.freeze( character );

character.money = 10000000;
character.money = false;
console.log( character );

const properties = Object.getOwnPropertyNames( character );
const values = Object.values( character );
console.log( properties, values );

