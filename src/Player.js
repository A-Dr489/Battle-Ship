export default class Player {
    #numOfShips;
    isPlayer;

    constructor(isPlayer) {
        this.isPlayer = isPlayer;
        this.#numOfShips = 15;
    }

    generateShip(div) {
        let random = 0;
        if(this.isPlayer) {
            for(let i = 0; i < this.#numOfShips; i++) {
                random = Math.floor(Math.random() * 100);
                if(!div[random].classList.contains("PlayerShips")) {
                    div[random].classList.add("PlayerShips");
                } else {
                    i = i - 1;
                }
            }
        } else {
            for(let i = 0; i < this.#numOfShips; i++) {
                random = Math.floor(Math.random() * 100);
                if(!div[random].classList.contains("EnemyShip")) {
                    div[random].classList.add("EnemyShip");
                } else {
                    i = i - 1;
                }
            }
        }
    }
}