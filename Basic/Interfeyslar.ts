interface Shape {
    x: number;
    y: number;
}

function drawShape(shape: Shape) {
    console.log(shape.x.toString());
}

let shape: Shape = { x: 5, y: 2 };
drawShape(shape);

drawShape({ x: 5, y: 2 })