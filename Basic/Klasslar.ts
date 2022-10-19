interface IShape {
    width: number;
    height: number;
    draw(): void;
}

class Shape implements IShape {
    width: number;
    height: number;
    draw(): void {
        console.log(this.width);
        console.log(this.height)
    }
}

