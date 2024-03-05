const ruben = {
    name: 'Rubén',
    age: 24,
    print() {
        console.log( `Nombre: ${ this.name } - age: ${ this.age }` );
    }
}

function Person( name, age ) {
    this.name = name;
    this.age = age;

    this.print = function() {
        console.log( `Nombre: ${ this.name } - age: ${ this.age }` );
    }
}

const tyler = new Person( 'Tyler', 35 );
const josh = new Person('Josh', 35 );

tyler.print();
josh.print();
