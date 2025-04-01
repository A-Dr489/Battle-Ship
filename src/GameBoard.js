import Player from "./Player.js";

export default class GameBoard{
    playerClass;
    #daddy;
    playerGrid;
    #playerArr = [];
    score = 0;

    constructor(isPlayer) {
        this.#daddy = document.getElementById("daddy");
        this.playerClass = new Player(isPlayer);
        this.playerGrid = document.createElement("div");
    }

    getPlayerArr() {
        return this.#playerArr;
    }

    render() {
        this.playerClass.isPlayer ? this.playerGrid.classList.add("playerBoard") : this.playerGrid.classList.add("enemyBoard");
        this.#daddy.appendChild(this.playerGrid);
        for(let i = 0; i < 100; i++) {
            let ez = document.createElement("div");
            this.playerGrid.appendChild(ez);
            this.#playerArr.push(ez)
        }
        if(this.playerClass.isPlayer) {
            let vs = document.createElement("h1");
            this.#daddy.appendChild(vs);
            vs.textContent = "VS";
            let name = document.createElement("h1");
            this.playerGrid.appendChild(name);
            name.textContent = "Player";
            name.style.marginLeft = "125px";
            this.playerClass.generateShip(this.#playerArr);
        } else {
            let enemy = document.createElement("h1");
            this.playerGrid.appendChild(enemy);
            enemy.textContent = "Enemy";
            enemy.style.marginLeft = "125px";
            this.playerClass.generateShip(this.#playerArr);
        }
    }
}