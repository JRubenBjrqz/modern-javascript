class Rectangle {

    #area = 0;

    constructor( length = 0, width = 0 ) {
        this.length = length;
        this.width = width;

        this.#area = this.length * this.width;
    }

    calculationArea() {
        console.log( this.#area * 2 );
    }

}

const rectangle = new Rectangle( 10, 15 );
// rectangle.#area = 100;

console.log( rectangle );