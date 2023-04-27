import Bug from "../assets/bug.png";

type model = "slow" | "medium" | "fast";
type direction = "left" | "right";

class Car {
  element: HTMLElement;
  length: number;
  model: model;
  vibration: boolean;
  yAxis: number;

  constructor(model: model, direction: direction = "left") {
    this.element = this.#genElement(model);
    this.model = model;
    this.length = 117;
    this.vibration = false;
  }

  move(): number {
    const newPosition = this.element.offsetLeft - 1;
    this.element.style.left = `${newPosition}px`;
    return newPosition;
  }

  vibrate(): void {
    const shake = Math.random() > 0.1 ? 1.5 : 0;

    const newTop = this.yAxis + shake;
    this.element.style.top = `${newTop}px`;
    this.vibration = !this.vibration;
  }

  /**********************  PRIVATE  **********************/

  #genElement(model: model): HTMLElement {
    const car = document.createElement("img");
    car.className = "car";
    car.src = Bug;
    car.alt = "";
    car.style.left = "770px";
    car.style.top = "14px";
    return car;
  }
}

export default Car;
