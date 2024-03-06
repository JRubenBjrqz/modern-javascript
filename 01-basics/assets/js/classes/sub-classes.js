class Person {

    static  _counter = 0;
    static get counter() {
        return Persona._counter + ' instances';
    }

    static message() {
        console.log( this.name ); // undefined
        console.log( 'Hi everyone, I\'m an static method' );
    }

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

        Person._counter++;
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

class Hero extends Person{

    constructor( name, code, quote ) {
        super( name, code, quote );   

        this.clan = 'Avengers';
    }

    whoAmI() {
        console.log( `I'm ${ this.name }, ${ this.clan }` );
        super.whoAmI(); 
    }

}

const spiderman = new Hero( 'Peter Parker', 'Spiderman', 'Friendly, neighborhood Spider-Man.'  );
// const spiderman = new Hero(  );

console.log( spiderman );
spiderman.whoAmI();
