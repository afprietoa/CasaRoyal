import { getData } from "../helpers/getData.js";
import { printCards } from "../modules/printCards.js";

const URL_FAVES = 'http://localhost:3000/favorites';
const container = document.createElement('favoriteContainer');

document.addEventListener('DOMContentLoaded', async () => {
    const favorites = await getData(URL_FAVES);
    printCards(container, favorites)
})