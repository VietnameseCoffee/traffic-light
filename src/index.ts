const s = require("./styles/styles.css");

import Game from "./js/game";
import TrafficLight from "./js/traffic_light";

const app = document.getElementById("app");

const game = new Game(app);

const buttons = document.getElementById("buttons");
const root = document.querySelector(".pole") as HTMLElement;

const startButton = document.createElement("button");
startButton.onclick = () => game.trafficLight.startCycle();
startButton.innerText = "Start";

const endButton = document.createElement("button");
endButton.onclick = () => game.trafficLight.stopCycle();
endButton.innerText = "End";
buttons.append(startButton);
buttons.append(endButton);
