import type { model } from "./car";

import Car from "./car";
import BaseElement from "./base-element";
import TrafficLight from "./traffic_light";

class Game extends BaseElement {
  autoGen?: ReturnType<typeof setTimeout>;
  Car: typeof Car;
  currentLane: number;
  lane1: Car[];
  lane2: Car[];
  junction: HTMLElement;
  trafficLight: TrafficLight;
  road: HTMLElement;

  constructor(
    app: HTMLElement,
    carMaker: typeof Car,
    trafficLight: TrafficLight
  ) {
    super();
    const junction = app.querySelector(".intersection") as HTMLElement;
    const road = app.querySelector(".road-h") as HTMLElement;

    this.Car = carMaker;
    this.trafficLight = trafficLight;
    this.trafficLight.append();

    this.currentLane = 0;
    this.lane1 = [];
    this.lane2 = [];
    this.road = road;
    this.junction = junction;
    this.autoGen = setTimeout(() => {}, 0);
  }

  addCar(model: model) {
    if (this.lane1.length + this.lane2.length > 16) return;
    const newCar = new this.Car(model);

    if (this.currentLane === 0) {
      this.lane1.push(newCar);
      newCar.yAxis = -14;
    } else if (this.currentLane === 1) {
      this.lane2.push(newCar);
      newCar.yAxis = 34;
    }
    this.road.append(newCar.element);
  }

  changeLane(): number {
    this.currentLane = (this.currentLane + 1) % 2;
    return this.currentLane;
  }

  start() {
    this.#moveSlow();
    this.#moveMedium();
    this.#moveFast();
    this.#clearCars();
  }

  stopAutoGen() {
    clearTimeout(this.autoGen);
  }

  triggerAutoGen() {
    this.autoGen = this.#autoGenCar();
  }

  /**********************  PRIVATE  **********************/

  #autoGenCar(): ReturnType<typeof setTimeout> {
    const time = Math.floor(Math.random() * 5000) + 1000;
    const models: model[] = ["slow", "medium", "fast"];
    return setTimeout(() => {
      const oldLane = this.currentLane;
      const lane = Math.random() > 0.5 ? 0 : 1;
      const model: model = models[Math.floor(Math.random() * 3)];
      this.currentLane = lane;
      this.addCar(model);
      this.currentLane = oldLane;
      this.autoGen = this.#autoGenCar();
    }, time);
  }

  #moveSlow = (): void => {
    this.#evalLane(this.lane1, "slow");
    this.#evalLane(this.lane2, "slow");

    window.requestAnimationFrame(this.#moveSlow);
  };

  #moveMedium = (): void => {
    setTimeout(() => {
      this.#evalLane(this.lane1, "medium");
      this.#evalLane(this.lane2, "medium");

      this.#moveMedium();
    }, 7);
  };

  #moveFast(): void {
    setInterval(() => {
      this.#evalLane(this.lane1, "fast");
      this.#evalLane(this.lane2, "fast");
    }, 7);
  }

  #clearCars = () => {
    setInterval(() => {
      this.#clearLane(this.lane1);
      this.#clearLane(this.lane2);
    }, 500);
  };

  /**********************  HELPERS  **********************/

  #canMove = (car: Car, prevCarDistance: number): boolean => {
    let canMove = false;

    // check if last car is too close
    if (car.element.offsetLeft < prevCarDistance + 12) return false;

    switch (this.trafficLight.getColor()) {
      case "red":
        canMove = this.#isBeforeJunction(car) || this.#isFarInJunction(car);
        break;
      case "yellow":
        canMove =
          this.#haveTimeToContinue(this.trafficLight) ||
          this.#isBeforeJunction(car) ||
          this.#isFarInJunction(car);
        break;
      case "green":
        canMove = true;
        break;
      default:
    }

    return canMove;
  };

  #clearLane(lane: Car[]) {
    const car = lane[0];
    if (car && car.element.offsetLeft < -120) {
      car.element.remove();
      lane.shift();
    }
  }

  #evalLane = (lane: Car[], filter: model) => {
    let prevCarEnd = -100000;
    for (let car of lane) {
      if (car.model === filter && this.#canMove(car, prevCarEnd)) {
        prevCarEnd = car.move() + car.length;
      }
      prevCarEnd = car.element.offsetLeft + car.length;
      car.vibrate();
    }
  };

  #haveTimeToContinue = (trafficLight: TrafficLight): boolean => {
    const timeYellowBegan = trafficLight.timeYellowBegan;
    const currTime = new Date().getTime();
    return currTime < timeYellowBegan + 1500;
  };

  #isBeforeJunction = (car: Car): boolean => {
    const right = this.junction.offsetLeft + this.junction.clientWidth;
    return car.element.offsetLeft > right;
  };

  #isFarInJunction = (car: Car): boolean => {
    const right = this.junction.offsetLeft + this.junction.clientWidth - 20;
    return car.element.offsetLeft < right;
  };
}

export default Game;
