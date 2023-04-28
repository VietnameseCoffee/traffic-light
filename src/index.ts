const s = require("./styles/styles.css");

import Game from "./js/game";
import Car from "./js/car";
import TrafficLight from "./js/traffic_light";

const app = document.getElementById("app");
const pole = app.querySelector(".pole") as HTMLElement;

const trafficLight = new TrafficLight(pole);
const game = new Game(app, Car, trafficLight);

game.start();

const startButton = document.getElementById("start") as HTMLButtonElement;
startButton.onclick = () => {
  startButton.disabled = true;
  endButton.disabled = false;
  game.trafficLight.startCycle();
};

const endButton = document.getElementById("end") as HTMLButtonElement;
endButton.onclick = () => {
  endButton.disabled = true;
  game.trafficLight.stopCycle();
  setTimeout(() => (startButton.disabled = false), 2050);
};
endButton.disabled = true;

const laneButton = document.getElementById("lane");
laneButton.onclick = () => {
  const lane = game.changeLane();
  laneButton.innerText = `Lane ${lane + 1}`;
};

const addSlowCarButton = document.getElementById("add-slow");
addSlowCarButton.onclick = () => game.addCar("slow");

const addMediumCarButton = document.getElementById("add-medium");
addMediumCarButton.onclick = () => game.addCar("medium");

const addFastCarButton = document.getElementById("add-fast");
addFastCarButton.onclick = () => game.addCar("fast");
