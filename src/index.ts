const s = require("./styles/styles.css");

import type { Style } from "./js/base-element";
import Backdrop from "./js/backdrop";
import TrafficLight from "./js/traffic_light";

console.log("hello type");

new Backdrop();

const root = document.querySelector(".pole") as HTMLElement;
const light = new TrafficLight(root);
light.append();

// const startButton = document.createElement("button");
// startButton.onclick = () => light.startCycle();
// startButton.innerText = "Start";

// const endButton = document.createElement("button");
// endButton.onclick = () => light.stopCycle();
// endButton.innerText = "End";
// root.append(startButton);
// root.append(endButton);