import { printCards } from "./printCards.js";

export const filterTypes = (typesList, propertiesArray, cardsContainer) =>{

    typesList.forEach( type =>{
        console.log(type)
        const typeOption = document.getElementById(type);
        console.log(typeOption)
        typeOption.addEventListener('click', () => {
            const typeDatum = typeOption.id;
            const filteredProperties = propertiesArray.filter( 
                property => property.type == typeDatum
            );
            
            printCards(cardsContainer, filteredProperties);
        });
    });
};