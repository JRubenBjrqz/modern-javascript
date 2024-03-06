class Persona {

    name = '';
    code = '';
    quote = '';
    food = '';

    constructor(
        name = 'No name',
        code = 'No code',
        quote = 'No quote',
    ) {
        this.name = name;
        this.code = code;
        this.quote = quote;
    }

    set setFavoriteFood( food ) {
        this.food = food.toUpperCase();
    }

    get getFavoriteFood() {
        return `${ this.nombre }'s favorite food is ${ this.food }`
    }

    whoAmI() {
        console.log( `I'm ${ this.name } and my identity is ${ this.code }` );
    }

    myQuote() {
        console.log( `I'm ${ this.name } and I say: ${ this.quote }` );
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Friendly, neighborhood Spider-Man.'  );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'I\'m Ironman'  );

spiderman.myQuote();
// console.log( ironman );

spiderman.setFavoriteFood = 'Aunt May\'s cherry pie';

console.log( spiderman.getFavoriteFood );
console.log( spiderman );