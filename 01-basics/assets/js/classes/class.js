class Persona {

    name = '';
    code = '';
    quote = '';

    constructor(
        name = 'No name',
        code = 'No code',
        quote = 'No quote',
    ) {
        this.name = name;
        this.code = code;
        this.quote = quote;
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

console.log( spiderman );
console.log( ironman );