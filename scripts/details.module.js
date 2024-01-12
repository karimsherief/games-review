import { API, headers } from "./main.js";
import UI from "./ui.module.js";

export default class Details {
    constructor() {
        this.ui = new UI()
    }
    async getGameDetails(gameId) {

        this.ui.loader.classList.remove('hide')
        this.ui.gameDetails.innerHTML = ''

        const res = await fetch(`${API}/game?id=${gameId}`, {
            headers
        });

        const data = await res.json();

        this.ui.loader.classList.add('hide')
        

        this.ui.displayGameDetails(data)
    }
}