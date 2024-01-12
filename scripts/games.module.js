import { API, headers } from "./main.js";
import UI from "./ui.module.js";
import Details from "./details.module.js";

export default class Games {
    constructor() {
        this.ui = new UI()
        this.listGames("mmorpg")
        this.setFilters()
        this.details = new Details()
    }
    async listGames(categroy) {
        this.ui.loader.classList.remove('hide')
        try {
            const res = await fetch(`${API}/games?category=${categroy}`, {
                headers
            });

            const data = await res.json();

            this.ui.displayGames(data)
            this.addEvents()
        } catch {
            this.ui.gamesList.innerHTML = `<p class="text-danger">Error try again later</p>`
        } finally {
            this.ui.loader.classList.add('hide')
        }
    }
    addEvents() {
        const games = document.querySelectorAll('.game')
        games.forEach(game => {
            game.addEventListener('click', (e) => {
                this.details.getGameDetails(game.dataset.id)
            })
        })
    }
    setFilters() {
        this.ui.filters.forEach(filter => {
            filter.addEventListener('click', () => {
                this.ui.filters.forEach(filter => filter.classList.remove('active'))
                filter.classList.add('active')
                let index = Array.from(this.ui.filters).indexOf(filter)
                let width = parseInt(getComputedStyle(filter).getPropertyValue('width'))
                let left = parseInt(getComputedStyle(this.ui.indicator).getPropertyValue('--left'));
                this.ui.indicator.style.left = `${left + (width > 50 ? 50 : width) * index}px`
                this.listGames(filter.dataset.category)
            })
        })
    }
}