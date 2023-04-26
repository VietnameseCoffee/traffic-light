import { addStyle } from "./util/util";

class TrafficLight {
  constructor(parent, initLights, duration) {
    this.parent = parent;
    this.dom = this.#buildLight(initLights);
    this.colors = initLights;
    this.light = 0;

    const activeLight = this.dom.querySelector(`#${this.colors[this.light]}`);
    addStyle(activeLight, {
      opacity: "1",
    });
  }

  append() {
    this.parent.append(this.dom);
  }

  change() {
    this.light = (this.light + (this.colors.length - 1)) % this.colors.length;

    this.colors.forEach((color, i) => {
      const light = this.getLight(color);
      const opacity = i === this.light ? "1" : "0.16";
      addStyle(light, { opacity });
    });
  }

  getLight(color) {
    return this.dom.querySelector(`#${color}`);
  }

  startCycle() {
    this.light = 0;
    this.cycle = setTimeout(() => {
      this.change();
      this.cycle = setTimeout(() => {
        this.change();
        this.cycle = setTimeout(() => {
          this.change();
          this.startCycle();
        }, 3000);
      }, 6000);
    }, 4000);
  }

  stopCycle() {
    clearTimeout(this.cycle);
  }

  /*****************************************
   * PRIVATE
   */

  #buildLight(initLights) {
    const trafficLight = document.createElement("div");
    addStyle(trafficLight, {
      border: "2px solid black",
      width: "3rem",
      height: "8rem",
      padding: "0.5rem 0",
      backgroundColor: "#bfbfbf",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    });

    const lights = initLights.map((color) => {
      const light = document.createElement("div");
      const fill = document.createElement("div");
      addStyle(light, {
        border: "2px solid #4f4f4f",
        borderRadius: "100%",
        height: "2rem",
        width: "2rem",
      });
      addStyle(fill, {
        backgroundColor: color,
        borderRadius: "100%",
        height: "2rem",
        opacity: "0.16",
        width: "2rem",
      });
      light.id = `${color}-light`;
      fill.id = color;
      light.append(fill);
      return light;
    });

    trafficLight.append(...lights);

    return trafficLight;
  }
}

export default TrafficLight;
