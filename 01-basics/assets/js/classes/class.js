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

const spiderman = new Person( 'Peter Parker', 'Spiderman', 'Friendly, neighborhood Spider-Man.'  );
const ironman = new Person( 'Tony Stark', 'Ironman', 'I\'m Ironman'  );

spiderman.myQuote();
// console.log( ironman );

spiderman.setFavoriteFood = 'Aunt May\'s cherry pie';

// console.log( spiderman.getFavoriteFood );
// console.log( spiderman );

// Person._counter = 2;

console.log('Static counter', Person._counter);
console.log( Person.counter );
Person.message();

Person.externalProperty = 'Hello World';
console.log( Person.externalProperty  );
console.log( Person );
