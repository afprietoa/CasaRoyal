
import { getData } from "../helpers/getData.js";
import { postData } from "../helpers/postData.js";
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

    sessionStorage.removeItem('propertyByUpdate');
    sessionStorage.removeItem('propertyByShow');

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

document.addEventListener('click', async ({target}) => {
    // redirection to home page
    if(target.classList.contains('main-button')){
        window.location.href = './pages/form.html';
    }

    // funcionality to go to property's detail
    if(target.children[0].classList.contains('card__img')){
        sessionStorage.setItem('propertyByShow', JSON.stringify(target.children[0].id));
        location.href = "./pages/detail.html"
    }

    // functionality to delete a property
    if(target.classList.contains('card__delete')){
        Swal.fire({
            title: "Do you sure to delete this property?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#D33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) =>{
            if(result.isConfirmed){
                Swal.fire("Deleted!", "You file has been deleted", "success");
                const propertyId = parseInt(target.name);
                const URL_PROP = `${URL_PROPS}/${propertyId}`

                try {
                    await deleteData(URL_PROP);
                    properties = await getData(URL_PROPS);
                    printCards(cardsContainer, properties);
                } catch (error) {
                    console.log('There is an error, could not delete!' + error);
                }
            }
        })

    }

    // functionality to update a property
    if(target.classList.contains('card__edit')){
        sessionStorage.setItem('propertyByUpdate', JSON.stringify(target.name));
        location.href = "./pages/form.html"
    }

    // functionality to add a property
    if(target.classList.contains('card__favorite')){
        const favoriteId = target.name;
        // the favorite property is gotten in favoritesURL
        const URL_PROP = `${URL_FAVES}?ID=${favoriteId}`
        const favoriteFaves = await getData(URL_PROP);

        // the favorite property is gotten in propertiesURL
        const URL_FAVE = `${URL_PROPS}?id=${favoriteId}`
        const favoriteProps = await getData(URL_FAVE);
        
        if(favoriteFaves.length === 0 && 
            Object.entries(favoriteProps).length){

                await postData(URL_FAVES, favoriteProps[0])
                const favoriteData = await getData(URL_FAVES);
            }
    }
});

// It is should to listen the submit event to search a character
search.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchTerm = document.getElementById('searchBar').value;

    if(searchTerm){
        const properties = await getData(URL_PROPS);
        const filteredProperties = properties.filter( 
            property => property.city.toLowerCase().includes(searchTerm.toLowerCase())
        )
        printCards(cardsContainer, filteredProperties)
    }else{
        Swal.fire("Invalid search!", "There isn't search tem typed", "question");
    }
})