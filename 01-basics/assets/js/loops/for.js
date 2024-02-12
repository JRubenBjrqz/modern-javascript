const heros = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Aquaman',
];

console.warn( 'For' );
for( let i = 0 ; i < heros.length; i++ ) {
    console.log( heros[i] );
}

console.warn( 'For in' );
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn( 'For of' );
for( let hero of heroes ) {
    console.log( hero );
}