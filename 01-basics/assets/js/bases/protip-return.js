// function createUser( firstName, lastName ) {
//     return { firstName,lastName }
// }

const createUser = ( firstName, lastName ) => ({ firstName, lastName });

const user = createUser( 'Rubén', 'Bojórquez' );
console.log( user );

function printArguments() {
    console.log( arguments );
}

const arrowPrintArguments = ( age, ...args ) => {
    // console.log({ age, args });
    return args;
} 

const [ married, alive, firstName, greet ] = arrowPrintArguments( 3, true, false, 'Rubén', 'Hi');
console.log({ married, alive, firstName, greet });

const { lastName: newLastName } = createUser( 'Rubén', 'Bojórquez' );
console.log({ newLastName });

const tonyStark = {
    fullName: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const printProperties = ( character ) => {
//     console.log( 'name', character.fullName );
//     console.log( 'codeName', character.codeName );
//     console.log( 'alive', character.alive );
//     console.log( 'age', character.age );
//     console.log( 'suits', character.suits );
// }

const printProperties = ({ fullName, codeName, alive, age = 24, suits }) => {
    console.log({ fullName });    
    console.log({ codeName });
    console.log({ alive });
    console.log({ age });
    console.log({ suits });
}



