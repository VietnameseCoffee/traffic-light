const s = require("./styles/styles.css");

import Game from "./js/game";
import Car from "./js/car";
import TrafficLight from "./js/traffic_light";

const app = document.getElementById("app");
const pole = app.querySelector(".pole") as HTMLElement;

const trafficLight = new TrafficLight(pole);
const game = new Game(app, Car, trafficLight);

game.start();

const initGameButton = document.getElementById("init") as HTMLButtonElement;
const startButton = document.getElementById("light-start") as HTMLButtonElement;
const stopButtonn = document.getElementById("light-stop") as HTMLButtonElement;
const laneButton = document.getElementById("lane");
const addSlowCarButton = document.getElementById("add-slow");
const addMediumCarButton = document.getElementById("add-medium");
const addFastCarButton = document.getElementById("add-fast");

stopButtonn.disabled = true;

initGameButton.onclick = () => {
  const modal = document.getElementById("modal");
  const buttons = document.querySelector(".hidden")?.classList.remove("hidden");
  modal.remove();
  app.classList.add("on");
};

startButton.onclick = () => {
  startButton.disabled = true;
  stopButtonn.disabled = false;
  game.trafficLight.startCycle();
};
stopButtonn.onclick = () => {
  stopButtonn.disabled = true;
  game.trafficLight.stopCycle();
  setTimeout(() => (startButton.disabled = false), 2050);
};
laneButton.onclick = () => {
  const lane = game.changeLane();
  laneButton.innerText = `Lane ${lane + 1}`;
};

addSlowCarButton.onclick = () => game.addCar("slow");
addMediumCarButton.onclick = () => game.addCar("medium");
addFastCarButton.onclick = () => game.addCar("fast");
