class Person {

    static personObject({ name, lastName, country }) {
        return new Person( name, lastName, country );
    }

    constructor( name, lastName, country) {
        this.name = name;
        this.lastName = lastName;
        this.country = country;
    }

    getInfo() {
        console.log( `info: ${ this.name }, ${ this.lastName }, ${ this.country }` )
    }
}

const name1 = 'Gloria',
      lastName1 = 'Morales',
      country1 = 'Mexico';

const rbojorquez = {
    name: 'Rubén',
    lastName: 'Bojórquez',
    country: 'Mexico'
}

const person1 = new Person( name1, lastName1, country1 );
const person2 = Person.personObject( rbojorquez );

persona1.getInfo();
persona2.getInfo();