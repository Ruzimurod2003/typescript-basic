function drawShape(shape) {
    console.log(shape.x.toString());
}
var shape = { x: 5, y: 2 };
drawShape(shape);
drawShape({ x: 5, y: 2 });
