const obj = {
  username: "Alvin",
  hello: () => {
    return 'Hello'
  }
}

console.log(obj.hello());

const sayHello = (name) => {
  return 'Hello! ' + name
}

sayHello("Alvin");

class Rectangle {
  // constructor is the blueprint of your class
  constructor(length, width) {
    this.width = width;
    this.length = length;
  } 

  // we can add functions
  area() {
    return this.width * this.length
  }
}

const myRectangle = new Rectangle(4, 3)
console.log(myRectangle);
console.log(myRectangle.area());

// I want to make a new class but it's going to use all the things from the Rectangle class
class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;
  }

  volumne() {
    return this.width * this.length * this.height;
  }

  volumne2() {
    return this.area() * this.height;
  }
}

const myPrism = new Prism(3, 4, 5)

console.log(myPrism.volumne2());
console.log(myPrism.area());