import "./style.css";
import GameBoard from "./GameBoard.js";

let player = new GameBoard(true);
player.render();

let enemy = new GameBoard(false);
enemy.render();