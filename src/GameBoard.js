export default class GameBoard{
    #isPlayer;
    #daddy;
    #playerArr = [];

    constructor(isPlayer) {
        this.#isPlayer = isPlayer;
        this.#daddy = document.getElementById("daddy");
    }

    render() {
        let playerGrid = document.createElement("div");
        this.#isPlayer ? playerGrid.classList.add("playerBoard") : playerGrid.classList.add("enemyBoard");
        this.#daddy.appendChild(playerGrid);
        for(let i = 0; i < 100; i++) {
            let ez = document.createElement("div");
            playerGrid.appendChild(ez);
            this.#playerArr.push(ez)
        }
        if(this.#isPlayer) {
            let vs = document.createElement("h1");
            this.#daddy.appendChild(vs);
            vs.textContent = "VS";
            let name = document.createElement("h1");
            playerGrid.appendChild(name);
            name.textContent = "Player";
            name.style.marginLeft = "125px";
        } else {
            let enemy = document.createElement("h1");
            playerGrid.appendChild(enemy);
            enemy.textContent = "Enemy";
            enemy.style.marginLeft = "125px";
        }
    }
}