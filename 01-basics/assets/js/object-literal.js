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

