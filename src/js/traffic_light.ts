import BaseElement from "./base-element";

export type light = "red" | "yellow" | "green";

type colorMap = {
  green: string;
  red: string;
  yellow: string;
};
class TrafficLight extends BaseElement {
  parent: HTMLElement;
  dom: HTMLElement;
  colors: Array<light>;
  currLight: number;
  cycle?: ReturnType<typeof setTimeout>;
  timeYellowBegan: number;

  constructor(parent: HTMLElement) {
    super();
    this.parent = parent;
    this.colors = this.#getLightsArray();
    this.currLight = 0;
    this.dom = this.#buildLight(this.colors);
    this.timeYellowBegan;

    const activeLight = this.dom.querySelector(
      `#${this.colors[this.currLight]}`
    ) as HTMLElement;
    this.addStyle(activeLight, {
      filter: "brightness(1)",
    });
  }

  append(): void {
    this.parent.append(this.dom);
  }

  change(): void {
    this.currLight =
      (this.currLight + (this.colors.length - 1)) % this.colors.length;

    this.colors.forEach((color, i) => {
      const light = this.getLight(color);
      const filter = i === this.currLight ? "brightness(1)" : "brightness(0.1)";
      this.addStyle(light, { filter });
    });
  }

  getLight(color: string): HTMLElement {
    return this.dom.querySelector(`#${color}`);
  }

  getColor(): light {
    const lights = this.#getLightsArray();
    return lights[this.currLight];
  }

  isRed(): boolean {
    return this.currLight === 0;
  }

  isYellow(): boolean {
    return this.currLight === 1;
  }

  isGreen(): boolean {
    return this.currLight === 2;
  }

  startCycle(): void {
    this.cycle = setTimeout(() => {
      // red to green
      this.change();
      this.cycle = setTimeout(() => {
        // green to yellow
        this.timeYellowBegan = new Date().getTime();
        this.change();
        this.cycle = setTimeout(() => {
          // yellow to red
          this.change();
          this.startCycle();
        }, 2000);
      }, 7000);
    }, 4000);
  }

  getState(): light {
    return this.colors[this.currLight];
  }

  stopCycle(): void {
    clearTimeout(this.cycle);
    if (this.isRed()) return;

    this.timeYellowBegan = new Date().getTime();
    if (this.isYellow()) {
      setTimeout(() => {
        this.change();
      }, 2000);
    }

    if (this.isGreen()) {
      this.change();
      setTimeout(() => {
        this.change();
      }, 2050);
    }
  }

  /*****************************************
   * PRIVATE
   */

  #buildLight(initLights: light[]) {
    const trafficLight = document.createElement("div");
    this.addStyle(trafficLight, {
      backgroundColor: "#333333",
      border: "2px solid #222222",
      width: "36px",
      height: "72px",
      padding: "2px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    });

    const colorMap: colorMap = {
      green: "#30ff30",
      red: "red",
      yellow: "yellow",
    };

    const lights = initLights.map((color: light) => {
      const light = document.createElement("div");
      const fill = document.createElement("div");
      this.addStyle(light, {
        borderRadius: "100%",
        height: "20px",
        width: "20px",
      });
      this.addStyle(fill, {
        backgroundColor: colorMap[color],
        borderRadius: "100%",
        height: "20px",
        filter: "brightness(0.1)",
        width: "20px",
      });
      light.id = `${color}-light`;
      fill.id = color;
      light.append(fill);
      return light;
    });

    trafficLight.append(...lights);

    return trafficLight;
  }

  #getLightsArray(): light[] {
    return ["red", "yellow", "green"];
  }
}

export default TrafficLight;
