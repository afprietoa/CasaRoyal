import { getData } from "../helpers/getData.js";
import { printCards } from "../modules/printCards.js";

const URL_FAVES = 'http://localhost:3000/favorites';
const container = document.getElementById('favoriteContainer');



document.addEventListener('DOMContentLoaded', async () => {
    const favorites = await getData(URL_FAVES);
    console.log(favorites);
    printCards(container, favorites)
    const controllers = document.querySelectorAll('.pos-contrs');
    const likeIcons = document.querySelectorAll('.card__favorite')
    controllers.forEach(control => control.style.display = 'none');
    likeIcons.forEach(icon => icon.style.display = 'none');  
})