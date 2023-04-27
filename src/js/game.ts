import Car from "./car";
import BaseElement from "./base-element";
import TrafficLight from "./traffic_light";

class Game extends BaseElement {
  Car: typeof Car;
  lane1: Car[];
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

    this.lane1 = [];
    this.road = road;
    this.junction = junction;
  }

  addCar() {
    if (this.lane1.length > 10) return;
    const newCar = new this.Car("slow");
    this.lane1.push(newCar);
    this.road.append(newCar.element);
    newCar.yAxis = -14;
  }

  start() {
    this.#moveSlow();
    this.#clearCar();
    // this.#moveFast();
  }

  /**********************  PRIVATE  **********************/

  #moveSlow = (): void => {
    let car: Car;
    let prevCarEnd = -100000;
    for (car of this.lane1) {
      if (car.model === "slow" && this.#canMove(car, prevCarEnd)) {
        prevCarEnd = car.move() + car.length;
      }
      prevCarEnd = car.element.offsetLeft + car.length;
      car.vibrate();
    }

    window.requestAnimationFrame(this.#moveSlow);
  };

  #clearCar = () => {
    setInterval(() => {
      const firstCar = this.lane1[0];
      if (firstCar && firstCar.element.offsetLeft < -200) {
        firstCar.element.remove();
        this.lane1.shift();
      }
    }, 1000);
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
