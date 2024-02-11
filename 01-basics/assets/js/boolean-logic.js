const returnTrue = () => {
    console.log('Return true');
    return true;
}

const returnFalse = () => {
    console.log('Return false');
    return false;
}

console.warn('Not o la negación');
console.log( true ); //true
console.log( !true ); //false
console.log( !true ); //true

console.log( !returnFalse() ); //true

console.warn( 'And' ); //true if every value is true
console.log( true && true ); //true
console.log( true && !false ); //true

console.warn( '=========' ); 
console.log( returnFalse() && returnTrue() ); //false
console.log( returnTrue && returnFalse() ); // false

console.warn( '==== && ====' ); 
returnFalse() && returnTrue(); 

console.warn( 'Or' ); //true
console.log( true || false );
console.log( false || true );

console.log( returnTrue() || returnFalse() );