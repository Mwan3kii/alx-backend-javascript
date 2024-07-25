import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    // Return an instance of the Car class instead of EVCar
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}