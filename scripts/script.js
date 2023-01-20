
import { getData } from "../helpers/getData.js";
import { filterStatus } from "../modules/filterStatus.js";
import { filterTypes } from "../modules/filterTypes.js";
import { getStatus } from "../modules/getSatus.js";
import { getTypes } from "../modules/getTypes.js";
import { printCards } from "../modules/printCards.js";

const URL_PROPS = 'http://localhost:3000/properties';
const URL_FAVES = 'http://localhost:3000/favorites';

const properties = [];

// --- Cards container ---
const cardsContainer = document.getElementById('cardsContainer');

// --- Search form ---
const search = document.getElementById('searchForm');


document.addEventListener('DOMContentLoaded', async () =>{

    try {
        // card printing
        const properties = await getData(URL_PROPS);
        printCards(cardsContainer, properties);

        // type filtering
        const types = getTypes(properties);
        filterTypes(types, properties, cardsContainer);

        // status filtering
        const states = getStatus(properties);
        filterStatus(states, properties, cardsContainer);
        
    } catch (error) {
        console.log(error)
    }

});

document.addEventListener('click', ({target}) => {
    // redirection to home page
    if(target.classList.contains('main-button')){
        console.log('work!')
        window.location.href = './pages/form.html';
    }

    // funcionality of go to property detail
    if(target.children[0].classList.contains('card__img')){
        sessionStorage.setItem('propertyByShow', JSON.stringify(target.children[0].id));
        location.href = "./pages/detail.html"
    }

    // functionality of delete a property
    if(target.classList.contains('card__delete')){

    }

    // functionality of update a property
    if(target.classList.contains('card__edit')){

    }

});