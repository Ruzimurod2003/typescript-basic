var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log(this.width);
        console.log(this.height);
    };
    return Shape;
}());
var shape = new Shape();
shape.width = 100;
shape.height = 200;
shape.draw();
