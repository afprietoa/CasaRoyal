import { printCards } from "./printCards.js";

export const filterStatus = (statusList, propertyArray, cardsContainer) =>{
    statusList.forEach( status => {
        const statusOption = document.getElementById(status)
        statusOption.addEventListener('click', () => {
            const statusDatum = statusOption.id;
            const filter = propertyArray.filter(
                property => property.status == statusDatum
            );
            const filteredProperties = statusDatum === 'all' ? propertyArray : filter;     
            printCards(cardsContainer, filteredProperties);
        });
    });
};
