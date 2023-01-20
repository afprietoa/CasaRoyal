import { printCards } from "./printCards.js";

export const filterTypes = (typesList, propertyArray, cardsContainer) =>{
    typesList.forEach( type =>{
        const typeOption = document.getElementById(type);
        typeOption.addEventListener('click', () => {
            const typeDatum = typeOption.id;
            const filter = propertyArray.filter( 
                property => property.type == typeDatum
            );
            const filteredProperties = typeDatum === 'all' ? propertyArray : filter; 
            printCards(cardsContainer, filteredProperties);
        });
    });
};