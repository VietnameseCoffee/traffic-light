import Background from "./background";
import BaseElement from "./base-element";
import TrafficLight from "./traffic_light";

class Game extends BaseElement {
  cars: string[];
  junctionLeft: number;
  junctionRight: number;
  trafficLight: TrafficLight;

  constructor(app: HTMLElement) {
    super();
    const junction = app.querySelector(".intersection") as HTMLElement;
    const pole = app.querySelector(".pole") as HTMLElement;

    this.trafficLight = new TrafficLight(pole);
    this.trafficLight.append();

    this.cars = [];
    this.junctionLeft = junction.offsetLeft;
    this.junctionRight = junction.offsetLeft + junction.clientWidth;
  }
}

export default Game;
