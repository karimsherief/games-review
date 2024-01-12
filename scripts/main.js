import Games from "./games.module.js";

export const API = "https://free-to-play-games-database.p.rapidapi.com/api";
export const headers = {
    "X-RapidAPI-Key": "b7221a796bmshe01f5aaf76f440fp1e3415jsn99f4640ca022",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
};

new Games()
