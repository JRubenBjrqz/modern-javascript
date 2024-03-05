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

}

const spiderman = new Persona( 'Peter Parker', 'Spider', 'Friendly, neighborhood Spider-Man.'  );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'I\'m Ironman'  );
console.log(ironman);