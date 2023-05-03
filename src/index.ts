const s = require("./styles/styles.css");

import Game from "./js/game";
import Car from "./js/car";
import TrafficLight from "./js/traffic_light";

// Initalize in game view
const view = document.getElementById("view");
const pole = view.querySelector(".pole") as HTMLElement;
const trafficLight = new TrafficLight(pole);
const game = new Game(view, Car, trafficLight);
game.init();

// Get button control elements
const initGameButton = document.getElementById("init") as HTMLButtonElement;
const startButton = document.getElementById("light-start") as HTMLButtonElement;
const stopButtonn = document.getElementById("light-stop") as HTMLButtonElement;
const laneButton = document.getElementById("lane");
const autoButton = document.getElementById("auto") as HTMLButtonElement;
const addSlowCarButton = document.getElementById("add-slow");
const addMediumCarButton = document.getElementById("add-medium");
const addFastCarButton = document.getElementById("add-fast");
const infoButton = document.getElementById("info") as HTMLButtonElement;

// Initalize stop button state
stopButtonn.disabled = true;

// Add event listeners
initGameButton.onclick = () => {
  const modal = document.getElementById("modal");
  document.getElementById("init").remove();
  document.getElementById("buttons")?.classList.remove("hidden");
  modal.classList.add("hidden");
  view.classList.add("on");

  view.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });
};

startButton.onclick = () => {
  startButton.disabled = true;
  stopButtonn.disabled = false;
  game.startLight();
};

stopButtonn.onclick = () => {
  stopButtonn.disabled = true;
  game.stopLight();
  if (game.isLightRed()) {
    startButton.disabled = false;
  } else {
    setTimeout(() => (startButton.disabled = false), 2000);
  }
};

laneButton.onclick = () => {
  const lane = game.changeLane();
  const text = lane === 0 ? "Top" : "Bottom";
  laneButton.innerText = text;
};

autoButton.onclick = () => {
  if (autoButton.dataset.on === "on") {
    autoButton.dataset.on = "off";
    autoButton.innerText = "Auto OFF";
    game.stopAutoGen();
  } else {
    autoButton.dataset.on = "on";
    game.triggerAutoGen();
    autoButton.innerText = "Auto ON";
  }
};

infoButton.onclick = () => {
  const modal = document.getElementById("modal");
  modal.classList.toggle("hidden");
};

addSlowCarButton.onclick = () => game.addCar("slow");
addMediumCarButton.onclick = () => game.addCar("medium");
addFastCarButton.onclick = () => game.addCar("fast");

// Display game when fully set up
document.getElementById("app").style.visibility = "inherit";
