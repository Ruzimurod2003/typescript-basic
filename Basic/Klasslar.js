var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log(this.width);
        console.log(this.height);
    };
    return Shape;
}());
