import styles from "./styles/styles.css";

import { addStyle } from "./js/util/util";
import Backdrop from "./js/backdrop";
import TrafficLight from "./js/traffic_light";

console.log("hello");

new Backdrop();

const root = initRoot();
const light = new TrafficLight(root, ["red", "yellow", "green"]);
const startButton = document.createElement("button");
startButton.onclick = () => light.startCycle();
startButton.innerText = "Start";

const endButton = document.createElement("button");
endButton.onclick = () => light.stopCycle();
endButton.innerText = "End";

root.append(startButton);
root.append(endButton);
light.append();

function initRoot() {
  const root = document.getElementById("root");
  addStyle(root, {
    width: "25rem",
    height: "25rem",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return root;
}
