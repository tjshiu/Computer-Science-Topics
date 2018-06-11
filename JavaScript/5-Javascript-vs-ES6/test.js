// var Shape = function(id, x, y) {
//   this.id = id;
//   this.location(x, y);
// };
//
// Shape.prototype.location = function(x, y) {
//   this.x = x;
//   this.y = y;
// };
//
// Shape.prototype.toString = function() {
//   return "Shape(" + this.id + ")";
// };
//
// Shape.prototype.getLocation = function() {
//   return {
//     x: this.x,
//     y: this.y,
//   };
// };
//
// var Circle = function(id, x, y, radius) {
//   Shape.call(this, id, x, y);
//   this.radius = radius;
// };
//
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
//
// Circle.defaultCircle = function() { //static function
//   return new Circle("default", 0, 0, 100);
// };
//
// Circle.prototype.toString = function () {
//   return "Circle > " + Shape.prototype.toString.call(this);
// };
//
// var defaultCircle = Circle.defaultCircle(); // call static function
//
// var myCircle = new Circle('123', '5px', '10px', 5); // create new instance
// console.log(myCircle.toString()); //Circle > Shape(123)
// console.log(myCircle.getLocation()); // {x: '5px', y: '10px'}

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.location(x, y);
  }

  location(x, y) { // <--- prototype function
    this.x = x;
    this.y = y;
  }

  toString() { // <-- prototype function
    return "Shape(" + this.id + ")";
  }

  getLocation() {
    return {
      x: this.x,
      y: this.y
    };
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y); // Call Shape's constructor (via super)
    this.radius = radius;
  }

  static defaultCircle() { // Static function
    return new Circle("default", 0, 0, 100);
  }

  toString() { // <- override toString of Shape
    return "Circle > " + super.toString(); // call "super" instead of "this" to access parent
  }
}

var defaultCircle = Circle.defaultCircle(); // call static function

var myCircle = new Circle('123', '5px', '10px', 5); // create new instance
console.log(myCircle.toString()); //Circle > Shape(123)
console.log(myCircle.getLocation()); // {x: '5px', y: '10px'}
