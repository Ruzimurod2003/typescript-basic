interface IShape {
    x: number;
    y: number;
    draw(): void;
}
//Access Modefier
//private x: number;
//protected y: number;
//public z: number;

class Shape implements IShape {
    constructor(x: number, y: number) {
        x = this.x;
        y = this.y;
    }
    x: number;
    y: number;
    draw(): void {
        console.log(this.x);
        console.log(this.y);
    }
}

let shape = new Shape(20, 32);