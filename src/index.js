import "./style.css";
import GameBoard from "./GameBoard.js";

class accessID {
    #id;

    constructor(id) {
        this.#id = document.getElementById(id);
    }

    getId() {
        return this.#id;
    }
}


let player = new GameBoard(true);
player.render();

let enemy = new GameBoard(false);
enemy.render();

let turn = new accessID("turns");
turn.getId().textContent = player.score + " / 15";
let random = Math.floor(Math.random() * 100);
enemy.playerGrid.addEventListener("click", function(event) {
    if((event.target.textContent !== "X") && (event.target.textContent !== "O")) {
        if(event.target.classList.contains("EnemyShip")) {
            event.target.textContent = "X";
            player.score = player.score + 1;
            turn.getId().textContent = player.score + " / 15";
            checkWinner("Player", player.score);
        } else {
            event.target.textContent = "O";
            while(player.getPlayerArr()[random].textContent == "X" || player.getPlayerArr()[random].textContent == "O") {
                random = Math.floor(Math.random() * 100);
            }
            while(player.getPlayerArr()[random].classList.contains("PlayerShips")) {
                player.getPlayerArr()[random].textContent = "X";
                enemy.score = enemy.score + 1;
                checkWinner("Enemy", enemy.score);
                random = Math.floor(Math.random() * 100);
            } if(!player.getPlayerArr()[random].classList.contains("PlayerShips")) {
                player.getPlayerArr()[random].textContent = "O";
            }
        }
    }
});

function checkWinner(name, score) {
    if(name == "Player" && score == 15) {
        window.alert("YOU WON");
    } else if(name == "Enemy" && score == 15) {
        window.alert("U LOSE");
    }
}