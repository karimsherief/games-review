export default class UI {
    constructor() {
        this.loader = document.querySelector('.loader')
        this.gamesList = document.getElementById('gamesList')
        this.gameDetails = document.querySelector('.game-details')
        this.filters = document.querySelectorAll('.nav-link')
        this.indicator = document.querySelector('.indicator')
    }
    displayGames(games) {
        this.gamesList.innerHTML = ''
        games.forEach(game => {
            this.gamesList.innerHTML +=
                `<div 
                    class="col align-items-stretch game"
                    data-id="${game.id}"
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                >
                    <div class="card h-100">
                        <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}" loading="lazy"/>
                        <div class="card-body">
                            <h5 class="card-title">${game.title}</h5>
                            <p class="card-text">
                                ${game.short_description}
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="d-flex align-items-center justify-content-between flex-wrap gap-1">
                                <span class="badge bg-dark text-light">
                                    ${game.genre}
                                </span>
                                <span class="badge bg-dark text-light">
                                    ${game.platform}
                                </span>
                            </small>
                        </div>
                    </div>
                </div>`
        })
    }
    displayGameDetails({ title, platform, genre, status, description, game_url, thumbnail }) {
        this.gameDetails.innerHTML = `
            <div class="d-flex gap-3 flex-column flex-lg-row align-items-lg-start">
                <img src="${thumbnail}" alt="${title}" loading='lazy'/>
                <div class="d-flex flex-column gap-3 align-items-start">
                    <h3>Title: ${title}</h3>
                    <div class="d-flex align-items-center gap-2">
                        <h5>
                            Category:
                        </h5>
                        <small>
                            <span class="badge bg-light text-dark">${genre}</span>
                        </small>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <h5>
                            Platform:
                        </h5>
                        <small>
                            <span class="badge bg-light text-dark">${platform}</span>
                        </small>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <h5>
                        Status:
                        </h5>
                        <small>
                            <span class="badge bg-light text-dark">${status}</span>
                        </small>
                    </div>
                    <p >
                        ${description}
                    </p>
                    <a class="btn btn-outline-light" href="${game_url}" target="_blank" >
                        Show Game
                    </a>
                </div>
            </div>
    `
    }
}