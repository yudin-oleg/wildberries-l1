// базовый класс Shape
class Shape{
    constructor(){}
    calculateSquare(){}
    calculatePerimeter(){}
}
// класс Rectagle
class Rectagle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    calculateSquare(){
        return this.width * this.height;
    }
    calculatePerimeter(){
        return this.width * 2 + this.height * 2;
    }
}
// класс Circle
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateSquare(){
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    }
}
// класс Triangle
class Triangle extends Shape{
    constructor(side1, side2, side3){
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateSquare(){
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    calculatePerimeter(){
        return this.side1 + this.side2 + this.side3;
    }
}

// тестирование
let rectangle = new Rectagle(5, 7);
let circle = new Circle(5);
let triangle = new Triangle(3, 4, 5);
console.log(rectangle.calculateSquare());
console.log(circle.calculatePerimeter());
console.log(triangle.calculateSquare());