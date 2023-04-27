import BaseElement from "./base-element";

type light = "red" | "yellow" | "green";

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

  constructor(parent: HTMLElement) {
    super();
    const initLights: light[] = ["red", "yellow", "green"];
    this.parent = parent;
    this.dom = this.#buildLight(initLights);
    this.colors = initLights;
    this.currLight = 0;

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

  startCycle(): void {
    this.currLight = 0;
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

  getState(): light {
    return this.colors[this.currLight];
  }

  stopCycle(): void {
    clearTimeout(this.cycle);
  }

  /*****************************************
   * PRIVATE
   */

  #buildLight(initLights: Array<string>) {
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
}

export default TrafficLight;
