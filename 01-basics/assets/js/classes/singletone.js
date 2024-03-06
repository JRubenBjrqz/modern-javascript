class Singleton {
    
    static instance; // undefined
    name = '';

    constructor( name = '' ) {

        if( !!Singleton.instance ) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;

        // return this;
    }

}

const instance1 = new Singleton( 'Ironman' );
const instance2 = new Singleton( 'Spiderman' );

console.log( `instance1 name is: ${ instance1.name }` );
console.log( `instance2 name is: ${ instance2.name }` );