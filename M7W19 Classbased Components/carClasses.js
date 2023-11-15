class Car {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  describeCar() {
    return `This is a ${this.color} ${this.brand} ${this.model}.`
  }
}

const myToyota = new Car("blue", "Toyota", "Corolla");

console.log(myToyota);
console.log(myToyota.describeCar());

class ElectricCar extends Car {
  constructor(color, brand, model, batteryCap = 100) {
    super(color, brand, model);
    this.batteryCap = batteryCap;
  }

  describeCar() {
    return `This is a ${this.color} ${this.brand} ${this.model} with a range of ${this.batteryCap}/1000vw.`
  }
}

const myTelsa = new ElectricCar("Red", "Tesla", "Model 3");
console.log(myTelsa);
console.log(myTelsa.describeCar());