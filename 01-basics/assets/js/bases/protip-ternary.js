const theGreatest = ( a,b ) => ( a > b) ? a : b;

const haveMembership = ( member ) => ( member ) ? '2 dlls' : '10 dlls';

console.log( theGreatest( 20, 15 ) );
console.log( haveMembership( false ) );

const friend = true;

const friendArray = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    // ( () => 'Nick Fury' )()
    theGreatest( 10, 15 )
];

console.log( friendArray );

const grade = 65;
const americanGrade = grade >= 95 ? 'A+' :
                      grade >= 90 ? 'A'  :
                      grade >= 85 ? 'B+' :
                      grade >= 80 ? 'B'  :
                      grade >= 75 ? 'C+' :
                      grade >= 70 ? 'C'  : 'F';

console.log({ grade, americanGrade });