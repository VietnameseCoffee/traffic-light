import BaseElement from "./base-element";

class TrafficLight extends BaseElement {
  parent: HTMLElement;
  dom: HTMLElement;
  colors: Array<string>;
  light: number;
  cycle?: ReturnType<typeof setTimeout>;

  constructor(parent: HTMLElement) {
    super();
    const initLights = ["red", "yellow", "green"];
    this.parent = parent;
    this.dom = this.buildLight(initLights);
    this.colors = initLights;
    this.light = 0;

    const activeLight = this.dom.querySelector(
      `#${this.colors[this.light]}`
    ) as HTMLElement;
    this.addStyle(activeLight, {
      filter: "brightness(1)",
    });
  }

  append(): void {
    this.parent.append(this.dom);
  }

  change(): void {
    this.light = (this.light + (this.colors.length - 1)) % this.colors.length;

    this.colors.forEach((color, i) => {
      const light = this.getLight(color);
      const filter = i === this.light ? "brightness(1)" : "brightness(0.1)";
      this.addStyle(light, { filter });
    });
  }

  getLight(color: string): HTMLElement {
    return this.dom.querySelector(`#${color}`);
  }

  startCycle(): void {
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

  buildLight(initLights: Array<string>) {
    const trafficLight = document.createElement("div");
    this.addStyle(trafficLight, {
      backgroundColor: "#333333",
      border: "0.125rem solid #222222",
      width: "2rem",
      height: "4.5rem",
      padding: "0.125rem 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    });

    const lights = initLights.map((color) => {
      const light = document.createElement("div");
      const fill = document.createElement("div");
      this.addStyle(light, {
        borderRadius: "100%",
        height: "1.25rem",
        width: "1.25rem",
      });
      this.addStyle(fill, {
        backgroundColor: color,
        borderRadius: "100%",
        height: "1.25rem",
        filter: "brightness(0.1)",
        width: "1.25rem",
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
